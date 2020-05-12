<template>
    <div class="profile">
        <headbar title="我的"></headbar>
        <div class="profile_container">
            <router-link to="/login" class="login" tag="div">
                <div>
                    <i class="iconfont icon-accountfilling account"></i>
                </div>
                <div class="phone">
                    <span>{{userInfo.name || '登录/注册'}}</span>
                    <span>
                        <i class="iconfont icon-mobilephone">{{userInfo.phone || '暂无绑定手机号'}}</i>
                    </span>
                </div>
                <div class="more">
                    <i class="iconfont icon-more"></i>
                </div>
            </router-link>
            <div class="balance">
                <div>
                    <span class="money">0.00</span>
                    <span>元</span>
                    <p>我的余额</p>
                </div>
                <div>
                    <span class="mount">0</span>
                    <span>个</span>
                    <p>我的优惠</p>
                </div>
                <div>
                    <span class="score">0</span>
                    <span>分</span>
                    <p>我的积分</p>
                </div>
            </div>
            <div class="order top-border-1px">
                <ul>
                    <li class="order-item">
                        <i class="iconfont icon-rejectedorder icolor-order">我的订单</i>
                        <i class="iconfont icon-more"></i>
                    </li>
                    <li class="order-item">
                        <i class="iconfont icon-gifts icolor-score">积分商城</i>
                        <i class="iconfont icon-more"></i>
                    </li>
                    <li class="order-item">
                        <i class="iconfont icon-creditlevelfilling icolor-card">会员卡</i>
                        <i class="iconfont icon-more"></i>
                    </li>
                    <li class="order-item center">
                        <i class="iconfont icon-logistic icolor-center">服务中心</i>
                        <i class="iconfont icon-more"></i>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import headbar from "@/components/Headbar/Headbar.vue";
import {mapState} from "vuex"
export default {
    components: {
        headbar
    },
    computed: {
        ...mapState(["userInfo"])
    },
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/mixin.scss";
// .top-border-1px {
//     position: relative;
//     &::before {
//         content: "";
//         position: absolute;
//         z-index: 200;
//         left: 0;
//         top: 0;
//         width: 100%;
//         height: 1px;
//         background-color: #e4e4e4;
//     }
// }
.profile {
    height: 100%;
    width: 100%;
    position: absolute;
    .profile_container {
        @include top-border-1px(#e4e4e4);
        top: 50px;
        .login {
            padding: 20px;
            height: 100px;

            background-color: #6da1a8;
            display: flex;
            justify-content: space-around;
            align-items: center;
            .account {
                font-size: 80px;
                color: rgb(224, 197, 197);
            }
            .phone {
                flex: 1;
                padding-left: 20px;
                display: flex;
                height: 100%;
                flex-direction: column;
                justify-content: space-evenly;
                align-items: flex-start;
                color: white;
                font-size: 16px;
            }
        }

        .balance {
            position: absolute;
            display: flex;
            justify-content: space-around;
            align-items: center;
            text-align: center;
            width: 100%;
            height: 100px;
            top: 160px;
            p {
                margin-top: 5px;
            }
            .money {
                font-size: 26px;
                color: orange;
            }
            .mount {
                font-size: 26px;
                color: red;
            }
            .score {
                font-size: 26px;
                color: green;
            }
        }
        .order {
            position: absolute;
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 100px;
            top: 270px;
            .center{
                @include top-border-1px(#e4e4e4);    
            }
            .order-item {
                padding: 10px;
                height: 50px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                font-size: 18px;
                .icolor-order {
                    color: orange;
                }
                .icolor-card {
                    color: orangered;
                }
                .icolor-score {
                    color: peru;
                }
                .icolor-center {
                    color: red;
                }
            }
        }
    }
}
</style>