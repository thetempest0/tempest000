$('.login-tab').on('click', function() {
	$('.mc').eq($(this).index()).show().siblings().hide();
});

//-----------------------------注册-------------------------------

(function() {
	//		----------------------用户名-----------------------------
	var uname_reg = /^[\u4e00-\u9fa5]{4,20}$|^[\dA-Za-z_\-]{4,20}$/;
	var uname_ok = false;
	$('.form-item').eq(0).find('input').on('focus', function() {
		$(this).attr('placeholder', '');
		$('.input-tip').eq(0).html('<span>　　支持中文、字母、数字、"-"　"_"的组合，4-20个字符</span>');
		$('.input-tip').eq(0).css('color', '#c5c5c5');
		$(this).parent().css('border-color', '#ddd');
	});
	$('.form-item').eq(0).find('input').on('blur', function() {
		if($(this).val() == '') {
			$(this).attr('placeholder', '您的账户名和登录名');
			$('.input-tip').eq(0).html('');
			uname_ok = false;
		} else if($(this).val().length < 4 || $(this).val().length > 20) {
			$('.input-tip').eq(0).html("　　长度只能在4-20个字符之间");
			$('.input-tip').eq(0).css('color', 'red');
			$(this).parent().css('border-color', 'red');
			uname_ok = false;
		} else if(!uname_reg.test($(this).val())) {
			$('.input-tip').eq(0).html("　　格式错误, 仅支持中文, 字母, 数字, \"-\", \"_\"的组合");
			$('.input-tip').eq(0).css('color', 'red');
			uname_ok = false;
			$(this).parent().css('border-color', 'red');
		} else {
			$('.input-tip').eq(0).html('');
			$('.i-status').eq(0).show();
			uname_ok = true;
		}

	});
	$('.form-item').eq(0).find('input').on('input', function() {
		$('.i-status').eq(0).hide();
	});

	//		---------------------------密码-------------------------
	var pwd_reg = /^(?![A-Z]+$)(?![a-z]+$)(?!\d+$)(?![\W_]+$)\S{6,20}$/;
	var pwd_ok = false;
	$('.form-item').eq(1).find('input').on('focus', function() {
		$(this).attr('placeholder', '');
		$('.input-tip').eq(1).html('<span>　　建议使用字母、数字和符号两种以上的组合，6-20个字符</span>');
		$('.input-tip').eq(1).css('color', '#c5c5c5');
		$(this).parent().css('border-color', '#ddd');
	});
	$('.form-item').eq(1).find('input').on('blur', function() {
		if($(this).val() == '') {
			$(this).attr('placeholder', '建议至少使用两种字符组合');
			$('.input-tip').eq(1).html('');
			pwd_ok = false;
		} else if($(this).val().length < 6 || $(this).val().length > 20) {
			$('.input-tip').eq(1).html("　　长度只能在6-20个字符之间");
			$('.input-tip').eq(1).css('color', 'red');
			$(this).parent().css('border-color', 'red');
			pwd_ok = false;
		} else if(!pwd_reg.test($(this).val())) {
			$('.input-tip').eq(1).html("　　有被盗风险, 建议使用字母, 数字和符号两种及以上组合");
			$('.input-tip').eq(1).css('color', 'red');
			pwd_ok = false;
		} else {
			$('.input-tip').eq(1).html('');
			$('.i-status').eq(1).show();
			pwd_ok = true;
		}
	});
	$('.form-item').eq(1).find('input').on('input', function() {
		$('.i-status').eq(1).hide();

	});

	//		----------------------------确认密码--------------------------
	var pwdtwo_ok = false;
	$('.form-item').eq(2).find('input').on('focus', function() {
		$(this).attr('placeholder', '');
		$('.input-tip').eq(2).html('<span>　　请再次输入密码</span>');
		$('.input-tip').eq(2).css('color', '#c5c5c5');
		$(this).parent().css('border-color', '#ddd');
	});

	$('.form-item').eq(2).find('input').on('blur', function() {
		if($(this).val() == '') {
			$(this).attr('placeholder', '请再次输入密码');
			$('.input-tip').eq(2).html('');
			pwdtwo_ok = false;
		} else if($(this).val() != $('.form-item').eq(1).find('input').val()) {
			$('.input-tip').eq(2).html('　　两次输入的密码不一致');
			$('.input-tip').eq(2).css('color', 'red');
			$(this).parent().css('border-color', 'red');
			pwdtwo_ok = false;
		} else {
			$('.input-tip').eq(2).html('');
			$('.i-status').eq(2).show();
			pwdtwo_ok = true;
		}
	})
	$('.form-item').eq(2).find('input').on('input', function() {
		$('.i-status').eq(2).hide();

	});

	//----------------------------手机号--------------------------
	var phone_reg = /^1[3|4|5|7|8]\d{9}$/;
	var phone_ok = false;
	$('.form-item').eq(3).find('input').on('focus', function() {
		$(this).attr('placeholder', '');
		$('.input-tip').eq(3).html('<span>　　完成验证后可以用该手机登录和找回密码</span>');
		$('.input-tip').eq(3).css('color', '#c5c5c5');
		$(this).parent().css('border-color', '#ddd');
	});
	$('.form-item').eq(3).find('input').on('blur', function() {
		if($(this).val() == '') {
			$(this).attr('placeholder', '建议使用常用手机');
			$('.input-tip').eq(3).html('');
			phone_ok = false;
		} else if(!phone_reg.test($(this).val())) {
			$('.input-tip').eq(3).html("　　格式有错");
			$('.input-tip').eq(3).css('color', 'red');
			$(this).parent().css('border-color', 'red');
			phone_ok = false;
		} else {
			$('.input-tip').eq(3).html('');
			$('.i-status').eq(3).show();
			phone_ok = true;
		}
	});
	$('.form-item').eq(3).find('input').on('input', function() {
		$('.i-status').eq(3).hide();
	});

	//------------------------验证号-------------------
	var yzm_ok = false;
	$.ajax({
			type: "get",
			url: "json/yzm.json",
			async: true
		})
		.done(function(data) {
			var rondom = Math.floor(Math.random() * 6);
			$('.yzm').attr('src', data.yzm[rondom].img);
			$('.yzm').attr('sid', data.yzm[rondom].sid);
			$('.yzm').on('click', function() {
				$('.form-item').eq(4).find('input').val('');
				$('.input-tip').eq(4).css('color', '#c5c5c5');
				$('.form-item').eq(4).css('border-color', '#ddd');
				$('.input-tip').eq(4).html('');
				var rondom = Math.floor(Math.random() * 6);
				$(this).attr('src', data.yzm[rondom].img);
				$(this).attr('sid', data.yzm[rondom].sid);
			});
			$('.form-item').eq(4).find('input').on('focus', function() {
				$(this).attr('placeholder', '');
				$('.input-tip').eq(4).html('<span>　　看不清？点击图片更换验证码</span>');
				$('.input-tip').eq(4).css('color', '#c5c5c5');
				$(this).parent().css('border-color', '#ddd');
			});
			$('.form-item').eq(4).find('input').on('blur', function() {
				if($(this).val() == '') {
					$(this).attr('placeholder', '请输入验证码');
					$('.input-tip').eq(4).html('');
					yzm_ok = false;
				} else if($(this).val() != $('.yzm').attr('sid')) {
					$('.input-tip').eq(4).html('　　验证码错误');
					$('.input-tip').eq(4).css('color', 'red');
					$(this).parent().css('border-color', 'red');
					yzm_ok = false;
				} else {
					yzm_ok = true;
					$('.input-tip').eq(4).html('');
				}
			});
		});

	//		----------------------------提交-------------------------

	$('.btn-register').on('click', function() {
		if(uname_ok && pwd_ok && pwdtwo_ok && phone_ok && yzm_ok) {
			//        ----------------------注册cookie---------------------

			(function() {
				function arrsearch(value, arr) {
					for(var i = 0; i < arr.length; i++) {
						if(value == arr[i]) {
							return true;
						}
					}
					return false;
				}
				var arr = [];
				$('.btn-register').on('click', function() {
					if(getCookie('usermore') == undefined) {
						arr.push($('.userr').val(), $('.psdd').val());
						if($('.userr').val() == '') {
							$('.input-tip').eq(0).html("　　用户名不能为空");
							$('.input-tip').eq(0).css('color', 'red');
							$('.form-item').eq(0).css('border-color', 'red');
						} else if($('.psdd').val() == '') {
							$('.input-tip').eq(1).html("　　密码不能为空");
							$('.input-tip').eq(1).css('color', 'red');
							$('.form-item').eq(1).css('border-color', 'red');
						} else {
							addCookie('usermore', arr.toString(), 7);
							window.location = 'logon.html';
						}
					} else {
						arr = getCookie("usermore").split(',');
						if(arrsearch($('.userr').val(), arr)) {
							$('.input-tip').eq(0).html("　　用户名已存在");
							$('.input-tip').eq(0).css('color', 'red');
							$('.form-item').eq(0).css('border-color', 'red');
						} else {
							arr.push($('.userr').val(), $('.psdd').val());
							addCookie('usermore', arr.toString(), 7);
							window.location = 'logon.html';
						}
					}
				});
			})();
		} else {
			alert('请补全或完善信息');
		}
	});
})();

