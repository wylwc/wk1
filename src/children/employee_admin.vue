<template>
  <el-container class="container">
    <el-form class="el_form">
      <el-form-item label="用户姓名" class="form-item">
            <el-input class="input"></el-input>
      </el-form-item>
      <el-form-item label="用户手机号" class="form-item">
            <el-input class="input"></el-input>
      </el-form-item>
      <el-form-item label="用户邮箱" class="form-item">
            <el-input class="input"></el-input>
      </el-form-item>
      <el-form-item label="员工编号" class="form-item">
            <el-input class="input"></el-input>
      </el-form-item>
      <el-form-item label="身份证号" class="form-item">
            <el-input class="input"></el-input>
      </el-form-item>
      <el-form-item label="归属组织" class="form-item" >
        <el-popover
            placement="right"
            width="400"
            trigger="click"
            @after-enter="toFetchGroup"
            >
            组织名称:<el-input class="el-input-search" placeholder="" v-model="a"></el-input>
            <el-button @click="filterItem = a">查询</el-button>
            <el-table 
              :data="filterGroup()(filterItem)"
              v-loading="loading2"
              element-loading-text="拼命加载中"
              element-loading-spinner="el-icon-loading"
              element-loading-background="rgba(0, 0, 0, 0.8)"
              style="width: 100%"
              @row-click="rowClick"
            >
                <el-table-column
                  type="index"
                  width="50"   
                  label="序号">
                </el-table-column>
                <el-table-column width="170" property="ORGNAME" label="组织名称"></el-table-column>
                <el-table-column width="170" property="FORGNAME" label="上级组织"></el-table-column>
            </el-table>
            <el-input class="input" slot="reference" v-model="groupdata"></el-input>
        </el-popover>
       </el-form-item>
    </el-form>
    <el-main class="el_main">
        <el-row :gutter="20" class="el_row">
            <el-col :span="4">
              <el-button type="text" id="dialog_btn" @click="addClick()">添加</el-button>
              <el-dialog title="员工信息" :visible.sync="dialogFormVisible" id="el-dialog">
                <el-form :model="new_form" id="el-form" :rules="new_form_rules" ref="newform">
                  <el-form-item label="员工姓名" prop="name">
                    <el-input v-model="new_form.name" class="el_input"></el-input>
                  </el-form-item>
                  <el-form-item label="证件类型">
                    <!-- <el-input v-model="new_form.id" class="el_input"></el-input> -->
                    <el-select class="el_input" v-model="new_form.id" placeholder="请选择">
                      <el-option label="二代身份证" value="shanghai"></el-option>
                      <el-option label="员工证件" value="beijing"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="人员状态">
                    <!-- <el-input v-model="new_form.jurisdiction" class="el_input"></el-input> -->
                    <el-select class="el_input" v-model="new_form.jurisdiction" placeholder="请选择">
                      <el-option label="区域一" value="shanghai"></el-option>
                      <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="用户邮箱" prop="email">
                    <el-input v-model="new_form.email" class="el_input"></el-input>
                  </el-form-item>
                  <el-form-item label="员工编号">
                    <el-input v-model="new_form.number" class="el_input"></el-input>
                  </el-form-item>
                  <el-form-item label="联系方式" prop="mobile">
                    <el-input v-model="new_form.mobile" class="el_input"></el-input>
                  </el-form-item>
                  <el-form-item label="归属组织">
                    <el-input v-model="new_form.group" class="el_input"></el-input>
                  </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                  <el-button @click="dialogFormVisible = false">取 消</el-button>
                  <el-button type="primary"  @click="trueClick()">确 定</el-button>
                </div>
              </el-dialog>
            </el-col>
            <!-- <el-col :span="4"><el-button class="grid-content bg-purple">离职</el-button></el-col> -->
        </el-row>
        <el-table
          v-loading="loadingList"
          element-loading-text="拼命加载中"
          element-loading-spinner="el-icon-loading"
          element-loading-background="rgba(0, 0, 0, 0.8)"
          :data="listData"
          border
          style="width: 100%"
          @selection-change="handleSelectionChange"
          >
          <el-table-column
              type="selection"
              width="40">
          </el-table-column>
          <el-table-column
              prop="id"
              label="序号"
              width="70">
          </el-table-column>
          <el-table-column
              prop="name"
              label="姓名"
              width="70">
          </el-table-column>
          <el-table-column
              width="80"
              prop="number"
              label="员工编号"
              show-overflow-tooltip>
          </el-table-column>
          <el-table-column
              width="70"
              prop="mobile"
              label="手机号"
              show-overflow-tooltip>
          </el-table-column>
          <el-table-column
              width="50"
              prop="email"
              label="邮箱"
              show-overflow-tooltip>
          </el-table-column>
          <el-table-column
              width="80"
              prop="group"
              label="归属组织"
              show-overflow-tooltip>
          </el-table-column>
          <el-table-column
              width="50"
              prop="jurisdiction"
              label="权限"
              show-overflow-tooltip>
          </el-table-column>
          <el-table-column
              width="80"
              prop="top"
              label="上级组织"
              show-overflow-tooltip>
          </el-table-column> 
          <el-table-column
              width="80"
              prop="starttime"
              label="创建时间"
              show-overflow-tooltip>
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            width="160">
            <template slot-scope="scope">
              <el-button type="text" @click="editorClick(scope)">编辑</el-button>
              <el-button type="text" @click="handleClick(scope)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
    </el-main>
    <el-pagination
      layout="prev, pager, next"
      background
      :total="list.length" 
      :page-size="pageSize"
      @current-change="pageChange"
      >
    </el-pagination>
  </el-container>
