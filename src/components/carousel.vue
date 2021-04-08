<template>
    <div class="container">
        <button @click="backwardPage" class="btn btn-light align-top">
            <span class="carousel-control-prev-icon"></span>
        </button>

        <!-- ページをクリッピングするコンテナ(窓みたいに) -->
        <div class="clipping-container">
            <!-- このpagesを動かしてスライドの動きに見せる -->
            <div class="pages" 
                :style="{ left: leftPosition, transition: slowMove }"
            >
                <div class="page p-0"
                    v-for="card in cards"
                    :key="card"
                    >
                    <router-link :to="'/works#'+`${card.name}`" class="card">
                        <img :src="card.src" :alt="card.alt" 
                            class="bd-placeholder-img bd-placeholder-img-lg card-img" width="100%" height="198"
                        >
                    </router-link>
                </div>
            </div>
        </div>
        
        <button @click="forwardPage" class="btn btn-light align-top">
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

<script>
import { defineComponent } from "vue";

export default defineComponent({
    name: "carousel",
    data() {
        return {
            left : 0,
            isSlow : true, // pagesの移動にスローアニメーションを入れるか
            directFlg: '', // pagesの動く方向
            currentPage: 1, // 現在のページ
            lastPage: 4, 
            START_PAGE: 1, // 最初のページ (保守性-始まりが0でも1でも変更しやすいために-設置)
            TOTAL_PAGE: 4, 
            DISTANCE: 330, // カルーセルの１回の移動距離
            cards: [
                { name: 'reincarnation', src: require('../assets/reincarnation.png'), alt:'転生したら〇〇〇〇だった件' },
                { name: 'daihonzan', src: require('../assets/daihonzan3.png'), alt:'大本山Learning' },
                { name: 'hiroshige', src: require('../assets/hiroshige.png'), alt:'HiRoShIgE' },
                { name: 'hundred_horror', src: require('../assets/a_hundred_horror.png'), alt:'あなたと百物語' }
            ]
        };
    },
    created:function(){
        window.addEventListener('transitionend', (event) => {
            // pagesの移動('left')のfowardPageの場合のみ
            if(event.propertyName == 'left' && this.directFlg){
                this.replaceCards(0)
                this.isSlow = false
                this.left = 0
                // HACK: left=0の処理が完了してからtrueにしないとスローアニメーションが有効になってしまうため時間差をつける
                setTimeout(() => { this.isSlow = true }, 50);
            }
        });
    },
    methods: {
        isCurrentPage(/* number */page) {
            return this.currentPage === page;
        },

        // ページを1つ進める
        forwardPage() {
            this.directFlg = true
            // dataプロパティ上の変更
            const forward = page => (page === this.TOTAL_PAGE) ? /*最後のページの場合 1に戻す*/this.START_PAGE : ++page 
            this.currentPage = forward(this.currentPage)
            this.lastPage = forward(this.lastPage)
            // card(pages)を動かす
            this.carousel()
        },

        // ページを1つ戻す
        backwardPage() {
            this.directFlg = false
            const backward = page => (page === this.START_PAGE) ? /*最初のページの場合 最後のページにする*/ this.TOTAL_PAGE : --page 
            this.currentPage = backward(this.currentPage)
            this.lastPage = backward(this.lastPage)
            this.carousel()
        },

        carousel(){
            if(this.directFlg){
                this.left = -this.DISTANCE
                // trasitionedイベントへ
            }else{
                this.isSlow = false
                this.left = -this.DISTANCE
                this.replaceCards(this.TOTAL_PAGE - 1)
                setTimeout(() => { 
                    this.isSlow = true
                    this.left = 0
                }, 50);
            }
        },

        replaceCards(index){           
            let moving = this.cards.splice(index, 1)
            index == 0 ? this.cards.push(moving[0]) : this.cards.unshift(moving[0])
        },

    },
    computed: {
        slowMove(){
            // このtransitionをつけることでpagesのleftを変更した場合にアニメーションさせることができる
            return this.isSlow ? "left 0.5s ease" : ""
        },
        leftPosition(){
            return this.left + "px"
        }
    },
});
</script>

<style scoped>
button{
    height: 200px;
}

/* コントローラー矢印を白から黒に変更 */
.carousel-control-next-icon,
.carousel-control-prev-icon {
  filter: invert(1);
}

.clipping-container {
    height: 200px;
    width: 85%;
    clip-path: inset(0);
    position: relative;
    display: inline-block;
}
@media (min-width: 1190px) {
    .clipping-container {
        width: 980px;
    }
}

.pages {
    width: 1320px;
    display: flex;
    position: absolute;
}

.page {
    height: 200px;
    width: 250px;
    box-sizing: border-box;
    margin: 0 30px;
}
@media (min-width: 1190px) {
    .page {
        margin: 0 40px;
    }
}

.dots {
    width: 70px;
    display: flex;
    justify-content: space-between;
    margin: 16px auto;
    /* margin-bottom: ; */
}
.dot {
    height: 9px;
    width: 9px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
}
.dot-current {
    background-color: #bb8d5f;
}
</style>