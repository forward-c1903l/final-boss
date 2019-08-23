$(window).ready(function(){
	navMenu();
	proGressBar();
	proJects();
	scrollPage();
});

function navMenu(){
	var width = $(window).width();
	var navToggle = $("#nav-toggle");
	var aside = $("#nav-aside");
	if(width < 1024) {
		$(aside).css("display","none");
		$(navToggle).click(function(){
			if($(".line-nav").hasClass("toggle")) {
				($(".line-nav").removeClass("toggle"))
			}
			else $(".line-nav").addClass("toggle");
			$(aside).toggle('fade-in-out');		
		});
	}
}

function kiemTraWidth(t, h2){
	var w = $(window).width();
	if ( w <= 1042) {var z = "width:" + (t-5) + "%";$(h2).attr("style",z);}
	else if ( w > 1042) {var z = "width:" + (t) + "%";$(h2).attr("style",z);}
}

function proGressBar() {
	var x = 90;
	var pgb = $(".progress");var sp = $(".item-skill span");var h2 = $(".item-skill h2");
	for(i = 0; i < pgb.length; i++){
		x -=5;
		var a = x+5+i*2;var b = x-20+i*2;
		if(i == 0 || i == 1 || i == 4){
			($(pgb[i]).progressbar({value:a}));($(sp[i]).text(a+"%"));
			kiemTraWidth(a, h2[i]);
		}
		else {
			($(pgb[i]).progressbar({value:b}));($(sp[i]).text(b+"%"));
			kiemTraWidth(b, h2[i]);
		}
	}
}

function hover (item,child,effect){
	$(item).hover(function(){$(this).children(child).addClass(effect);})
	.mouseover(function(){$(this).children(child).addClass(effect);})
	.mouseout(function(){$(this).children(child).removeClass(effect);})
}

function proJects() {
	var boxItem = $(".box-item");
	if($(window).width() > 1024) {
		$(boxItem).each( function(){
			hover(this,"h1","fade-top");
			hover(this,"h2","fade-bottom");
			hover(this,".view","fade-left");
		});
	}
}

function scrollPage (){
	var element = $(".items-infor");
	var menu = $('#menu ul li a');
	console.log(menu[1].text);
	console.log(menu.text());
		$(element).addClass("empty");
		$(window).scroll(function(){
			var move = $(window).scrollTop();
			$(element).each(function(){
				if(move >= $(this).position().top - 200) {
					for(i=0;i<menu.length;i++){
						var onMenu = menu[i].text.toLowerCase();
						console.log(onMenu);
						if($(this).attr('class').indexOf(onMenu) != -1){
							$(menu[i]).addClass('kaka');
						}
						else $(menu[i]).removeClass('kaka');
					}

					if ($(this).hasClass("skills") || $(this).hasClass("contact")) {			
						$(this).removeClass("empty").addClass("effect-right");

					}
					else $(this).removeClass("empty").addClass("effect-left");	
				}
			});
		});
}