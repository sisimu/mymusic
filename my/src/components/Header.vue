<!-- 以后项目的根组件 -->
<template>
    <div>
        <div class="header">
            <!--logo-->
           <h1><span class='fa fa-window-restore'></span>网易云音乐</h1>
            <!--前进后退按钮-->
            <div class='backGo'>
                <span class='fa fa-arrow-left'></span>
                <span class='fa fa-arrow-right'></span>
            </div>
            <!--搜索框-->
            <div class='searchBox'>
                <input type="text" placehold='输入歌单、电台、歌手'/>
                <span class='fa fa-search'></span>
            </div>
            <!--右边登录设置等等-->
            <div class="boxRight">
                <div class="userBox">
                        <span v-if='!flag'>
                          <span @click='showLogin'>未登录</span>
                          <span>注册</span>
                        </span>
                        <span v-if='flag'>
                          <span @click='showLogin' class='userImg' ><img  v-bind:src="infoList.avatarUrl" /></span>
                          <span data-userInfo='username'>{{infoList.nickname}}</span>
                        </span>
                        <span class='fa fa-angle-down'></span>
                        <div class='loginBox' v-if='showLoginBox'>
                                <div v-if='!flag'>
                                    <input type="text" name='phone' v-model='phone'/>
                                    <input type="password" name='password' v-model='password'/>
                                    <button @click='login'>登录</button>
                                </div>
                                <div v-if='flag'>
                                    个人信息
                                    <div>
                                      <span>会员</span>
                                      <span>等级</span>
                                      <span class='fa '></span>

                                    </div>
                                </div>
                        </div>
                </div>
                <div class="center">
                    <span>换肤</span>
                    <span class='fa fa-envelope-open-o'></span>
                    <span class='fa fa-cog'></span>
                </div>
                <div class='wxindowBox'>
                    <span>迷你</span>
                    <span class='fa fa-window-minimize'></span>
                    <span class='fa fa-window-maximize'></span>
                    <span class='fa fa-close'></span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
  import $ from '../../static/jquery/jquery-3.2.0.js';
    export default{
        data(){
            return {
                showLoginBox: false,
                phone:'',
                password:'',
                flag: false,
                infoList:{}
            }
    },
    created(){
    this.loginFlag();
}
    ,
    methods:{
        loginFlag(){
        var myInfo = $cookies.get('userInfo');
              myInfo = JSON.parse(myInfo);//把json格式的对象，转换成对象
//              console.log(myInfo);
              if(myInfo){
                this.flag = true;
                this.infoList = myInfo;
              }else{
                this.flag = false;
              }
            },
        login(){
            var url ='/api/login/cellphone?phone='+this.phone+'&password='+this.password;
        this.$http.get(url,{credentials: true}).then(function (response) {
            console.log(response);
          var data = response.data;
            if(response.status==200){
              console.log(response.data.profile);
              var userInfoString = JSON.stringify(response.data.profile);
                 $cookies.set("userInfo",userInfoString,'2m');
            }
          })
        },
        showLogin(){
            this.showLoginBox=!this.showLoginBox;
        }
    }
    }
</script>

<style scoped>
    .fa{
        color: #fff;
        font-size: 20px;
    }
    .header{
        width: 100%;
        height: 80px;
        box-sizing: border-box;
        padding: 20px 10px;
        background: #C62F2F;
    }
    h1{
        font-size: 25px;
        color: #fff;
        width: 15%;
        text-align: center;
        float: left;
    }
    .header .backGo{
        float: left;
    }
    .backGo span{
        /*width: 60px;*/
        padding: 5px 10px;
        font-size: 24px;
        border: 1px solid #eee;
        text-align: center;
    }
    .searchBox{
        width: 300px;
        height:40px;
        line-height: 40px;
        box-sizing: border-box;
        float: left;
        background: #A82828;
        margin-left: 20px;
        border-radius: 20px;
    }
    .searchBox input{
        width:85%;
        background: #A82828;
        height:40px;
        line-height: 40px;
        /*border:*/
        outline: none;
        font-size: 20px;
        /*background: red;*/
        color: #fff;
        border: 0;
        border-bottom-left-radius: 20px;
        border-top-left-radius: 20px;

    }
    .searchBox span{
        height:40px;
        line-height: 40px;
        text-align: center;
        width: 10%;
    }

    .boxRight{
        float: right;
        color:#fff;
        margin-left: 20px;
        width: 40%;
        font-size: 16px;

    }
    .userBox{
        /*margin-left: 10px;*/
        width: 30%;
        float: left;
        /*color: #fff;*/
    }
    .center{
        float:left;
        width: 40%;

    }
    .boxRight span {
        padding: 10px 5px;

    }
    .wxindowBox span{
        font-size: 14px;
    }
    .loginBox input{
        color: #000;
    }

    .userImg img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
</style>
