/**
 * Created by Cchen on 2019/4/15.
 */
$(function () {
    if (window.location.pathname == '/') {
        $("#fist").addClass('act');
    }
    if (window.location.pathname == '/cli-match'||window.location.pathname == '/cli-main') {
        $("#match").addClass('act');
    }
    if (window.location.pathname == '/cli-project') {
        $("#project").addClass('act');
    }
    if (window.location.pathname == '/cli-main-n') {
        $("#project").addClass('act');
    }

    $(".userBox .uubox").hover(function () {
        $(".opts").show();
    }, function () {
        $(".opts").hide();
    });

    $('.pointt .maodian').hover(function () {
        // 鼠标移入时添加hover类
        $(this).html(`<i>返回顶部<i>`);
    }, function () {
        // 鼠标移出时移出hover类
        $(this).html('<span class="iconfont icon-fanhuidingbu"></span>');
    });

    $('.pointt .option').hover(function () {
        // 鼠标移入时添加hover类
        $(this).html(`<i>意见反馈<i>`);
    }, function () {
        // 鼠标移出时移出hover类
        $(this).html('<span class="iconfont icon-yijianfankui"></span>');
    });

    $('.pointt .help').hover(function () {
        // 鼠标移入时添加hover类
        $(this).html(`<i style="left:10px;top: 7px;">帮助中心<i>`);
    }, function () {
        // 鼠标移出时移出hover类
        $(this).html('<span class="iconfont icon-bangzhuzhongxin" style="font-size:38px;"></span>');
    });

    $('.pointt .qq').hover(function () {
        // 鼠标移入时添加hover类
        $(this).html(`<i style="left:10px;top: 7px;">QQ咨询<i>`);
    }, function () {
        // 鼠标移出时移出hover类
        $(this).html('<span class="layui-icon layui-icon-login-qq" style="font-size:38px;"></span>');
    });
});


layui.use(['layer', 'form', 'jquery'], function () {
    var layer = layui.layer
        , form = layui.form
        , $ = layui.jquery;

    $(".list a").click(function () {
        $(".act").removeClass("act");
        $(this).addClass("act");
    });

    //取消默认回车事件
    $('.layui-input').on('keydown', function (event) {
        if (event.keyCode == 13) {
            return false
        }
    });

});