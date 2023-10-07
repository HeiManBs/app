<template>

  <div class="register">
    <div class="register-top">
    <span class="iconfont iconicon-test" @click="registerclick"></span>
    </div>
    <div class="register-content">
        <span class="iconfont iconnew"></span>
    </div>
    <registerinput placeholder="用户名 /手机号" type="text" :rule=/^1\d{3,8}$/
    @valchange=user
    success-msg="用户名/手机号输入格式正确"
    error-msg="用户名/手机号输入格式不正确"
    />
    <registerinput placeholder="密码" type="password"
    :rule=/^\w{3,8}$/
    @valchange=pass
    success-msg="密码输入格式正确"
   error-msg="密码输入格式不正确"
    />
    <registerbutton btnText="提交登录" @submit="hanclick" @keyup="hanclick" />
  </div>
</template>

<script>
import registerinput from '../components/indexinput'
import registerbutton from '../components/indexbutton'
// 引入局部ul库
import Vue from 'vue';
import { Toast } from 'vant';
Vue.use(Toast);

export default {
    data(){
        return{
           username:'',
           password:''
        }
    },
      components:{
          registerinput,
          registerbutton
      },
      methods:{
          registerclick(){
             this.$router.push({
                 path:'/'
             })
          },
          hanclick(){
              console.log(123);
            //   console.log('父组件已经接收到子组件的传值');
            //   console.log('用户名',this.username);
            //   console.log('密码',this.password);
            if(this.username ===''||this.nickname===''||this.password===''){
                  Toast.fail('输入的内容不能为空');
            }else{
                 this.$axios({
                url: "/login",
                method: 'POST', 
                data:{
                    username:this.username,
                    password:this.password
                }
            }).then(res => {
                console.log(res.data)
                const {data,message}=res.data
                if(message==='登录成功'){
                    Toast.success(res.data.message);
                    localStorage.setItem('token',data.token)
                    localStorage.setItem('userId',data.user.id)
                    setTimeout(() => {
                        this.$router.push({
                        path:'/Home'
                    })
                    }, 1000);
                }else{
                    Toast('请确定用户名或密码是否正确');
                }
            }).catch(res=>{
                   Toast.fail(res.data.message);
            })
            }

          },
          user(newUsername){
              this.username=newUsername
          },
          pass(newpasswrod){
              this.password=newpasswrod
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
  
   

 }


</style>