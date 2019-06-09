<template>
  <div class="hello">
    <div class="logo">
      <img @click="reload()" class="slideDown" id="logo" src="../../public/logo.png"/>
    </div>
      <img @click="$emit('cartOpen')" class="shopingCart" src="https://img.icons8.com/windows/96/000000/shopping-cart.png">
  </div>
</template>

<script>
export default {
  name: 'Header',

  data() {
    return {
      cart:[],
    };
  },

  methods: {
    reload:function () {
      location.reload();
    }
  }

}
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

  .shopingCart {
    position: absolute;
    width: 15%;
    height: auto;
    right: 30px;
    top: 20px;

    @media (min-width: 768px) {
      width: 6%;
      right: 120px;
    }
  }

#logo {
  max-width: 25%;
  height: auto;
  padding: 0;
  background: none;
  visibility: hidden;
}

.slideDown{
  animation-name: slideDown;
  -webkit-animation-name: slideDown;

  animation-duration: 1.5s;
  -webkit-animation-duration: 1.5s;

  animation-timing-function: ease;
  -webkit-animation-timing-function: ease;

  visibility: visible !important;
}

@keyframes slideDown {
  0% {
    transform: translateY(-100%);
  }
  50%{
    transform: translateY(8%);
  }
  65%{
    transform: translateY(-4%);
  }
  80%{
    transform: translateY(4%);
  }
  95%{
    transform: translateY(-2%);
  }
  100% {
    transform: translateY(0%);
  }
}

@-webkit-keyframes slideDown {
  0% {
    -webkit-transform: translateY(-100%);
  }
  50%{
    -webkit-transform: translateY(8%);
  }
  65%{
    -webkit-transform: translateY(-4%);
  }
  80%{
    -webkit-transform: translateY(4%);
  }
  95%{
    -webkit-transform: translateY(-2%);
  }
  100% {
    -webkit-transform: translateY(0%);
  }
}

</style>
