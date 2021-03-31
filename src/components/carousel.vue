<template>
<!--  -->
    <div class="container bg-dark">
        <!-- ページをクリッピングするコンテナ(窓みたいに) -->
        <div class="clipping-container">
            <!-- ページ全体、このleftをtransitionでスライドさせてページを動かす -->
<!--  -->
            <div class="pages bg-primary"
            >

                <!-- isCurrentPageの引数:page数とindex#の差分調整のため+1 -->
                <div class="page p-0"
                    v-for="(card) in cards"
                    :key="card.index"
                :style="{ left: currentLeft }"
                    >
                    <!-- :class="{ 'order-last' : isLastPage(id+1) }" -->

                    <div class="card">
                        <!-- {{ id }} -->
                        <img :src="card.src" :alt="card.alt" 
                            class="bd-placeholder-img bd-placeholder-img-lg card-img" width="100%" height="200"
                        >
                    </div>
                </div>
            </div>
        </div>

        <!-- ページを表現するドット -->
        <div class="dots">
            <!-- 現在のページはdot-currentクラスが当たる -->
            <span
                v-for="index in totalPage"
                :class="{ dot: true, 'dot-current': isCurrentPage(index) }"
                :key="index"
            >
            </span>
        </div>

        <div>
<!-- ボタンデザイン変更 -->
            <button @click="backwardPage">←</button>
            <button @click="forwardPage">→</button>
        </div>
    </div>
</template>
// 自動カルーセルのアニメーション

<script>
import { defineComponent } from "vue";

const pages = document.querySelector('.pages');


export default defineComponent({
// nameどうする？
    name: "HelloWorld",
    data() {
        return {
            pages : pages,
            currentPage: 1, // 現在のページ
            lastPage: 4,
            totalPage: 4, // ページの全数
            pageWidth: 250, // 1ページの幅
            cards: [
                {src: require('../assets/reincarnation.png'), alt:'転生したら〇〇〇〇だった件'},
                {src: require('../assets/daihonzan3.png'), alt:'大本山Learning'},
                {src: require('../assets/hiroshige.png'), alt:'HiRoShIgE'},
                {src: require('../assets/a_hundred_horror.png'), alt:'あなたと百物語'}
            ]
        };
    },
    methods: {
        // ページを1つ進める
        forwardPage() {
            // 最後のページの場合return
            if (this.currentPage === this.totalPage) {
                // 一番前にする
                this.currentPage = 1
                // this.lastPage = this.totalPage
                // return;
            
            }else{
                this.currentPage += 1;
                // pages.appendChild(this.currentPage);
            }
            if(this.lastPage === this.totalPage){
                this.lastPage = 1;
            }else{
                
                this.lastPage += 1;
            }

                this.replaceCards()
        },

        // ページを1つ戻す
        backwardPage() {
            // 最初のページの場合return
            if (this.currentPage === 1) {
// 一番最後にいく
                return;
            }
            this.currentPage -= 1;
        },

        // 現在のページをpositionに変換
        // pageToPosition(): number {
        pageToPosition(){
            return -(this.pageWidth + 40*2) * (this.currentPage - 1);
        },

        // isCurrentPage(page: number) {
        isCurrentPage(/* number */page) {
            return this.currentPage === page;
        },

        isLastPage(/* number */page) {
            return this.lastPage === page;
        },

        replaceCards(){
            
            let forward = this.cards.splice(0, 1)// this.cards.push(forward);
            console.log(forward)
            console.log(this.cards)
            // console.log(forward)
            this.cards.push(forward[0])
        }


    },
    computed: {
        // 現在のpositionからleftに変換
        // currentLeft(): string {
        currentLeft() {
            return String(this.pageToPosition()) + "px";
        },


    },
});
</script>

<style scoped>
.clipping-container {
    height: 200px;
    width: 990px;
    clip-path: inset(0);
    position: relative;
    display: inline-block;
    
    border: 1px solid red;
}
.pages {
    display: flex;
    /* ここにtransitionをつけることでpagesのleftを変更した場合にアニメーションさせることができる */
    position: absolute;
    left: 0;
}
.page {
    transition: left 0.5s ease;
    width: 250px;
    height: 200px;
    margin: 0 40px;
    /* box-sizing: border-box; */
}
.dots {
    width: 50px;
    display: flex;
    justify-content: space-between;
    margin: auto;
    margin-bottom: 16px;
}
.dot {
    height: 8px;
    width: 8px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
}
.dot-current {
    background-color: skyblue;
}
</style>