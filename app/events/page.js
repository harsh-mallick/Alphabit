"use client"
import React from 'react'
import { Calendar, Clock, MapPin, Users, ExternalLink } from 'lucide-react';
import Image from "next/image"
import { useRouter } from 'next/navigation';

const Page = () => {
    const router = useRouter()
    const event = [
        {
            heading: "Creatica",
            img: "https://i.ibb.co/tphxd0VK/for-creatica.webp",
            desc: "Creatica is an electrifying graphic design competition that dares participants to transform abstract prompts into stunning visuals. This is where imagination meets execution — from designing a magazine cover, album artwork, movie poster, or brand identity board.",
            date: "12 Nov 2025",
            time: "9:00 am",
            place: "Middle Lab",
            participants: "2 Participants per team"
        },
        {
            heading: "Q?Bit",
            img: "https://i.ibb.co/d44ZPgNt/for-qbit.jpg",
            desc: "Q?Bit is a thrilling quiz that tests your knowledge of the ever-evolving world of technology. Whether you're a tech enthusiast, or just curious about the latest innovations, this quiz is designed to engage and educate.",
            date: "12 Nov 2025",
            time: "9:00 am",
            place: "School Auditorium",
            participants: "2 Participants per team"
        },
        {
            heading: "Innovat-a-Thon",
            img: "https://i.ibb.co/spR1sz6D/for-hackathon.webp",
            desc: "Join us for an exhilarating Hackathon where innovation meets coding prowess! Our challenge: Solve real-world problems by developing cutting-edge web applications. Gather your team, brainstorm ingenious solutions, and race against the clock in this one week coding extravaganza. ",
            date: "12 Nov 2025",
            time: "9:00 am",
            place: "Library",
            participants: "2 Participants per team"
        },
        {
            heading: "Debug.Log",
            img: "https://i.ibb.co/dNpSh4w/for-debug.jpg",
            desc: "The ultimate battleground for coding aficionados seeking to showcase their problem-solving abilities. Challenge yourself against the best and battle the clock in this high-intensity coding competition!",
            date: "12 Nov 2025",
            time: "9:00 am",
            place: "Digital Lab",
            participants: "2 Participants per team"
        }
    ]
    return (
        <div className='pt-[10vh]'>
            <h1 className='text-center font-extrabold text-[3rem] tracking-[0.1em] to-75% via-20% from-blue-400 via-blue-500 to-purple-600 bg-gradient-to-r bg-clip-text text-transparent'>Events</h1>
            <p className='text-center text-[1.1rem] mt-3'>Discover exciting tech events, workshops, and competitions designed to expand your <br /> knowledge and connect you with fellow innovators.</p>
            <div className='sm:grid grid-cols-2 w-[70%] justify-items-center mt-3 justify-self-center mb-3'>
                {Array.isArray(event) && event.map((event) => {
                    return (
                        <div className="card w-[25rem] grid h-auto border-2 border-gray-800 rounded-2xl bg-gray-800/30 mt-3" key={event.heading}>
                            <div className="img "> <Image src={event.img} width={400} height={100} alt='img' className='rounded-t-2xl' /></div>
                            <div className="body p-3">
                                <div className="heading font-bold text-2xl">{event.heading}</div>
                                <div className="desc text-[0.99rem] mb-5 mt-2">{event.desc}</div>
                                <div className="date flex mb-1 gap-2 text-gray-300 text-[0.95rem]"><Calendar className='text-[0.95]' /> {event.date}</div>
                                <div className="time flex mb-1 gap-2 text-gray-300 text-[0.95rem]"><Clock /> {event.time}</div>
                                <div className="place flex mb-1 gap-2 text-gray-300 text-[0.95rem]"><MapPin />{event.place}</div>
                                <div className="participant flex mb-1 gap-2 text-gray-300 text-[0.95rem]"><Users />{event.participants}</div>
                            </div>
                            <div className='text-center p-3 self-end'>
                                <button className='to-75% via-20% from-blue-700 via-blue-600 to-purple-800 bg-gradient-to-r text-lg font-bold mt-4 rounded-md w-full h-12 cursor-pointer hover:from-blue-900 hover:via-blue-800 hover:to-purple-900' onClick={() => { router.push("/sign-up") }}>Register</button>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default Page
