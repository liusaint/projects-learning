<template>
	<ul class="left-bar">

		<router-link to="/author/9" tag="li">author页面</router-link>
		<router-link to="/" tag="li">首页</router-link>
		<router-link v-for = "theme in list" v-bind:to="'/theme/' + theme.id" tag="li" :key="theme.id">{{theme.title}}</router-link>
	</ul>
</template>

<script>
	export default {
		data:()=>{
			return {
				// themes:[
				// {id:1,title:'theme1'},
				// {id:2,title:'theme2'}
				// ]
				list:[]
			}
		},
		mounted: function () {  
		debugger;        	
			this.getList();
		},
		methods:{
			getList() {
				let _this = this;
				debugger;
				ajax({
					url: '/news-at/api/4/themes',
					method: 'GET',
					success:function(res){
						debugger;
						_this.$set('list',res.others);
					}
				})
			}
		}
	}
</script>

<style>
	ul,li{
		list-style: none;
	}
	.left-bar{
		position: absolute;
		width: 300px;
		top: 0;
		left: 0;
		line-height: 32px;
		background: #fff;
	}
	.left-bar li{
		border-bottom: 1px solid #e5e5e5;	

	}

</style>