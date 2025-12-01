import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

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

        const user = {
            username: formData.username,
            email: formData.email,
            password: formData.password
        };

        axios.post('https://fakestoreapi.com/users', user)
            .then(response => console.log('backend user resp.', response.data));
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md">
                <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">
                    Create Account
                </h2>

                <form onSubmit={submitForm} className="space-y-4">
                    <input name="username" type="text" placeholder="Username"
                        value={formData.username}
                        onChange={changeInput}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                    <input name="email" type="email" placeholder="Email"
                        value={formData.email}
                        onChange={changeInput}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                    <input name="password" type="password" placeholder="Password"
                        value={formData.password}
                        onChange={changeInput}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                    <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-medium">
                        Sign Up
                    </button>
                </form>

                <p className="text-center text-gray-600 mt-4">
                    Already have an account?{" "}
                    <Link to="/auth/signin" className="text-blue-600 hover:underline">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    )
}

