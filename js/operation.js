$(function(){	
	    var _content = []; //临时存储li循环内容
		var Show = {
			_default:4, //默认显示图片个数
			_loading:2,  //每次点击按钮后加载的个数
			init:function(){
				var lis = $(".ct-bot .hidden li");
				$(".ct-bot ul.list").html("");
				for(var n=0;n<Show._default;n++){
					lis.eq(n).appendTo(".ct-bot ul.list");
				};
				for(var i=Show._default;i<lis.length;i++){
					_content.push(lis.eq(i));
				};
			},
			
			loadMore:function(){
				var mLis = $(".ct-bot ul.list li").length;
				for(var i =0;i<Show._loading;i++){
					var target = _content.shift();
					if(!target){
						$('.ct-bot .more').html("<p>加载完毕</p>");
						break;
					}
					$(".ct-bot ul.list").append(target);
				}
			}
		}
		Show.init();
		$('.ct-bot .more').click(function(){
			Show.loadMore();
			return false;
		})
})

//=================点击更多图片========================
$(function(){
	    var n=0;
		var _content = []; //临时存储li循环内容
		var Show2 = {
			_default:6, //默认显示图片个数
			_loading:3,  //每次点击按钮后加载的个数
			init:function(){
				var lis = $(".content-year .hidden li").css({"width":"32.73333%"});
				$(".content-year ul.list").html("");
				for(var n=0;n<Show2._default;n++){
					lis.eq(n).appendTo(".content-year ul.list");
				};
				for(var i=Show2._default;i<lis.length;i++){
					_content.push(lis.eq(i));		
				};	
			},
			loadMore:function(){
				var mLis = $(".content-year ul.list li").length;
				for(var i =0;i<Show2._loading;i++){
					var target = _content.shift();
					if(!target){
						$('.content-year .btn').html("<p>加载完毕</p>");
						break;
					}
					$(".content-year ul.list").append(target);
				}
			}
			
		}		
		Show2.init();
		$('.content-year .btn').click(function(){
			n++;
			setTimeout(function(){Show2.loadMore();},200)
			
		})

})


//=================时间轴=========================================
$(function(){
	$('label').click(function(){
		$('.event_year>li').removeClass('current');
		$(this).parent('li').addClass('current');
		var year = $(this).attr('for');
		$('#'+year).parent().prevAll('div').slideUp(500);
		$('#'+year).parent().slideDown(500).nextAll('div').slideDown(500);
	});
})

//===============================tab====================================

$(function(){
	$('#main-c li').each(function(i,t){
		var _this=$(this)
		
		$(this).click(function(){
			var n=$(this).index()
			
			$('#main-c li').removeClass()
			$('#main-c .tabtext').css("display","none").removeClass('ac')
			
			if(n==0){
				$(this).addClass('green')
				
			}else if(n==1){
				$(this).addClass('red')
			
			}else{
				$(this).addClass('oringe')
				
			}
			$('#main-c .tabtext').eq(n).css({"display":"block"}).addClass('ac')
			
		})
	})
	
	
	$(".next a").click(function() {
		nextscroll()
	});

	function nextscroll() {
		var vcon = $(".ac .v_cont ");
		console.log(vcon)
		var offset = ($(".ac .v_cont dt").width()) * -1;
		vcon.stop().animate({
			left: offset
		}, "slow", function() {
			var firstItem = $(".ac .v_cont dl dt").first();
			vcon.find("dl").append(firstItem);
			$(this).css("left", "0px");
			
		})
	};

	
	$(".prev a").click(function() {
		var vcon = $(".ac .v_cont ");
		var offset = ($(".ac .v_cont dt").width() * -1);
		var lastItem = $(".ac .v_cont dl dt").last();
		vcon.find("dl").prepend(lastItem);
		vcon.css("left", offset);
		vcon.animate({left: "0px"}, "slow", function(){})
	});
	
	
})

//================================================
var $guideSlider = $("#guideSlider").eq(0);

$guideSlider.find(".guide-list .guide").hover(function() {
$(this).addClass("on").siblings().removeClass("on");
});
