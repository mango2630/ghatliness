<template>
    <div>
        <Header></Header>
        <div style="width:100%" class="mainBox">
            <div class="layui-container">
                <Nav></Nav>
                <Content></Content>
                <Page></Page>
            </div>
        </div>
    </div>
</template>

<script>
import Header from 'components/cominfo/Header.vue'
import Nav from 'components/cominfo/Nav.vue'
import Content from 'components/cominfo/Content.vue'
import Page from 'components/cominfo/Page.vue'

export default {
    name : 'ComInfo',
    components:{
        Header,
        Nav,
        Content,
        Page
    }
}
</script>

<style>
body{
    background-color: whitesmoke;
}

.mainBox{
    position:relative;
}

div{
    margin: 0;
    padding: 0;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

*{
    box-sizing: border-box;
}

body{
    line-height: 24px;
    font: 14px Helvetica Neue,Helvetica,PingFang SC,Tahoma,Arial,sans-serif;
}

.layui-container {
    width: 750px;
    right: 200px;
}

.layui-container {
    position: relative;
    margin: 0 auto;
    padding: 0 15px;
    box-sizing: border-box;
}
</style>