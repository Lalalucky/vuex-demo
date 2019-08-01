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
        changeThisPrice(state,obj) {
            state.products.map(function (item, index, arr) {
                console.log(item)
                console.log(obj._name)
                console.log(obj._name)
                if (item.name == obj._name) {
                    item.price = newPrice;
                }
            })
            console.log(state.products)
        }
    },
    actions: {

    }
})
