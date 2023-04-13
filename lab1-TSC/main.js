class Account {
    constructor(Acc_no, initialBalance) {
        this.Acc_no = Acc_no;
        this.Balance = initialBalance;
    }
    debitAmount(amount) { }
    creditAmount(amount) { }
    getBalance() { }
}
class Saving_Account extends Account {
    constructor(Acc_no, initialBalance, Date_of_opening, Min_Balance) {
        super(Acc_no, initialBalance);
        this.Date_of_opening = Date_of_opening;
        this.Min_Balance = Min_Balance;
    }
    addCustomer(customer) {
        console.log(`Saving_Account:add ${customer} `);
    }
    removeCustomer(customer) {
        console.log(`Saving_Account:remove ${customer}`);
    }
}
class Current_Account extends Account {
    constructor(Acc_no, initialBalance, Date_of_opening, Interest_rate) {
        super(Acc_no, initialBalance);
        this.Date_of_opening = Date_of_opening;
        this.Interest_rate = Interest_rate;
    }
    addCustomer(customer) {
        console.log(`Current_Account:add ${customer} `);
    }
    removeCustomer(customer) {
        console.log(`Current_Account:remove ${customer}`);
    }
}
let savingAccount = new Saving_Account(1, 1000, new Date("2023-05-10"), 10);
let currentAccount = new Current_Account(1, 1000, new Date("2023-07-1"), 10);
console.log(savingAccount.Date_of_opening);
savingAccount.addCustomer('customer1');
savingAccount.removeCustomer('customer2');
console.log(currentAccount.Date_of_opening);
currentAccount.addCustomer('customer1');
currentAccount.removeCustomer('customer2');
