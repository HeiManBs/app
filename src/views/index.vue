<template>
  <div class="index-index">
          <div class="box">
              <div  class="one">
                <img src="../assets/69.png" alt="">
              </div>
              <div class="two" >
                <img src="../assets/logo.png" alt="">
              </div>
          </div>
          <div class="box1">
              <img src="../assets/滚动1.png" alt="">
          </div> 
          <div class="box3">
            澳美利奴防伪系统查询结果
          </div>
          <div class="box4">
            <div class="test">
                正品
            </div>
          </div>
          <div class="box5">
            <span>您好!</span><br>
            <span>您所查询的是澳美利奴服饰系列的正品标识</span><br>
            <span>首次查询时间为:<span class="times">
                {{time}}</span></span><br>
            <span>感谢您的使用！</span>
          </div>
          <div class="boxs">
            <Navtab/>
          </div>
        
  </div>
</template>

<script>
import Navtab from '../components/navTab.vue'
export default {
    components:{
        Navtab
    },
    data(){
        return{
       time:'',
      
        }
    },
    mounted(){
        this.time=new Date().toLocaleString();
    },
methods:{
    
//    ClickLogin(){
//         this.$router.push({
//               path: '/login'
//         })
//     },
//     ClickRegister(){
//         this.$router.push({
//             path: '/register'
//         })
//     }
}
}
</script>

<style lang="less" scoped>

.index-index{
    position: relative;
    height: 100vh;
   .box{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10/360*100vw 0;
    background-color: #49528b;
    .one{
        padding-left: 10/360*100vw;
      
        img{
        width: 200/360*100vw;
        height: 40/360*100vw;
        }
    }
    .two{
        img{
            width: 100/360*100vw;
        height: 40/360*100vw;
        }
    }
    }
    .box1{
        padding: 10/360*100vw;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .box3{
        height: 40/360*100vw;
        color: #494949;
        font-weight: 700;
        font-size: 14/360*100vw;
        line-height: 40/360*100vw;
        padding-left:10/360*100vw;
        background-color: #d1d1d1;
    }
    .box4{
        padding-top: 10/360*100vw;
        .test{
            width: 150/360*100vw;
            height: 150/360*100vw;
            line-height: 150/360*100vw;
            background-color: #49528b;
            border-radius: 50%;
            margin: 0 auto;
            color: #ffffff;
            font-weight: 700;
            font-size:  50/360*100vw;
            text-align: center;

        }
    }
    .box5{
        padding-top: 50/360*100vw;
        padding-left:  20/360*100vw;
        font-size:  14/360*100vw;
        .times{
            font-weight: 700;
            font-size: 17/360*100vw;
        }
    }
     .boxs{
        position: absolute;
     bottom: 0;
    left: 0;
    width: 100%;
     }
   }
</style>