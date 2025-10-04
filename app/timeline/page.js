"use client"
import React from 'react'
import Image from "next/image"
import timeline_image from "../Image/timelinebg.jpg"

const Page = () => {
    return (
        <div className='text-[#f3f4f6] font-sans min-h-screen   z-[-2] timeline_bg_1'>
            {/* <div className='h-full'>
                <Image height={0} width={0} src={timeline_image} alt='bg_image' className='timeline_bg' />
            </div> */}
            <div className='w-full bg-black/45 pt-10 pb-8 px-8'>
                <div class="max-w-4xl mx-auto z-10">
                    <h1 class="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#884ded] to-[#5390f2]">
                        <span class="text-2xl block font-normal opacity-70">Alphabit Tech Fest 2025</span>
                        Event Timeline
                    </h1>

                    <div class="relative">
                        <div class="timeline-line hidden md:block"></div>

                        <div class="flex flex-col md:flex-row md:justify-end w-full mb-16 left-event">
                            <div class="md:w-5/12 p-4 md:text-right bg-gradient-to-r from-[#7c3aed]/30 via-gray-900/50 to-transparent hover:from-[#7c3aed]/40 duration-300 tech-glow-purple bg-opacity-10 rounded-lg border border-[#7c3aed]/30 shadow-xl relative z-10 hover:scale-[1.05] transition-all ease-in-out">
                                <h3 class="text-2xl font-bold mb-2 text-white">1. Registration</h3>
                                <p class="text-lg mb-2">6th - 27th October</p>
                                <p class="text-sm opacity-80">Secure your spot for the Tech Fest!</p>
                            </div>
                            <div class="flex justify-center md:block md:w-2/12 relative">
                                <div class="absolute inset-y-0 flex items-center md:left-1/2 md:transform md:-translate-x-1/2">
                                    <div class="w-10 h-10 bg-[#3b82f6] rounded-full items-center justify-center border-4 border-[#0a0a0a] shadow-lg z-20 hidden md:flex">
                                        <span class="text-white text-xl font-bold hidden md:block">1</span>
                                    </div>
                                </div>
                            </div>
                            <div class="hidden md:block md:w-5/12"></div>
                        </div>
                        <div class="timeline-arrow top-[13.5rem] hidden md:block"></div>

                        <div class="flex flex-col md:flex-row md:justify-start w-full mb-16 right-event">
                            <div class="hidden md:block md:w-5/12"></div>
                            <div class="flex justify-center md:block md:w-2/12 relative">
                                <div class="absolute inset-y-0 flex items-center md:left-1/2 md:transform md:-translate-x-1/2">
                                    <div class="w-10 h-10 bg-[#7c3aed] rounded-full hidden md:flex items-center justify-center border-4 border-[#0a0a0a] shadow-lg z-20">
                                        <span class="text-white text-xl font-bold hidden md:block">2</span>
                                    </div>
                                </div>
                            </div>
                            <div class="md:w-5/12 p-4 md:text-left bg-gradient-to-l from-[#3b82f6]/30 via-gray-900/50 to-transparent hover:from-[#3b82f6]/40  duration-300 tech-glow-blue bg-opacity-10 rounded-lg border border-[#3b82f6]/30 shadow-xl relative z-10 hover:scale-[1.05] transition-all ease-in-out">
                                <h3 class="text-2xl font-bold mb-2 text-white">2. Prelims Announcement</h3>
                                <p class="text-lg mb-2">31st October</p>
                                <p class="text-sm opacity-80">The topics and format for the preliminary round are revealed.</p>
                            </div>
                        </div>
                        <div class="timeline-arrow top-[27.5rem] hidden md:block"></div>


                        <div class="flex flex-col md:flex-row md:justify-end w-full mb-16 left-event">
                            <div class="md:w-5/12 p-4 md:text-right bg-gradient-to-r from-[#7c3aed]/30 via-gray-900/50 to-transparent hover:from-[#7c3aed]/40 duration-300 tech-glow-purple bg-opacity-10 rounded-lg border border-[#7c3aed]/30 shadow-xl relative z-10 hover:scale-[1.05] transition-all ease-in-out">
                                <h3 class="text-2xl font-bold mb-2 text-white ">3. Prelims</h3>
                                <p class="text-lg mb-2">5th November</p>
                                <p class="text-sm opacity-80">The initial competitive coding/quiz round begins.</p>
                            </div>
                            <div class="flex justify-center md:block md:w-2/12 relative">
                                <div class="absolute inset-y-0 flex items-center md:left-1/2 md:transform md:-translate-x-1/2">
                                    <div class="w-10 h-10 bg-[#3b82f6] rounded-full hidden md:flex items-center justify-center border-4 border-[#0a0a0a] shadow-lg z-20">
                                        <span class="text-white text-xl font-bold hidden md:block">3</span>
                                    </div>
                                </div>
                            </div>
                            <div class="hidden md:block md:w-5/12"></div>
                        </div>
                        <div class="timeline-arrow top-[39.5rem] hidden md:block"></div>

                        <div class="flex flex-col md:flex-row md:justify-start w-full mb-16 right-event">
                            <div class="hidden md:block md:w-5/12"></div>
                            <div class="flex justify-center md:block md:w-2/12 relative">
                                <div class="absolute inset-y-0 flex items-center md:left-1/2 md:transform md:-translate-x-1/2">
                                    <div class="w-10 h-10 bg-[#7c3aed] rounded-full hidden md:flex items-center justify-center border-4 border-[#0a0a0a] shadow-lg z-20">
                                        <span class="text-white text-xl font-bold hidden md:block">4</span>
                                    </div>
                                </div>
                            </div>
                            <div class="md:w-5/12 p-4 md:text-left bg-gradient-to-l from-[#3b82f6]/30 via-gray-900/50 to-transparent hover:from-[#3b82f6]/40  duration-300 tech-glow-blue bg-opacity-10 rounded-lg border border-[#3b82f6]/30 shadow-xl relative z-10 hover:scale-[1.05] transition-all ease-in-out">
                                <h3 class="text-2xl font-bold mb-2 text-white">4. Prelims Result</h3>
                                <p class="text-lg mb-2">10th November</p>
                                <p class="text-sm opacity-80">The list of qualified teams for the final event is published.</p>
                            </div>
                        </div>
                        <div class="timeline-arrow top-[52.5rem] hidden md:block"></div>

                        <div class="flex flex-col md:flex-row md:justify-end w-full left-event">
                            <div class="md:w-5/12 p-4 md:text-right bg-gradient-to-r from-[#7c3aed]/30 via-gray-900/50 to-transparent hover:from-[#7c3aed]/40 duration-300 tech-glow-purple rounded-lg border border-[#7c3aed]/30 shadow-xl relative z-10 hover:scale-[1.05] transition-all ease-in-out">
                                <h3 class="text-3xl font-bold mb-2 text-white">5. Final Event</h3>
                                <p class="text-xl mb-2">12th November</p>
                                <p class="text-sm opacity-80">The grand finale and awards ceremony!</p>
                            </div>
                            <div class="flex justify-center md:block md:w-2/12 relative">
                                <div class="absolute inset-y-0 flex items-center md:left-1/2 md:transform md:-translate-x-1/2">
                                    <div class="w-12 h-12 bg-gradient-to-r from-[#7c3aed] to-[#3b82f6] rounded-full hidden md:flex items-center justify-center border-4 border-[#0a0a0a] shadow-2xl shadow-[#3b82f6]/50 z-20">
                                        <span class="text-white text-2xl font-bold hidden md:block">5</span>
                                    </div>
                                </div>
                            </div>
                            <div class="hidden md:block md:w-5/12"></div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Page
