import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Nav() {

    const links = [
        {
            name: 'Home',
            href: '/',
        },
        {
            name: 'About',
            href: '/about',
        },
        {
            name: 'Predict',
            href: '/predict'
        },
        {
            name: 'Contact',
            href: '/contact',
        },
    ]

  return (
    <div className='flex items-center justify-between p-4 bg-background text-white'>
        <div className='flex items-center gap-4'>
            <Image src='/images/logo.jpg' alt='logo' width={50} height={50} />
        </div>
        <div className='flex items-center gap-10 justify-center w-full'>
            {links.map((link) => (
                    
                    <Link href={link.href} key={link.href} >{link.name}</Link>
            ))}
        </div>
    </div>
  )
}
