<template>
      <div class="input" @click="hanclick">
          <!-- <span class={{class}}></span> -->
       <div class="left">{{text}}</div>
       <div class="right">{{msg}}</div>
       <span class="iconfont iconjiantou1"></span>
   </div>
</template>

<script>
export default {
    props:['text','msg',],
    methods:{
        hanclick(){
            this.$emit('click')
        }
    }
}
</script>

<style lang="less" scoped>
.input{
    display: flex;
    border-bottom: 1px solid #ccc;
    height: 60/360*100vw;
    line-height: 60/360*100vw;
    margin-left: 0/360*100vw;
    .left{
        flex: 1;
        // margin-left: 20/360*100vw;
        font-size: 16/360*100vw;
        color: #000;
    }
    .right{
        color: #ccc;
        font-size: 14/360*100vw;
        margin-right: 10/360*100vw;
    }
    .iconjiantou1{
        color: #ccc;
        margin-right: 10/360*100vw;
    }
}
</style>