<template>
    <div>
        <headbar title="外卖">
            <span slot="left">
                <i class="iconfont icon-search"></i>查询
            </span>
            <span slot="right">登录/注册</span>
        </headbar>
        <div class="home-wrap" ref="homewrap">
            <div class="nav_swiper">
                <div class="swiper-container" v-if="categories.length">
                    <div class="swiper-wrapper">
                        <div
                            class="swiper-slide categoryList"
                            v-for="(page,index) in categoriesArr"
                            :key="index"
                        >
                            <div class="category" v-for="category in page" :key="category.id">
                                <div class="category-img">
                                    <img
                                        :src="baseImageUrl+category.image_url"
                                        :alt="category.description"
                                    />
                                </div>
                                <span>{{category.title}}</span>
                            </div>
                        </div>
                    </div>
                    <!-- 如果需要分页器 -->
                    <div class="swiper-pagination"></div>
                </div>
            </div>

            <div class="shopslist">
                <div class="shopslist-header">
                    <i class="iconfont icon-category"></i>
                    <span>附近商家</span>
                </div>
                <div class="shopslist-scroll" ref="shopsscroll" :style="mystyle">
                    <shoplist></shoplist>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import headbar from "@/components/Headbar/Headbar.vue";
import shoplist from "@/components/shoplist/Shoplist.vue";
import { mapState } from "vuex";
import Swiper from "swiper";
import BetterScroll from "better-scroll";
import "swiper/css/swiper.min.css";
export default {
    data() {
        return {
            baseImageUrl: "https://fuss10.elemecdn.com",
            mystyle:{
                height:'300px'
            }
        };
    },
    mounted() {
        this.$store.dispatch("getCategoriesAction");
        this.mystyle.height = document.documentElement.clientHeight - 300 + 'px'
    },
    watch: {
        categories(val) {
            new Swiper(".swiper-container", {
                loop: true,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true
                }
            });
            this.$nextTick(() => {
                // 一旦完成界面更新, 立即调用(此条语句要写在数据更新之后)
                // 创建一个Swiper实例对象, 来实现轮播
                new Swiper(".swiper-container", {
                    loop: true, // 可以循环轮播
                    // 如果需要分页器
                    pagination: {
                        el: ".swiper-pagination"
                    }
                });

                // new BetterScroll(".home-wrap", {
                //     click: true
                // });
                if (!this.scroll) {
                    this.scroll = new BetterScroll(
                        this.$refs.shopsscroll,
                        {}
                    );
                    console.log(this.scroll);
                }
            });
        }
    },
    computed: {
        ...mapState(["categories"]),
        categoriesArr() {
            let pageArr = [];
            let miniArr = [];
            this.categories.forEach(element => {
                miniArr.push(element);
                if (miniArr.length == 8) {
                    pageArr.push(miniArr);
                    miniArr = [];
                }
            });
            if (miniArr.length !== 0) {
                pageArr.push(miniArr);
            }
            return pageArr;
        }
    },
    components: {
        headbar,
        shoplist
    }
};
</script>

<style lang="scss" scoped>
@import '../../assets/css/mixin.scss';
.home-wrap {
    position: fixed;
    top: 50px;
    bottom: 45px;
    width: 100%;
    
    .nav_swiper {
        margin-top: 10px;
        height: 200px;
        @include bottom-border-1px(#e4e4e4);
        .swiper-container {
            width: 100%;
            height: 100%;
            .swiper-slide {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                align-items: center;
                .category {
                    width: 25%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    .category-img {
                        img {
                            height: 50px;
                            width: 50px;
                        }
                        span {
                            width: 100%;
                            text-align: center;
                            font-size: 13px;
                            color: #666;
                        }
                    }
                }
            }
        }
    }

    .shopslist {
        padding: 10px;
        
        border:1px solid white;
        .shopslist-header {
            margin: 20px 0px;
            
        }
        .shopslist-scroll{
            height: 300px;
            overflow: hidden;
        }
        
    }
}
</style>

