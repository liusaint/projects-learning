<template>
	<div class="">{{$route.params.id}}


		<list-comp v-for="story in stories" :story="story"></list-comp>
	</div>
</template>

<script>
	import listComp from './list-comp.vue';
	export default {
		components:{
			listComp
		},
		data:()=>{ 
			return {
				stories:[],
			}			
		},
		mounted:function(){
			this.getTheme();
		},
		watch: {
    		// 如果路由有变化，会再次执行该方法
    		'$route': 'getTheme'
    	},
		methods:{
			getTheme: function(){
				let _this = this;		
				ajax({
					url: '/news-at/api/4/theme/'+ this.$route.params.id,
					method: 'GET',
					dataType:'json',
					contentType:'application/x-www-form-urlencoded;charset=UTF-8;',
					success:function(res){
						_this.stories = res.stories;
					}
				})
			}
		}
	}
</script>