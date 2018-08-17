import getters from './../../../src/vuex/getters'

describe('Vuex getters', () => {
    it('places', () => {
        const seat = {row: 1, place: 1, status: 'free', price: 100}
        const seat2 = {row: 1, place: 2, status: 'free', price: 100}
        const state = {
            order: {
                seats: [],
                cost: 0
            },
            places: [[seat, seat2]]
        }
        expect(getters.places(state)[0].length).toEqual(2)
        expect(getters.places(state)[0][0]).toEqual(seat)
        expect(getters.places(state)[0][1]).toEqual(seat2)
    })

    it('orderSeats', () => {
        const seat = {row: 1, place: 1, status: 'free', price: 100}
        const seat2 = {row: 1, place: 2, status: 'free', price: 100}
        const state = {
            order: {
                seats: [seat, seat2]
            }
        }
        expect(getters.orderSeats(state)).toEqual([seat, seat2])
    })

    it('orderCost', () => {
        const state = {
            order: {
                cost: 200
            }
        }
        expect(getters.orderCost(state)).toEqual(200)
    })
})