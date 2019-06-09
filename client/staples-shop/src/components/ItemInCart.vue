<template>
    <div class="item">
        <img v-bind:src=image class="image">
        <h4 class="name">{{name}}</h4>
        <h4 class="quantity">Quantity: {{quantity}}</h4>
    </div>
</template>

<script>
    export default {
        name: "ItemInCart",
        props: {
            item: Object,
        },
        data() {
            return {
                id:this.item.id,
                image: this.item.images.primary.large,
                name: this.item.general.name,
                quantity: this.item.quantity,
            };


        },
    }
</script>

<style lang="scss" scoped>

    .quantity {
        justify-self: start;
    }

    .item {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background-color: #4d8be2;
        padding: 2px;
    }

    .image {
        width: 60px;
        height: auto;
        margin-right: 10px;

    @media (min-width: 768px) {
        width: 150px;
        height: auto;
        margin-right: 10px;
    }

    }

    .name {
        margin-right: 25px;
        font-size: smaller;

        @media (min-width: 768px) {
            font-size: medium;
        }
    }

</style>