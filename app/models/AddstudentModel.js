import mongoose from "mongoose";

const StudentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    class_: {
        type: String,
        required: true
    },
    school_name: {
        type: String,
        required: true
    },
    teacher_incharge: {
        type: String,
        required: true
    },
    teacher_incharge_clerkID: {
        type: String,
        required: true
    },
    competition_category: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phonenumber: {
        type: Number,
        required: true
    },
    uuid: {
        type: String,
        required: true
    },
})

const StudentPage = mongoose.models.StudentPage || mongoose.model("StudentPage", StudentSchema)
export default StudentPage