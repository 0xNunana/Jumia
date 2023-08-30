import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const allneeds=[
    {image:'/need1.png',
    name:'Phones & Accessories',
    link:'/phone-tablets' 
    },
    {
        image:'/need2.png',
        name:'Electronics',
        link:'/electronics'
    },
    {
        image:'/need3.png',
        name:'Appliances',
        link:'/home-office-appliances'
    },
    {
        image:'/need4.png',
        name:'Computing',
        link:'/computing'
    },
    {
        image:'/need5.png',
        name:'Beauty',
        link:'/health-beauty'
    },
 
   
    {
        image:'/need6.png',
        name:'Fashion',
        link:'/fashion' 
    },
   
]

const Allneeds = () => {
  return (
    <div className='max-w-screen-xl mx-auto bg-white  shadow-lg'>
    <div className='flex justify-center items-center bg-[#276076] rounded-t-lg'>
      <p className='text-white py-2 text-2xl font-medium'>We've got all your needs covered </p>
    </div>
{/* images */}
    <div className='flex justify-around items-center py-2'>
      {allneeds.map((item,index)=>(
        <Link href={item.link}>
          <div key={index} className='hover:scale-105' >
          <Image height={200} width={200} src={item.image} alt='deals'/>
        </div></Link>
      
      ))}

    </div>
    </div>
  )
}

export default Allneeds