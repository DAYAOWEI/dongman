<template>
<div class="top">
     <div class="content">
     <div v-for="(item ,index) in items" :key="index" class="item">
         <span class="left">{{item.title}}</span>
         <span class="right">{{item.time}}</span>
     </div>
  </div>
</div>
 
</template>

<script>
export default {
    data(){
        return{
            items:[
                {title:"鞠婧祎性感唯美生活照写真",time:"03-28"},
                {title:"动漫美女唯美插画壁纸",time:"03-28"},
                {title:"《龙王的工作！》动漫美女插画壁纸",time:"03-28"},
                {title:"2019年10月湖泊美景图片日历壁纸",time:"03-28"},
                {title:"《鬼灭之刃》动漫人物精美壁纸图片",time:"03-28"},
                {title:"二次元动漫美女性感插画壁纸",time:"03-28"},
                {title:"二次元巨乳动漫美女性感插画图片",time:"03-28"},
                {title:"美味的吐司面包高清桌面壁纸",time:"03-28"},
                 {title:"《龙王的工作！》动漫美女插画壁纸",time:"03-28"},
                {title:"2019年10月湖泊美景图片日历壁纸",time:"03-28"},
                {title:"《鬼灭之刃》动漫人物精美壁纸图片",time:"03-28"},
                
            ]
        }
    }
}
</script>

<style scoped>
.top{
    position: relative;
    height: 615px;
    border: 1px solid rgb(153, 232, 243);
}

.content{
    display: flex;
    position: relative;
    top:30px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width:100%;
}
.item{
    flex:1;
    margin:5px;
    width:85%;
    min-width: 85%;
    max-width: 85%;
    height: 40px;
    line-height: 40px;
    padding: 0 15px;
}
.item:hover{
    border: 1px solid rgb(127, 230, 216);
    background: rgba(255, 254, 254, 0.726);
    color: rgb(85, 218, 218);
}
.item:hover .right{
    color: rgb(247, 110, 194);
}
.item .left{
    float: left;
}
.item .right{
    float: right;
}
</style>>
