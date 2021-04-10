<template>
    <div class="container p-0">

        <h2 class="page_title">AboutMe</h2>

        <div id="main_area" class="row">
            <div class="col-5 p-0">
                <div class="h-50 px-lg-5">
                    <h4>Data</h4>
                    <table class="table">
                        <tbody>
                            <tr>
                                <td>Name</td>
                                <td>Kichishima Naho</td>
                            </tr>
                            <tr>
                                <td>Age</td>
                                <td>{{ calcMyAge() }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="px-lg-5">
                    <h4>Career</h4>
                    <table class="table">
                        <tbody>
                            <tr>
                                <td>University</td>
                                <td>獨協大学<br>@法学部 国際関係法学科<br>(2010.04 - 2014.03)</td>
                            </tr>
                            <tr>
                                <td>Job</td>
                                <td>ユニトランス株式会社<br>(2014.04 - 2020.03)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="col-2 p-0 pt-5">
                <img id="myimage" src="../assets/portrait_pencilversion.png" alt="my image" width="200" class="mt-5">
            </div>

            <div class="col-5 p-0 px-xl-4">
                <h4>Charactor</h4>
                <table class="table">
                    <tbody>
                        <tr
                        v-for="charactor in charactors" :key="charactor"
                        >
                            <td>{{ charactor.div }}</td>
                            <td v-html="prepareItems(charactor.item)"></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div> 

    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    data(){
        return{
            charactors: [
                { div:'Strength', item: ['落ち着き', '好奇心', '物事をコツコツ進められる']},
                { div:'Weakness', item: ['緊張しやすい', '飽き性', '慎重']},
                { div:'Likes & Interests', item: ['旅行', '本', '葛飾北斎', '新しいもの・こと', '三項演算子', 'コーヒー']},
            ],
        }
    },
    methods:{
        calcMyAge(){
            let now = new Date()
            let year = now.getFullYear()
            let month = now.getMonth() + 1
            let day = now.getDate()
            let age = year - 1991
            return (month > 4 || (month == 4 && day >= 2)) ? age : --age
        },
        prepareItems(ary){
            let html = ''
            ary.forEach(ele => {
                html += ele + '<br>' 
            });
            return html
        }
    },
})
</script>

<style scoped>
.container{
    height: 80%;
}
#main_area{
    height: 90%;
}

#myimage{
    clip-path: circle(45% at 50% 40%);
}
</style>