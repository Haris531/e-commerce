import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    const changeInput = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const submitForm = (event) => {
        event.preventDefault();
        setSuccess("");
        setError("");
        if (!formData.username || !formData.email || !formData.password) {
            setError("All fields are required.");
            return;
        }
        const user = {
            username: formData.username,
            email: formData.email,
            password: formData.password
        };
        axios.post('https://fakestoreapi.com/users', user).then(response => {
            console.log('backend user resp.', response.data);
            setSuccess("Account created successfully!");

            setFormData({
                username: '',
                email: '',
                password: ''
            });

            setTimeout(() => {
                setSuccess("");
            }, 3000);
        })
            .catch(err => {
                setError("Something went wrong. Try again.");

                setTimeout(() => {
                    setError("");
                }, 3000);
            });
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md">
                <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">
                    Create Account
                </h2>

                {error && ( <div className="bg-red-100 text-red-600 px-4 py-2 rounded-lg mb-3">{error}</div> )}
                {success && ( <div className="bg-green-100 text-green-700 px-4 py-2 rounded-lg mb-3">{success}</div> )}

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
    );
}
