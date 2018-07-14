// 将算法各自封装为策略类
var KpiS = function () {};
KpiS.prototype.caculate = function (salary) {
    return salary * 4;
}
var KpiA = function () {};
KpiA.prototype.caculate = function (salary) {
    return salary * 3;
}
var KpiB = function () {};
KpiB.prototype.caculate = function (salary) {
    return salary * 2;
}

// 定义奖金类
var Bonus = function () {
    this.salary = null;
    this.strategy = null;
}
Bonus.prototype.setSalary = function (salary) {
    this.salary = salary;
}
Bonus.prototype.setStrategy = function (strategy) {
    this.strategy = strategy;
}
Bonus.prototype.getBonus = function () {
    return this.strategy.caculate(this.salary);
}

// 计算
var bonus = new Bonus();
bonus.setSalary(1000);
bonus.setStrategy(new KpiS());
bonus.getBonus();