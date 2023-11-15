'use client'

import { cn } from '@/lib/utils'
import { Chapter } from '@prisma/client'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import React, { useState } from 'react'

type Props = {
    chapter: Chapter
    chapterIndex: number
};

export type ChapterCardHandler ={
    triggerLoad: () => void;
}


const ChapterCard = React.forwardRef<ChapterCardHandler, Props>(
    ({chapter, chapterIndex}, ref) => {


    React.useImperativeHandle(ref, ()=>({
        async triggerLoad(){
            getChatperInfo(undefined),{
                onSuccess: () =>{
                    console.log('success')
                }
            }
        }
    }))
    const [success, setSuccess] = useState(null)

    const { mutate: getChatperInfo, isPending } = useMutation({
        mutationFn: async() =>{
            const response = await axios.post(`/api/chapter/getInfo`)
            return response.data
        }
    })

  return (
    <div key={chapter.id} className={
        cn('bg-seconday px-4 py-2 mt-2 rounded flex justify-between',
         {'bg-secondary': success === null,
         'bg-red-500': success === false, 
         'bg-}green-500': success === true, 
        }
         )
    }>
        <h5>Chapter {chapterIndex +1} {chapter.name}</h5>
        
    </div>
  )
})

ChapterCard.displayName = 'ChapterCard';

export default ChapterCard