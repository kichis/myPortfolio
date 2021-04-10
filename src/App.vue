<template>
  <myheader></myheader>
  <router-view></router-view>
</template>


<script>
import myheader from './components/myheader'

export default {
  components: { 
    myheader,
  },
}
</script>

<style>
body{
  background-color: #f9f9f9;
  /* うすいクリーム色 */
  /* background-color: #fffcf5; */
}

#app {
  color: #303030;
  font-family: 'Sawarabi Gothic', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.page_title{
  color: #9b564e;
  letter-spacing: 2px;
  text-shadow: 1px 0 0 black;
  margin: 5vh 0;
}
</style>
