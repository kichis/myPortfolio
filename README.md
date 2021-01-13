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