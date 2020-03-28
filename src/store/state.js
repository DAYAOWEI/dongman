import {addData} from '@/common/mix.js'
const one=addData(1,20,1,"可爱",'keai');
const two=addData(1,20,2,"唯美",'weimei');
const three=addData(1,20,3,'清纯','qingchun');
const state=
    {
        img:'',
        title:"可爱",
        is:false,
        love:[],
        count1:0,
        count2:0,
        count3:0,
        img1:one,
        img2:two,
        img3:three,
        value:'',
        name:'',
        user:'',
        users:[]
      }

      export default state;