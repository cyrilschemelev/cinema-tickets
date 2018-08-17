export default {
    places: state => {
        return state.places;
    },
    orderSeats: state => {
        return state.order.seats;
    },
    orderCost: state => {
        return state.order.cost;
    }
}