/**
 * Created by Cchen on 2019/6/3.
 */
layui.use(['laydate', 'laypage', 'layer', 'table', 'upload', 'element', 'form', 'jquery'], function () {
  var laydate = layui.laydate //日期
    , laypage = layui.laypage //分页
    , layer = layui.layer //弹层
    , table = layui.table //表格
    , form = layui.form //轮播
    , upload = layui.upload //上传
    , headerUrl = ''
    , $ = layui.jquery //jquery
    , element = layui.element;//元素操作
  $.getScript('./js/dev.js', function () {
    headerUrl = headerUrl;
  });
  //学校输入框
  $.ajax({
    url: headerUrl + "/school/all",
    dataType: "json",
    xhrFields: { withCredentials: true },
    success: function (data) {
      list = data.data;
      $.each(list, function (index, item) {
        $('#school').append(new Option(item.name, item.name));//往下拉菜单里添加元素
      });
      form.render("select");
    }
  });

  //回车事件
  $(document).keydown(function (e) {
    if (e.keyCode == 13) {
      $("#submit").click();
    }
  })

  $("#submit").click(function () {
    let school = $("#school").val();
    let username = $("#username").val();
    let name = $("#name").val();

    if (school != '' && username != '' && name != '') {
      $.ajax({
        url: headerUrl + "/u/get/inf",
        type: 'post',
        dataType: "json",
        xhrFields: { withCredentials: true },
        data: {
          school: school,
          username: username,
          name: name
        },
        success: function (data) {
          if (data.success) {
            window.location.href = "/check?uuid=" + data.msg;
          }
          else {
            layer.msg(data.msg, { icon: 5 });
          }
        }
      });
      return false;
    }
    else {
      layer.msg('请填写完整信息');
    }
  });


});