### tab渲染
+ tab
    + 切换的时候渲染不同的tmpl
    + switch
    + 根据switch执行对应的fn
    + 然后fn再去调用getDataFn
    + fn需要传递给参数给getDataFn(‘需要请求的参数类型’，‘分页信息’，callback（page））
+ getDataFn
    + ajax请求
    + 渲染tmpl
    + 根据传入的参数判断对应的tmpl进行渲染
+ fn1
+ fn2
+ 分页的fn(el,page,callback)

 ### 产品管理
+ 产品分类汇总
    + 
