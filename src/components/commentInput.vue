<template>
  <div>
       <div class="buttom-content">
         <div class="share" v-if="!isAictive">
         <input type="text" class="share-buttom" placeholder="写跟帖" @focus="showtrue" :value="content" >
         <div class="tubiao">
        <span class="iconfont iconpinglun-"></span>
         <span class="iconfont iconshoucang"></span>
         <span class="iconfont iconfenxiang"></span>
         <div class="logding">1120</div>
         </div>
     </div>
       <div class="enadle" v-if="isAictive">
           <textarea rows="3" placeholder="请输入内容" @blur="hideout"  v-model="content" ref="textarea"></textarea>
           <div class="btn" @click="sendclick">发送</div>
       </div>
     </div>
  </div>
</template>

<script>
import eventBus from '../utils/eventBus'
import { Toast } from 'vant';
export default {
    created(){
         eventBus.$on('callReply',(commentId)=>{
           console.log('输入框只带了评论点击');
           this.commentId=commentId
           this.showtrue()
         })
    },
     data(){
            return{
            isAictive:false,
            content:'',
            commentId:''
            }
        },
    methods:{
        showtrue(){
            this.isAictive=true
            this.$nextTick(()=>{
                this.$refs.textarea.focus()
            })
        },
         hideout(){
           setTimeout(() => {
               this.commentId=''
               this.isAictive=false
           }, 100);
        },
         sendclick(){
            console.log('点击');
            if(this.content===''){
             Toast.fail('输入的内容不能为空');
            }else{
               this.$axios({
                 method:'POST',
                 url:'/post_comment/'+this.$route.query.id,
                 data:{
                     content:this.content,
                     parent_id:this.commentId
                 }
             }).then(res=>{
                 if(res.data.message==='评论发布成功'){
                     this.content=''
                     Toast.success(res.data.message);
                 }
             })
            }
            
        },
    }

}
</script>
<style lang="less" scoped>
.buttom-content{
              width: 360/360*100vw;
              height: 120/360*100vw;
            //   background-color: #0a0;
          
          .share{
              margin-left: 20/360*100vw;
              margin-bottom: 10/360*100vw;
             padding-top: 70/360*100vw;
              display: flex;
              align-items: center;
              .share-buttom{
                  width: 180/360*100vw;
                  height: 30/360*100vw;
                  line-height: 30/360*100vw;
                  border-radius: 15/360*100vw;
                  background-color: #d7d7d7;
                  border: 1px solid #ccc;
                  padding-left: 10/360*100vw;
                  font-size: 14/360*100vw;
              }
              .tubiao{
                  display: flex;
                  margin-left: 20/360*100vw;
                  position: relative;
                  .logding{
                      text-align: center;
                      width: 40/360*100vw;
                      height: 20/360*100vw;
                      line-height: 20/360*100vw;
                      border-radius: 10/360*100vw;
                      background-color: red;
                      position: absolute;
                      font-size: 12/360*100vw;
                      color: #fff;
                      top: -10px;
                      left: 7px;
                  }
              .iconpinglun-{
                  font-size: 25/360*100vw;
                  margin-left: 10/360*100vw;
              }
              .iconshoucang{
                  font-size: 25/360*100vw;
                  margin-left: 10/360*100vw;
              }
              .iconfenxiang{
                  font-size: 25/360*100vw;
                  margin-left: 10/360*100vw;
              }
          }
          }
          .enadle{
              display: flex;
              margin-left: 10/360*100vw;
              margin-bottom: 10/360*100vw;
              align-items: flex-end;
              textarea{
                 padding: 10/360*100vw;
                  background-color: #d7d7d7;
                  border: none;
                  outline: none;
                  width: 261/360*100vw;
                  height: 90/360*100vw;
                  border-radius: 20/360*100vw;
                  overflow: hidden;
              }
              .btn{
                  width: 59/360*100vw;
                  height: 26/360*100vw;
                  line-height: 26/360*100vw;
                  text-align: center;
                  border-radius: 13/360*100vw;
                  background-color: red;
                  color: #fff;
                  font-size: 12/360*100vw;
                  margin-left: 6/360*100vw;
              }
          }
          }
</style>