<template>
    <div class="outerWrapper">
        <div class="innerWrapper">
            <div class="right">
                            <img v-bind:src=image class="image"/>
            </div>
            <div class="left">
                            <h3 class="name">{{name}}</h3>
                            <p class="id">{{id}}</p>
                            <p class="brand">{{brand}}</p>
                <div class="description" >
                    <span v-html="description"></span>
                </div>
                <AddToCart @addToCart="add($event)" />
            </div>
        </div>
        <div class="close" @click="$emit('closeModal')"/>
    </div>
</template>

<script>
    import AddToCart from "./AddToCart";


    export default {
        name: "Modal",
        components: {AddToCart},
        props:{
            item: Object,
        },
        data() {
            return {
                id:null,
                image: null,
                name: null,
                brand: null,
                description: null,
            };
        },

        mounted() {
            this.id = this.item.id;
            this.image = this.item.images.primary.large;
            this.name = this.item.general.name;
            this.brand = this.item.brand.name;
            this.description = this.item.general.description;
        },

        methods: {
            add(q) {
                if(q>0) {
                    this.$emit('addToCart',q);
                }
            },
        }
    }
</script>

<style lang="scss" scoped>

    .name{
        margin: 3px;
    }

    .id {
        margin: 2px;
    }
    .brand {
        margin: 2px;
    }

    .outerWrapper{
        display: flex;
        background: rgba(228, 182, 0, 0.95);
        width: 85%;
        position: fixed;
        left: 8%;
        top: 20px;

        @media (min-width: 768px) {
            top: 100px;
        }

    }

    .innerWrapper{
        display: flex;
        height: 100%;
        padding: 20px;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        @media (min-width: 768px) {
            flex-direction: row;
        }
    }

    .left {
        display: flex;
        height: 100%;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .image {
        max-width: 200px;
        height: auto;
        margin: 2px;

        @media (min-width: 768px) {
            max-width: 300px;
            margin: 10px;
        }

    }

    .description {
        color: #2c3e50;
        list-style: none;
        font-size: smaller;

        @media (min-width: 768px) {
            font-size: medium
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