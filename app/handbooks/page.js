"use client";
import React from "react";
import { Button } from "../Components/ui/button";
import { Download } from 'lucide-react';
import Image from "next/image"

const events = [
    {
        name: "Debug.Log",
        img: "https://i.ibb.co/dNpSh4w/for-debug.jpg",
        description: "The ultimate battleground for coding aficionados seeking to showcase their problem-solving abilities. Challenge yourself against the best and battle the clock in this high-intensity coding competition!",
        pdfPath: '/Handbooks/debug.log handbook (1).pdf'
    },
    {
        name: "Q?Bit",
        img: "https://i.ibb.co/d44ZPgNt/for-qbit.jpg",
        description: "Q?Bit is a thrilling quiz that tests your knowledge of the ever-evolving world of technology. Whether you're a tech enthusiast, or just curious about the latest innovations, this quiz is designed to engage and educate.",
        pdfPath: '/Handbooks/qbit handbook final.pdf'
    }
];

const handleDownload = (pdfPath) => {
    window.open(pdfPath, '_blank');
};

export default function HandbookRelease() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 text-center pt-[10vh]">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
                Handbook Release
            </h1>
            <p className="text-gray-300 text-sm md:text-base mb-10">
                Download the official handbook prompts below.
            </p>

            <div className="relative flex justify-between items-center mb-[20px] p-6 border border-white rounded-xl">
                <div className="space-y-3">
                    <h2 className="text-3xl md:text-3xl font-bold text-foreground tracking-tight mr-[7rem]">
                        Guidelines and Feedback
                    </h2>
                </div>

                <button
                    onClick={() => handleDownload('/Handbooks/guidelines handbook.pdf')}
                    className="w-auto h-[50px] flex items-center justify-center gap-3 px-6 py-4 rounded-xl border-2 border-foreground/20 bg-foreground/5 text-foreground font-medium transition-all duration-300 hover:bg-foreground hover:text-background hover:border-foreground hover:shadow-lg hover:shadow-foreground/20 group/btn cursor-pointer"
                >
                    <Download className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-y-0.5 " />
                    <span>Download Handbook</span>
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
                {events.map((event, index) => (
                    <div
                        key={index}
                        className="group relative overflow-hidden rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-foreground/20"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        <div className="relative space-y-6">
                            <div className="space-y-3">
                                <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                                    {event.name}
                                </h2>
                                <Image src={event.img} width={400} height={100} alt='img' className='rounded-2xl w-[500px] h-[300px]' />
                                <p className="text-muted-foreground leading-relaxed">
                                    {event.description}
                                </p>
                            </div>

                            <button
                                onClick={() => handleDownload(event.pdfPath)}
                                className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl border-2 border-foreground/20 bg-foreground/5 text-foreground font-medium transition-all duration-300 hover:bg-foreground hover:text-background hover:border-foreground hover:shadow-lg hover:shadow-foreground/20 group/btn cursor-pointer"
                            >
                                <Download className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-y-0.5" />
                                <span>Download Handbook</span>
                            </button>
                        </div>

                        <div className="absolute -top-12 -right-12 w-32 h-32 bg-foreground/5 rounded-full blur-3xl transition-all duration-300 group-hover:bg-foreground/10" />
                        <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-foreground/5 rounded-full blur-3xl transition-all duration-300 group-hover:bg-foreground/10" />
                    </div>
                ))}
            </div>
        </div>
    );
}