<template>
    <div class="outerWrapper">
        <div class="innerWrapper">
            <ItemInCart v-for="item in cart" v-bind:item=item :key="item.id" class="item"/>
        </div>
        <div class="close" @click="$emit('closeCart')"/>
    </div>
    
</template>

<script>
    import ItemInCart from "./ItemInCart";
    export default {
        name: "Cart",
        components: {ItemInCart},

        props: ['cart'],


    }
</script>

<style lang="scss" scoped>

    .item {
        margin-bottom: 15px;
    }

    .outerWrapper{
        display: flex;
        background: rgba(92, 152, 255, 0.95);
        width: 75%;
        position: fixed;
        left: 14%;
        top: 60px;

        @media (min-width: 768px) {
            top: 140px;
            width: 55%;
            left: 22%;
        }

    }

    .innerWrapper{
        display: flex;
        height: 100%;
        padding: 20px;
        justify-content: space-between;
        /*align-items: start;*/
        flex-direction: column;

        @media (min-width: 768px) {
            flex-direction: column;
        }
    }

    .close {
        position: absolute;
        width: 30px;
        height: 30px;
        right: 20px;
        top: 20px;

        &::before,
        &::after {
            position: absolute;
            content: '';
            width: 20px;
            height: 2px;
            background: black;
            display: block;
        }

        &::before {
            transform: rotate(45deg);
        }

        &::after {
            transform: rotate(-45deg);
        }
    }

</style>