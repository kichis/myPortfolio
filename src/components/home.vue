<template>
    <div class="container">

        <div class="row mb-3">
            <!-- 左側 -->
            <div id="main_area" class="col-8 pl-5 pr-0">
                <div class="h-50 d-flex justify-content-center align-middle pl-5">
                    <h1 class="mb-3 mt-auto">Portfolio of <span>Kichishima Naho</span></h1>
                </div>
                <div class="h-50 d-flex justify-content-center pl-5">
                    <a href="https://twitter.com/kichi12321" target="_blank" class="mr-4 my-auto">
                        <i class="fab fa-twitter fa-2x"></i>@kichi12321
                    </a>
                    <a href="https://github.com/kichis" target="_blank" class="mx-4 my-auto">
                        <i class="fab fa-github fa-2x"></i>kichis
                    </a>
                    <a href="https://www.wantedly.com/users/140022507" target="_blank" class="ml-4 my-auto">
                        <img src="../assets/wantedly_mark.png" alt="WANTEDLY logo" width="45" height="45">
                        <span id="wantedly_account">Kichishima Naho</span>
                    </a>
                </div>
            </div>
            <!-- 右側 -->
            <div class="col-4 d-flex justify-content-center align-items-center pl-0 pr-5">
                <!-- imgタグだけだとd-flexにより大きさが崩れるのでdivで囲む -->
                <div>
                    <img id="myimage" src="../assets/portrait_pencilversion.png" alt="my image" width="180" class="border">
                </div>
            </div>
        </div>

        <carousel></carousel>

    </div>

</template>

<script>
import carousel from './carousel'

export default {
    components: {
        carousel,
    },
}
</script>

<style scoped>
#main_area{
    height: 50vh;
}

#main_area h1{
    font-family: 'Sawarabi Gothic', sans-serif;
    letter-spacing: 1px;
}

#main_area h1 span{
    color: #9b564e;
    /* 赤身の強い茶色 */
    /* color: rgb(194, 31, 31); */
    /* 上より柔らかい茶色 */
    /* color: rgb(204, 62, 62); */
    font-family: 'Noto Serif JP', serif;
    /* 可視性はこちらの方がいいが目立たない */
    /* font-family: 'Sawarabi Mincho', sans-serif; */
    /* 個性(アク)が強そう */
    /* font-family: 'Dela Gothic One', cursive; */
    /* トイっぽいガチャガチャ感 */
    /* font-family: 'RocknRoll One', sans-serif; */
    /* 子供っぽい */
    /* font-family: 'Yusei Magic', sans-serif; */
    font-weight: bold;
    letter-spacing: 2px;
    text-shadow:1px 0 1px black;
}

#wantedly_account{
    position:relative;
    top:6px;
}

#myimage{
    clip-path: polygon(0% 20%, 20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%)
}
</style>