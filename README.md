# portfolio
2021.04 

## 使用技術
<img src="src/assets/HTML5_Logo_128.png" width="100" title="HTML5"><img src="src/assets/CSS3_logo_and_wordmark.png" width="71" title="CSS3">
<img src="src/assets/bootstrap-purplebase.svg" width="80" title="Bootstrap">
<img src="src/assets/javascript_logo.png" width="72" height="80" title="JavaScript">
<img src="src/assets/logo.png" width="85" title="Vue">
- Bootstrap 4.3.1
- Vue.js 3.0.5
- node 14.15.3
- npm 6.14.9

## 方針
- UI構築ライブラリがVue３未対応だったのでUIはBootstrapで構築する。

---
---
以下、個人的メモ

---
---

## 学んだこと
##### Vue.js
- HTMLへの出力: {{ プロパティ名 }}
- 
- 通常のJSのDOM取得方法(idやclassによる方法)は使えないし、あまり使う必要がないが、使いたい場合は、el(templeteのルート要素を取得)やref(個別に要素を取得)を使用する。
- _.debounce/_.throttle(lodash関数)などで、どのくらいの頻度で処理をすべきかを設定することができる。  
  負荷の高い処理などに使う。
- DOMの取得方法  
  DOM : `ref="pages"`  
  script : 
  `mounted() {
        const targetElement = this.$refs.pages
        this.pages = targetElement
   },`
- jQueryの書き方  
  `import jQuery from 'jquery'
   global.jquery = jQuery
   global.$ = jQuery
   window.$ = window.jQuery = require('jquery')
   export default {
     mounted:function(){
       jQuery(function ($) {
         ここにjQueryの処理を書く
       });
     }
   }`
- router-linkでのサイト内リンクは、"hashの取得"、"hashの要素へのスクロール処理"が必要
vuex:状態管理（データ）を助けるライブラリ。コンポーネントを超えて、 導入した方が良い場合：アプリ全体でデータを共有したい、そのデータを加工したい、データの流れがきれいになる？（変更履歴が可視化される？） 導入しなくても良い場合：コンポーネント内だけでデータを扱う
Vueコンポーネント内のJS実装から遷移する場合は this.$router.push('/'); のように書く
URLのパラメーターはVueコンポーネント側ではpropsで受け取れる

