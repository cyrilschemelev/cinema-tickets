<template>
    <div class="home">
        <Cinema/>
        <Order/>
    </div>
</template>
<script>
    import Cinema from '@/components/Cinema.vue'
    import Order from '@/components/Order.vue'

    export default {
        name: 'home',
        components: {
            Cinema,
            Order
        }
    }
</script>
<style scoped lang="scss">
    .home {
        display: flex;
    }
</style>
