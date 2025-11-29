import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePage() {
    return (
        <>
            <div>HomePage</div>
            <div className='flex gap-2'>
                <Link to='/auth/signin'>Signin</Link>
                <Link to='/auth/signup'>Signup</Link>
                <Link to='/users'>User management</Link>

            </div>
        </>
    )
}
