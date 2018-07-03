let arr=[3,5,7,8,9,3,4,5]
const sort={
    maopao:function(arr){
        var len = arr.length;
        for (var i = 0; i < len - 1; i++) {
            for (var j = 0; j < len - 1 - i; j++) {
                if (arr[j] > arr[j+1]) {        // 相邻元素两两对比
                    var temp = arr[j+1];        // 元素交换
                    arr[j+1] = arr[j];
                    arr[j] = temp;
                }
            }
        }
        return arr;
    },
    quickSort:function(arr){
        if(arr.length<1){
            return arr
        }
        let arrMiddleNum=arr.splice(Math.floor(arr.length/2),1)[0]
        let left=[],right=[];
        for(let i=0;i<arr.length;i++){
            if(arr[i]<arrMiddleNum){
                left.push(arr[i])
            }else{
                right.push(arr[i])
            }
        }
        return this.quickSort(left).concat([arrMiddleNum],this.quickSort(right))
    }
}
// console.log(sort.maopao(arr))
console.log(sort.quickSort(arr))
