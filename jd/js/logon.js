$('.login-tab').on('click',function  () {
	$('.mc').eq($(this).index()).show().siblings().hide();
});
