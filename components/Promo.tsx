import Image from 'next/image'
import React from 'react'

const Promo = () => {
  return (
    <div className='max-w-screen-xl mx-auto bg-white  shadow-lg p-2 '>
        <div className='relative w-full h-[270px]'>
            <Image src='/promo.jpg' fill alt='promo'/>
        </div>
   
    </div>
  )
}

export default Promo