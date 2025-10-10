"use client"
import React, { useState, useEffect } from 'react'
import FileDownloader from "../Components/FileDownloader"
import Loading from '../Components/Loading'
import { useRouter } from 'next/navigation'

const Page = () => {
    const [isFetching, setIsFetching] = useState(true)
    const router = useRouter()
    const [mongoData, setMongoData] = useState([])

    const fetchData = async () => {
        try {
            const response = await fetch("/api/get-all-school-list", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ role: localStorage.getItem("role") }),
            })

            const data = await response.json()
            if (!data.success) {
                router.push("/")
                return
            }

            setMongoData(data.data || [])
            setIsFetching(false)
        } catch (error) {
            console.error("Error fetching data:", error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    if (isFetching) {
        return (
            <div className='pt-[10vh]'>
                <Loading />
            </div>
        )
    }

    // ✅ Group students by school name
    const groupedData = mongoData.reduce((acc, student) => {
        const school = student.school_name || "Unknown School"
        if (!acc[school]) acc[school] = []
        acc[school].push(student)
        return acc
    }, {})

    return (
        <div className='pt-[10vh] px-8 h-[93vh] overflow-y-auto'>
            <div className='flex justify-between items-center mb-5'>
                <h1 className='text-center font-bold text-3xl'>List of Registered Schools </h1>
                <FileDownloader student_data={mongoData} filename="Registered Schools" />
            </div>

            {Object.entries(groupedData).map(([school, students]) => (
                <div key={school} className='mb-10'>
                    <h2 className='text-2xl font-semibold text-blue-300 mb-3'>{school}</h2>
                    <table className='w-full border-collapse'>
                        <thead>
                            <tr className='bg-gray-800 text-white'>
                                <th className='border border-gray-500 p-2'>Name of Teacher</th>
                                <th className='border border-gray-500 p-2'>Phone Number</th>
                                <th className='border border-gray-500 p-2'>Clerk ID</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map((student, index) => (
                                <tr key={index} className='hover:bg-gray-700'>
                                    <td className='border border-gray-500 px-2 py-1'>{student.name}</td>
                                    <td className='border border-gray-500 px-2 py-1'>{student.phonenumber}</td>
                                    <td className='border border-gray-500 px-2 py-1'>{student.clerkID}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ))}
        </div>
    )
}

export default Page
