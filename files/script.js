var quotes = [
  "There is no one right way to live.",
  "There's nothing fundamentally wrong with people.",
  "Perhaps the flaw in man is that he doesn't know how he ought to live.",
  "Man is the end product of creation.",
  "Man is the creature for whom all the rest was made: this world, this solar system, this galaxy, the universe itself.",
  "Perhaps the flaw in man is exactly this: that he doesn't know how he ought to live.",
  "The species are not in any sense at war with one another.",
  "The laws they make in Washington aren't put on the books because they work well, they're put on the books because they represent the one right way to live.",
  ]
var sel = $(".buttons select");
function divHeight(ID, HEIGHT){
  $(ID).height(HEIGHT);
};
var quotevar = 0;
$("#submit").click(function(){
  switch(quotevar){
    case "0":
      $(".instrc span").hide();
      $(".instrc .header-text").show();
      
  };
  quotevar++;
});
//On page startup
function startup(){
  $(".blockerino").hide();
};
startup();

//Dev Functions, Remove from final version
function block(ID){ $(ID).hide() };
function show(ID){  $(ID).show()  };
