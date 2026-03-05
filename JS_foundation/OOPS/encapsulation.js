
class Bankaccount{

    #balance=0;

    //method 
    deposit(amount){
        this.#balance+=amount;
        console.log(`${amount} just deposited in your account`)
        return this.#balance;

    }

    //getter function to get value of encapsulated variabe 

    getter(){
        return `$ ${this.#balance} in your account`;
    }


}

let account=new Bankaccount();

console.log(account.getter());
account.deposit(500);
console.log(account.getter());



