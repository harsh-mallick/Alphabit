"use client";
import React from "react";
import { Button } from "../Components/ui/button";
import { Download } from 'lucide-react';
import Image from "next/image"
import DialogViewer from "../Components/'Dialog"
import { useUser } from '@clerk/clerk-react'
import { useMemo, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Loading from "../Components/Loading";

const FormDisplay = () => {
    const [eventName, setEventName] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [file, setFile] = useState(null);
    const [success, setSuccess] = useState(true)
    const [uploadError, setUploadError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSuccess(false);
        setUploadError("");

        const formData = new FormData();

        formData.append("eventName", eventName);
        formData.append("description", description);
        formData.append("image", image);
        formData.append("file", file);

        try {
            const response = await fetch("/api/upload-prompt", {
                method: "POST",
                body: formData,
            });

            const text = await response.text();

            console.log("Status:", response.status);
            console.log("Response:", text);

            const data = JSON.parse(text);

            if (!response.ok || data.success === false) {
                setUploadError(data.error || data.message || "Upload failed");
                setSuccess(true);
                return;
            }



            console.log(data);

            if (data.success === true) {
                window.location.reload();
            }

        } catch (error) {
            console.error("Upload failed:", error);

            setUploadError(
                error.message || "Something went wrong while uploading the file."
            );

            setSuccess(true);
        }
    }
    return (
        <div className='w-auto pl-5'>
            <form onSubmit={handleSubmit}>
                <br />
                <div className='flex gap-2 text-lg font-bold text-white '><p className='w-56 text-left pl-5'>Event Name:</p> <input type="text" name="name_event" id="name_event" onChange={(e) => setEventName(e.target.value)} placeholder='Enter Title...' className='bg-white text-black px-2 rounded-md text-box font-normal text-base' /></div>
                <div className='flex gap-2 text-lg font-bold text-white mt-3'><p className='w-56 text-left pl-5'>Description:</p> <textarea name="desc_event" id="desc_event" onChange={(e) => setDescription(e.target.value)} placeholder='Enter Description...' className='bg-white text-black px-2 rounded-md text-box font-normal text-base' /></div>
                <div className='flex gap-2 text-lg font-bold text-white mt-3'><p className='w-56 text-left pl-5'>File:</p> <input type="file" name="file" id="file" onChange={(e) => setFile(e.target.files[0])} placeholder='Enter Project URL...' className='bg-white text-black px-2 rounded-md text-box font-normal text-base' /></div>
                <div className='flex gap-2 text-lg font-bold text-white mt-3'><p className='w-56 text-left pl-5'>Image:</p> <input type="file" name="image" id="image" onChange={(e) => setImage(e.target.files[0])} placeholder='Enter Image URL...' className='bg-white text-black px-2 rounded-md text-box font-normal text-base' /></div>

                <button
                    type="submit"
                    disabled={!success}
                    className={`font-bold px-4 py-2 rounded-md mt-8 ${success
                        ? "bg-white text-black cursor-pointer"
                        : "bg-gray-500 text-gray-300 cursor-not-allowed"
                        }`}
                >
                    {success ? "Submit" : "Please wait, PDF is uploading..."}
                </button>
            </form>
            {uploadError && (
                <p className="text-red-500 font-semibold mt-4">
                    {uploadError}
                </p>
            )}
        </div>
    )
}


const handleDownload = (pdfPath) => {
    window.open(pdfPath, '_blank');
};

export default function PromptRelease() {
    const { user } = useUser();
    const router = useRouter();
    const [loading, setIsloading] = useState(true);
    const userInfo = useMemo(() => ({
        role: user?.publicMetadata.role
    }), [user]);

    const [promptData, setpromptData] = useState(null);

    const getPromptData = async () => {
        try {
            const response = await fetch("/api/getPrompt");
            const data = await response.json();
            setpromptData(data.data);
            setIsloading(false);
            console.log("Fetched Data:", data);
        } catch (error) {
            console.error("Cannot fetch data: ", error);
            router.push('/')
        }
    };
    useEffect(() => {
        getPromptData();
    }, []);

    if (loading) {
        return <Loading />
    } else {
        return (
            <div className="min-h-screen flex flex-col items-center px-6 py-12 text-center pt-[10vh]">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
                    Prompt Release
                </h1>
                <p className="text-gray-300 text-sm md:text-base mb-10">
                    Download the official event prompts below.
                </p>

                <div className='w-full bg-none justify-self-end text-right mr-8'>
                    {!user ? "" : !userInfo.role ? "" : userInfo.role === process.env.NEXT_PUBLIC_ADMIN_CODE ? <DialogViewer trigger_name={"+ Add Prompt"} title={"Add a New Prompt"} description={"Fill the following fields to create/add a new prompt"} formElement={<FormDisplay user_id={user.id} />} /> : ""}
                </div>
                {Array.isArray(promptData) && promptData.length == 0 ? <div className="w-full justify-self-center">No prompts have be published as of now</div> :
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">

                        {Array.isArray(promptData) && promptData.map((promptData, index) => (
                            <div
                                key={index}
                                className="group relative overflow-hidden rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-foreground/20"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                <div className="relative space-y-6">
                                    <div className="space-y-3">
                                        <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                                            {promptData.eventName}
                                        </h2>
                                        <Image src={promptData.image} width={400} height={100} alt='img' className='rounded-2xl w-[500px] h-[300px]' />
                                        <p className="text-muted-foreground leading-relaxed">
                                            {promptData.description}
                                        </p>
                                    </div>

                                    <button
                                        onClick={() => handleDownload(promptData.fileUrl)}
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
                    </div>}
            </div>
        );
    }
}
