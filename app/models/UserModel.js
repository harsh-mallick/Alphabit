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
    class_: {
        type: String,
        required: true
    },
    comp_category: {
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
    role: {
        type: String,
        default: "user"
    }
})

const UserPage = mongoose.models.UserPage || mongoose.model("UserPage", userSchema)

export default UserPage