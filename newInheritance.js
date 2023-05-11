class Account{
    constructor(accountNumber,accountHolderName,balance,rate ){
        this.accountHolderName=accountHolderName;
        this.accountNumber=accountNumber;
        this.balance=balance;
        this.rate=rate;
    }

    deposite(amount){
        this.balance+=amount

        if(amount >0){
            console.log(`Amount of ${amount} is Successfully Deposited
Your Updated Balance is ${this.balance}`)
        
        }
        else{
            console.log(`Amount of ${amount} is UnSuccessfully Deposited
Due to some Internal Errors`)
    
        }
    }
    withdrawal(amount){
        if(amount>this.balance){
            console.log(`You do not have any sufficient balance in [${this.accountNumber}]`);
        }else{
            this.balance-=amount;
            console.log(`Withdrawal of ${amount} from Account No. [${this.accountNumber}] is successfully
Your updated balance is ${this.balance}`)
            
        }

    }
    interest(){
        let interestAccount = (this.balance * this.rate)/100 ;
        console.log(`Your Updated Account after Interest is ${this.balance + interestAccount}`)
    }
}

class SavingAccount extends Account{
    constructor(accountNumber,accountHolderName,balance, rate,isSalary ){
        super(accountNumber,accountHolderName,balance,rate)
        this.isSalary=isSalary;
    }

    checkBalance(){
        console.log(`Your balance is ${this.balance}`);
    }
    interestOfbank(){
        console.log(`The interest of this Bank are ${this.rate} %`)
    }
    
}
class CurrentAccount extends Account{
    

}

let account = new SavingAccount("34243524","Rahul Sharma", 5000, 5.6)
account.interestOfbank();