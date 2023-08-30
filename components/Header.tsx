import Image from 'next/image'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faCircleQuestion,faCartShopping,faMagnifyingGlass,faAngleDown } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <div className='bg-white sticky top-1 z-30'>
  <div className=' flex items-center max-w-screen-xl mx-auto justify-between'>
    <div className=' flex items-center h-20 mr-7'>
    <Image src='/logo.svg' width={200} height={300} alt='Logo' className=''/>
    </div>

<div className='flex space-x-5'>
    <div className='flex items-center border-black/30 border rounded-md px-2 space-x-3'>
    <FontAwesomeIcon icon={faMagnifyingGlass} height={25} width={25} />
    <input type='text' className='min-w-[500px]' placeholder='Search products, brands and categories'/>
    </div>
 
    <div className='bg-[#f68b1e] text-white px-4 py-2 rounded-lg'>SEARCH</div>
</div>
<div className='flex space-x-5 px-4'>
    <div className='flex items-center space-x-2'>
    <FontAwesomeIcon icon={faUser} height={25} width={25} />
        <p>Account</p>
        <FontAwesomeIcon icon={faAngleDown} height={20} width={20} />
    </div>
    <div className='flex items-center space-x-2'>
        <FontAwesomeIcon icon={faCircleQuestion} height={25} width={25}/>
        
        <p>Help</p>
    </div>
    <div className='flex items-center space-x-2'>
    <FontAwesomeIcon icon={faCartShopping} height={25} width={25} />
        <p>Cart</p>
    </div>
</div>

    </div>
    </div>
  
  )
}

export default Header