<!-- 以后项目的根组件 -->
<template>
	<div  id='tmpl'>
		<ul class="mui-table-view mui-grid-view">
			<li v-for='item in list' class="mui-table-view-cell mui-media mui-col-xs-6">
				<router-link  v-bind="{
						   to:'/goods/goodsinfo/'+item.id
						   }">
					<img :src="item.img_url"/>
					<p class='title'>{{item.title}}</p>
					<div class="info">
						<p>
							<span>{{item.sell_price}}</span>
							<del>{{item.market_price}}</del>
						</p>
						<p>
							<span>热卖中</span>
							<span>剩余{{item.stock_quantity}}</span>
						</p>
					</div>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	import common from '../../common/common.js';
	export default{
		data(){
		return{
			list: []
		}
	},
	created(){
//
		this.getGoods(1);
	},
	methods:{
//		获取商品列表
//		/api/getgoods?pageindex=number
		getGoods(number){
			var url = common.apidomain+ '/api/getgoods?pageindex='+number;
			this.$http.get(url).then(function(response){
				var data = response.body.message;
				console.log(data);
				this.list = data;
			})

			}
		}
	}
</script>

<style scoped>
	li{
		border: 1px solid #ccc;
	}
	.title{
		color: #007aff;
	}
	.info{
		background:#eee;
		height: 60px;
		line-height: 60px;
	}
	.info  p{
		height: 30px;
		line-height: 30px;
	}

	del{
		color:red;
	}

</style>