<template>
<div class="content">
<div class="item"  v-for="(item ,index) in img" :key="index" @click="todetail(item)">
    <div class="img_item">
        <img v-lazy="item.img" alt="" class="img">
    </div>
        <div class="title">
            {{item.title}}
        </div>
       
        
</div>
    
</div>  
</template>
<script>
import {Random} from '@/common/mix.js'

export default {
    components:{
       
    },
    created(){
    let arr=Random(3,this.$store.state.img3)
    this.img=this.img.concat(arr)

       arr=Random(3,this.$store.state.img2)
    this.img=this.img.concat(arr)

    arr=Random(3,this.$store.state.img1)
    this.img=this.img.concat(arr)
   
    arr=Random(this.img.length,this.img)
    this.img=arr
    },

    data (){
        
        return{
            img:[]
        }
    },
    methods:{
        todetail(img){
            this.$router.push('/detail')
            this.$store.commit('toimg',img)
        }
    }
}
</script>
<style scoped>
.content{
    display:flex;
    flex-wrap: wrap;
    width:100%;
    justify-content: space-between;
    align-items: center;
}
.item{
    height: 230px;
    width: 33%;
    min-width: 33%;
    max-width: 33%;
    background: rgba(153, 225, 233,0.1);
    margin: 5px 0px;
}
.item:hover{
    background: rgba(153, 225, 233,0.6);
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