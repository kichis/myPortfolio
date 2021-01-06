<template>
  <myheader></myheader>

  <img alt="Vue logo" src="./assets/logo.png">
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div>
    <p v-if="msg.length>0">
      {{msg}}
    </p>
    <p v-else>
      no-text
    </p>
    <input type="text" v-model="msg">
    <button @click="clear()">clear</button>
    </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import myheader from './components/myheader'

export default {
  // name: 'App',
  // components: {
  //   // HelloWorld
  // }
  components: { 
    myheader 
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
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
