<template>
  <myheader></myheader>

  <router-view></router-view>

  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <!-- <div></div>
    <div>
    <p v-if="msg.length>0">
      {{msg}}
    </p>
    <p v-else>
      no-text
    </p>
    <input type="text" v-model="msg">
    <button @click="clear()">clear</button>

    </div> -->




</template>


<script>

// import HelloWorld from './components/HelloWorld.vue'

import myheader from './components/myheader'


export default {
  components: { 
    myheader,
    
  },

  data(){
    return{
      msg: "Hello world!"
    }
  },

  methods: {
    clear () {
      this.msg = ''
    }
  },
    created () {
    // fetch('http://www.geonames.org/postalCodeLookupJSON?postalcode=10504&country=US')
    // .then( response => {
    //   return response.json()
    // })
    // .then( json => {
    //   this.msg = json.postalcodes[0].adminName1
    // })
    // .catch( (err) => {
    //   this.msg = err // エラー処理
    // });
  }

}

// const NotFoundComponent = { template: '<p>Page not found</p>' }
// const HomeComponent = { template: '<p>Home page</p>' }
// const AboutComponent = { template: '<p>About page</p>' }

// const routes = {
//     '/': HomeComponent,
//     '/about': AboutComponent
// }

// const SimpleRouter = {
//     data: () => ({
//         currentRoute: window.location.pathname
//     }),

//     computed: {
//         CurrentComponent() {
//             return routes[this.currentRoute] || NotFoundComponent
//         }
//     },

//     render() {
//         return createApp.createApp().h(this.CurrentComponent)
//     }
// }

// createApp(SimpleRouter).mount('#app')

</script>

<style>
#app {
  color: #303030;
  font-family: 'Sawarabi Gothic', sans-serif;
  background-color: #f9f9f9;
  /* うすいクリーム色 */
  /* background-color: #fffcf5; */

  height: 100vh;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.page_title{
  color: #9b564e;
  margin: 3% 0;
}

</style>
