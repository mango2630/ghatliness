<template>
    
    <!-- start : navigation -->
    <header class="header-nav">
        <div class="container clearfix">
            <div class="w1200">
                <span class="l">
                    XUST<font>竞赛管理</font>
                </span>
            </div>

            <div class="userBox">
                <ul class="do">
                    <li class="log"><router-link to='/home'>系统首页</router-link></li>

                    

                    <li class="log"><router-link to='/cominfo'>竞赛管理</router-link></li>

                    <li class="log"><router-link to='/promanage'>项目管理</router-link></li>
                    <li class="log"><router-link to='/personcenter'>个人中心</router-link></li>
                    <!-- <li class="log"><a href="" class="login">联系我们</a></li> -->

                    <li class="log"><router-link to="/">退出登录</router-link></li>
                </ul>
            </div>

        </div>
    </header>
</template>

<script>
export default {
    name : "Header"
}
</script>

<style scoped>
@import url('../../assets/home/css/style.css');
@import url('../../assets/cominfo/css/common.css');



a{
color:white
}

.router-link-active{
    color:white
}
</style>