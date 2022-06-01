import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
      if (user) {
          auth.signOut();
      }
  }
  return (
    <div className='header'>
        <Link to='/'>
        <img className= 'header_logo' src='https://pnggrid.com/wp-content/uploads/2021/05/Amazon-Logo-Transparent-1024x310.png'/>
        </Link>
        <div className='header_search'>
            <input className='header_searchInput' type='text'></input>
            <SearchIcon className='header_searchIcon'/>
        </div>
        <div className='header_nav'>
            <Link to={!user && '/login'}>
            <div onClick={handleAuthentication} className='header_option'>
                <span className='header_optionLineOne'>Hello {!user ? 'Guest' : user.email}</span>            
                <span className='header_optionLineTwo'>{user ? 'Sign Out' : 'Sign In'}</span> 
            </div>
            </Link>
            <div className='header_option'>
                <span className='header_optionLineOne'>Returns</span>
                <span className='header_optionLineTwo'>& Orders</span>
            </div>
            <div className='header_option'>
                <span className='header_optionLineOne'>Your</span>
                <span className='header_optionLineTwo'>Prime</span>
            </div>
            <Link to="/checkout">
            <div className='header_optionBasket'>
                <AddShoppingCartIcon/>
                <span className='header_optionLineTwo header_basketCount'>{basket?.length}</span>
            </div>
            </Link>
        </div>
    </div>
  )
}

export default Header