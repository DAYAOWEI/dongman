<template>
  <div id="home_conent">
      
    <div class="left">
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item  v-for="(item,index) in items" :key="index"
    @click.native="todetail(item)" class="left_top">
    <img v-lazy="item.img" alt="" >
    </van-swipe-item>
   
    </van-swipe>
<contentLeftItem/>
      </div>

<div class="right">
          <contentRightTop />
          <contentRightFooter/>
 </div>
 
  </div>
</template>

<script>


import contentLeftItem from './contentLeftItem'
import contentRightTop from './contentRightTop'
import contentRightFooter from './contentRightFooter'

import {Random} from '@/common/mix.js'
import { Swipe, SwipeItem } from 'vant';
export default {
    name:'Content',
    components:{
      
         [Swipe.name]:Swipe,
        [SwipeItem.name]:SwipeItem,
        contentLeftItem,
        contentRightTop,
        contentRightFooter
    },
    created(){

     let arr=Random(2,this.$store.state.img3)
    this.items=this.items.concat(arr)

       arr=Random(2,this.$store.state.img2)
    this.items=this.items.concat(arr)

    arr=Random(2,this.$store.state.img1)
    this.items=this.items.concat(arr)
    },
    methods:{
        todetail(img){
            this.$router.push('/detail')
           this.$store.commit('toimg',img)
        }
    },
    data () {
   return {
       items:[],
   
   }
    },

   computed: {
    swiper() {
     return this.$refs.mySwiper.swiper
    }
   }
}
</script>

<style scoped>
#home_conent{
    
    display: flex;
    position: relative;
    top: 15px;
    width:1200PX;
    margin:0 auto;
}
#home_conent .left{
    width:65%;
  
}

#home_conent .right{
    position: relative;
    left: 1%;
    width:34%;
    margin-top: 17px;
}

.left_top{
    display: flex;
    justify-content: center;
    align-items: center;
    height:400px;
    
}

.left_top img{
    width:90%;
    height: 90%;
    transition:width 1s,height 1s;
}
.one{
    
    left:5%;
}
.two{
    right: 5%;
}
.swiper-pagination-bullets{
    bottom: 6%;
}
</style>