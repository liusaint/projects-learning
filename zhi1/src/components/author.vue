<template>	
	<div class="author">
		作者页面{{id}}
	</div>
</template>

<script>
	export default {
		data(){
			return {
				id:this.$route.params.id
			}
		}
	}

</script>