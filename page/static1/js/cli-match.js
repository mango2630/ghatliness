/**
 * Created by Cchen on 2019/4/19.
 */
layui.use(['element', 'jquery', 'form', 'layer', 'table', 'upload', 'carousel'], function () {
    var $ = layui.jquery
        , form = layui.form
        , layer = layui.layer
        , table = layui.table
        , upload = layui.upload
        , carousel = layui.carousel
        , user = ''
        , myTable = ''
        , dmTable = ''
        , headerUrl = ''
        , lock = true
        , keyWord = ''
        , moid = '',
        year = $("#htyear").text()
        , mid = ''
        , cid = ''
        , element = layui.element;
    form.render("select");
    $.getScript('./js/dev.js', function () {
        headerUrl = headerUrl;
    });
    //查询赛事输入框
    $.ajax({
        url: headerUrl + "/service/race?year=" + year,
        dataType: "json",
        xhrFields: { withCredentials: true },
        success: function (data) {
            list = data.data;
            $.each(list, function (index, item) {
                $('#keyMatch').append('<option value="' + item.id + '">' + item.name + '</option>');//往下拉菜单里添加元素
            });
            if ($(".ndu").text() != '') {
                $("#keyMatch").val($(".ndu").text());
            }
            form.render("select");
        }
    });

    form.on('select(keyMatch)', function (data) {
        getInfo(data.value);
        //window.location.replace(headerUrl+'/cli-match?keyWord='+data.value);
    });



    //报名要求
    $(".bmyq").click(function () {
        var tt = '';
        tt = $(this).next().html();
        layer.open({
            title: ['报名要求', 'font-size: 18px;'],
            type: 1,
            skin: 'layui-layer-demo', //样式类名
            anim: 2,
            scrollbar: false,
            shadeClose: true, //开启遮罩关闭
            content: tt
        });
    });

    $("#upload").click(function () {
        $("#logo").click();
    });
    $("#logo").change(function (e) {
        var name = e.currentTarget.files[0].name;
        $("#document_name").html(name);
    });

    $(".cck").click(function () {
        getInfo();
    });
    //筛选栏
    $(".dd_info .ckbox").click(function () {
        $(this).addClass('active');
        $(this).find('i').show();
        $(this).parent().parent().parent().find('.pt').removeClass('pt').addClass('bh');
        getInfo();
    });
    $(".dd_info .rado").click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        getInfo();
    });
    //筛选请求
    function getInfo (word) {
        var strCj = '';
        var strCc = '';
        var strDx = '';
        var strZt = '';
        var strYea = $(".nd").find('.active').text().replace(/[^0-9]/ig, "");

        if (word) {
            window.location.href = './cli-match?keyWord=' + word + '&year=' + strYea;
        }
        else {
            var $cjAct = $(".cj").find('.active');
            for (var i = 0; i < $cjAct.length; i++) {
                if (strCj != '') {
                    strCj += ',';
                    strCj += $cjAct[i].innerText.replace(/[^\u4e00-\u9fa5]/gi, "");
                }
                else {
                    strCj += $cjAct[i].innerText.replace(/[^\u4e00-\u9fa5]/gi, "");
                }
            }
            var $YerAct = strYea;

            var $ccAct = $(".cc").find('.active');
            for (var z = 0; z < $ccAct.length; z++) {
                if (strCc != '') {
                    strCc += ',';
                    strCc += $ccAct[z].innerText.replace(/[^\u4e00-\u9fa5]/gi, "");
                }
                else {
                    strCc += $ccAct[z].innerText.replace(/[^\u4e00-\u9fa5]/gi, "");
                }
            }
            var $dxAct = $(".dx").find('.active');
            for (var j = 0; j < $dxAct.length; j++) {
                if (strDx != '') {
                    strDx += ',';
                    strDx += $dxAct[j].innerText.replace(/[^\u4e00-\u9fa5]/gi, "");
                }
                else {
                    strDx += $dxAct[j].innerText.replace(/[^\u4e00-\u9fa5]/gi, "");
                }
            }
            var $ztAct = $(".zt").find('.active');
            for (var a = 0; a < $ztAct.length; a++) {
                if (strZt != '') {
                    strZt += ',';
                    strZt += $ztAct[a].innerText.replace(/[^\u4e00-\u9fa5]/gi, "");
                }
                else {
                    strZt += $ztAct[a].innerText.replace(/[^\u4e00-\u9fa5]/gi, "");
                }
            }

            window.location.href = './cli-match?molevel=' + strCj + '&malevel=' + strCc + '&mopar=' + strDx + '&stat=' + strZt + '&year=' + $YerAct;
        }
    }
    //取消操作
    $(".dd_info span").find('i').click(function (e) {
        e.stopPropagation();
        $(this).parent().removeClass('active');
        $(this).hide();
        var $active = $(this).parent().parent().find('.active');
        if ($active.length == 0) {
            $(this).parent().parent().parent().parent().find('.bh').removeClass('bh').addClass('pt');
        }
        getInfo('');
    });
    //点击不限
    $(".bx").click(function () {
        $(this).parent().find('.dd_info').find('.active').removeClass('active');
        $(this).parent().find('.dd_info').find('i').hide();
        $(this).removeClass('bh').addClass('pt');
        getInfo('');
    });

    //$(document).keyup(function(event){
    //    if(event.keyCode ==13){
    //        $(".cck").trigger("click");
    //    }
    //});

});