	var timer = null;
	var timer2=null;
	var timer3=null;
	//	-------------------------地方出现了----------------------	
	$('.places').on('mouseover', function() {
		clearTimeout(timer2);
		$(this).css('background', 'white');
		$('.dorpdown-layer').show();
	});
	$('.places').on('mouseout', function() {
		timer2 = setTimeout(function() {
			$('.places').css('background', '#E3E4E5');
			$('.dorpdown-layer').hide();
		}, 100)
	});
	$('.dorpdown-layer').on('mouseover', function() {
		clearTimeout(timer2);
		$('.places').css('background', 'white');
		$('.dorpdown-layer').show();
	});
	$('.dorpdown-layer').on('mouseout', function() {
		timer2 = setTimeout(function() {
			$('.places').css('background', '#E3E4E5');
			$('.dorpdown-layer').hide();
		}, 100)
	});
	$('.selected').on('click', function() {

		$(this).css({
			background: "red",
			color: "white"
		}).parent().siblings().find('a').css({
			background: "none",
			color: "#999"
		});
		$('.palce-s').html($(this).html())
		$('.dorpdown-layer').hide();
		$('.places').css('background', '#E3E4E5');
	});
	//	-------------------------我的京东出现了----------------------
	$('#myjd').hover(function() {
		$(this).css('background', 'white');
		$('.myjd-info').show();
	}, function() {
		$('#myjd').css('background', '#E3E4E5');
		$('.myjd-info').hide();
	});
	//	-------------------------客服服务出现了----------------------
	$('#service').hover(function() {
		$(this).css('background', 'white');
		$('.services').show();
	}, function() {
		$(this).css('background', '#E3E4E5');
		$('.services').hide();
	});
	//	-------------------------网站导航出现了----------------------
	$('#w-nva').hover(function() {
			$(this).css('background', 'white');
			$('.w-nav').show();
		}, function() {
			$(this).css('background', '#E3E4E5');
			$('.w-nav').hide();
		})
		//	   ---------------------家用电器出现了-----------------------
	$('.sort-first').on('mouseover', function() {
		clearTimeout(timer);
		$('#sort-total').show();
	});
	$('.sort-first').on('mouseout', function() {
		timer = setTimeout(function() {
			$('#sort-total').hide();
		}, 100)
	});
	$('#sort-total').on('mouseover', function() {
		clearTimeout(timer);
		$(this).show();
	});
	$('#sort-total').on('mouseout', function() {
		timer = setTimeout(function() {
			$('#sort-total').hide();
		}, 100)
	});
	//	   ---------------------购物车出现啦-----------------------						
	$('#cart').hover(function() {
		$('.cart-x').show();
	}, function() {
		$('.cart-x').hide();
	});
//	   ---------------------轮播图-----------------------	
	var lunbo = null;
	var bstop = true;
	$('.lunbo-i').on('mouseover', function() {
		if(bstop) {
			lunbo = $(this).index();
			lunBo();
		}
		bstop = false;
	});
	$('.right').on('click', function() {
		if(bstop) {
			lunbo++;
			if(lunbo > $('.lunbo-i').length - 1) {
				lunbo = 0;
			}
			lunBo();
		}
		bstop = false;
	})
	$('.left').on('click', function() {
		if(bstop) {
			lunbo--;
			if(lunbo < 0) {
				lunbo = $('.lunbo-i').length - 1;
			}
			lunBo();
		}
		bstop = false;
	})
	timer3 = setInterval(function() {
		$('.right').click();
	}, 5000);
	$('.lunbo').hover(function() {
		$('.left').show();
		$('.right').show();
		clearInterval(timer3);
	}, function() {
		$('.left').hide();
		$('.right').hide();
		timer3 = setInterval(function() {
			$('.right').click();
		}, 5000);
	})

	function lunBo() {
		$('.lunbo-i').eq(lunbo).addClass('red').siblings('i').removeClass('red');
		$('.lunbotu li').eq(lunbo).stop().animate({
			opacity: 1
		}, function() {
			bstop = true;
		}).siblings('li').css('opacity', '0');
	};

//	---------------------这里是促销效果-----------------------
	$('.user_profit a').hover(function  () {
			$(this).css({
				background:"red",
				color:"white"
			});
	},function  () {
		$(this).css({
				background:"white",
				color:"#e01222"
		});
	});
	$('.new_tab_a').on('mouseover',function  () {
		$(this).css('color','#333');
		$('.mtc-item').eq($(this).index()).show().siblings().hide();
	});


