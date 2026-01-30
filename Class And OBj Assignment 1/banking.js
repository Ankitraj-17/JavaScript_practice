class Bank {
    static accounts = [];

    constructor(id, name, amount) {
        this.id = id;
        this.name = name;
        this.amount = amount;
    }

    static makeAccount(id, name, amount) {
        let exists = false;
        
        Bank.accounts.forEach(acc => {
            if (acc.id === id) {
                exists = true;
            }
        });

        if (exists) {
            console.log(`Account ${id} already exists`);
            return;
        } else {
            const newAcc = new Bank(id, name, amount);
            Bank.accounts.push(newAcc);
            console.log(`Account ${id} created for ${name}`);
        }
    }

    static withdrawMoney(id, withdrawAmount) {
        let found = false;

        Bank.accounts.forEach(acc => {
            if (acc.id === id) {
                found = true;
                if (acc.amount >= withdrawAmount) {
                    acc.amount -= withdrawAmount;
                    console.log(`Withdrawn ${withdrawAmount} from Account ${id}. New Balance: ${acc.amount}`);
                } else {
                    console.log(`Insufficient balance in Account ${id}`);
                }
            }
        });

        if (!found) {
            console.log(`Account ${id} not found`);
        }
    }
}

Bank.makeAccount(1, "Ankit", 1000);
Bank.makeAccount(2, "Areno", 500);

Bank.withdrawMoney(1, 100); 
Bank.withdrawMoney(2, 600);

console.log(Bank.accounts);
