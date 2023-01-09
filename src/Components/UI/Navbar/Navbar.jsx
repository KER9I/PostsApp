import React, { useContext } from 'react'
import '../../../styles/App.css'
import { Link } from 'react-router-dom';
import MyButton from '../button/MyButton';
import { AuthContext } from '../../../Context/context';

function Navbar() {
  const {isAuth, setIsAuth} = useContext(AuthContext)
  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('auth')
  }
  return (
    <div className='navbar'>
      {isAuth
      ? <div style={{justifyContent: 'flexEnd'}}><MyButton onClick={logout}>Exit</MyButton></div>
      : <></>}
      <div className='navbar__links'>
        <Link to='/about'>About Creator</Link>
      </div>
      <div className='navbar__links'>
      <Link to='/posts'>Post Page</Link>
      </div>
    </div>
  )
}

export default Navbar