<template>
    <div >
        <ul class="footer">
            <router-link to="/home" tag="li" activeClass="myactive">
                <span>
                    <i class="iconfont icon-phone"></i>
                    <p>外卖</p>
                </span>
            </router-link>
            <router-link to="/search" tag="li" activeClass="myactive">
                <span>
                    <i class="iconfont icon-search"></i>
                    <p>查询</p>
                </span>
            </router-link>
            <router-link to="/order" tag="li" activeClass="myactive">
                <span>
                    <i class="iconfont icon-rfq"></i>
                    <p>订单</p>
                </span>
            </router-link>
            <router-link to="profiles" tag="li" activeClass="myactive">
                <span>
                    <i class="iconfont icon-account"></i>
                    <p>我的</p>
                </span>
            </router-link>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
@import '../../assets/css/mixin.scss';
    .myactive{
        color:red;
    }
   
    div{
        position:fixed;
        bottom:0px;
        left:0px;
        
        height:50px;
        width:100%;
        background: white;
        ul{
            @include top-border-1px(#e4e4e4);
            display: flex;
            height: 50px;
            li{
                flex:1;
                text-align: center;
                span{
                    font-size: 14px;
                    display: flex;
                    height: 100%;
                    flex-direction: column;
                    justify-content: space-around;
                    align-items: center;
                    i{
                        font-size: 20px;
                    }
                }

                
            }
            
        }
    }
</style>