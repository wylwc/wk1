<template>
    <div class="logined" slot="select2">
          <el-form class="form" ref = "form">
            <el-form-item label="登录账号">
                <el-input  class="input" placeholder="输入您的账号" id="input"></el-input>
                <el-button type="primary" class="phone" @click="twoCode">手机获取验证</el-button>
                <el-button type="primary" class="email" @click="email">邮箱获取验证</el-button>
            </el-form-item>    
            <el-form-item label="动态密码" class="form_two">
                <el-input  placeholder="输入验证码"  id="password"></el-input>
            </el-form-item>
            <el-form-item >
                <el-button type="primary" @click="toLogin" class="logine">登录</el-button>
            </el-form-item>
        </el-form>  
    </div>
</template>
<script>
export default {
  data() {
    return {
      data: {
        timer: null
      }
    };
  },
  methods: {
    twoCode() {
      let input_phone = document.getElementById("input");
      let phone = document.getElementsByClassName("phone")[0];
      let time = 10;
      if (/^1[35678]\d{9}$/.test(input_phone.value)) {
        this.timer = setInterval(() => {
          phone.innerHTML = "重新发送 " + " " + time;
          if (time === 0) {
            phone.innerHTML = "手机获取验证";
            phone.disabled = false;
            clearInterval(this.timer);
          } else {
            phone.disabled = true;
            time--;
          }
        }, 1000);
      } else {
        console.log(input_phone);
        alert("请输入正确的验证码");
      }
    },
    email() {
      let input_email = document.getElementById("input");
      let email = document.getElementsByClassName("email")[0];
      let val = /^@[0-9]{10}/;
      let time = 10;
      if (val.test(input_email.value)) {
        this.timer = setInterval(() => {
          email.innerHTML = "重新发送 " + " " + time;
          if (time === 0) {
            email.innerHTML = "邮箱获取验证";
            email.disabled = false;
            clearInterval(this.timer);
          } else {
            email.disabled = true;
            time--;
          }
        }, 1000);
      } else {
        alert("请输入正确的验证码");
      }
    },
    toLogin() {
      let password = document.getElementById("password");
      if (/[0-9]{5}/.test(password.value)) {
        // this.$router.push("/message");
        this.$router.push({
          name: "message"
        });
      } else {
        alert("您还没有登录");
      }
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
