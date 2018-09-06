// 1.Require能方法接受一个数组和一个回调函数将模块引入
function require(element, cb) {
    console.log(element, cb())
}
require(["index"], function() {
    console.log(1)
})

// 2.Define定义的模块能够正确返回内容
function define(element, cb) {
    console.log(element, cb(4))
}

define(["swiper", "jquery"], function(e) {
    console.log(e)
})