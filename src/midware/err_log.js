// 用于记录错误信息

const errLog = function(err, req, res, next){
    console.log(err)
    res.end(err)
}

export default errLog