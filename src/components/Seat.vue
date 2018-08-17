<template>
    <div :class="'seat' + seatStyle" @click="toggleSeat(props)"></div>
</template>
<script>
    import {mapMutations} from 'vuex';

    export default {
        props: ['props'],
        methods: {
            ...mapMutations(['toggleSeat'])
        },
        computed: {
            seatStyle() {
                if (this.props.status == 'unavailable') {
                    return ' unavailable'
                } else if (this.props.status == 'order') {
                    return ' order'
                } else {
                    return ''
                }
            }
        }
    }
</script>
<style scoped lang="scss">
    .seat {
        width: 20px;
        height: 20px;
        background: green;
        margin: 5px 2px;
        cursor: pointer;
        &.unavailable {
            background: red;
            cursor: default;
        }
        &.order {
            background: yellow;
        }
    }
</style>