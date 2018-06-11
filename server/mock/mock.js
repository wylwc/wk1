let Mock = require("mockjs");
let Random = Mock.Random;
let fs = require("fs");
let res = Mock.mock({
    "list|100": [
        {
            name: "@cname",
            id: "@increment",
            "number|1-1000": 1,
            mobile: /^1[3578]\d{9}$/,
            email: () => Random.email(),
            "group|1": [
                "工程维护部本部",
                "黄永璋组",
                "企业营销",
                "专网事业部",
                "资产管理部",
                "电信通行政部",
                "人事行政部",
                "财务部",
                "电信通帐务部",
                "法务部",
            ],
            "jurisdiction|1000-10000": 1,
            "top|1": [
                "电信通后台2部",
                "教育业务部",
                "北京电信通电信工程有限公司",
                "北京电信通电信工程有限公司",
                "电信通后台1部",
                "北京电信通电信工程有限公司",
                "电信通后台1部",
                "电信通后台1部",
                "北京电信通电信工程有限公司",
                "电信通后台1部"
            ],
            starttime: "@date"
        }
    ]
})
// 将生成的数据写进mock.json里面
fs.writeFile("mock.json", JSON.stringify(res), function () {
    console.log("success")
})
