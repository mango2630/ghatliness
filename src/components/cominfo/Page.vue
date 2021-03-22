<template>
    <div class="pageBox">
        <ul class="pagination">
            <li class="active"><span>1</span></li>
            <li><a href="#" onclick="goPage('2')">2</a></li>
            <li><a href="#" onclick="goPage('3')">3</a></li>
            <li><a href="#" onclick="goPage('4')">4</a></li>
            <li><a href="#" onclick="goPage('2')">></a></li>
            <li><a href="#" onclick="goPage('4')">共 4 页</a></li>
        </ul>
    </div>

</template>

<script>
export default {
    name : 'Page'
}
</script>

<style scoped>
@import url("../../assets/cominfo/css/page.css");
</style>