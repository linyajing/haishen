$.ajax('http://XXX', function (data) { // 登录成功
    login.trigger('loginSuccess', data); // 发布登录成功的消息
})

var header = (function() {
    login.listen('loginSuccess', function(data) {
        header.setAvatar(data);
    })
    return {
        setAvatar: function (data) {
            console.log('设置用户头像');
        }
    }
})();

var nav = (function(){
    login.listen('loginSuccess', function(data) {
        nav.getInfo(data);
    })
    return {
        getInfo: function (data) {
            console.log('获取导航栏');
        }
    }
})();