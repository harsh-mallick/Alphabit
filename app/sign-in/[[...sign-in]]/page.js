import React from 'react'
import { SignIn } from '@clerk/nextjs'
const page = () => {
    return (
        <div className='pt-[11vh] pb-[7vh] justify-items-center'>
            <SignIn className="bg-black" />
        </div>
    )
}

export default page
