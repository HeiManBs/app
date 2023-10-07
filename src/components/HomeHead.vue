<template>
 <div class="top">
          <span class="iconfont iconnew"></span>
          <div class="search" @click="navNews">
              <span class="iconfont iconsearch"></span>
              搜索新闻
          </div>
          <span class="iconfont iconwode" @click="myHome"></span>
      </div>
</template>

<script>
export default {
        methods:{
        myHome(){
            this.$router.push({
                path:'/Personal'
            })
        },
         navNews(){
        this.$router.push({
            path:'/navnews'
        })
    }
    },
    }


</script>

<style lang="less" scoped>
 .top{
           display: flex;
           align-items: center;
           height: 49/360*100vw;
           line-height: 49/360*100vw;
           background-color: red;
    .iconnew{
           font-size: 54/360*100vw;
           color: #fff;
           padding-left: 10/360*100vw;
       }
       .search{
           text-align: center;
           flex: 1;
           height: 34/360*100vw;
           line-height: 34/360*100vw;
           border-radius: 17/360*100vw;
           color: #fff;
          background-color:  rgba(236, 229, 229, 0.6);
          margin: 0 20/360*100vw;
       }
       .iconwode{
           font-size: 32/360*100vw;
           color: #fff;
           opacity: 0.8;
           padding-right: 10/360*100vw;
       }
       }
</style>