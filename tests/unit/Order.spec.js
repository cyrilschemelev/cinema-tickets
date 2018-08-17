import {shallowMount, createLocalVue} from '@vue/test-utils'
import Vuex from 'vuex'
import Order from '@/components/Order.vue'
import getters from './../../src/vuex/getters'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Order.vue', () => {
    let mutations,
        store

    beforeEach(() => {
        mutations = {
            resetOrder: jest.fn(),
            proceedOrder: jest.fn()
        }
        const state = {
            order: {
                seats: [[{}, {}], [{}, {}]]
            }
        }
        store = new Vuex.Store({
            state,
            mutations,
            getters
        })
    })

    it('calls resetOrder on click', () => {
        const wrapper = shallowMount(Order, {
            localVue,
            store
        })
        wrapper.find('.reset').trigger('click')
        expect(mutations.resetOrder).toHaveBeenCalled()
    })

    it('calls proceedOrder on click', () => {
        const wrapper = shallowMount(Order, {
            localVue,
            store
        })
        wrapper.find('.proceed').trigger('click')
        expect(mutations.proceedOrder).toHaveBeenCalled()
    })
})
