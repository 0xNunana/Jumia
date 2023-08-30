import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

const payday=[
    {
        discount:'-41%',
        image:'/pay1.jpg',
        details:'Unitek UKTL-518068 Electric kettle',
        price:' 105.55',
        canceled:'180.00'
      },
      {
        discount:'-39%',
        image:'/clipper.jpg',
        details:'Nova Portable Hair Trimmer',
        price:'47.94',
        canceled:'78.00'
      }, {
        discount:'-37%',
        image:'/pay3.jpg',
        details:'Unitek UBL-1.5L-0-Y44',
        price:'195.28 ',
        canceled:'310.00'
      }, {
        discount:'-24%',
        image:'/pay4.jpg',
        details:'Comfortable Fashion Hoodie',
        price:'87.88 ',
        canceled:'116.00'
      }, {
        discount:'-53%',
        image:'/pay5.jpg',
        details:'USB Portable Crossbody bag',
        price:' 51.80',
        canceled:'110.00'
      }, {
        discount:'-49%',
        image:'/pay6.jpg',
        details:'Hikers 43" Digital Frameless T.V',
        price:' 1,749.00',
        canceled:'3,429.00'
      },
]

const Payday = () => {
  return (
    <div className='max-w-screen-xl mx-auto bg-white   shadow-lg relative '>
    <div className='flex justify-between  items-center bg-[#276076] rounded-t-lg text-white'>
      <p className=' py-2 px-3 text-2xl font-medium'>Payday Sale | Up to 45% off </p>
      <div className='flex justify-center items-center px-3'>
      <p className='text-2xl font-medium  py-2 px-3'>See All</p>
      <FontAwesomeIcon icon={faAngleRight} height={20} width={20} color='white' />
      </div>
   
    </div>
    <div className='flex px-5 group '>

    {payday.map((item,index)=>(
      <div key={index} className='hover:shadow-lg p-2 w-52 hover:scale-105'>
        <div className='relative h-[200px] w-[200px]'>
        <Image src={item.image} height={200} width={200} alt={`top ${index}`}/>
        <div className='absolute right-0 top-1  text-[#f68b1e] bg-[#fef3e9] p-1 '>{item.discount}</div>
        </div>
        <p className='truncate text-ellipsis'>{item.details}</p>
        <p className='text-xl'>GHC{item.price}</p>
        <p className='line-through text-gray-500 text-sm'>GHC{item.canceled}</p>
  

      </div>
    ))}

    </div>
    <div className=' absolute top-36 right-2 rounded-full h-12 w-12 bg-black/30 flex items-center justify-center'>
   <FontAwesomeIcon icon={faAngleRight} height={20} width={20} color='white' />
   </div>

  </div>
  )
}

export default Payday