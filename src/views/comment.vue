<template>
  <div class="content">
      <div class="top">
      <span class="iconfont iconjiantou2" @click="hanclick"></span>
      <div class="bianji">我的跟帖</div>
    </div>
    <div class="content_word" v-for="comment in commentList" :key="comment.id" :commentData="comment">
      <!-- <div class="content_top">
        <div class="time">
          <span>2019-10-10</span>
        <span>10:25</span>
        </div>
         <div class="content-list">啊信是张信哲吗？张信哲是不是的张学友弟弟？</div>
        <div class="buttom">
           <div class="content-buttom">
           原文：阿信分享《说好不哭》幕后故事：只听...
         </div>
        <span class="iconfont iconjiantou1"></span>
        </div>
      </div> -->
      <div class="content_center" v-if="comment.parent">
        <div class="time">
           <span>2019-10-10</span>
        <span>10:25</span>
        </div>
        <div class="centenr">
          <span>回复：{{comment.parent.user.nickname}}</span><br>
          <span>{{comment.parent.content}}</span>
        
        </div>
      </div>
      <div class="content_buttom">
        <div class="no">{{comment.content}}</div>
        <div class="buttom-list">
          <div class="buttom-word">原文：{{comment.post.title}}</div>
          <span class="iconfont iconjiantou1"></span>
        </div>
      </div>
    </div>
     <div class="very-buttom">
        <span>更多更贴</span> 
        <div class="jiantou">》</div>
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      commentList:[]
    }
  },
  methods:{
    hanclick(){
      this.$router.push({
        path:'/Personal'
      })
    }
  },
  created(){
    this.$axios({
      url:'/user_comments'
    }).then(res=>{
      console.log(res.data);
      this.commentList=res.data.data
    })
  }

}
</script>
<style lang="less" scoped>
.content{
  margin-top: 20/360*100vw;
  .top{
        display: flex;
        .iconjiantou2{
          margin-left: 10/360*100vw;
        }
        .bianji{
          margin-left: 120/360*100vw;
          font-weight: 700;
        }
      }
      .content_word{
  margin-top: 30/360*100vw;
  .content_top{
    padding-left: 15/360*100vw;
    padding-right: 15/360*100vw;
    border-bottom: 1px solid #ccc;
    .time{
      margin-bottom: 8/360*100vw;
      span{
        color: #ccc;
        font-size: 15/360*100vw;
        margin-right: 10/360*100vw;
      }
    }
    .content-list{
      font-size: 15/360*100vw;
    }
    .buttom{
      display: flex;
      margin-top: 8/360*100vw;
      margin-bottom: 15/360*100vw;
      .content-buttom{
        flex: 1;
      font-size: 13/360*100vw;
      color: #ccc;
    }
    .iconjiantou1{
      color: #ccc;
    }
    }
    
  }
}
.content_center{
  margin-top: 15/360*100vw;
  padding-left: 15/360*100vw;
  .time{
      margin-bottom: 5/360*100vw;
      span{
        color: #ccc;
        font-size: 15/360*100vw;
        margin-right: 10/360*100vw;
      }
    }
    .centenr{
      width: 321/360*100vw;
      height: 70/360*100vw;
      line-height: 35/360*100vw;
      background-color: #ccc;
      span{
        font-size: 13/360*100vw;
        color: #868686;
        padding-left: 10/360*100vw;
       padding-top: 20/360*100vw;
      }
    }
}
.content_buttom{
  margin-top: 20/360*100vw;
  padding-left: 15/360*100vw;
  border-bottom: 1px solid #ccc;
  .no{
    font-size: 15/360*100vw;
    margin-bottom: 10/360*100vw;
  }
  .buttom-list{
    font-size: 13/360*100vw;
    display: flex;
    color: #ccc;
    margin-bottom: 12/360*100vw;
    padding-right: 15/360*100vw;
    .buttom-word{
      flex: 1;
    }
  }
  
}
.very-buttom{
    margin-left: 140/360*100vw;
    margin-top: 30/360*100vw;
    margin-bottom: 30/360*100vw;
    font-size: 12/360*100vw;
    color: #868686;
    display: flex;
    align-items: center;

    span{
      font-family: "微软雅黑";
      margin-right: 5/360*100vw;
    }
    .jiantou{
      font-family: "宋体";
    }
  }
}

</style>
