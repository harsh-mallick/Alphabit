"use client"
import React, { useState } from 'react'
import { useUser } from '@clerk/nextjs'
import { useEffect } from 'react'
import { UserRound } from "lucide-react"
import Profile from "../Image/Profile.png"
import Image from 'next/image'
import Loading from "../Components/Loading"

const Page = () => {
    const { user, isLoaded } = useUser()
    const [isfetching, setisfetching] = useState(true)
    const [data, setdata] = useState(null)
    const fetchdata = async () => {
        if (isLoaded && isfetching) {
            try {
                const response = await fetch("/api/profile", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ clerkID: user?.username }),
                });

                const data = await response.json();
                console.log("Profile data:", data.data);

                setisfetching(false);
                setdata(data.data)
            } catch (error) {
                console.error("Error fetching profile:", error);
            }
        }
    };

    useEffect(() => {
        fetchdata();
    }, [user?.username, isLoaded]);

    if (isfetching) {
        return (
            <div className='pt-[10vh]'>
                <Loading />
            </div>
        )
    } else {
        return (
            <div className='pt-[10vh] flex justify-center'>
                <div className=' m-7 border-2 border-gray-700 w-[38rem] rounded-2xl'>
                    <div className='flex justify-center'>
                        <div>
                            <div className="left mr-8 rounded-xl p-4 mb-4 flex justify-center">
                                <div>
                                    <p className='font-bold text-2xl text-center'>{data?.name}</p>
                                    <p className='font-bold text-xl text-center'>{data?.role}</p>
                                    <Image src={Profile} width={0} height={0} alt="" srcset="" className='w-40 mt-5' />
                                </div>
                            </div>
                            <div className="right mr-8 rounded-xl p-4">
                                <p className='font-bold text-2xl mb-4'>Bio and other details</p>
                                <div className='flex gap-20'>
                                    <div className='w-1/2'>
                                        <div className='mt-4'>
                                            <p className="text-gray-400 font-bold">First name</p>
                                            <p className="text-lg">{user?.firstName}</p>
                                        </div>
                                        <div className='mt-4'>
                                            <p className="text-gray-400 font-bold">Email</p>
                                            <p className="text-lg">{user?.primaryEmailAddress.emailAddress}</p>
                                        </div>
                                        <div className='mt-4'>
                                            <p className="text-gray-400 font-bold">Phone Number</p>
                                            <p className="text-lg">{data?.phonenumber}</p>
                                        </div>
                                        <div className='mt-4'>
                                            <p className="text-gray-400 font-bold">School Name</p>
                                            <p className="text-lg">{data?.school_name}</p>
                                        </div>
                                    </div>
                                    <div className='w-1/2'>
                                        <div className='mt-4'>
                                            <p className="text-gray-400 font-bold">Last name</p>
                                            <p className="text-lg">{user?.lastName}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Page
