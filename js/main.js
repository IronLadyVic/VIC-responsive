// $("h2").click(function(){
// 	$("h2").fadeOut("slow");
// });

// $(".headers").click(function(){
// 	var oHeaders = $(".headers").fadeOut("slow");
// 	oHeaders = $(".headers").fadeIn("slow");
// });

// $("img").click(function(){

// 	var oImg = $("img").fadeOut("slow");
// 	oImg = $("img").fadeIn("slow");

// });

$("button").click(function(){

	$("#nav-list").slideToggle("slow");


});


$(function(){

	$(".contact").on("click",function(event){
		event.preventDefault();

		$("#background").show().animate({ width: "100%", height: "100%"},1000);
		$("#loginForm").appendTo("#background");
	});

	$("#loginForm span[role='close-modal']").on("click",function(){
		$("#background").animate({width: "100%", height: "100%"},2000,function(){
			$(this).hide();
			$("#loginForm").appendTo("body");

		});

	});


});