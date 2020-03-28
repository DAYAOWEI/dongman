<template>
  <div>

    <van-button type="primary" text="登陆" @click="show = true">注册</van-button>
    <van-overlay :show="show" @click="show = true">
      <div class="wrapper" @click.stop="show=false">
        <div class="block"  @click.stop>
          
          <div class="conent">
            <div class="one">登陆</div>
            <div class="items">
               <div class="item"><input type="text"  placeholder="请输入用户名" v-model="val1"></div>
              <div class="item"><input type="text"  placeholder="请输入密码" v-model="val2"></div>
              <div class="item"><input type="text"  placeholder="请确定密码" v-model="val3"></div>
            </div>
           
           <div class="foot">
              <div class="login" @click="check">注册</div>
            <div class="foot1">
                <span class="one">已有账号登陆</span>  
                
            </div>
            <div class="foot2">
                <span>注册登陆即表示同意</span><span class="one">用户协议  隐私政策</span>
            </div>
           </div>
           

        </div>
        </div>
      </div>
    </van-overlay>

  </div>
</template>
<script>
import {Overlay,button} from "vant";
import {mapState}  from 'vuex'
export default {
  name: "register",
  components:{
     [Overlay.name]:Overlay,
     [button.name]:button
  },
   data() {
    return {
      show: false,
      val1:'',
      val2:'',
      val3:'',
    };
  },
  methods:{
   check(){
     
   
     if(this.val1===""){
       alert("请输入用户名")
     }
     else{
        if(this.val2===""){
          alert("请输入密码")
        }
        else{       
          if(this.val3!==this.val2||this.val2===''){
            alert("密码不一致")
          }
          else{
             //添加这些资料 用户名 密码  统计 喜欢的图片
          let arr={
            [this.val1]:{
              name:this.val1,
              password:this.val2,
              love:this.love,
              count1:this.count1,
              count2:this.count3,
              count3:this.count3,
            }
          }
            //添加这些资料 用户名 密码  统计 喜欢的图片添加到users
            //判断是第一次注册还是已经注册过了
            if(this.users.length===0){
              //第一次注册
              //保存到localstore中
              this.users.push(arr)
              this.$store.commit('save')
              alert("注册成功")
            }
            else{
           let len=this.users.length   
       for(let i=0;i<len;i++){
        console.log(this.users[i][this.val1])
        if(this.users[i][this.val1]){//判断用户是否存在
                alert("已经注册过了")
             }

         if(!this.users[i][this.val1]){
           alert("注册成功")
           this.users.push(arr)
           this.$store.commit('save')
         }
         }
                 
               
            }

          }




        }
     }
   }
   },
   computed:{
     ...mapState({
       users:'users',
       love:'love',
       count1:'count1',
       count2:'count2',
       count3:'count3',
     })
   }
};
</script>
<style scoped>

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.block {
  
  width:350px;
  height: 350px;
  background-color: #fff;
}
.stop {
  color: red;
}
.conent{
color: rgb(155, 148, 148);
width:85%;
margin:0 auto;

}
.foot1{
  display: flex;
  justify-content: center;
}
.one{
  height: 50px;
  line-height: 50px;
  
  font-size: 12px;
  color:rgb(116, 186, 226);
}
span{
   font-size: 12px;
}

.tiem{
  width:100%;
}
.items input{
  box-sizing:border-box;
  width: 100%;
  height: 30px;
  margin-top: 10px;
  margin-bottom: 5px;
  padding:0 5px;
}
.fr{
  float: right;
}
.foot{
  width:100%;
}
.login{
  color:white;
  font-size: 14px;
  height: 40px;
  line-height: 40px;
  margin-top: 5px;
  width:100%;
  text-align: center;
  background: rgb(57, 119, 235);
}
</style>