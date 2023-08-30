import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Banner = () => {
  return (
    <div className='max-w-screen-xl mx-auto bg-white  shadow-lg p-2 flex space-x-3'>
    <div className='relative w-full h-[270px] hover:scale-105'>
    <Link href='/half-price-store'>
    <Image src='/banner1.jpg' fill alt='promo'/>
    </Link>
       
        
    </div>

  
    <div className='relative w-full h-[270px] hover:scale-105'>
    <Link href='/mobile-accessories'>
    <Image src='/banner2.jpg' fill alt='promo'/>
    </Link>

        
    </div>
    </div>
  )
}

export default Banner