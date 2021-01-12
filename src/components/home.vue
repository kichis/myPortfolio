<template>
    <div class="container">
        <div class="row">
            
            <div class="container col-8">
               <h1>Portfolio of Kichishima Naho</h1>

                <fieldset id="myNewsField" class="col">
                        <legend>自分news</legend>
                        <a href="#">基本情報技術者試験の勉強はじめました</a>
                </fieldset>

                <div id="homeCarouselControls" class="carousel slide">
                <!-- オートトランジションをつけるなら data-ride="carousel"> -->
                    <div class="carousel-inner">
                        <div class="bg-warning carousel-item active">
                            <p>one</p>
                        </div>
                        <div class="bg-danger carousel-item">
                            <p>Two</p>
                        </div>
                        <div class="bg-primary carousel-item">
                            <p>three</p>
                        </div>
                    </div>

                    <ol class="carousel-indicators">
                        <li data-target="#homeCarouselControls" data-slide-to="0" class="active"></li>
                        <li data-target="#homeCarouselControls" data-slide-to="1"></li>
                        <li data-target="#homeCarouselControls" data-slide-to="2"></li>
                    </ol>

                    <a class="carousel-control-prev text-dark" href="#homeCarouselControls" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#homeCarouselControls" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
            
            <div class="col-3">
                <img  src="../assets/logo.png" alt="my image">
            </div>
</div>
    </div>
</template>

<style>
#myNewsField{
    border: 1px solid black;
}

/* #myImage{
    float: right;
} */

#carouselExampleControls{
    color: black;
}

.carousel-control-next-icon,
.carousel-control-prev-icon {
  filter: invert(1);
}
</style>