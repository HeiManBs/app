<template>
    <div class="index-index">
        <div class="box">
            <img src="../assets/00.png" alt="">
        </div>
        <div class="boxs">
            <Navtab/>
        </div>
 
    </div>
</template>

<script>
import Navtab from '../components/navTab.vue'
export default {
    props:['a'],
    components:{
   Navtab
    },
    name: 'NewGuanyu',

    data() {
        return {
            
        };
    },

    mounted() {
        console.log(this.a,'guanyu')
        
    },

    methods: {
        
    },
};
</script>

<style lang="less" scoped>
.index-index{
    position: relative;
    height: 100vh;
.box{
    padding-top: 20/360*100vw;;
    width: 100%;
    // height: 74vh;
    img{
      width: 100%;
    }
}
.boxs{
    position: absolute;
     bottom: 0;
    left: 0;
    width: 100%;
}
}
 
</style>