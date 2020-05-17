let arr=[3,5,7,8,9,3,4,5,111,9,9,9,9,1,2,4,4,5,1]

function mp(arr){
    var len = arr.length;
    let temp;
    // for (var i = 0; i < len - 1; i++) {
    //     for (var j = 0; j < len - 1 - i; j++) {
    //         if (arr[j] > arr[j+1]) {        // 相邻元素两两对比
    //             var temp = arr[j+1];        // 元素交换
    //             arr[j+1] = arr[j];
    //             arr[j] = temp;
    //         }
    //     }
    // }
    for(let i=0 ; i<len;i++){
        for(let j=i;j<len;j++){
            if(arr[i]>arr[j]){
                temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
    return arr;
}
console.log(mp(arr))

