import React from 'react'
import Filter from './Filter'
import Card1 from './Card1'
import TopSelling from './TopSelling'
import Deals from './Deals'
import Payday from './Payday'
import Promo from './Promo'
import Falaa from './Falaa'
import Allneeds from './Allneeds'
import Banner from './Banner'
import Info from './Info'

const View = () => {
  return (
    <div className='max-w-screen-xl mx-auto py-3 min-h-screen space-y-5 mb-20'>
        <Filter/>
        <Card1/>
        <TopSelling/>
        <Deals/>
        <Payday/>
        <Promo/>
        <Falaa/>
        <Allneeds/>
        <Banner/>
        <Info/>
    </div>
  )
}

export default View