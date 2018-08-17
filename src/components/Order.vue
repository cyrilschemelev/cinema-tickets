<template>
    <div v-if="orderSeats.length" class="order">
        <h2>Вы выбрали места:</h2>
        <p v-for="(seat, index) in orderSeats" :key="index">– {{seat.row}} ряд, {{ seat.place}} место</p>
        <h3>Общая стоимость: {{orderCost}} руб.</h3>
        <div class="actions">
            <button class="reset" @click="resetOrder">Отмена</button>
            <button class="proceed" @click="proceedOrder">Купить</button>
        </div>
    </div>
</template>
<script>
    import {mapGetters, mapMutations} from 'vuex'

    export default {
        name: 'Order',
        methods: {
            ...mapMutations(['resetOrder', 'proceedOrder'])
        },
        computed: {
            ...mapGetters(['orderSeats', 'orderCost'])
        }
    }
</script>
<style scoped lang="scss">
    .order {
        flex-basis: 30%;
        text-align: left;
        .actions {
            display: flex;
            button {
                padding: 5px 20px;
                margin: 0 20px;
                border-radius: 5px;
            }
            .reset {
                background: red;
            }
            .proceed {
                background: green;
            }
        }
    }
</style>