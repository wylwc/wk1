import Vue from "vue"
import Vuex from "vuex"
import { instance as http } from "../untils/http.js"
import { setTimeout } from "timers";
Vue.use(Vuex)
// 一个对象
let store = new Vuex.Store({
    state: {
        menu: [],
        group: [],
        list: []
    },
    mutations: {
        // 用commit函数来触发mutations
        updateMenu(state, data) {
            state.menu = data.data
        },
        updateGroup(state, data) {
            state.group = data
        },
        updateList(state, data) {
            state.list = data.list
        },
        deleteItem(state, payload
            // ,
            // cb
        ) {
            let tmp = [...state.list];
            let ind;
            tmp.forEach((item, index) => {
                if (item.id - 1 === index) {
                    ind = index;
                    console.log(item)
                    // tmp.splice()
                } else {
                    console.log(1)
                }
            })
            tmp.splice(ind, 1)
            state.list = tmp;
            // cb()()
            console.log(state, payload)
        }
    },
    actions: {
        // 用dispatch触发一个action
        fetchMenu({ commit }) {
            http.get('/server/data/data.json')
                .then(res => {
                    console.log(res)
                    // setTimeout(()=>{
                    commit("updateMenu", res)
                    // },2000)
                })
        },
        fetchGroup(store, cb) {
            if (store.state.length > 0) {
                cb()
            }
            http.get("/server/data/group.json")
                .then(res => {
                    // console.log(res)
                    setTimeout(() => {
                        store.commit("updateGroup", res.orgs)
                        // cb()
                    }, 1500)
                })
        },
        fetchList(store, payload) {
            http.get("/server/mock/mock.json").then(res => {
                setTimeout(() => {
                    store.commit("updateList", res);
                    payload()
                    // console.log(res.list)
                }, 1500)

            })
        },

    },
    getters: {
        // 内部返回一个函数，传参过滤
        filterGroup(state) {
            // console.log(state)
            return (filter) => {
                if (filter) {
                    let res = state.group.filter((item) => {
                        // console.log(item)
                        return item.ORGNAME.indexOf(filter) > -1 || item.FORGNAME.indexOf(filter) > -1
                    })
                    // console.log(res)
                    return res;
                }
                return state.group
            };
        }
    },
    modules: {}
})
export default store;
