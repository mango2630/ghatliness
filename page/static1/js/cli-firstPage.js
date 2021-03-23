/**
 * Created by Cchen on 2019/4/19.
 */
layui.use(['carousel', 'form', 'element', 'jquery'], function () {
    var $ = layui.jquery
        , form = layui.form
        , carousel = layui.carousel
        , headerUrl = ''
        , element = layui.element;
    $.getScript('./js/dev.js', function () {
        headerUrl = headerUrl;
    });
    //建造实例
    carousel.render({
        elem: '#casol-1'
        , arrow: 'always' //始终显示箭头
        , width: '850px'
        , height: '280px'
        //,autoplay:false
        , indicator: 'none'
        // ,indicator: none
        //,anim: 'updown' //切换动画方式
    });

    carousel.render({
        elem: '#tab-csol'
        , arrow: 'always' //始终显示箭头
        //,autoplay:false
        , width: '878px'
        , height: '450px'
        , indicator: 'none'
        //,anim: 'updown' //切换动画方式
    });

    //轮播图
    $(".layui-carousel-arrow[lay-type='sub']").click(function () {
        $(".box-3 .it-btn li").eq(0).addClass('layui-this').siblings().removeClass('layui-this');
    });
    $(".layui-carousel-arrow[lay-type='add']").click(function () {
        $(".box-3 .it-btn li").eq(1).addClass('layui-this').siblings().removeClass('layui-this');
    });

    var z = true;
    var b1 = 0;
    var b2 = 0;
    carousel.on('change(tab-csol)', function (obj) {
        $(".box-3 .it-btn .layui-this").removeClass('layui-this').siblings().addClass('layui-this');
        z = !z;
        //console.log(z);
        if (z == true) {
            b1 = 3;
            b2 = 0;
        }
        else {
            b1 = 0;
            b2 = 3;
        }
        $(".mengban-btn1").css('z-index', b1);
        $(".mengban-btn2").css('z-index', b2);
    });
});