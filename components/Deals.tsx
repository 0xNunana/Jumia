import Image from 'next/image'
import React from 'react'


const deals =[
  '/deal1.jpg','/deal2.jpg',
  '/deal3.jpg',
  '/deal4.jpg',
  '/deal5.png', '/deal6.jpg'
]

const Deals = () => {
  return (
    <div className='max-w-screen-xl mx-auto bg-white  shadow-lg'>
    <div className='flex justify-center items-center bg-[#276076] rounded-t-lg'>
      <p className='text-white py-2 text-2xl font-medium'>Don't Miss the Awesome Deals </p>
    </div>
{/* images */}
    <div className='flex justify-around items-center py-2'>
      {deals.map((item,index)=>(
        <div key={index} className='hover:scale-105' >
          <Image height={200} width={200} src={item} alt='deals'/>
        </div>
      ))}

    </div>
    </div>
  )
}

export default Deals