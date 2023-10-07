<template>
  <div class="user">
   
      <div class="top">
      <span class="iconfont iconjiantou2" @click="hanclick"></span>
      <div class="bianji">编辑资料</div>
    </div>
    <div class="img">
    <div class="content">
      <van-uploader :after-read="afterRead" v-if="userInfo.nickname"/>
       <img v-if="userInfo.head_img" :src="$axios.defaults.baseURL+userInfo.head_img" alt="">
      <img v-else src="../assets/123.png" alt="">
    </div>
    
    <button>更换头像</button>
    
   </div>
    <Personal class="ml" text="昵称" :msg="userInfo.nickname" @click="showNickname=true"/>
     <Personal class="ml" text="密码" msg="********" @click="showPassword=true"/>
      <Personal class="ml" text="性别" :msg="userInfo.gender == 0 ? '女':'男'" @click="showGender=true"/>
      <div class="buttom" @click="SaveChanges">保存修改</div>
      <van-dialog v-model="showNickname" title="修改昵称" show-cancel-button @confirm="NickName">
       <van-cell-group>
      <van-field v-model="newnickname"  placeholder="请输入用户名" />
     </van-cell-group>

      </van-dialog>
      <van-dialog v-model="showPassword" title="修改密码" show-cancel-button @confirm="clickpassword">
       <van-cell-group>
      <van-field v-model="newpassword"  placeholder="请输入密码" type="password" />
     </van-cell-group>

      </van-dialog>
      <van-action-sheet v-model="showGender" :actions="genderList" @select="setGender" />

   
  </div>
</template>

<script>
import Personal from '../components/ParsonalInput'
import { Dialog } from 'vant';
import { Field } from 'vant';
import { ActionSheet } from 'vant';
import { Toast } from 'vant';
import { Uploader } from 'vant';
export default {
  data(){
    return{
      userInfo:{},
       showNickname:false,
       newnickname:'',
       showPassword:false,
       newpassword:'',
       showGender:false,
       genderList: [{ name: '男生' ,genderCode:1}, { name: '女生',genderCode:0 }],
    }
  },
  components:{
    Personal

  },
  
  created(){
   this.logigin()
  },
  methods:{
    //修改图片
    afterRead(fileobj){
      //要先用 FormData 对象将图片转换为二进制形式的数据
      console.log(fileobj.file);
      var data = new FormData ()
      data.append('file',fileobj.file)

   this.$axios({
       headers:{
                Authorization:"Bearer "+localStorage.getItem('token')
             },
      url:'/upload',
      method:'POST',
      data,
    }).then(res=>{
     if(res.data.message ==='文件上传成功'){
        console.log(res.data.data.url);
        this.editProfile({
          head_img:res.data.data.url
          
        })
     }else{
        Toast.fail('上传失败，请稍后再试');
     }
    })
    
    
    },
    //封装请求函数
    editProfile(dataObj){
      this.$axios({
        headers:{
          Authorization:"Bearer "+localStorage.getItem('token')
             },
      url:'/user_update/'+localStorage.getItem('userId'),
      method:'POST',
      data:dataObj,

    }).then(res=>{
      console.log(res.data);
     this.logigin()
    })
    },
    //点击保存跳转
    SaveChanges(){
         Toast('修改成功，正在跳转...');
         setTimeout(() => {
           this.$router.push({
           path:'/Personal'
         })
         }, 2000);
    },
    //修改性别
    setGender(item){
      console.log(item);
      this.$axios({
       headers:{
                Authorization:"Bearer "+localStorage.getItem('token')
             },
      url:'/user_update/'+localStorage.getItem('userId'),
      method:'POST',
      data:{
        gender:item.genderCode
      }

    }).then(res=>{
      console.log(res);
     this.logigin()
     this.showGender=false
    })
      
    },
    //点击跳转主页
    hanclick(){
      this.$router.push({
        path:'/Personal'
      })
    },
    //修改昵称
    NickName(){
      if(!this.newnickname){
       Toast.fail('昵称不能为空');
      }else{
      this.$axios({
       headers:{
                Authorization:"Bearer "+localStorage.getItem('token')
             },
      url:'/user_update/'+localStorage.getItem('userId'),
      method:'POST',
      data:{
        nickname:this.newnickname
      }

    }).then(res=>{
     this.logigin()
     this.newnickname=''
    })
    }
    
  },
  //封装重新渲染页面请求
  logigin(){
     this.$axios({
       headers:{
                Authorization:"Bearer "+localStorage.getItem('token')
             },
      url:'/user/'+localStorage.getItem('userId'),

    }).then(res=>{
      // console.log(res);
      this.userInfo=res.data.data
    })
  },
  //修改密码
  clickpassword(){
    if(!this.newpassword){
       Toast.fail('密码不能为空');
    }else{

      this.$axios({
        headers:{
          Authorization:"Bearer "+localStorage.getItem('token')
             },
      url:'/user_update/'+localStorage.getItem('userId'),
      method:'POST',
      data:{
        password:this.newpassword
      }

    }).then(res=>{
     this.logigin()
     console.log(res);
     this.newpassword=''
    })
    
  }
  }
  },
  

}
</script>

<style lang="less" scoped>
    .user{
      margin-top: 20/360*100vw;
      .img{
        height:200/360*100vw;
        background: url('../assets/456.jpg')no-repeat;
        // margin-bottom: 20/360*100vw;
      }
      .top{
        display: flex;
        .iconjiantou2{
          margin-left: 10/360*100vw;
        }
        .bianji{
          margin-left: 120/360*100vw;
          font-weight: 700;
        }
      }
      .content{
        margin-top: 10/360*100vw;
         margin-left: 145/360*100vw;
         display: flex;
         img{
           width: 70/360*100vw;
           height: 70/360*100vw;
           border-radius: 50%;
           padding-top: 50/360*100vw;
         }
      }
      button{
        width: 120/360*100vw;
        margin-left: 119/360*100vw;
        margin-top: 30/360*100vw;
        // outline: none;
        border: 1px solid #ccc;
        background: none;
        color: #ccc;
      }
      .ml{
        margin-left: 25/360*100vw;
      }
      .buttom{
        width: 300/360*100vw;
        margin-left: 30/360*100vw;
        margin-top: 115/360*100vw;
        height: 50/360*100vw;
        background-color: #ccc;
        line-height: 50/360*100vw;
        text-align: center;
      }
      
    }
   /deep/ .van-uploader{
   position: absolute;
    top: 93px;
    left: 104px;
    opacity: 0;

   }
   /deep/ .van-uploader__upload {
     width: 110px;
     height: 110px;
   }
</style>