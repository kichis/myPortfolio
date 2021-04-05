<template>
    <h2>Works</h2>

    <div class="row">
        <!--  -->
        <div class="col-8 bg-warning">
            <!--  -->
            <h5>■WebApps</h5>

            <div class="row justify-content-around">
                <!-- d-inline-flex -->
                <div class="card col-8 col-md-6 col-lg-5 col-xl-4 mx-3 mt-5 px-0" style="width: 18rem;" 
                    v-for="webcard in webcards" :key="webcard.id" 
                    v-on:mouseover="showDetail($event, webcard.id)" 
                    v-on:mouseout="hideDetail"
                >
                    <img :src="webcard.img" :alt="webcard.tittle" class="bd-placeholder-img card-img-top border-bottom m-0" width="100%" height="250">
                    
                    <div class="card-body">
                        <h5 class="card-title">{{ webcard.title }}</h5>

                        <p class="card-text"><span v-html="webcard.text"></span></p>
                        <!-- 画像の大きさ要調整 -->
                        <!-- 使用技術エリア -->
                        <div class="py-2">
                            <template v-if="webcard.isHTML">
                                <img src="../assets/HTML5_Logo_128.png" alt="HTML5" width="40" height="40">
                            </template>
                            <template v-if="webcard.isCSS">
                                <img src="../assets/CSS3_logo_and_wordmark.png" alt="CSS3" width="30" height="40">
                            </template>
                            <template v-if="webcard.isJS">
                                <img src="../assets/javascript_logo.png" alt="JavaScript" width="33" height="33" class="mt-2">
                            </template>                        
                            <template v-if="webcard.isJQ">
                                <img src="../assets/jquery-logo-001.png" alt="jQuery" width="50" height="40">
                            </template>                        
                            <template v-if="webcard.isBS">
                                <img src="../assets/bootstrap-purplebase.svg" alt="Bootstrap" width="30" height="30" class="mt-2">
                            </template>
                            <template v-if="webcard.isTW">
                                <img src="../assets/tailwindcss-mark.cb8046c163f77190406dfbf4dec89848.svg" alt="Tailwind" width="35" height="35" class="mt-2 border">
                            </template>
                            <template v-if="webcard.isBingMap">
                                <img src="https://mapsforenterprise.binginternal.com/wp-content/uploads/2020/03/bing-maps-logo-small.png" alt="Bing Map" width="85" height="20" class="mt-2">
                            </template>
                            <template v-if="webcard.isPHP">
                                <img src="https://www.php.net/images/logos/new-php-logo.svg" alt="PHP" width="50" height="40" class="mt-2">
                            </template>
                            <template v-if="webcard.isMySQL">
                                <img src="https://www.mysql.com/common/logos/logo-mysql-170x115.png" alt="mySQL" width="60" height="40" class="mt-2">
                            </template>
                        </div>
                        
                        <div class="d-flex justify-content-around pt-2">
                            <!-- ボタンの色は後ほど要検討 -->
                            <!-- ボタンを目立つように（影とかつける）方がいいかも -->
                            <a :href="webcard.url" class="btn linkToApp" target="_blank">
                                アプリ &nbsp;<i class="fas fa-external-link-alt"></i>
                            </a>
                            <template v-if="webcard.github">
                                <a :href="webcard.github" class="btn btn-dark" target="_blank">GitHub &nbsp;<i class="fas fa-external-link-alt"></i></a>
                            </template>
                        </div>
                    </div>
                </div>
            </div>

            <div class="d-inline-block mt-4">
                <h6><b> 『あなたと百物語』ログイン用アカウント</b></h6>
                <table class="table table-borderless table-sm">
                    <thead>
                        <tr>
                            <th></th>
                            <th>email</th>
                            <th>パスワード</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>管理者</td>
                            <td>admin_user@ghost.com</td>
                            <td>adminuser</td>
                        </tr>
                        <tr>
                            <td>通常ユーザ</td>
                            <td>test_user@ghost.com</td>
                            <td>testuser</td>
                        </tr>
                        <tr>
                            <td><b>ブラックリストユーザ</b></td>
                            <td>blacklisted@ghost.com</td>
                            <td>blacklisted</td>
                        </tr>                    
                    </tbody>
                </table>
            </div>
        </div>

        <!-- AR & blender area -->
        <div class="col-4 bg-danger">
            <h5>■AR & blender</h5>
            
            <div class="row justify-content-around">
                <!-- AR card -->
                <div class="card col-12 col-lg-10 col-xl-8 mt-5 px-0" 
                    style="width: 18rem;" 
                    v-on:mouseover="showDetail($event, 4)" 
                    v-on:mouseout="hideDetail"
                >
                    <video src="../assets/kitsune_moviex2.mp4" controls height="250"></video>

                    <div class="card-body">
                        <h5 class="card-title">『きつねの窓』</h5>
                        <p class="card-text">
                            iPhoneで計測した歩数に応じて、妖怪がARで出現するアプリ。<br>
                            (上の埋め込み動画が再生できない場合は、デモ動画ボタンでも同じ動画が見られます)
                        </p>
                        <div class="py-2">
                            <img src="../assets/unity-tab-square-black.png" alt="unity" width="40" height="40">
                            <img src="../assets/vuforia.jpg" alt="vuforia" width="60" height="40">
                            <img src="https://download.blender.org/branding/blender_logo.png" alt="blender" width="130" height="35">
                            <img src="../assets/csharp.png" alt="csharp" width="40" height="40">
                        </div>
                        <!-- ボタンの色は後ほど要検討 -->
                        <!-- ボタンを目立つように（影とかつける）方がいいかも -->
                        <a href="https://drive.google.com/file/d/1tz7HEZsOyYyCQqSy4WSpRNlmsgip-Vf_/view?usp=sharing" class="btn linkToApp mt-2" target="_blank">
                            デモ動画 &nbsp;<i class="fas fa-external-link-alt"></i>
                        </a>
                    </div>
                </div>

                <!-- blender card -->
                <div class="card col-12 col-lg-10 col-xl-8 mt-5 px-0" 
                    style="width: 18rem;" 
                    v-for="othercard in othercards" :key="othercard.id" 
                >
                    <img :src="othercard.img" alt="{{ othercard.tittle }}" class="bd-placeholder-img card-img-top border-bottom m-0" width="100%" height="250">
                    <div class="card-body">
                        <h5 class="card-title">{{ othercard.title }}</h5>
                        <p class="card-text"><span v-html="othercard.text"></span></p>
                        <img src="https://download.blender.org/branding/blender_logo.png" alt="blender" width="130" height="35">
                    </div>
                </div>
            </div>
        </div>

        <div id="detail_area"
            v-bind:style="{ display : detailDisplay, top : detailTop, left : detailLeft }">
            <p>ポイント：<span v-html="pointText"></span></p>
            <p>why?:<span v-html="reasonText"></span></p>
        </div>
    </div>
