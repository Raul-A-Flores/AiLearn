'use client'

import { cn } from '@/lib/utils'
import { Chapter } from '@prisma/client'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import React, { useState } from 'react'
import { useToast } from './ui/use-toast'
import { error } from 'console'

type Props = {
    chapter: Chapter
    chapterIndex: number
};

export type ChapterCardHandler ={
    triggerLoad: () => void;
}


const ChapterCard = React.forwardRef<ChapterCardHandler, Props>(
  ({chapter, chapterIndex}, ref) => {
      
      const [success, setSuccess] = React.useState<boolean | null>(null)
      const { toast } = useToast()
      
      React.useImperativeHandle(ref, () =>({
        async triggerLoad(){
          getChapterInfo(undefined, {
            onSuccess: ()=>{
              setSuccess(true)
            },
            onError: (error)=>{
              console.error(error)
              setSuccess(false)
              toast({
                title: 'error',
                description: 'Something went wrong',
                variant: 'destructive'
            })
            }

          })
            }
        }))


        const { mutate: getChapterInfo, isPending } = useMutation({
            mutationFn: async() =>{
                const response = await axios.post('/api/chapter/getInfo', {
                    chapterId: chapter.id,
                  });
                  return response.data;
            }
        })

  return (
    <div key={chapter.id} className={
        cn('bg-seconday px-4 py-2 mt-2 rounded flex justify-between',
         {'bg-secondary': success === null,
         'bg-red-500': success === false, 
         'bg-green-500': success === true, 
        }
         )
    }>
        <h5>{chapter.name}</h5>
        
    </div>
  )
})

ChapterCard.displayName = 'ChapterCard';

export default ChapterCard