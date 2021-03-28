<template>
    <h2>Works</h2>

    <div class="row">
        <!--  -->
        <div class="col-8 bg-warning">
            <!--  -->
            <h5>■WebApps</h5>

            <div class="card-deck">
                <div class="card col-5 d-inline-flex" style="width: 18rem;" 
                    v-for="webcard in webcards" :key="webcard" 
                    v-on:mouseover="showDetail(webcard.id)" 
                    v-on:mouseout="hideDetail"
                >
                    <!-- <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Image cap"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"/><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg> -->
                    <img :src="webcard.img" alt="{{ webcard.tittle }}" class="border-bottom">
                    
                    <div class="card-body">
                        <h5 class="card-title">{{ webcard.title }}</h5>

                        <p class="card-text">{{ webcard.text }}</p>
                        <!-- 画像の大きさ要調整 -->
                        <!-- 使用技術エリア -->
                        <template v-if="webcard.isHTML">
                            <img src="../assets/HTML5_Logo_128.png" alt="HTML5" width="30" height="30">
                        </template>
                        <template v-if="webcard.isCSS">
                            <img src="../assets/CSS3_logo_and_wordmark.png" alt="CSS3" width="30" height="30">
                        </template>
                        <template v-if="webcard.isJS">
                            <img src="../assets/javascript_logo.png" alt="JavaScript" width="30" height="30">
                        </template>                        
                        <template v-if="webcard.isJQ">
                            <img src="../assets/jquery-logo-001.png" alt="jQuery" width="30" height="30">
                        </template>                        
                        <template v-if="webcard.isBS">
                            <img src="../assets/Bootstrap_logo.png" alt="Bootstrap" width="30" height="30">
                        </template>

                        <a :href="webcard.url" class="btn btn-primary" target="_blank">アプリ &nbsp;<i class="fas fa-external-link-alt"></i></a>
                        <template v-if="webcard.github">
                            <a :href="webcard.github" class="btn btn-primary" target="_blank">GitGub &nbsp;<i class="fas fa-external-link-alt"></i></a>
                        </template>
                    </div>
                </div>
            </div>

            <div id="detail_area"
                v-bind:style="{ display : detailDisplay}">
                <p>ポイント：<span v-html="pointField"></span></p>
                <p>why?:<span v-html="reasonField"></span></p>
            </div>

        </div>

        <div class="col-4 bg-danger">
            <h5>■AR</h5>
            <h5>■blender</h5>
        </div>
    </div>
</template>

<style>
#detail_area{
    /* height:100px; */
    /* width:100px; */
    color:white;
    background-color: black;

}
</style>

<script>

const detail = document.querySelector('#detail_area');

export default {
    data(){
        return{
            detail : detail,
            detailDisplay : "none",
            pointField : '',
            reasonField : '',
            webcards :[
                {id : 0,
                 title : '『転生したら〇〇〇〇だった件』',
                 text : '質問の答えると、”あなたが転生したらどんな妖怪になるか”を判定してくれるwebアプリ',
                 img : require('../assets/recarnation.png'),
                 url : "http://kichis.sakura.ne.jp/reincarnation_which_yohkai",
                 github : "https://github.com/kichis/reincarnation_which_yohkai",
                 isHTML : true,
                 isCSS : true,
                 isJS : true,
                 isJQ : true,
                 isBS : true },
                {id : 1,
                 title : '『大本山Learning』',
                 text : 'Bing Map 上に特定の寺院の位置がピンで示されており、クリックするとどの宗派の寺院かを問うクイズが出現するwebアプリ',
                 img : require('../assets/daihonzan.png'),
                 url : "http://kichis.sakura.ne.jp/daihonzan_learning/",
                 github : false,
                 isHTML : false,
                 isCSS : true,
                 isJS : true,
                 isJQ : true,
                 isBS : true },        
            ],

            details :[
                {point : "1. フレームワークを使わずにJavaScriptでSPAを実装<br>"+
                        "<p>2. 回答中のイレギュラーな動き(リロード、ブラウザの戻るボタン押下、前の問題に戻る、など)があっても、結果判定の仕組みや表示コンポーネントが崩れないように丁寧に調整</p>"+
                        "<p>3. スマホ、タブレット、PCへのレスポンシブ対応</p><p>4. 結果をツイートできる</p>",
                 reason : '<p>ここ何年か「転生もの」と呼ばれるジャンルの漫画が人気なので、私が好きな"妖怪"をテーマとした転生判断アプリを作ってみました。'+
                 'また、SPAのことを調べた際、(フレームワークがあるから実現するものだと思っていた)SPAがVanilla JSでも書ける！ということを知って実装欲がでてきたので、各質問・結果をSPAで表示するということにも挑戦しました。'+
                 'ユーザが「気軽に楽しく遊べる」ようにポップな色やイラスト、文章で作っています。</p>'
                },
                {point : 
                // "<p>1. フレームワークを使わずにJavaScriptでSPAを実装</p>"+
                //         "<p>2. 回答中のイレギュラーな動き(リロード、ブラウザの戻るボタン押下、前の問題に戻る、など)があっても、結果判定の仕組みや表示コンポーネントが崩れないように丁寧に調整</p>"+
                        "テスト２",
                 reason : 
                //  '<p>ここ何年か「転生もの」と呼ばれるジャンルの漫画が人気なので、私が好きな"妖怪"をテーマとした転生判断アプリを作ってみました。'+
                //  'また、SPAのことを調べた際、(フレームワークがあるから実現するものだと思っていた)SPAがVanilla JSでも書ける！ということを知って実装欲がでてきたので、各質問・結果をSPAで表示するということにも挑戦しました。'+
                 'テスト２理由'
                }
            ]


        }
    },
    
    methods:{
        showDetail(id){
            console.log(id)
            this.pointField = this.details[id].point
            this.reasonField = this.details[id].reason
            this.detailDisplay = "block"
        },
        hideDetail(){
            this.detailDisplay = "none"
        }
    }
}
</script>