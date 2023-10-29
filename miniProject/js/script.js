class Ship{
    constructor(name,hull,firepower,accuracy){
        this.name=name;
        this.hull=hull;
        this.firepower=firepower;
        this.accuracy=accuracy;
    }
     attack(enemy){
         if (Math.random() < this.accuracy) {
         //if (enemy.accuracy < this.accuracy) {
            
             console.log("hit"); 
             enemy.hull-=this.firepower
             document.getElementById('textoutput').innerHTML += 'AlienShip got Hit. ' + 'Name: ' + enemy.name + ' Hull : ' + enemy.hull + '<br>'
        
        }
        else {
            console.log("you missed");
            this.hull -= enemy.firepower
            document.getElementById('textoutput').innerHTML += 'AlienShip missed' + 'Hull : ' + 'Name: ' + enemy.name + ' Hull : ' + enemy.hull + '<br>'
        }

    }
}


//math random()

function getRandomIntInclusive (min, max) {
    
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }
  

//math random() for decimals

    function decimalRandom(min, max){
    return Math.random()*(max-min) + min
    }
    
  
  
//------------------------------------------------------------------------------------
//----------Main Program starts Here -------------------------------------------------
//------------------------------------------------------------------------------------

console.log("Game started");


//---Define Earth battle ship
let myShip=new Ship('USS','20','5','0.7');
console.log(myShip);

//---List of Alienships

const alienShip=['A1','A2','A3','A4','A5','A6']
console.log(alienShip);

document.write('Game started...' )
document.write('EarthShip is loaded...')
let i = 0;



const attacking = document.getElementById('attack')
attacking.addEventListener('click', mainProcess)

const continuing = document.getElementById('continue')
continuing.addEventListener('click', conTinue)

const retreating = document.getElementById('retreat')
retreating.addEventListener('click', reTreat)
console.log("Earth ship retreated. Game is over")

function mainProcess()
{
    const textout = document.getElementById('textoutput')


        
       
        let enemyShip=new Ship(alienShip[i],getRandomIntInclusive(3,6),getRandomIntInclusive(2,4),decimalRandom(0.6,0.8))
       
        textout.innerHTML += 'AlienShip ' + enemyShip.name + ' is loaded...' + '<br>'
        console.log("Before Attack")
        console.log(myShip)
        console.log(enemyShip)

        myShip.attack(enemyShip)
        console.log("After Attack")
        console.log(myShip)
        console.log(enemyShip)


        if (enemyShip.hull > 0){
            console.log("Alien ship ", enemyShip.name, " is srvived")
            textout.innerHTML += 'Alien ship ' + enemyShip.name + ' survived the attack. Ready to attack Earth Ship now.' + '<br>'
        }
        else if (enemyShip.hull <= 0){
            console.log("Alien ship ", enemyShip.name, " is destroyed")
            textout.innerHTML += 'Alien ship ' + enemyShip.name + ' destroyed.' + '<br>'
            i += 1
            if (i > 5)
            {
                textout.innerHTML += 'Aliens destroyed. Game is over' + '<br>'
                document.getElementById('attack').disabled = true;
                document.getElementById('continue').disabled = true;
                document.getElementById('retreat').disabled = true;
            }
        }
        else if(myShip.hull <= 0){
            myship_is_alive = false
            console.log("Earth ship destroyed. Game is over")
            textout.innerHTML += 'Earth ship destroyed. Game is over.' + '<br>'
            document.getElementById('attack').disabled = true;
            document.getElementById('continue').disabled = true;
            document.getElementById('retreat').disabled = true;
        }


}
function reTreat(){
    myShip.hull = 0
    console.log("Earth ship retreated. Game is over")
    myship_retreat = true
    const textout = document.getElementById('textoutput') 
    textout.innerHTML += 'Earth Ship Retreated. Game is over' + '<br>'
    document.getElementById('attack').disabled = true;
    document.getElementById('continue').disabled = true;
    document.getElementById('retreat').disabled = true;

}

function conTinue(){
    console.log("Earth ship Continue attcking")
    mainProcess()
}
