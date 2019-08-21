if(new Boolean(false)){console.log('--')}

var a = [1,2,3,4,5,6,7,8,9]


const reuslt=a.reduce((sum,item)=>{
  if(item&1){
   return sum+=item
  }else{
    return sum
  }
},0)
console.log(reuslt)
