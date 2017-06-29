<template>
	<div class="article">
	<span class="go-back" v-on:click="goBack">返回</span>
		<p>{{title}}</p>
		<div v-html="article"></div>
	</div>
</template>

<script>
	export default {
		data:()=>{
			return {
				article:'',
				title:'',
			}
		},
		mounted: function () {		      	
			this.getArticle();
		},
		methods:{
			getArticle() {
				let _this = this;		
				ajax({
					url: '/news-at/api/4/news/'+ this.$route.params.id,
					method: 'GET',
					dataType:'json',
					contentType:'application/x-www-form-urlencoded;charset=UTF-8;',
					success:function(res){
						_this.article = res.body;
						_this.title = res.title;
					}
				})
			},
			goBack:function(){
				history.go(-1);
			}
		}
	}
</script>