import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

const falaa=[
    {
        discount:'-9%',
        image:'/falaa1.jpg',
        details:'Legacy LGYCF-200H Chest Freezer',
        price:' 3,180.96',
        canceled:'3,500.00'
      },
       {
        discount:'-14%',
        image:'/falaa2.jpg',
        details:'Syinix 1200W Automatic Rice cooker',
        price:' 708.49',
        canceled:'825.00'
      },   {
        discount:'-42%',
        image:'/falaa3.jpg',
        details:'Apple iPhone X -256GB Unlocked',
        price:'3,900.00 ',
        canceled:'6700.00'
      },   {
        discount:'-44%',
        image:'/falaa4.jpg',
        details:'Tip Athletic Unisex Sneaker Black',
        price:'55.80 ',
        canceled:'100.00'
      },   {
        discount:'-17%',
        image:'/falaa5.jpg',
        details:'Asano Energy Saving Table Top Fridge',
        price:' 1,449.00',
        canceled:'1,750.00'
      },   {
        discount:'-40%',
        image:'/falaa6.jpg',
        details:'Apple iPhone 14 Pro MAX 256GB',
        price:'20,999.00 ',
        canceled:'35,000.00'
      },  
    //    {
    //     discount:'-%',
    //     image:'/',
    //     details:'',
    //     price:' ',
    //     canceled:''
    //   },
]

const Falaa = () => {
  return (
    <div className='max-w-screen-xl mx-auto bg-white   shadow-lg relative pb-3 '>
    <div className='flex justify-between  items-center bg-[#276076] rounded-t-lg text-white'>
      <p className=' py-2 px-3 text-2xl font-medium'>Faalaa Deals | Get up to 40% off </p>
      <div className='flex justify-center items-center px-3'>
      <p className='text-2xl font-medium  py-2 px-3'>See All</p>
      <FontAwesomeIcon icon={faAngleRight} height={20} width={20} color='white' />
      </div>
   
    </div>
    <div className='flex px-5 group '>

    {falaa.map((item,index)=>(
      <div key={index} className='hover:shadow-lg px-2 pt-3 pb-8 w-52 hover:scale-105'>
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

export default Falaa