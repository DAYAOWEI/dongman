<template>

<div>
    <Nav/>
    <Header/>
    <div class="top" :class="{active:is}">暂无喜欢的图片</div>
    <div  class="content">
        
        <div class="item"  v-for="(item ,index) in this.$store.state.love" 
        :key="index"
         @click="todetail(item)">
        <div class="img_item">
        <img :src="item.img" alt="" class="img">
        </div>
        <div class="title">
            {{item.title}}
        </div>
    </div>
</div>
    <mainList :img1="img1" :mingzi="name1"/>
    <Footer/>
</div>
</template>
<script>
import Nav from '@/components/common/nav'
import Header from '@/components/common/header'
import Footer from '@/components/common/footer'
import mainList from './home/mainList'


import {Random} from '@/common/mix.js'
export default {
    data(){
        return{
            img1:[],
            name1:"推荐",
            is:true
        }
    },
   
   components:{
       Nav,
       Header,
       Footer,
       mainList,
   },
   created(){
  
     this.img1=Random(4,this.$store.state.img2)
    if(this.$store.state.love.length===0){
        this.is=false
    }
    console.log(this.$store.state.count1,
      this.$store.state.count2, 
      this.$store.state.count3,)

  },
 
      
  
  methods:{
        todetail(img){
            this.$store.state.is=false;
            if(this.$route.name!=='detail'){
                this.$router.push('/detail')          
            } 
            this.$store.commit('toimg',img)  
            window.scrollTo(0,0)
        }
    }
    ,
}
</script>
<style scoped>
.top{
width: 100%;
text-align: center;
margin: 10px 0;
}
.active{
    display: none;
}
.content{
    display:flex;
    flex-wrap: wrap;
    width:100%;
    width:1200px;
    margin: 0 auto;
    justify-content:left;
    align-items: center;
}
.item{
    height: 230px;
    width: 24%;
    min-width: 24%;
    max-width: 24%;
    background: rgba(154, 225, 243,0.1);
    margin: 5px 5px;
}
.item:hover{
    background: rgba(154, 225, 243,0.6);
}
.img_item{
     display: flex;
    width: 100%;
    height: 90%;
     justify-content: space-between;
    align-items: center;
}
.img{
    position: relative;
    top:2%;
    left:5%;
    height: 90%;
    width: 90%;
    
}
.title{
    position: relative;
    width:90%;   
    text-align: center;
}
</style>