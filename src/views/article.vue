<template>
  <div v-if="postData" class="news" >
        <div class="news-content" v-if="postData.type==1">
      <div class="news-top">
          <div class="left">
              <span class="iconfont iconjiantou2" @click="hanclick"></span>
          <span class="iconfont iconnew"></span>
          </div>
          <div class="news-btn" @click="handleFollow" :class="{
              unfollow:!postData.has_follow
          }">
              {{postData.has_follow?'已关注':'关注'}}
          </div>
      </div>
      <!-- 普通新闻 -->
      <div class="news-title" >
           {{postData.title}}
            <div class="news-time" v-if="postData.user.nickname" >
          <span class="hotnews">{{postData.user.nickname ? postData.user.nickname : ''}}</span>
           <div class="time"></div>
      </div>
       <div class="news-content" v-html="postData.content">
        
      </div>
      </div>
     </div>
     
     <!-- 视频新闻 -->
         <div class="videoPost" v-if="postData.type==2">
             <span class="iconfont iconjiantou2" @click="$router.push('/Home')"></span>
            <video 
                src="https://video.pearvideo.com/mp4/adshort/20200421/cont-1670293-15098199_adpkg-ad_hd.mp4"
                controls
                poster="https://timgmb04.bdimg.com/timg?searchbox_feed&quality=100&wh_rate=0&size=b576_324&ref=http%3A%2F%2Fwww.baidu.com&sec=1568739067&di=612dd27cae470b93b01a4b32ef72fbac&src=http%3A%2F%2Fpic.rmb.bdstatic.com%2Fe18c6ffa079441431f8988ca4c3ac106.jpeg"
            ></video>
           <div class="info">
               <!-- <div class="info-left" v-if="postData.user.nickname">
                   <img src="../assets/123.png" alt="" class="avatar" 
                   />
                   {{ postData.user.nickname }}
               </div> -->
                <div 
                    @click="handleFollow"
                    class="info-right"
                    :class="{
                        unfollow: !postData.has_follow
                    }"
                >{{postData.has_follow?'已关注':'关注'}}</div>
            </div>
            <div class="content">
               {{postData.title}}
            </div>
         </div>
      <div class="news-button">
          <div class="news-dianzan" :class="{haslike:postData.has_like}" @click="handleLike">
          <span class="iconfont icondianzan"></span>
          {{postData.like_length}}
      </div>
      <div class="news-weixin">
          <span class="iconfont iconweixin"></span>
          微信
      </div>
     </div>
     <div class="comment">
         <h2>精彩跟帖</h2>
         <CommentMain
         v-for="comment in commentList"
         :key="comment.id"
         :commentData="comment"
          @logding="logding"
         />
     </div>
     <div class="buttom">
         <div class="more" @click="$router.push('/hotComment?id='+$route.query.id)">
         更多跟帖
     </div>
     </div>
      <commentInput :commentId="commentId" ref="inputDom"/>
  </div>
</template>

<script>
import CommentMain from '@/components/comment/CommentMain'

