export default {
    toggleSeat(state, selectedSeat) {
        state.places.forEach(row => {
            row.forEach(item => {
                if (item.row == selectedSeat.row &&
                    item.place == selectedSeat.place) {
                    if (item.status === 'free') {
                        state.places[item.row - 1][item.place - 1].status = 'order'
                        state.order.cost += item.price
                        state.order.seats.push(item)
                    } else if (item.status === 'order') {
                        state.places[item.row - 1][item.place - 1].status = 'free'
                        state.order.cost -= item.price
                        state.order.seats = state.order.seats.filter(seat => (seat.row != item.row || seat.place != item.place))
                    }
                }
            })
        })
    },
    createRow(state) {
        state.places.push([]);
    },
    createSeat(state, seat) {
        state.places[seat.row - 1].push(seat);
    },
    markAsUnavailable(state, seat) {
        seat.status = 'unavailable';
    },
    resetOrder(state) {
        state.order.seats.forEach(seat => {
            state.places[seat.row - 1][seat.place - 1].status = 'free'
        })
        state.order.seats = []
        state.order.cost = 0
    },
    proceedOrder(state) {
        state.order.seats.forEach(seat => {
            state.places[seat.row - 1][seat.place - 1].status = 'unavailable'
        })
        state.order.seats = []
        state.order.cost = 0
        alert('Спасибо за заказ!')
    }
}