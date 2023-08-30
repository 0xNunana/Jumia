import Image from 'next/image'
import React from 'react'

const marketplaceCategories = [
    'Electronics',
    'Fashion',
    'Home & Living',
    'Beauty & Health',
    'Phones & Tablets',
    'Computing',
    'Sports & Fitness',
    'Books & Stationery',
    'Toys & Games',
    'Groceries',
    'Furniture',
    'Jewelry & Watches',
  ];
  
  const third =[
    {
        icon:'/phone-icon.png',
        title:'CALL TO ORDER',
        details:'030 275 0642'
    },
    {
        icon:'/contact-us.png',
        title:'TRACK YOUR ORDER',
        details:'Stay up to date'
    },
    {
        icon:'/sell.png',
        title:'SELL ON JUMIA',
        details:'030 275 0642'
    },
  ]
  
  // Define your icon components here...
  
const Filter = () => {
  return (
    <div className='flex justify-between space-x-5 py-3'>
        <div className='bg-white w-56'>
{marketplaceCategories.map((item,index)=>(
    <div key={index}>
        
        <p className='flex px-3 py-2 hover:text-[#f68b1e] text-sm'>{item}</p>
    </div>
))}
        </div>
        <div className='flex-1 relative'>
            <Image src='/1.jpg' fill alt='ads'/>
        </div>
        <div className=' w-56 space-y-3'>
            <div className='bg-white'> {third.map((item,index)=>(
                <div key={index} className='px-3 py-3 flex space-x-2 bg-white rounded-md items-center'>
                   <Image src={item.icon} height={35} width={35} alt={`icons ${index}`}/>
                    <div>
                        <p>{item.title}</p>
                        <p className='text-sm py-0'>{item.details}</p>
                    </div>
                </div>
            ))}</div>
           
            <div className='relative bg-white h-[50%]'>
                <Image src='/ad2.png' fill alt='ad'/>
            </div>

        </div>
    </div>
  )
}

export default Filter