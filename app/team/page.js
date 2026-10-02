"use client"
import React, { Profiler, useRef, useEffect, useState } from 'react'
import { Calendar, Clock, Linkedin, MapPin, Users, Mail, Github } from 'lucide-react';
import Link from 'next/link';
import Image from "next/image";
import * as THREE from "three"
import NET from "vanta/dist/vanta.globe.min" // 
import discord_icon from "../Image/discord icon.png"
import insta_icon from "../Image/insta icon.png"
import linkedin_icon from "../Image/linkedin icon.png"

const Page = () => {
    const team = [
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
            name: "Vidit Khare",
            social_handles: [
                {
                    name: "Email",
                    icon: <Mail />,
                    username: "vidit.khare@ais.amity.edu",
                    link: "",
                    target: "_self"
                },
                {
                    name: "Instagram",
                    icon: <Image src={insta_icon} alt='insta icon' width={30} height={30} className='invert-100 ml-[-3px]' />,
                    username: "@vidiot_khare",
                    link: "https://www.instagram.com/vidiot_khare",
                    target: "_blank"
                },

            ],
            desc: " I am Vidit Khare, and I am passionate about bringing ideas to life through technology and design. From Python programming and ethical hacking to 3d modelling, UI design, graphic design, and motion graphics, I enjoy creating and experimenting with code and design in my free time. I constantly seek to engage and challenge myself with new concepts and push the boundaries of technology and art. My aim is to build an exciting portfolio of creative works and technological innovations that will amaze and inspire people in the field of computer science and technologies like Alphabit",
            role: "Overall Student, QBit Event In Charge",
            profile_pic: "https://i.ibb.co/wZnK8RKg/image.png",

        },


        {
            name: "Atharva Taneja",
            social_handles: [
                {
                    name: "Github",
                    icon: <Github className='text-[0.95]' />,
                    username: "atharvataneja777-sketch",
                    link: "",
                    target: "_blank"
                },
                {
                    name: "Email",
                    icon: <Mail />,
                    username: "atharvataneja777@gmail.com",
                    link: "",
                    target: "_self"
                },
                {
                    name: "Discord",
                    icon: <Image src={discord_icon} alt='discord icon' width={30} height={30} />,
                    username: "atharva011142",
                    link: "",
                    target: "_blank"
                }
            ],
            desc: "I have a strong interest in coding and computer science. I enjoy learning how technology can be used to solve problems we face in our daily lives and explore new programming concepts.Apart from this,I spend my free time spending time with friends and family.I like to challenge myself and continuously improve my skills.",
            role: "Department Head (Debug.Log)",
            profile_pic: "https://i.ibb.co/vC56MGBg/Whats-App-Image-2026-09-30-at-10-09-33-PM.jpg"

        },

        {
            name: "Siddhant Raj",
            social_handles: [
                {
                    name: "Email",
                    icon: <Mail />,
                    username: "siddhantrajsharma3@gmail.com",
                    link: "",
                    target: "_self"
                },
                {
                    name: "Instagram",
                    icon: <Image src={insta_icon} alt='insta icon' width={30} height={30} className='invert-100 ml-[-3px]' />,
                    username: "siddhantrj_322",
                    link: "https://www.instagram.com/siddhantrj_322",
                    target: "_blank"
                }
            ],
            desc: "Hi, I’m Siddhant Raj, a Class XII student at Amity International School, Saket, with a strong interest in leadership, public speaking, international relations, entrepreneurship, technology, and creative design. I actively participate in Model United Nations conferences and leadership initiatives, while also exploring AI research, business ideas, graphic design, video editing, and writing. I enjoy taking on new challenges, building projects, and creating opportunities that help me learn, lead, and make an impact.",
            role: "Department Head (Innovat-a-Thon)",
            profile_pic: "https://i.ibb.co/N6gLTvCj/Whats-App-Image-2026-09-30-at-9-54-28-PM.jpg"

        },

        {
            name: "Aanya Bhandari",
            social_handles: [
                {
                    name: "Email",
                    icon: <Mail />,
                    username: "aanyabhandari19@outlook.com",
                    link: "",
                    target: "_self"
                },
                {
                    name: "Instagram",
                    icon: <Image src={insta_icon} alt='insta icon' width={30} height={30} className='invert-100 ml-[-3px]' />,
                    username: "@aanyabhandari19",
                    link: "https://www.instagram.com/aanyabhandari19",
                    target: "_blank"
                },
                {
                    name: "Linkedin",
                    icon: <Image src={discord_icon} alt='discord icon' width={30} height={30} />,
                    username: "Aanya Bhandari",
                    link: "",
                    target: "_blank"
                }

            ],
            desc: "Hi, I’m Aanya! Passionate about pursuing product design, I'm highly fascinated by the intersection of design, psychology, and economics. I enjoy exploring how people think, behave, and interact with the world around them, and how design can be used to create thoughtful and impactful solutions to everyday problems. Outside of design, I enjoy photography, skating, baking, reading, content creation, and volunteering. I’m always looking forward to exploring ideas, challenging assumptions, and seeing what comes of it.",
            role: "IT Head, Vice Department Head (Creatica)",
            profile_pic: "https://i.ibb.co/60S0Zwkj/Whats-App-Image-2026-09-30-at-9-53-15-PM.jpg",

        },

        {
            name: "Aarav Gupta",
            social_handles: [
                {
                    name: "Email",
                    icon: <Mail />,
                    username: "aaravgupta490@gmail.com",
                    link: "",
                    target: "_self"
                },
                {
                    name: "Instagram",
                    icon: <Image src={insta_icon} alt='insta icon' width={30} height={30} className='invert-100 ml-[-3px]' />,
                    username: "@4aravgupta",
                    link: "https://www.instagram.com/4aravgupta",
                    target: "_blank"
                }
            ],
            desc: "Hello! I am Aarav Gupta, and I’m passionate about AI and fascinated by its potential to shape creative and innovative projects. I also enjoy programming, particularly C++, and have a keen interest in physics and astronomy, especially in understanding how technology can help us explore the world around us. Being a part of Alphabit allows me to collaborate with others, contribute creatively, and gain valuable experience along the way. ",
            role: "IT Head",
            profile_pic: "https://i.ibb.co/v69K3D9g/Whats-App-Image-2026-09-30-at-9-52-50-PM.jpg"
        },

        {
            name: "Shailain Bose",
            social_handles: [
                {
                    name: "Email",
                    icon: <Mail />,
                    username: "shailainbose14@gmail.com",
                    link: "",
                    target: "_self"
                },
            ],
            desc: "I’m Shailain Bose, and I’m obsessed with AI and new tech. I love taking smart tools apart to see how they work and using them to build innovative projects. When I'm not playing around with AI models or making shortcuts for daily tasks, I'm usually reading up on the next big tech trend. Alphabit is my playground to test new ideas and hang out with other people who love building the future.",
            role: `Vice Department Head \n (Innovat-a-Thon)`,
            profile_pic: "https://plain-apac-prod-public.komododecks.com/202610/01/mGZMGjM0lcpKDa7YeHdt/image.jpg"
        },

        {
            name: "Khushi Narula",
            social_handles: [
                {
                    name: "Email",
                    icon: <Mail />,
                    username: "khushinarula29@gmail.com",
                    link: "",
                    target: "_self"
                },
                {
                    name: "Instagram",
                    icon: <Image src={insta_icon} alt='insta icon' width={30} height={30} className='invert-100 ml-[-3px]' />,
                    username: "@narulakhushii",
                    link: "https://www.instagram.com/narulakhushii",
                    target: "_blank"
                },
                {
                    name: "Linkedin",
                    icon: <Image src={linkedin_icon} alt='discord icon' width={30} height={30} className='invert-100 ml-[-3px]' />,
                    username: "Khushi Narula",
                    link: "https://www.linkedin.com/in/khushi-narula-048513410?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
                    target: "_blank"
                }
            ],
            desc: "I'm Khushi Narula, and I enjoy thinking a few steps ahead, whether it's on a chessboard or while exploring the business world. I’ve always been drawn to strategy, creativity, and unconventional ways to approach challenges. While I'm not a tech enthusiast, I love exploring ideas, understanding what makes them work, and turning them into something engaging. For me, Alphabit is a chance to turn imagination into design, explore new perspectives, and create something not just visually appealing, but that tells a story.",
            role: "Vice Department Head (Creatica)",
            profile_pic: "https://plain-apac-prod-public.komododecks.com/202610/01/pa1qgOuwEEX5MQUAPtKN/image.jpg"
        },

        {
            name: "Rabia Kaur ",
            social_handles: [
                {
                    name: "Email",
                    icon: <Mail />,
                    username: "bhatia.rabia.11@gmail.com",
                    link: "",
                    target: "_self"
                },
                {
                    name: "Instagram",
                    icon: <Image src={insta_icon} alt='insta icon' width={30} height={30} className='invert-100 ml-[-3px]' />,
                    username: "@rabia.k.b",
                    link: "https://www.instagram.com/rabia.k.b",
                    target: "_blank"
                },
            ],
            desc: "Hi I’m rabia! I’m an artist and want to pursue clinical psychology in the future. I’m intrigued by the concept of two different realities existing simultaneously. I’m fascinated by the working of the human mind and its impact on behaviour. Besides my interest in psychology I enjoy baking, reading, crocheting, fashion history and I plan to open a suicide prevention non profit organisation and an art gallery in the future.",
            role: "Department Head (Creatica)",
            profile_pic: "https://i.ibb.co/VYxR3rTS/Whats-App-Image-2026-10-02-at-8-14-42-AM.jpg"
        },

        {
            name: "Riddhima Baluni",
            social_handles: [
                {
                    name: "Email",
                    icon: <Mail />,
                    username: "ridhimabaluni1977@gmail.com",
                    link: "",
                    target: "_self"
                },
                {
                    name: "Discord",
                    icon: <Image src={discord_icon} alt='discord icon' width={30} height={30} />,
                    username: "rb_what_88742",
                    link: "",
                    target: "_blank"
                }
            ],
            desc: "I love exploring new ideas, experimenting with creative solutions, and turning concepts into engaging experiences. Being part of Alphabit gives me the opportunity to connect with like-minded peers, bring innovative ideas to life, and contribute to an event that inspires and excites everyone involved. I believe in collaboration, learning through doing, and making every project a meaningful and memorable experience.",
            role: "Department Head - Creatica",
            profile_pic: "https://i.ibb.co/twdJLB50/Whats-App-Image-2025-10-12-at-20-21-14-4778facc.jpg"
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

                <div className='sm:px-16 pt-4 sm:grid grid-cols-4 gap-3 justify-self-center'>
                    {Array.isArray(team) && team.map((team) => {
                        return (
                            <div className="card w-[21.5rem] h-auto border-2 border-gray-800 rounded-2xl bg-gray-800/80 mt-3 scale-[0.9] sm:grid" key={team.name}>
                                <div className="img "> <Image src={team.profile_pic} width={350} height={0} alt='img' className='rounded-t-2xl h-[405px]' /></div>
                                <div className="body p-3 ">
                                    <div className="heading font-bold text-2xl ">{team.name}</div>
                                    <div className="desc text-[0.95rem] mb-5 mt-5">{team.desc}</div>
                                    {Array.isArray(team.social_handles) && team.social_handles.map((social_handles) => {
                                        return (
                                            <div className="date flex mb-3 gap-2 text-gray-300 text-[0.95rem]" key={social_handles.name}>{social_handles.icon} <Link href={social_handles.link} target={social_handles.target} className='text-blue-300 hover:text-blue-500 hover:underline'>{social_handles.username} </Link></div>
                                        )
                                    })}
                                </div>
                                <p className='bg-black text-center h-auto rounded-b-2xl pt-[0.5rem] px-1 text-lg font-bold self-end'>{team.role}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Page
