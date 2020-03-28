<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
import {mapState}  from 'vuex'
import {register} from '@/common/mix.js'
export default {
  data(){
    return {
      data:'5s5'
    } 
  },
  computed:{
    ...mapState({
      love:'love',
      user:'user',
      users:'users',
      count1:'count1',
      count1:'count2',
      count1:'count3',

    })
  },
  watch:{
    love() {
      if(this.user){
        //当在登陆状态点击喜欢就把图片保存到this.users[this.user].love中
        //this.users[this.user]是用户
      for(let i=0;i<this.users.length;i++){
        let user = this.users[i][this.user]//用户
       if(user){
        user.love=this.love
        user.count1=this.count1
        user.count2=this.count2
        user.count3=this.count3
       
       }
       //保存到localStorage
       this.$store.commit('save')
     }
      }
    },
    user(){//登陆状态就把值初始化
      for(let i=0;i<this.users.length;i++){
        let user=this.users[i][this.user]
         if(user){//是该用户才初始化
              //this.love=[];  
              //改变值会报错？  this.love是vuex  state的love要通过mulutations改变
             // this.love=this.love.concat(user.love)
             this.$store.commit('init',user)
  
         }
      } 
    }

  },
  created(){
      
      this.$store.commit('write')
      if(!this.users){//第一次请求值会为null
        this.$store.commit('initusers')
      }
 
}


}

</script>