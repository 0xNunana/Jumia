import React from 'react'
import Filter from './Filter'
import Card1 from './Card1'
import TopSelling from './TopSelling'
import Deals from './Deals'

const View = () => {
  return (
    <div className='max-w-screen-xl mx-auto py-3 min-h-screen space-y-3'>
        <Filter/>
        <Card1/>
        <TopSelling/>
        <Deals/>
    </div>
  )
}

export default View