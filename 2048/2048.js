var num=0;
var x=4;
window.onload=function(){
	$('.sure').click(function(){
		window.location.reload();
	})
	$('.refuse').click(function(){
		$('.all').addClass('en');
	})
	for(let i=1;i<=x*x;i++)
		$('.body').append('<div class="box"><div class="key"><scan></scan></div></div> ');
	$('.body').css({
		'width':x*125+'px',
		'height':x*125+'px'
	})
	$('.box').css({
		'width':86/x+'%',
		'height':86/x+'%',
		'margin-top':10/(x+1)+'%'
	})
	rand1();
	rand1();
	$('.ch').click(function(){
		let a=Number($('.input>input').val());
		if(a>1&&a<7)
		{
			$('.body').html('');
			for(let i=1;i<=a*a;i++)
				$('.body').append('<div class="box"><div class="key"><scan></scan></div></div> ');
			$('.body').css({
				'width':a*125+'px',
				'height':a*125+'px'
			})
			$('.box').css({
				'width':86/a+'%',
				'height':86/a+'%',
				'margin-top':10/(a+1)+'%'
			})
		}
		rand1();
		rand1();
	})
}
$(window).keydown(function(e){
	let key=e.originalEvent.key;
	let a=0
	switch (key) {
		case 'ArrowUp':
			up();
			break;
		case 'ArrowRight':
			right();
			break;
		case 'ArrowDown':
			down();
			break;
		case 'ArrowLeft':
			left();
			break;
		default:
			console.log('check your input');
			a=1;
			break;
	}
	if(!a)
	rand1();
})

function up(){
	for(var i = 0; i<x;i++)
	{
		for(var j=0;j<x-1;j++)
		{
			var va=$('.key').eq(i+j*x).children().text();
			for(var z=j+1;z<x;z++)
			{
				var te=$('.key').eq(i+z*x).children().text();
				if(te=='') continue;
				if(va=='')
				{
					if(te!=''){
						va=te;
						$('.key').eq(i+j*x).children().text(Number(te));
						$('.key').eq(i+z*x).children().text('');
					}
				}
				else
				{
					if(va==te)
					{
						num+=Number(va);
						change(num);
						va=Number(va)*2;
						$('.key').eq(i+j*x).children().text(va);
						donghua($('.key').eq(i+j*x));
						$('.key').eq(i+z*x).children().text('');
					}
					else(va!=te)
						break;
				}
			}
		}		
	}
}
function right(){
	for(var i=x-1;i<=x*x-1;i=i+x)
	{
		for(var j=0;j<x;j++)
		{
			var va=$('.key').eq(i-j).children().text();
			for(var z=j+1;z<x;z++)
			{
				var te=$('.key').eq(i-z).children().text();
				if(te=='') continue;
				if(va=='')
				{
					if(te!=''){
						va=te;
						$('.key').eq(i-j).children().text(Number(te));
						$('.key').eq(i-z).children().text('');
					}
				}
				else
				{
					if(va==te)
					{
						num+=Number(va);
						change(num);
						va=Number(va)*2;
						$('.key').eq(i-j).children().text(va);
						donghua($('.key').eq(i-j));
						$('.key').eq(i-z).children().text('');
					}
					else(va!=te)
						break;
				}
			}	
			
		}
	}
}
function down(){
	for(var i = 0; i<x;i++)
	{
		for(var j=0;j<x;j++)
		{
			var va=$('.key').eq(i+(x-1-j)*x).children().text();
			for(var z=j+1;z<x;z++)
			{
				var te=$('.key').eq(i+(x-1-z)*x).children().text();
				if(te=='') continue;
				if(va=='')
				{
					if(te!=''){
						va=te;
						$('.key').eq(i+(x-1-j)*x).children().text(Number(te));
						$('.key').eq(i+(x-1-z)*x).children().text('');
					}
				}
				else
				{
					if(va==te)
					{
						num+=Number(va);
						change(num);
						va=Number(va)*2;
						$('.key').eq(i+(x-1-j)*x).children().text(va);
						donghua($('.key').eq(i+(x-1-j)*x));
						$('.key').eq(i+(x-1-z)*x).children().text('');
					}
					else(va!=te)
						break;
				}
			}
		}		
	}
}
function left(){
	for(var i=0;i<=x*(x-1);i=i+x)
	{
		for(var j=0;j<x;j++)
		{
			var va=$('.key').eq(i+j).children().text();
			for(var z=j+1;z<x;z++)
			{
				var te=$('.key').eq(i+z).children().text();
				if(te=='') continue;
				if(va=='')
				{
					if(te!=''){
						va=te;
						$('.key').eq(i+j).children().text(Number(te));
						$('.key').eq(i+z).children().text('');
					}
				}
				else
				{
					if(va==te)
					{
						num+=Number(va);
						change(num);
						va=Number(va)*2;
						$('.key').eq(i+j).children().text(va);
						donghua($('.key').eq(i+j));
						$('.key').eq(i+z).children().text('');
					}
					else(va!=te)
						break;
				}
			}	
			
		}
	}
}

function rand1(){
	var src=[],len,judge=0;
	for(var i=0;i<x*x;i++)
	{
		let a=$('.key').eq(i).children().text(),j=i;
		$('.key').eq(i).css('background',color(Number(a)));
		if($('.key').eq(i).children().text()=='')
			src.push(i);
		if((i-x)/x>0)
			if(judge1(a,i-x)) judge=1;
		if((i+x)/x<x)
			if(judge1(a,i+x)) judge=1;
		if(Math.floor((j+1)/x)==Math.floor(i/x))
			if(judge1(a,i+1)) judge=1;
		if(Math.floor((j-1)/x)==Math.floor(i/x))
			if(judge1(a,i-1)) judge=1;
	}
	len=src.length;
	if(!len&&!judge)
		end();
	let a=Math.floor(len*Math.random());
	$('.key').eq(src[a]).children().text(2);
	$('.key').eq(src[a]).css('background',color(Number($('.key').eq(src[a]).children().text())));
}

function judge1(tar,judge){
	if(tar==$('.key').eq(judge).children().text())
		return true;
	else 
		return false;
}


function color(num){
	switch (num) {
		case 2:
		case 512:
			return '#F6F0D5';
			break;
		case 4:
		case 1024:
			return '#E7CD94';
			break;
		case 8:
		case 2048:
			return '#F9D56B';
			break;
		case 16:
		case 4096:
			return '#F9D43A';
			break;
		case 32:
		case 8192:
			return '#FCA769';
			break;
		case 64:
		case 16384:
			return '#F2860E';
			break;
		case 128:
		case 32768:
			return '#F9D43A';
			break;
		case 256:
		case 65536:
			return '#F96F60';
			break;
		default:
			return '#989898';
			break;
	}
}

function donghua(ele){
	ele.animate({
		width:'80%',
		height:'80%',
		left:'10%',
		top:'10%'
	},0,function(){
		ele.animate({
			width:'100%',
			height:'100%',
			left:0,
			top:0
		},500);
	});
}

function change(data){
	let cha='你的分数：'+data;
	$('.num').text(cha);
}

function end(){
	$('.all').removeClass('en')
	$('#count').text(num);
}


