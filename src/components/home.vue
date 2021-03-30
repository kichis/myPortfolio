<template>
    <!--  -->
    <div class="container">
        <div class="row">
            <!--  -->
            <div id="main_area" class="col-9">
                <h1 class="h-25">Portfolio of Kichishima Naho</h1>

                <fieldset id="myNewsField" class="h-25">
                        <!-- todo: legendの位置を左寄りにしたい -->
                        <legend class="w-25">自分news</legend>
                        <!-- 自分newsを設置するか（需要ある？その時々で変わっていく情報の修正が面倒）、文言はこれでいいか？ -->
                        <p>Linuxの本を読み始めました</p>
                </fieldset>

            </div>
            
            <div class="col-3 bg-success">
                <img  src="../assets/logo.png" alt="my image">
            </div>

        </div>

        <carousel></carousel>

    </div>

                    <div class="row mx-auto my-auto h-50">
                    <div id="homeCarouselControls" class="carousel slide" data-ride="carousel">
                    <!-- オートトランジションをつけるなら data-ride="carousel"> -->
                        <div class="carousel-inner" role="listbox">
                            <div class="carousel-item active justify-content-around bg-danger">

                                    <!-- <a href="" class="carouselContent bg-secondary">one</a> -->
                                
                            </div>
                            <div class="carousel-item justify-content-around bg-warning">
                                <div class="card col-lg-3 col-md-3 p-0">
                                    <img src="../assets/daihonzan3.png" alt="" class="bd-placeholder-img bd-placeholder-img-lg card-img" width="100%" height="200">
                                    <!-- あああああ
                                    <a href="" class="carouselContent col-lg-2 col-md-3  bg-success">two</a> -->
                                </div>
                                
                            </div>
                            <div class="carousel-item justify-content-around bg-primary">
                                <div class="card col-lg-3 col-md-3 p-0">
                                    <img src="../assets/hiroshige.png" alt="" class="bd-placeholder-img bd-placeholder-img-lg card-img" width="100%" height="200">
                                    <!-- <a href="" class="carouselContent col-lg-2 col-md-3 bg-dark">three</a> -->
                                </div>
                            </div>

                            <div class="carousel-item justify-content-around bg-success">
                                <div class="card col-lg-3 col-md-3 p-0">
                                    <img src="../assets/a_hundred_horror.png" alt="" class="bd-placeholder-img bd-placeholder-img-lg card-img" width="100%" height="200">
                                    <!-- <a href="" class="carouselContent col-lg-2 col-md-3 bg-dark">four</a> -->
                                </div>
                            </div>
                        </div>

                        <ol class="carousel-indicators bg-dark">
                            <li data-target="#homeCarouselControls" data-slide-to="0" class="active"></li>
                            <li data-target="#homeCarouselControls" data-slide-to="1"></li>
                            <li data-target="#homeCarouselControls" data-slide-to="2"></li>
                            <li data-target="#homeCarouselControls" data-slide-to="3"></li>
                        </ol>

                        <a class="carousel-control-prev ml-n3" href="#homeCarouselControls" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next mr-n3" href="#homeCarouselControls" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>
</template>

<style>
#main_area{
    height: 50vh;
}

legend{
    /* margin-right: 200px; */
}

#myNewsField{
    border: 1px solid black;
}

/* #myImage{
    float: right;
} */

/* コントローラー矢印を白から黒に変更 */
.carousel-control-next-icon,
.carousel-control-prev-icon {
  filter: invert(1);
}

@media (max-width: 768px) {
    .carousel-inner .carousel-item > div {
        display: none;
    }
    .carousel-inner .carousel-item > div:first-child {
        display: block;
    }
}

.carousel-inner .carousel-item.active,
.carousel-inner .carousel-item-next,
.carousel-inner .carousel-item-prev {
    display: flex;
}

/* medium - display 4  */
@media (min-width: 768px) {

    .carousel-inner .carousel-item-right.active,
    .carousel-inner .carousel-item-next {
      transform: translateX(50%);
    }
    
    .carousel-inner .carousel-item-left.active, 
    .carousel-inner .carousel-item-prev {
      transform: translateX(-50%);
    }
}

/* large - display 6 */
@media (min-width: 992px) {

    .carousel-inner .carousel-item-right.active,
    .carousel-inner .carousel-item-next {
      transform: translateX(50%);
    } 
    .carousel-inner .carousel-item-left.active, 
    .carousel-inner .carousel-item-prev {
      transform: translateX(-20%);
    }  

}

.carousel-inner .carousel-item-right,
.carousel-inner .carousel-item-left{ 
    transform: translateX(0);
}

.carousel-inner{
    width: 1000px;
}
.carouselContent{
    /* width: 300px; */
    height: 200px;
}

</style>

<script>
import carousel from './carousel'
import jQuery from 'jquery'
// import Carousel from './carousel.vue'
global.jquery = jQuery
global.$ = jQuery
window.$ = window.jQuery = require('jquery')

export default {
    components: {
        carousel,
    },
    mounted:function(){
        jQuery(function ($) {
            // $('#homeCarouselControls').carousel({
            // interval: 10000
            // })

            $('.carousel .carousel-item').each(function(){
            var minPerSlide = 1;
            var next = $(this).next();
            if (!next.length) {
                next = $(this).siblings(':first');
            }
            next.children(':first-child').clone().appendTo($(this));
            
                for (var i=0;i<minPerSlide;i++) {
                next=next.next();
                if (!next.length) {
                    next = $(this).siblings(':first');
                }
                
                next.children(':first-child').clone().appendTo($(this));
                }
            });
        })
    }
}
</script>