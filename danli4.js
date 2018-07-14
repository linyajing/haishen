var createLoginLayer = (function() {
    var div;
    return function () {
        if(!div) {
            div = document.createElement('div');
            div.innerHTML = this.html;
            div.style.display = 'none';
            document.body.appendChild(div);
        }
        return div;
    }
})();

button.onclick = function () {
    var loginLayer = createLoginLayer();
    createLoginLayer.style.display = 'block';
}