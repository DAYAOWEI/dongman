<template>
    <div>
        <div class="img">
            <img src="../../../public/01/1 (10).jpg" alt="">
        </div>
       <div class="top">
           <span class="left">热门标签</span>
           <span class="right">更多>></span>
       </div>
       <div class="footer">
           <div class="one">
                <div class="item1">动漫</div>
                <div class="item1">萌宠</div>
                <div class="item1">二次元</div>
                <div class="item1">唯美</div>
           </div>
            <div class="two_left">小清新美女</div>
            <div class="two_right">
                <div class="item2">邻家女孩</div>
                <div class="item3 color3" >游戏</div>
                <div class="item3 color1">甜美</div>
                <div class="item2 color2">日系</div>
            </div>
       </div>
    </div>
</template>
<style scoped>
.top{
    margin: 15px 0;
    height: 30px;
    
}
.top .left{
    float: left;
    font-size: 17px;
    height: 25px;
    line-height: 25px;
    padding-left: 10px;
    border-left: 4px solid rgb(27, 143, 189);
    
}
.top .right{
    float: right;
     height: 25px;
    line-height: 25px;
    font-size: 13px;
}
.img{
    height: 236px;
    margin-top: 15px;
}
img{
    height: 100%;
    width:100%;
}
.footer{
   width:100%;

}
.one{
    display: flex;
    flex-wrap: wrap;
     width:100%;
    padding: 12px 0;
     
}
.footer .item1{
    width:24%;
    min-width: 24%;
    max-width: 24%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    margin-right: 3px;
}
.footer .item2{
    float: left;
    width:65%;
    min-width: 65%;
    max-width: 65%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    margin-right: 3px;
}
.footer .item3{
    float: left;
    width:32%;
    min-width: 32%;
    max-width: 32%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    margin-right: 3px;
}
.footer .two_left{
    float: left;
     width:24%;
    min-width: 24%;
    max-width: 24%;
    height: 100px;
    line-height: 100px;
    text-align: center;
    margin-right: 3px;
    background: rgb(159, 105, 245);
}
.two_right{
    float: left;
    width:75%;
}
.item1:nth-child(1){
    background: rgb(175, 245, 105);
}
.item1:nth-child(2){
    background: rgb(108, 122, 252);
}
.item1:nth-child(3){
    background: rgb(245, 105, 203);
}
.item1:nth-child(4){
    background: rgb(245, 173, 105);
}
.item2:nth-child(1){
    background: rgb(215, 133, 240);
}
.color3{
    background: rgb(240, 133, 133);
}
.color1{
    background: rgb(130, 238, 214);
}
.color2{
    background: rgb(128, 240, 152);
}

</style>