<template>
    <div class="content">  
             <div class="header">
                {{mingzi}}
            </div>
            <div class="item">
            <div v-for="(item,index) in img1" :key="index" class="img" 
            @click="todetail(item)" >
                <img v-lazy="item.img" alt="">
                <p>{{item.title}}</p>
            </div>
        </div>           
    </div>
</template>
<script>
export default {
    props:{
        img1:Array,
        mingzi:String,
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
}
</script>
<style scoped>
.content{
    padding-top:30px;
    width:1188px;
    margin:0 auto; 
}
.header{
    height: 50px;
    line-height: 50px;
    font-size: 16px;
    padding-left: 15px;
    border-bottom: 2px solid rgb(92, 92, 245);
}
.item{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding:10px 0;
    text-align: center;
}
.img{
    flex:1;
     width:24%;
     min-width: 24%;;
     max-width: 24%;
    height: 230px; 
    background: rgba(154, 225, 243,0.2);  
}
.img:hover{
    background: rgba(154, 225, 243,0.6);
}
img{
    margin-top: 4%;
    width:90%;
    height: 80%;
}
.img p{
    height: 30px;
    position: relative;
    bottom: 10px;
}
</style>