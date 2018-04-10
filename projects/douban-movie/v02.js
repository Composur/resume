var log = console.log.bind(console)

 // 代码重构,减少全局变量
 var Helper = {
    isToEnd: function($viewport, $content){
      return $viewport.height() + $viewport.scrollTop() +10 > $content.height()
    },
    createNode:function(movie){
        // data.subjects.forEach(movie => {
            var tpl =
                ` <div class="item">
            <a href="#">
                <div class="cover">
                    <img src="" alt="">
                </div>
                <div class="detail">
                    <h2></h2>
                    <div class="extra">
                        <span class="score"></span><span></span></div>
                    <div class="extra"><span class='year'></span> / <span class='type'></span></div>
                    <div class="extra">导演 <span class='director'></span></div>
                    <div class="extra">主演 /<span class='starring'></span></div>
                </div>
            </a>
        </div>`
            var $node = $(tpl)
            $node.find('.cover img').attr('src', movie.images.medium)
            $node.find('.detail h2').text(movie.title)
            $node.find('.detail .extra>span').eq(0).text(movie.rating.average + '分')
            $node.find('.detail .extra>span').eq(1).text(' / ' + movie.collect_count + ' 收藏')
            $node.find('.year').text(movie.year)
            $node.find('.type').text(movie.genres.join('、'))
            $node.find('.director').text(function () {
                var nameArr = []
                movie.directors.forEach((name) => {

                    nameArr.push(name.name)
                })
                return nameArr.join('、')
            })
            $node.find('.starring').text(function () {
                var StarringArr = []
                movie.casts.forEach((name) => {

                    StarringArr.push(name.name)
                })
                return StarringArr.join('、')
            })
            // _this.$container.find('.container').append($node)
            return $node;
        // });
    }
  }

 var top250 = {
     init: function () {
         this.$container = $('#Top250')
         this.$content=this.$container.find('.container') 
         this.isLoading = false
         this.startNum = 0
         this.finish = false
         this.bind()    
         this.start()
     },
     bind: function () {
         var _this = this
        this.$container.scroll(function(){
            if(!_this.finish && Helper.isToEnd(_this.$container,_this.$content)){
                _this.start()
            }
        })
     },
     start: function () {
         var _this = this
       
         _this.getData(function (data) {
             _this.render(data)
         })
     },
     getData: function (callback) {
         // 当执行的过程中又一次的getData请求的话此时的isLoading=true请求就会return掉
         var _this = this
         if (_this.isLoading) return
         _this.isLoading = true
         // 请求的时候加载loading
         $('.loading').show()
         $.ajax({
             url: 'http://api.douban.com/v2/movie/top250',
             type: 'get',
             data: {
                 start: _this.startNum,
                 count: 10
             },
             dataType: 'jsonp'
         }).done(function (data) {
             console.log(data)
             _this.render(data)
             this.startNum += 10
             // 判断超出的情况
             if (_this.startNum >= data.total) {
                 _this.finish = true
             }
             callback&&callback(data)
         }).fail(function (error) {
             console.log(error)
         }).always(function () {
             // 请求结束设置为false getData时执行请求
             _this.isLoading = false
             // 请求结束去除loading
             $('.loading').hide()
         })
     },
     render: function (data) {
         var _this=this
         data.subjects.forEach(function(data){
            _this.$content.append(Helper.createNode(data))
          })
     },
     isToBottom: function () {
         return this.$container.find('.container').height() <= this.$container.height() + this.$container.scrollTop() +
             10
     }

 }
 var northDirection = {
    init: function () {
        this.$container = $('#northDirection')
        this.$content=this.$container.find('.container')
        this.bind()
        this.start()
        this.isLoading = false
        this.startNum = 0
        this.finish = false
        this.isToBottom()

    },
    bind: function () {
        var _this = this
        this.$container.find('.container').scroll(function () {
            _this.start()
        })
    },
    start: function () {
        var _this = this
        _this.getData(function (data) {
            _this.render(data)
        })
    },
    getData: function (callback) {
        // 当执行的过程中又一次的getData请求的话此时的isLoading=true请求就会return掉
        var _this = this
        if (_this.isLoading) return
        _this.isLoading = true
        // 请求的时候加载loading
        $('.loading').show()
        $.ajax({
            url: 'http://api.douban.com/v2/movie/us_box',
            type: 'get',
            // data: {
            //     start: _this.startNum,
            //     count: 10
            // },
            dataType: 'jsonp'
        }).done(function (data) {
            console.log(data)
            _this.render(data)
            this.startNum += 10
            // 判断超出的情况
            if (_this.startNum >= data.total) {
                _this.finish = true
            }
            callback(data)
        }).fail(function (error) {
            console.log(error)
        }).always(function () {
            // 请求结束设置为false getData时执行请求
            _this.isLoading = false
            // 请求结束去除loading
            $('.loading').hide()
        })
    },
    render: function (data) {
        var _this=this
        
        data.subjects.forEach(function(data){
            data=data.subject
           _this.$content.append(Helper.createNode(data))
         })
    },
    isToBottom: function () {
        return this.$container.find('.container').height() <= this.$container.height() + this.$container.scrollTop() +
            10
    }
 }
 var search = {
    init: function () {
        this.$container = $('#search-wrap')
        this.$content=this.$container.find('.container')
        this.bind()
        this.isLoading = false
        this.startNum = 0
        this.finish = false
        this.isToBottom()
        this.keyworld=''
    },
    bind: function () {
        var _this = this
        this.$container.find('.container').scroll(function () {
            _this.start()
        })
        this.btn=this.$container.find('.btn').click(function(){
            _this.$content.empty()
            _this.keyworld=_this.$container.find('.input-search').val()
            _this.start()        
        })

       this.keydown=this.$container.find('.input-search').keydown(function(){
            if ( event.keyCode === 13 ) {
                event.preventDefault();
                _this.$content.empty()
                _this.keyworld=_this.$container.find('.input-search').val()
                _this.start()      
               }           
        })
        
    },
    start: function () {
        var _this = this
        _this.getData(function (data) {
            _this.render(data)
        })
    },
    getData: function (callback) {
        // 当执行的过程中又一次的getData请求的话此时的isLoading=true请求就会return掉
        var _this = this
        if (_this.isLoading) return
        _this.isLoading = true
        // 请求的时候加载loading
        $('.loading').show()
        $.ajax({
            url: 'http://api.douban.com/v2/movie/search',
            type: 'get',
            data: {
                q: _this.keyworld
            },
            dataType: 'jsonp'
        }).done(function (data) {
            console.log(data)
            _this.render(data)
            this.startNum += 10
            // 判断超出的情况
            if (_this.startNum >= data.total) {
                _this.finish = true
            }
            callback(data)
        }).fail(function (error) {
            console.log(error)
        }).always(function () {
            // 请求结束设置为false getData时执行请求
            _this.isLoading = false
            // 请求结束去除loading
            $('.loading').hide()
        })
    },
    render: function (data) {
        var _this=this
        data.subjects.forEach(movie => {
            _this.$content.append(Helper.createNode(movie))
        });
    },
    isToBottom: function () {
        return this.$container.find('.container').height() <= this.$container.height() + this.$container.scrollTop() +
            10
    }
 }
 var app = {
    // 初始化
    init: function () {
        this.$tab = $('footer div')
        this.$section = $('section')
        this.bind()
        top250.init()
        northDirection.init()
        search.init()
    },
    // 绑定事件,触发的时候执行
    bind: function () {
        _this = this
        this.$tab.on('click', function () {
            var _index = $(this).index()

            _this.$section.hide().eq(_index).fadeIn()
           
            $(this).addClass('active').siblings().removeClass('active')
        })
    },
    // 打一开始就执行的
    start: function () {

    },
    getData: function () {

    },
    setData: function () {

    },
    render: function () {

    }
}
 app.init()