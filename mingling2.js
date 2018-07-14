var bindClick = function (button, fnc) {
    button.onclick = func;
};
var MenuBar = {
    refresh: function () {
        console.log('刷新菜单');
    }
}

var SunMenu = {
    add: function () {
        console.log('添加菜单');
    },
    del: function () {
        console.log('删除菜单');
    }
}
bindClick(button1, NenuBar.refresh);
bindClick(button2, SubMenur.add);
bindClick(button3, SubMenur.del);