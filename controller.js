import { AppState } from "./appstate.js";
console.log('controller loaded');
console.log(AppState)

// NOTE the underscore and it being defined outside of the class makes this a private function
function _drawHeroes(){
console.log('sup');
let heroes = AppState.heroes
let template = ''
// NOTE the hero.Template is the same as our draws in the pass except the giant chunk of string has been moved to the hero.js file
heroes.forEach(hero => template += hero.Template)
console.log(template);
document.getElementById('heroes').innerHTML = template
}

function _drawMoney(){
  let gold =  AppState.money
  document.getElementById('gold').innerText = gold
}


// NOTE this is just the definition (the blue print)
class Controller{
  constructor(){
    console.log('the controller\'s constructor basically runs on page load');
    _drawHeroes()
    setInterval(this.damageHeroes, 3000)
  }
  
  
  attackBoss(){
    let damage = 0
    // NOTE aliases here help with accessing the now more complex objects later
    let boss = AppState.monster
    let heroes = AppState.heroes

    heroes.forEach(hero => {
      if(hero.health > 0){
        damage += hero.damage
      }
    })
    console.log('dealing', damage);
    // perform data manipulation
    boss.health -= damage
    console.log('boss health', boss.health);
    if(boss.health <= 0){
      boss.health = boss.maxHealth
      boss.level++
      // TODO make boss more challenging
      AppState.money += boss.gold
      _drawMoney()
    }
    this.updateBoss()
  }

  updateBoss(){
    let bossElm =document.getElementById('boss')
    let bar = bossElm.querySelector('.progress-bar')
    let level = bossElm?.querySelector('.level')
    bar.innerText = AppState.monster.health
    bar.style.width = AppState.monster.health + '%'
    level.innerText = `Level : ${AppState.monster.level}`
  }

  damageHeroes(){
    let heroes = AppState.heroes
    let boss = AppState.monster
    heroes.forEach(hero => hero.health -= boss.damage * boss.level)
    _drawHeroes()
  }

  healHero(name){
    let hero = AppState.heroes.find(hero => hero.name == name)
    console.log('healing', name, hero);
    if(AppState.money >= hero.level *10){
      AppState.money -= hero.level*10
      hero.health += 10
      _drawHeroes()
      _drawMoney()
    }
  }

}

// NOTE this is the one that exists or was instantiated
let controller = new Controller()

// NOTE this will be very weird just for right now today but in principal is the way it works
// NOTE because module imports on index page, now code must be attached to the window
window['app'] = {controller : controller}