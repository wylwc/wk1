<template>
    <div class="logined" slot="select2">
          <el-form class="form" :model="login_model" ref="form">
            <el-form-item label="登录账号" :rules="rules" prop = "account">
                <el-input  class="input" placeholder="输入您的账号" id="input" v-model="login_model.account"></el-input>
                <el-button type="primary" class="phone" @click="checkValidate('phone')">手机获取验证</el-button>
                <el-button type="primary" class="email" @click="checkValidate('email')">邮箱获取验证</el-button>
            </el-form-item>    
            <el-form-item label="动态密码" class="form_two">
                <el-input  placeholder="输入验证码"  id="password"></el-input>
            </el-form-item>
            <el-form-item >
                <el-button type="primary" class="logine">登录</el-button>
            </el-form-item>
        </el-form>  
    </div>
</template>
<script>
export default {
  data() {
    return {
        login_model:{
            account:""
        },
        rules:[
            {
                required:true,
                message:"请输入账户信息"
            },{
                type:"email",
                message:"请输入正确的邮箱"
            }
        ],
        data: {
            timer: null
        }
    };
  },
  methods: {
    //   接受一个callback  
    // 参数  是否验证成功  验证成功的字段
    checkValidate(type) {
        if(type == "phone"){
            this.rules.push({
                type,
                message:"请输入正确的手机号"
            })
        }else if(type == "email"){
            this.rules.push({
                type,
                message:"请输入正确的邮箱"
            })
        }
      
      this.$refs.form.validate((isValid, rules) =>{
        console.log(isValid);
        console.log(rules);
      });
    }
  }
};
</script>
<style>
.logined {
  margin: 0 auto;
  width: 90%;
  height: 80%;
  margin-top: 40px;
}
.form {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
.el-form-item__content {
  line-height: 30px;
}
.el-form-item__label {
  height: 25px;
  line-height: 25px;
  font-size: 12px;
  color: deepskyblue;
}
.form_two {
  margin: 0;
  padding: 0;
  margin-top: -20px;
}
.input {
  margin: 0;
  padding: 0;
}
.phone,
.email {
  font-size: 12px;
  padding: 5px;
  border-radius: 2px;
  border: 1px #ccc solid;
}
.logine {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 30px;
  margin-top: 5px;
  line-height: 30px;
}
</style>
