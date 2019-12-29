import mongoose from "mongoose"
import { stringify } from "querystring"

const Schema = mongoose.Schema

const dataSchema = new Schema({
    name: String,
    age: Number
})

export default mongoose.model("dataModel",dataSchema)