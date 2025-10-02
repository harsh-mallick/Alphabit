import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    clerkID: {
        type: String,
        required: true
    },
    phonenumber: {
        type: Number,
        required: true
    },
    school_name: {
        type: String,
        required: true
    },
    uuid: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: "Teacher Incharge"
    }
})

const UserPage = mongoose.models.UserPage || mongoose.model("UserPage", userSchema)

export default UserPage