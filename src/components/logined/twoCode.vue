<template>
    <div class="twoCode" slot="select1">
        <p>手机扫码，安全防盗</p>
        <img src="../../static/img/love.png" alt="">
    </div>
</template>
<script>
  export default {
      
  }
</script>
<style scoped>
    .twoCode{
        width: 100%;
        height: 85%;
        margin-top: 30px;
    }
    .twoCode>img{
        width: 50%;
        height: 50%;
        margin: 0 auto;
        transform: translate(50%,20%)
    }
    .twoCode>p{
        width: 100%;
        height: 40px;
        line-height: 40px;
        text-align: center;
        font-size: 10px;
    }
</style>
