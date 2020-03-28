import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations: {
    search(state,value){
      state.value=value;
     
    },
    toimg(state,img){
      state.img=img;
      if(state.love.includes(img)){
        state.is=true;
      }else{
        state.is=false
      }
    },
    add(state,arg){
     if(!state.love.includes(arg)){
       //不包含就添加
      state.love.push(arg)
      
      if(arg.title===state.img1[0].title){
        state.count1++
        state.count1=state.count1;
         }else if(arg.title===state.img2[0].title){
          state.count2++
          state.count2=state.count2;
         }else{
         state.count3++
         state.count3=state.count3;
            }
    
          
     }
     
     
    },
    move(state,arg){    
      if(state.love.includes(arg)){
        //查找元素索引
       const a= state.love.indexOf(arg)
       //删除元素
        state.love.splice(a,1)
        console.log(state.love)
      }
      
      if(arg.title===state.img1[0].title){
        state.count1--
        state.count1=state.count1;
         }else if(arg.title===state.img2[0].title){
          state.count2--
          state.count2=state.count2;
         }else{
         state.count3--
         state.count3=state.count3;
            }
      
    },
    save(state){
      console.log(state.users)
      localStorage.setItem('users',
      JSON.stringify(state.users) )

    },
    write(state){
      
      const a=JSON.parse(localStorage.getItem('users'));
      state.users=a
      
    },
    init(state,user){
      //报存用户，同时初始化数据
      state.love=[];
      state.love=user.love;
      
      //初始化
      state.count1=0;
      state.count2=0
      state.count3=0
      //根据喜欢的图片分配相应的count
      for(let i=0;i<user.love.length;i++){
       
        if(user.love[i].title==="唯美"){
          state.count2=state.count3+1;
         
        }
        else if(user.love[i].title==="清纯"){
          state.count3=state.count2+1;
          
        }
        else{
          state.count1=state.count1+1;
         
        }
      }
      console.log(state.count1,state.count2,state.count3)
      
      
    },
    initusers(state){
      //重新初始化
      state.users=[];
     
    }
  
  },
  actions: {
  },
  getters:{
 
   
  }
})
