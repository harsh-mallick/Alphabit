"use client"
import React from 'react'
import { House, Calendar, UsersRound, Clock, LogOut, User, UserPlus } from 'lucide-react';
import logo from "../Image/alphabit.png"
import Image from "next/image"
import Link from 'next/link';
import { SignedIn, SignedOut, SignInButton, SignOutButton, SignUpButton, UserButton } from '@clerk/nextjs';

const Navbar = () => {
    const nav_items = [
        {
            icon: <House />,
            text: "Home",
            link: "/"
        },
        {
            icon: <Calendar />,
            text: "Events",
            link: "/events"
        },
        {
            icon: <UsersRound />,
            text: "Team",
            link: "/team"
        },
        {
            icon: <Clock />,
            text: "Timeline",
            link: "/timeline"
        },
    ]
    return (
        <div className='h-[10vh] flex w-screen px-5 py-3 items-center bg-[rgba(43, 49, 64, 0.47)] backdrop-blur-xl z-[3] fixed'>
            <div className="left flex justify-center w-1/5 gap-3">
                <div className="logo"><Image src={logo} alt="abc" width={30} height={30} /></div>
                <div className="title font-bold text-2xl">Alphabit</div>
            </div>
            <SignedOut>
                <div className="right flex justify-end w-4/5 gap-9 items-center">
                    {Array.isArray(nav_items) && nav_items.map((nav_item) => {
                        return (
                            <Link className="nav flex gap-4 cursor-pointer text-base text-slate-300 hover:text-white" key={nav_item.text} href={nav_item.link}>
                                <div className="icon">{nav_item.icon}</div>
                                <div className="text">{nav_item.text}</div>
                            </Link>
                        )
                    })}
                    <div className="button">
                        <SignUpButton>
                            <button className='border-2 border-green-500 mr-3 p-2 rounded-xl cursor-pointer hover:bg-green-300 hover:text-black font-bold'>Sign Up</button>
                        </SignUpButton>
                        <SignInButton>
                            <button className='border-2 border-yellow-500 mr-3 p-2 rounded-xl cursor-pointer hover:bg-yellow-300 hover:text-black font-bold'>Sign In</button>
                        </SignInButton>
                    </div>
                </div>
            </SignedOut>
            <SignedIn>
                <div className="right flex justify-end w-4/5 gap-9 items-center">
                    {Array.isArray(nav_items) && nav_items.map((nav_item) => {
                        return (
                            <Link className="nav flex gap-4 cursor-pointer text-base text-slate-300 hover:text-white" key={nav_item.text} href={nav_item.link}>
                                <div className="icon">{nav_item.icon}</div>
                                <div className="text">{nav_item.text}</div>
                            </Link>
                        )
                    })}
                    <Link className="nav flex gap-4 cursor-pointer text-base text-slate-300 hover:text-white" href="/profile">
                        <div className="icon"><User /></div>
                        <div className="text">Profile</div>
                    </Link>
                    <Link className="nav flex gap-4 cursor-pointer text-base text-slate-300 hover:text-white" href="/add-student">
                        <div className="icon"><UserPlus /></div>
                        <div className="text">Add Student</div>
                    </Link>
                    <SignOutButton className="nav flex gap-4 cursor-pointer text-base text-slate-300 hover:text-white mr-5"><LogOut /></SignOutButton>
                </div>
            </SignedIn>
        </div>
    )
}

export default Navbar
