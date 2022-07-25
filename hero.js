

// NOTE to give access to bits of code to other files, that code must be exported
export class Hero{
  // NOTE constructor builds the blueprint (hero being the blueprint)
  constructor(name, health, damage,img, level){
    // debugger
    this.name = name
    this.health = health
    this.damage = damage
    this.img = img
    this.level = level
  }
  
  // NOTE a getter is a calculated property on the hero (class)
  get Template(){
    return `
    <div class="col-4">
      <h5>${this.name}</h5>
      <p>Level : ${this.level}</p>
      <p>health : ${this.health}</p>
      <img src="${this.img}" alt="" class="img-fluid">
      <button class="btn btn-success" onclick="app.controller.healHero('${this.name}')"> heal </button>
    </div>
    `
  }

  greeting(){
    console.log(`hi my name is ${this.name}, I am level ${this.level}, i have ${this.health} health.`);
  }
}