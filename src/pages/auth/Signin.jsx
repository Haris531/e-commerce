import axios from 'axios'
import React, { useState } from 'react'

export default function Signin() {

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })

    const changeInput = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const login = (e) => {
        e.preventDefault()
console.log('login data sending', formData)
        const credentials = { username: formData.username, password: formData.password };
        axios.post('https://fakestoreapi.com/auth/login', credentials)
            .then(response => console.log('backend login res.',response.data));
    }

    return (
        <div>
            <div className='flex justify-center items-center h-full'></div>
            <div>SignIn</div>

            <div className=''>
                <form action="" onSubmit={login}>
                    <input name='username' onChange={changeInput} type="text"  value={formData.username} />
                    <input name='password' onChange={changeInput} type="password"  value={formData.password} />
                    <button type='submit'>Login</button>
                </form>
            </div>
        </div>
    )
}
