var sel = $(".buttons select");
function divHeight(ID, HEIGHT){
  $(ID).height(HEIGHT);
};
var quotes = 0;
$("#submit").click(function(){
  switch(quotes){
    case "0":
      $(".instrc").hide();
      
  };
  quotes++;
});
//On page startup
function startup(){
  $(".blockerino").hide();
};
startup();

//Dev Functions, Remove from final version
function block(ID){ $(ID).hide() };
function show(ID){  $(ID).show()  };
