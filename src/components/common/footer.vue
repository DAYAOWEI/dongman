<template>
    <div  class="footer">
       <div class="top">
        <div class="top_item">
            <span>关于我们</span>
            <span>网站帮助</span>
            <span>广告合作</span>
            <span> 用户投稿</span>
            <span>网站地图</span>
            <span>网站 RSS</span>
        </div>
       </div>
       <div class="foot">
           <div class="foot_item">
            <span>中国互联网举报中心</span>
           <span>网络违法举报中心</span>
           <span>垃圾信息举报中心</span>
           </div>
          <div >
              qq:535684675
          </div>
       </div>
    </div>
</template>
<style scoped>
.footer{
    height:100px;
    
}
.top{
    height: 70%; 
    border-bottom: 1px solid rgb(131, 183, 218);
    background: rgb(238, 183, 190);
}

.top_item{
     display: flex;
     height: 70%; 
     width:100%;
    align-items: center;
    justify-content: center;
}
.top_item span{
    margin-left: 10px;
}
.foot{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    
     background: rgb(238, 183, 190);
}
.foot_item{
    margin:10px 0;
}
.foot_item span{
    margin:0 10px;
}

</style>