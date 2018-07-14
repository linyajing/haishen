var saleOffices = {}; // 定义发布者
saleOffices.clientList = {}; // 定义一个缓存列表，存放订阅者的回调函数

saleOffices.listen = function (key, fn) {
    if (!this.clientList[key]) {
        this.clientList[key] = [];
    }
    this.clientList[key].push(fn); // 将订阅的消息加入缓存列表
}
saleOffices.trigger = function () { // 发布消息
    var key = Array.prototype.shift.call(arguments); // 获取消息类型
    var fns = this.clientList[key];
    if (!fns || fns.length === 0) { // 如果没有订阅该消息，返回
        return false
    }
    for (var i = 0,fn; fn = fns[i++];) {
        fn.apply(this, arguments); // 发布订阅消息
    }
}
saleOffices.listen('squareMeter88', function (price) {
    console.log('价格=' + price);
});

saleOffices.listen('squareMeter110', function (price) {
    console.log('价格=' + price);
});

saleOffices.trigger('squareMeter88', 2000000);
saleOffices.trigger('squareMeter110', 3000000);