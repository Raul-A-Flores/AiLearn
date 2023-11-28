import CreateCourseForm from '@/components/CreateCourseForm'
import { getAuthSession } from '@/lib/auth'
import { checkSubscription } from '@/lib/subscription'
import { InfoIcon } from 'lucide-react'
import { redirect } from 'next/navigation'
import React from 'react'

type Props = {}

const CreatePage =  async (props: Props) => {

  const session = await getAuthSession()
  if (!session?.user){

    return redirect('/gallery')
  }

  const isPro = await checkSubscription()

  return (
    <div className='flex flex-col itesm-start max-w-xl px-8 mx-auto my-16 sm:px-0'>
      <h1 className='self-center text-3xl font-bold text-center sm:text-6xl'>
        AiLearn
      </h1>
      <div className='flex p-4 border-none bg-secondary mt-5'>
        <InfoIcon className='w-12 h-12 mr-3 text-blue-400'/>
        <div>
          Enter in a course title, or a topic you would like to learn about. Then enter a list of subtopics that you would like to learn more about. AiLearn will generate a course for you about your topic and subtopics with youtube videos. 
        </div>
      </div>
      <CreateCourseForm isPro={isPro}/>
    </div>
  )
}

export default CreatePage