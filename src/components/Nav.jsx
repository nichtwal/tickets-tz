import React from 'react'
import Sort from './SortBlock/Sort'
import Filter from './SortBlock/Filter'
import Price from './SortBlock/Price'
import Categoies from './SortBlock/Categoies'

const Nav = () => {
  return (
    <div className='navigation'>
        <Sort />
        <Filter />
        <Price />
        <Categoies />
    </div>
  )
}

export default Nav