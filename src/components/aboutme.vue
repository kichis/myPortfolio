<template>
    <div class="container p-0">

        <h2 class="page_title">AboutMe</h2>

        <div id="main_area" class="row">
            <div class="col-5 p-0">
                <div class="h-50 px-5">
                    <h5>■Data</h5>
                    <table class="table">
                        <tbody>
                            <tr>
                                <td>Name:</td>
                                <td>Kichishima Naho</td>
                            </tr>
                            <tr>
                                <td>Age:</td>
                                <td>{{ calcMyAge() }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="px-5">
                    <h5>■Career</h5>
                    <table class="table">
                        <tbody>
                            <tr>
                                <td>University:</td>
                                <td>獨協大学<br>(2010.04 ~ 2014.03)</td>
                            </tr>
                            <tr>
                                <td>Work:</td>
                                <td>ユニトランス株式会社<br>(2014.04 ~ 2020.03)

                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="col-2 align-self-center p-0">
                <img id="myimage" src="../assets/portrait_pencilversion.png" alt="my image" width="200">
            </div>

            <div class="col-5 p-0">
                <h5>■Charactor</h5>
                <table class="table">
                    <tbody>
                        <tr>
                            <td>Strength:</td>
                            <td>
                                落ち着き<br>
                                好奇心<br>
                                物事をコツコツ進める
                            </td>
                        </tr>
                        <tr>
                            <td>Weakness:</td>
                            <td>
                                緊張しやすい<br>
                                飽き性<br>
                                慎重すぎる
                            </td>
                        </tr>
                        <tr>
                            <td>Likes & Intrests</td>
                            <td>
                                旅行<br>
                                本<br>
                                葛飾北斎<br>
                                正規表現<br>
                                新しいこと
                            </td>
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
        return {
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