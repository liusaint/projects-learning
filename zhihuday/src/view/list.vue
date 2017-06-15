<template>
	<list-header :show-sidebar.sync="showSidebar" :title="title" :tip="tip" :icon-display="iconDisplay"> </list-header>


    <!--侧边栏-->
    <side-bar :show-sidebar.sync="showSidebar" :tip.sync="tip"> </side-bar>


	<!--页面子路由-->
	<router-view></router-view>


</template>
<script type="text/ecmascript-6">
	import listHeader from '../components/list-header.vue'
	import sideBar from '../components/sidebar.vue'

	export default{
		components:{
			listHeader,
			sideBar
		},
		data(){
			return {
				loading:false,
				tip:'',
				showSidebar:false
			}
		},
		computed:{
			title (){
				switch(this.$route.params.id){
					case '13':
					return '日常心理学'
					case '12':
					return '用户推荐日报'
					case '3':
					return '电影日报'
					case '11':
					return '不许无聊'
					case '4':
					return '设计日报'
					case '5':
					return '大公司日报'
					case '6':
					return '财经日报'
					case '10':
					return '互联网安全'
					case '2':
					return '开始游戏'
					case '7':
					return '音乐日报'
					case '9':
					return '动漫日报'
					case '8':
					return '体育日报'
					default:
					return '首页'
				}
			},
			iconDisplay(){
				if(this.$route.params.id){
					return false
				}else{
					return true
				}
			}
		},
		events:{
			'changeTile' (str){
				this.tip = str
			}
		},
		attached () {
		},
		  methods: {
    replace (str) {
      return str.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p')
    },
    showBar () {
      window.document.body.classList.add = 'scroll-stop'
      window.document.querySelector('html').classList.add = 'scroll-stop'
//      window.document.body.style.overflow = 'hidden'
//      window.document.querySelector('html').style.overflow = 'hidden'
      this.showSidebar = !this.showSidebar
    },
    hiddenBar () {
      window.document.body.className = ''
      window.document.querySelector('html').className = ''
//      window.document.body.style.overflow = 'initial'
//      window.document.querySelector('html').style.overflow = 'initial'
      this.showSidebar = !this.showSidebar
    }
  }
	}

</script>