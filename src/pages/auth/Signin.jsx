import axios from 'axios'
import React, { useState } from 'react'

export default function Signin() {

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const changeInput = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const login = (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        if (!formData.username || !formData.password) {
            setError("Both fields are required.");
            return;
        }

        axios.post('https://fakestoreapi.com/auth/login', formData)
            .then(response => {
                setSuccess("Login successful!");
                console.log(response.data);
            })
            .catch(err => {
                setError("Invalid username or password.");
            });
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">

            <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg">
                <h2 className="text-3xl font-bold text-center mb-6">Sign In</h2>

                {error && <div className="text-red-600 bg-red-100 p-2 rounded mb-3">{error}</div>}
                {success && <div className="text-green-600 bg-green-100 p-2 rounded mb-3">{success}</div>}

                <form onSubmit={login} className="space-y-4">
                    <input name="username" type="text" placeholder="Enter username"
                        value={formData.username}
                        onChange={changeInput}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300"
                    />
                    <input name="password" type="password" placeholder="Enter password"
                        value={formData.password}
                        onChange={changeInput}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300"
                    />
                    <button type="submit" className="w-full py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700">
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}

