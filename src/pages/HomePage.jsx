import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
            
            <h1 className="text-4xl font-bold mb-6 tracking-wide">
                Welcome to <span className="text-blue-600">HomePage</span>
            </h1>

            <div className="flex gap-4 mt-4">
                <Link to="/auth/signin" className="px-6 py-2 rounded-xl bg-blue-600 text-white font-medium shadow hover:bg-blue-700 transition">
                    Sign In
                </Link>
                <Link to="/auth/signup" className="px-6 py-2 rounded-xl bg-green-600 text-white font-medium shadow hover:bg-green-700 transition">
                    Sign Up
                </Link>
                <Link to="/users" className="px-6 py-2 rounded-xl bg-purple-600 text-white font-medium shadow hover:bg-purple-700 transition">
                    User Management
                </Link>
            </div>
        </div>
    )
}
