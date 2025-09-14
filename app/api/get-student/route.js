import connect from "../../lib/dbConnect"
import StudentPage from "../../models/AddstudentModel"
import { NextResponse } from "next/server"

export async function POST(req) {
    connect()
    try {
        const body = await req.json()
        const data = await StudentPage.find({ school_name: body.school_name })
        return NextResponse.json({ success: true, status_code: 200, message: "Student Data Recieved", data: data })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ success: false, status_code: 500, error: error })
    }
}