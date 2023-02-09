import mongoose from "mongoose"
import { ConnectOptions  } from "mongoose"

export const dbConnection = () => {
    mongoose.set("strictQuery", false)
    const DB_URI = process.env.DB_URI ?? "mongodb://localhost/ecommerce"
    mongoose.connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    } as ConnectOptions, (err) => {
        if (!err) {
            console.log("Connected successfully to database...")
        } else {
            console.log("Error connecting to database...")
        }
    })
}