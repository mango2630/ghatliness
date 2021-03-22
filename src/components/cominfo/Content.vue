<template>

    <div class="box-content">
        <ul class="nouser" >

            <!-- list item content -->
            <li :key=index v-for="(item, index) in comArr">
                <div class="nouserBox">
                    <div class="img-box">
                        <img :src="item.imgSrc" alt="" />
                    </div>
                    <div class="nouserTitle">
                        <h3>
                            {{item.title}}
                        </h3>
                        <div class="nouserown">
                            <p>{{item.source}}</p>
                        </div>
                    </div>
                </div>
            </li>
            <li :key=index v-for="(item, index) in comArr">
                <div class="nouserBox">
                    <div class="img-box">
                        <img :src="item.imgSrc" alt="" />
                    </div>
                    <div class="nouserTitle">
                        <h3>
                            {{item.title}}
                        </h3>
                        <div class="nouserown">
                            <p>{{item.source}}</p>
                        </div>
                    </div>
                </div>
            </li>
            <li :key=index v-for="(item, index) in comArr">
                <div class="nouserBox">
                    <div class="img-box">
                        <img :src="item.imgSrc" alt="" />
                    </div>
                    <div class="nouserTitle">
                        <h3>
                            {{item.title}}
                        </h3>
                        <div class="nouserown">
                            <p>{{item.source}}</p>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name : 'Content',

    data(){
        return{
            comArr : [
                // 动态添加src被当做静态资源处理了，没有进行编译，所以要加上require。
                // 1:国际级  2：国家级  3：省部级
                // 4：协会级 5：校级
                // ps：筛选就此省略,,,,(狗头保命)
                {
                    imgSrc:require("../../assets/cominfo/img/acm.jpeg"),
                    title:"ACM/ICPC ACM国际大学生程序设计竞赛",
                    source:"美国计算机协会",
                    class : 1
                },
                {
                    imgSrc:require("../../assets/cominfo/img/microsoft.png"),
                    title:"微软&quot;创新杯&quot;全球学生大赛",
                    source:"微软（中国）有限公司",
                    class : 2
                },
                {
                    imgSrc:require("../../assets/cominfo/img/internet.png"),
                    title:"中国国际“互联网”大学生创新创业大赛",
                    source:"教育部、中宣部、国家发改委、科技部、工信部、人社部、商务部、团中央",
                    class : 2
                },
                {
                    imgSrc:require("../../assets/cominfo/img/internet.png"),
                    title:"中国国际“互联网”大学生创新创业大赛",
                    source:"教育部、中宣部、国家发改委、科技部、工信部、人社部、商务部、团中央"
                },
                {
                    imgSrc:require("../../assets/cominfo/img/internet.png"),
                    title:"中国国际“互联网”大学生创新创业大赛",
                    source:"教育部、中宣部、国家发改委、科技部、工信部、人社部、商务部、团中央"
                },
                {
                    imgSrc:require("../../assets/cominfo/img/internet.png"),
                    title:"中国国际“互联网”大学生创新创业大赛",
                    source:"教育部、中宣部、国家发改委、科技部、工信部、人社部、商务部、团中央"
                },
                {
                    imgSrc:require("../../assets/cominfo/img/microsoft.png"),
                    title:"微软&quot;创新杯&quot;全球学生大赛",
                    source:"微软（中国）有限公司"
                },
                {
                    imgSrc:require("../../assets/cominfo/img/acm.jpeg"),
                    title:"ACM/ICPC ACM国际大学生程序设计竞赛",
                    source:"美国计算机协会"
                },
                {
                    imgSrc:require("../../assets/cominfo/img/microsoft.png"),
                    title:"微软&quot;创新杯&quot;全球学生大赛",
                    source:"微软（中国）有限公司"
                },
                {
                    imgSrc:require("../../assets/cominfo/img/internet.png"),
                    title:"中国国际“互联网”大学生创新创业大赛",
                    source:"教育部、中宣部、国家发改委、科技部、工信部、人社部、商务部、团中央"
                }
            ]
        }
    }
}
</script>

<style scoped>
/* @import url('../../assets/cominfo/css/content.css'); */

@import url('../../assets/cominfo/css/contentAdd.css');

</style>