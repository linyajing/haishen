var setCommand = function (button, fuc) {
    button.onclick = func;
}

var MeunBar = {
    refresh: function () {
        console.log('刷新菜单')
    }
}

var RefreshMenuBarCommand = function (receiver) {
    return function () {
        receiver.refresh();
    }
}

setCommand(button1, RefreshMenuBarCommand(MeunBar));