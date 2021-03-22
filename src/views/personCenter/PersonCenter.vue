<template>
    <div class="header">

			<div class="bar">
				<div class="w1200">
					<span class="l">
                        XUST<font>个人中心</font>
                    </span>
					
					<span class="r" ><router-link to='/'>退出登录</router-link></span>
				</div>
			</div> 

			<div class="user-info">
				<div class="w1200">
					<div class="user-headface">
						<img src="../../assets/personcenter/img/user_face.jpg"/>
					</div>
					<div class="user-account">
						<p class="tip">下午好，袁潇</p>
						<p class="account">
							<span>学号：19407010204</span>
							<span>用户名：袁潇</span>
						</p>
					</div>
					<div class="user-modify">
						<!-- <a href="">返回首页</a> -->
						<router-link to="/home">返回首页</router-link>
					</div>
				</div>
			</div>
		</div>
		<div class="main w1200">
			<div class="left">
				<ul>
					<li>
						<a href="#" class="active">
							<i class="icon iconfont icon-lingdang"></i>
							消息
						</a>
					</li>
					<li>
						<a href="#">
							<i class="icon iconfont icon-wenda"></i>
							项目信息
						</a>
					</li>
					<li>
						<a href="#">
							<i class="icon iconfont icon-pinglun"></i>
							竞赛评论
						</a>
					</li>
					<li>
						<a href="#">
							<i class="icon iconfont icon-geren"></i>
							个人资料
						</a>
					</li>
					<li>
						<a href="#">
							<i class="icon iconfont icon-jilu"></i>
							参赛记录
						</a>
					</li>
				</ul>
			</div>
			<div class="right">
				<div class="tap">
					<span>系统消息</span>
				</div>
				<div class="container">
					<div class="no-doc">
						<img src="../../assets/personcenter/img/no_doc.jpg"/>
						<p>您还没有消息哦~</p>
					</div>
				</div>
			</div>
		</div>
</template>

<script>
export default {
    name : 'PersonCenter',
	components : {
	},
	onmouted:function(){
		console.log("刷新一下，布局有Bug")
	}
}
</script>

<style scoped>
@import url('../../assets/personcenter/css/style.css');

</style>