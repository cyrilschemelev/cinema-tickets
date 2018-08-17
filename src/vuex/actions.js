export default {
    initPlaces({commit, state, dispatch}) {
        for (let i = 0; i < state.rows; i++) {
            commit('createRow')
            for (let p = 0; p < state.seats; p++) {
                let seat = {}
                seat.row = i + 1
                seat.place = p + 1
                seat.status = 'free'
                seat.price = 100
                commit('createSeat', seat)
            }
        }
        dispatch('markPlacesBusy', 10);
    },
    markPlacesBusy({dispatch}, amount) {
        for (let i = 0; i < amount; i++) {
            dispatch('markOnePlace');
        }
    },
    markOnePlace({commit, state, dispatch}) {
        let place = state.places[Math.floor((Math.random() * state.rows))][Math.floor((Math.random() * state.seats))];
        if (place.status == 'free') {
            commit('markAsUnavailable', place)
        } else {
            dispatch('markOnePlace');
        }
    }
}