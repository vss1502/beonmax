let money = prompt('Ваш бюджет на месяц?');
let time = prompt('Введите дату в формате YYYY-MM-DD');
let stat = prompt('Введите обязательную статью расходов в этом месяце?');
let howCoast = prompt('Во сколько обойдется?');


let appData = {
    budget: money,
    timeData: time,
    expenses: {
        stat: howCoast
    },
    optionalExpenses: {},
    income: [],
    savings: false
}

let moneyDay = (money-appData.expenses.stat)/30;

alert(moneyDay);

