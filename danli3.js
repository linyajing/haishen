var loginLayer = (function () {
    var div = document.createElement('div');
    div.innerHTML = this.html;
    div.style.display = 'none';
    document.body.appendChild(div);
    return div;
})();

button.onclick = function () {
    loginLayer.style.display = 'block'; 
}