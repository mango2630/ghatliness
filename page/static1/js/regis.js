/**
 * Created by Cchen on 2019/5/6.
 */
$(function () {
    layui.use(['form', 'jquery', 'layer'], function () {
        var form = layui.form;
        var $ = layui.jquery;
        var layer = layui.layer;
        var headerUrl = '';
        var recode = '';
        $.getScript('./js/dev.js', function () {
            headerUrl = headerUrl;
        });

        $("#username").blur(function () {
            let phone = $(this).val();
            let flag = false;
            let message = "";
            let myreg = /^\d+$/;
            if (phone.length != 11) {
                message = "请输入有效的手机号码";
                $(".getCode").removeClass('actcd');
            }else if(!myreg.test(phone)){
                message = "请输入有效的手机号码！";
            }else {
                flag = true;
                $(".getCode").text('获取验证码');
            }
            if (!flag) {
                //提示错误效果
                if ($(this).val() != '') {
                    $("#teltips").text(message);
                    $("#teltips").show();
                }
            }
            else {
                $(".getCode").addClass('actcd');
                $("#teltips").hide();
                //获取验证码
                $(".actcd").unbind().click(function () {
                    let phone = $("#username").val();
                    $.ajax({
                        url: headerUrl + "/u/sendsms?phone=" + phone + '&check=yes',
                        dataType: "json",
                        xhrFields: { withCredentials: true },
                        success: function (data) {
                            if (data.success) {
                                recode = data.msg;
                                $(".getCode").text('验证码已发');
                                $(".getCode").unbind('click');
                                $(".getCode").removeClass('actcd');
                                $("#teltips").hide();
                            }
                            else {
                                $("#teltips").text(data.msg);
                                $("#teltips").show();
                            }

                        }
                    });
                })
            }
        })


        $("#sub").click(function () {
            if ($("#username").val() == '') {
                layer.msg('请输入手机号码');
                return false;
            }
            if ($("#code").val() == '') {
                layer.msg('请输入图形验证码')
                return false;
            }
            if ($("#phone").val() == '') {
                layer.msg('请输入手机验证码')
                return false;
            }
            let code = $("#code").val().toLowerCase();
            let num = show_num.join("");
            if (code == num) {
                if ($("#phone").val() == recode) {
                    $.ajax({
                        url: headerUrl + '/u/signup',
                        type: 'post',
                        dataType: 'json',
                        data: {
                            'user[username]': $('#username').val(),
                        },
                        success: function (data) {
                            if (data.success) {
                                window.location.href = "/paswd";
                            }
                            else {
                                layer.msg(data.msg);
                                return false;
                            }
                        },
                        error: function () {
                            layer.msg('请求失败');
                        }
                    });
                    //防止页面跳转
                    return false;
                }
                else {
                    layer.msg('手机验证码输入有误');
                    return false;
                }

            }
            else {
                layer.msg('验证码错误！请重新输入！');
                $("#code").val('');
                draw(show_num);
                return false;
            }
        });




        //验证码
        var show_num = [];
        draw(show_num);

        $("#canvas").on('click', function () {
            draw(show_num);
        });
        function draw (show_num) {
            var canvas_width = $('#canvas').width();
            var canvas_height = $('#canvas').height();
            var canvas = document.getElementById("canvas");//获取到canvas的对象，演员
            var context = canvas.getContext("2d");//获取到canvas画图的环境，演员表演的舞台
            canvas.width = canvas_width;
            canvas.height = canvas_height;
            var sCode = "A,B,C,E,F,G,H,J,K,L,M,N,P,Q,R,S,T,W,X,Y,Z,1,2,3,4,5,6,7,8,9,0";
            var aCode = sCode.split(",");
            var aLength = aCode.length;//获取到数组的长度

            for (var i = 0; i <= 3; i++) {
                var j = Math.floor(Math.random() * aLength);//获取到随机的索引值
                var deg = Math.random() * 30 * Math.PI / 180;//产生0~30之间的随机弧度
                var txt = aCode[j];//得到随机的一个内容
                show_num[i] = txt.toLowerCase();
                var x = 10 + i * 20;//文字在canvas上的x坐标
                var y = 20 + Math.random() * 8;//文字在canvas上的y坐标
                context.font = "bold 23px 微软雅黑";

                context.translate(x, y);
                context.rotate(deg);

                context.fillStyle = randomColor();
                context.fillText(txt, 0, 0);

                context.rotate(-deg);
                context.translate(-x, -y);
            }
            for (var i = 0; i <= 5; i++) { //验证码上显示线条
                context.strokeStyle = randomColor();
                context.beginPath();
                context.moveTo(Math.random() * canvas_width, Math.random() * canvas_height);
                context.lineTo(Math.random() * canvas_width, Math.random() * canvas_height);
                context.stroke();
            }
            for (var i = 0; i <= 30; i++) { //验证码上显示小点
                context.strokeStyle = randomColor();
                context.beginPath();
                var x = Math.random() * canvas_width;
                var y = Math.random() * canvas_height;
                context.moveTo(x, y);
                context.lineTo(x + 1, y + 1);
                context.stroke();
            }
        }

        function randomColor () {//得到随机的颜色值
            var r = Math.floor(Math.random() * 256);
            var g = Math.floor(Math.random() * 256);
            var b = Math.floor(Math.random() * 256);
            return "rgb(" + r + "," + g + "," + b + ")";
        }

    });
})