<template>
  <div>
      <div class="maincomment">
          <div class="top">
              <img class="img" v-if="commentData.user.head_img" :src="$axios.defaults.baseURL + commentData.user.head_img" alt="">
              <img class="img" v-else src="../../assets/123.png" alt="">
              <div class="info">
                  <div class="username">
                      {{commentData.user.nickname}}
                  </div>
                  <div class="date">
                      3小时前
                  </div>
              </div>
              <div class="btn" @click="logding">回复</div>
          </div>
      <CommentParent
      :parentData="commentData.parent"
      v-if="commentData.parent"
      />
     <div class="userContent">
          {{commentData.content}}
     </div>
  </div>
  </div>
</template>

<script>
import CommentParent from './parent'
import eventBus from '../../utils/eventBus'
export default {
    methods:{
       logding(){
           this.$emit('logding',this.commentData.id) 
           eventBus.$emit('callReply')
       }
    },
    components:{
        CommentParent,
    },
    props:["commentData"],
    
}
</script>

<style lang="less" scoped>
.maincomment{
    padding: 10/360*100vw;
    margin: 10/360*100vw;
    border: 1px solid #ccc;
    .top{
        display: flex;
        align-items: center;
        .img{
            width: 35/360*100vw;
            height: 35/360*100vw;
            border-radius: 50%;
        }
        .info{
            flex: 1;
            margin-left: 10/360*100vw;
            .username{
                font-size: 15/360*100vw;
                color: #000;
            }
            .date{
                font-size: 12/360*100vw;
            }
        }
        .btn{
            font-size: 14/360*100vw;
        }
    }
    .userContent{
        font-size: 16/360*100vw;
        padding-top: 10/360*100vw;
        color: #888;
    }
}
</style>