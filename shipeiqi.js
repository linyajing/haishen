var gooleMap = {
    show: function () {
        console.log('渲染谷歌地图')
    }
};

var baiduMap = {
    show: function () {
        console.log('渲染百度地图')
    }
};

var renderMap = function (app) {
    if (map.show instanceof Function) {
        map.show();
    }
}



var gooleMap = {
    show: function () {
        console.log('渲染谷歌地图')
    }
};

var baiduMap = {
    display: function () {
        console.log('渲染百度地图')
    }
};

var baiduMapAdapter = {
    show: function () {
        return baiduMap.display();
    }
}

var renderMap = function (app) {
    if (map.show instanceof Function) {
        map.show();
    }
}

renderMap(gooleMap);
renderMap(baiduMapAdapter);

