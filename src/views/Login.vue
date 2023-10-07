<template>
  <div class="register">
    <div class="register-top">
    <span class="iconfont iconicon-test" @click="loginclick"></span>
    </div>
    <div class="register-content">
        <span class="iconfont iconnew"></span>
    </div>
   <loginInput
   placeholder="用户名 / 手机号" type="text"
   :rule=/^\d{3,8}$/
   @valchange=user
    successMsg="用户名/手机号输入格式正确"
    errorMsg="用户名/手机号输入格式不正确"
   />
   <loginInput placeholder="昵称" type="text"
   :rule=/^\w{3,8}$/
   @valchange=nick
    successMsg="昵称输入格式正确"
    errorMsg="昵称输入格式不正确"
   />
   <loginInput placeholder="密码" type="password"
   :rule=/^\d{3,8}$/
   @valchange=pass
   successMsg="密码输入格式正确"
   errorMsg="密码输入格式不正确"
   />
    <loginbutton btnText="注册" @submit="hanclick" @keyup.enter="submit"/>
  </div>
     
</template>

<script>
import loginInput from '../components/indexinput'
import loginbutton from '../components/indexbutton'
// 引入局部ul库
import Vue from 'vue';
import { Toast } from 'vant';
Vue.use(Toast);

export default {
    data(){
        return{
            username:'',
            nickname:'',
            password:''
        }
    },
    components:{
        loginInput,
        loginbutton
    },
    methods:{
        loginclick(){
             this.$router.push({
                 path:'/'
             })
        },
        hanclick(){
            // console.log('父组件已经接收到子组件传值');
            // console.log('用户名/手机号',this.username);
            // console.log('昵称',this.nickname);
            // console.log('密码',this.password);
            // get请求
            // method默认是get
            // params是get请求的 url 上的问号参数
            if(this.username ===''||this.nickname===''||this.password===''){
                  Toast.fail('输入的内容不能为空');
            }else{
                 this.$axios({
                url: "/register",
                method: 'POST', 
                data:{
                    username:this.username,
                    nickname:this.nickname,
                    password:this.password
                }
            }).then(res => {
                console.log(res.data)
                const {data,message}=res.data
                if(message==='注册成功'){
                    Toast(res.data.message);
                    setTimeout(() => {
                        this.$router.push({
                            path:'/register'
                        })
                    }, 1000);
                }else{
                    Toast(res.data.message);
                }
            }).catch(res=>{
                   Toast.fail(res.data.message);
            })
            }
            
        },
        user(newUser){
            this.username=newUser
        },
        nick(newNick){
            this.nickname=newNick
        },
        pass(newPass){
            this.password=newPass
        }
    }
}
</script>

<style lang="less" scoped>
 .register{
     margin: 4/360*100vw;
     margin-top: 40/360*100vw;
   .register-top .iconicon-test{
       color: #000;
       font-size: 27/360*100vw;
       margin-left: 10/360*100vw;
   }
   .register-content .iconnew{
       margin-left: 120/360*100vw;
       width: 126/360*100vw;
       height: 126/360*100vw;
       font-size: 130/360*100vw;
       color: red;
   }
   .register-input{
       margin-top: 30/360*100vw;
       margin-left: 60/360*100vw;
       input{
           width: 240/360*100vw;
           height: 60/360*100vw;
            border: none;
           outline: none;
           border-bottom: 1px solid #000;
           
       }
   }
  

 }


</style>