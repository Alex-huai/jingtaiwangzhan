$(function(){
	$(".menu1 a").mouseover(function(){
		$(this).children("img").attr("src","img/menu1_active.gif");
	}).mouseout(function(){
		$(this).children("img").attr("src","img/menu1.png");
	});

	$(".menu2 a").mouseover(function(){
		$(this).children("img").attr("src","img/menu2_active.gif");
	}).mouseout(function(){
		$(this).children("img").attr("src","img/menu2.png");
	});

	$(".menu3 a").mouseover(function(){
		$(this).children("img").attr("src","img/menu3_active.gif");
	}).mouseout(function(){
		$(this).children("img").attr("src","img/menu3.png");
	});

	$(".menu4 a").mouseover(function(){
		$(this).children("img").attr("src","img/menu4_active.gif");
	}).mouseout(function(){
		$(this).children("img").attr("src","img/menu4.png");
	});

	$(".menu5 a").mouseover(function(){
		$(this).children("img").attr("src","img/menu5_active.gif");
	}).mouseout(function(){
		$(this).children("img").attr("src","img/menu5.png");
	});
})