//     ----------------登录cookie----------------------------

(function() {
	function arrsearch(value, arr) {
		for(var i = 0; i < arr.length; i++) {
			if(value == arr[i]) {
				return i;
			}
		}
		return false;
	};

	function arrsearch1(value, arr) {
		for(var i = 0; i < arr.length; i++) {
			if(value == arr[i]) {
				return true;
			}
		}
		return false;
	}
	$('.yhm input').on('focus', function() {
		$('.msg-warn i').html(' 公共场所不建议自动登录，以防账号丢失');
		$('.msg-warn').css({
			background: "#fef4e5",
			color: "#666"
		});
	});
	$('.pass').on('focus', function() {
		$('.msg-warn i').html(' 公共场所不建议自动登录，以防账号丢失');
		$('.msg-warn').css({
			background: "#fef4e5",
			color: "#666"
		});
	})
	$('.btn-a').on('click', function function_name() {
		if(getCookie('usermore')) {
			var userinfo = getCookie('usermore');
			var userarr = userinfo.split(',');
			if(arrsearch1($('.yhmm').val(), userarr)) {
				var index = arrsearch($('.yhmm').val(), userarr);
				if($('.pass').val() != userarr[index + 1]) {
					$('.msg-warn').html('账户名与密码不匹配，请重新输入');
					$('.msg-warn').css({
						background: "#ffebeb",
						color: "#e4393c"
					});
				} else {
					addCookie('user1', $('.yhmm').val(), 7);
					addCookie('pass1', $('.pass').val(), 7);
					window.location = "index.html";
				}
			} else {
				$('.msg-warn i').html('账户名与密码不匹配，请重新输入');
				$('.msg-warn').css({
					background: "#ffebeb",
					color: "#e4393c"
				});
			}
		} else {
			$('.msg-warn i').html('账户名与密码不匹配，请重新输入');
			$('.msg-warn').css({
				background: "#ffebeb",
				color: "#e4393c"
			});
		}
	});
})();