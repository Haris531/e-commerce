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

        const credentials = {
            username: formData.username,
            password: formData.password
        }

        axios.post('https://fakestoreapi.com/auth/login', credentials)
            .then(response => console.log('backend login res.', response.data))
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            
            <div className="w-full max-w-md  flex flex-col bg-white p-4 rounded-2xl shadow-lg">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
                    Sign In
                </h2>

                <form onSubmit={login} className="space-y-4">

                    <input name="username" type="text" placeholder="Enter username"
                        value={formData.username}
                        onChange={changeInput}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 
                                   focus:ring-blue-500 focus:outline-none"
                    />

                    <input name="password" type="password" placeholder="Enter password"
                        value={formData.password}
                        onChange={changeInput}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"/>

                    <button type="submit" className="w-full py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition shadow-md">
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}
