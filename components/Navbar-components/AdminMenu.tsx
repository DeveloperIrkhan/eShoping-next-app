import React from 'react'
import SearchBar from './SearchBar'
import CartIcon from './CartIcon'
import FavoriteButton from './FavoriteButton'
import SignIn from './SignIn'

const AdminMenu = () => {
  return (
    <div className='w-auto md:w-1/3 gap-4 flex items-center justify-end font-Jost'>
      <SearchBar/>
      <CartIcon/>
      <FavoriteButton/>
      <SignIn/>
    </div>
  )
}

export default AdminMenu