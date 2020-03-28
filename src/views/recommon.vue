<template>
  <div>
    <Nav />
    <Header />
    <van-pagination 
    v-model="currentPage" 
    :total-items="24" 
    :items-per-page="5"
    :page-count="20"
    />

    <div class="content">
      <div class="item" v-for="(item ,index) in items" :key="index" @click="todetail(item)">
        <div class="img_item">
          <img :src="item.img" alt class="img" />
        </div>
        <div class="title">{{item.title}}</div>
      </div>
    </div>

    <Footer />
  </div>
</template>
<script>
import Nav from "@/components/common/nav";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";

import { mapState } from "vuex";
import { Pagination } from 'vant';

import {Random} from '@/common/mix.js'


export default {
  created() {
    const a = this.count1 + this.count2 + this.count3;
    if (a > 0) {
      const b = a + 3;
      let one = Math.floor(((this.count1 + 1) * 12) / b),
        two = Math.floor(((this.count2 + 1) * 12) / b),
        three = Math.floor(((this.count3 + 1) * 12) / b);
        console.log(one,two,three)
//输入数据
    let arr=Random(one,this.img1)
    this.items=this.items.concat(arr)

     arr=Random(two,this.img2)
    this.items=this.items.concat(arr)
     
      arr=Random(three,this.img3)
    this.items=this.items.concat(arr)

    } 
    else {
       let arr=Random(4,this.img1)
    this.items=this.items.concat(arr)
      arr=Random(4,this.img2)
    this.items=this.items.concat(arr)
      arr=Random(4,this.img3)
    this.items=this.items.concat(arr)
     
    }


    //随机排序
    let arr=Random(this.items.length,this.items)
      
    this.items=arr;


    
  },

 data() {
    return {
      items: [],
      currentPage:1
    };
  },
  components: {
    Nav,
    Header,
    Footer,
   [ Pagination.name]:Pagination,
  },

  methods: {
    todetail(img) {
      this.$store.state.is = false;
      if (this.$route.name !== "detail") {
        this.$router.push("/detail");
      }
      this.$store.commit("toimg", img);
      window.scrollTo(0, 0);
    }
  },
  computed: {
    ...mapState({
      count1: "count1",
      count2: "count2",
      count3: "count3",
      img1: "img1",
      img2: "img2",
      img3: "img3"
    })
  }
}
</script>
<style scoped>
.content {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  width: 1200px;
  margin: 0 auto;
  justify-content: left;
  align-items: center;
}
.item {
  height: 230px;
  width: 24%;
  min-width: 24%;
  max-width: 24%;
  background: rgba(154, 225, 243, 0.1);
  margin: 5px 5px;
}
.item:hover {
  background: rgba(154, 225, 243, 0.6);
}
.img_item {
  display: flex;
  width: 100%;
  height: 90%;
  justify-content: space-between;
  align-items: center;
}
.img {
  position: relative;
  top: 2%;
  left: 5%;
  height: 90%;
  width: 90%;
}
.title {
  position: relative;
  width: 90%;
  text-align: center;
}
</style>