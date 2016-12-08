$(document).ready(function(){
    $(".l1").hide();
    $(".l2").hide();
    $(".l3").hide();

    $(".l1").show();
	$(".p1").click(function(){
	   $(".l1").hide();
	   $(".l2").show();
	});
	$(".p2").click(function(){
	   $(".l2").hide();
	   $(".l3").show();
	});
	$(".p3").click(function(){
	   $(".l3").hide();
	   $(".l1").show();
	});


	$(".ew").children("div").children("input").hide();
	$(".ew").children("div").children("small").click(function(){
		if ($(this).parent().parent().attr("z")=="1"){
			$(this).parent().children("input").show();
		    $(this).parent().children("h3").hide();
		    $(this).parent().parent().attr("z","2");
		}
		else{
			$(this).parent().parent().attr("z","1");
            $(this).parent().parent().attr("v",$(this).parent().children("input").attr("value"));
            $(this).parent().children("h3").html($(this).parent().children("input").attr("value"));
            $(this).parent().children("h3").show();
            $(this).parent().children("input").hide();
		}
	
		

		
		
	});
		

	
})