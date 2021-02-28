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
        
         if (this.health === 0){
            return `${this.name} has died in act of combat`
        } else {
            return `${this.name} has received ${damage} points of damage`
        }; 

    }

    battleCry(){
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier{
  
    receiveDamage(damage) {
        this.health = this.health - damage;
        if (this.health === 0) {
            return `A Saxon has died in combat`
        } else {
            return `A Saxon has received ${damage} points of damage`
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
       
  this.saxonArmy[0].receiveDamage(this.vikingArmy[0].strength);

    const alive = this.saxonArmy.filter(saxon => saxon.health >= 1);
     if (this.saxonArmy[0] !== alive){
         return this.saxonArmy
     } else {
        return this.saxonArmy[0].receiveDamage(this.vikingArmy[0].strength);
     }
   

    }


   saxonAttack(){

    this.vikingArmy[0].receiveDamage(this.saxonArmy[0].strength);


   }

   showStatus(){

   }

}




