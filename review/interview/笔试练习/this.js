var obj = {
    fn: function(a, b){
        // console.log(this)
    },
    child: {
        fn2: function(){
            // console.log(this)
        }
    }
 }
 obj.fn(1, 2)
 //等价于
 obj.fn.call(obj, 1, 2)         // 所以 this 是 obj
 obj.fn.apply(obj, [1, 2])
 
 obj.child.fn2()
 //等价于
 obj.child.fn2.call(obj.chid)    // 所以 this 是 obj.child

