<template>
  <div>
  <Nav />
  <Header />
  <div class="item">
      <van-circle
      v-model="curry1"
      :rate="curry1"
      :speed="100"
      :text="text1"
      :color="gradientColor1"
    />
    <van-circle
      v-model="curry2"
      :rate="curry2"
      :speed="100"
      :text="text2"
      :color="gradientColor2"
      class="two"
    />
    <van-circle
      v-model="curry3"
      :rate="curry3"
      :speed="100"
      :text="text3"
      :color="gradientColor3"
      class="three"
    />

  </div>
  
  <mainList :img1="img8" :mingzi="name1" />
  <Footer />
  </div>
</template>
<script>
import Nav from "@/components/common/nav";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import mainList from "./home/mainList";

import { Circle } from "vant";
import { mapState } from "vuex";

import {Random} from '@/common/mix.js'
export default {
  components: {
    [Circle.name]: Circle,
    Nav,
    Header,
    Footer,
    mainList
  },
  created() {
    
    this.img8=Random(4,this.img2)
    
    let all=this.count1+this.count2+this.count3+3;
    if(all>3){
          this.curry1=(this.count1+1)/all*100;
       this.curry2=(this.count2+1)/all*100;
    this.curry3=(this.count3+1)/all*100;
    }

   
    
  },
  data() {
    
    return {
      curry1:0,
      curry2:0,
      curry3:0,
      gradientColor1: {
        "0%": "skyblue",
        "100%": "blue"
      },
      gradientColor2: {
        "0%": "pink",
        "100%": "red"
      },
      gradientColor3: {
        "0%": "green",
        "100%": "red"
      },
      img8: [],
      name1: "热推"
    };
  },
  computed: {
    text1() {
      return "可爱"+this.curry1.toFixed(0) + "%";
    },
    text2() {
      return "唯美"+this.curry2.toFixed(0) + "%";
    },
    text3() {
      return "清纯"+this.curry3.toFixed(0) + "%";
    },
    ...mapState({
      count1: "count1",
      count2: "count2",
      count3: "count3",
      love: "love",
      img1: "img1",
      img2: "img2",
      img3: "img3"
    })
  }
};
</script>
<style scoped>
.van-circle{
  border: 2px solid pink;
  border-radius: 50px;
  margin-right: 15px;
}
.two{
   border: 2px solid rgb(146, 209, 30);
  border-radius: 50px;
  margin-right: 15px;
}
.three{
   border: 2px solid rgb(24, 21, 20);
  border-radius: 50px;
  margin-right: 15px;
}
.item{
  display: flex;
  justify-content: center;
  align-items: center;
  width:1200px;
  height: 150px;
  margin: 0 auto;
}
</style>