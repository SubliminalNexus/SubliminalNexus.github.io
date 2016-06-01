var quotes = [
  "There is no one right way to live.",
  "There's nothing fundamentally wrong with people.",
  "Perhaps the flaw in man is that he doesn't know how he ought to live.",
  "Man is the end product of creation.",
  "Man is the creature for whom all the rest was made: this world, this solar system, this galaxy, the universe itself.",
  "Perhaps the flaw in man is exactly this: that he doesn't know how he ought to live.",
  "The species are not in any sense at war with one another.",
  "The laws they make in Washington aren't put on the books because they work well, they're put on the books because they represent the one right way to live.",
  "You shouldn't have to settle for rabbits if what you want is deer",
  "No one species shall make the life of the world its own."
  ];
var selvar = 0;
var selar = [];
var sel = $(".buttons select");
var quotevar = 0;
$("#submit").click(function(){
  if($("#quotetext").html()===""){
    $("#quotetext").html(quotes[quotevar]);
    $(".instrc").hide();
    $(".buttons").show();
    $("#submit").html("Submit");
  } else {
    selar[quotevar] = parseInt(sel.val());
    quotevar++;
    $("#quotetext").html(quotes[quotevar]);
    sel.val("0");
  };
  if(quotevar ==quotes.length){
    for(var i=0;i<selar.length;i++){
      if(i==0||i==1||i==6){
      selvar += selar[i];
      }else{
      selvar -= selar[i];
      }
    };
    if(selvar<=20&&selvar>=13){
     $("#quotetext").html(resquote[0]);
    };
    if(selvar<=12&&selvar>=5){
    $("#quotetext").html(resquote[1]);
    };
    if(selvar<=4&&selvar>=-4){
    $("#quotetext").html(resquote[2]);
    };
    if(selvar<=-5&&selvar>=-12){
    $("#quotetext").html(resquote[3]);
    };
    if(selvar<=-13&&selvar>=-20){
    $("#quotetext").html(resquote[4]);
  };
  $("#submit").hide();
  $("select").hide();
  $("#quotetext").css("font-size", "200%");
}});
var resquote = [
  "Your mentality is strongly resemblent of one of a Leaver, perhaps you shouldn't even be amongst the Takers.",
  "While not completely agreeing with the Leaver emntality, you think more like the Leaver than a Taker.",
  "You are at a cross roads between the Taker and Leaver mentalities, you are truely neutral.",
  "You possess a mentality that more closely resembles that of a Taker than one of a Leaver.",
  "Your mentality is that of a Taker, which is fitting considering you used a computer to complete this activity."
  ];
//On page startup
function startup(){
  $(".blockerino").hide();
};
startup();
