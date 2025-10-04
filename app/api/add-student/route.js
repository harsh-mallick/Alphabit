import connect from "../../lib/dbConnect"
import StudentPage from "../../models/AddstudentModel"
import { NextResponse } from "next/server"

export async function POST(req) {
    connect()
    try {
        const body = await req.json()
        console.log(body)
        const { name, class_, competition_category, email, phonenumber } = body.student_reg
        const teacher_incharge = body.teacher_incharge
        const teacher_incharge_clerkID = body.teacher_incharge_clerkID
        const school_name = body.school_name
        const uuid = body.uuid
        if (!name || !class_ || !school_name || !uuid || !teacher_incharge || !teacher_incharge_clerkID || !competition_category || !email || !phonenumber) {
            return NextResponse.json({ success: false, status_code: 402, message: "Cannot add student as a field is blank." })
        } else {
            const add_student = new StudentPage({
                name, class_, school_name, teacher_incharge, teacher_incharge_clerkID, competition_category, email, phonenumber, uuid
            })
            const duplicacy_check_data = await StudentPage.find({ school_name: school_name, name: name })
            console.log(duplicacy_check_data.length)
            if (duplicacy_check_data.length !== 0) {
                return NextResponse.json({ success: true, status_code: 402, message: "Student with this name already exists" })
            } else {
                const add = await add_student.save()
                console.log(add)
                return NextResponse.json({ success: true, status_code: 200, message: "Student added successfully" })
            }
        }

    } catch (error) {
        console.log(error)
        return NextResponse.json({ success: false, status_code: 500, error: error, message: "Failed to add student" })
    }
}