var caculateBonus = function (Kpi, salary) {
    if (Kpi === 'S') {
        return salary * 4;
    }
    if (Kpi === 'A') {
        return salary * 3;
    }
    if (Kpi === 'B') {
        return salary * 2;
    }
}
caculateBonus('B', 2000);
caculateBonus('S', 3000);