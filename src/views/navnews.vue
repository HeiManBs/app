<template>
  <div class="navnews">
      <div class="top">
          <span class=" iconfont iconjiantou" @click="myHome"></span>
          <div class="nav">
              <span class="iconfont iconsearch"></span>
              通灵兽消失术
          </div>
          <div class="search">搜索</div>
      </div>
      <div class="content">
          <div class="content-top">
              历史记录
          </div>
          <span>美女</span>
      </div>
      <div class="hot">
          <div class="hot-top">
              热门搜索
          </div>
          <div class="hot-content">
              <div class="hot-left">办公室小野否认解散</div>
          <div class="hot-right">月季如何让嫁接</div>
          </div>
          <div class="hot-content">
              <div class="hot-left">办公室小野否认解散</div>
          <div class="hot-right">月季如何让嫁接</div>
          </div>
          <div class="hot-content">
              <div class="hot-left">办公室小野否认解散</div>
          <div class="hot-right">月季如何让嫁接</div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    methods:{
        myHome(){
            this.$router.push({
                path:'/Home'
            })
        }
    }

}
</script>

<style lang="less" scoped>
  .navnews{
      margin-top: 20/360*100vw;
      .top{
          display: flex;
          align-items: center;
          .iconjiantou{
              font-size: 20/360*100vw;
              padding-left: 15/360*100vw;
          }
          .nav{
              flex: 1;
              height: 38/360*100vw;
              line-height: 38/360*100vw;
              border: 1px solid #ccc;
              border-radius: 19/360*100vw;
              margin: 0 20/360*100vw;
              padding-left: 30/360*100vw;
              font-size: 13/360*100vw;
          }
          .search{
              padding-right: 15/360*100vw;
          }
      }
      .content{
          height: 80/360*100vw;
        //   background-color: #0a0;
          margin-top: 20/360*100vw;
         padding-left: 20/360*100vw;
         border-bottom: 1px solid #ccc;
          .content-top{
              margin-bottom: 15/360*100vw;
              font-weight: 700;
          }
          span{
              padding-bottom: 10/360*100vw;
              font-size: 15/360*100vw;
          }
      }
      .hot{
          margin-top: 20/360*100vw;
          .hot-top{
              font-weight: 700;
              padding-left: 15/360*100vw;
          }
          .hot-content{
              margin-top: 20/360*100vw;
              padding-left: 15/360*100vw;
              display: flex;
              .hot-left{
                  padding-right: 30/360*100vw;
                  font-size: 15/360*100vw;
              }
              .hot-right{
                  font-size: 15/360*100vw;
              }
          }
      }
  }
</style>