<template>

<div>


  <div class="header">
      <div class="left">
         <img src="//www.zdqx.com/statics/v3/images/logo.png">
      </div>
      <div class="right" >
          <div>
               <van-search  
            shape="round" 
            background="skyblue" 
            placeholder="请输入搜索关键词" 
            v-model="value"
            @keydown.enter="tosearch(value)"
            class="search" />
           <span>
               <van-button 
               type="info" 
               class="button"
               
               @click="tosearch(value)">
                   搜索
                   </van-button>
               </span>
           <div style="clear:both"></div>
          </div>
           
           <div class="search_footer">
               <span class="one">热搜</span>
               <span>2020年壁纸热搜</span>
               <span>风光景色壁纸</span>
               <span>你好世界</span>
           </div>
      </div>
       
  </div>

  <div class="footer">
     <span>平板壁纸</span>
     <span>电脑壁纸</span>
     <span>精选壁纸</span>
     <span>热门壁纸</span>
     <span>动态壁纸</span> 
 </div>
</div>
</template>

<script>
import { Search, Button } from 'vant';
export default {
    name:'Header',
    data(){
        return{
            value:""
        }
    },
    components: {
    [Search.name]:Search,
    [Button .name]:Button 
  },
  methods:{
      tosearch(value){
          this.$router.push('/search')
          this.$store.commit('search',value)
          
      },
     
  }
}
</script>

<style scoped>

.header{
   
    min-width: 900px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
      height: 120px;
      border-bottom: 2px solid rgb(134, 199, 230);
}
.left{
   margin-right: 60px;

}
 .right{
    margin-top: 15px;
     width:60%;
 }
 .search{
     width:80%;
     height: 44px;
     float: left;
 }
 .search span{
     float: left;
      
 }
 .search_footer{
     width:80%;
     
 }
 .search_footer span{
     float: left;
     margin:10px 0px;
     margin-right:10px;
     color:rgb(64, 64, 66);
 }

 .button{
     background: rgb(97, 199, 240);
     border: 0;
 }

 .search_footer span:hover{
     color: rgb(97, 199, 240);
 }
 .footer{
     display: flex;
     height: 50px;
      border-bottom: 2px solid rgb(235, 173, 196);
     justify-content: left;
     align-items: center;
 }
 .footer span{
     color:rgb(64, 64, 66);
     margin: 15px;
     font-size: 17px;
 }
  .footer span:hover{
      color: rgb(97, 199, 240);
  }
</style>