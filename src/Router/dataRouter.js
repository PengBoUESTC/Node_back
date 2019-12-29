import express from "express"
import mongoose from "mongoose"
import dataModel from "../model/dataModel"
// 根据 model 进行数据库树的增删改查

// 连接数据库
mongoose.connect("mongodb://localhost/Vue_Data", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.on("open", ()=>{
    console.log('mongodb connected...')
})

let dataRouter = express.Router()

dataRouter.get('/', (req, res)=>{

})

export default dataRouter