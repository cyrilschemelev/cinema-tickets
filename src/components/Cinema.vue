<template>
    <div class="cinema">
        <div v-for="(row, index) in this.places" :key="index">
            <div class="row">
                <div class="row-number">{{index + 1}}</div>
                <Seat :props="seat" v-for="(seat) in row" :key="seat.row+'-'+seat.place"/>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'
    import Seat from '@/components/Seat.vue'

    export default {
        name: 'Cinema',
        components: {Seat},

        created() {
            if (this.places.length === 0) {
                this.initPlaces()
            }
        },
        methods: {
            ...mapActions(['initPlaces'])
        },
        computed: {
            ...mapGetters(['places'])
        }
    }
</script>

<style scoped lang="scss">
    .cinema {
        flex-basis: 50%;
        .row {
            display: flex;
            .row-number {
                width: 20px;
                height: 20px;
                display: flex;
                align-self: center;
            }
        }
    }
</style>
