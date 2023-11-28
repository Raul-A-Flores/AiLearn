import SubscriptionButton from '@/components/SubscriptionButton'
import { checkSubscription } from '@/lib/subscription'
import React from 'react'

type Props = {}

const SettingsPage = async(props: Props) => {
  
  const isPro = await checkSubscription()
  console.log( isPro , " Is Pro ")
  return (
    <div className='py-8 mx-auto max-w-7xl'>
      <h1 className='text-3xl font-bold'>Settings</h1>
    {isPro?(
      <div className='mb-5'>
          <p className='text-xl text-secondary-foreground/60 mt-5'>Congratuations, you are a pro user!</p>
          <br />
          <p>Manage your subscription by clicking the button below.</p>
      </div>
    ) :(
      <div>
        <p className='text-xl text-secondary-foreground/60 mt-5 '>You are a free user!</p>
        <br />
        <p>Click the button below to upgrade your subscription to Pro!</p>
      </div>
    )}

      <SubscriptionButton  isPro={isPro}/>
    </div>
  )
}

export default SettingsPage