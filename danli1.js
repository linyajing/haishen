var Single = function () {

}
Single.getInstance = function () {
    if (!this.instance) {
        this.instance = new Single();
    }
}

var a = Single.getInstance();