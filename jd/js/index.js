$(function() {
	var timer = null;
	$('.places').on('mouseover', function() {
		clearTimeout(timer);
		$(this).css('background', 'white');
		$('.dorpdown-layer').show();
	});
	$('.places').on('mouseout', function() {
		timer = setTimeout(function() {
			$('.places').css('background', '#E3E4E5');
			$('.dorpdown-layer').hide();
		}, 100)
	});
	$('.dorpdown-layer').on('mouseover', function() {
		clearTimeout(timer);
		$('.places').css('background', 'white');
		$('.dorpdown-layer').show();
	});
	$('.dorpdown-layer').on('mouseout', function() {
		timer = setTimeout(function() {
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
	$('#myjd').on('mouseover',function  () {
		$(this).css('background', 'white');
		$('.myjd-info').show();
	});
	$('#myjd').on('mouseout', function() {
			$('#myjd').css('background', '#E3E4E5');
			$('.myjd-info').hide();
	});
	$('#service').on('mouseover',function  () {
		$(this).css('background', 'white');
		$('.services').show();
	});
	$('#service').on('mouseout', function() {
			$(this).css('background', '#E3E4E5');
			$('.services').hide();
	});
	$('#w-nva').on('mouseover',function  () {
		$(this).css('background', 'white');
		$('.w-nav').show();
	});
	$('#w-nva').on('mouseout', function() {
			$(this).css('background', '#E3E4E5');
			$('.w-nav').hide();
	});
})