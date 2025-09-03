"use client"
import React from "react";
import { useSignUp } from "@clerk/nextjs";
import { z } from "zod";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Button } from "../../Components/ui/button";
import { Input } from "../../Components/ui/input";
import { Mail, Lock, User, Loader2, Phone, BookOpen, Hash, Repeat } from "lucide-react";
import { mirrorEasing, motion } from "motion/react"
import "../../globals.css"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../../Components/ui/select";

const Page = () => {
    const { signUp, isLoaded, setActive } = useSignUp();
    const [verifying, setVerifying] = useState(false);
    const [verificationCode, setVerificationCode] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [verificationError, setVerificationError] = useState(null)
    const [authError, setAuthError] = useState(null);
    const [class_, setclass_] = useState(null)
    const [comp_category, setcomp_category] = useState(null)
    const [phonenumber, setphonenumber] = useState(null)
    const [school_name, setschool_name] = useState(null)
    const [clerkID, setclerkID] = useState(null)
    const [name, setname] = useState(null)

    const router = useRouter()
    const formSchema = z.object({
        first_name: z.string().min(1, "First name is required"),
        last_name: z.string().min(1, "Last name is required"),
        email: z.string().email("Invalid email address"),
        class_: z.string().min(1, "Class is required"),
        comp_category: z.string().min(1, "Field of Interest is required"),   // fixed
        phonenumber: z.string().min(10, "Phone number is too short"), // fixed
        school_name: z.string().min(1, "School name is required"), // fixed
        password: z.string().min(8, "Password must be at least 8 characters"),
        passwordConfirmation: z.string(),
    }).refine((data) => data.password === data.passwordConfirmation, {
        message: "Passwords do not match",
        path: ["passwordConfirmation"],
    });

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (data) => {
        if (!isLoaded) return;
        setIsSubmitting(true);
        setAuthError(null);

        try {
            const UUID = crypto.randomUUID()
            await signUp.create({
                emailAddress: data.email,
                password: data.password,
                firstName: data.first_name,
                lastName: data.last_name,
                username: UUID,
                publicMetadata: {
                    class_: data.class_,
                    comp_category: data.comp_category,
                    phonenumber: data.phonenumber,
                    school_name: data.school_name,
                },
                privateMetadata: {
                    role: "member",
                },
            });
            setclass_(data.class_)
            setcomp_category(data.comp_category)
            setphonenumber(data.phonenumber)
            setschool_name(data.school_name)
            setclerkID(UUID)
            setname(data.first_name + " " + data.last_name)

            await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
            setVerifying(true);
        } catch (error) {
            console.log("Signup error: ", error);
            setAuthError(error.errors?.[0]?.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleVerificationSubmit = async (e) => {
        e.preventDefault()
        if (!isLoaded || !signUp) return;
        setIsSubmitting(true)
        setAuthError(null)
        try {
            const result = await signUp.attemptEmailAddressVerification({
                code: verificationCode
            })
            if (result.status === "complete") {
                const response = await fetch("/api/signup", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        class_, comp_category, phonenumber, school_name, clerkID, name
                    })
                })
                const data = await response.json()
                if (response.status === 500 || !data) {
                    console.log("Failed to register user")
                } else {
                    await setActive({ session: result.createdSessionId })
                    router.push("/")
                }

            } else {
                console.log("Verification incomplete", result)
                setVerificationError("Verification could not be completed")
            }
        } catch (error) {
            setVerificationError(error.errors?.[0]?.message || "An error occured during signup.")
        } finally {
            setIsSubmitting(false)
        }
    };
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        const particleCount = 17;
        const newParticles = [];

        const colors = ['#3B82F6', '#10B981', '#7C3AED', '#0EA5E9', '#6366F1'];

        for (let i = 0; i < particleCount; i++) {
            newParticles.push({
                key: i,
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                radius: Math.random() * 3 + 2,
                color: colors[Math.floor(Math.random() * colors.length)],
            });
        }

        setParticles(newParticles);
    }, []);

    if (verifying) {
        if (verifying) {
            return (
                <div className="bg-[rgb(8,12,25)] text-white min-h-screen flex items-center justify-center px-4">
                    <div className="border border-white rounded-xl p-6 w-full max-w-md shadow-lg">
                        <h2 className="text-2xl font-bold mb-2 text-center font-space-grotesk">
                            Verify Your Email
                        </h2>
                        <p className="text-sm text-muted-foreground mb-4 text-center">
                            Enter the 6-digit code sent to your email address
                        </p>
                        <form onSubmit={handleVerificationSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="verificationCode" className="text-sm font-medium">
                                    Verification Code
                                </label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                                    <Input
                                        id="verificationCode"
                                        name="verificationCode"
                                        type="text"
                                        maxLength={6}
                                        placeholder="123456"
                                        className="pl-10 text-black bg-white"
                                        value={verificationCode}
                                        onChange={(e) => setVerificationCode(e.target.value)}
                                        required
                                    />
                                </div>
                                {verificationError && (
                                    <p className="text-sm text-red-500 mt-1">{verificationError}</p>
                                )}
                            </div>

                            <Button
                                type="submit"
                                className="w-full"
                                disabled={isSubmitting || verificationCode.length !== 6}
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Verifying...
                                    </>
                                ) : (
                                    "Verify"
                                )}
                            </Button>
                        </form>
                        <p className="text-xs text-muted-foreground text-center mt-4">
                            Didnt receive the code? Check your spam or promotions folder.
                        </p>
                    </div>
                </div>
            );
        }
        ;
    }

    return (
        <div className="parent text-white pt-[10vh] sm:h-auto h-auto min-h-screen pb-[2vh] z-[-1]">
            {Array.isArray(particles) && particles.map((particle) => (
                <motion.div
                    key={particle.key}
                    initial={{ top: particle.y, left: particle.x }}
                    animate={{
                        x: [
                            `${Math.random() * 10 - 5}vw`,
                            `${Math.random() * 10 - 5}vw`,
                            `${Math.random() * 10 - 5}vw`,
                        ],
                        y: [
                            `${Math.random() * 10 - 5}vh`,
                            `${Math.random() * 10 - 5}vh`,
                            `${Math.random() * 10 - 5}vh`,
                        ]
                    }}
                    transition={{
                        repeat: Infinity,
                        repeatType: 'mirror',
                        duration: 20,
                        ease: 'easeInOut',
                    }}
                    style={{
                        backgroundColor: `${particle.color}`,
                        borderRadius: "50%",
                        width: `${particle.radius}rem`,
                        height: `${particle.radius}rem`,
                        position: "fixed",
                        filter: "blur(8px)",
                        zIndex: "0",
                        content: " "
                    }}
                />
            ))}
            <div className="text-center mb-4 mt-2 z-[2]">
                <h1 className="text-3xl font-space-grotesk font-bold mb-2 z-[2]">
                    Create Account (Team Head)
                </h1>
                <p className="text-muted-foreground">
                    Join us for a wonderful experience
                </p>
            </div>
            <div className="w-full justify-items-center grid z-[-2]">
                <form onSubmit={handleSubmit(onSubmit)} className="backdrop-blur-xl z-[2] min-w-[40vw] h-[70vh] w-[80vw] space-y-4 just border-2 border-white p-5 rounded-lg flex flex-col flex-wrap content-stretch justify-evenly items-stretch">
                    <div className="space-y-2 mx-3.5 w-lg">
                        <label htmlFor="name" className="text-sm font-medium">
                            First Name
                        </label>
                        <div className="relative">
                            <User className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                            <Input
                                id="first_name"
                                name="name"
                                placeholder="First Name"
                                className="pl-10 text-black"
                                {...register("first_name")}
                                required
                            />
                        </div>
                        {errors.first_name && (<p className="text-red-500 text-sm">{errors.first_name.message}</p>)}
                    </div>

                    <div className="space-y-2 mx-3.5 w-lg">
                        <label htmlFor="name" className="text-sm font-medium">
                            Last Name
                        </label>
                        <div className="relative">
                            <User className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                            <Input
                                id="last_name"
                                name="name"
                                placeholder="Last Name"
                                className="pl-10 text-black"
                                {...register("last_name")}
                                required
                            />
                        </div>
                        {errors.last_name && (<p className="text-red-500 text-sm">{errors.last_name.message}</p>)}
                    </div>

                    <div className="space-y-2 mx-3.5 w-lg">
                        <label htmlFor="email" className="text-sm font-medium">
                            Email
                        </label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="you@example.com"
                                className="pl-10 text-black"
                                {...register("email")}
                                required
                            />
                        </div>
                        {errors.email && (<p className="text-red-500 text-sm">{errors.email.message}</p>)}
                    </div>

                    <div className="space-y-2 mx-3.5 w-lg">
                        <label htmlFor="class_" className="text-sm font-medium">
                            Class
                        </label>
                        <div className="relative">
                            <BookOpen className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                            <Input
                                id="class_"
                                name="class_"
                                placeholder="Your class"
                                className="pl-10 text-black"
                                {...register("class_")}
                                required
                            />
                        </div>
                        {errors.class_ && (<p className="text-red-500 text-sm">{errors.class_.message}</p>)}
                    </div>

                    <div className="space-y-2 mx-3.5 w-lg">
                        <label htmlFor="comp_category" className="text-sm font-medium">
                            Competition Category
                        </label>
                        <Select onValueChange={(value) => setValue("comp_category", value)}
                        >
                            <SelectTrigger className="text-black">
                                <SelectValue placeholder="Select your field of interest" />
                            </SelectTrigger>
                            <SelectContent className="text-black">
                                <SelectItem value="Cretica">Cretica</SelectItem>
                                <SelectItem value="Debug.Log">Debug.Log</SelectItem>
                                <SelectItem value="Innovat-a-Thon">Innovat-a-Thon</SelectItem>
                                <SelectItem value="Q?bit">Q?bit</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-2 mx-3.5 w-lg">
                        <label htmlFor="phonenumber" className="text-sm font-medium">
                            Phone Number
                        </label>
                        <div className="relative">
                            <Phone className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                            <Input
                                id="phonenumber"
                                name="phonenumber"
                                type="tel"
                                placeholder="Your phone number"
                                className="pl-10 text-black"
                                {...register("phonenumber")}
                                required
                            />
                        </div>
                        {errors.phonenumber && (<p className="text-red-500 text-sm">{errors.phonenumber.message}</p>)}
                    </div>

                    <div className="space-y-2 mx-3.5 w-lg">
                        <label htmlFor="school_name" className="text-sm font-medium">
                            School Name
                        </label>
                        <div className="relative">
                            <Hash className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                            <Input
                                id="school_name"
                                name="school_name"
                                placeholder="Your school name"
                                className="pl-10 text-black"
                                {...register("school_name")}
                                required
                            />
                        </div>
                        {errors.school_name && (<p className="text-red-500 text-sm">{errors.school_name.message}</p>)}
                    </div>

                    <div className="space-y-2 mx-3.5 w-lg">
                        <label htmlFor="password" className="text-sm font-medium">
                            Password
                        </label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                placeholder="••••••••"
                                className="pl-10 text-black"
                                required
                                minLength={8}
                                {...register("password")}
                            />
                        </div>
                        {errors.password && (<p className="text-red-500 text-sm">{errors.password.message}</p>)}
                    </div>

                    <div className="space-y-2 mx-3.5 w-lg">
                        <label
                            htmlFor="passwordConfirmation"
                            className="text-sm font-medium"
                        >
                            Confirm Password
                        </label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                            <Input
                                id="passwordConfirmation"
                                name="passwordConfirmation"
                                type="password"
                                placeholder="••••••••"
                                className="pl-10 text-black"
                                required
                                minLength={8}
                                {...register("passwordConfirmation")}
                            />
                        </div>
                        {errors.passwordConfirmation && (<p className="text-red-500 text-sm">{errors.passwordConfirmation.message}</p>)}
                    </div>

                    <Button
                        type="submit"
                        className="w-[25rem] cursor-pointer text-[1.3rem] self-center bg-[#21275b] hover:bg-[#343479]"
                        size="lg"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Creating account...
                            </>
                        ) : (
                            "Sign Up"
                        )}
                    </Button>

                    <p className="text-center text-sm text-muted-foreground">
                        Already have an account?{" "}
                        <button
                            type="button"
                            onClick={() => router.push("/sign-in")}
                            className="text-primary hover:underline"
                        >
                            Sign in
                        </button>
                    </p>
                </form>
            </div>
        </div>
    )
};

export default Page;