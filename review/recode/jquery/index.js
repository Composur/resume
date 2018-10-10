var fn={
    fn1:function (param) { 
        console.log('fn1')
        this.fn2()
     },
    fn2:function (param) { 
        console.log('fn2')
     }
}
fn.fn1()