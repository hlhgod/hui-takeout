<template>
    <div class="login">
        <div class="return_icon" @click="$router.back()">
            <i class="iconfont icon-back"></i>
        </div>
        <div class="logo">
            <p>惠外卖</p>
        </div>
        <div class="switch">
            <span :class="{selected:messageSelected}" @click="messageSelected=true">短信登录</span>
            <span :class="{selected: ! messageSelected}" @click="messageSelected=false">密码登录</span>
        </div>

        <div class="message_login" v-if="messageSelected">
            <input
                type="text"
                name="username"
                maxlength="11"
                v-model="phone"
                id="username"
                placeholder="手机号"
            />
            <button
                class="getVerityCode"
                :disabled="! rightPhone"
                :style="rightPhone?'color:black':'color:#ccc'"
                @click.prevent="getCode"
            >{{computeTime>0 ? `已发送(${computeTime}s)` : '获取验证码'}}</button>
            <input type="text"  maxlength="4" name="captcha" id="captcha" v-model="code" placeholder="验证码" />
            <section class="hint">
                温馨提示：未注册惠外卖帐号的手机号，登录时将自动注册，且代表已同意
                <a href="javascript:;">《用户服务协议》</a>
            </section>
        </div>
        <div class="password_login" v-if="! messageSelected">
            <input type="text" name="username" v-model="name" id="username" placeholder="请输入用户名/手机/邮箱" />
            <input :type="!showPassword?'password':'text'"  name="password" v-model="pwd" id="password" placeholder="请输入密码" />
            <mt-switch v-model="showPassword" class="switch-pwd"></mt-switch>
            <input type="text" name="captcha" maxlength="4" v-model="captcha" id="captcha" placeholder="验证码" />
            <img
                class="verifycode"
                src="http://localhost:3000/captcha"
                alt="captcha"
                @click="getCaptcha"
                ref="captcha"
            />
        </div>
        <div class="login_button">
            <button @click="login">登录</button>
            <p>关于我们</p>
        </div>
    </div>
</template>

<script>
import Vue from "vue";
import { reqSendCode, reqSmsLogin, reqPwdLogin } from "../../api/index";
import { Switch, Toast } from 'mint-ui';

Vue.component(Switch.name, Switch);

export default {
    data() {
        return {
            messageSelected: true,
            selected: 1,
            phone: "",
            code:0,
            name:'',
            pwd:'',
            captcha:'',
            computeTime: 0,
            showPassword: false
        };
    },
    methods: {
        async getCode() {
            if (!this.computeTime) {
                this.computeTime = 60;
                this.intervalID = setInterval(() => {
                    this.computeTime--;
                    if (this.computeTime <= 0) {
                        clearInterval(this.intervalID);
                    }
                }, 1000);

                //发送手机验证码
                const result = await reqSendCode(this.phone);
                if (result.err === 1) {
                    Toast(result.msg);
                }
            }
        },
        getCaptcha() {
            this.$refs.captcha.src =
                "http://localhost:3000/captcha?time=" + Date.now();
        },
        async login(){
            var result;
            
            if(this.messageSelected){
                let{phone,code}=this;
                if(!this.rightPhone){
                    Toast('手机号不正确')
                    return
                }else if(!/^\d{4}$/.test(code)){
                    Toast('验证码必须是4位数字')
                    return
                }
                result = await reqSmsLogin(phone,code)
            }else{ //密码登录
                let{name,pwd,captcha}=this;
                if(!this.name){
                    Toast('必须录入用户名')
                    return
                }else if(!this.pwd){
                    Toast('密码必须录入')
                    return
                }else if(!this.captcha){
                    Toast('验证码必须录入')
                    return
                }
                
                result=await reqPwdLogin({name,pwd,captcha})
                console.log(result)
                
                //停止计时
                if(this.computeTime){
                    this.computeTime=0
                    clearInterval(this.intervalID)
                    this.intervalID=undefined
                }

                //根据结果数据处理
                if(result.err==0){
                    const user=result.msg
                    this.$store.dispatch('recordUser',user)
                    this.$router.replace('/profiles')

                }else{
                    this.getCaptcha()
                    Toast(result.msg)
                }
            }
        }
    },
    computed: {
        rightPhone() {
            return /^1\d{10}$/.test(this.phone);
        }
    }
};
</script>


<style lang="scss" scoped>
@import "../../assets/css/mixin.scss";
.login {
    .return_icon {
        i {
            font-size: 30px;
        }
    }
    .logo {
        margin-bottom: 20px;
        p {
            font-size: 40px;
            text-align: center;
            font-weight: 900;
            color: $primaryColor;
        }
    }
    .switch {
        display: flex;
        justify-content: center;
        span {
            font-size: 18px;
            color: $primaryColor;
            margin: 0 20px;
            &.selected {
                border-bottom: 3px solid $primaryColor;
                color: $primaryColor;
                margin-bottom: -3px;
            }
        }
    }
    .message_login {
        display: flex;
        position: relative;
        flex-direction: column;
        // justify-content: center;
        align-items: center;
        margin: 20px;
        .hint {
            width: 100%;
            margin-top: 12px;
            color: #777;
            font-size: 14px;
            line-height: 20px;
        }

        .getVerityCode {
            position: absolute;
            right: 10px;
            transform: translateY(-50%);
            font-size: 14px;
            background-color: transparent;
            border: 0;
            color: #ccc;
            top: 52%;
        }
        input {
            // display: block;
            margin: 10px 0;
            height: 40px;
            width: 100%;
            border: 1px solid #ddd;
            border-radius: 4px;
            outline: 0;
            font: 400 14px Arial;
            box-sizing: border-box;
            &:focus {
                border: 1px solid $secondColor;
            }
        }
    }
    .password_login {
        @extend .message_login;
        .switch-pwd{
            position: absolute;
            top:75px;
            right: 0;
        }
        .verifycode{
            position: absolute;
            bottom: -15px;
            right: 0px;
            transform: translateY(-50%);
            border: 0;
            color: #ccc;
            font-size: 14px;
            background: transparent;
            

        }
    }
    .login_button {
        display: flex;
        align-items: center;
        flex-direction: column;
        margin: 10px;
        button {
            height: 40px;
            width: 100%;
            background-color: $primaryColor;
            font-size: 16px;
            margin-bottom: 10px;
            border-radius: 4px;
        }
    }
}
</style>