"use client"
import React from 'react'
import { House, Calendar, UsersRound, Clock, Key } from 'lucide-react';
import logo from "../Image/alphabit.png"
import Image from "next/image"

const Navbar = () => {
    const nav_items = [
        {
            Key: 0,
            icon: <House />,
            text: "Home"
        },
        {
            icon: <Calendar />,
            text: "Events"
        },
        {
            icon: <UsersRound />,
            text: "Team"
        },
        {
            icon: <Clock />,
            text: "Timeline"
        },
    ]
    return (
        <div className='h-[10vh] flex w-screen px-5 py-3 items-center bg-[rgba(43, 49, 64, 0.47)] backdrop-blur-xl z-[3] fixed'>
            <div className="left flex justify-center w-1/5 gap-3">
                <div className="logo"><Image src={logo} alt="abc" width={30} height={30} /></div>
                <div className="title font-bold text-2xl">Alphabit</div>
            </div>
            <div className="right flex justify-end w-4/5 gap-9 items-center">
                {Array.isArray(nav_items) && nav_items.map((nav_item) => {
                    return (
                        <div className="nav flex gap-4 cursor-pointer text-base text-slate-300 hover:text-white" key={nav_item.text}>
                            <div className="icon">{nav_item.icon}</div>
                            <div className="text">{nav_item.text}</div>
                        </div>
                    )
                })}
                <div className="button">
                    <button className='border-2 border-green-500 mr-3 p-2 rounded-xl cursor-pointer hover:bg-green-300 hover:text-black font-bold'>Sign Up</button>
                    <button className='border-2 border-yellow-500 mr-3 p-2 rounded-xl cursor-pointer hover:bg-yellow-300 hover:text-black font-bold'>Sign In</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
