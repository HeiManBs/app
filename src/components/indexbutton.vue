<template>
  <div>
      <div class="register-buttom">
        <button @click=hanclick>{{btnText}}</button>
    </div>
  </div>
</template>

<script>
export default {
    props:["btnText"],
     methods:{
        hanclick(){
            // console.log('已经向父组件发送传值');
            this.$emit('submit')
        }
     }
}
</script>

<style lang="less" scoped>

 .register-buttom{
       margin-left: 50/360*100vw;
       margin-top: 65/360*100vw;
      
         
       
       button{
           width: 260/360*100vw;
             height: 50/360*100vw;
           background-color: red;
           color: #fff;
           border-radius: 25/360*100vw;
           border: none;
           outline: none;
       }
   }
</style>