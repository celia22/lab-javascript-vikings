// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
  
     
    attack(){
        return this.strength;
    }
    receiveDamage(damage){
        this.health = this.health - damage
        
    }
}

// Viking
class Viking extends Soldier{
    constructor(name,health, strength){
        super(health, strength)
        this.name = name;
    }

    receiveDamage(damage){
        this.health = this.health - damage
        
         if (this.health > damage){
            return `${this.name} has received ${damage} points of damage`
        } else if (this.health < damage){
            return `${this.name} has died in act of combat`
        }; 

    }

    battleCry(){
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier{

    receiveDamage (damage){
        this.health = this.health - damage

        if (this.health > damage){
            return `A Saxon has received ${damage} points of damage`
        } else if (this.health < damage){
            return "A Saxon has died in combat"
        } 
    }

}


//War

class War {
    constructor (){
        this.vikingArmy = [];
        this.saxonArmy = [];

    }
    
    addViking(Viking){
      this.vikingArmy.push(Viking)
    }
   addSaxon(Saxon){
     this.saxonArmy.push(Saxon)
   }
   vikingAttack(){
       /*
A `Saxon` (chosen at random) has their `receiveDamage()` method called with the damage equal to the `strength` 
of a `Viking` (also chosen at random). This should only perform a single attack and the `Saxon` doesn't get to attack back.

- should be a function
- should receive **0 arguments**
- should make a `Saxon` `receiveDamage()` equal to the `strength` of a `Viking`
- should remove dead saxons from the army
- should return **result of calling `receiveDamage()` of a `Saxon`** with the `strength` of a `Viking`*/
    this.saxon = Math.floor(Math.random(this.saxonArmy) * 4)
    this.Viking = Math.floor(Math.random(this.vikingArmy) * 4)
    return this.saxon.receiveDamage(this.Viking.strength)
    /*if (this.saxon.health < damage){

    }*/


   }
   saxonAttack(){

   }
   showStatus(){

   }

}

let Arne = new Viking ("Arne", 100, 50)
let Birger = new Viking ("Birger", 100, 80)
let Erik = new Viking ("Erik", 100, 60)
let Ragnar = new Viking ("Ragnar", 100, 35)

let Alwi = new Saxon(100, 15)
let Cuthbert = new Saxon(100, 35)
let Harold = new Saxon(100, 25)
let Wilfred = new Saxon(100, 55)