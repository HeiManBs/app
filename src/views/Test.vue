
<template>
  <div>
      <CommentMain
      :commentData="comment"
      v-for="(comment,index) in commentList"
      :key="index"
      />
  </div>
</template>

<script>
import CommentMain from '../components/comment/CommentMain'
export default {
    components:{
        CommentMain,
       
    },
    data(){
        return{
             commentList:[]
        }
    },
        created(){
            this.$axios({
                url:'/post_comment/'+1
            }).then(res=>{
                console.log(res.data);
                this.commentList=res.data.data
            })
        }
    }


</script>

<style>

</style>