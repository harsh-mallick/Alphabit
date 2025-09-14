"use client"
import React, { useState, useEffect } from 'react'
import logo from "./Image/alphabit.png"
import Image from "next/image"
import { Mail, Phone, MapPinHouse } from 'lucide-react';
import { useUser } from '@clerk/nextjs'


const Page = () => {
  const { user, isLoaded } = useUser()
  const eventDate = new Date("2025-09-15T09:00:00").getTime();
  const [month, setMonth] = useState()
  const [days, setDays] = useState()
  const [hours, setHours] = useState()
  const [minutes, setMinutes] = useState()
  const [seconds, setSeconds] = useState()
  const [isfetching, setisfetching] = useState(true)

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
        console.log("Profile data:", data.data.name);
        if (typeof window != undefined && data.data) {
          localStorage.setItem("teacher_incharge", data.data.name)
          localStorage.setItem("teacher_incharge_clerkID", data.data.clerkID)
          localStorage.setItem("school_name", data.data.school_name)
        }

        setisfetching(false)

      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    }
  };

  useEffect(() => {
    fetchdata();
  }, [user?.username, isLoaded]);

  const timer = setInterval(() => {
    const now = new Date().getTime();
    let distance = eventDate - now;


    // Calculate total seconds
    const totalSeconds = Math.floor(distance / 1000);

    setMonth(Math.floor(totalSeconds / (30 * 24 * 60 * 60))) // assuming 30 days/month
    setDays(Math.floor((totalSeconds % (30 * 24 * 60 * 60)) / (24 * 60 * 60)))
    setHours(Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60)))
    setMinutes(Math.floor((totalSeconds % (60 * 60)) / 60))
    setSeconds(totalSeconds % 60)

  }, 1000);

  return (
    <div className='pt-[10vh] '>
      <video autoPlay loop muted playsInline className="absolute z-[0] sm:h-full h-[90rem] w-full top-0 left-0 object-cover" style={{ mixBlendMode: "color-dodge", opacity: '0.4' }}>
        <source src="./circuit.mp4" />
      </video>
      <div className='z-[1] relative'>
        <div className="home text-center h-[100vh] pt-[10vh]">
          <div className='w-full flex justify-center'><div className="logo w-24 border-2 border-transparent rounded-full"><Image src={logo} alt="abc" width={0} height={0} /></div></div>
          <h1 className='text-center font-extrabold text-[4rem] tracking-[0.1em] to-75% via-20% from-blue-400 via-blue-500 to-pink-400 bg-gradient-to-r bg-clip-text text-transparent font_audiowide'>Alphabit</h1>
          <h2 className='font-extrabold text-2xl'>Amity Saket Presents Tech Fest 2025</h2>
          <p className='text-gray-300 mt-4 font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, laboriosam enim? Beatae atque explicabo, <br /> temporibus blanditiis saepe ipsum sit nisi deserunt. Vel culpa omnis perspiciatis eligendi ducimus dolore sapiente fugiat?</p>
          <div className="timing flex gap-3 w-full justify-center mt-10">
            <div className='bg-gray-800 h-24 w-28 rounded-2xl text-white hover:scale-[1.1] transition-all ease-in'>
              <p className='text-3xl font-bold mt-4'>{month}</p>
              <p className='mt-2 text-sm text-gray-300'>Month</p>
            </div>
            <div className='bg-gray-800 h-24 w-28 rounded-2xl text-white hover:scale-[1.1] transition-all ease-in' >
              <p className='text-3xl font-bold mt-4'>{days}</p>
              <p className='mt-2 text-sm text-gray-300'>Days</p>
            </div>
            <div className='bg-gray-800 h-24 w-28 rounded-2xl text-white hover:scale-[1.1] transition-all ease-in'>
              <p className='text-3xl font-bold mt-4'>{hours}</p>
              <p className='mt-2 text-sm text-gray-300'>Hours</p>
            </div>
            <div className='bg-gray-800 h-24 w-28 rounded-2xl text-white hover:scale-[1.1] transition-all ease-in'>
              <p className='text-3xl font-bold mt-4'>{minutes}</p>
              <p className='mt-2 text-sm text-gray-300'>Minutes</p>
            </div>
            <div className='bg-gray-800 h-24 w-28 rounded-2xl text-white hover:scale-[1.1] transition-all ease-in'>
              <p className='text-3xl font-bold mt-4'>{seconds}</p>
              <p className='mt-2 text-sm text-gray-300'>Seconds</p>
            </div>
          </div>

          <button className='to-75% via-20% from-blue-700 via-blue-600 to-purple-800 bg-gradient-to-r text-xl font-bold mt-16 p-3 rounded-3xl w-48 h-15 cursor-pointer hover:from-blue-900 hover:via-blue-800 hover:to-purple-900'>Register Now</button>
        </div>

        <div className='contact h-[100vh] pt-[10vh]'>
          <h1 className='text-center font-bold text-[2.5rem] to-75% via-20% from-blue-400 via-blue-500 to-pink-400 bg-gradient-to-r bg-clip-text text-transparent'>Get In Touch</h1>
          <div className='flex max-w-screen gap-10 px-[10rem] mt-5'>
            <div className="left w-[50%] border-1 border-gray-600 rounded-md h-[34rem] py-6 px-9 bg-gray-600/25">
              <p className='font-bold text-xl mb-4'>Send us a Message</p>
              <input type="text" name="name" id="name" placeholder='Your name' className='bg-slate-500/35 w-full h-10 p-2 rounded-md mb-4' /><br />
              <input type="text" name="email" id="email" placeholder='Your email' className='bg-slate-500/35 w-full h-10 p-2 rounded-md mb-4' /><br />
              <textarea name="message" id="message" placeholder='Your message' className='bg-slate-500/35 w-full min-h-32 p-2 rounded-md'></textarea><br />
              <button className='to-75% via-20% from-blue-700 via-blue-600 to-purple-800 bg-gradient-to-r text-lg font-bold mt-7 rounded-md w-full h-12 cursor-pointer hover:from-blue-900 hover:via-blue-800 hover:to-purple-900'>Send Message</button>
            </div>
            <div className="right w-1/2">
              <div className="top border-1 border-gray-600 rounded-md h-[14rem] py-6 px-9 bg-gray-600/25">
                <p className='font-bold text-xl mb-4' >Contact Information</p>
                <div className='flex gap-3 items-center mt-2'><p className='text-blue-800'><Mail className='h-5' /></p><p>info@email.com</p></div>
                <div className='flex gap-3 items-center mt-2'><p className='text-blue-800'><Phone className='h-5' /></p><p>80xxxxxxxx</p></div>
                <div className='flex gap-3 items-center mt-2'><p className='text-blue-800'><MapPinHouse className='h-5' /></p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod aut </p></div>
              </div>
              <div className="bottom border-1 border-gray-600 rounded-md h-[18.27rem] py-6 px-9 bg-gray-600/25 mt-7">
                <iframe width="100%" height="100%" className="inset-0 rounded-md" frameBorder="0" title="map" marginHeight="0" marginWidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Amity%20Saket+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
