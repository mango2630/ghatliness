<template>
<div id="app">
    <vue-particles
        class="login-bg"
        color="#4D5259"
        :particleOpacity="0.7"
        :particlesNumber="60"
        shapeType="circle"
        :particleSize="4"
        linesColor="#ff3366"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="2"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
    >
    </vue-particles>
    <router-view></router-view>
</div>
</template>

<script>
export default {
    name : 'Entrance'
}
</script>

<style scoped>
.login-bg{
    background-color: #EDEDED;
    width: 100%;
    /* height: 794.4px; */
    height: 100%;
}


#app{
    width: 100%;
    height: 794.4px;
}
</style>