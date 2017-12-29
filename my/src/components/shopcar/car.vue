<!-- 以后项目的根组件 -->
<template>
	<div  id='tmpl'>
			<!--1购物车<br>-->
		<div class='infoList'>
			<li>
				<div class="switch">
					<mt-switch class="switch" >
					</mt-switch>

				</div>
				<div class="info">
					<img src="" alt=""/>
				</div>
			</li>
		</div>

	</div>
</template>

<script>
	export default{
			data(){
		datalist:[
			{
						"cou": 1,
						"id": 87,
						"title": "华为（HUAWEI）荣耀6Plus 16G双4G版",
						"sell_price": 2195,
						"thumb_path": "http://www.webhm.top:8080/upload/201504/20/thumb_201504200046594439.jpg"
					},
					{
						"cou": 1,
						"id": 88,
						"title": "苹果Apple iPhone 6 Plus 16G 4G手机（联通三网版）",
						"sell_price": 5780,
						"thumb_path": "http://www.webhm.top:8080/upload/201504/20/thumb_201504200059017695.jpg"
					}
		]
	},
	method:{
		getData(){
			var url =  '/api/goods/getshopcarlist/';
		},
		geshi(){
			var obj = {};
			var data = [{'goodsid':87,'count':3},{'goodsid':87,'count':4},{'goodsid':89,'count':3},{'goodsid':89,'count':1}];
//			for(var key in data){
//
//			}
			for(var i=0;i<data.length;i++){
				var item = data[i];

			}
		}
	}

	}
</script>

<style scoped>
.fl{
	float: left;
}

	.switch{
		width: 70px;
		height: 70px;
		float: left;
	}
	.info{
		width: 100%;
		padding-left: 70px;
		background: red;
	}
.infoList li{
	width: 100%;
	height: 300px;
	list-style:none;
}

</style>