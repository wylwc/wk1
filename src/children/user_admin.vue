<template>
  <el-container class="container">
    <el-main class="el_main">
        <el-row :gutter="20">
            <el-col :span="4"><el-button><i id="icon" class="el-icon-circle-plus"></i>增加</el-button></el-col>
            <el-col :span="4"><el-button><i id="icon" class="el-icon-info"></i>编辑</el-button></el-col>
            <el-col :span="4"><el-button><i id="icon" class="el-icon-remove"></i>删除</el-button></el-col>
            <el-col :span="4"><el-button><i id="icon" class="el-icon-setting"></i>权限配置</el-button></el-col>
            <el-col :span="4"><el-button><i id="icon" class="el-icon-message"></i>权限计算</el-button></el-col>
            <el-col :span="4"><el-button><i id="icon" class="el-icon-edit"></i>重置密码</el-button></el-col>
        </el-row>
        <el-table
            ref="multipleTable"
            :data="tableData3"
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange">
            <el-table-column
                type="selection"
                width="55">
            </el-table-column>
            <el-table-column
                label="登录用户名"
                width="120">
            <template slot-scope="scope">{{ scope.row.date }}</template>
            </el-table-column>
            <el-table-column
                prop="name"
                label="用户名称"
                width="120">
            </el-table-column>
            <el-table-column
                prop="address"
                label="认证模式"
                show-overflow-tooltip>
            </el-table-column>
            <el-table-column
                prop="address"
                label="用户状态"
                show-overflow-tooltip>
            </el-table-column>
            <el-table-column
                prop="address"
                label="邮箱"
                show-overflow-tooltip>
            </el-table-column>
            <el-table-column
                prop="address"
                label="创建人"
                show-overflow-tooltip>
            </el-table-column>
        </el-table>
        <div style="margin-top: 20px">
            <el-button @click="toggleSelection([tableData3[1], tableData3[2]])">切换第二、第三行的选中状态</el-button>
            <el-button @click="toggleSelection()">取消选择</el-button>
        </div>
    </el-main>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      tableData3: [
        {
          User: "2016-05-03",
          userName: "王小虎",
          password: "本地密码认证",
          email: "邮箱",
          state: "上海市普陀区金沙江路 1518 弄"
        },
        {
          User: "2016-05-02",
          userName: "王小虎",
          password: "本地密码认证",
          email: "邮箱",
          state: "上海市普陀区金沙江路 1518 弄"
        },
        {
          User: "2016-05-04",
          userName: "王小虎",
          password: "本地密码认证",
          email: "邮箱",
          state: "上海市普陀区金沙江路 1518 弄"
        }
      ]
    };
  },
  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    }
  }
};
</script>
<style scoped>
.container {
  margin: 0;
  padding: 10px;
  display: flex;
  flex-direction: column;
}
.el_main,.el_form{
  padding: 10px;
  border:1px #ccc solid;
}
.el_main{
  margin-top: 10px;
}
.form-item {
  width: 200px;
  display: inline-block;
}
.el-input__inner {
  width: 110px;
  background: lightgreen;
}
.el-input-search {
  width: 300px;
}
.input {
  width: 110px;
}
#icon{
    margin-right: 0px;
}
</style>
