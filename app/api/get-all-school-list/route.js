import connect from "../../lib/dbConnect"
import UserPage from "../../models/UserModel"
import { NextResponse } from "next/server"

export async function POST(req) {
    connect()
    try {
        const body = await req.json()
        if (body.role == "admin") {
            const data = await UserPage.find({})
            return NextResponse.json({ success: true, status_code: 200, message: "Teachers Data Recieved", data: data })
        } else {
            return NextResponse.json({ success: false, status_code: 500, message: "You are not eligible to view all teachers data" })
        }

    } catch (error) {
        console.log(error)
        return NextResponse.json({ success: false, status_code: 500, error: error })
    }
}