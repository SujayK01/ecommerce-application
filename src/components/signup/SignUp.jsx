import React from 'react'
import style from "./signUp.module.css"

const SignUp = () => {
  return (
    <div className={style.container}>
        <form action="post">
            <label className='lable'>Name</label>
            <input type="text" placeholder='NAME*' />
            <label>email</label>
            <input type="email" placeholder='EMAIL*' />
            <label>Phone</label>
            <input type="tel" placeholder='PHONE NUMBER*' />
            <label>Password</label>
            <input type="password" placeholder='PASSWORD*' />
            <label>GST Number</label>
            <input type="text" placeholder='GST NUMBER*' />
            <input type="submit" value="SUBMIT" />
        </form>
    </div>
  )
}

export default SignUp;