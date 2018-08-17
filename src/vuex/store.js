import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production';

import mutations from './mutations'
import actions from './actions'
import getters from './getters'


export default new Vuex.Store({
    strict: debug,
    state: {
        order: {
            seats: [],
            cost: 0
        },

        places: [],
        rows: 10,
        seats: 10
    },
    mutations,
    actions,
    getters
});