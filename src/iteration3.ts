class BankAccount {
  balance: number = 0;
  accountHolder: string;

  constructor(accountHolder: string) {
    this.accountHolder = accountHolder;
  }

  deposit(amount: number): number | string {
    if (amount <= 0) {
      return 'Please provide a valid amount';
    }
    this.balance += amount;
    return this.balance;
  }

  withdraw(amount: number): number | string {
    if (amount <= 0) {
      return 'Please provide a valid amount';
    }
    if (amount > this.balance) {
      return 'Insufficient funds';
    }
    this.balance -= amount;
    return this.balance;
  }
  getBalance() {
    return this.balance;
  }
}

new BankAccount('Cristo Dio');
