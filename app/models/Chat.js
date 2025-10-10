import mongoose from "mongoose";

const Chat = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
})

const ChatPage = mongoose.models.ChatPage || mongoose.model("ChatPage", Chat)
export default ChatPage