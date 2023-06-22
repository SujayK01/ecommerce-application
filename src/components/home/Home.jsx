import React from 'react'
import style from './home.module.css'
import { Link } from 'react-router-dom';
import Login from '../login/Login';
import SignUp from '../signup/SignUp';

const Home = () => {
  return (
    <div className={style.container}>
        <div className={style.home}>
        <Login/>
            <div className={style.content}>
            <Link to="/">Sign Up</Link>
            <Link to="/">Log In</Link>
            </div>
        <SignUp/>
        </div>
    </div>
  )
}

export default Home;