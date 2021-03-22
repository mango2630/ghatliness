<template>
    <LogInBg></LogInBg>
    <div :class="{content, s__signup}">

        <!-- start: login -->
        <div class="form sign-in" ref="log">
            <h2>欢迎回来</h2>
            <label>
                <span>用户名</span>
                <input type="text" ref="username" v-model="username" />
            </label>
            <label>
                <span>密码</span>
                <input type="password" ref="password" v-model="password"/>
            </label>
            <p class="forgot-pass"><a href="javascript:">忘记密码？</a></p>
            <button type="button" class="submit" @click="submit">登 录</button>
        </div>
        <!-- end: login -->
        
        <div class="sub-cont">

            <!-- start: switch login and register -->
            <div class="img">
                <div class="img__text m--up">
                    <h2>还未注册？</h2>
                    <p>立即注册，发现大量机会！</p>
                </div>
                <div class="img__text m--in">
                    <h2>已有帐号？</h2>
                    <p>有帐号就登录吧，好久不见了！</p>
                </div>
                <div class="img__btn" @click="switchState">
                    <span class="m--up">注 册</span>
                    <span class="m--in">登 录</span>
                </div>
            </div>
            <!-- end: switch login and register -->

            <!-- start : register -->
            <div class="form sign-up" ref="form">
                <h2>立即注册</h2>
                <label>
                    <span>用户名</span>
                    <input type="text" ref="name" v-model="name"/>
                </label>
                <label>
                    <span>邮箱</span>
                    <input type="email" ref="mailbox" v-model="mailbox"/>
                </label>
                <label>
                    <span>密码</span>
                    <input type="password" ref="ps" v-model="ps" />
                </label>
                <button type="button" class="submit" @click="register">注 册</button>
            </div>
            <!-- end: register -->

        </div>
    </div>
</template>

<script>
import LogInBg from './LogInBg';
// import {getRegisterData} from 'network/login'
import axios from 'axios'
import { onMounted } from 'vue';
export default {
    name : 'LogIn',
    data(){
        return{
            s__signup : false,
            content : true,
            username:null,
            mailbox: null,
            password: null,
            ps: null,
            stuNumber : null,
            name : null
        }
    },
    components:{
        LogInBg
    },
    computed:{
        form() {
            return {
                stuNumber: this.name,
                mailbox: this.mailbox,
                password: this.ps,
            }
        },
        log(){
            return{
                stuNumber : this.username,
                password:this.password
            }
        }
    },
    setup(){

        onMounted(()=>{
            
        })
        
    },
    methods:{
        switchState(){
            this.s__signup = !this.s__signup;
        },
        register(){
            console.log("register");
            axios({
                url: "http://111.229.238.150:8188/register/verifyuser",
                method: 'post',
                data: this.form       
                
            }).then(res=>{
                // 接收到的数据'
                console.log(res);
                console.log(this.form);
                if(res.data === 'success'){
                    alert("注册成功");
                }
            }).catch(err=>{
                // 错误处理
                console.log(err);
            })
        },
        submit(){
            console.log("submit");
            axios({
                url: "http://111.229.238.150:8188/login/check",
                method: 'post',
                data: this.log          
            }).then(res=>{
                console.log(res);
                console.log(res.data.message)
                // this.$router.push("/home");
                if (res.data.message === true) {
                    this.$router.push("/home");
                }else{
                    alert("登录失败");
                }
            }).catch(err=>{
                console.log(err);
                alert("登陆失败")
            })
        }

    }
}
</script>

<style scoped>
@import url('../../assets/login/style.css');
</style>

