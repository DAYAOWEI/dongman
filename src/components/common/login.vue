<template>
  <div>

    <van-button type="primary" text="登陆" @click="show = true">登陆</van-button>
    <van-overlay :show="show" @click="show = true">
      <div class="wrapper" @click.stop="show=false">
        <div class="block"  @click.stop>
          
          <div class="conent">
            <div class="one">登陆</div>
            <div class="items">
               <div class="item">
                 <input type="text" placeholder="请输入用户名" v-model="val1">
                 </div>
              <div class="item">
                <input type="text" placeholder="请输入密码" v-model="val2">
                </div>
            </div>
           
           <div class="foot">
              <div class="login" @click="check">登陆</div>
            <div class="foot1">
                <span>没有账号</span><span class="one">注册</span>  
                <span class="one fr">忘记密码</span>
            </div>
            <div class="foot2">
                <span>注册登陆即表示同意</span><span class="one">用户协议  隐私政策</span>
            </div>
            <div class="foot3">
                第三方登陆
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

export default {
  name: "login",
  components:{
     [Overlay.name]:Overlay,
     [button.name]:button
  },
   data() {
    return {
      show: false,
      val1:'',
      val2:'',
    };
  },
  methods:{
   check(){
     let users=this.$store.state.users;
    let is=false;
    let password;

       for(let i=0;i<users.length;i++){
        if(users[i][this.val1]){
          is=true;
          password=this.val2;
        }   
      }
       if(!is){
          alert("没有该用户")  
        }
        else{
             if(password!==this.val2){
               alert("密码错误")
            }
            else{
              //已经登陆了,就提示已经登陆了
              if(this.$store.state.user){
                alert('已经登陆了，请勿重复登陆')
              }
              else{
                  alert("登陆成功，2s后跳转到首页") 
                  this.$store.state.user=this.val1;
                  this.$store.commit('write')
              }
              
            }
 
        }

  }
    
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

.one{
  height: 50px;
  line-height: 50px;
  
  font-size: 12px;
  color:rgb(116, 186, 226);
}
span{
   font-size: 12px;
}
.one:nth-child(1){
  font-size: 16px;
  color:black;
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