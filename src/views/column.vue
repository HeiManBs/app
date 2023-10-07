<template>
  <div class="column">
      <div class="head">
          <span class="iconfont iconjiantou2" @click="hanclick"></span>
           <div class="title">栏目管理</div>
      </div>
      <div class="column-content">
          <span class="out">点击删除以下频道</span>
          <div class="content">
              <span>推荐</span>
              <span>热点</span>
              <span>娱乐</span>
              <span>科技</span>
              <span>汽车</span>
              <span>财经</span>
              <span>军事</span>
              <span>国际</span>
              <span>时尚</span>
              <span>历史</span>
              <span>故事</span>
             
          </div>
      </div>
      <div class="column-content">
          <span class="out">点击添加以下频道</span>
          <div class="content">
              <span>社会</span>
              <span>体育</span>
              <span>游戏</span>
              <span>旅游</span>
              <span>探索</span>
              <span>美食</span>
              <span>育儿</span>
              <span>养生</span>
              <span>美文</span>
              
             
          </div>
      </div>
  </div>
</template>

<script>
export default {
    methods:{
        hanclick(){
            this.$router.push({
                path:'/Home'
            })
        }
    }
}
</script>

<style lang="less" scoped>
  .column{
      margin-top: 30/360*100vw;
      .head{
          display: flex;
          .iconjiantou2{
              padding-left: 10/360*100vw;
          }
          .title{
              padding-left: 120/360*100vw;
              font-weight: 700;
          }
      }
      .column-content{
          margin-top: 20/360*100vw;
         .out{
             margin-top: 10/360*100vw;
              font-size: 14/360*100vw;
              padding-left: 20/360*100vw;
              color: #888;
          }
          .content{
              display: flex;
              flex-wrap: wrap;
              padding: 0 10/360*100vw;
              span{
                  width: 65/360*100vw;
                  height: 40/360*100vw;
                  line-height: 40/360*100vw;
                  text-align: center;
                  border: 1px solid #ccc;
                  align-items: center;
                  justify-content: center;
                  margin-left: 15/360*100vw;
                  margin-top: 20/360*100vw;
              }
          }
      }
  }
</style>