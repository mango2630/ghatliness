<template>
    
    <div>
        <Header></Header>
        <div class="xzy">
            <ul>
                <li>
                    亲爱的尊敬的王学长：
                </li>
                <li>
                    首先，不反驳，接受接下来任何训斥
                </li>
                <li>
                    希望能够狗头保命，主页就这样了
                </li>
                <li>
                    然后，就只是重写了页面，完善了登陆注册，别的都没和后端接口对接。
                </li>
                <li>
                    最后，承认超级糟糕，接受批评单纯重构页面这回事。
                </li>
        </ul>
        </div>
    </div>
</template>

<script>
import Header from 'components/home/Header.vue'
export default {
    name : 'Home',
    data(){
        return{
        }
    },
    components : {
        Header,
    },
    methods:{
        
    },
    mounted:function (){
        for(let i = 0; i < 4; i ++){
            console.log("lazy".charAt(i));
        }
    }
}
</script>

<style scoped>
body{
    position: relative;
}
.xzy{
    width: 500px;
    height: 300px;
    background-color: blanchedalmond;
    position: absolute;
    left: 200px;
}
</style>