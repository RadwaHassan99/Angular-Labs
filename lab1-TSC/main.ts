interface IAccount {
  Date_of_opening: Date;
  addCustomer(customer: string): void;
  removeCustomer(customer: string): void;
}

class Account {
  private Acc_no: number;
  private Balance: number;

  constructor(Acc_no: number, initialBalance: number) {
    this.Acc_no = Acc_no;
    this.Balance = initialBalance;
  }

  public debitAmount(amount: number) {}

  public creditAmount(amount: number) {}

  public getBalance() {}
}

class Saving_Account extends Account implements IAccount {
  private Min_Balance: number;
  public Date_of_opening: Date;

  constructor(Acc_no: number, initialBalance: number, Date_of_opening: Date, Min_Balance: number) {
    super(Acc_no, initialBalance);
    this.Date_of_opening = Date_of_opening;
    this.Min_Balance = Min_Balance;
  }

  public addCustomer(customer: string): void {
    console.log(`Saving_Account:add ${customer} `);
  }

  public removeCustomer(customer: string): void {
    console.log(`Saving_Account:remove ${customer}`);
  }
}

class Current_Account extends Account implements IAccount {
  private Interest_rate: number;
  public Date_of_opening: Date;

  constructor(Acc_no: number, initialBalance: number, Date_of_opening: Date, Interest_rate: number) {
    super(Acc_no, initialBalance);
    this.Date_of_opening = Date_of_opening;
    this.Interest_rate = Interest_rate;
  }

  public addCustomer(customer: string): void {
    console.log(`Current_Account:add ${customer} `);
  }

  public removeCustomer(customer: string): void {
    console.log(`Current_Account:remove ${customer}`);
  }
}

let savingAccount = new Saving_Account(1,1000, new Date("2023-05-10"),10);
let currentAccount = new Current_Account(1,1000, new Date("2023-07-1"),10);

console.log(savingAccount.Date_of_opening);
savingAccount.addCustomer('customer1');
savingAccount.removeCustomer('customer2');

console.log(currentAccount.Date_of_opening);
currentAccount.addCustomer('customer1');
currentAccount.removeCustomer('customer2');

