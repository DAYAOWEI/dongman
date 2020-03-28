<template>

<div class="main">
     <div class="header">分类更新</div>

     <div class="items">
        <div class="item" v-for="(item,index) in items" :key="index">
            <span class="one">{{item.one}}</span>
             <span class="two">{{item.two}}</span>
              <span class="time">{{item.time}}</span>
        </div>
     </div>
</div>
 
</template>
<script>
export default {
    data(){
        return{
            items:[
                {one:'[手机壁纸]',two:'鞠婧祎性感唯美生活照写真',time:'3-28'},
                {one:'[手机壁纸]',two:'鞠婧祎性感唯美生活照写真',time:'3-28'},
                {one:'[手机壁纸]',two:'鞠婧祎性感唯美生活照写真',time:'3-28'},
                {one:'[手机壁纸]',two:'鞠婧祎性感唯美生活照写真',time:'3-28'},
                {one:'[手机壁纸]',two:'鞠婧祎性感唯美生活照写真',time:'3-28'},
                {one:'[手机壁纸]',two:'鞠婧祎性感唯美生活照写真',time:'3-28'},
                {one:'[手机壁纸]',two:'鞠婧祎性感唯美生活照写真',time:'3-28'},
                {one:'[手机壁纸]',two:'鞠婧祎性感唯美生活照写真',time:'3-28'},
                {one:'[手机壁纸]',two:'鞠婧祎性感唯美生活照写真',time:'3-28'},
                {one:'[手机壁纸]',two:'鞠婧祎性感唯美生活照写真',time:'3-28'},
                {one:'[手机壁纸]',two:'鞠婧祎性感唯美生活照写真',time:'3-28'},
                 {one:'[手机壁纸]',two:'鞠婧祎性感唯美生活照写真',time:'3-28'},
                  {one:'[手机壁纸]',two:'鞠婧祎性感唯美生活照写真',time:'3-28'},
                {one:'[手机壁纸]',two:'鞠婧祎性感唯美生活照写真',time:'3-28'},
                {one:'[手机壁纸]',two:'鞠婧祎性感唯美生活照写真',time:'3-28'},
                {one:'[手机壁纸]',two:'鞠婧祎性感唯美生活照写真',time:'3-28'},
                {one:'[手机壁纸]',two:'鞠婧祎性感唯美生活照写真',time:'3-28'},
                {one:'[手机壁纸]',two:'鞠婧祎性感唯美生活照写真',time:'3-28'},
                {one:'[手机壁纸]',two:'鞠婧祎性感唯美生活照写真',time:'3-28'},
                {one:'[手机壁纸]',two:'鞠婧祎性感唯美生活照写真',time:'3-28'},
                {one:'[手机壁纸]',two:'鞠婧祎性感唯美生活照写真',time:'3-28'},
                {one:'[手机壁纸]',two:'鞠婧祎性感唯美生活照写真',time:'3-28'},
                {one:'[手机壁纸]',two:'鞠婧祎性感唯美生活照写真',time:'3-28'},
                 {one:'[手机壁纸]',two:'鞠婧祎性感唯美生活照写真',time:'3-28'},
                  {one:'[手机壁纸]',two:'鞠婧祎性感唯美生活照写真',time:'3-28'},
                {one:'[手机壁纸]',two:'鞠婧祎性感唯美生活照写真',time:'3-28'},
                {one:'[手机壁纸]',two:'鞠婧祎性感唯美生活照写真',time:'3-28'},
                {one:'[手机壁纸]',two:'鞠婧祎性感唯美生活照写真',time:'3-28'},
                {one:'[手机壁纸]',two:'鞠婧祎性感唯美生活照写真',time:'3-28'},
                {one:'[手机壁纸]',two:'鞠婧祎性感唯美生活照写真',time:'3-28'},
                {one:'[手机壁纸]',two:'鞠婧祎性感唯美生活照写真',time:'3-28'},
                {one:'[手机壁纸]',two:'鞠婧祎性感唯美生活照写真',time:'3-28'},
                {one:'[手机壁纸]',two:'鞠婧祎性感唯美生活照写真',time:'3-28'},
                {one:'[手机壁纸]',two:'鞠婧祎性感唯美生活照写真',time:'3-28'},
                {one:'[手机壁纸]',two:'鞠婧祎性感唯美生活照写真',time:'3-28'},
                 {one:'[手机壁纸]',two:'鞠婧祎性感唯美生活照写真',time:'3-28'},
            ]
        }
    }
}
</script>
<style scoped>
.main{
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
.items{
    display: flex;
    width:100%;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 15px 0;
    font-size: 14px;
}
.item{
    display: flex;
    flex:1;
    width:30%;
    min-width:30%;
    max-width: 30%;
    justify-content: space-between;
    margin-top: 5px;
}
.one{
    
    color: rgb(192, 184, 184);
}
.one:hover,.two:hover{
    color: rgb(88, 88, 233);
}
.time{
   color: rgb(192, 184, 184);
}
</style>