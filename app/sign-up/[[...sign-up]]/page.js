"use client"
import React, { useState, useEffect } from "react";
import { useSignUp } from "@clerk/nextjs";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Button } from "../../Components/ui/button";
import { Input } from "../../Components/ui/input";
import { Mail, Lock, User, Loader2, Phone, Hash } from "lucide-react";
import { motion } from "motion/react";
import "../../globals.css";

const Page = () => {
    const { signUp, isLoaded, setActive } = useSignUp();
    const [verifying, setVerifying] = useState(false);
    const [verificationCode, setVerificationCode] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [verificationError, setVerificationError] = useState(null);
    const [authError, setAuthError] = useState(null);
    const [phonenumber, setphonenumber] = useState(null);
    const [school_name, setschool_name] = useState(null);
    const [clerkID, setclerkID] = useState(null);
    const [name, setname] = useState(null);
    const router = useRouter();

    const formSchema = z
        .object({
            first_name: z.string().min(1, "First name is required"),
            last_name: z.string().min(1, "Last name is required"),
            email: z.string().email("Invalid email address"),
            phonenumber: z.string().min(10, "Phone number is too short"),
            school_name: z.string().min(1, "School name is required"),
            password: z.string().min(8, "Password must be at least 8 characters"),
            passwordConfirmation: z.string(),
        })
        .refine((data) => data.password === data.passwordConfirmation, {
            message: "Passwords do not match",
            path: ["passwordConfirmation"],
        });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: zodResolver(formSchema) });

    const onSubmit = async (data) => {
        if (!isLoaded) return;
        setIsSubmitting(true);
        setAuthError(null);

        try {
            const UUID = crypto.randomUUID();
            await signUp.create({
                emailAddress: data.email,
                password: data.password,
                firstName: data.first_name,
                lastName: data.last_name,
                username: UUID,
                publicMetadata: {
                    phonenumber: data.phonenumber,
                    school_name: data.school_name,
                },
                privateMetadata: { role: "Teacher Incharge" },
            });

            setphonenumber(data.phonenumber);
            setschool_name(data.school_name);
            setclerkID(UUID);
            setname(`${data.first_name} ${data.last_name}`);

            await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
            setVerifying(true);
        } catch (error) {
            console.log("Signup error: ", error.errors?.[0]?.message);
            setAuthError(error.errors?.[0]?.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleVerificationSubmit = async (e) => {
        e.preventDefault();
        if (!isLoaded || !signUp) return;
        setIsSubmitting(true);
        setAuthError(null);

        try {
            const result = await signUp.attemptEmailAddressVerification({
                code: verificationCode,
            });
            if (result.status === "complete") {
                const response = await fetch("/api/signup", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ phonenumber, school_name, clerkID, name }),
                });
                const data = await response.json();
                if (response.status === 500 || !data) {
                    console.log("Failed to register user");
                } else {
                    await setActive({ session: result.createdSessionId });
                    router.push("/add-student");
                }
            } else {
                setVerificationError("Verification could not be completed");
            }
        } catch (error) {
            setVerificationError(
                error.errors?.[0]?.message || "An error occurred during signup."
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    const [particles, setParticles] = useState([]);

    useEffect(() => {
        const particleCount = 17;
        const colors = ["#3B82F6", "#10B981", "#7C3AED", "#0EA5E9", "#6366F1"];
        const newParticles = Array.from({ length: particleCount }).map((_, i) => ({
            key: i,
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            radius: Math.random() * 3 + 2,
            color: colors[Math.floor(Math.random() * colors.length)],
        }));
        setParticles(newParticles);
    }, []);

    // ====== Verification Page ======
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
                            <label
                                htmlFor="verificationCode"
                                className="text-sm font-medium"
                            >
                                Verification Code
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                                <Input
                                    id="verificationCode"
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
                                <p className="text-sm text-red-500 mt-1">
                                    {verificationError}
                                </p>
                            )}
                        </div>

                        <Button
                            type="submit"
                            className="w-full cursor-pointer"
                            disabled={isSubmitting || verificationCode.length !== 6}
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Verifying...
                                </>
                            ) : (
                                "Verify"
                            )}
                        </Button>
                    </form>
                    <p className="text-xs text-muted-foreground text-center mt-4">
                        Didn’t receive the code? Check your spam folder.
                    </p>
                </div>
            </div>
        );
    }

    // ====== Main Form ======
    return (
        <div className="parent text-white pt-[10vh] min-h-screen pb-[2vh] relative overflow-hidden">
            {particles.map((p) => (
                <motion.div
                    key={p.key}
                    initial={{ top: p.y, left: p.x }}
                    animate={{
                        x: [`${Math.random() * 10 - 5}vw`],
                        y: [`${Math.random() * 10 - 5}vh`],
                    }}
                    transition={{
                        repeat: Infinity,
                        repeatType: "mirror",
                        duration: 20,
                        ease: "easeInOut",
                    }}
                    style={{
                        backgroundColor: p.color,
                        borderRadius: "50%",
                        width: `${p.radius}rem`,
                        height: `${p.radius}rem`,
                        position: "fixed",
                        filter: "blur(8px)",
                        zIndex: 0,
                    }}
                />
            ))}

            <div className="text-center mb-6 z-[2] max-sm:px-4">
                <h1 className="text-3xl font-space-grotesk font-bold mb-2 max-sm:text-2xl">
                    Create Account (Teacher Incharge)
                </h1>
                <p className="text-muted-foreground max-sm:text-sm">
                    Join us for a wonderful experience
                </p>
            </div>

            <div className="w-full grid justify-items-center z-[1] px-4">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="backdrop-blur-xl z-[2] min-w-[40vw] w-[80vw] h-[70vh] 
          border-2 border-white p-5 rounded-lg flex flex-col flex-wrap 
          justify-evenly items-stretch max-sm:min-w-[90vw] max-sm:h-auto 
          max-sm:p-4 max-sm:space-y-3 sm:gap-3"
                >
                    <div className="sm:w-[50%]">
                        {/* First Name */}
                        <div className="space-y-2 mx-3.5 sm:mb-4">
                            <label className="text-sm font-medium">First Name</label>
                            <div className="relative">
                                <User className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                                <Input
                                    placeholder="First Name"
                                    className="pl-10 text-black"
                                    {...register("first_name")}
                                />
                            </div>
                            {errors.first_name && (
                                <p className="text-red-500 text-sm">{errors.first_name.message}</p>
                            )}
                        </div>

                        {/* Last Name */}
                        <div className="space-y-2 mx-3.5 sm:mb-4">
                            <label className="text-sm font-medium">Last Name</label>
                            <div className="relative">
                                <User className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                                <Input
                                    placeholder="Last Name"
                                    className="pl-10 text-black"
                                    {...register("last_name")}
                                />
                            </div>
                            {errors.last_name && (
                                <p className="text-red-500 text-sm">{errors.last_name.message}</p>
                            )}
                        </div>

                        {/* Email */}
                        <div className="space-y-2 mx-3.5 sm:mb-4">
                            <label className="text-sm font-medium">Email</label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                                <Input
                                    type="email"
                                    placeholder="you@example.com"
                                    className="pl-10 text-black"
                                    {...register("email")}
                                />
                            </div>
                            {errors.email && (
                                <p className="text-red-500 text-sm">{errors.email.message}</p>
                            )}
                        </div>

                        {/* Phone Number */}
                        <div className="space-y-2 mx-3.5 sm:mb-4">
                            <label className="text-sm font-medium">Phone Number</label>
                            <div className="relative">
                                <Phone className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                                <Input
                                    type="tel"
                                    placeholder="Your phone number"
                                    className="pl-10 text-black"
                                    {...register("phonenumber")}
                                />
                            </div>
                            {errors.phonenumber && (
                                <p className="text-red-500 text-sm">
                                    {errors.phonenumber.message}
                                </p>
                            )}
                        </div>

                        {/* School Name */}
                        <div className="space-y-2 mx-3.5 sm:mb-4">
                            <label className="text-sm font-medium">School Name</label>
                            <div className="relative">
                                <Hash className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                                <Input
                                    placeholder="Your school name"
                                    className="pl-10 text-black"
                                    {...register("school_name")}
                                />
                            </div>
                            {errors.school_name && (
                                <p className="text-red-500 text-sm">
                                    {errors.school_name.message}
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="sm:w-[50%]">
                        {/* Password */}
                        <div className="space-y-2 mx-3.5">
                            <label className="text-sm font-medium">Password</label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                                <Input
                                    type="password"
                                    placeholder="••••••••"
                                    className="pl-10 text-black"
                                    {...register("password")}
                                />
                            </div>
                            {errors.password && (
                                <p className="text-red-500 text-sm">{errors.password.message}</p>
                            )}
                        </div>

                        {/* Confirm Password */}
                        <div className="space-y-2 mx-3.5">
                            <label className="text-sm font-medium">Confirm Password</label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                                <Input
                                    type="password"
                                    placeholder="••••••••"
                                    className="pl-10 text-black"
                                    {...register("passwordConfirmation")}
                                />
                            </div>
                            {errors.passwordConfirmation && (
                                <p className="text-red-500 text-sm">
                                    {errors.passwordConfirmation.message}
                                </p>
                            )}
                        </div>

                        {/* Auth Error */}
                        {authError && (
                            <p className="text-red-500 text-sm text-center">{authError}</p>
                        )}

                        {/* Submit */}
                        <div className="sm:w-full sm:flex sm:justify-center mt-2 sm:mt-8 sm:mb-7">
                            <Button type="submit" className="w-[25rem] text-center cursor-pointer text-[1.3rem] justify-self-center bg-[#21275b] hover:bg-[#343479] max-sm:w-full max-sm:text-base" disabled={isSubmitting}>
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Creating account...
                                    </>
                                ) : (
                                    "Sign Up"
                                )}
                            </Button>
                        </div>
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
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Page;
