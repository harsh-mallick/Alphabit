"use client"
import React, { useState, useEffect } from 'react'
import { House, Calendar, UsersRound, Clock, LogOut, User, UserPlus, ScrollText } from 'lucide-react';
import logo from "../Image/alphabit.png"
import Image from "next/image"
import Link from 'next/link';
import { SignedIn, SignedOut, SignInButton, SignOutButton, SignUpButton, UserButton } from '@clerk/nextjs';
import { useUser } from "@clerk/nextjs"
import { useRouter } from 'next/navigation';

const Navbar = () => {
    const [role, setRole] = useState("")
    const router = useRouter()
    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedRole = window.localStorage.getItem("role");
            if (storedRole) setRole(storedRole);
        }
    }, []);

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
    console.log("role")
    return (
        <div className='h-[10vh] flex w-screen px-5 py-3 items-center bg-[rgba(43, 49, 64, 0.47)] backdrop-blur-xl z-[3] fixed'>
            <div className="left flex justify-center w-1/5 gap-3">
                <div onClick={() => router.push('/')} className='flex gap-3 cursor-pointer'>
                    <div className="logo"><Image src={logo} alt="abc" width={30} height={30} /></div>
                    <div className="title font-bold text-2xl">Alphabit</div>
                </div>
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
                    {role == "admin" ? <Link className="nav flex gap-4 cursor-pointer text-base text-slate-300 hover:text-white" href="/list-student">
                        <div className="icon"><ScrollText /></div>
                        <div className="text">Student List</div>
                    </Link> :
                        <Link className="nav flex gap-4 cursor-pointer text-base text-slate-300 hover:text-white" href="/add-student">
                            <div className="icon"><UserPlus /></div>
                            <div className="text">Add Student</div>
                        </Link>
                    }
                    <SignOutButton className="nav flex gap-4 cursor-pointer text-base text-slate-300 hover:text-white mr-5"><LogOut /></SignOutButton>
                </div>
            </SignedIn>
        </div>
    )
}

export default Navbar
