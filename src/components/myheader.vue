<template>
  <nav id="navbar" class="navbar navbar-expand-lg navbar-dark bg-dark">
    <!-- <a class="navbar-brand" href="#">Navbar</a> -->
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto">
        <!-- ※ポイント :active -->
        <li class="nav-item active">
          <a class="nav-link" href="#home">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#aboutme">AboutMe</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Skills</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Works</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact & SNS</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </li>
        <!-- <li class="nav-item">
          <a class="nav-link disabled" href="#">Disabled</a>
        </li> -->
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        <button id="search" class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </nav>
</template>

<style>
#navbar{
  /* マスタード？ */
  /* background-color: #ffcc40; */
  /* オレンジ */
  /* background-color: #Fd7e00; */
  /* マリーゴールド */
  /* background-color: #F79428; */
  /* パンプキン */
  /* background-color: #e5a323;    */
  /* ゴールデンイエロー */
  /* background-color: #f4a800;    */
  /* キャメル */
  /* background-color: #bb8d5f; */
  /* コーヒーブラウン */
  /* background-color: #7d4a31; */
}
.nav-link{
  /* color: #ffcc40; */

}
#search{
  /* ディープブルー  */
  /* background-color: #132c6f; */

  /* ラベンダーみたいな色 */
  /* background-color: rgba(59, 59, 250, 0.767); */
}
</style>