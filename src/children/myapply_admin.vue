<template>
    <el-row :gutter="20">
        <el-col :span="8" v-for="(item,index) in apply_data">
            <div class="grid-content bg-purple">
                <router-link tag="span" :to="{name:item.name}">{{item.name_menu}}</router-link>
            </div>
        </el-col>
        <!-- <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="8"><div class="grid-content bg-purple"></div></el-col> -->
    </el-row>
</template>
<script>
// import 
export default {
    data(){
        return {
            name:"",
            apply_data:[
                {
                    name_menu:"发起更名流程名单",
                    router_bottom:"功能说明：发起更名流程名单",
                    name:"change_name",
                },
                {
                    name_menu:"发起过户流程名单",
                    router_bottom:"功能说明：发起过户流程名单",
                    name:"transfer_name",
                },{
                    name_menu:"工程维护单",
                    router_bottom:"功能说明：工程维护单",
                    name:"maintain_name",
                },{
                    name_menu:"其他类型工单",
                    router_bottom:"功能说明：其他类型工单",
                    name:"othertype_name",
                }
            ]
        }
    },
    methods:{}
}
</script>
<style>
.el-row {
    /* margin-bottom: 20px; */
    /* &:last-child {
      margin-bottom: 0;
    } */
  }
  .el-col {
    width: 440px;
    height: 350px;
    border-radius: 4px;
    /* background: #99a9bf; */
    margin-top: 10px;
    /* margin-left: 10px; */
  }
  /* .bg-purple-dark {
    background: #99a9bf;
  } */
  .bg-purple {
    width: 100%;
    height: 100%;
    line-height: 350px;
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    text-align: center;
    border-radius: 4px;
    margin-left: 10px;
    /* min-height: 36px; */
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
