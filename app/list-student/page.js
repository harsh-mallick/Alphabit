"use client"
import React, { useState, useEffect } from 'react'
import FileDownloader from "../Components/FileDownloader"
import Loading from '../Components/Loading'
import { useRouter } from 'next/navigation'

const Page = () => {
    const [isfetching, setisfetching] = useState(true)
    const router = useRouter()
    const [data, setdata] = useState(null)
    const fetchdata = async () => {
        if (isfetching) {
            try {
                const response = await fetch("/api/get-all-student", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ role: localStorage.getItem("role") }),
                });

                const data = await response.json();
                // console.log("Profile data:", data.data);

                setisfetching(false);
                setdata(data.data)
                console.log(data)
                if (data.success == false) {
                    router.push("/")
                }
            } catch (error) {
                console.error("Error fetching profile:", error);
            }
        }
    };

    useEffect(() => {
        fetchdata();
    }, []);

    if (isfetching) {
        return (
            <div className='pt-[10vh]'>
                <Loading />
            </div>
        )
    } else {
        return (
            <div className='pt-[10vh] h-[93vh]'>
                <h1 className='text-center font-bold text-3xl'>List of Students Registered</h1>
                <p className='justify-items-end'><FileDownloader student_data={data} filename="Registered students" /></p>
                <table className='justify-self-center mt-7'>
                    <tr>
                        <th className='border-gray-400 border-2 p-2'>Name of Student</th>
                        <th className='border-gray-400 border-2 p-2'>Class</th>
                        <th className='border-gray-400 border-2 p-2'>School</th>
                        <th className='border-gray-400 border-2 p-2'>Email</th>
                        <th className='border-gray-400 border-2 p-2'>Phone Number</th>
                        <th className='border-gray-400 border-2 p-2'>Competiton Category</th>
                        <th className='border-gray-400 border-2 p-2'>Teacher Incharge</th>
                        {/* <th className='border-gray-400 border-2 p-2'>Delete</th> */}
                    </tr>
                    {Array.isArray(data) && data.map((student) => {
                        return (
                            <tr key={student.name}>
                                <td className='border-gray-400 px-2 border-2 py-1'>{student.name}</td>
                                <td className='border-gray-400 px-2 border-2 py-1'>{student.class_}</td>
                                <td className='border-gray-400 px-2 border-2 py-1'>{student.school_name}</td>
                                <td className='border-gray-400 px-2 border-2 py-1'>{student.email}</td>
                                <td className='border-gray-400 px-2 border-2 py-1'>{student.phonenumber}</td>
                                <td className='border-gray-400 px-2 border-2 py-1'>{student.competition_category}</td>
                                <td className='border-gray-400 px-2 border-2 py-1'>{student.teacher_incharge}</td>
                                {/* <td className='border-gray-400 px-2 border-2 py-1 text-center'><Trash2 className='text-red-700 text-center cursor-pointer' /></td> */}
                            </tr>
                        )
                    })}

                </table>
            </div>
        )
    }
}

export default Page
