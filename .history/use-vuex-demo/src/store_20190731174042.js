import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        products: [
            { name: 'apple', price: '2' },
            { name: 'banana', price: '3' },
            { name: 'pear', price: '4' },
            { name: 'melon', price: '5' },
        ]
    },
    mutations: {
        ['changeThisPrice'](state, { name, newPrice }) {
            state.products.filter(function (item,index,arr) {
                
            })
        }
    },
    actions: {

    }
})
