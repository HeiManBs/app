<template>
    <div v-if="parentData.parent" class="top-content"> 
   <Parent v-if="parentData.parent" :parentData="parentData.parent"/>
  <div class="content">
  
  <div class="info">
     <div class="name">
          <div class="username">
         ({{parentData.user.nickname}})
      </div>
      <div class="date">
          2小时前
      </div>
     </div>
      <div class="btn">
          回复
      </div>
  </div>
   <div class="user-content">
        {{parentData.content}}
   </div>
  </div>
  </div> 
</template>

<script>
export default {
    name:'Parent',
    props:['parentData']

}
</script>

<style lang="less" scoped>
.top-content{
    border: 1px solid #ccc;
    margin-top: 15/360*100vw;
    .info{
        display: flex;
        .name{
        display: flex;
        flex: 1;
        margin-left: 10/360*100vw;
        margin-top: 10/360*100vw;
           .username{
            font-size: 17/360*100vw;
            color: skyblue;
        }
        .date{
            font-size: 10/360*100vw;
            color: #888;
            margin-left: 10/360*100vw;
        }
        }
        .btn{
            font-size: 12/360*100vw;
            color: #888;
            margin: 10/360*100vw;
        }
       
    }
    .user-content{
        margin: 10/360*100vw;
        font-size: 13/360*100vw;
    }
}
</style>