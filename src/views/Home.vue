<template>
<van-pull-refresh v-model="isLoading" @refresh="onRefresh">
  <div class="news">
        <HomeHead/>
        <van-tabs v-model="activeIndex" class="father">
            <div class="son" @click="$router.push('/column')">+</div>
            <van-tab 
                :title="category.name"
                v-for="category in categorylist"
                :key="category.id"
            >
                <!-- 分类内容, 以后文章就是放到这里 -->
                <!-- 这里当前激活分类就是被遍历出来的 category
                文章就在里面的 category.postList -->
              
                <van-list
                    v-model="category.loading"
                    :finished="category.finished"
                   
                    :immediate-check="false"
                    finished-text="----------------我是有底线的----------------"
                    @load="loadMorePost"
                >
                    <PostItem
                        :postData="post"
                        v-for="post in category.postList"
                        :key="post.id"
                    />
                   
                </van-list>
                
            </van-tab>
        </van-tabs>

  </div>
  </van-pull-refresh>
</template>

<script>
import { Tab, Tabs } from 'vant';
import PostItem from '../components/Postltem'
import HomeHead from '../components/HomeHead'
import { PullRefresh } from 'vant';
import { Toast } from 'vant';
export default {
    data(){
       return{
           activeIndex:localStorage.getItem('token')?1:0,
           categorylist:[],
           count: 0,
      isLoading: false,
       }
    },
    components:{
     PostItem,
      HomeHead

    },
    computed:{
        curCate(){
            return this.categorylist[this.activeIndex]
        }
    },
    watch:{
   activeIndex(){
       if(this.curCate.postList.length==0){
       this.loadPost()
       }
   }
    },
    created(){
        this.$axios({
            url:'/category'
        }).then(res=>{
            // console.log(res.data.data);
            this.categorylist=res.data.data.map(category=>{
                return{
                    ...category,
                    postList:[],
                    pageSize:5,
                    pageIndex:1,
                    loading:false,
                    finished:false
                }
            })
             
            // console.log(this.categorylist);
            this.loadPost()
        })
    },
    methods:{
         onRefresh() {
      setTimeout(() => {
        Toast('刷新成功');
        this.isLoading = false;
        this.count++;
      }, 1000);
    },
        loadMorePost(){
            setTimeout(() => {
                this.curCate.pageIndex+=1
            this.loadPost()
            }, 1000);
        },
        loadPost(){
            this.$axios({
                url:'/post',
                params:{
                    category:this.curCate.id,
                    pageSize:this.curCate.pageSize,
                    pageIndex:this.curCate.pageIndex
                }
            }).then(res=>{
                // console.log(res.data);
                this.curCate.postList=[
                    ...this.curCate.postList,
                    ...res.data.data
                ]
                this.curCate.loading=false
                if(res.data.data.length<this.curCate.pageSize){
                    this.curCate.finished=true

                }
            })
        }
    }
   
}
</script>

<style lang="less" scoped>
   .news{
       margin-top: 20/360*100vw;
      
      
   }
//    /deep/ .van-tab:nth-last-child(2){
//     background-color: #fff;
//     position: sticky;
//     right: -8px;
//     line-height: 44px;
//     width: 44px;
//     font-size: 18/360*100vw;
//     font-weight: 700;
// }
.father{
    position: relative;
    .son{
        position: absolute;
        width: 45/360*100vw;
        height: 30/360*100vw;
        line-height: 30/360*100vw;
        text-align: center;
        background-color: #fff;
        top: 8/360*100vw;
        right: 0;
        color: #e4e4e4;
        font-size: 40/360*100vw;
    }
}
</style>