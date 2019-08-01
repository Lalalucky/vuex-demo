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
        ['changeThisPrice'](state, { _name, newPrice }) {
            state.products.map(function (item,index,arr) {
                if( item.name === _name ){
                    item.price = newPrice
                }
            })
        }
    },
    actions: {

    }
})
