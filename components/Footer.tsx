import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className=' bg-[#535357]'>
        {/* first */}
        <div className='bg-[#313133]'>
        <div className='flex justify-between  py-7 max-w-screen-xl mx-auto' >
            {/* top */}
            <div>
            <Image src='/jumia.svg' width={200} height={300} alt='Logo' className=''/>
            </div>

            {/* middle */}
            <div className='flex-col text-white'>
                <p>New to Jumia</p>
                <p>Subscribe to our newsletter to get updates on our latest offers!</p>
                <div className='flex space-x-2 items-center'>
                    <input type='text' className='h-10 w-96'/>
                    <p className='border border-white flex items-center px-5 py-3 rounded-lg'>Male</p>
                    <p className='border border-white flex items-center px-5 py-3 rounded-lg'>Female</p>
                </div>
            </div>
{/* 
            last */}
            <div>
                <div className='flex text-white space-x-2'>
<Image src='/JMIA.svg' width={40} height={40} alt='star'/>
<div>
    <p className='font-bold'>DOWNLOAD JUMIA FREE APP</p>
    <p className='text-sm'>Get access to exclusive offers!</p>
</div>
                </div>
                <div className='flex space-x-3 -my-10'>
                <Image src='/apple.svg' width={150} height={40} alt='star'/>
                <Image src='/google.svg' width={150} height={40} alt='star'/>
                    
                </div>
            </div>

        </div>
        </div>
      

        {/* second */}
        <div className='max-w-screen-xl mx-auto flex justify-between text-white py-5'>

<div>need</div>
<div>about</div>
<div>make</div>
<div>jumia</div>

            
        </div>
    </div>
  )
}

export default Footer