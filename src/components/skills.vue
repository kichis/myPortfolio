<template>
    <div class="container p-0 mb-5">

        <h2 class="page_title">Skills</h2>

        <div class="row justify-content-around mt-5">

            <div class="col-5">
                <div>
                    <h4>IT</h4>
                    <!-- 星 1:よくわからない(ちょっと触っただけ)
                            2:本当に基本的な事だけわかる(ググってもわからないことがある)
                            3:調べつつなら進められる(成長中)
                            4:エラーがでてもたいてい検討がつけられる
                            5:自信がある -->
                    <table class="table">
                        <tbody>
                            <tr
                            v-for="IT in ITskills" :key="IT"
                            >
                                <td v-html="IT.img" width="20%"></td>
                                <td>{{ IT.name }}</td>
                                <td>
                                    <span v-html="showStar(IT.star)"></span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="col-5">
                <div class="mb-5">
                    <h4>Business</h4>
                    <table class="table table-borderless">
                        <tr class="border-top">
                            <td>前職で得た経験 冷静さ</td>
                        </tr>
                        <tr>
                            <td>and more -> WANTEDLY &nbsp;<img src="../assets/wantedly_mark.png" alt="WANTEDLY logo" width="20" height="20">&nbsp; <a href="https://www.wantedly.com/users/140022507" target="_blank">Kichishima Naho</a></td>
                        </tr>
                    </table>
                </div>

                <div class="pt-5">
                    <h4>Other</h4>
                    <table class="table table-borderless mx-auto">
                        <tr class="border-top">
                            <td class="text-right" width="50%">TOEIC</td>
                            <td class="text-left">805点</td>
                        </tr>
                        <tr>
                            <td>司書</td>
                            <!-- <td></td> -->
                        </tr>
                        <tr>
                            <td>ビジネス会計検定</td>
                            <td class="text-left">3級</td>
                        </tr>
                    </table>
                </div>
            </div>

        </div> 

    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    data() {
        return {
            ITskills: [
                { name: 'HTML', 
                  img: '<img src="'+ require('../assets/HTML5_Logo_128.png') +'" alt="HTML5" width="35" height="35">', 
                  star:5 },
                { name: 'CSS', 
                  img: '<img src="'+ require('../assets/CSS3_logo_and_wordmark.png') +'" alt="CSS3" width="25" height="35">', 
                  star:4 },
                { name: 'Bootstrap', 
                  img: '<img src="'+ require('../assets/bootstrap-purplebase.svg') +'" alt="Bootstrap" width="28" height="28">', star:4 },
                { name: 'Tailwind CSS', 
                  img: '<img src="'+ require('../assets/tailwindcss-mark.cb8046c163f77190406dfbf4dec89848.svg') +'" alt="Tailwind" width="30" height="30">', 
                  star:2 },
                { name: 'JavaScript', 
                  img: '<img src="'+ require('../assets/javascript_logo.png') +'" alt="JavaScript" width="28" height="28">', 
                  star:4 }, // 3.5
                { name: 'jQuery', 
                  img: '<img src="'+ require('../assets/jquery-logo-001.png') +'" alt="jQuery" width="50" height="35">', 
                  star:4 },
                { name: 'Vue.js', img: '<img src="'+ require('../assets/logo.png') +'" alt="Vue.js" width="30" height="30">', star:3 },
                // { name: 'React', img: '', star:1 },
                { name: 'PHP', 
                  img: '<img src="https://www.php.net/images/logos/new-php-logo.svg" alt="PHP" width="50" height="25">', 
                  star:3 },
                // { name: 'Laravel', 
                //   img: '<img src="'+ require('../assets/laravel-2.svg') +'" alt="Laravel" width="33" height="32">', 
                //   star:1 },
                { name: 'mySQL', 
                  img: '<img src="https://www.mysql.com/common/logos/logo-mysql-170x115.png" alt="mySQL" width="60" height="35">', 
                  star:3 },
                { name: 'C#', 
                  img: '<img src="'+ require('../assets/csharp.png') +'" alt="csharp" width="35" height="35">', 
                  star:2 },
                { name: 'Unity', 
                  img: '<img src="'+ require('../assets/unity-tab-square-black.png') +'" alt="unity" width="30" height="30">', 
                  star:2 }, // 2.5
                // { name: 'blender', 
                //   img: '<img src="https://download.blender.org/branding/blender_logo.png" alt="blender" width="110" height="30" class="mr-1">', 
                //   star:2 },
            ],
        }
    },
    methods: {
        showStar(num){
            const yellowStar = '<img src="'+ require('../assets/star_y.svg') +'" alt="yellow star" height="20" class="mr-1">'
            const whiteStar = '<img src="'+ require('../assets/star_blank.svg') +'" alt="white star" height="20" class="mr-1">'
            let html = ''
            for (let i = 1; i <= 5; i++ ){
                html += (i <= num) ? yellowStar : whiteStar 
            }
            return html
        }
    },
})
</script>
