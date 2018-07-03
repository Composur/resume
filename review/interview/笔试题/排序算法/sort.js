let arr=[3,5,7,8,9,3,4,5]
const sort={
    maopao:function(arr){
        for(let i=0;i<arr.length;i++){
            for(let j=0;j<arr.length;j++){
                if(arr[j]>arr[j+1]){
                    let temp=arr[j]
                    arr[j]=arr[j+1]
                    arr[j+1]=temp
                }
            }
        }
        return arr
    },
    quickSort:function(arr){
        if(arr.length<1){
            return arr
        }
        let arrMiddleNum=arr.splice(Math.floor(arr.length/2),1)
        let left=[],right=[];
        for(let i=0;i<arr.length;i++){
            if(arr[i]<arrMiddleNum){
                left.push(arr[i])
            }else{
                right.push(arr[i])
            }
        }
        return this.quickSort(left)
    }
}
// console.log(sort.maopao(arr))
console.log(sort.quickSort(arr))
