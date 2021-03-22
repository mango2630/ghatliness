<template>
<div>
    <Header></Header>

    <!-- start: header -->
    <!-- <div class="jumbotron">
        <h1 class="h1">同学，您好！</h1>
        <p>开启您的项目启程...</p>
        <p id="button">返回首页</p>
    </div> -->
    <!-- end: header -->

    <!-- start: add item progress -->
    <div class="container" id="box">
        <table class="table table-bordered table-hover" border="1">
            <caption class="h3 text-info">项目表</caption>
            <tr>
                <th class="text-center" style="width: 10%;">任务序号</th>
                <th class="text-center" style="width: 20%;">任务状态</th>
                <th class="text-center" style="width: 40%;">任务描述</th>
                <th class="text-center" style="width: 10%;">截至时间</th>
                <th class="text-center" style="width: 10%;">负责人</th>

                <!-- NOTICE -->
                <th class="text-center">
                    <input type="button" value="+" class="btn btn-primary"
                    @click="add">
                </th>
            </tr>
            <tr class="text-center" v-for="(item, index) in myData">
                <td class="index-css">{{index+1}}</td>
                <td>
                    <label class="radio-inline">
                        <input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"> 进行中
                    </label>
                    <label class="radio-inline">
                        <input type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"> 已完成
                    </label>
                    <label class="radio-inline">
                        <input type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"> 已检查
                    </label>
                </td>
                <td>
					<input type="text" id="weight" name="weight" style="width:90%" class="form-control" placeholder="简述任务内容">
				</td>
                <td>
                    <input type="week" id="unit" name="unit" class="form-control">
                    <!-- <el-date-picker
                    style="border:1px solide black"
                    v-model="value1"
                    type="date"
                    placeholder="截止时间">
                    </el-date-picker> -->
                    
				</td>
                <td>
					<input type="text" id="price" name="peice" style="width:90%" class="form-control" placeholder="输入姓名">
				</td>
				<td class="btn-delete">
					<button class="btn btn-del btn-sm" data-toggle="modal" data-target="#layer" v-on:click="nowIndex=$index">X</button>
				</td>
            </tr>

            <tr v-show="myData.length==0">
                <td colspan="6" class="text-center text-info">
                    <p>暂无数据...</p>
                </td>
            </tr>
        </table>
    </div>
    <!-- end: add item progree -->

    <!--弹出框-->
    <div role="dialog" class="modal fade" id="layer" data-index="{{nowIndex}}">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button class="close" data-dismiss="modal">
                        <span>&times;</span>
                    </button>
                    <h4 class="modal-title">确认删除吗？</h4>
                </div>
                <div class="modal-body text-right">
                    <button class="btn btn-cancel btn-sm" data-dismiss="modal">取消</button>
                    <button class="btn btn-danger btn-sm" data-dismiss="modal" v-on:click="del(nowIndex)">确认</button>
                </div>
            </div>
        </div>
    </div>

</div>
</template>

<script>

import Header from 'components/promanage/Header.vue'
export default {
    name : 'ProManage',
    data(){
        return{
            myData:[],
            nowIndex: -100,
            disabledDate(time) {
                return time.getTime() > Date.now()
            },
            shortcuts: [{
                text: 'Today',
                value: new Date(),
            }, {
                text: 'Yesterday',
                value: (() => {
                    const date = new Date()
                    date.setTime(date.getTime() - 3600 * 1000 * 24)
                    return date
                })(),
            }, {
            text: 'A week ago',
            value: (() => {
                const date = new Date()
                date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
                return date
            })(),
            }],
            value1: '',
            value2: '',
            
        };
    },
    methods:{
        add:function(){
            
            this.myData.push({
                
            })
        },
        del:function(n){
            alert
            if ( n== -2){
                this.myData="";
            }else{
                this.myData.splice(n, 1);
            }
        }
    },
    computed:{
    
    },
    components : {
        Header
    }

}
</script>

<style>
@import url("../../assets/promanage/css/style.min.css");

.el-input .el-input .el-input__inner{
    border: 1px solide black;
}
</style>