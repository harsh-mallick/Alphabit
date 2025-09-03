import connect from "../../lib/dbConnect"
import UserPage from "../../models/UserModel"
import { NextResponse } from "next/server"

export async function POST(req) {
    connect()
    try {
        const body = await req.json()
        const data = await UserPage.findOne({ clerkID: body.clerkID })
        return NextResponse.json({ success: true, status_code: 200, message: "Profile Data Recieved", data: data })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ success: false, status_code: 500, error: error })
    }
}