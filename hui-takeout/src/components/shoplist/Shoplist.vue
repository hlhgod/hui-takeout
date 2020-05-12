<template>
    <!-- <div class="shoplist" ref="shoplist"> -->
    <ul>
        <router-link
            to="/shop"
            tag="li"
            class="shop"
            activeClass="myactive"
            v-for="shop in shops"
            :key="shop.id"
        >
            <div class="shop_img">
                <img src="../../../public/images/shop.png" alt />
            </div>
            <div class="shop_message">
                <span class="shop_name">{{shop.name}}</span>
                <span>{{shop.rating}} 月售{{shop.recent_order_num}}单</span>
                <span>¥{{shop.float_minimum_order_amount}}/{{shop.piecewise_agent_fee.tips}}</span>
            </div>
            <div class="shop_supports">
                <ul class="shop_supports_icon" >
                    <li v-for="item in shop.supports" :key="item.id">
                        <span>{{item.icon_name}}</span>
                        
                    </li>
                </ul>
                <span>{{shop.delivery_mode.text}}</span>
            </div>
        </router-link>
    </ul>
    <!-- </div> -->
</template>

<script>
import { mapState } from "vuex";

export default {
    computed: {
        ...mapState(["shops"])
    },
    mounted() {
        this.$store.dispatch("getShopAction");
    }
};
</script>

<style lang="scss" scoped>
.shop {
    display: flex;
    height: 150px;
    flex-direction: row;
    justify-content: space-around;
    .shop_img {
        width: 80px;
        height: 80px;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .shop_message {
        display: flex;
        width: 50%;
        flex-direction: column;
        justify-content: space-around;
        // flex-wrap: wrap;
        // padding: 10px;
        align-items: flex-start;
        .shop_name {
            font-size: 18px;
        }
    }
    .shop_supports{
        .shop_supports_icon{
            display: flex;
            flex-direction: row;
            justify-content: center;
            
            padding: 5px;
            li{
                
                background-color: chocolate;
            }
        }
    }
}
.myactive {
    color: red;
}
</style>