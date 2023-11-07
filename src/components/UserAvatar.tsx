
import { Avatar } from '@radix-ui/react-avatar'
import { User } from 'next-auth'
import React from 'react'
import { AvatarFallback } from './ui/avatar';
import Image from 'next/image'

type Props = {
    user: User
}

const UserAvatar = ({user}: Props) => {
  return (
    <Avatar>
        {user.image ? (
            <div>
                <div className='relative w-full h-full aspect-square'>
                    <Image  src={user.image} alt='user profile' referrerPolicy='no-referrer' height={25} width={25} />
                </div>

            </div>
        ) : <AvatarFallback>
                <span className='sr-only'>{user?.name}</span>
            </AvatarFallback>}
    </Avatar>
  )
}

export default UserAvatar