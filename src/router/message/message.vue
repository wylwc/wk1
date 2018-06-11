<template>
    <div class="message">
        <el-container style="height: 100%; border: 1px solid #eee">
            <el-aside width="170px" style="height:100%;background-color:#fff">
                <el-header>
                    您好
                </el-header>
                <!-- 默认打开下拉菜单 -->
                <el-menu :default-openeds="['1']">
                    <el-submenu :index="index + 1 + ' '" v-for="(item,index) in $store.state.menu" :key="index">
                        <template slot="title"><i class="el-icon-message"></i>{{item.name}}</template>
                        <el-menu-item :index="index + 1  + '-' + ind + 1 " v-for="(ite,ind) in item.children" :key="ind">
                            <router-link tag="span" :to="{name:ite.type}">{{ite.name}}</router-link>
                        </el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-aside>
            <el-container>
                <el-header>
                    欢迎来到管理页面
                </el-header>
                <router-view></router-view>
            </el-container>
        </el-container>
    </div>
</template>
<script>
// import axios from "axios"
// import http from "../../untils/http"
import Employee_admin from "../../children/employee_admin.vue";
import User_admin from "../../children/user_admin";
import { mapState, mapActions } from "vuex";
// console.log(mapActions(["fetchMenu"]));
// console.log(mapState(["menu"]));
export default {
  data() {
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄"
    };
    return {
      tableData: Array(20).fill(item)
      // menu:[]
    };
  },
  computed: {
    ...mapState(["menu", ""])
  },
  methods: {
    ...mapActions(["fetchMenu"])
  },
  mounted() {
    // dispatch流程
    this.fetchMenu();
    // this.$store.dispatch('fetchMenu')
    //   直接请求数据
    // axios.get('/server/data/data.json').then(res=>{
    //     console.log(res.data)
    // })
    // this.$http.get('/server/data/data.json')
    // .then(res=>{
    //     console.log(res.data)
    //   this.menu = res.data
    // })
  }
};
</script>
<style scoped>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}
.el-container {
  width: 100%;
  height: 100%;
}
.el-row {
  margin-bottom: 20px;
}
.el-col {
  text-align: center;
  height: 40px;
  line-height: 40px;
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.el-input-search {
  width: 300px;
}
</style>
