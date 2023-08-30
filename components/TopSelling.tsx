import Image from 'next/image'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

const top =[
  {
    discount:'-16%',
    image:'/bag.jpg',
    details:'3 in 1 Multi Functional Bag ',
    price:' 84.00',
    canceled:'100.00'
  },
  {
    discount:'-48%',
    image:'/necklace.jpg',
    details:'1 Pair Couple necklace',
    price:'14.00',
    canceled:'27.00'
  }, {
    discount:'-39%',
    image:'/clipper.jpg',
    details:'Nova Portable Hair Trimmer',
    price:'47.94',
    canceled:'78.00'
  }, {
    discount:'-53%',
    image:'/watch1.jpg',
    details:'fashion Quartz Watch For women',
    price:'37.93',
    canceled:'80'
  }, {
    discount:'-49%',
    image:'/watch2.jpg',
    details:'Fashion Men Round Submersible Watch',
    price:'26.00',
    canceled:'51.00'
  }, {
    discount:'-53%',
    image:'/pendrive.jpg',
    details:'128GB OTG USB FLASH DRIVE',
    price:'61.98',
    canceled:'131.00'
  }

]

const TopSelling = () => {
  return (
    <div className='max-w-screen-xl mx-auto bg-white  p-2 shadow-lg relative '>
      <p className=' text-xl font-medium'>Top selling items</p>
      <div className='flex px-5 group'>

      {top.map((item,index)=>(
        <div key={index} className='hover:shadow-lg p-2 w-52'>
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

export default TopSelling