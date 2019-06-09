<template>
    <div class="input">
        <input id="search" name="search" :value="value" @input="handleChange"/>
    </div>
</template>

<script>
    export default {
        name: 'Search',

        props: {
            value: {
                type: String,
                require: true,
            }
        },

        methods: {
            handleChange(e) {
                this.$emit('input', e.target.value);
            },
        },

    }

</script>

<style lang="scss" scoped>
    p{
        color: #42b983;
    }

    #search {
        border: 0;
        background: none;
        height: 30px;
        width: 50%;
        border-bottom: 1px solid black;
        transition: box-shadow .3s ease-out;

        @media (min-width: 768px) {
            width: 30%;
        }
    }

    #search:focus {
        outline: none;
        box-shadow: 0 5px 5px -5px black;
    }

    .input {
        margin-bottom: 20px;
    }

</style>