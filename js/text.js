$(document).ready(function()
{
	var timer;
	$("#tx").hover(function(){
		timer=setTimeout(function(){
			$(".head-nav-2-son-add").css("display","");
			$("#tx").animate({
				marginTop:"10px",
				height :'55px',
				width:'55px',
				borderWidth:"4px"
			}
		)
  },500);},
		function(){
			clearTimeout(timer);
		})
	$(".out").mouseleave(function(){

			$(".head-nav-2-son-add").css("display","none");
			//$(".exp-r").css("display","none");
			$("#tx").animate({
				marginTop:"0px",
				height :'40px',
				width:'40px',
				borderWidth:"0px"
			})
		}
		);
	var text;
	$("#search-button").click(function(){
		text=$(".search-form1").val();
		console.log(text);
		var a=text.length;
		console.log(a);
		if(text=="") return false;
		if(parseInt(text)>16000)
		{
			alert("数字太大拉");
			return false;
		}
		var b=5,c="&nbsp;&nbsp;";
		b=b-a;
		for(var i=0;i<b;i++)
		{
            c=c+"&nbsp;";
		}
		c=c+text;
		console.log(c);
		$(".exp-show div").html(c);
		b=parseInt(text) /parseInt($(".exp-show span").html().substring(1))*100;
		c=b+"%";
		console.log(c);
		$(".exp-img-in").css({
			"width":c
		});
	})
	$(".expensive").hover(function(){
		$(".exp-r").css("display","");
	})
	$(".expensive").mouseleave(function(){
		$(".exp-r").css("display","none");
	})
	/*var yaosi=$(".head-nav-1-son").wrapAll('<div class"youandme">yeap</div>');
	$(".ceshi").after(yaosi);*/
})

