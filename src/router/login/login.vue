<template>
    <div class="login">
        <div class="login_div">
             <ul v-model="tabView">
                <li v-for="(tab,index) in li" @click="iscur=index,tabChange('select'+(index+1))" :class="{cur:iscur== index}">{{tab}}</li>
                <!-- <li v-for="(item,index) in li" @click="isShow(item,index)" :class="{li_active:index === indexs}">{{item}}</li> -->
             </ul>
             <transition>
                <component :is="tabView"></component>
             </transition>
        </div>
    </div>
</template>
<script>
// @ 代表src，在webpack.config.js中alisa配置
// import x from "@/assets";
import select1 from "../../components/logined/twoCode.vue"
import select2 from "../../components/logined/emails.vue"
// import select2 from "../../components/logined/teacher.vue"

export default {
    data(){
        return {
            tabView:"select1",
            li:["二维码登录","账号登录"],
            iscur:0
        }
    },
    name:"logined",
    components:{
        select1,
        select2
    },
    methods:{
        tabChange:function(tab){
            this.tabView = tab;
        }
    }
}
</script>
<style>
.login{
  width: 100%;
  height: 100%;
  background-image: url("../../static/img/login.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: relative;
}
.login_div{
    position: absolute;
    right: 55px;
    top: 150px;
    width: 23%;
    height: 305px;
    border-radius: 5px;
    background: #fff;
}
.login_div>ul{
    float: left;
    width: 100%;
    height: 30px;
    line-height: 30px;
    background: #ccc;
    border-bottom: 1px #000 solid;
}
.login_div>ul>li{
    float: left;
    font-size: 12px;
    width: 50%;
    text-align: center;
}
.login_div>ul>li:nth-child(1){
    border-top-left-radius: 5px;
}
.login_div>ul>li:nth-child(2){
    border-top-right-radius: 5px;
}
.li_active{
    background: #ccc;
    color: #fff;
}
.cur{
    background: #fff;
}
.v-enter{
    overflow: hidden;
    opacity: 0;
}
.v-enter-to{
    opacity: 1;
}
.v-enter-active{
    transition: opacity linear 1s;
}
</style>