__第一階層のディレクトリの役割(雑に)__
- dist : デフォルトの公開ディレクトリ(index.htmlがあるフォルダ)
- node_modules : npmで入れた便利機能たちが入っている(don't touch!)
- public : ビルド後のファイル?
- src : 製作者が作成したファイル、データを置く場所

__v- ディレクティブ__
- `v-for="ele(, index) in eles"  :key="ele.id"(idでなくても区別できればok)`  
  : 同一のフォームに、同種類のデータをあるだけ描画。  
   keyは、一部の要素が削除された場合などにも、DOMに配置されているデータとindex#の引き当てができるようにするためのもの。  
- `v-on:イベント="関数(引数)"` or `@:イベント`  
  : イベントハンドラ。  
  - イベントオブジェクトを使用する場合 : `v-on:イベント="関数()"` /  `関数(event){}`  
  - イベントオブジェクトを使用する場合(引数あり) : `v-on:イベント="関数($event, 引数)"` /  `関数($event, 引数){}`  
  イベント修飾子 : イベントの細かい設定をする (この他に、キーやマウスの操作を設定する修飾子もある。)  
- v-bind  
  : HTML属性にdataプロパティを出力する。  
  (インラインに全て記述せず、オブジェクト・配列・三項演算子などの形式で、dataプロパティやcomputedに記述することも可能。)  
  - class : class名に対応して与えたdataプロパティの __真偽値__ によって、そのclassを適用するか決まる。 
  - style : style名に対して、値を与える。style名は、キャメルケースorケバブケース。 
  - imgタグsrcの記述 (vue cli webpackを使っている場合) :  
    1. src属性にベタ打ち -> 画像パスはbase64でエンコードして出力される  
    2. v-bind使用 -> base64エンコードではなくそのままの文字列が出力される = 画像が表示されない  
       => dataプロパティ内の記述を、 __`require(画像パス)`__ とする (= これはベタ打ちの場合に裏側でなされている処理と同じ)  
          \[g]該当画像ファイルがない場合、エラーになる
  
- v-if : 与えた式の真偽で要素を描画する/しない
- v-html : dataプロパティ内にHTMLタグがあれば、HTMLタグとして変換して出力
- v-model : formタグ関係の双方向データバインディング


__export default内__
- dataプロパティの配列に代入する時は、x[0] = "hoge"でなく、x.splice(0, 1, "hoge")とする。(さもなくば、リアクティブな動作にならない)
- 「scriptタグの中はJSの世界、export defaultの中はVueの世界」
- export default外のJS変数をexport default内で使う場合は、dataプロパティとして宣言？する。  
  プロパティ名 : JS変数名
- mothods : 関数。再描画が起きるたびに"常に"関数を実行する。  
- computed : 依存関係にあるリアクティブなデータが変化した時に"だけ"、自動で算出される。  
  (= データが変化しないタイミングでアクセスしても以前の算出結果を返すだけ)
  methodsでは問題ない記述でも、computedではエラーになる場合がある = unexpected side effect (予想外のdataプロパティを変更しようとするとこれになるようだ)
- watch(監視するリアクティブ変数, 関数(newValue, oldValue))
  非同期処理、処理間隔の設定、中間状態の設置はwatchのみで、computedにはできない。
- filters : dataプロパティの値が出力される前に加工する。  
コンポーネントを問わないグローバルの書き方と、記述したコンポーネントに限られるローカルの書き方がある  
=> Vue3で廃止！！
- transition : DOMの"生成・消滅に伴って"アニメーションを付けられる機能。要素が複数個ある場合は、transition-group。

__Composition API__
[参照](https://qiita.com/azukiazusa/items/1a7e5849a04c22951e97)
- TypeScriptのサポート
- ロジックの再利用の難しさ
- アプリケーションが巨大になると、コードの把握が難しくなる
ver2までのVueが抱えていた、これらの問題を解決する。  

`<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>`

- data => reactive(オブジェクトとして宣言、参照) / ref(単一の変数として宣言できる、templete以外から参照する時は".value"を付ける) : リアクティブなデータを格納する２形態
- components・props => 以前と同じ
- date・methods・computed・ライフサイクルメソッド => 全てsetupメソッドの中に記述、templete内で使うものだけreturn  
  (○)"this"が不要になった = アロー関数が使える  
  (○)returnで使用できる値を明示することで、データのアクセス方法を
    - methods => JSの関数と同じ
    - computed => computed()で囲む
- __関数をどこのコンポーネントでも利用可能な形に切り分けできる__

__Vue3から追加された機能__
- templete直下の要素が複数でも可
- teleportタグ : このタグで囲んだコンポーネントを、toで指定した場所に動的にレンダリングできる
- filterプロパティ 廃止


__その他__
- Homeのカルーセルに関しては、[こちら](https://zenn.dev/kazuwombat/articles/fea3428a0b888c8fb3ac)を参照させてもらいました。(ありがとうございます！)

__JS__
- `element.closest(".card")` // elementの祖先要素のうち、class="card"のものを探す
- `element.getBoundingClientRect()` // elementの「ビューポート(画面内)」における位置を取得
- `element.getBoundingClientRect().top` // 画面の上端から、要素の上端までの距離
- `element.getBoundingClientRect().top + window.pageYOffset` // 「ページ全体」における位置を取得
- noop : 空の関数。 = no operation = function(){}

__CSS__
- clip-path : 要素の表示をくり抜く(orマスクする)ことができる
- transform : 変形
- transition : 変化の仕方
- 他、アニメーションするには、@keyframesやanimationなど。

__other__
- エイリアス(alias) : 別名、ショートカット 
- 相対パスより絶対パス - 記述ファイルの設置場所を変えても有効だから。
- パスの＠/ = src/  
  : webpackのコンフィグレーションオプションとして、webpack.config.jsのresolveにエイリアスとして登録されている。Vueに限らない。(パスの中で".vue"拡張子が不要なのも、このオプションによるものらしい。[出典](https://stackoverflow.com/questions/42749973/es6-import-using-at-sign-in-path-in-a-vue-js-project-using-webpack))

__vs code__

option + comm + 上下 : 複数行選択
option + <- / -> : 区切りまで
- 慣れてないからか、どことどこがバインドされているのか追いきれず、思いがけないところで繋がっていたりする。田舎の人間関係みたいだ。

- いろんなAPI
- test code
- オブジェクト指向のマスター(わかりやすい、汎用性のあるコーディング)
検索機能(user/tag)
処理完了後のコメント表示
NGワードを含む投稿の規制
home.php 新しい記事に"new!"をつける
home.php 各投稿のコメント数も表示
コメントをコメントの投稿者が削除できるようにする
edit_users.php バリデーションに引っ掛かった場合、入力した情報が再度表示される
ボタンの押下回数でイベントが起きる（サイトも文字フォントが変わるとか、悲鳴、怖い画像）
オブジェクト指向を活用したコーディング
処理完了後のコメント表示
やってみたいこと
ソルトを使ったpassw保存や、ブラウザ側でハッシュ化するpassw保存方法

v-on : eventを使う時、
- event用のdataプロパティを作成し、method内でそのプロパティに代入する
eventだけであれば、function(event)
他の引数もあればfunction($event, 他の引数)

## 反省
- [good] Vue3に挑戦した事で、製作しながらVue2からの変更点を知ることができた。
- [bad] 下調べ不足：UI構築ライブラリがVue3に対応していないことを製作を始めてから知った。
- [b] Vue3の特徴の一つである、compositionAPIを活かしきれなかった。
  ("interfaceの箇所について、適切なloaderを入れよ"、とのエラーが解決できなかったため)
