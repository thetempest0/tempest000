$('#jd-Top').load('html/top.html');


$(function() {
				var num = 0;

				$('.g-right').click(function() {
					$('.lh').stop().animate({
						left: -50
					}, function() {
						$('.g-left').css('cursor', 'pointer');
						$('.g-right').css('cursor', 'default');
					})
				});
				$('.g-left').click(function() {
					$('.lh').stop().animate({
						left: 0
					}, function() {
						$('.g-left').css('cursor', 'default');
						$('.g-right').css('cursor', 'pointer');
					})
				});
				$('.lh li').mousemove(function() {
					num = $(this).index();
					$('.lh img').css('border-color', 'white');
					$('.lh img').eq(num).css('border-color', 'red');
					$('.spec-n1 img').attr("src", "img/jd/erji" + (num + 1) + ".jpg");
					$('.bigimg img').attr("src", "img/jd/erjibig" + (num + 1) + ".jpg");
				});
				$('.spec-n1').hover(function() {
					$('.bigimg').show();
					$('.fdj').show();
				}, function() {
					$('.bigimg').hide();
					$('.fdj').hide();
				})
				$('.spec-n1').mousemove(function(e) {
					var x = e.pageX - $('.fdj').width()/2 -$(this).offset().left;
					var y = e.pageY - $('.fdj').height()/2 -$(this).offset().top;
					var fdjx = $('.spec-n1').width() -$('.fdj').width();
					var fdjh = $('.spec-n1').height() - $('.fdj').height();
					if(x < 0) {
						x = 0;
					}
					if(x > fdjx) {
						x = fdjx;
					}
					if(y < 0) {
						y = 0;
					}
					if(y > fdjh) {
						y = fdjh;
					}
					$('.fdj').css({
						left: x,
						top: y
					})
					var by = parseInt($('.fdj').css('top')) / ($('.fdj').height() - $('.spec-n1').height());
					var bx = parseInt($('.fdj').css('left')) / ($('.fdj').width() - $('.spec-n1').width());
					var a = ($('.bigimg img').height() - $('.bigimg').height());
					var b = ($('.bigimg img').width() - $('.bigimg').width());
					$('.bigimg img').css({
						left: bx * b,
						top: by * a
					})

				})

			})