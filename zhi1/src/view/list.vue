<template>
<div>
	<router-link :to="{ name: 'listDefault'}">列表页面头</router-link> 

<side-bar>

</side-bar>
	<router-view></router-view>
</div>
</template>

<script>
import sideBar from '../components/side-bar.vue'
export default {
	components:{
		sideBar
	},

}
	
</script>