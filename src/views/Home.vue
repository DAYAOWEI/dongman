<template>
  <div class="home">
    <Nav/>
    <Header/>
    <Content/>
    <mainList :img1="img2" :mingzi="name1"/>
    <mainList :img1="img3" :mingzi="name2"/>
    <mainList :img1="img1" :mingzi="name3"/>
    <Main/>
    <Footer/>
  </div>
</template>

<script>
import Nav from '@/components/common/nav'
import Header from '@/components/common/header'
import Footer from '@/components/common/footer'

import Content from './home/content'
import mainList from './home/mainList'
import Main from './home/main'

import {mapState}  from 'vuex'

import {Random} from '@/common/mix.js'
export default {
  name: 'Home',
  components: {
      Nav,
      Header,
      Content,
      mainList,
      Main,
      Footer
  },
  created(){
    
    let arr=Random(4,this.imgage3)
    this.img1=arr

       arr=Random(4,this.imgage2)
    this.img2=arr

    arr=Random(4,this.imgage1)
    this.img3=arr
   if(this.$store.state.name){
     //初始化数据
            this.$store.state.love=this.$store.state.user.love
            this.$store.state.count1=this.$store.state.user.count1
            this.$store.state.count2=this.$store.state.user.count2
            this.$store.state.count3= this.$store.state.user.count2
   }
   

  },
  data(){
    return{
       img1:[],
       img2:[],
       img3:[],
       name1:"创意图片",
       name2:"可爱系图片",
       name3:"唯美图片"
    }
  },
  computed:{
    ...mapState({
      imgage1:'img1',
      imgage2:'img2',
      imgage3:'img3',
    })
  }
}
</script>
