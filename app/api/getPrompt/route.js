import connect from "../../lib/dbConnect"
import PromptPage from "../../models/PromptModel";
import { NextResponse } from "next/server"


export async function GET() {
    await connect()
    try {
        const data = await PromptPage.find().lean()
        console.log("fetched from server")
        return NextResponse.json({ success: true, status_code: 200, message: "Project Recieved", data: data })
    } catch (error) {
        return NextResponse.json({ success: false, status_code: 500, error: error })
    }
}