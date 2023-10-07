<template>
  <div class="content-top">
      <div class="top">
      <span class="iconfont iconjiantou2" @click="hanclick"></span>
      <div class="bianji">我的收藏</div>
    </div>
    <div class="list">
       <PostItem
        :postData="post"
        v-for="post in postList"
        :key="post.id"
    />
    </div>
  </div>
</template>

<script>
import collect from '../components/collectlist'
import PostItem from '../components/Postltem'
export default {
  data(){
    return{
      postList:[]
    }
  },
     methods:{
       hanclick(){
         this.$router.push({
           path:'/Personal'
         })
       }
     },
     components:{
     collect,
     PostItem
     },
     created(){
       this.$axios({
         url:'/user_star',
         headers:{
           Authorization:"Bearer "+localStorage.getItem('token')
         }
       }).then(res=>{
         this.postList=res.data.data
       })
     }
     
}
</script>

<style lang="less" scoped>
.content-top{
  margin-top: 20/360*100vw;
  .top{
        display: flex;
        margin-bottom: 20/360*100vw;
        .iconjiantou2{
          margin-left: 10/360*100vw;
        }
        .bianji{
          margin-left: 120/360*100vw;
          font-weight: 700;
        }
      }
}

</style>