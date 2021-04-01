<template>
    <!--  -->
    <div class="container bg-warning">
        <div class="row">
            <!--  -->
            <div id="main_area" class="col-9">
                <div class="h-50 d-flex justify-content-center align-middle">
                    <h1 class="my-auto">Portfolio of Kichishima Naho</h1>
                </div>

                <div class="h-50 d-flex justify-content-center">
                    <a href="https://twitter.com/kichi12321" target="_blank" class="mr-4 my-auto">
                        <i class="fab fa-twitter fa-2x"></i>@kichi12321
                    </a>
                    <a href="https://github.com/kichis" target="_blank" class="ml-4 my-auto">
                        <i class="fab fa-github fa-2x"></i>kichis
                    </a>
                </div>
            </div>

            <!--  -->
            <div class="col-3 d-flex justify-content-center align-items-center bg-success">
                <!-- imgタグだけだとd-flexにより大きさが崩れるのでdivで囲む -->
                <div>
                    <!-- border -->
                    <img  src="../assets/face.png" alt="my image" width="200" class="border">
                </div>
            </div>

        </div>

        <carousel></carousel>

    </div>

</template>

<style>
#main_area{
    height: 50vh;
}



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