var quotes = [
  "There is no one right way to live.",
  "There's nothing fundamentally wrong with people.",
  "Perhaps the flaw in man is that he doesn't know how he ought to live.",
  "Man is the end product of creation.",
  "Man is the creature for whom all the rest was made: this world, this solar system, this galaxy, the universe itself.",
  "Perhaps the flaw in man is exactly this: that he doesn't know how he ought to live.",
  "The species are not in any sense at war with one another.",
  "The laws they make in Washington aren't put on the books because they work well, they're put on the books because they represent the one right way to live.",
  ];
var selvar = 0;
var selar = [];
var sel = $(".buttons select");
function divHeight(ID, HEIGHT){
  $(ID).height(HEIGHT);
};
var quotevar = 0;
$("#submit").click(function(){
  if($("#quotetext").html()===""){
    $("#quotetext").html(quotes[quotevar]);
    $(".instrc").hide();
  } else {
    selar[quotevar-1] = parseInt(sel.val());
    quotevar++;
    $("#quotetext").html(quotes[quotevar]);
  };
  if(quotevar ==8){
    for(var i=0;i<selar.length;i++){
      if(i==0||i==1||i==6){
      selvar -= selar[i];
      }else{
      selvar += selar[i];
      }
    };
    alert(selvar);
  };
});
//On page startup
function startup(){
  $(".blockerino").hide();
};
// startup();

//Dev Functions, Remove from final version
function block(ID){ $(ID).hide() };
function show(ID){  $(ID).show()  };
