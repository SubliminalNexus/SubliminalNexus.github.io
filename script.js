var game = {
	"fps":60,
	"tut":{},
	"merge":{},
	"points":{},
	"upgrades":{},
	"elements":{},
	"temp":{},
	"function":{},
};
game.tut.gridspaceUpgrade = 0;
game.points.num = 0;
game.points.numStart = 1;
game.upgrades.barTimer = {
	"cost":10,
	"change":0.96,
	"value":8000,
	"minValue":1000,
	"costMult":1.1,
};
game.merge.timer = game.upgrades.barTimer.value*0.4;
game.upgrades.barPercent = {
	"cost":10,
	"change":0.02,
	"value":0.02,
	"maxValue":0.5,
	"costMult":1.3,
};
game.upgrades.mergePoints = {
	"cost":100,
	"value":0,
	"change":1,
	"costMult":2,
};
game.upgrades.gridSpace = {
	"cost":100,
	"costMult":2,
	"rowLength":8,
};

$(function() {
	game.points.loc = $("#points");
	game.function.upgrades = function(upgradeId){
		switch(upgradeId){

			case "barTimerButton":
				game.upgrades.barTimer.value *= game.upgrades.barTimer.change;
				game.merge.timer *= game.upgrades.barTimer.change;
				game.upgrades.barTimer.cost = Math.floor(game.upgrades.barTimer.cost * game.upgrades.barTimer.costMult);
				$("#barTimerCost").html(game.upgrades.barTimer.cost);
				game.function.updateFPS(game.fps);
				game.temp.temp1 = Math.floor( (game.upgrades.barTimer.value*100)/8000 );
				$("#barTimerCurrent").html(game.temp.temp1+"%");
				break;
			case "barPercentButton":
				game.upgrades.barPercent.cost = Math.floor(game.upgrades.barPercent.cost*game.upgrades.barPercent.costMult);
				$("#barPercentCost").html(game.upgrades.barPercent.cost);
				game.upgrades.barPercent.value += game.upgrades.barPercent.change;
				game.temp.temp1 = (game.upgrades.barPercent.value*100) + "%";
				$("#barinner").css("min-width",game.temp.temp1);
				game.temp.temp2 = Math.floor(game.upgrades.barPercent.value*100)
				$("#barPercentCurrent").html(game.temp.temp2+"%")
				break;
			case "mergePointsButton":
				game.upgrades.mergePoints.cost = Math.floor(game.upgrades.mergePoints.cost*game.upgrades.mergePoints.costMult);
				$("#mergePointsCost").html(game.upgrades.mergePoints.cost);
				game.upgrades.mergePoints.value += game.upgrades.mergePoints.change;
				$("#mergePointsCurrent").html(game.upgrades.mergePoints.value+"x");
				break;
			case "gridSpaceButton":
				game.upgrades.gridSpace.cost = Math.floor(game.upgrades.gridSpace.cost*game.upgrades.gridSpace.costMult);
				$("#gridSpaceCost").html(game.upgrades.gridSpace.cost);
				game.temp.temp1 = 0;
				$("#gridtable tr").last().each(function(){
					game.temp.temp2 = $(".gridspace").length;
					if(game.temp.temp1 == 0 && game.temp.temp2%game.upgrades.gridSpace.rowLength != 0){
						game.temp.temp3 = "grid"+(game.temp.temp2+1);
						game.function.createEle("td","gridspace",game.temp.temp3,"");
						$(this).append(game.elements.new);
						game.temp.temp1 = 1;
					} else if(game.temp.temp1 == 0 && game.temp.temp2%game.upgrades.gridSpace.rowLength == 0){
						game.temp.temp4 = $("#gridtable tr").length;
						game.temp.temp3 = "row"+(game.temp.temp4+1);
						game.function.createEle("tr","",game.temp.temp3,"");
						$("#gridtable").append(game.elements.new);
						game.temp.temp3 = "grid"+(game.temp.temp2+1);
						game.function.createEle("td","gridspace",game.temp.temp3,"");
						$("#gridtable tr").last().append(game.elements.new);

					}
				})
				break;
		}
	}
	game.function.merge = function(host,mergee){
		var x1,x2,x3,y1,y2,y3,d1,d2;
		x1 = host.offset().left;
		x2 = mergee.offset().left;
		x3 = x2 - x1;
 		y1 = host.offset().top;
		y2 = mergee.offset().top;
		y3 = y2 - y1;
		host.css("z-index","2");
		if(x3>=0 && y3>=0){
			d1 = "-";
			d2 = "-";
		} else if (x3<=0 && y3>=0){
			d1 = "+";
			x3 *= -1;
			d2 = "-";
		} else if (x3>=0 && y3<=0){
			d1 = "-";
			d2 = "+";
			y3 *= -1;
		} else if (x3<=0 && y3<=0){
			d1 = "+";
			x3 *= -1;
			d2 = "+";
			y3 *= -1;
		};
		mergee.animate({
			left:d1+x3+"px",
			top:d2+y3+"px",
		},game.merge.timer,function(){
			game.temp.temp1 = parseInt(host.find( $(".pointblobspan") ).html());
			game.temp.temp2 = parseInt(mergee.find( $(".pointblobspan") ).html());
			host.find( $(".pointblobspan") ).html(game.temp.temp1+game.temp.temp2);
			if(host.find( $(".pointblobspan") ).html().length==3){
				host.find( $(".pointblobspan") ).css({"font-size":"36px","margin-top":"10px"})
			} else if(host.find( $(".pointblobspan") ).html().length==4){
				host.find( $(".pointblobspan") ).css({"font-size":"28px","margin-top":"15px"})
			}
			host.css("z-index","");
			mergee.remove();
			game.temp.temp3 = parseInt(host.find( $(".pointblobspan") ).html());
			game.points.num += Math.floor(game.temp.temp3*game.upgrades.mergePoints.value);
			$("#points").html(game.points.num);

		});
	}
	game.function.upgBuyable = function(){
		$(".cost").each(function(){
			if(game.points.num>=parseInt($(this).html())){
				$(this).parent().find($(".customButton")).addClass("upgradeYes");
				$(this).parent().find($(".customButton")).removeClass("upgradeNo");
			}else if(game.points.num<parseInt($(this).html())){
				$(this).parent().find($(".customButton")).addClass("upgradeNo");
				$(this).parent().find($(".customButton")).removeClass("upgradeYes");
			}
		})
	}
	game.function.check = function(){
		$(".pointblobspan").each(function(){
			game.temp.temp1 = $(this).parent().parent().attr("id");
			game.temp.temp1 = parseInt(game.temp.temp1.split("grid")[1]);
			game.temp.temp2 = parseInt($(this).html());
			for(i=game.temp.temp1+1;i<=$(".gridspace").length;i++){
				game.temp.temp3 = $("#grid"+i+" .pointblobspan").html();
				if(game.temp.temp2 == game.temp.temp3){
					game.function.merge($("#grid"+game.temp.temp1+" .pointblob"),$("#grid"+i+" .pointblob"));
				}
			}
		});
	}
	game.function.bars = function(){
		var barouter = $("#barhost").width();
		var barinner = $("#barinner").width();
		game.temp.temp1 = barouter/(game.upgrades.barTimer.value/1000);
		game.temp.temp2 = game.temp.temp1/game.fps;
	 	barinner += game.temp.temp2;
		if (barinner>=barouter) {
		 	$("#barinner").width("0px");
	    	game.function.addPoints();
	    	game.function.check();
		} else {
		 	barinner = barinner + "px";
		 	$("#barinner").css("width",barinner);
		 	barinner = parseInt(barinner.replace("px",""));
		 	game.temp.temp3 = Math.floor(barinner/barouter*100);
		}
		$("#barprogress").html(game.temp.temp3+"%");		
	}
	game.function.addPoints = function(){
		game.function.createEle("div","pointblob");
	 	$(".gridspace:not(:has(*))").first().append(game.elements.new);
	 	game.function.createEle("span","pointblobspan","",game.points.numStart);
	 	$(".pointblob:not(:has(.pointblobspan))").append(game.elements.new);

		game.temp.temp1 = 0;
		$(".pointblobspan").each(function(){
			game.temp.temp1 += parseInt($(this).html());
		})
		game.points.num += game.temp.temp1;
		game.points.loc.html(game.points.num);
	}
	game.function.createEle = function(eleType, className, idName, text){
		var newEle = $("<"+eleType+"></"+eleType+">");
		newEle.attr({"class":className,"id":idName});
		if(text){
			newEle.html(text);
		}
		game.elements.new = newEle;
	} 
	$(".customButton").each(function(){
		$(this).click(function(){
			if($(this).hasClass("upgradeYes")){
				game.points.num -= parseInt($(this).parent().find($(".cost")).html());
				$("#points").html(game.points.num);
				game.function.upgrades($(this).attr("id"));
			}
		})
	});
	game.function.updateFPS = function(newFPS){
		clearInterval(game.maininterval);
		game.fps = parseInt(newFPS);
		game.maininterval = window.setInterval(function(){
    		game.function.bars();
    		game.function.upgBuyable();
    	}, 1000/newFPS);

	};
	game.function.updateFPS(game.fps);
});


/*
to do:
	"level that new point blobs spawn at" upgrade
	--Gated by prestige?
	save progress
	offline progress?

	check if value is at max after up grade
	--if it is update upgrade button to say "maxed"
*/
 