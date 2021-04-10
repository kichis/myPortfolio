<template>
    <div id="works_container">
        <h2 class="page_title">Works</h2>
        <h6 class="text-muted">画像にカーソルをあわせると説明が表示されます</h6>

        
        <div class="row mt-5">

            <div id="web_area" class="col-8 rounded px-0 pt-3">
                <h4>WebApps</h4>
                <div class="row justify-content-around">
                    <!-- cardフォーマット start -->
                    <div 
                        :ref="webcard.name" 
                        class="card col-8 col-md-6 col-lg-5 col-xl-4 mx-1 my-5 p-0" 
                        style="width: 18rem;" 
                        v-for="(webcard, index) in webcards" :key="webcard" 
                        v-on:mouseover="showDetail($event, index)" 
                        v-on:mouseout="hideDetail"
                    >
                        <img 
                            :src="webcard.img" 
                            :alt="webcard.tittle" 
                            class="bd-placeholder-img card-img-top border-bottom m-0" 
                            width="100%" height="250"
                        >
                        
                        <div class="card-body">
                            <h5 class="card-title">{{ webcard.title }}</h5>
                            <p class="card-text text-left"><span v-html="webcard.text"></span></p>
                            <!-- 使用技術エリア -->
                            <div class="py-2">
                                <template v-if="webcard.techs.includes('html')">
                                    <img src="../assets/HTML5_Logo_128.png" alt="HTML5" width="40" height="40">
                                </template>
                                <template v-if="webcard.techs.includes('css')">
                                    <img src="../assets/CSS3_logo_and_wordmark.png" alt="CSS3" width="30" height="40">
                                </template>
                                <template v-if="webcard.techs.includes('js')">
                                    <img src="../assets/javascript_logo.png" alt="JavaScript" width="33" height="32" class="mt-2 mx-1">
                                </template>                        
                                <template v-if="webcard.techs.includes('jq')">
                                    <img src="../assets/jquery-logo-001.png" alt="jQuery" width="55" height="40" class="pt-2 mr-1">
                                </template>                        
                                <template v-if="webcard.techs.includes('bs')">
                                    <img src="../assets/bootstrap-purplebase.svg" alt="Bootstrap" width="30" height="30" class="mt-2 mr-1">
                                </template>
                                <template v-if="webcard.techs.includes('tw')">
                                    <img src="../assets/tailwindcss-mark.cb8046c163f77190406dfbf4dec89848.svg" alt="Tailwind" width="32" height="32" class="mt-2 mr-1 border">
                                </template>
                                <template v-if="webcard.techs.includes('bingMap')">
                                    <img src="https://mapsforenterprise.binginternal.com/wp-content/uploads/2020/03/bing-maps-logo-small.png" alt="Bing Map" width="85" height="20" class="mt-2">
                                </template>
                                <template v-if="webcard.techs.includes('php')">
                                    <img src="https://www.php.net/images/logos/new-php-logo.svg" alt="PHP" width="50" height="45" class="mt-2">
                                </template>
                                <template v-if="webcard.techs.includes('mysql')">
                                    <img src="https://www.mysql.com/common/logos/logo-mysql-170x115.png" alt="mySQL" width="65" height="40" class="mt-1">
                                </template>
                            </div>
                            
                            <div class="d-flex justify-content-around pt-2">
                                <a :href="webcard.url" class="btn linkToApp" target="_blank">
                                    アプリ &nbsp;<i class="fas fa-external-link-alt"></i>
                                </a>
                                <template v-if="webcard.github">
                                    <a :href="webcard.github" class="btn btn-dark" target="_blank">
                                        GitHub &nbsp;<i class="fas fa-external-link-alt"></i>
                                    </a>
                                </template>
                            </div>
                        </div>
                    </div>
                    <!-- cardフォーマット end -->
                </div>

                <div class="d-inline-block my-4">
                    <h6 id="login_text"><b>『あなたと百物語』ログイン用アカウント</b></h6>
                    <table class="table table-borderless table-md">
                        <thead class="border-top">
                            <tr>
                                <th></th>
                                <th>email</th>
                                <th>パスワード</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="text-right">管理者</td>
                                <td class="text-left">admin_user@ghost.com</td>
                                <td>adminuser</td>
                            </tr>
                            <tr>
                                <td class="text-right">通常ユーザ</td>
                                <td class="text-left">test_user@ghost.com</td>
                                <td>testuser</td>
                            </tr>
                            <tr>
                                <td class="text-right">ブラックリストユーザ</td>
                                <td class="text-left">blacklisted@ghost.com</td>
                                <td>blacklisted</td>
                            </tr>                    
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- AR & blender area -->
            <div class="col-4 px-0 pt-3">
                <h4>AR & blender</h4>
                <div class="row justify-content-around">

                    <!-- ARcard start -->
                    <div class="card col-11 col-lg-10 col-xl-8 mt-5 px-0" 
                        style="width: 18rem;"
                        v-for="ARcard in ARcards" :key="ARcard"
                        v-on:mouseover="showDetail($event, ARcard.detailId)" 
                        v-on:mouseout="hideDetail"
                    >
                        <video :src="ARcard.img" controls height="250" class="pb-4"></video>

                        <div class="card-body">
                            <h5 class="card-title">{{ ARcard.title }}</h5>
                            <p class="card-text text-left"><span v-html="ARcard.text"></span></p>
                            <!-- 使用技術エリア -->
                            <div class="py-2">
                                <template v-if="ARcard.techs.includes('unity')">
                                    <img src="../assets/unity-tab-square-black.png" alt="unity" width="35" height="35" class="mr-1">
                                </template>
                                <template v-if="ARcard.techs.includes('vuforia')">
                                    <img src="../assets/vuforia.jpg" alt="vuforia" width="50" height="35" class="mr-1">
                                </template>
                                <template v-if="ARcard.techs.includes('blender')">
                                    <img src="https://download.blender.org/branding/blender_logo.png" alt="blender" width="110" height="30" class="mr-1">
                                </template>
                                <template v-if="ARcard.techs.includes('c#')">
                                    <img src="../assets/csharp.png" alt="csharp" width="35" height="35">
                                </template>
                            </div>
                            <div class="d-flex justify-content-around pt-2">
                                <a :href="ARcard.url" class="btn linkToApp" target="_blank">
                                    デモ動画 &nbsp;<i class="fas fa-external-link-alt"></i>
                                </a>
                                <template v-if="ARcard.github">
                                    <a :href="ARcard.github" class="btn btn-dark" target="_blank">
                                        GitHub &nbsp;<i class="fas fa-external-link-alt"></i>
                                    </a>
                                </template>
                            </div>
                        </div>
                    </div>
                    <!-- ARcard end -->

                    <!-- othercard start -->
                    <div class="card col-11 col-lg-10 col-xl-8 mt-5 px-0" 
                        style="width: 18rem;" 
                        v-for="othercard in othercards" :key="othercard" 
                    >
                        <img 
                            :src="othercard.img" 
                            alt="{{ othercard.title }}" 
                            class="bd-placeholder-img card-img-top border-bottom m-0" 
                            width="100%" height="250"
                        >
                        <div class="card-body">
                            <h5 class="card-title">{{ othercard.title }}</h5>
                            <p class="card-text"><span v-html="othercard.text"></span></p>
                            <img src="https://download.blender.org/branding/blender_logo.png" alt="blender" width="120" height="35">
                        </div>
                    </div>
                    <!-- othercard end -->

                </div>
            </div>

            <div id="detail_area"
                class="text-left"
                :style="{ display : detailDisplay, top : detailTop, left : detailLeft }"
            >
                <h6 id="point_title" class="my-3 ml-3"><b>Points</b></h6>
                <ol class="mb-3 ml-0 mr-2">
                    <span v-html="pointText"></span>
                </ol>
                <hr class="text-dark" width="90%">
                <p id="deteil_text" class="m-3 my-4">
                    <span v-html="reasonText"></span>
                </p>
            </div>
        </div>

    </div>
