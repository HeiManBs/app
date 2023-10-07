<template>
    <div class="navBox">
        <div class="box6">
            <div class="one1" @click="handClick('1')">
                <img v-if="fs=='1'" src="../assets/77.png" alt="">
                <img v-else src="../assets/Review.png" alt="">
             
                <span :class="[fs=='1'?'fs':'ff']">防伪查询</span>
            </div>
            <div class="one1"  @click="handClick('2')">
                <img  v-if="fs=='2'" src="../assets/99.png" alt="">
                <img v-else src="../assets/联系人.png" alt="">
                <span :class="[fs=='2'?'fs':'ff']">关于我们</span>
            </div>
            <div class="one1"  @click="handClick('3')">
                <img  v-if="fs=='3'" src="../assets/88.png" alt="">
                <img v-else src="../assets/商城.png" alt="">
                <span :class="[fs=='3'?'fs':'ff']">商城购买</span>
            </div>
          </div>
    </div>
</template>

<script>
export default {
    name: 'NewNavTab',

    data() {
        return {
            fs:'1'
        };
    },

    mounted() {
       this.fs=sessionStorage.getItem('name')?sessionStorage.getItem('name') :'1'
    },

    methods: {
        handClick(a){
      sessionStorage.setItem('name',a)
      if(a=='2'){
        this.$emit('2')
        this.$router.push({
                 path:'/Guanyu'
             })
      }else if(a=='3'){
        this.$emit('3')
        this.$router.push({
                 path:'/Shangcheng'
             })
      }else if(a=='1'){
        this.$emit('1')
        this.$router.push({
                 path:'/'
             })
      }
    }
    },
};
</script>

<style lang="less" scoped>
    .box6{
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    background-color: #49528b;
    font-size: 12/360*100vw;
    .one1{
        display: flex;
        align-items: center;
        flex-direction: column;
        color: #ffffff;
        margin: 0 30/360*100vw;
        img{
            width: 20/360*100vw;
        }
    }
    }
    .fs{
        color: #6f85ea;
    }
    .ff{
        color: #ffffff;
    }
</style>