import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

const cards = [
    {image:'/Phones.png',
name:'Phones',
link:'/phone-tablets' 
},{
    image:'/Half-Price.png',
    name:'Half Price Store',
    link:'/half-price-store' 
},
{
    image:'/Fashion.png',
    name:'Fashion',
    link:'/fashion' 
},
{
    image:'/JForce.png',
    name:'J Force',
    link:'/jforce'
},
{
    image:'/Mobile.png',
    name:'Mobile Accessories',
    link:'/mobile-accessories'
},{
    image:'/Computing.png',
    name:'Computing',
    link:'/computing'
},{
    image:'/Home_Appliances.png',
    name:'Appliances',
    link:'/home-office-appliances'
},{
    image:'/Electronics.png',
    name:'Electronics',
    link:'/electronics'
},
]


const Card1 = () => {
  return (
    <div className='max-w-screen-xl mx-auto bg-white rounded-md h-48 flex items-center relative shadow-lg'>
        <div className='flex justify-around items-center w-full py-2 px-16'>
        {cards.map((item,index)=>(
            <div key={index} className=''>
                <Link href= {item.link}>
                <Image src={item.image} height={130} width={130} alt={`nav ${index}`}/>
<p className='text-center py-1'>{item.name}</p>
                </Link>

            </div>
        ))}
        </div>
     <div className='absolute top-20 right-2 rounded-full h-12 w-12 bg-black/30 flex items-center justify-center'>
     <FontAwesomeIcon icon={faAngleRight} height={20} width={20} color='white' />
     </div>
     <div className='absolute top-20 left-2 rounded-full h-12 w-12 bg-black/30 flex items-center justify-center'>
     <FontAwesomeIcon icon={faAngleLeft} height={20} width={20} color='white' />
     </div>

    </div>
  )
}

export default Card1