<template>
    <h2>AboutMe</h2>

    <div class="row">
        <div class="col-5 container">
            <div>
                <h5>■Data</h5>
                <p>Name: Kichishima Naho</p>
                <p>Age: </p>
            </div>

            <div>
                <h5>■Career</h5>
                <p>university: 獨協大学 (2010.04 ~ 2014.03)</p>
                <p>work: ユニトランス株式会社 (2014.04 ~ 2020.03)</p>
            </div>
        </div>

        <div class="col-2">
            <img src="../assets/logo.png" alt="my image">
        </div>
        <div class="col-5 container">
            <h5>■Charactor</h5>
            <p>性格(長所・短所)、好きなもの</p>
        </div>
    </div> 

</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    data(){
        return {

            age:'',
        }
    },
    methods:{
        calcMyAge(){
            // 年齢計算の式
        },
    },
    setup() {
        
    },
})
</script>
