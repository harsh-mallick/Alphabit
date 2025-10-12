"use client"
import React, { useState, useEffect } from 'react'
import { House, Calendar, UsersRound, Clock, LogOut, User, UserPlus, ScrollText } from 'lucide-react';
import logo from "../Image/alphabit.png"
import Image from "next/image"
import Link from 'next/link';
import { SignedIn, SignedOut, SignInButton, SignOutButton, SignUpButton, UserButton } from '@clerk/nextjs';
import { useUser } from "@clerk/nextjs"
import { useRouter } from 'next/navigation';
import { GiHamburgerMenu } from 'react-icons/gi'

const Navbar = () => {
    const [role, setRole] = useState("")
    const router = useRouter()
    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedRole = window.localStorage.getItem("role");
            if (storedRole) setRole(storedRole);
        }
    }, []);
    const show_phone_nav = () => {
        if (document.getElementById("phone-nav") !== null) {
            if (document.getElementById("phone-nav").style.display === "block") {
                document.getElementById("phone-nav").style.display = "none"
            } else {
                document.getElementById("phone-nav").style.display = "block"
            }
        }
    }

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
        <div className='sm:h-[10vh] h-auto sm:flex w-screen px-5 py-3 items-center bg-black sm:bg-gray-900/30 backdrop-blur-xl z-[3] fixed'>
            <div className="left flex sm:justify-center sm:w-1/5 gap-3 ">
                <div className='flex w-screen justify-between'>
                    <div onClick={() => router.push('/')} className='flex gap-3 cursor-pointer'>
                        <div className="logo"><Image src={logo} alt="abc" width={30} height={30} /></div>
                        <div className="title font-bold text-2xl">Alphabit</div>
                    </div>
                    <GiHamburgerMenu className='cursor-pointer block sm:hidden font-bold text-2xl' onClick={show_phone_nav} />
                </div>
            </div>
            <SignedOut>
                <div className="sm:right sm:flex sm:justify-end sm:w-4/5 text-center sm:gap-9 items-center hidden" id='phone-nav'>
                    {Array.isArray(nav_items) && nav_items.map((nav_item) => {
                        return (
                            <Link className="nav flex gap-4 cursor-pointer text-base text-slate-300 hover:text-white text-center sm:text-left justify-center sm:justify-start sm:mb-0 mb-2" key={nav_item.text} href={nav_item.link}>
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
                <div className="sm:right sm:flex sm:justify-end sm:w-4/5 text-center sm:gap-9 items-center hidden" id='phone-nav'>
                    {Array.isArray(nav_items) && nav_items.map((nav_item) => {
                        return (
                            <Link className="nav flex gap-4 cursor-pointer text-base text-slate-300 hover:text-white text-center sm:text-left justify-center sm:justify-start sm:mb-0 mb-2" key={nav_item.text} href={nav_item.link}>
                                <div className="icon">{nav_item.icon}</div>
                                <div className="text">{nav_item.text}</div>
                            </Link>
                        )
                    })}
                    <Link className="nav flex gap-4 cursor-pointer text-base text-slate-300 hover:text-white text-center sm:text-left justify-center sm:justify-start sm:mb-0 mb-2" href="/profile">
                        <div className="icon"><User /></div>
                        <div className="text">Profile</div>
                    </Link>
                    {role == "9080989896" ? <> <Link className="nav flex gap-4 cursor-pointer text-base text-slate-300 hover:text-white text-center sm:text-left justify-center sm:justify-start sm:mb-0 mb-2" href="/list-student">
                        <div className="icon"><ScrollText /></div>
                        <div className="text">Student List</div>
                    </Link>
                        <Link className="nav flex gap-4 cursor-pointer text-base text-slate-300 hover:text-white text-center sm:text-left justify-center sm:justify-start sm:mb-0 mb-2" href="/school-list">
                            <div className="icon"><ScrollText /></div>
                            <div className="text">School List</div>
                        </Link></>
                        :
                        <Link className="nav flex gap-4 cursor-pointer text-base text-slate-300 hover:text-white text-center sm:text-left justify-center sm:justify-start sm:mb-0 mb-2" href="/add-student">
                            <div className="icon"><UserPlus /></div>
                            <div className="text">Add Student</div>
                        </Link>
                    }
                    <Link className="nav flex gap-4 cursor-pointer text-base text-slate-300 hover:text-white text-center sm:text-left justify-center sm:justify-start sm:mb-0 mb-2" href="/add-student">
                        <div className="icon"><SignOutButton className="nav flex gap-4 cursor-pointer text-base text-slate-300 hover:text-white mr-5 text-center"><LogOut /></SignOutButton></div>
                        <div className="text sm:hidden">Logout</div>
                    </Link>
                </div>
            </SignedIn>
        </div>
    )
}

export default Navbar
