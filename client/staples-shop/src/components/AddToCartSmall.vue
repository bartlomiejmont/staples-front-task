<template>
    <div class="addCart">
        <div class="firstRow">
            <div class="add" @click="removeFromCounter">
                <v-btn fab dark small color="indigo">
                    <v-icon dark>remove</v-icon>
                </v-btn>
            </div>
            <input type="number" id="input" v-model.number="itemCount" @input="changeItemCount" @click="reset"/>
            <div class="remove" @click="addToCounter">
                <v-btn fab dark small color="indigo">
                    <v-icon dark>add</v-icon>
                </v-btn>
            </div>
        </div>
        <div class="secoundRow">
            <div class="cart" @click="$emit('addToCart',itemCount)">
                <v-btn color="indigo" small dark >Add to cart
                    <v-icon dark right>check_circle</v-icon>
                </v-btn>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AddToCartSmall",

        data() {
            return {
                itemCount:1,
            }
        },

        methods: {
            changeItemCount() {
                if(this.itemCount<0||this.itemCount>99){
                    this.itemCount=0;
                }
                console.log(this.itemCount);
            },

            reset() {
                this.itemCount=null;
            },

            addToCounter(){
                if(this.itemCount<99) {
                    this.itemCount += 1;
                }
            },

            removeFromCounter(){
                if(this.itemCount<=0){
                    this.itemCount=0;
                }
                else {
                    this.itemCount -= 1;
                }
            },
        }
    }
</script>

<style lang="scss" scoped>




    .addCart{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        transform: scale(0.7);
    }

    .firstRow {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        margin: 0;
        padding: 0;
    }

    .secoundRow{

        margin: 0;
        padding: 0;

    }

    #input {
        border: 0;
        padding: 0;
        margin: 0;
        background: none;
        height: 30px;
        border-bottom: 1px solid black;
        width: 10%;
        height: 50%;


        @media (min-width: 768px) {
            width: 13%;
            height: 100%;
        }
    }





</style>