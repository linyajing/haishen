var myImage = (function () {
    var imageNode = document.createElement('img');
    document.body.append('image');
    return {
        setSrc: function (src) {
            imageNode.src = src;
        }
    }
})();

var ProxyImage = (function() {
    var img = new Image();
    img.onload = function () {
        myImage.setStr(this.src);
    }
    return {
        setStr: function (src) {
            myImage.setSrc('loading.gif');
            img.src = src;
        }
    }
})();

ProxyImage.setSrc('https://poXXX.png');