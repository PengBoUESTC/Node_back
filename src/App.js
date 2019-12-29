// 后端主程序
import express from "express"
import { join } from "path"

import indexRouter from "./Router/indexRouter"
import dataRouter from "./Router/dataRouter"

import Log from "./midware/log"
import errLog from "./midware/err_log"
import notFound from "./midware/404"

let App = express()

// 设计静态资源
App.use("/node_modules", express.static(join(__dirname, '../node_modules')))
App.use("/src", express.static(join(__dirname, '../src')))

App.use(Log)

App.use(indexRouter)

App.use(notFound)
App.use(errLog)

App.listen(3000, ()=>{
    console.log('Runing in 3000...')
})