import commentInput from '../components/commentInput'
export default {
    data(){
        return{
            postData:{},
            commentList:[],
            commentId:''
        }
    },
    components:{
        CommentMain,
        commentInput
    },
    created(){
        
        // console.log(this.$route.query.id);
        this.loadPage()
        this.$axios({
            url:'/post_comment/'+this.$route.query.id
        }).then(res=>{
            console.log(res.data);
            this.commentList=res.data.data
            if(res.data.data.length>3){
                res.data.data.length=3
            }
        })
    },
    methods:{
        logding(commentId){
           this.commentId=commentId
           this.$refs.inputDom.showtrue()
        },
       
       
        hanclick(){
            this.$router.push({
                path:'/Home'
            })
        },
        loadPage(){
           this.$axios({
            url:'/post/'+this.$route.query.id
        }).then(res=>{
            // console.log(res.data);
            this.postData=res.data.data
            // console.log(this.postData.user.nickname);
        })
        },
        handleLike(){
            this.$axios({
                url:'/post_like/'+this.$route.query.id
            }).then(res=>{
                // console.log(res.data);
                if(res.data.message=='点赞成功'){
                    this.postData.like_length+=1
                    this.postData.has_like=true
                }else{
                    this.postData.like_length-=1
                    this.postData.has_like=false
                }
            })
        },
        handleFollow(){
            if(this.postData.has_follow){
               this.$axios({
                   url:'/user_unfollow/'+this.postData.user.id
               }).then(res=>{
                //    console.log(res.data);
                   this.postData.has_follow=false
               })
            }else{
                this.$axios({
                    url:'/user_follows/'+this.postData.user.id
                }).then(res=>{
                    // console.log(res.data);
                    this.postData.has_follow=true
                })
            }
        }
    }

}
</script>
<style lang="less" scoped>
      .news{
          margin-top: 20/360*100vw;
          .news-top{
              display: flex;
              padding: 0 10/360*100vw;
              .left{
                  flex: 1;
                  display: flex;
                  .iconjiantou2{
                      font-size: 20/360*100vw;
                      margin-bottom: 20/360*100vw;
                  }
                  .iconnew{
                      font-size: 54/360*100vw;
                      line-height: 23/360*100vw;
                  }
              }
              .news-btn{
                  border: 1px solid #ccc;
                 width: 62/360*100vw;
                 height: 26/360*100vw;
                 line-height: 26/360*100vw;
                  font-size: 13/360*100vw;
                  border-radius: 13/360*100vw;
                  color: #888;
                  text-align: center;
              }
          }
          .news-title{
              font-weight: 700;
              padding: 0 10/360*100vw;
          }
          .news-time{
              margin-top: 10/360*100vw;
              display: flex;
              align-items: center;
              padding: 0 10/360*100vw;
              .hotnews{
                  font-size: 15/360*100vw;
                  color: #888;

              }
              .time{
                  margin-left: 10/360*100vw;
                  font-size: 13/360*100vw;
                  color: #888;
              }
          }
          /deep/.news-content{
              margin-top: 20/360*100vw;
              font-size: 15/360*100vw;
              color: #888;
              padding: 0 5/360*100vw;
              img{
                  width: 100%;
                  object-fit: cover;
              }
          }
          .news-button{
              display: flex;
              margin-top: 40/360*100vw;
              padding: 0 60/360*100vw;
              padding-bottom: 20/360*100vw;
              justify-content: space-between;
              border-bottom: 4px solid #ccc;
               font-size: 14/360*100vw;
              .news-dianzan{
                  border: 1px solid #ccc;
                  width: 79/360*100vw;
                  height: 29/360*100vw;
                  text-align: center;
                  line-height: 29/360*100vw;
                  border-radius: 14.5/360*100vw;
                  color: #888;
              }
              .news-weixin{
                   border: 1px solid #ccc;
                  width: 79/360*100vw;
                  height: 29/360*100vw;
                  text-align: center;
                  line-height: 29/360*100vw;
                  border-radius: 14.5/360*100vw;
                  color: #888;
                 
                  .iconweixin{
                      color: #0a0;
                  }
              }
          }
          .brilliant{
              margin-top: 20/360*100vw;
              .title{
                  font-weight: 700;
                  font-size: 18/360*100vw;
                  margin-left: 140/360*100vw;
                  color: #000;

              }
              .content{
                  margin-top: 10/360*100vw;
                  padding: 0 10/360*100vw;
                //   display: flex;
                  
                  border-bottom: 1px solid #ccc;
                  .content-left{
                      display: flex;
                    //   flex-direction: column;
                      flex: 1;
                   
                   img{
                      width: 30/360*100vw;
                      height: 30/360*100vw;
                      border-radius: 15/360*100vw;
                  }
                  .content-name{
                      margin-left: 10/360*100vw;
                      font-size: 14/360*100vw;
                       span{
                           margin-left: 200/360*100vw;
                           font-size: 13/360*100vw;
                           color: #888;
                       }
                  }
                  .content-time{
                      margin-left: 10/360*100vw;
                      font-size: 12/360*100vw;
                      color: #ccc;
                  }
                  
                  }
                  .content-list{
                      margin: 20/360*100vw 0;
                      font-size: 14/360*100vw;
                      

                  }
                
                  
                  
              }
          }
          .videoPost{
              margin-top: 20/360*100vw;
              .iconjiantou2{
                  font-size: 25/360*100vw;
                 margin-left: 10/360*100vw;
              }
              video{
                  width: 100%;
              }
              .info{
              margin-top: 20/360*100vw;
              display: flex;
              .info-left{
                   font-size: 14/360*100vw;
                   color: #ccc;
                   flex: 1;
                   display: flex;
                   align-items: center;
                  img{
                      width: 25/360*100vw;
                      height: 25/360*100vw;
                      border-radius: 50%;
                      object-fit: cover;
                      padding: 0 10/360*100vw;
                  }
              }
              .info-right{
                  width: 62/360*100vw;
                  height: 26/360*100vw;
                  border: 1px solid #ccc;
                  border-radius: 13/360*100vw;
                  line-height: 26/360*100vw;
                  text-align: center;
                  margin-right: 20/360*100vw;
                  margin-left: 280/360*100vw;
              }
          }
          .content{
              margin-top: 20/360*100vw;
              margin-left: 20/360*100vw;
          }
          }
          .comment{
              margin-top: 10/360*100vw;
              h2{
                margin-left: 142/360*100vw;
                font-size: 20/360*100vw;
              }
          }
          .buttom{
              margin-left: 10/360*100vw;
              text-align: center;
              margin-bottom: 20/360*100vw;
              margin-top: 20/360*100vw;
              .more{
                  margin-left: 95/360*100vw;
                  width: 150/360*100vw;
                  height: 30/360*100vw;
                  line-height: 30/360*100vw;
                  border-radius: 15/360*100vw;
                  border: 1px solid #ccc;
                  font-size: 14/360*100vw;
              }
          }
         
      }
          
</style>