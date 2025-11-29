import axios from 'axios'
import React, { useState } from 'react'

export default function Signup() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    })

    const changeInput = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const submitForm = (event) => {

       event.preventDefault()
console.log(formData)
        const user = { username: formData.username, email: formData.email, password: formData.password };

        axios.post('https://fakestoreapi.com/users', user)
            .then(response => console.log('backend user resp.',response.data));
    }

    return (
        <div>
            <div className='flex justify-center items-center h-full'></div>
            <div>SignUp</div>

            <div className=''>
                <form action="" onSubmit={submitForm}>
                    <input name='username' onChange={changeInput} type="text" placeholder='username' value={formData.username} />
                    <input name='email' onChange={changeInput} type="email" placeholder='email' value={formData.email} />
                    <input name='password' onChange={changeInput} type="password" placeholder='password' value={formData.password} />

                    <button type='submit'>Signup</button>
                </form>
            </div>
        </div>
    )
}
