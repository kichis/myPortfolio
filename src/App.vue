<template>
  <myheader></myheader>
  <home></home>
  <aboutme></aboutme>
  <skills></skills>
  <works></works>
  <contact></contact>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <div></div>
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
import home from './components/home'
import aboutme from './components/aboutme'
import skills from './components/skills'
import works from './components/works'
import contact from './components/contact'


export default {
  // name: 'App',
  // components: {
  //   // HelloWorld
  // }
  components: { 
    myheader,
    home,
    aboutme,
    skills,
    works,
    contact
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
  /* background-color: #fffcf5; */
  /* background-color: #f5f5f5; */
  /* background-color: #f4f5f7; */

  /* background-color: #f2f2f2; */
  background-color: #f9f9f9;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  color: #303030;
  margin-top: 60px;
}
</style>
