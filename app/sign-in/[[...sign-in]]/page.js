import React from 'react'
import { SignIn } from '@clerk/nextjs'
import { useRouter } from 'next/navigation';
const Page = () => {
    const router = useRouter()
    router.push("/")
    return (
        <div className='pt-[11vh] pb-[7vh] justify-items-center'>
            <SignIn className="bg-black" />
        </div>
    )
}

export default Page
