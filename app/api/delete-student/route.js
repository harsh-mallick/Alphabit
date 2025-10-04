import connect from "../../lib/dbConnect"
import StudentPage from "../../models/AddstudentModel"
import { NextResponse } from "next/server"

export async function POST(req) {
    connect()
    const body = await req.json()
    try {
        const delete_student = await StudentPage.findOneAndDelete({ _id: body._id })
        return NextResponse.json({ success: true, status_code: 200, message: "Student Removed Successfully" })
    } catch (error) {
        return NextResponse.json({ success: fale, status_code: 500, message: "Cannot Remove Student", error: error })
    }
}