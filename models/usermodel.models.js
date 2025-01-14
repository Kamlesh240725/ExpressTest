import mongoose from "mongoose"

mongoose.connect("mongodb://127.0.0.1:27017/CRUD");

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    img_URL: String
})

export default mongoose.model("user", userSchema)