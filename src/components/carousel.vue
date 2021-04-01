<template>
<!--  -->
    <div class="container bg-dark">
        <!--  -->
        <button @click="backwardPage" class="align-top"><span class="carousel-control-prev-icon"></span></button>

        <!-- ページをクリッピングするコンテナ(窓みたいに) -->
        <div class="clipping-container">
            <!-- ページ全体、このleftをtransitionでスライドさせてページを動かす -->
<!--  -->
            <div ref="pages" class="pages bg-primary" :style="{ left: currentLeft, transition : test(b)}">
                    <!-- isCurrentPageの引数:page数とindex#の差分調整のため+1 -->
                    <div class="page p-0"
                        v-for="(card) in cards"
                        :key="card"
                        >
                        <!-- :class="{ 'order-last' : iscurrentPage(id+1) }" -->

                        <div class="card">
                            <!-- {{ id }} -->
                            <img :src="card.src" :alt="card.alt" 
                                class="bd-placeholder-img bd-placeholder-img-lg card-img" width="100%" height="200"
                            >
                        </div>
                    </div>
            </div>
        </div>
        
        <button @click="forwardPage" class="align-top"><span class="carousel-control-next-icon"></span></button>
        <!-- <button @click="replaceCards" class="align-top"><span class="carousel-control-next-icon"></span></button> -->

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
            // transition : transition,
            control : true,
            b : true,
            pages : '',
            // left : '',
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
      mounted() {
   const targetElement = this.$refs.pages
//    const targetElementText = this.$refs.first_child.textContent
   console.log('対象のDOM：', targetElement);
   this.pages = targetElement
//    console.log('対象のDOMのテキスト：', targetElementText);
  },
    created:function(){
        // const transition = document.querySelector('.slide-leave-to');
        window.addEventListener('transitionend', () => {
  console.log('トランジション終了');
  this.replaceCards()
  console.log(this.pages.style);
//   this.pages.style.right = "-330px"
// this.con
// this.test(false)
this.b = false
this.currentLeft = "0"
  console.log(this.pages.style);
// this.b = true
//   this.currentRight = "0px"
});
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

                
        },
        // control(){
        //     return 
        // },
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
            // let a = 
            // console.log(a)
            return -(this.pageWidth + 40*2) * (this.currentPage / this.currentPage * 1);
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
        },
        // pagestoLeft(){
        //     return "-250px";
        // }
            //                 currentLeft() {
            // console.log(String(this.pageToPosition()) + "px")
            // return String(this.pageToPosition()) + "px";
            // }
            test(bool){
                let a = bool == true ? "left 0.5s ease" : ""
                return a

            }
    },
    computed: {
        // 現在のpositionからleftに変換
        // currentLeft(): string {
        // currentLeft() {
        //     console.log(String(this.pageToPosition()) + "px")
        //     return String(this.pageToPosition()) + "px";
        // },


    },

    watch: {
        currentPage: function(){
            this.currentLeft = "-330px";
               
        },
        cards:function(){
            this.currentLeft = "330px";
        },
        transition:function(){
            console.log("トランジション完了？")
        }
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
    /* ここにtransitionをつけることでpagesのleftを変更した場合にアニメーションさせることができる */
    position: absolute;
    left: 0;
    right:-500px;
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