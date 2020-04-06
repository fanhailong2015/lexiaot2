<template>
    <swiper :options="swiperOption" ref="mySwiper" class="swiper ">
        <!-- slides -->
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination">
            <span class="" v-for = "item in slideCont" :key="item.id"></span>
        </div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
</template>

<script>
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

    export default {
        name: "Choose",
        components: {
            Swiper,
            SwiperSlide
        },
        data() {
            return {
                slideCont: [1, 2, 3],
                swiperOption: {
                    autoplay: 3000,
                    effect: "",
                    grabCursor: true,
                    setWrapperSize: true,
                    paginationClickable: true,
                    mousewheelControl: true,
                    observeParents: true,
                    pagination: {
                        el: ".swiper-pagination",
                        bulletClass: "my-bullet",
                        bulletActiveClass: "my-bullet-active"
                    },
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev"
                    },
                    on: {
                        slideChange() {
                            if (this.isBeginning) {
                                this.navigation.$prevEl.css("display", "none");
                            } else {
                                this.navigation.$prevEl.css("display", "block");
                            }
                        }
                    }
                }
            };
        },
        computed: {
            swiper() {
                return this.$refs.mySwiper.swiper
            }
        },
        mounted() {
            // this.swiper.slideTo(2, 1000, false)
        }
    }
</script>

<style scoped>

</style>
