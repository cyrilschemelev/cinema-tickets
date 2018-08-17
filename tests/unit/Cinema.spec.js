import {shallowMount, createLocalVue} from '@vue/test-utils'
import Vuex from 'vuex'
import Cinema from '@/components/Cinema.vue'
import getters from './../../src/vuex/getters'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Cinema.vue', () => {
    let actions,
        state,
        store

    beforeEach(() => {
        actions = {
            initPlaces: jest.fn()
        }
        state =  {
            places: [],
            order: {
                seats: [],
                cost: 0
            }
        }
        store = new Vuex.Store({
            state,
            actions,
            getters
        })
    })

    it('calls initPlaces on created if no places', () => {
        shallowMount(Cinema, {
            localVue,
            store
        })
        expect(getters.places(state).length).toEqual(0)
        expect(actions.initPlaces).toHaveBeenCalled()
    })

    it('does not call initPlaces on created if places are given', () => {
        store.state.places = [[1], [2]]
        shallowMount(Cinema, {
            localVue,
            store
        })
        expect(actions.initPlaces).not.toHaveBeenCalled()
    })
})