</template>

<style>
.linkToApp{
    /* background-color: coral; */
    background-color: rgb(255, 200, 81);
}

#detail_area{
    width: 400px;
    position: absolute;
    /* left: 100px; */
    z-index: 10;

    color:white;
    background-color: black;

}
</style>

<script>
const detail = document.querySelector('#detail_area');
const getPositionOfPage = (eObject, direction) => {
    let result
    switch(direction){
        case "top":
            result = eObject.target.closest(".card").getBoundingClientRect().top + window.pageYOffset;
            break;
        case "right":
            result = eObject.target.closest(".card").getBoundingClientRect().right + window.pageXOffset + 50
            break;
        case "left":
            // 450 = cardのwidth分+間隔
            result = eObject.target.closest(".card").getBoundingClientRect().left + window.pageXOffset - 450
            break;
        default:
            break;
    }
    return add_px(result)
}
const add_px = val => val + "px";

export default {
    data(){
        return{
            // eventObject : '',
            detail : detail,
            detailDisplay : "none",
            detailTop : '',
            detailLeft : '',
            pointText : '',
            reasonText : '',
            webcards :[
                {id : 0,
                 title : '『転生したら〇〇〇〇だった件』',
                 text : '質問の答えると、”あなたが転生したらどんな妖怪になるか”を判定してくれるwebアプリ',
                 img : require('../assets/reincarnation.png'),
                 url : "http://kichis.sakura.ne.jp/reincarnation_which_yohkai",
                 github : "https://github.com/kichis/reincarnation_which_yohkai",
                 isHTML : true,
                 isCSS : true,
                 isJS : true,
                 isJQ : true,
                 isBS : true,
                 isTW : false,
                 isBingMap : false,
                 isPHP : false,
                 isMySQL : false },
                {id : 1,
                 title : '『大本山Learning』',
                 text : 'Bing Map上に寺院の位置がピンで示されており、クリックするとどの宗派の寺院かを問うクイズが出現するwebアプリ<br>(<span class="text-danger">※正否判定時に音がでます</span>)',
                 img : require('../assets/daihonzan3.png'),
                 url : "http://kichis.sakura.ne.jp/daihonzan_learning/",
                 github : false,
                 isHTML : true,
                 isCSS : true,
                 isJS : true,
                 isJQ : false,
                 isBS : false,
                 isTW : true ,
                 isBingMap : true,
                 isPHP : false,
                 isMySQL : false },   
                {id : 2,
                 title : '『HiRoShIgE』',
                 text : 'Bing Map上に東海道五十三次の11の宿場がピンで示されており、クリックするとその宿場に関するクイズがだされるwebアプリ<br>(<span class="text-danger">※虫が苦手な方はご注意ください</span>)',
                //  要変更
                 img : require('../assets/hiroshige.png'),
                 url : "http://kichis.sakura.ne.jp/hiroshige_2021/",
                 github : false,
                 isHTML : true,
                 isCSS : true,
                 isJS : true,
                 isJQ : true,
                 isBS : false,
                 isTW : false ,
                 isBingMap : true,
                 isPHP : false,
                 isMySQL : false },
                {id : 3,
                 title : '『あなたと百物語』',
                 text : '怪談を読んだり、投稿したりできるウェブサイト<br>(※ログインアカウントは下記)',
                //  要変更
                 img : require('../assets/a_hundred_horror.png'),
                 url : "http://kichis.sakura.ne.jp/a_hundred_horror/index.php",
                 github : "https://github.com/kichis/a_hundred_horror",
                 isHTML : true,
                 isCSS : true,
                 isJS : true,
                 isJQ : true,
                 isBS : true,
                 isTW : false,
                 isBingMap : false,
                 isPHP : true,
                 isMySQL : true },  
            ],

            othercards : [
                {id : 0,
                 title : '木の葉',
                 text : '',
                 img : require('../assets/leaf.png'),
                },
                {id : 1,
                 title : 'ぬっぺふほふ',
                 text : '『きつねの窓』のために製作した妖怪の一つです',
                 img : require('../assets/nuppe.png'),
                },
            ],

            details :[
                // id:0
                {point : "<p>1. フレームワークを使わずにJavaScriptでSPAを実装</p>"+
                        "<p>2. 回答途中のユーザのイレギュラーな動き(リロード、ブラウザの戻るボタン押下、前の問題に戻る、など)があっても、結果判定の仕組みや表示コンポーネントが崩れないように調整</p>"+
                        "<p>3. スマホ、タブレット、PCへのレスポンシブ対応</p>"+
                        "<p>4. 結果をtwitterに投稿可能</p>",
                 reason : '<p>ここ何年か「転生もの」ジャンルの漫画が人気なので、私が好きな"妖怪"をテーマとした転生診断アプリを作りました。<br>'+
                 'ユーザには「気楽に楽しく」遊んでもらいたいので、ポップな色やイラスト、文章を使用しています。<br>'+
                 'また、SPAのことを調べた際、(フレームワークによって実現するものだと思っていたSPAが)Vanilla JSでも書ける！ということを知って興味が湧き、表示切り替えはVanilla JSでのSPAで実装しています。<br>'+
                 '</p>'
                },
                // id:1
                {point : 
                "<p>1. Tailwindの既定の色の豊富さを活かした、緑を基調とする統一感のあるデザイン<br>"+
                   "2. 正解・不正解のアクションを”お寺”というテーマに合わせたものに</p>",
                 reason : 
                 '<p>仏教は日本の文化や習慣に大きな影響を与えていますが、名前を知っているような有名なお寺であってもどこの宗派かということまでは知らないな、という気付きがあり作成しました。<br>'+
                 'ぜひ、正解・不正解両方のアクションをご覧ください</p>'
                },
                // id:2
                {point : 
                "<p>1. 東海道五十三次の道のりが地形からも感じられるよう、航空写真の地図を採用<br>"+
                   "2. 宿場イメージとして歌川広重の浮世絵を掲載</p>",
                 reason : 
                 '<p>Bing Map APIを使用したアプリを作るにあたり、地図といえば旅、旅といえば東海道、という着想から作成しました。<br>'+
                 '東海道に沿うように、11の宿場は地域的に満遍なくピックアップ。歌川広重の描いた活きいきとした浮世絵を載せることで、ユーザにより宿場の雰囲気を味ってもらえるようになっています。</p>'},
                // id:3
                {point : 
                "<p>1. ユーザが投稿を読んだ恐怖を伝えられる「怖！」ボタン<br>"+
                   "2. 特別ページに遷移する隠しリンク(copyrightsのあたり)<br>"+
                   "3. ブラックリストユーザのログアウト時に起きるドッキリイベント<br>"+
                   "4. 和風ホラーの雰囲気に浸れるデザイン</p>",
                 reason : 
                 '<p>手軽に怖い話を読めたり書けたりしつつ、サイト自体に面白い仕掛けがある怪談ウェブサイトがあるといいな、という考えから作りました。<br>'+
                 'ブラックリストユーザでのログイン＆ログアウトはぜひお試しください！<br>'+
                 'また、管理者用画面では、意図しない編集操作を防止するため、レコードにチェックを入れることでそのレコードが編集可能となるようにしています。</p>'},
                // id:4
                {point : 
                "<p>1. 現実世界のユーザの動き(歩数)に連動してゲームが進むシステム<br>"+
                   "2. マイナーな妖怪も登場<br>"+
                   "3. 妖怪の詳しい説明が読める図鑑付き<br>"+
                   "4. 自作の妖怪３D</p>",
                 reason : 
                 '<p>ARの”現実世界にバーチャルなものが映し出されるワクワク感”にハマり、ARアプリに挑戦しました。<br>'+
                 'アプリの内容は、iPhoneで計測した歩数に応じて、日本地図上に道が伸びていき、その道が特定のポイントに到達すると妖怪が出現、ARで呼び出せるようになる、というものです。<br>'+
                 'ユーザが日本のどこに住んでいてもに身近に感じてもらえるよう、地図に伸びる道は、なるべく多くの地域を巡るようにしています。<br>'+
                 '出現させるオブジェクトを妖怪にしたのは、ARの"現実とバーチャルが重なる"という特性が妖怪の存在感とマッチすることが一つ、<br>'+
                 'もう一つは、妖怪には地域性のあるものもいるため、”日本全国を巡る”という仕様に合わせ、出現地に関係のあるものを選ぶことができるからです。<br>'+
                 'また、あまり知られていないようなマイナーな妖怪も加え、”新たなモノに出会う”楽しさをより感じられるようにしました。</p>'
                },
            ]

        }
    },
    
    methods:{
        showDetail($event, id){
            this.detailTop = getPositionOfPage($event, "top")
            let horizontalDirect = (id == 4) ? "left" : "right"
            this.detailLeft = getPositionOfPage($event, horizontalDirect)         
            this.pointText = this.details[id].point
            this.reasonText = this.details[id].reason
            this.detailDisplay = "block"
        },
        hideDetail(){
            this.detailDisplay = "none"
        }
    }
}
</script>