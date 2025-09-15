"use client"
import React from "react"
import Image from "next/image"
import logo from "../Image/alphabit.png" // adjust path

const Loading = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-black">
            <div className="relative flex items-center justify-center">
                {/* Spinning ring */}
                <div className="w-32 h-32 border-4 border-t-blue-500 border-r-transparent border-b-purple-600 border-l-transparent rounded-full animate-spin"></div>

                {/* Logo in center */}
                <div className="absolute w-16 h-16">
                    <Image
                        src={logo}
                        alt="Alphabit Logo"
                        className="w-full h-full object-contain animate-pulse"
                    />
                </div>
            </div>
        </div>
    )
}

export default Loading