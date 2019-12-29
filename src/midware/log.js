// 用于记录访问时间，等相关信息
export default (req, res, next)=>{
    console.log(new Date())
    next()
}