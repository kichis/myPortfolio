<template>
    <div class="container">

        <h2 class="page_title">Contact & SNS</h2>

        <h6 class="text-muted">TwitterのDMか、Facebookのmessengerが一番早くご返信できます</h6>

        <table class="table table-borderless mx-auto mt-5">
            <tr
            v-for="sns in SNSs" :key="sns"
            >
                <td class="text-right">{{ sns.name }}</td>
                <td class="text-left"
                :class="{ 'pl-0': isQiita(sns.name) }"
                v-html="sns.img"
                ></td>
                <td class="w-50"><a :href="sns.url" target="_blank">{{ sns.account }}</a></td>
            </tr>
        </table>
    </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    data(){
        return{
            SNSs: [
                { name:'Twitter', 
                  img: '<i class="fab fa-twitter"></i>', 
                  url:'https://twitter.com/kichi12321', 
                  account:'@kichi12321' },
                { name:'WANTEDLY', 
                  img: '<img src='+require("../assets/wantedly_mark.png")+' alt="WANTEDLY logo" width="20" height="20">',  url:'https://www.wantedly.com/users/140022507', 
                  account:'Kichishima Naho' },
                { name:'GitHub', 
                  img: '<i class="fab fa-github"></i>', 
                  url:'https://github.com/kichis', 
                  account:'kichis' },
                { name:'Qiita', 
                  img: '<img id="qiita_img" src='+require("../assets/qiita-favicon.png")+' alt="qiita logo" width="40" height="20" style="clip-path: circle(30%);position:relative;left:-50;">',  
                  url:'https://qiita.com/kichi12321', 
                  account:'@kichi12321' },
                { name:'Facebook', 
                  img: '<i class="fab fa-facebook-square"></i>', url:'https://www.facebook.com/naho.kichishima/', account:'Naho Kichishima' },
            ]
        }
    },
    methods: {
        isQiita(sns){
            return sns == 'Qiita'
        }
    }
})
</script>

<style scoped>
.container{
    height: 80%;
}

.table{
    width: 30%;
}

#qiita_img{

    background-color: red;
    clip-path: circle(50%);
}

a{
  text-decoration: none;
}
</style>