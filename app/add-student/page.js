"use client"
import React, { useState, useEffect } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../Components/ui/select";

import { Trash2 } from 'lucide-react';

const Page = () => {
    const [isfetching, setisfetching] = useState(true)
    const [data, setdata] = useState(null)
    const fetchdata = async () => {
        if (isfetching) {
            try {
                const response = await fetch("/api/get-student", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ school_name: localStorage.getItem("school_name") }),
                });

                const data = await response.json();
                // console.log("Profile data:", data.data);

                setisfetching(false);
                setdata(data.data)
            } catch (error) {
                console.error("Error fetching profile:", error);
            }
        }
    };

    useEffect(() => {
        fetchdata();
    }, []);

    const [student_reg, setstudent_reg] = useState({
        name: "",
        class_: "",
        email: "",
        competition_category: "",
        phonenumber: ""
    })
    const add_student = async () => {
        const response = await fetch("/api/add-student", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                student_reg, teacher_incharge: `${localStorage.getItem("teacher_incharge")}`, teacher_incharge_clerkID: `${localStorage.getItem("teacher_incharge_clerkID")}`, school_name: `${localStorage.getItem("school_name")}`
            })
        })
        const data = await response.json()
        // console.log(data)
        if (data.status_code === 500 || !data) {
            console.log("Failed to add student")
        } else {
            window.alert(data.message)
            window.location.reload()
        }
    }
    return (
        <div className='pt-[10vh] flex h-[100vh]'>
            <div className='left w-[65%] h-[90vh]'>
                <h1 className='text-center font-bold text-3xl'>List of Students Registered</h1>
                <table className='justify-self-center mt-7'>
                    <tr>
                        <th className='border-gray-400 border-2 p-2'>Name of Student</th>
                        <th className='border-gray-400 border-2 p-2'>Class</th>
                        <th className='border-gray-400 border-2 p-2'>Email</th>
                        <th className='border-gray-400 border-2 p-2'>Phone Number</th>
                        <th className='border-gray-400 border-2 p-2'>Competiton Category</th>
                        <th className='border-gray-400 border-2 p-2'>Delete</th>
                    </tr>
                    {Array.isArray(data) && data.map((student) => {
                        return (
                            <tr key={student.name}>
                                <td className='border-gray-400 px-2 border-2 py-1'>{student.name}</td>
                                <td className='border-gray-400 px-2 border-2 py-1'>{student.class_}</td>
                                <td className='border-gray-400 px-2 border-2 py-1'>{student.email}</td>
                                <td className='border-gray-400 px-2 border-2 py-1'>{student.phonenumber}</td>
                                <td className='border-gray-400 px-2 border-2 py-1'>{student.competition_category}</td>
                                <td className='border-gray-400 px-2 border-2 py-1 text-center'><Trash2 className='text-red-700 text-center cursor-pointer' /></td>
                            </tr>
                        )
                    })}

                </table>
            </div>

            <div className='right border-l-2 border-gray-500 flex justify-center w-[35%] h-full pt-16'>
                <div className="card border-2 border-gray-400 p-8 rounded-2xl h-[70vh] shadow-xl shadow-gray-700/70">
                    <div className="cardhead">
                        <p className="title font-bold text-3xl">Add Your Student</p>
                        <p className="subtitile text-gray-400 text-[1.1rem] mt-2">Please fill the below fields to add your sudents.</p>
                    </div>
                    <div className="cardbody mt-7">
                        <div className='flex gap-3'>
                            <input type="text" name="name" id="name" value={student_reg.name} onChange={(e) => setstudent_reg({ ...student_reg, name: e.target.value })} placeholder='Enter name' className=' border-2 border-gray-300 p-2 rounded-md bg-gray-800/50 w-[22rem]' />
                        </div>
                        <div className='flex gap-3 mt-2'>
                            <input type="text" name="class" id="class" value={student_reg.class_} onChange={(e) => setstudent_reg({ ...student_reg, class_: e.target.value })} placeholder='Enter class' className='border-2 border-gray-300 p-2 rounded-md bg-gray-800/50 w-[22rem]' />
                        </div>
                        <div className='flex gap-3 mt-2'>
                            <input type="text" name="email" id="email" value={student_reg.email} onChange={(e) => setstudent_reg({ ...student_reg, email: e.target.value })} placeholder='Enter email' className=' border-2 border-gray-300 p-2 rounded-md bg-gray-800/50 w-[22rem]' />
                        </div>
                        <div className='flex gap-3 mt-2'>
                            <input type="text" name="phonenumber" id="phonenumber" value={student_reg.phonenumber} onChange={(e) => setstudent_reg({ ...student_reg, phonenumber: e.target.value })} placeholder='Enter phone number' className=' border-2 border-gray-300 p-2 rounded-md bg-gray-800/50 w-[22rem]' />
                        </div>
                        <div className='mt-2'>
                            <Select className="" onValueChange={(value) => setstudent_reg({ ...student_reg, competition_category: value })}>
                                <SelectTrigger className="border-2 border-gray-300 p-2 rounded-md bg-gray-800/50 w-[22rem] focus:outline-none">
                                    <SelectValue placeholder="Select your field of interest" />
                                </SelectTrigger>
                                <SelectContent className="text-white bg-gray-800/85 w-[22rem]">
                                    <SelectItem value="Cretica" className="hover:bg-gray-900/90">Cretica</SelectItem>
                                    <SelectItem value="Debug.Log" className="hover:bg-gray-900/90">Debug.Log</SelectItem>
                                    <SelectItem value="Innovat-a-Thon" className="hover:bg-gray-900/90">Innovat-a-Thon</SelectItem>
                                    <SelectItem value="Q?bit" className="hover:bg-gray-900/90">Q?bit</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <button className='to-75% via-20% from-blue-700 via-blue-600 to-purple-800 bg-gradient-to-r text-lg font-bold mt-7 rounded-md w-full h-12 cursor-pointer hover:from-blue-900 hover:via-blue-800 hover:to-purple-900' onClick={add_student}>Send Message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page
