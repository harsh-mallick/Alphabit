import mongoose from "mongoose"

const PromptSchema = mongoose.Schema({
    eventName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    fileUrl: {
        type: String,
        required: true
    },
    fileID: {
        type: String,
        required: true
    }
})

const PromptPage = mongoose.models.PromptPage || mongoose.model("PromptPage", PromptSchema)
export default PromptPage