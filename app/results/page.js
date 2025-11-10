"use client"
import React from 'react'

const Page = () => {
    // Data remains the same
    const result_array_iat = [
        { sno: 1, sc: "α3", name_school: "AIS G-46" },
        { sno: 2, sc: "α4", name_school: "Springdales School, Dhaula Kuan" },
        { sno: 3, sc: "α5", name_school: "AGS, Gurgaon" },
        { sno: 4, sc: "α6", name_school: "AIS Pushp Vihar" },
        { sno: 5, sc: "α7", name_school: "New Era Public School, Mayapuri" },
        { sno: 6, sc: "α9", name_school: "DPS R.K Puram" },
        { sno: 7, sc: "α10", name_school: "DPS International School, Saket" },
        { sno: 8, sc: "α12", name_school: "AIS Mayur Vihar" },
        { sno: 9, sc: "α13", name_school: "AIS Noida" },
        { sno: 10, sc: "α15", name_school: "Vasant Valley" }
    ]
    const result_array_creatica = [
        { sno: 1, sc: "α1", name_school: "AIS G-43" },
        { sno: 2, sc: "α2", name_school: "AIS V-1" },
        { sno: 3, sc: "α6", name_school: "AIS Pushp Vihar" },
        { sno: 4, sc: "α8", name_school: "Mount Carmel Public School" },
        { sno: 5, sc: "α9", name_school: "DPS R.K Puram" },
        { sno: 6, sc: "α11", name_school: "Apeejay School, Panscheel Park" },
        { sno: 7, sc: "α12", name_school: "AIS Mayur Vihar" },
        { sno: 8, sc: "α13", name_school: "AIS Noida" },
        { sno: 9, sc: "α15", name_school: "Vasant Valley" },
        { sno: 10, sc: "α16", name_school: "AIS Saket" }
    ]

    return (
        // 1. Dark background and text color for the overall page. 
        // 2. Added a dark blue/teal shadow for a 'techy' glow effect.
        <div className='pt-[10vh] h-auto min-h-screen pb-10 text-gray-300 shadow-inner shadow-cyan-500/10'>
            {/* Title: Gradient adjusted to pop on a dark background */}
            <h1 className='text-center text-4xl pb-4 pt-4 md:text-5xl font-extrabold tracking-tight mb-8 
                           bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-pink-300 
                            flex justify-center'>
                <p className='text-yellow-400'>🏆</p> Prelim Results
            </h1>

            {/* Innovat-a-thon Section */}
            <div className='max-w-4xl mx-auto px-4'>
                {/* Heading uses a light text color and a strong underline/border */}
                <h2 className='text-center font-bold text-2xl flex justify-center items-baseline text-white mb-6 border-b-2 border-indigo-400/50 pb-2'>
                    List of Qualifying Schools for <p className='font-extrabold text-3xl ml-2 text-indigo-400'>Innovat-a-thon</p>
                </h2>

                {/* Table: Use dark colors, blue glow for tech feel, and slight rounding */}
                <table className='w-full mx-auto shadow-2xl rounded-lg overflow-hidden border-collapse table-auto 
                                  shadow-indigo-500/20'>
                    <thead>
                        <tr>
                            {/* Header: Dark Indigo background with high contrast text */}
                            <th className='bg-indigo-900/70 text-indigo-200 p-3 border-r border-gray-700 text-sm font-semibold uppercase tracking-wider w-1/4'>School Code</th>
                            <th className='bg-indigo-900/70 text-indigo-200 p-3 text-sm font-semibold uppercase tracking-wider text-left'>Name of School</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(result_array_iat) && result_array_iat.map((mapped_array, index) => {
                            // Alternating row color: Darker shades for contrast
                            const rowStyle = index % 2 === 0 ? 'bg-gray-800' : 'bg-gray-800/80';
                            return (
                                <tr key={mapped_array.sno} className={`${rowStyle} hover:bg-indigo-900/50 transition duration-150 ease-in-out`}>
                                    {/* School Code Cell: Dark background, light text, alpha-style preserved */}
                                    <td className='border border-gray-700 px-4 py-2 text-center text-xl text-indigo-400 alpha-style bg-gray-800/50' >{mapped_array.sc}</td>
                                    {/* School Name Cell: Light text */}
                                    <td className='border border-gray-700 px-4 py-2 text-gray-200'>{mapped_array.name_school}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>

            {/* Separator: Lighter gray border for visibility */}
            <div className='h-8 md:h-12'></div>
            <hr className='max-w-4xl mx-auto border-gray-700 mb-8' />
            {/* End Separator */}

            {/* Creatica Section */}
            <div className='max-w-4xl mx-auto px-4'>
                {/* Heading uses a light text color and a strong underline/border */}
                <h2 className='text-center font-bold text-2xl flex justify-center items-baseline text-white mb-6 border-b-2 border-pink-400/50 pb-2'>
                    List of Qualifying Schools for <p className='font-extrabold ml-2 text-pink-400'>Creatica</p>
                </h2>

                {/* Table: Use dark colors, pink glow for tech feel, and slight rounding */}
                <table className='w-full mx-auto shadow-2xl rounded-lg overflow-hidden border-collapse table-auto 
                                  shadow-pink-500/20'>
                    <thead>
                        <tr>
                            {/* Header: Dark Pink background with high contrast text */}
                            <th className='bg-pink-900/70 text-pink-200 p-3 border-r border-gray-700 text-sm font-semibold uppercase tracking-wider w-1/4'>School Code</th>
                            <th className='bg-pink-900/70 text-pink-200 p-3 text-sm font-semibold uppercase tracking-wider text-left'>Name of School</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(result_array_creatica) && result_array_creatica.map((mapped_array, index) => {
                            // Alternating row color: Darker shades for contrast
                            const rowStyle = index % 2 === 0 ? 'bg-gray-800' : 'bg-gray-800/80';
                            return (
                                <tr key={mapped_array.sno} className={`${rowStyle} hover:bg-pink-900/50 transition duration-150 ease-in-out`}>
                                    {/* School Code Cell: Dark background, light text, alpha-style preserved */}
                                    <td className='border border-gray-700 px-4 py-2 text-center text-xl text-pink-400 alpha-style bg-gray-700/50'>{mapped_array.sc}</td>
                                    {/* School Name Cell: Light text */}
                                    <td className='border border-gray-700 px-4 py-2 text-gray-200'>{mapped_array.name_school}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Page