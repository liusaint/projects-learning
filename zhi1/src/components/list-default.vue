<template>
<ul class="list">
	<list-comp v-for="story in stories" :story = "story"></list-comp>
</ul>
</template>

<script>
	import listComp from 'list-comp.vue';
	export default {
		components:{
			listComp
		},
		data:()=>{
			return {
				stories:[],
				topStories:[]
			}
		},
		mounted: function () {		      	
			this.getStoryList();
		},
		methods:{
			getStoryList(){
				let _this = this;		
				ajax({
					url: '/news-at/api/4/news/latest',
					method: 'GET',
					dataType:'json',
					contentType:'application/x-www-form-urlencoded;charset=UTF-8;',
					success:function(res){
						_this.stories = res.stories;
						_this.topStories = res.top_stories;
					}
				})
			}
		}
	}

</script>