<template>
    <div class="container">
        <div class="row">
            
            <div class="container col-8">
               <h1>Portfolio of Kichishima Naho</h1>

                <fieldset id="myNewsField" class="col">
                        <legend>自分news</legend>
                        <a href="#">基本情報技術者試験の勉強はじめました</a>
                </fieldset>

                <div class="row mx-auto my-auto">
                    <div id="homeCarouselControls" class="carousel slide" data-ride="carousel">
                    <!-- オートトランジションをつけるなら data-ride="carousel"> -->
                        <div class="carousel-inner" role="listbox">
                            <div class="carousel-item active justify-content-around bg-danger">
                                <!-- <img src="" alt="">one -->
                                <div class="col-lg-2 col-md-3">
                                    <a href="" class="carouselContent  bg-secondary">one</a>
                                    <!-- <p class="num ">one</p> -->
                                    </div>
                            </div>
                            <div class="carousel-item justify-content-around bg-warning">
                                <div class="col-lg-2 col-md-3">
                                    <a href="" class="carouselContent col-lg-2 col-md-3  bg-success">two</a>
                                <!-- <p class="col-lg-2 col-md-6">Two</p> -->
                                </div>
                                
                            </div>
                            <div class="carousel-item justify-content-around bg-primary">
                                <div class="col-lg-2 col-md-3">
                                    <a href="" class="carouselContent col-lg-2 col-md-3 bg-dark">three</a>
                                <!-- <p class="col-lg-2 col-md-6">three</p> -->
                                </div>
                            </div>

                            <div class="carousel-item justify-content-around">
                                <div class="col-lg-2 col-md-3">
                                    <a href="" class="carouselContent col-lg-2 col-md-3 bg-dark">four</a>
                                <!-- <p class="col-lg-2 col-md-6">three</p> -->
                                </div>
                            </div>
                        </div>

                        <ol class="carousel-indicators">
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
import jQuery from 'jquery'
global.jquery = jQuery
global.$ = jQuery
window.$ = window.jQuery = require('jquery')

export default {
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