$(document).ready(function(){
	$(".nav").hover(function(){
		timer=setTimeout(function(){
			$(".nav-1").addClass("nav-dis");
			$(".nav-2").removeClass("nav-dis");
			
  },500);},
		function(){
			clearTimeout(timer);
		})
	$(".nav").mouseleave(function(){
		$(".nav-2").addClass("nav-dis");
		$(".nav-1").removeClass("nav-dis");
	})
	var ti=0,page=0,beg=0,end=3,fin=6;
	$.change=function(){
			ti=(ti+60)%360;
		var cha="hsla("+ti+", 30%, 70%, 0.8)";
		$(".top").css("background-color",cha);
		};
	setInterval('$.change()',20000);

	$(".btn-pre").click(function(){
		if(page!=0)
		{
			console.log(page);
			$(".mark1 li").eq(page).removeClass("font-b");
			$(".mark1 li").eq(page+3).css("display","none").end().eq(page-1).css("display","");
			page-=1; beg=page; end=page+3;
			$(".mark1 li").eq(page).addClass("font-b");
		}
	})
	$(".btn-bac").click(function(){
		if(page!=fin)
		{
			/*$(".mark1 li").slice(page,page+3).each(function(event){
				console.log(enent.target())
			}).end().each(function(event){console.log(enent.target())});*/
			$(".mark1 li").eq(page).removeClass("font-b");
			if(end!=fin){
				$(".mark1 li").eq(page).css("display","none").end().eq(page+4).css("display","");
				page+=1; beg=page; end=page+3;
			}
			else
			page+=1; 
			$(".mark1 li").eq(page).addClass("font-b");
		}
	})
	$(".mark1 li").click(function(){
		$(".mark1 li").eq(page).removeClass("font-b");
		page=$(this).index();
		$(this).addClass("font-b");
		if((fin-page)>2){
			$(".mark1 li").slice(beg,page).css("display","none");
			$(".mark1 li").slice(page+1,page+4).css("display","");
		beg=page; end=page+3;
		}
		else{
			$(".mark1 li").slice(page+1,fin+1).css("display","");
			$(".mark1 li").slice(0,fin-3).css("display","none");
			end=fin; beg=fin-3;
		}
		
	})

})
