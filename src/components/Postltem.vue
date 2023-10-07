<template>
  <div class="navigation" @click="$router.push('/article?id='+postData.id)">
                <div class="contnet">
        <div class="singleImg" v-if="postData.type==1&&postData.cover.length>=1&&postData.cover.length<3" >
            <div class="left">
                <div class="left-top">{{postData.title}}</div>
                <div class="left-button">
                    {{postData.user.nickname}} {{postData.comment_length}}跟帖
                </div>
            </div>
            <div class="right">
                <img :src="fnFixImgUrl(postData.cover[0].url)" alt="">
            </div> 
        </div>
        <div class="multiImg" v-if="postData.cover.length>=3">
        <div class="title">{{postData.title}}</div>
        <div class="images">
            <img :src="postData.cover[0].url" alt="">
            <img :src="postData.cover[1].url" alt="">
            <img :src="postData.cover[2].url" alt="">
        </div>
         <div class="left-button">
                    {{postData.user.nickname}} {{postData.comment_length}}跟帖
                </div>
        </div>
        <div class="singleVideo" v-if="postData.type==2&&postData.cover.length>=1">
            <div class="title">
                {{postData.title}}
            </div>
            <div class="video">
                <span class="iconfont iconshipin"></span>
                <img :src="postData.cover[0].url" alt="">
            </div>
            <div class="left-button">
                    {{postData.user.nickname}} {{postData.comment_length}}跟帖
                </div>
        </div>
        </div>
        
          
        </div>
</template>

<script>
export default {
   props:['postData'], 
    methods:{
        
        fnFixImgUrl(oldUrl){
        const reg =/^http/
        if(reg.test(oldUrl)){
            return oldUrl
        }else{
            return this.$axios.defaults.baseURL+oldUrl
        }
    },
    
    },
    filters:{
        fixImgUrl(oldUrl){
           const reg =/^http/
           console.log(this);
           console.log('这里是局部过滤器');
           if(reg.test(oldUrl)){
           return oldUrl
           }else{
               return 'http://157.122.54.189:9083'+oldUrl
           }
        }
    },

}
</script>

<style lang="less" scoped>
 .navigation{
           position: relative;
           background-color: #ccc;
        
       
       .contnet{
           background-color: #fff;
      
       .singleImg{
           display: flex;
           margin-top: 10/360*100vw;
           align-items: center;
           background-color: #fff;
           border-bottom: 1px solid #ccc;
           .left{
               flex: 1;
               padding-left: 10/360*100vw;
               padding-top: 10/360*100vw;
               .left-top{
                   font-size: 16/360*100vw;
               }
               .left-button{
                   margin-top: 6.777778vw;
                   font-size: 14/360*100vw;
                   padding-bottom: 10/360*100vw;
                   color: #ccc;
               }
               
           }
           .right{
                   padding-right: 10/360*100vw;
                    width: 121/360*100vw;
                    height: 75/360*100vw;
                    margin-bottom: 15/360*100vw;
                   img{
                        width: 100%;
                        height: 100%;
                       object-fit: cover;
                   }
               }
       }
       .multiImg{
            margin-top: 10/360*100vw;
            border-bottom: 1px solid #ccc;
            .title{
                font-size: 16/360*100vw;
                padding-left: 10/360*100vw;
                padding-bottom: 10/360*100vw;
            }
            .images{
                display: flex;
                img{
                    width: 112/360*100vw;
                    height: 74/360*100vw;
                    object-fit: cover;
                    padding-left: 5/360*100vw;
                }
            }
             .left-button{
                   margin-top: 6.777778vw;;
                   font-size: 14/360*100vw;
                   padding-bottom: 10/360*100vw;
                   padding-left: 10/360*100vw;
                   color: #ccc;
               }
       }
       .singleVideo{
           margin-top: 10/360*100vw;
           padding-left: 10/360*100vw;
           border-bottom: 1px solid #ccc;
           .title{
               font-size: 16/360*100vw;
           }
           .video{
               width: 340/360*100vw;
               height: 170/360*100vw;
               margin-top: 5/360*100vw;
               position: relative;
               .iconshipin{
                   position: absolute;
                   top: 40%;
                   left: 44%;
                   font-size: 50/360*100vw;
                   width: 55/360*100vw;
                   height: 55/360*100vw;
                   background-color: #ccc;
                   opacity: 0.7;
                   line-height: 55/360*100vw;
                   text-align: center;
                   border-radius: 50%;
                   
               }
               img{
                   width: 100%;
               }
           }
            .left-button{
                   margin-top: 6.777778vw;
                   font-size: 14/360*100vw;
                   padding-bottom: 10/360*100vw;
                   padding-left: 10/360*100vw;
                   color: #ccc;
               }
       }
        }
        }
</style>