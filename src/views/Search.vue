<template>
    <div>
         <Nav/>
       <Header />
    
       <searchHeader @nihao="nihao"/>
        <div>搜索关于{{val}}的结果为{{items.length}}条</div>
        <mainList :img1="items"/>
        <Footer/>
        <div style="display:none">{{value}}</div>
    </div>
</template>
<script>
import Nav from '@/components/common/nav'

import Footer from '@/components/common/footer'
import mainList from './home/mainList'

import searchHeader from './search/searchHeader'

import {mapState} from 'vuex'

import {search,Random} from '@/common/mix.js'
export default {
    name:'Search',
    created(){ 
     const exp=this.val.toLowerCase();
       let arr=search(exp,this.img1)
       this.items=this.items.concat(arr)
        
      arr=search(exp,this.img2)
       this.items=this.items.concat(arr)
       arr=search(exp,this.img3)
       this.items=this.items.concat(arr)
      this.items=Random(this.items.length,this.items)
    },

    data(){
        return{
            items:[],
            value:''
        }
    },
    methods:{
        nihao(val){    
            this.value=val
           this.items=[];
           const exp=this.value.toLowerCase();
       let arr=search(exp,this.img1)
       this.items=this.items.concat(arr)
        
      arr=search(exp,this.img2)
       this.items=this.items.concat(arr)
       arr=search(exp,this.img3)
       this.items=this.items.concat(arr)
      this.items=Random(this.items.length,this.items)

        }
    },
    computed:{
        ...mapState({
            val:'value',
            img1:'img1',
            img2:'img2',
            img3:'img3',
            
        })
    },
    components:{
       Nav,
      searchHeader,
       Footer,
       mainList,
   },

}
</script>
<style scoped>

</style>
