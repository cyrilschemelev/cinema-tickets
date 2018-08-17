import mutations from './../../../src/vuex/mutations'
import getters from './../../../src/vuex/getters'

describe('Vuex mutations', () => {
    it('toggles seat status', () => {
        const seat = {row: 1, place: 1, status: 'free', price: 100}
        const state = {
            order: {
                seats: [],
                cost: 0
            },
            places: [[seat]]
        }
        mutations.toggleSeat(state, seat)
        seat.status = 'busy'
        expect(getters.places(state)[0].includes(seat)).toBe(true)
    })

    it('creates row', () => {
        const state = {
            places: [[], [], []]
        }
        const length = getters.places(state).length
        mutations.createRow(state)
        expect(getters.places(state).length).toEqual(length + 1)
    })

    it('creates seat', () => {
        const seat = {row: 1, place: 3, status: 'free', price: 100}
        const state = {
            places: [[], []]
        }
        const length = getters.places(state)[0].length
        mutations.createSeat(state, seat)
        expect(getters.places(state)[0].length).toEqual(length + 1)
    })

    it('marks seat as unavailable', () => {
        const seat = {row: 1, place: 1, status: 'free', price: 100}
        const state = {
            places: [[seat, []], []]
        }
        expect(getters.places(state)[seat.row - 1][seat.row - 1].status).toEqual('free')
        mutations.markAsUnavailable(state, seat)
        expect(getters.places(state)[seat.row - 1][seat.row - 1].status).toEqual('unavailable')
    })

    it('resets order', () => {
        const seat = {row: 1, place: 1, status: 'busy', price: 100}
        const seat2 = {row: 1, place: 2, status: 'busy', price: 100}
        const state = {
            order: {
                seats: [seat, seat2],
                cost: 200
            },
            places: [[seat, seat2]]
        }
        expect(getters.orderSeats(state).length).toEqual(2)
        expect(getters.orderCost(state)).toEqual(200)
        mutations.resetOrder(state)
        expect(getters.orderSeats(state).length).toEqual(0)
        expect(getters.orderCost(state)).toEqual(0)
        expect(getters.places(state)[0][0].status).toEqual('free')
        expect(getters.places(state)[0][1].status).toEqual('free')
    })

    it('proceeds order', () => {
        const seat = {row: 1, place: 1, status: 'busy', price: 100}
        const seat2 = {row: 1, place: 2, status: 'busy', price: 100}
        const state = {
            order: {
                seats: [seat, seat2],
                cost: 200
            },
            places: [[seat, seat2]]
        }
        /* eslint-disable no-console */
        window.alert = (msg) => { console.log(msg) }
        /* eslint-enable no-console */
        expect(getters.orderSeats(state).length).toEqual(2)
        expect(getters.orderCost(state)).toEqual(200)
        mutations.proceedOrder(state)
        expect(getters.orderSeats(state).length).toEqual(0)
        expect(getters.orderCost(state)).toEqual(0)
        expect(getters.places(state)[0][0].status).toEqual('unavailable')
        expect(getters.places(state)[0][1].status).toEqual('unavailable')
    })
})