<template>
    <div class="ItemAndAddToCart">
        <div class="item" @click="$emit('openModal')">
            <h4 class="name">{{name}}</h4>
            <p class="id">{{id}}</p>
            <img v-bind:src=image class="image">
        </div>
        <AddToCartSmall @addToCart="add($event)"/>
    </div>
</template>

<script>
    import AddToCartSmall from "./AddToCartSmall";
    export default {
        name: 'Item',
        components: {AddToCartSmall},
        props: {
            item: Object,
        },
        data() {
            return {
                id:this.item.id,
                image: this.item.images.primary.large,
                name: this.item.general.name,
            };


        },

        methods: {
            add(q) {
                if(q>0) {
                    this.$emit('addToCart',q);
                }
            }
        }

    }
</script>

<style lang="scss" scoped>

    .ItemAndAddToCart {
        margin-bottom: 40px;
    }

    .image {
        max-width: 150px;
        height: auto;

        @media (min-width: 768px) {
            max-width: 200px;

        }
    }
    .item {
        margin-bottom:0px;
    }
    .name {
        margin: 5px;
    }
    .id {
        margin: 5px;
    }

</style>