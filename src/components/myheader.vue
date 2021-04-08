<template>
  <!-- <div class="container-fluid bg-danger">
    test
    <div
    :style="{left: leftPosition}">ほげほげ</div>
  </div> -->

  <nav id="navbar" class="navbar navbar-expand-lg navbar-dark bg-dark">
    <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto">
        <li class="nav-item mx-4"
          v-for="component in components"
          :key="component"
          :class="{ active: isActive(component.path)}"
          @click="changePage(component.path)"
        >
          <router-link :to="component.path" class="nav-link">{{ component.name }}</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  data(){
    return {
      currentPage: location.pathname,
      components:[
        {name:'Home', path:'/'},
        {name:'AboutMe', path:'/about'},
        {name:'Skills', path:'/skills'},
        {name:'Works', path:'/works'},
        {name:'Contact & SNS', path:'/contact'},
      ]
    }
  },
  methods:{
    isActive(path){
      return this.currentPage == path
    },
    changePage(newPath){
      this.currentPage = newPath
    }
  },

})
</script>


<style scoped>
.nav-item{
  font-size: 1.2rem;
}


#navbar{
  /* マスタード？ */
  /* background-color: #ffcc40; */
  /* オレンジ */
  /* background-color: #Fd7e00; */
  /* マリーゴールド */
  /* background-color: #F79428; */
  /* パンプキン */
  /* background-color: #e5a323;    */
  /* ゴールデンイエロー */
  /* background-color: #f4a800;    */
  /* キャメル */
  /* background-color: #bb8d5f; */
  /* コーヒーブラウン */
  /* background-color: #7d4a31; */
}
.nav-link{
  /* color: #ffcc40; */

}
#search{
  /* ディープブルー  */
  /* background-color: #132c6f; */

  /* ラベンダーみたいな色 */
  /* background-color: rgba(59, 59, 250, 0.767); */
}
</style>