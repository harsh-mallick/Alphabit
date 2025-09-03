import mongoose from "mongoose"
const DB_URI = process.env.MONGO_SRV

const connect = async () => {
    if (!DB_URI) {
        console.log("No database url provided")
    } else {
        try {
            mongoose.connect(DB_URI)
            const connection = mongoose.connection
            connection.on("connection", () => {
                console.log("Connected to database successfully!!")
            })
            connection.on("error", (error) => {
                console.log("There was some connection error triggered: ", error)
                process.exit(0)
            })
        } catch (error) {
            console.log("Something went wrong while initiating a connection: ", error)
        }
    }
}

export default connect