</template>



<script>
export default {
    data(){
        return{
            hash: this.$route.hash,
            detailId : 0,
            eObject : null,
            detailDisplay : "none",
            webcards :[
                {name: 'reincarnation',
                 title : '『転生したら〇〇〇〇だった件』',
                 text : '"あなたが転生したらどんな妖怪になるか"を判定してくれるwebアプリ',
                 img : require('../assets/reincarnation.png'),
                 url : "http://kichis.sakura.ne.jp/reincarnation_which_yohkai",
                 github : "https://github.com/kichis/reincarnation_which_yohkai",
                 techs: ['html', 'css', 'js', 'jq', 'bs'],
                },
                {name : 'daihonzan',
                 title : '『大本山Learning』',
                 text : 'お寺の位置がBing Map上に示されており、クリックするとどの宗派のお寺かを問うクイズが出現するwebアプリ<br>(<span class="text-danger">※正否判定時に音がでます</span>)',
                 img : require('../assets/daihonzan3.png'),
                 url : "http://kichis.sakura.ne.jp/daihonzan_learning/",
                 github : false,
                 techs: ['html', 'css', 'js', 'tw', 'bingMap'],
                },   
                {name : 'hiroshige',
                 title : '『HiRoShIgE』',
                 text : '東海道五十三次のうち11の宿場がBing Map上に示されており、クリックするとその宿場に関するクイズが出現するwebアプリ<br>(<span class="text-danger">※虫が苦手な方はご注意ください</span>)',
                 img : require('../assets/hiroshige.png'),
                 url : "http://kichis.sakura.ne.jp/hiroshige_2021/",
                 github : false,
                 techs: ['html', 'css', 'js', 'jq', 'bingMap'],
                },
                {name : 'hundred_horror',
                 title : '『あなたと百物語』',
                 text : '怪談を読んだり、投稿したりできるウェブサイト<br>(※ログインアカウントは下記)',
                 img : require('../assets/a_hundred_horror.png'),
                 url : "http://kichis.sakura.ne.jp/a_hundred_horror/index.php",
                 github : "https://github.com/kichis/a_hundred_horror",
                 techs: ['html', 'css', 'js', 'jq', 'bs', 'php', 'mysql'],
                },  
            ],
            ARcards : [
                {name : 'kitsune_no_mado',
                 title : '『きつねの窓』',
                 text : 'iPhoneの歩数計測機能と妖怪が出現するARを組み合わせたアプリ。<br>(上の埋め込み動画が再生できなければ、デモ動画ボタンでも同じ動画が見れます)',
                 img : require('../assets/kitsune_moviex2.mp4'),
                 url : 'https://drive.google.com/file/d/1tz7HEZsOyYyCQqSy4WSpRNlmsgip-Vf_/view?usp=sharing',
                 github : false,
                 techs: ['unity', 'vuforia', 'blender', 'c#'],
                 detailId : 4,
                }, 
            ],
            othercards : [
                {title : '木の葉',
                 text : '',
                 img : require('../assets/leaf.png'),
                },
                {title : 'ぬっぺふほふ',
                 text : '『きつねの窓』のために製作した妖怪の一つです',
                 img : require('../assets/nuppe.png'),
                },
            ],
            details :[
                // id:0
                {point : "<li>フレームワークを使わずJavaScriptでSPAを実装</li>"+
                        "<li>回答途中のユーザのイレギュラーな動き(リロード、ブラウザの戻るボタン押下、など)を想定し、結果判定や表示コンポーネントが崩れないように調整</li>"+
                        "<li>スマホ、タブレット、PCへのレスポンシブ対応</li>"+
                        "<li>判定結果をTwitterに投稿可能</li>",
                 reason : '最近、「異世界転生」系の漫画をよく見かけるので、私が好きな"妖怪"をテーマとして転生診断アプリを作りました。<br>'+
                 'ユーザには"気楽に楽しく"遊んでもらいたいので、ポップな色やイラスト・文章にしています。<br>'+
                 'また、SPAについて、(フレームワークによって実現するものだと思っていたが)ノーマルなJavaScriptでも書けるということを知って興味が湧き、'+
                 'ノーマルなJSによるSPAで表示切り替えを実装しました。'
                },
                // id:1
                {point : 
                 "<li>Tailwindで用意されている色の豊富さを活かした、統一感のあるカラーリング</li>"+
                 "<li>”お寺”というテーマに合わせた正解・不正解のアクション</li>",
                 reason : 
                 '名前は知っているような有名なお寺であっても、どこの宗派かということまでは知らないな、という気付きがあり作成しました。<br>'+
                 '"お寺"というテーマに合うよう、落ち着き・癒しを感じられる緑をテーマカラーとし、部分によって濃淡をつけています。<br>'+
                 '正否判定時のアクションも"お寺"に合わせたものになっていますので、ぜひ正解・不正解の両方をお試しください。'
                },
                // id:2
                {point : 
                 "<li>東海道五十三次の道のりが地形からも感じられる航空写真の地図</li>"+
                 "<li>宿場イメージは歌川広重の浮世絵</li>",
                 reason : 
                 'Bing Map APIを使用してアプリを作るにあたり、地図といえば旅、旅といえば東海道、という着想から作成しました。<br>'+
                 '11の宿場は、東海道に沿うよう、地域的に満遍なくピックアップ。地図表示は航空写真をデフォルトにしているので、昔の旅人がどのあたりで山を越え、川を渡ったのかを地形から追うことができます。<br>'+
                 'さらに、宿場の人々の活き活きとした様子が描かれた浮世絵も表示されるので、より宿場の雰囲気を味わえるようになっています。'},
                // id:3
                {point : 
                 "<li>投稿を読んで感じた恐怖を伝えられる「怖！」ボタン</li>"+
                 "<li>特別ページに遷移する隠しリンク(copyrightsのあたり)</li>"+
                 "<li>ブラックリストユーザのログアウト時に起きるドッキリイベント</li>"+
                 "<li>ホラーの雰囲気に浸れるデザイン</li>",
                 reason : 
                 '気軽に怖い話を読んだり投稿したりできて、サイト自体に面白い仕掛けがある怪談ウェブサイトがあるといいな、と思い作りました。<br>'+
                 'ブラックリストユーザでのログイン＆ログアウトはぜひお試しください！<br>'+
                 'また、管理者用画面では、意図しない編集操作を防止するため、レコードにチェックを入れることでそのレコードが編集可能となる仕様にしています。'},
                // id:4
                {point : 
                   "<li>ユーザの歩数に応じてゲームが進む</li>"+
                   "<li>マイナーな妖怪も出現</li>"+
                   "<li>妖怪３Dは自作</li>"+
                   "<li>妖怪の詳しい説明が読める図鑑付き</li>"
                   ,
                 reason : 
                 'ARの"現実世界にバーチャルなものが映し出されるワクワク感"にハマり、ARアプリに挑戦しました。<br>'+
                 'アプリの内容は、iPhoneで計測した歩数に応じて日本地図上に道が伸びていき、その道が特定のポイントに到達すると妖怪が出現、ARで呼び出せるようになる、というものです。<br>'+
                 'ユーザが日本のどの地域に住んでいてもに身近に感じてもらえるよう、地図上の道は、なるべく多くの地域を巡るルートにしています。<br>'+
                 '出現する妖怪はなるべく出現地に関係のあるものを選び、'+
                 'また、あまり知られていないようなマイナーな妖怪も取り入れ、"新たなモノに出会う"楽しさをより感じてもらえるようにしました。<br>'+
                 '初めて挑戦することが多く、製作は大変でしたが、"自分で調べて実装する"という作業を積み上げてものを作ることの楽しさを実感できました。'
                },
            ]
        }
    },
    mounted() {
        this.$nextTick(function () { // DOMの読み込み完了時に実行
            if (this.hash) {
                const refName = this.hash.replace('#', '')
                this.scrollToAnchorPoint(refName)
            }
        })
    },
    methods:{
        scrollToAnchorPoint(refName) {
            const el = this.$refs[refName]
            el.scrollIntoView({ behavior: 'smooth' })
        },
        showDetail($event, id){
            this.detailId = id
            this.eObject = $event
            this.detailDisplay = "block"
        },
        hideDetail(){
            this.detailDisplay = "none"
        },
        getPositionOfPage(eObject, direction){
            let result
            switch(direction){
                case "top":
                    // ページ上端 ~ 対象カード上端 までの距離 を返す
                    result = eObject.target.closest(".card").getBoundingClientRect().top + window.pageYOffset;
                    break;
                case "right":
                    // ページ左端 ~ 対象カード右端 までの距離 を返す
                    result = eObject.target.closest(".card").getBoundingClientRect().right + window.pageXOffset + 50
                    break;
                case "left":
                    // ページ左端 ~ 対象カード左端 までの距離 - 450(#detail_areaのwidth分+間隔) を返す
                    result = eObject.target.closest(".card").getBoundingClientRect().left + window.pageXOffset - 500
                    break;
                default:
                    break;
            }
            return this.add_px(result)
        },
        add_px(val){
            return val + "px";
        }
    },
    computed:{
        detailTop(){
            return (this.eObject != null) ? this.getPositionOfPage(this.eObject, "top") : null
        },
        detailLeft(){
            if(this.eObject != null){
                // ARcardの場合のみ、左側に表示
                let horizontalDirect = (this.detailId == 4) ? "left" : "right"
                return this.getPositionOfPage(this.eObject, horizontalDirect)
            }else{
                return null
            }
        },
        pointText(){
            return this.details[this.detailId].point
        },
        reasonText(){
            return this.details[this.detailId].reason
        }
    },
}
</script>

<style scoped>
#works_container{
    margin: auto 5%;
}

#web_area{
    background-color: rgba(232, 232, 232, 0.193);
    /* clip-path: polygon(0% 1%, 1% 0%, 99% 0%, 100% 1%, 100% 99%, 99% 100%, 1% 100%, 0% 99%) */
}

.linkToApp{
    border: 3px outset #bb8d5f;
    color:  #bb8d5f;
}

#login_text{
    color: #bb8d5f;
}

#detail_area{
    width: 40%;
    /* color: #303030; */
    color: white;
    /* background-color: rgba(211, 210, 210, 0.97); */
    background-color: #bb8d5ff5;
    border: 2px dotted #bb8d5f;
    border-radius: 7px;
    position: absolute;
    z-index: 10;
}
@media (min-width: 1000px) {
    #detail_area{
        width: 30%;
    }
}
@media (min-width: 1300px) {
    #detail_area{
        width: 450px;
    }
}

#point_title{
    text-shadow:1px 0 0 black
}

#deteil_text{
    color: black;
}
</style>