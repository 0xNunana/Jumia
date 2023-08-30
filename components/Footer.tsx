import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF,faInstagram,faTwitter,faCcVisa,faCcMastercard } from '@fortawesome/free-brands-svg-icons'
import { faHandHoldingDollar } from '@fortawesome/free-solid-svg-icons'
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
        <div className='max-w-screen-xl mx-auto   text-white py-5'>

<div className='flex justify-between'>
    <div>
        <div>
        <p className='font-medium  py-4'>NEED HELP?</p>
        <p className='text-sm'>Chat with us</p>
        <p className='text-sm'>Help center</p>
        <p className='text-sm'>Contact us</p>
        </div>
        <div>
        <p className='font-medium  py-4'>USEFUL LINKS</p>
        <p className='text-sm'>How to buy on Jumia</p>
        <p className='text-sm'>Delivery timelines and fees</p>
        <p className='text-sm'>How to return a product on Jumia</p>
        <p className='text-sm'>Corporate and Bulk Purchases</p>
        <p className='text-sm'>Report a Product</p>
        <p className='text-sm'>Dispute Resolution Policy</p>
        <p className='text-sm'>Returns & Refund terms and conditions</p>
        </div>
        <div>
        <p className='font-medium  py-4'>JOIN US</p>
     <div className='flex space-x-7'>
<FontAwesomeIcon icon={faFacebookF} height={25} width={25} className='hover:text-[#f68b1e]'/>
<FontAwesomeIcon icon={faInstagram} height={25} width={25} className='hover:text-[#f68b1e]'/>
<FontAwesomeIcon icon={faTwitter} height={25} width={25} className='hover:text-[#f68b1e]'/>
     </div>
        </div>
        
    </div>

    <div>
    <div>
        <p className='font-medium  py-4'>ABOUT JUMIA GHANA</p>
       <p className='text-sm'>About us</p>
       <p className='text-sm'>Testimonials</p>
       <p className='text-sm'>Jumia careers</p>
       <p className='text-sm'>Terms and Conditions</p>
       <p className='text-sm'>Jumia Payment Information Guidelines</p>
       <p className='text-sm'>Jumia Store Credit Terms & Conditions</p>
       <p className='text-sm'>Privacy Notice</p>
       <p className='text-sm'>Cookie Notice</p>
       <p className='text-sm'>Stay informed about Corona virus</p>
       <p className='text-sm'>Stay Safe</p>
       <p className='text-sm'>Ship your products with Jumia</p>
       <p className='text-sm'>Flash Sales</p>
       <p className='text-sm'>Jumia Anniversary 2023</p>
    </div>
        <div>
            <p className='font-medium py-4'>PAYMENT METHODS</p>
            <div className='flex space-x-7'>
            <FontAwesomeIcon icon={faHandHoldingDollar} height={25} width={25} className='hover:text-[#f68b1e]'/>
            <FontAwesomeIcon icon={faCcVisa} height={25} width={25} className='hover:text-[#f68b1e]'/>
            <FontAwesomeIcon icon={faCcMastercard} height={25} width={25} className='hover:text-[#f68b1e]'/>

            </div>
        </div>
    </div>
 
    <div>
        <p className='font-medium  py-4'>MAKE MONEY WITH JUMIA</p>
       <p className='text-sm'>Sell on Jumia</p>
       <p className='text-sm'>Service charges</p>
       <p className='text-sm'>Become a Sales Consultant</p>
       <p className='text-sm'>Become a Logistics Service Partner</p>
    </div>
    <div>
        <p className='font-medium  py-4'>JUMIA INTERNATIONAL</p>
       <div className='flex justify-between'>
        <div>
            <p className='text-sm'>Algerie</p>
            <p className='text-sm'>Cote d'Ivoire</p>
            <p className='text-sm'>Egypt</p>
            <p className='text-sm'>Kenya</p>
            <p className='text-sm'>Maroc</p>
        </div>
        <div>
        <p className='text-sm'>Nigeria</p>
        <p className='text-sm'>Senegal</p>
        <p className='text-sm'>Tunisia</p>
        <p className='text-sm'>Uganda</p>
        </div>
       </div>
    </div>
    




</div>
{/* brands */}
<div className='flex justify-between mt-10'>
    <div>
        <p className='text-sm'>Apple</p>
        <p className='text-sm'>Banana</p>
        <p className='text-sm'>Binatone</p>
        <p className='text-sm'>Bruhm</p>
        <p className='text-sm'>Chigo</p>

    </div>
    <div>
    <p className='text-sm'>DELL</p>
        <p className='text-sm'>Delron</p>
        <p className='text-sm'>E-Life</p>
        <p className='text-sm'>Fashion</p>
        <p className='text-sm'>Fragrance World</p>
    </div>
    <div>
    <p className='text-sm'>Generic</p>
        <p className='text-sm'>Hp</p>
        <p className='text-sm'>Huawei</p>
        <p className='text-sm'>Infinix</p>
        <p className='text-sm'>Itel</p>
    </div>
    <div>
    <p className='text-sm'>JBL</p>
        <p className='text-sm'>Kirkland</p>
        <p className='text-sm'>Legacy</p>
        <p className='text-sm'>Lenovo</p>
        <p className='text-sm'>LG</p>
    </div>
    <div>
    <p className='text-sm'>Lindy</p>
        <p className='text-sm'>Midea</p>
        <p className='text-sm'>Mitsui</p>
        <p className='text-sm'>Mooved</p>
        <p className='text-sm'>Nasco</p>
    </div>
    <div>
    <p className='text-sm'>Nokia</p>
        <p className='text-sm'>Oraimo</p>
        <p className='text-sm'>Protech</p>
        <p className='text-sm'>Roch</p>
        <p className='text-sm'>Samsung</p>
    </div>
    <div>
    <p className='text-sm'>Sony</p>
        <p className='text-sm'>Syinix</p>
        <p className='text-sm'>Tecno</p>
        <p className='text-sm'>Toshiba</p>
        <p className='text-sm'>Westpoint</p>
    </div>
    <div>
    <p className='text-sm'>Westpool</p>
        <p className='text-sm'>White Label</p>
        <p className='text-sm'>X Tigi</p>
        <p className='text-sm'>Xiaomi</p>
        
    </div>
</div>
<div className='border-t border-gray-500 mt-6 flex justify-center p-3'>
    <Image src='/nuna.png' height={100} width={100} alt='0xNunana'/>
</div>

            
        </div>
    </div>
  )
}

export default Footer