<template>
	<router-link v-bind:to="'/article/'+ story.id"		
	 class="" tag="div">{{story.title}}</router-link>
</template>
<script>
	export default {
		props:['story']
	}
</script>