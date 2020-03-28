<template>
    <div> 
      <Nav/>
      <Header/>    
      <imgdetail/>
      <mainList :img1="img1" :mingzi="name1"/>
       <mainList :img1="img2" :mingzi="name2"/>
        <mainList :img1="img3" :mingzi="name3"/>
      <Footer/>
    </div>
</template>

<script>
import Nav from '@/components/common/nav'
import Header from '@/components/common/header'
import Footer from '@/components/common/footer'
import mainList from './home/mainList'

import imgdetail from './detail/imgdetail'
import  {mapState} from 'vuex'

import {Random} from '@/common/mix.js'
export default {
 
  components:{
      Nav,
      Header,
      Footer,
      imgdetail,
      mainList,
    
  },
  created(){
    
     let arr=Random(4,this.imgage3)
    this.img1=arr

       arr=Random(4,this.imgage2)
    this.img2=arr

    arr=Random(4,this.imgage1)
    this.img3=arr
   

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
<style scoped>
img{
  height:150px;
  width:250px;
}
</style>