export function search(ex,img){
    let items=[]
    if(ex){
        
        let exp=new RegExp(ex);   
        console.log(ex,img,exp)
    for(let i=0;i<img.length;i++){ //根据正则匹配input输入的值
        const a1=img[i].name 
        const a2=img[i].title
        const c1=a1.search(exp) 
        const d1=a2.search(exp)
 
       if(c1>-1||d1>-1){   
           items.push(img[i])
           
       }
    }

    
    }
   
   return items
}
export function Random(length,img){//根据长度随机分配几张图片
    let items=[]
    for (; items.length < length; ) {
        let a = Math.random() * img.length;
        let b = Math.floor(a);
        let c = img[b];
        if (!items.includes(c)) {
        
          items.push(c);
        }
      }
      return items
}

export function addData(start,end,number,name1,name2){  //添加state
    //length=end-start   number为分类
    const one=[];
for(let i=start;i<end;i++){
    let img=require(`../../public/0${number}/${number} (${i}).jpg`),
    
        title=name1,
        name=`${name2}${i}`
    let arr={img:img,title:title,name:name}
        one.push(arr)       
}
    return one
}


   



 

