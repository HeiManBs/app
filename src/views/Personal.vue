<template>
  <div class="mytop">
          <div class="outlogin" @click="outlogin">
          <span class="iconfont iconjiantou">返回</span>
          
      </div>
      <div class="top" @click="userclick">
      
         <div class="ml"> 
             
             <img v-if="userifon.head_img" :src="$axios.defaults.baseURL+userifon.head_img" alt="">
             <img v-else src="../assets/123.png" alt="">
          <span v-if="userifon.gender==1" class="iconfont iconxingbienan"></span>
          <span v-if="userifon.gender==0" class="iconfont iconxingbienv"></span>
          <div class="fs">{{userifon.nickname}}<br>
          <span class="date">2020-09-19</span>
          </div>
          </div>
          <span  class="iconfont iconjiantou1"></span>
      </div>
        <Personal text="我的关注" msg="关注的用户" @click="hanclick" class="iconfont iconwode"/>
        <Personal text="我的跟帖" msg="跟帖 / 回复" @click="comments" class="iconfont iconpinglun-"/>
        <Personal text="我的收藏" msg="文章 / 视频" @click="collect" class="iconfont iconshoucang"/>
        <Personal text="设置" msg="" @click="setting" class="iconfont iconfenxiang"/>
        
        <div class="buttom" @click="logout">退出登录</div>
        
  </div>
</template>

<script>
import Personal from '../components/ParsonalInput'
//引入插件
import { Toast } from 'vant';
import { Dialog } from 'vant';
export default {
         data(){
             return{
                userifon:{

                }
             }
         },
         methods:{
             hanclick(){
                 this.$router.push({
                     path:'/Concern'
                 })
             },
             comments(){
                 this.$router.push({
                     path:'/comment'
                 })
             },
             collect(){
                 this.$router.push({
                     path:'/collect'
                 })
             },
             setting(){
                 this.$router.push({
                     path:'/setting'
                 })
             },
             userclick(){
                 this.$router.push({
                     path:'/setting'
                 })
             },
             logout(){
               Dialog.confirm({
                 title: '退出确认',
                 message: '真的要抛弃我吗？',
               })
                 .then(() => {
                    localStorage.clear()
                 this.$router.replace({path:'/'})
                 })
                 .catch(() => {
                   // on cancel
                 });
                
             },
             outlogin(){
                 this.$router.push({
                     path:'/Home'
                 })
             }
         },
     created(){
         this.$axios({
             url:'/user/' + localStorage.getItem('userId'),
             headers:{
                Authorization:"Bearer "+localStorage.getItem('token')
             }
         }).then(res=>{
             console.log(res.data.message);
              if(res.data.message==='获取成功'){
                 this.userifon=res.data.data
                
              }
           
         }).catch(res=>{
             
         })

     },
     components:{
         Personal
     },
    
}
</script>

<style lang="less" scoped>
.mytop{
    margin-top: 20/360*100vw;
    .outlogin{
        padding-left: 5/360*100vw;
        margin-left: -10/360*100vw;
        border: 1px solid #ccc;
        width: 60/360*100vw;
         height: 25/360*100vw;
         line-height: 25/360*100vw;
         text-align: center;
         border-radius: 12.5/360*100vw;
        .iconjiantou{
            color: #ccc;
        }
    }
}
.top{
    height: 100/360*100vw;
    margin-top: 10/360*100vw;
    border-bottom: 4px solid #ccc;
    display: flex;
    align-content: center;
    img{
        width: 70/360*100vw;
        height: 70/360*100vw;
        border-radius: 50%;
        margin-left: 20/360*100vw;
    }
    .ml{
        display: flex;
        flex: 1;
        align-items:center
    }
    .fs{
        font-size: 15/360*100vw;
        .date{
            color: #ccc;
           padding-top: 60/360*100vw;
        }
    }
    .iconxingbienan{
      color: skyblue;
      margin-top: -20/360*100vw;
      margin-left: 5/360*100vw;
    }
    .iconxingbienv{
        color: #ea76c9;
      margin-top: -20/360*100vw;
      margin-left: 5/360*100vw;
    }
    .iconjiantou1{
        margin-right: 20/360*100vw;
        margin-top: 35/360*100vw;
        color: #ccc;
    }
   
   
}  
.iconwode{
   padding-left: 15/360*100vw;
        font-size: 25/360*100vw;
       color: #56a9df;
    }
.iconpinglun-{
     padding-left: 15/360*100vw;
    font-size: 25/360*100vw;
    color: #da7538;
}
.iconshoucang{
     padding-left: 15/360*100vw;
    font-size: 25/360*100vw;
    color: #c63980;
}
.iconfenxiang{
     padding-left: 15/360*100vw;
    font-size: 25/360*100vw;
    color:#f93e92;
}
.buttom{
        // width: 300/360*100vw;
        margin-top: 160/360*100vw;
        height: 50/360*100vw;
        line-height: 50/360*100vw;
        background-color: red;
        text-align: center;
        color: #fff;
    }
     
</style>