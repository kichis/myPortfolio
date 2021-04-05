<template>
<!--  -->
    <div class="container bg-dark">
        <button @click="backwardPage" class="align-top">
            <span class="carousel-control-prev-icon"></span>
        </button>

        <!-- ページをクリッピングするコンテナ(窓みたいに) -->
        <div class="clipping-container">
            <!-- ページ全体、このleftをtransitionでスライドさせてページを動かす -->
<!--  -->
            <!-- <div ref="pages" class="pages bg-primary"> -->
            <div ref="pages" class="pages bg-primary" 
                :style="{ left: leftPosition, transition: slowMove }"
            >
                <!-- :style="{ left: currentLeft, transition: slowMove }" -->
                <div class="page p-0"
                    v-for="(card) in cards"
                    :key="card"
                    >
                    <!-- :class="{ 'order-last' : iscurrentPage(id+1) }" -->

                    <div class="card">
                        <img :src="card.src" :alt="card.alt" 
                            class="bd-placeholder-img bd-placeholder-img-lg card-img" width="100%" height="200"
                        >
                    </div>
                    </div>
            </div>
        </div>
        
        <button @click="forwardPage" class="align-top">
            <span class="carousel-control-next-icon"></span>
        </button>

        <!-- ページを表現するドット -->
        <div class="dots">
            <!-- 現在のページはdot-currentクラスが当たる -->
            <span
                v-for="index in TOTAL_PAGE"
                :class="{ dot: true, 'dot-current': isCurrentPage(index) }"
                :key="index"
            >
            </span>
        </div>

    </div>
</template>

<style scoped>
button{
    height: 200px;
}
.slide-leave{
    left:0
}
.slide-leave-active {
    transition: left 3s;
}
.slide-leave-to {
    left: -100px;
}
</style>

// 自動カルーセルのアニメーション

<script>
import { defineComponent } from "vue";

// const pages = document.getElementById('pages');

// transition.addEventListener('transitionend', () => {
    //     console.log('トランジション終了');
// });
// console.log(pages)


export default defineComponent({
    // nameどうする？
    name: "HelloWorld",
    data() {
        return {
            control : true,

            left : 0,
            isSlow : true, // pageの移動にスローアニメーションを入れるか
            pages : '',
            currentPage: 1, // 現在のページ
            lastPage: 4, // 最後のページ
            START_PAGE: 1, // 最初のページ (保守性-始まりが0でも1でも速対応できるよう-設置)
            TOTAL_PAGE: 4, // ページの全数
            pageWidth: 250, // 1ページの幅
            cards: [
                { src: require('../assets/reincarnation.png'), alt:'転生したら〇〇〇〇だった件' },
                { src: require('../assets/daihonzan3.png'), alt:'大本山Learning' },
                { src: require('../assets/hiroshige.png'), alt:'HiRoShIgE' },
                { src: require('../assets/a_hundred_horror.png'), alt:'あなたと百物語' }
            ]
        };
    },
    mounted() {
        // Vue.jsでのDOMの取得方法
        const targetElement = this.$refs.pages
        this.pages = targetElement
    },    
    created:function(){
        // イベントリスナーを設置(leftの移動が完了した時)
        window.addEventListener('transitionend', () => {
            // console.log('トランジション終了');
            // (隠れた)先頭のカードを最後に、他は１つ前にずらす
            this.replaceCards()
            this.isSlow = false
            setTimeout(() => { this.isSlow = true }, 50);
        });
    },
    
    methods: {
        // ページを1つ進める
        forwardPage() {
            // 最後のページの場合 1に戻す
            const forward = page => (page === this.TOTAL_PAGE) ? this.START_PAGE : ++page 
            this.currentPage = forward(this.currentPage)
            this.lastPage = forward(this.lastPage)
            this.left = -330
        },
        // ページを1つ戻す
        backwardPage() {
            // 最初のページの場合 最後のページにする
            const backward = page => (page === this.START_PAGE) ? this.TOTAL_PAGE : --page 
            this.currentPage = backward(this.currentPage)
            this.lastPage = backward(this.lastPage)
            this.left = 330
        },
    // console.log(this.currentPage, this.lastPage)      

        // control(){
        //     return 
        // },



        // 現在のページをpositionに変換
        // pageToPosition(): number {
        // pageToPosition(){
        //     // let a = 
        //     // console.log(a)
        //     return -(this.pageWidth + 40*2) * (this.currentPage / this.currentPage * 1);
        // },

        // isCurrentPage(page: number) {
        isCurrentPage(/* number */page) {
            return this.currentPage === page;
        },

        isLastPage(/* number */page) {
            return this.lastPage === page;
        },

        replaceCards(){           
            let first = this.cards.splice(0, 1)// this.cards.push(forward);
            this.cards.push(first[0])
        },


        // pagestoLeft(){
        //     return "-250px";
        // }
            //                 currentLeft() {
            // console.log(String(this.pageToPosition()) + "px")
            // return String(this.pageToPosition()) + "px";
            // }

    },
    computed: {
        // 現在のpositionからleftに変換
        // currentLeft(): string {
        // currentLeft() {
        //     console.log(String(this.pageToPosition()) + "px")
        //     return String(this.pageToPosition()) + "px";
        // },
        slowMove(){
            return this.isSlow ? "left 0.5s ease" : ""
        },
        leftPosition(){
            return this.left + "px"
        }
    },




    watch: {
        isSlow: function(newVal, oldVal){
            (newVal == false && oldVal == true) ? this.left = 0 : false
        },

        cards:function(){
            this.currentLeft = "330px";
        },

        // transition:function(){
        //     console.log("トランジション完了？")
        // }
    }

});
</script>

<style scoped>
.clipping-container {
    height: 200px;
    width: 990px;
    clip-path: inset(0);
    position: relative;
    display: inline-block;
    /*  */
    border: 1px solid red;
}
.pages {
    width: 1320px;
    display: flex;
    position: absolute;
    /* ここにtransitionをつけることでpagesのleftを変更した場合にアニメーションさせることができる */
    left: 0;
    /* right:-500px; */
    /* transition: left 0.5s ease; */
}
.page {
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