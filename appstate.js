import { Hero } from "./hero.js"


export const AppState = {

  money: 0,

   monster : {
    health: 100,
    maxHealth: 100,
    level: 1,
    damage: 2,
    gold: 50
  },
  
   heroes : [
    new Hero('Mel', 50, 5, 'https://thumbs.gfycat.com/GraciousSneakyAustralianshelduck-max-1mb.gif', 1),
    new Hero('Dundee', 55, 4, 'https://c.tenor.com/nCcVUvMxAusAAAAi/palamute.gif', 1),
    new Hero('Jyro-man', 100, 10, 'https://thumbs.gfycat.com/FriendlyDaringAustraliankestrel-max-1mb.gif', 5)
  ]
  
}