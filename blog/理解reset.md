### 最近用到了nodejs-restful-api顺便了解一下rest风格 #
### reset（Representational State Transfer）
- Resources
    * R-E-S-T的名称"表现层状态转化"中，省略了主语。"表现层"其实指的是"资源"（Resources）的"表现层"。每一个URL代表一种资源；

- Representation
    *  我们把"资源"具体呈现出来的形式（以什么格式去展现，HTML、JSON），叫做它的"表现层"（Representation）。

- State Transfer
    *  这个过程是客户端和服务端交互的过程，客户端操作服务端，服务端发生状态转化从而实现了“表现层状态转移”；
    * GET——获取资源
    * POST——新建资源（也可以用于更新资源）
    * PUT——更新资源
    * DELETE——删除资源 

    ```
    //Routes here.
    router.post('/'  ,      createUser);//新建
    router.get('/:id',      getUser);//获取某个资源
    router.get('/',         getUsersAll);//获取全部资源
    router.put('/:id',      updateUser);//更新
    router.delete('/:id',   deleteUser);//删除资源

    ```


###  简单来说reset是一种软件架构风格。是对资源的表述性状态迁移，即资源(文本、图片等)在网络中以某种形式进行状态转移；如果一个架构符合REST原则，那么它就是RESTful架构


>[详情查看阮一峰老师博客](http://www.ruanyifeng.com/blog/2011/09/restful)