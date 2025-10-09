"use client"
import React, { Profiler, useRef, useEffect, useState } from 'react'
import { Calendar, Clock, Linkedin, MapPin, Users, Mail, Github } from 'lucide-react';
import Link from 'next/link';
import Image from "next/image";
import * as THREE from "three"
import NET from "vanta/dist/vanta.globe.min" // 
import discord_icon from "../Image/discord icon.png"

const Page = () => {
    const team = [
        {
            name: "Amatra Sejwal",
            social_handles: [
                {
                    name: "Linkedin",
                    icon: <Linkedin className='text-[0.95]' />,
                    username: "amatra-sejwal",
                    link: "https://www.linkedin.com/in/amatra-sejwal/",
                    target: "_blank"
                },
                {
                    name: "Email",
                    icon: <Mail />,
                    username: "amatra.2009.sejwal@gmail.com",
                    link: "",
                    target: "_self"
                },
                {
                    name: "Discord",
                    icon: <Image src={discord_icon} alt='discord icon' width={30} height={30} />,
                    username: "@norrisfanclub_",
                    link: "",
                    target: "_blank"
                }
            ],
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate cumque exercitationem, minus obcaecati aut ex odit, nemo excepturi ratione quisquam quidem nihil rerum harum recusandae ipsam? Provident quaerat hic aperiam.",
            profile_pic: "https://i.ibb.co/1GhM1Ys7/Whats-App-Image-2025-10-01-at-22-52-47-eff93df4.jpg",
            role: "Overall Student Incharge"

        },
        {
            name: "Piyush Kumar Raj",
            social_handles: [
                {
                    name: "Github",
                    icon: <Github className='text-[0.95]' />,
                    username: "Piyush-KR09",
                    link: "https://github.com/Piyush-KR09",
                    target: "_blank"
                },
                {
                    name: "Email",
                    icon: <Mail />,
                    username: "piyushkumarraj320@gmail.com",
                    link: "",
                    target: "_self"
                },
                {
                    name: "Discord",
                    icon: <Image src={discord_icon} alt='discord icon' width={30} height={30} />,
                    username: "piyush",
                    link: "https://discord.com/users/814532430957641728",
                    target: "_blank"
                }
            ],
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate cumque exercitationem, minus obcaecati aut ex odit, nemo excepturi ratione quisquam quidem nihil rerum harum recusandae ipsam? Provident quaerat hic aperiam.",
            profile_pic: "https://i.ibb.co/vC9tncwF/Whats-App-Image-2025-09-16-at-20-16-20-b9d3bc16.jpg",
            role: "Overall Student Incharge"

        },
        {
            name: "Harsh Mallick",
            social_handles: [
                {
                    name: "Github",
                    icon: <Github className='text-[0.95]' />,
                    username: "harsh-mallick",
                    link: "https://github.com/harsh-mallick",
                    target: "_blank"
                },
                {
                    name: "Email",
                    icon: <Mail />,
                    username: "harshmallick052009@gmail.com",
                    link: "",
                    target: "_self"
                },
                {
                    name: "Discord",
                    icon: <Image src={discord_icon} alt='discord icon' width={30} height={30} />,
                    username: "godofcoding",
                    link: "https://discord.com/users/993506513534595213",
                    target: "_blank"
                }
            ],
            desc: "I’m Harsh Mallick, and I have a passion for all things digital. From full-stack web development to 3D design, I love building virtual worlds that merge creativity with tech. In my free time, I dive into the latest AI releases, always curious about how new tools can be woven into projects. For me, Alphabit is like a canvas to experiment, innovate, and share ideas that spark inspiration in the tech community.",
            role: "Overall Student Incharge, Website Admin",
            profile_pic: "https://i.ibb.co/LDfTmQys/Me.png"
            // profile_pic: "https://i.ibb.co/LdzwMhbp/Whats-App-Image-2025-09-15-at-14-39-22-7922f532.jpg"

        },
        {
            name: "Aditri Bhatnagar",
            social_handles: [
                {
                    name: "Linkedin",
                    icon: <Linkedin className='text-[0.95]' />,
                    username: "aditri-bhatnagar",
                    link: "https://www.linkedin.com/in/aditri-bhatnagar-236234212/?originalSubdomain=in",
                    target: "_blank"
                },
                {
                    name: "Email",
                    icon: <Mail />,
                    username: "aditribhatnagar132@gmail.com",
                    link: "",
                    target: "_self"
                },
                {
                    name: "Discord",
                    icon: <Image src={discord_icon} alt='discord icon' width={30} height={30} />,
                    username: "adiii",
                    link: "https://discord.com/users/1164207779838447717",
                    target: "_blank"
                }
            ],
            desc: "I’m someone who loves blending curiosity with creativity — whether it’s decoding biology, exploring graphics, or bringing new ideas to life. For me, being part of Alphabit is about creating experiences that inspire and connect people. I believe in learning by doing, experimenting without fear, and always keeping a spark of fun in the process.",
            role: "Department Head - Creative",
            profile_pic: "https://i.ibb.co/0y9xdDCL/IMG-20250915-WA0011-1.jpg"

        },
        {
            name: "Ishaan Kapur",
            social_handles: [
                {
                    name: "Linkedin",
                    icon: <Linkedin className='text-[0.95]' />,
                    username: "kapurishaan",
                    link: "https://www.linkedin.com/in/kapurishaan/",
                    target: "_blank"
                },
                {
                    name: "Email",
                    icon: <Mail />,
                    username: "ishaankapur46@gmail.com",
                    link: "",
                    target: "_self"
                },
            ],
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio expedita soluta dicta dolorum quaerat, pariatur neque corrupti. Laudantium consectetur iste sunt fugit sed, accusantium nihil accusamus sapiente culpa consequatur eaque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio expedita soluta dicta.",
            role: "Department Head - Quiz",
            profile_pic: "https://i.ibb.co/v41v6r2Q/Whats-App-Image-2025-10-03-at-17-18-21-b33db46d.jpg"

        },
        {
            name: "Farhan Azam",
            social_handles: [
                {
                    name: "Email",
                    icon: <Mail />,
                    username: "farhan.azam@ais.amity.edu",
                    link: "",
                    target: "_self"
                },
                {
                    name: "Discord",
                    icon: <Image src={discord_icon} alt='discord icon' width={30} height={30} />,
                    username: "farhanazam.exe",
                    link: "",
                    target: "_blank"
                }
            ],
            desc: "Hi! I’m Farhan Azam, someone who loves decoding problems and finding smart, creative fixes through code. Tech, for me, has always been about curiosity – understanding how things work and how they can work better. I enjoy challenges that push me to think logically and innovate fearlessly. AlphaBit, to me, is the perfect stage to bring together ideas, logic, and teamwork. Through this opportunity, I aim to create an environment where learning feels exciting, collaboration sparks innovation, and every problem turns into a chance to grow.",
            role: "Department Head - Programming",
            profile_pic: "https://i.ibb.co/xKcBMd5Z/IMG-20251005-WA0020-1.png"

        },
        {
            name: "Tishya Bhalla ",
            social_handles: [
                {
                    name: "Email",
                    icon: <Mail />,
                    username: "bhallatishya2008@gmail.com",
                    link: "",
                    target: "_self"
                },
                {
                    name: "Linkedin",
                    icon: <Linkedin className='text-[0.95]' />,
                    username: "tishya-bhalla-bb4b5b36",
                    link: "http://www.linkedin.com/in/tishya-bhalla-bb4b5b365",
                    target: "_blank"
                },
            ],
            desc: "Hi! I’m Tishya Bhalla, a tech enthusiast fueled by coffee and wild ideas. For me, coding isn’t just about logic – it’s about creativity, problem solving, and turning abstract thoughts into something real and impactful. Debugging, building, experimenting – that’s where I find my flow. Alphabit, to me, is a launchpad to connect with passionate minds, exchange ideas and collaborate. Through it, I hope to contribute to a community that celebrates innovation, curiosity and the art of building something extraordinary.",
            role: "Department Head - Programming",
            profile_pic: "https://i.ibb.co/pjxPpW1B/Whats-App-Image-2025-10-06-at-22-19-04-31347310.jpg"

        },

    ]
    const vantaRef = useRef(null)
    const [vantaEffect, setVantaEffect] = useState(null)

    useEffect(() => {
        if (!vantaEffect && vantaRef.current) {
            setVantaEffect(
                NET({
                    el: vantaRef.current, // 👈 important: must be a real DOM node
                    THREE: THREE,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: true,
                    minHeight: 200.0,
                    minWidth: 200.0,
                    scale: 1.0,
                    scaleMobile: 1.0,
                    color: 0x732ed,          // blue (Tailwind blue-500)
                    backgroundAlpha: 0.0,     // makes the background transparent (use if you want page bg to show)
                    points: 8.0,             // number of points (lower → fewer lines, cleaner)
                    maxDistance: 20.0,        // max line length
                    spacing: 18.0,
                })
            )
        }

        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])

    return (
        <div className='pt-[10vh]' ref={vantaRef}>
            <div className="absolute inset-0 bg-black/60 blur-3xl"></div>
            <div className='z-[1]'>
                <h1 className='text-center font-extrabold text-[3rem] tracking-[0.1em] to-75% via-20% from-blue-400 via-blue-500 to-purple-600 bg-gradient-to-r bg-clip-text text-transparent'>Our Team</h1>
                <p className='text-center text-[1.1rem] mt-3'>Meet the passionate individuals behind Alphabit Tech Festival, working tirelessly to <br /> create an unforgettable experience for the tech community.</p>

                <div className='px-16 pt-4 grid grid-cols-3 gap-3 justify-self-center'>
                    {Array.isArray(team) && team.map((team) => {
                        return (
                            <div className="card w-[25rem] h-auto border-2 border-gray-800 rounded-2xl bg-gray-800/80 mt-3 scale-[0.9] grid" key={team.name}>
                                <div className="img "> <Image src={team.profile_pic} width={400} height={0} alt='img' className='rounded-t-2xl h-[405px]' /></div>
                                <div className="body p-3">
                                    <div className="heading font-bold text-2xl">{team.name}</div>
                                    <div className="desc text-[0.95rem] mb-5 mt-5">{team.desc}</div>
                                    {Array.isArray(team.social_handles) && team.social_handles.map((social_handles) => {
                                        return (
                                            <div className="date flex mb-3 gap-2 text-gray-300 text-[0.95rem]" key={social_handles.name}>{social_handles.icon} <Link href={social_handles.link} target={social_handles.target} className='text-blue-300 hover:text-blue-500 hover:underline'>{social_handles.username} </Link></div>
                                        )
                                    })}
                                </div>
                                <p className='bg-black text-center h-10 rounded-b-2xl pt-[0.5rem] text-lg font-bold self-end'>{team.role}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Page
