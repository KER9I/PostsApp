import React, { useContext } from 'react'
import MyButton from '../Components/UI/button/MyButton'
import MyInput from '../Components/UI/input/MyInput'
import { AuthContext } from './../Context/context';

function Login() {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const login = e => {
        e.preventDefault();
        setIsAuth(true)
        localStorage.setItem('auth', 'true')
    }

  return (
    <div>
        <h1 style={{textAlign: 'center'}}>Login page</h1>
        <form on onSubmit={login}>
            <MyInput type='text' placeholder='Enter login' />
            <MyInput type='password' placeholder='Enter password' />
            <MyButton>Login</MyButton>
        </form>
    </div>
  )
}

export default Login