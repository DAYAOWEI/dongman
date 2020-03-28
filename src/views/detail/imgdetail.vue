<template>
    <div class="imgdetail">
        <div class="top">
            二次元美女{{this.$store.state.title}}
        </div>
        <div class="topdetail">
            <div>分类：{{this.$store.state.title}}</div>
            <div>蓝色</div>
            <div>2020-03-20</div>
            <div>来源：me</div>
        </div>
        <div class="img">
            <img :src="this.$store.state.img.img" alt="">
        </div>
        <div class="foot">

             <div class="item" @click="add" 
             :class="{red:this.$store.state.is}">喜欢</div>
            <span>标签</span>
            <div class="items">
                 <div class="item">二次元 </div>
                  <div class="item">卡通 </div>
                  <div class="item">漫画 </div>
                  <div class="item">美女 </div>
                  <div class="item">呆萌</div>
               
                 
            </div>
            
        </div>
    </div>
</template>
<style scoped>
.imgdetail{
    width:1200px;
    margin:0 auto;
    background: rgba(125, 185, 245, 0.1);
   margin-top: 30px;
   margin-bottom: 30px;
   padding:10px;
}
.top{
    display: flex;
    justify-content: center;
    align-items: center;
    width:1200px;
    height: 50px;
    font-size: 18px;
    color:cornflowerblue
}
.topdetail{
    margin-left: 80px;;
}
.topdetail div{
 display: inline-block;
 margin: 5px;
 color:rgb(187, 183, 181);
}
.topdetail div:nth-child(2){
    color:cornflowerblue
}
.topdetail div:nth-child(3){
    color:rgb(195, 136, 197)
}
.img{
    display: flex;
    justify-content: center;
    align-items: center;
    width:1200px;
    height: 560px;
     margin:0 auto;
}
.img img{
    width:750px;
    height:530px;
    
}
.foot{
    padding-left: 170px;;
}
.foot span{
    float: left;
    margin-right: 10px;
}
.items{
    display: flex;
    width:300px;
}
.item{
    margin-right: 5px;
    float: left;
}
.red{
    color:red;
}
</style>
<script>

export default {
    data(){
        return{
            img:'',
        }
    },

    methods:{
        add(){
            this.$store.state.is=!this.$store.state.is
             if(this.$store.state.is){
            this.$store.commit('add',this.$store.state.img)
        }
        else{
             this.$store.commit('move',this.$store.state.img)
        }
           
        }
    }
}
</script>