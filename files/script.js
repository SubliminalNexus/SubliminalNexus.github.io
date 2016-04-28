var sel = $(".buttons select");
function divHeight(ID, HEIGHT){
  $(ID).height(HEIGHT);
};
var quotes = 0;
function quotecycle(Qs){
  alert(quotes);
  quotes++;
};
$("#submit").click(quotecycle(quotes));
//On page startup
function startup(){
  $(".blockerino").hide();
};
startup();

//Dev Functions, Remove from final version
function block(ID){ $(ID).hide() };
function show(ID){  $(ID).show()  };
