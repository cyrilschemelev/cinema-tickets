import {shallowMount, createLocalVue} from '@vue/test-utils'
import Vuex from 'vuex'
import Seat from '@/components/Seat.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Seat.vue', () => {
    let mutations,
        store

    beforeEach(() => {
        mutations = {
            toggleSeat: jest.fn()
        }
        store = new Vuex.Store({
            state: {},
            mutations
        })
    })

    it('calls toggleState at click', () => {
        const initProps = {row: 5, place: 5, status: 'free', price: 100}
        const wrapper = shallowMount(Seat, {
            localVue,
            store,
            propsData: {
                props: initProps
            }
        })
        const SeatComponent = wrapper.find(Seat)
        expect(SeatComponent.props().props).toEqual(initProps)
        wrapper.find('.seat').trigger('click')
        expect(mutations.toggleSeat).toHaveBeenCalled()
    })

})
