"use client";
import React from "react";
import { Button } from "../Components/ui/button";
import { Download } from 'lucide-react';
import Image from "next/image"

const events = [
    {
        name: 'Creatica',
        description: 'Creatica is a thrilling graphic design contest where creativity turns abstract prompts into striking visuals — from covers to posters to brand boards.',
        pdfPath: '/prompts/creatica.pdf',
        img: "https://i.ibb.co/tphxd0VK/for-creatica.webp",
    },
    {
        name: 'Innovat-a-thon',
        description: 'Join us for an exhilarating Hackathon where innovation meets coding — build web apps, solve real-world problems, and race against time with your team!',
        pdfPath: '/prompts/innovat-a-thon.pdf',
        img: "https://i.ibb.co/spR1sz6D/for-hackathon.webp",
    },
];

const handleDownload = (pdfPath) => {
    window.open(pdfPath, '_blank');
};

export default function PromptRelease() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
                Prompt Release
            </h1>
            <p className="text-gray-300 text-sm md:text-base mb-10">
                Download the official event prompts below.
            </p>

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
                                <span>Download Prompt</span>
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
