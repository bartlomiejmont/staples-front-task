<template>
  <div id="app">
    <Header @cartOpen="handleCartOpen"/>
    <Search v-model="message" @input="handleInput"/>
      <div class="results">
       <Item v-for="item in results" v-bind:item=item :key="item.id" @openModal="handleModalOpen(item)"  @addToCart="addItemToCart(item, $event)" />
      </div>
    <Modal v-if="modalOpen" :item="modalItem" @closeModal="modalOpen = false" @addToCart="addItemToCart(modalItem ,$event)" />
    <Cart v-if="cartOpen" @closeCart="cartOpen = false" :cart="this.cart" />
    <vue-ads-pagination v-if="search"
            :max-visible-pages="3"
            :total-items="141"
            :page="page"
            :items-per-page="12"
    >
      <template
              slot="buttons"
              slot-scope="props"
      >
        <vue-ads-page-button
                v-for="(button, key) in props.buttons"
                :key="key"
                v-bind="button"
                :class="{'bg-yellow-dark': button.active}"
                @page-change="page = button.page, pageChange(page)"
                @range-change="start = button.start; end = button.end"
        />
      </template>
    </vue-ads-pagination>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Search from './components/Search.vue'
import Item from './components/Item.vue'
import Modal from './components/Modal.vue'
import VueAdsPagination, { VueAdsPageButton } from 'vue-ads-pagination';


import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
import '../node_modules/vue-ads-pagination/dist/vue-ads-pagination.css';
import axios from 'axios';
import debounce from 'lodash.debounce'
import Cart from "./components/Cart";

const API = 'http://localhost:3005/products';


export default {

  created() {
    this.startup();
  },

  name: 'app',
  components: {
    Cart,
    Header,
    Search,
    Item,
    Modal,
    VueAdsPagination,
    VueAdsPageButton,
  },
  data() {
    return {
      modalOpen:false,
      cartOpen:false,
      results: [],
      modalItem: null,
      message: '',
      page:0,
      loading: false,
      start: 0,
      end: 0,
      search: true,
      cart: [],
    }
  },


  methods: {
    handleCartOpen () {
      this.cartOpen = true;
      this.$emit('openCart',this.cart)
    },

    addItemToCart (item, q) {
      item.quantity = q;
      this.cart.push(item)
      console.log(this.cart)
    },

    pageChange (page) {
      this.page = page;
      this.startup();
      // eslint-disable-next-line no-console
      //console.log(page);
    },

    rageChange (start, end) {
      // eslint-disable-next-line no-console
      //console.log(start, end);
    },

    handleModalOpen(item) {
      this.modalOpen = true;
      this.modalItem = item;
      //console.log(this.modalItem);
    },

    handleInput: debounce(function () {

      if(this.message.length<2){
        this.startup();
      }

      else if(this.message.length>=2) {
        axios.get(`${API}?general.name_like=${this.message}&_limit=100`)
                .then((response) => {
                  this.results = response.data;
                  this.page = 0;
                  this.search = false;
                })
                .catch((error) => {
                  // eslint-disable-next-line no-console
                  console.log(error);
                });
      }
    }, 500),

    startup: function () {
      axios.get(`${API}?_page=${(this.page + 1)}&_limit=12`)
              .then((response) => {

                // eslint-disable-next-line no-console
                //console.log(response.data)
                this.results = response.data;
                this.search = true;

              })
              .catch((error) => {
                // eslint-disable-next-line no-console
                console.log(error);
              });
    },
  }
}

</script>

<style lang="scss">
  body{

  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  justify-content: center;
  /*box-sizing: border-box;*/
}

  .results{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;

    @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }


</style>
