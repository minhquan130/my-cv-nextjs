import React from 'react'
import AvatarPicture from '../../../../public/images/avatar.jpg'
import Image from 'next/image'

export default function Header() {
  return (
    <header className='bg-primary h-60 w-screen'>
        <div>
            <Image src={AvatarPicture} alt='avatar' width={500} />
        </div>
    </header>
  )
}
