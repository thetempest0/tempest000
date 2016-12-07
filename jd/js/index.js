//	 -----------------------top------------------------------
	$('#jd-Top').load('html/top.html');
	//	   ---------------------家用电器出现了-----------------------
	(function() {
		var timer = null;
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
	})();

	//	   ---------------------购物车出现啦-----------------------						
	(function() {
		$('#cart').hover(function() {
			$('.cart-x').show();
		}, function() {
			$('.cart-x').hide();
		});
	})();

	//	   ---------------------轮播图-----------------------
	(function() {
		var lunbo = null;
		var timer = null;
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
		timer = setInterval(function() {
			$('.right').click();
		}, 5000);
		$('.lunbo').hover(function() {
			$('.left').show();
			$('.right').show();
			clearInterval(timer);
		}, function() {
			$('.left').hide();
			$('.right').hide();
			timer = setInterval(function() {
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
	})();
	//	---------------------这里是轮播下面-----------------------
	(function() {
		$.ajax({
				url: 'json/index.json'
			})
			.done(function(data) {
				$('.fs-sale-1 img').each(function(i) {
					$(this).attr('src', data.fs[i])
				})

			})
	})();
	//	---------------------这里是促销效果-----------------------
	(function() {
		$('.user_profit a').hover(function() {
			$(this).css({
				background: "red",
				color: "white"
			});
		}, function() {
			$(this).css({
				background: "white",
				color: "#e01222"
			});
		});
		$('.new_tab_a').on('mouseover', function() {
			$(this).css('color', '#333');
			$('.mtc-item').eq($(this).index()).show().siblings().hide();
		});
	})();

	//	---------------------这是是充话费阶段-----------------------

	(function() {
		$('.tant').on('mousemove', function() {
			$('.service_list').css({
				top: -38
			});
			$('.service_txt').eq($(this).index()).css('border-top-color', 'red').parents('.tant').siblings().find('.service_txt').css('border-top-color', 'white');
			$('.tanchu').stop().animate({
				top: 30
			}, 200);
		});
		$('.xx').on('click', function() {
			$('.tanchu').stop().animate({
				top: 212
			});
			$('.service_list').stop().animate({
				top: 0
			});
			$('.service_txt').css('border-top-color', 'white')
		});
		$('.tanchu_item').on('mouseover', function() {
			$('.huafei').eq($(this).index()).show().siblings('div').hide();
			$(this).css({
				background: "red",
				color: "white"
			}).siblings().css({
				background: "none",
				color: "#666"
			})
		})
	})();
	//	---------------------这是秒杀阶段-----------------------
	(function() {
		$.ajax({
				url: "json/index.json",
			})
			.done(function(data) {
				$('.sip').each(function(i) {
					$(this).attr('src', data.sk[i].img);
				});
				$('.sipp').each(function(i) {
					$(this).html(data.sk[i].title);
				});
				$('.sk_newprice span').each(function(i) {
					$(this).html(data.sk[i].price);
				});
				$('.sk_price del').each(function(i) {
					$(this).html(data.sk[i].orign);
				});
				$('.sip').hover(function() {
					$(this).stop().animate({
						top: -3
					}, 200)
				}, function() {
					$(this).stop().animate({
						top: 0
					}, 200)
				})
			})
	})();

	//	---------------------这里是发现好货阶段-----------------------
	(function() {
		$.ajax({
				url: "json/index.json",
			})
			.done(function(data) {
				$('.fcg-img').each(function(i) {
					$(this).attr('src', data.fcg[i].img);
				});
				$('.find_item_name').each(function(i) {
					$(this).html(data.fcg[i].title);
				});
				$('.fcg-img').hover(function() {
					$(this).stop().animate({
						right: 15
					}, 200)
				}, function() {
					$(this).stop().animate({
						right: 10
					}, 200)
				});
			})
	})();
	//	---------------------这是品牌阶段-----------------------
	(function() {
		$.ajax({
				url: "json/index.json",
				async: true
			})
			.done(function(data) {
				$('.brand_rec_img').each(function(i) {
					$(this).attr('src', data.pinp[i].img);
				});
				$('.brand_rec_img').hover(function() {
					$(this).animate({
						right: 5
					}, 200);

				}, function() {
					$(this).animate({
						right: 0
					}, 200);
				});
				$('.brand_rec_name').each(function(i) {
					$(this).html(data.pinp[i].title);
				});
				$('.brand_rec_desc').each(function(i) {
					$(this).html(data.pinp[i].desc);
				});
			})
	})();
	//	---------------------这是排行榜阶段-----------------------
	(function() {
		$.ajax({
				type: "get",
				url: "json/index.json",
				async: true
			})
			.done(function(data) {
				$('.pvi_img').each(function(i) {
					$(this).attr('src', data.pvi[i].img);
				});
				$('.pvi_name').each(function(i) {
					$(this).html(data.pvi[i].title);
				})
			})

	})();
	//	---------------------这是排行榜效果-----------------------
	(function() {
		$('.paih_a').on('mouseover', function() {
			$('.paih_nva_item').eq($(this).index()).show().siblings('div').hide();
		});

	})();
	//	---------------------这是倒计时---------------------------
	(function() {
		function dou(value) {
			if(value < 10) {
				return '0' + value;
			} else {
				return value;
			}
		}

		function djs() {
			var future = new Date(2016, 11, 30, 00, 00, 00);
			var t = (future - new Date()) / 1000;
			var h = Math.floor(t % 86400 / 3600);
			var m = Math.floor(t % 86400 % 3600 / 60);
			var s = parseInt(t % 60);
			$('.hour').html(dou(h));
			$('.minute').html(dou(m));
			$('.second').html(dou(s));
		}
		djs();
		setInterval(djs, 1000);
	})();
	//	---------------------这是倒计时---------------------------
	(function() {
		$.ajax({
				type: "get",
				url: "json/index.json",
				async: true
			})
			.done(function(data) {
				$('.coupon_img').each(function(i) {
					$(this).attr('src', data.lq[i].img);
				});
				$('.coupon_jg').each(function(i) {
					$(this).html(data.lq[i].price);
				});
				$('.coupon_desc').each(function(i) {
					$(this).html(data.lq[i].desc);
				});
				$('.coupon_limit').each(function(i) {
					$(this).html(data.lq[i].title);
				});
				$('.coupon_more').each(function(i) {
					$(this).html(data.lq[i].more);
				});
				$('.coupon_img').hover(function() {
					$(this).stop().animate({
						right: 0
					}, 200);
				}, function() {
					$(this).stop().animate({
						right: 15
					}, 200);
				});
			})
	})();
	//	---------------------这是减价---------------------------
	(function() {
		$.ajax({
				type: "get",
				url: "json/index.json",
				async: true
			})
			.done(function(data) {
				$('.rec_img').each(function(i) {
					$(this).attr('src', data.rec[i])
				});
				$('.rec_img').hover(function() {
					$(this).stop().animate({
						opacity: 0.8
					});
				}, function() {
					$(this).stop().animate({
						opacity: 1
					});
				});
			})
	})();
	//	---------------------这是享品质阶段---------------------------
	(function() {
		$.ajax({
				type: "get",
				url: "json/index.json",
				async: true
			})
			.done(function(data) {
				$('.entry_img').each(function(i) {
					$(this).attr('src', data.xpz[i]);
				});
				$('.entry_img').hover(function() {
					$(this).stop().animate({
						right: 0
					}, 200)
				}, function() {
					$(this).stop().animate({
						right: -10
					}, 200)
				});
			});
	})();
	//	---------------------这是爱生活阶段---------------------------
	(function() {
		var bstop = true;
		$(window).on('scroll load', function() {
			var $scrolltop = $(window).scrollTop();
			var $height = $(window).height();
			var $top = $('#love-inner').offset().top + 200;
			if($top < $scrolltop + $height) {
				if(bstop) {
					$.ajax({
						type: "get",
						url: "json/index.json",
						beforeSend: function() {
							$('.pt_cover_img').attr('src',"img/jd/loader.gif");
							$('.pt_bi_img').attr('src',"img/jd/loader.gif");
							$('.pt_more_img').attr('src',"img/jd/loader.gif");
						}
					}).done(function(data) {
						$('.pt_cover_img').each(function(i) {
							$(this).attr('src', data.abig[i]);
						});
						$('.pt_cover_img').hover(function() {
							$(this).stop().animate({
								left: -10
							}, 150)
						}, function() {
							$(this).stop().animate({
								left: 0
							}, 150)
						});
						$('.pt_bi_img').each(function(i) {
							$(this).attr('src', data.pic[i].img);
						});
						$('.pt_bi_img').hover(function() {
							$(this).stop().animate({
								right: 8
							}, 150)
						}, function() {
							$(this).stop().animate({
								right: 0
							}, 150)
						});
						$('.pt_bi_tit').each(function(i) {
							$(this).html(data.pic[i].title);
						});
						$('.pt_bi_promo').each(function(i) {
							$(this).html(data.pic[i].desc);
						});
						$('.pt_more_img').each(function(i) {
							$(this).attr('src', data.pt[i]);
						});
						$('.pt_more_img').hover(function() {
							$(this).stop().animate({
								right: 10
							}, 150)
						}, function() {
							$(this).stop().animate({
								right: 0
							}, 150)
						});
						bstop = false;
					})
				}
			}
		});
	})();
	//	---------------------这是多图轮播---------------------------
	(function() {
		var num = 1;
		$('.lright1').on('click', function() {
			num++;
			tab('.duotu');
		});
		$('.lleft1').on('click', function() {
			num--;
			tab('.duotu');
		});
		$('.lright2').on('click', function() {
			num++;
			tab('.duotu2');
		});
		$('.lleft2').on('click', function() {
			num--;
			tab('.duotu2');
		});

		function tab(cla) {
			$(cla).stop(true, true).animate({
				left: -570 * num
			}, 200, function() {
				if($(cla).css('left') == -1710 + 'px') {
					$(cla).css('left', '-570px');
					num = 1;
				}
				if($(cla).css('left') == 0 + 'px') {
					$(cla).css('left', '-1140px');
					num = 2;
				}

			})
		}
	})();
	//	---------------------这是家电手机阶段---------------------------
	(function() {
		$.ajax({
				type: "get",
				url: "html/costume.html",
				async: true
			})
			.done(function(data) {
				$('#costume').append(data);
			});
	})();
	//	---------------------这是3C爱吃阶段---------------------------
	(function() {
		$.ajax({
				type: "get",
				url: "html/eat.html",
				async: true
			})
			.done(function(data) {
				$('#eat').append(data);
			});
	})();
	//	---------------------这是母婴图书阶段---------------------------
	(function() {
		$.ajax({
				type: "get",
				url: "html/book.html",
				async: true
			})
			.done(function(data) {
				$('#book').append(data);
			});
	})();
	//	---------------------这是虚拟阶段---------------------------
	(function() {
		$.ajax({
				type: "get",
				url: "html/game.html",
				async: true
			})
			.done(function(data) {
				$('#game').append(data);
			});
	})();
	//	---------------------这是底部阶段---------------------------
	(function() {
		$.ajax({
				type: "get",
				url: "html/foot.html",
				async: true
			})
			.done(function(data) {
				$('.Mod').append(data);
			});
	})();
	//	--------------------------固定栏-----------------------------------
	(function() {
		$(document).on('scroll', function() {
			if($(document).scrollTop() > 800) {
				$('#search').stop().animate({
					top: 0
				}, 200);
			} else {
				$('#search').stop().animate({
					top: -50
				}, 200);
			}
		});
	})();
	//	--------------------------楼梯-----------------------------------
	(function() {
		$(window).scroll(function() {
			var scrolltop = $(this).scrollTop();
			if(scrolltop >= 1600) {
				$('#loutinav').show();
			} else {
				$('#loutinav').hide();
			}
			$('.louti').each(function(i) {
				var $loutitop = $('.louti').eq(i).offset().top + 250;
				if($loutitop > scrolltop) {
					$('#loutinav li').removeClass('active');
					$('#loutinav li').eq(i).addClass('active');
					return false;
				}
			});
		});
		$('#loutinav li').not('.llast').click(function() {
			$(this).addClass('active').siblings('li').removeClass('active');
			var $loutitop = $('.louti').eq($(this).index()).offset().top;
			$('html,body').stop(true).animate({
				scrollTop: $loutitop - 50
			}, 600)
		})
		$('.llast').click(function() {
			$('html,body').animate({
				scrollTop: 0
			}, 600);
		});

	})();