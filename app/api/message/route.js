import connect from "../../lib/dbConnect"
import Messagepage from "../../models/Chat"
import { NextResponse } from "next/server"

export async function POST(req) {
    connect()
    try {
        const body = await req.json()
        console.log(body)
        const { name, email, message } = body.doubtmessage
        if (!name || !email || !message) {
            return NextResponse.json({ success: false, status_code: 402, message: "Cannot send message as a field is blank" })
        } else {
            const send_message = new Messagepage({
                name, email, message
            })
            const add = await send_message.save()
            console.log(add)
            return NextResponse.json({ success: true, status_code: 200, message: "Message sent successfully" })
        }

    } catch (error) {
        console.log(error)
        return NextResponse.json({ success: false, status_code: 500, error: error, message: "Failed to send message" })
    }
}