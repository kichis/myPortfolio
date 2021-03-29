# portfolio

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


####version info.

node v14.15.3 npm 6.14.9

v３はUI構築ライブラリに未対応だったのでbootstrapで頑張る

historyAPIのSPAはサーバ側で処理が必要

vuex:状態管理（データ）を助けるライブラリ。コンポーネントを超えて、 導入した方が良い場合：アプリ全体でデータを共有したい、そのデータを加工したい、データの流れがきれいになる？（変更履歴が可視化される？） 導入しなくても良い場合：コンポーネント内だけでデータを扱う

シンプルなルーティングのため、vue-routerを使わない方法（公式ドキュメント記載のシンプルなルーティング）を検討したが、 動かず。（エディタ上はグリーン、consoleエラー） ・記載箇所が間違っている ・Vueインスタンスの生成方法にからみ、コードを"Vue"->"createApp"に変更した のがまずかったのか？ このエラーに関連して、render関数について調べる。なんとなく関数が処理している内容は理解。

https://www.vuemastery.com/blog/vue-router-a-tutorial-for-vue-3/
createWebHistory():ブラウザのルーティング設定？をHashからHistoryAPIに変更する（<-ここがv2とちがうらしい）

routerに使用している、src/router/index.js内のパスは最初に＠をつけなくてはいけないようだ

Vueコンポーネント内のJS実装から遷移する場合は this.$router.push('/'); のように書く
URLのパラメーターはVueコンポーネント側ではpropsで受け取れる

 Internet Explorer 9以前では、カルーセルはサポートされていません

 vue.jsとjQueryは共存させない方が良い

## 学んだこと
__Vue.js__
- vue cli webpackを使っている場合、  
  imgタグsrcにベタ打ちした画像パスはbase64でエンコードして出力される。  
  v-bindを使うと、base64エンコードではなくそのままの文字列が出力されるので、画像は表示されない。
  -> require(画像パス) とする  
  (これはベタ打ちの場合に、裏側でなされている処理と同じ)  
  (○)画像が見つからなかった場合、エラーになる

- {{ プロパティ名 }} : vueのdataプロパティを出力
- v-for="ele in eles" :key="ele"  
 : 同一のフォームに、一定種類のデータをあるだけ描画
- v-on:イベント="関数(引数)" : イベントハンドラ
- v-bind : 属性にvue変数を出力するとき
- v-if : vue変数のbool値で要素を描画する/しない
- v-html : dataプロパティ内にHTMLタグがあれば、HTMLタグとして変換して出力

- 「scriptタグの中はJSの世界、export defaultの中はVueの世界」
- export default外のJS変数をexport default内で使う場合は、data()で宣言？する  
  プロパティ名 : JS変数名

  memo

- いろんなAPI
- test code