var game = {};
  game.money = 100;
  game.mps = {};
    game.mps.mps = 1;
    game.mps.cost = 100;
    game.mps.count = 0;
//after first presteige
  game.seclength = {};
    game.seclength.seclength = 1.00;
    game.seclength.cost = 1000;
    game.seclength.count = 0;
//after second presteige
  game.interest = {};
    game.interest.interest = 0.00;
    game.interest.cost = 10000;
    game.interest.count = 0;
//after thrid presteige
  game.gainmultiplier = {};
    game.gainmultiplier.gainmultiplier = 1;
    game.gainmultiplier.cost = 100;
    game.gainmultiplier.count = 0;
window.setInterval(function(){
  game.money += ((game.mps.mps+(game.money*game.interest.interest))*game.gainmultiplier.gainmultiplier)/(20/game.seclength.seclength)
  console.log(game.money);
},50);