<template>
    <div class="container">

        <h2 class="page_title">Contact & SNS</h2>

        <h5>ご用の際には、TwitterのDMでご連絡ください(一番早くご返信できます)</h5>

        <!-- <h5>■links</h5> -->
        <table class="table w-50 mx-auto">
            <tr
            v-for="sns in SNSs" :key="sns"
            >
                <td class="text-right">{{ sns.name }}</td>
                <td class="text-left" v-html="sns.img"></td>
                <td><a :href="sns.url" target="_blank">{{ sns.account }}</a></td>
            </tr>
        </table>
        <!-- <p>
            <ul>
                <li>Twitter &nbsp;<i class="fab fa-twitter"></i> &nbsp; <a href="https://twitter.com/kichi12321" target="_blank">@kichi12321</a></li>
                <li>WANTEDLY &nbsp;<img src="../assets/wantedly_mark.png" alt="WANTEDLY logo" width="20" height="20">&nbsp; <a href="https://www.wantedly.com/users/140022507" target="_blank">Kichishima Naho</a></li>
                <li>GitHub &nbsp;<i class="fab fa-github"></i>&nbsp; <a href="https://github.com/kichis" target="_blank">kichis</a></li>
                <li>Qiita &nbsp; <img src="../assets/qiita-favicon.png" alt="qiita logo" width="40" height="20"> &nbsp; <a href="https://qiita.com/kichi12321" target="_blank">@kichi12321</a></li>
                <li>Facebook &nbsp;<i class="fab fa-facebook-square"></i>&nbsp; <a href="https://www.facebook.com/naho.kichishima/" target="_blank">Naho Kichishima</a></li>
            </ul>
        </p> -->

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
                  img: '<img src='+require("../assets/qiita-favicon.png")+' alt="qiita logo" width="40" height="20">',  url:'https://qiita.com/kichi12321', 
                  account:'@kichi12321' },
                { name:'Facebook', 
                  img: '<i class="fab fa-facebook-square"></i>', url:'https://www.facebook.com/naho.kichishima/', account:'Naho Kichishima' },
            ]
        }
    }
})
</script>

<style scoped>
.container{
    height: 80%;
}
</style>