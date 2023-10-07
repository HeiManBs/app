<template>
  <div class="Concern">
      <div class="Concern-top">
          <span class="iconfont iconjiantou2" @click="handelclick"></span>
          我的关注
      </div>
      <div class="contents" v-for="contents in followslist" :key="contents.id">
      <div class="Concern-content">
          <div class="contentlist">
              <div class="Concern-left">
               <img v-if="contents.head_img" :src="$axios.defaults.baseURL+contents.head_img" alt="">
      <img v-else src="../assets/123.png" alt="">
          </div>
         <div class="content">
        <div class="news">{{contents.nickname}}<br>
         <span>2019-10-10</span>
            </div>
            
          </div>
         
      </div>
       <button @click='clickout(contents.id)'>取消关注</button>
       </div>
     </div>
    
    
  </div>
</template>

<script>
import Concern from '../components/Concernlist'
import { Toast } from 'vant';
export default {
    data(){
        return{
         followslist:[],
        
        }
    },
    components:{
        Concern
    },
    methods:{
        handelclick(){
            this.$router.push({
                path:'/Personal'
            })
        },
        clickout(id){
            this.$axios({
                 headers:{
                Authorization:"Bearer "+localStorage.getItem('token')
             },
                url:'/user_unfollow/'+id
            }).then(res=>{
                console.log(res.data);
                if(res.data.message==='取消关注成功'){
                 Toast('取消成功');
                 this.readaxios()
                }else{
                    Toast(res.data.message);
                }
            })
        },
        readaxios(){
              this.$axios({
            url:'/user_follows',
             headers:{
                Authorization:"Bearer "+localStorage.getItem('token')
             },
        }).then(res=>{
            console.log(res.data);
            this.followslist=res.data.data
        })
        }

    },
    //页面创建完毕进来获取数据
    created(){
        this.readaxios()
    }

}
</script>

<style lang="less" scoped>
.Concern{
    margin: 20/360*100vw;
    .Concern-top{
        margin-top: 35/360*100vw;
        color: #000;
        font-weight: 700;
        font-size: 18/360*100vw;
        .iconjiantou2{
            font-size: 20/360*100vw;
            margin-right:100/360*100vw;
            font-weight: normal;
        }
    }
    
}
.contents{
    margin-top: 15/360*100vw;    
    
    .Concern-content{
        display: flex;
        height: 70/360*100vw;
        background-color: #fff;
        border-bottom: 2px solid #ccc;
        
        .contentlist{
            width: 250/360*100vw;
            display: flex;
            flex: 1;
        }
        .Concern-left{
            width: 40/360*100vw;
            height: 40/360*100vw;
            background-color:#b3b3b3;
            border-radius: 25/360*100vw;
            margin: 15/360*100vw;
            img{
                width: 100%;
                height: 100%;
                border-radius: 50%;
            }
        }
        .content{
            width: 120/360*100vw;
            margin-top: 17/360*100vw;
            font-size: 15/360*100vw;
            display: flex;
           span{
               font-size: 12/360*100vw;
               color: #ccc;
           }
          
        }
         
    }
    button{
               width: 80/360*100vw;
               height: 30/360*100vw;
               border-radius: 15/360*100vw;
               outline: none;
               border: none;
               margin-left: 30/360*100vw;
               margin-top: 22/360*100vw;
               font-size: 13/360*100vw;
           }
    }
</style>