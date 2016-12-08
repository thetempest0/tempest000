$('.Top').load('html/top.html');


$.ajax({
    url: 'json/cart.json',
    async:false,
    success: function(data) {
        for (var i = 0; i < data.piclist.length; i++) {
            $('.loadimg').eq(i).attr('src', data.piclist[i].img);
            $('.loadimg').eq(i).attr('sid', data.piclist[i].sid);
            $('.loadt').eq(i).html(data.piclist[i].title);
            $('.loadpcp').eq(i).html(data.piclist[i].price);
        }
        if (getCookie('cartsid')) { 
        	$('.cart-empty').hide();
            var s = getCookie('cartsid').split(',');
            var n = getCookie('cartnum').split(',');
            for (var i = 0; i < s.length; i++) {
                createcart(s[i], n[i]);
            }
        }
    }
})


function cookiearr() { 
    if (getCookie('cartsid')) { 
        sidarr = getCookie('cartsid').split(',');
    } else {
        sidarr = [];
    }
    if (getCookie('cartnum')) { 
        numarr = getCookie('cartnum').split(',');
    } else {
        numarr = []
    }
}
var sidarr = [];
var numarr = [];

$('.p-btn a').on('click', function() {
	
    cookiearr();
    var sid = $(this).parents('.goodsinfo').find('.p-img').find('img').attr('sid');
    if ($.inArray(sid, sidarr) != -1) { 
        $('.goods-item:visible').each(function() {
            if (sid == $(this).find('.goods-pic').find('img').attr('sid')) {
                var $value = $(this).find('.quantity-form').children('input').val();
                $value++;
                $(this).find('.quantity-form').children('input').val($value);
                numarr[sidarr.indexOf(sid)] = $value;
                var dj = parseFloat($(this).find('.b-price').find('strong').html());
                $(this).find('.b-sum').find('strong').html((dj * $value).toFixed(2));
                addCookie('cartnum', numarr.toString(), 7);
            }
        });
    } else { 
        sidarr.push(sid);
        addCookie('cartsid', sidarr.toString(), 7);
        numarr.push(1);
        addCookie('cartnum', numarr.toString(), 7);
        createcart(sid, 1);
    }
});

function createcart(sid, num) {
    $.ajax({
        url: 'json/cart.json',
        async:false,
        success: function(data) {
            for (var i = 0; i < data.piclist.length; i++) {
                if (sid == data.piclist[i].sid) {
                    var $clone = $('.goods-item:hidden').clone(true);
                    $clone.find('img').attr('src', data.piclist[i].img);
                    $clone.find('img').attr('sid', data.piclist[i].sid);
                    $clone.find('.goods-d-info').find('a').html(data.piclist[i].title);
                    $clone.find('.b-price').find('strong').html(data.piclist[i].price);
                    $clone.find('.quantity-form').find('input').val(num);
                    var singleprice = parseFloat($clone.find('.b-price').find('strong').html());
                    var count = parseInt($clone.find('.quantity-form').find('input').val());
                    $clone.find('.b-sum').find('strong').html((singleprice * count).toFixed(2));
                    $clone.css('display', 'block'); //克隆的是隐藏的
                    $('.item-list').append($clone);
                    totalprice();
                    ifkong();
                  
                }
            }
        }
    })
}

function deletegood(sid1, array) { //删除数组里面对应的元素。
    var arr = [];
    for (var i = 0; i < array.length; i++) {
        if (sid1 != array[i]) {
            arr.push(array[i]);
        }
    }
    numarr.splice(sidarr.indexOf(sid1), 1); //对应位置
    sidarr = arr;
    addCookie('cartsid', sidarr.toString(), 7);
    addCookie('cartnum', numarr.toString(), 7);
}


$('.b-action a').on('click', function() {
    cookiearr();
    $(this).parents('.goods-item').remove();
    deletegood($(this).parents('.goods-item').find('img').attr('sid'), sidarr);
    totalprice();
    ifkong();
});


$('.operation a').on('click', function() {
    cookiearr();
    $('.goods-item:visible').each(function() {
        if ($(this).find('input:checkbox').is(':checked')) { //选中所有的checkbox，如果里面包含checked
            $(this).remove();
            deletegood($(this).find('img').attr('sid'), sidarr);
            ifkong();
        }
    });
    totalprice();
})

//统计总价格
function totalprice(){
    var $total=0;
    $('.goods-item:visible').each(function(){
        if($(this).find('.cart-checkbox').children('input').is(':checked')){
            $total+=parseFloat($(this).find('.b-sum').find('strong').html());
        }
    })
    $('.price-sum .totalprice').html('￥'+$total.toFixed(2));
    //统计件数
    $('.amount-sum').find('em').html( $('.goods-item:visible').find('.cart-checkbox input:checked').size());
}

//按钮的全选
$('.allsel').on('change',function(){
    if($(this).prop('checked')){
        $('.goods-item:visible :checkbox').prop('checked',true);
    }else{
        $('.goods-item:visible :checkbox').prop('checked',false);
    }
    totalprice();
})

var $input=$('.goods-item:visible :checkbox');

$input.on('click',function(){
    if($('.goods-item:visible input:checked').length==$input.size()){
        $('.allsel').prop('checked',true);
    }else{
        $('.allsel').prop('checked',false);
    }
    totalprice()
});

//改变购买数量
//计算小计
function smalltotal(row){//参数：哪一个商品的小计
    var $dprice=parseFloat(row.parents('.goods-item').find('.b-price').children('strong').html());
    var $dnum=parseInt(row.parents('.goods-item').find('.quantity-form').children('input').val());
    return ($dprice*$dnum).toFixed(2);
}

//添加购买数量
$('.quantity-add').on('click',function(){
    var $buynum=parseInt($(this).prev('input').val());
    $buynum++;
    if($buynum>=99){
        $(this).prev('input').val(99);
    }else{
        $(this).prev('input').val($buynum);
    }
    $(this).parents('.goods-item').find('.b-sum').find('strong').html(smalltotal($(this)));
    totalprice();
    changecookie($(this));
})


$('.quantity-down').on('click',function(){
    var $buynum=parseInt($(this).next('input').val());
    $buynum--;
    if($buynum<1){
        $(this).next('input').val(1);
    }else{
       $(this).next('input').val($buynum); 
    }
    $(this).parents('.goods-item').find('.b-sum').find('strong').html(smalltotal($(this)));
    totalprice();
    changecookie($(this));
})

$('.quantity-form').find('input').on('input',function(){
    var v=parseInt($(this).val());
    var reg=/^\d+$/g;
    if(reg.test(v)){
        if(v<=0){
            $(this).val(1)   
        }else if(v>99){
            $(this).val(99) 
        }else{
            $(this).val(v);
        }
    }else{
       $(this).val(1) 
    }
    $(this).parents('.goods-item').find('.b-sum').find('strong').html(smalltotal($(this)));
    totalprice();
    changecookie($(this));
    
});


//按钮添加数量进cookie
function changecookie(obj){
    cookiearr();
    var $index=obj.parents('.goods-item').find('.goods-pic').find('img').attr('sid');
    numarr[sidarr.indexOf($index)]=obj.parents('.goods-item').find('.quantity-form').find('input').val();
    addCookie('cartnum', numarr.toString(), 7);
}

function ifkong () {
	  if (getCookie('cartsid')) {
	  	$('.cart-wrap').show();
		$('.cart-empty').hide();
	}else{
		$('.cart-empty').show();
		$('.cart-wrap').hide();
	}
}