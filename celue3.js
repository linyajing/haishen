// 策略类
var strategies = {
    "S": function (salary) {
        return salary * 4;
    },
    "A": function (salary) {
        return salary * 3;
    },
    "B": function (salary) {
        return salary * 2;
    },
}

// 环境类用函数替代
var caculateBonus = function (level, salary) {
    return strategies[level][salary];
}
caculateBonus('S', 1000);