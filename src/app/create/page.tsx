import CreateCourseForm from '@/components/CreateCourseForm'
import { getAuthSession } from '@/lib/auth'
import { InfoIcon } from 'lucide-react'
import { redirect } from 'next/navigation'
import React from 'react'

type Props = {}

const CreatePage =  async (props: Props) => {

  const session = await getAuthSession()
  if (!session?.user){

    return redirect('/gallery')
  }
  return (
    <div className='flex flex-col itesm-start max-w-xl px-8 mx-auto my-16 sm:px-0'>
      <h1 className='self-center text-3xl font-bold text-center sm:text-6xl'>
        Learning Journey
      </h1>
      <div className='flex p-4 border-none bg-secondary mt-5'>
        <InfoIcon className='w-12 h-12 mr-3 text-blue-400'/>
        <div>
          Enter in a course titlle, or what you want to learn about. Then enter a list of units, which are the specifics you want to learn. Our AI will generate a course for you. 
        </div>
      </div>
      <CreateCourseForm />
    </div>
  )
}

export default CreatePage