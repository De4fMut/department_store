import json from "@/assets/products.json";

export default {
    state: {
        items: [],
        page : 1,
        limit: 6,
        totalPages: null
    },
    getters: {
        allItems(state) {
            return state.items;
        },
        allPages(state){
            return state.totalPages
        },
        getPage(state){
            return state.page
        }
    },
    mutations: {
        reqItems(state, json) {
            state.items = json;
        },
        setPage(state, pageNumber){
            state.page = pageNumber
        },
        setPageListItem(state, json){
            return state.items = json.slice(state.limit*(state.page-1), state.limit*state.page)
        },
        setAllPages(state){
            state.totalPages = Math.ceil(state.items.length / state.limit)
        }
    },
    actions: {
        fetchItems({ commit }){
            commit("reqItems", json)
        },
        fetchAllPages( { commit }){
            commit("setAllPages")
        },
        fetchPage ({commit}, pageNumber){
            commit("setPage", pageNumber)
        },
        fetchPageListItem({commit}){
            commit("setPageListItem", json)
        }
    },
};