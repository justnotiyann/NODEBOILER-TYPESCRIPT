import mongoose from "mongoose"
import { MONGODB_URL } from "../config"

const connectDB = mongoose
    .connect(MONGODB_URL)
    .then((data: any) => console.log("Connected to Database MongoDB"))
    .catch((error) => console.log(error))
export default connectDB