</template>
<script>
// ref 给组件元素，是组件对应的实例
// ref 给真实HTML元素，是dom节点
import { mapState, mapActions, mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      empty: {},
      new_form: {
        name: "a",
        id: "身份证",
        number: "",
        mobile: "",
        group: "",
        jurisdiction: "",
        email: "aaaa"
      },
      new_form_rules: {
        name: [
          {
            required: true,
            message: "姓名",
            trigger: "blur"
          },
          {
            type: "string",
            message: "必须是字符",
            trigger: "change"
          }
        ],
        email: [
          {
            required: true,
            message: "邮箱",
            trigger: "blur"
          },
          {
            type: "email",
            message: "格式有误",
            trigger: "change"
          }
        ],
        mobile: [
          {
            required: true,
            message: "手机号码",
            trigger: "blur"
          },
          {
            type: "string",
            message: "手机号码格式不对",
            trigger: "change"
          }
        ]
      },
      dialogVisible: false,
      loading2: true,
      loadingList: true,
      filterItem: "",
      a: "",
      groupdata: "请输入要查询的内容",
      pageSize: 5,
      page: 1,
      dialogFormVisible: false,
      centerDialogVisible: false //是否展示Diolog
    };
  },
  computed: {
    ...mapState(["group"]),
    listData() {
      return this.list.slice(
        this.pageSize * (this.page - 1),
        this.pageSize * this.page
      );
    },
    ...mapState(["list"])
  },
  updated() {
    this.loading2 = false;
  },
  watch: {},
  methods: {
    // map
    ...mapMutations(["deleteItem"]),
    ...mapGetters(["filterGroup"]),
    ...mapActions(["fetchGroup", "fetchList"]),
    // 添加 为空
    addClick() {
      this.dialogFormVisible = true;
      this.new_form = this.empty;
    },
    // 编辑 当前
    editorClick(scope) {
      console.log(JSON.stringify(scope.row));
      this.new_form = scope.row;
      this.$refs.newform.validate((isValid, tag) => {
        // console.log(isValid)
        this.dialogFormVisible = true;
        // 获取
        // this.$http("/newform",this.new_form).then(res=>{
        //   console.log(res);
        // })
      });
    },
    // 点击确定
    trueClick() {
      this.$refs.newform.validate((isValid, tag) => {
        // console.log(isValid)
        this.dialogFormVisible = false;
        // 获取
        // this.$http("/newform",this.new_form).then(res=>{
        //   console.log(res);
        // })
      });
      console.log(this.$refs.newform);
      // this.dialogFormVisible = false;
    },
    // 删除
    handleClick(scope) {
      console.log(scope.row);
      this.$confirm("确定删除?", "提示", {
        callback: () => {
          // console.log(scope.row.name)
          this.deleteItem(scope.row.id, () => {
            // this.$message("删除成功")
          });
        }
      });
      this.dialogVisible = true;
    },
    // 页数
    pageChange(num) {
      this.page = num;
    },
    // 数据
    rowClick(row, event, column) {
      this.groupdata = row.ORGNAME;
    },
    toFetchGroup(filter) {
      this.loading2 = true;
      // this.filterGroup(filter)
      this.fetchGroup(() => {
        // updated更新this.loading2
        // this.loading2 = false;
      });
    },
    toFetchList() {
      this.loadingList = true;
      // this.$store.dispatch("fetchList") //对应mapActions(["fetchList"])
      this.fetchList(() => {
        // 内部函数，payload执行
        this.loadingList = false;
      });
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    }
  },
  mounted() {
    // filter是函数内部的函数，需要两次调用，将aa传参走人
    // this.filterGroup()(filterItem);
    // this.fetchGroup()
    this.toFetchList();
  }
};
</script>
<style scoped>
.el_row {
  margin: 0;
  padding: 0;
  margin-bottom: 10px;
}
.container {
  margin: 0;
  padding: 10px;
  display: flex;
  flex-direction: column;
}
.el_main,
.el_form {
  padding: 10px;
  border: 1px #ccc solid;
}
.el_main {
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
  width: 240px;
  margin-left: 10px;
}
.input {
  width: 110px;
}
#dialog_btn {
  padding: 10px;
  border: 1px solid;
  border-radius: 2px;
}
.el_input {
  width: 56%;
}
#el-form {
  display: flex;
  flex-wrap: wrap;
}
#el-form > .el-form-item {
  width: 180px;
  margin-left: 20px;
  margin-top: 10px;
}
</style>
