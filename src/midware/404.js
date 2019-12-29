// 用于处理不匹配的路由

const notFound = function(req, res, next){
    // res.end("404 Not Found")
    next('error')
}

export default notFound