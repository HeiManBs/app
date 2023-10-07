<template>
  <div>
      <!-- 用户名和密码 -->
      <div class="register-input">
        <input :type="type" :placeholder="placeholder" v-model="val" :class="{error:!isvalid}"
        @blur="hanclick"
         @keyup.enter="keyup"><br>
       
    </div>
  </div>
</template>

<script>
// 引入局部ul库
import Vue from 'vue';
import { Toast } from 'vant';
Vue.use(Toast);

export default {
         props:['placeholder','type','rule','successMsg','errorMsg'],
         data(){
             return{
                  val:'',
                  isvalid:true
             }
         },
         watch:{
             val(){
                //  console.log('点了我');
                // var reg =/abc/
                if(this.rule.test(this.val)){
                    console.log(this.successMsg);
                    this.isvalid=true
                }else{
                    console.log(this.errorMsg);
                    this.isvalid=false
                }
                this.$emit('valchange',this.val)
             },
             keyup(){
                 this.$emit('keyup',this.input)
             }
             

         },
         methods:{
             hanclick(){
                if(!this.isvalid){
                //   alert('输入的内容不完整')
            //    this.$toast.fial('输入的内容不完整')
           Toast.fail('输入的内容不完整');
                }else{
                    // alert('输入的内容正确')
                //   this.$toast.success('输入的内容正确')
              
                }
             }
         }
}
</script>

<style lang="less" scoped>
 .register-input{
       margin-top: 30/360*100vw;
       margin-left: 60/360*100vw;
       input{
           width: 240/360*100vw;
           height: 60/360*100vw;
            border: none;
           outline: none;
           border-bottom: 1px solid #000;
           
       }
       .error{
           border-bottom: 1px solid red;
       }
   }
</style>