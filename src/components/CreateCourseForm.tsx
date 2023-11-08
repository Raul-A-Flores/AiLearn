'use client'

import React from 'react'
import { Form, FormControl, FormField, FormItem, FormLabel } from './ui/form'
import { createChapterSchema } from '@/validators/course'
import { useForm } from 'react-hook-form'
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from './ui/input'

type Props = {}

type Input = z.infer<typeof createChapterSchema>

const CreateCourseForm = (props: Props) => {

    const form = useForm<Input>({
        resolver: zodResolver(createChapterSchema),
        defaultValues:{
            title: '',
            units: ['', '', '']
        }
    });

    function onSubmit(data: Input){
        console.log(data);
    }

    form.watch();

    return (
    <div className='w-full'>
        <Form{...form}>
            <form  className='w-full mt-4' onSubmit={form.handleSubmit(onSubmit)}>
                <FormField 
                    control={form.control}
                    name='title'

                    render={({field})=>{
                        return (
                        <FormItem className='flex flex-col items-start w-full sm:items-center sm:flex-row'>
                            <FormLabel className='flex-[1]' text-xl>
                                Title

                            </FormLabel>
                            <FormControl className='flex-[6]'>
                                <Input
                                    placeholder='Enter the main topic of the couse'
                                    {...field}
                                    >
                                </Input>

                            </FormControl>

                        </FormItem>)
                    }}
                />

                {form.watch('units').map(( _, index) => {
                    return(
                        <FormField
                        key={index}
                            control={form.control}
                            name={`units.${index}`}
                            render={({field})=>{
                                return(
                                    <FormItem className='flex flex-col items-start w-full sm:items-center sm:flex-row'>
                                        <FormLabel className='flex-[1] text-xl'>
                                            Unit { index + 1 }
                                        </FormLabel>
                                        <FormControl className='flex-[6]'>
                                            <Input 
                                                placeholder='Enter subtopic of the course'
                                                {...field}
                                                />

                                        </FormControl>
                                    
                                    </FormItem>
                                )
                            }}
                            >

                        </FormField>
                    )
                })}

            </form>
        </Form>

    </div>
  )
}

export default CreateCourseForm