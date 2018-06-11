<template>
    <el-container>
        <el-aside width="200px" id="el_aside">
          <p class="p">应用菜单树</p>
            <el-tree
                id="el_aside_el_tree"
                :data="menu"
                :props="defaultProps"
                accordion
                :node-click="fun()"
                highlight-current:true
                @node-click="handleNodeClick"
            >
            </el-tree>
        </el-aside>
        <el-main>
          <router-view>
             
          </router-view>
        </el-main>
    </el-container>
</template>
<script>
export default {
  data() {
    return {
      menu:[],
      defaultProps: {
        children: "children",
        label: "name"
      }
    };
  },
  methods: {
    handleNodeClick(data) {
      // console.log(data);
    },
    fun(){
      console.log(111)
    }
  },
  mounted(){
    this.$http.get('/server/data/data.json')
    .then(res=>{
        // console.log(res.data)
        this.menu = res.data
    })
  }
};
</script>
<style>
.p{
  height:40px;
  line-height: 40px;
  text-align: center;
  background: #fff;
  color: #606266;
}
#el_aside {
  background: #eee;
  border-right: 1px #ccc solid;
}
#el_aside_el_tree {
  /* background: red; */
}
</style>
