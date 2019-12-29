//  首页路由设计
import express from "express"

let indexRouter = express.Router()

indexRouter.get('/', (req, res)=>{
    console.log('请求index...')
    res.end("Index")
})

export default indexRouter
