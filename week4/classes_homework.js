//hamster
class Hamster{
    constructor(owner,name,price){
        this.owner=owner;
        this.name=name;
        this.price=price;
    }
    wheelRun(){
        console.log('squeak squeak');
    }
    eatFood(){
        console.log("nibble nibble");
    }
    getPrice(){
        console.log('return the price');
    }
}
class person{
    constructor(name,age,height,weight,mood,hamsters,bankAccount){
        this.name=sam;
        this.age=0;
        height=0;
        weight=0;
        mood=0;
        hamsters=[];
        bankAccount=0;
    }
    getName(){
        return this.name
    }
    getAge(){
        return this.age
    }
    getWeight(){
        return this.weight
    }
    greet(){
        console.log("hi this is sam");
    }
    eat(){
        this.weight++
        this.mood++
    }
   exercise(){
    this.weight--
   }
   ageUp(){
    this.age++
    this.height++
    this.weight++
    this.mood--
    this.bankAccount+=10
   } 
   buyHamster(){
    this.hamsters.push('hamster')
    this.mood+=10
    bankAccount-='hamster'.getPrice()
   }
    
}