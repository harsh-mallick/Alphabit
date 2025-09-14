import connect from "../../lib/dbConnect"
import UserPage from "../../models/UserModel"
import { NextResponse } from "next/server"

export async function POST(req) {
    connect()
    try {
        const body = await req.json()
        console.log(body)
        const { name, clerkID, phonenumber, school_name, role } = body

        const user_reg = new UserPage({
            name, clerkID, phonenumber, school_name, role
        })
        console.log(user_reg)
        const register = await user_reg.save()
        console.log(register)
        return NextResponse.json({ success: true, status_code: 200, message: "User Signed Up Successfully" })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ success: false, status_code: 500, error: error })
    }

}