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
        changeThisPrice(state, obj) {
            console.log(obj)
            state.products.map(function (item, index, arr) {
                console.log(item)
                console.log(obj.name)
                console.log(obj.value)
                if (item.name == obj.name) {
                    item.price = obj.newPrice;
                }
            })
            console.log(state.products)
        }
    },
    actions: {
        changeGoosdPrice(context,obj) {
            context.commit('changeThisPrice', obj);
        }
    }
})
