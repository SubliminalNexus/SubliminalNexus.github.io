var game = {};
  game.money = 10;
  game.mps = {};
    game.mps.mps = 0;
    game.mps.cost = 10;
    game.mps.count = 0;
//after first presteige
  game.seclength = {};
    game.seclength.seclength = 1.00;
    game.seclength.cost = 50;
    game.seclength.count = 0;
//after second presteige
  game.gainmultiplier = {};
    game.gainmultiplier.gainmultiplier = 1;
    game.gainmultiplier.cost = 100;
    game.gainmultiplier.count = 0;
//after thrid presteige
  game.interest = {};
    game.interest.interest = 0.00;
    game.interest.cost = 1000;
    game.interest.count = 0;
var mpss = game.mps;
var secls = game.seclength;
var ints = game.interest;
var gainms = game.gainmultiplier;

function moneyInterval(){
  setInterval(function(){
  game.money += (((mpss.mps)*gainms.gainmultiplier)/(secls.seclength)+(game.money*ints.interest))/20;
  update();
},50)
};
function update(){
$("#money").html(Math.floor(game.money));
$("#moneypersec").html(Math.floor(((mpss.mps)*gainms.gainmultiplier)/(secls.seclength)+(game.money*ints.interest)));
$("#secleng").html(Math.floor(secls.seclength*100000)/1000);
//$("#mpsinc").html();
$("#mpsinccost").html(Math.floor(mpss.cost));
$("#mpsinccount").html(Math.floor(mpss.count));
//$("#seclen").html();
$("#seclencost").html(Math.floor(secls.cost));
$("#seclencount").html(Math.floor(secls.count));
//$("#gainmult").html();
$("#gainmultcost").html(Math.floor(gainms.cost));
$("#gainmultcount").html(Math.floor(gainms.count));
//$("#inter").html();
$("#intercost").html(Math.floor(ints.cost));
$("#intercount").html(Math.floor(ints.count));
};
$(".click").click(function(){
  var clicked = $(this).attr("id");
  switch(clicked){
    case "mps":
      if(game.money >= mpss.cost){
        game.money -= mpss.cost;
        mpss.mps++;
        mpss.count++;
        mpss.cost += 5;
        };
      break;
    case "seclength":
      if(game.money >= secls.cost){
        game.money -= secls.cost;
        secls.seclength *= 0.95;
        secls.count++;
        secls.cost += 50;
        };
      break;
    case "gainmultiplier":
      if(game.money >= gainms.cost){
        game.money -= gainms.cost;
        gainms.gainmultiplier *= 1.05;
        gainms.count++;
        gainms.cost+= 100;
      };
      break;
    case "interest":
      if(game.money >= ints.cost){
        game.money -= ints.cost;
        ints.interest += 0.0001;
        ints.count++;
        ints.cost += 5000;
        };
      break;
  }});

$(".hover").hover(function(){
    $(this).css("background-color", "rgb(75,75,75)");
    }, function(){
    $(this).css("background-color", "rgb(100,100,100)");
});
moneyInterval();