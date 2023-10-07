<template>
  <div class="hotContent">
      <div class="title">
          <span class="iconfont iconjiantou2" @click="$router.push('/article?id='+$route.query.id)"></span>
          <div class="hottitle">精彩跟帖</div>
      </div>
     <div class="content">
          <CommentMain
         v-for="comment in commentList"
         :key="comment.id"
         :commentData="comment"
         />
         <div class="button">
            ---------没有更多了---------
         </div>
     </div>
  </div>
</template>

<script>
import CommentMain from '../components/comment/CommentMain'

export default {
    data(){
        return{
            commentList:[]

        }
    },
    components:{
       CommentMain,
     
    },
    created(){
        this.$axios({
            url:'/post_comment/'+this.$route.query.id
        }).then(res=>{
            console.log(res.data);
            this.commentList=res.data.data
        })
    }

}
</script>

<style lang="less" scoped>
  .hotContent{
      margin-top: 20/360*100vw;
      .title{
          margin-left: 10/360*100vw;
          display: flex;
          align-items: center;
          .iconjiantou2{
              font-weight: 700;
          }
          .hottitle{
              margin-left: 120/360*100vw;
              font-weight: 700;
          }
      }
      .content{
          margin-top: 20/360*100vw;
      }
      .button{
          margin-left: 100/360*100vw;
          margin-bottom: 10/360*100vw;
          font-size: 15/360*100vw;
          color: #ccc;

      }
  }
</style>