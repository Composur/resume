 // var tab1=document.getElementsByTagName('span');
    // var li=document.getElementsByTagName('li');
    // for(var i=0;i<li.length;i++){
    //     tab1[i].index=i;
    //     tab1[i].onclick=function () {
    //        for(var i=0;i<li.length;i++){
    //            li[i].style.display='none';
    //        }
    //        li[this.index].style.display='block';
    //     }
    // }

  

    // function Tab(container) {
    //     this.init = function (container) {
    //         this.container = container
    //         this.span = this.container.querySelectorAll('span')
    //         this.li = this.container.querySelectorAll('li')
    //     }
    //     this.bind = function () {
    //         var _this = this
    //         this.span.forEach((item, index) => {
    //             item.onclick = function () {
    //                 _this.span.forEach((item) => {
    //                     item.classList.remove('spanActive')
    //                     _this.li.forEach((item) => {
    //                         item.classList.remove('active')
    //                     })
    //                 })
    //                 this.classList.add('spanActive')
    //                 _this.li[index].classList.add('active')
    //             }
    //         });
    //     }
    //     this.init(container)
    //     this.bind()
    // }
    // new Tab(document.querySelectorAll('.container')[0])
    // new Tab(document.querySelectorAll('.container')[1])
    function Tab(node) {
        this.init(node)
        this.bind()
    }

    Tab.prototype = {
        constructor: Tab,
        init: function (container) {
            this.container = container
            this.tab = this.container.querySelectorAll('span')
            this.panel = this.container.querySelectorAll('li')
        },
        bind: function () {
            var _this = this
            this.tab.forEach((item, index) => {
                item.onclick = function () {
                    _this.tab.forEach((item) => {
                        item.classList.remove('spanActive')
                        _this.panel.forEach((item) => {
                            item.classList.remove('active')
                        })
                    })
                    this.classList.add('spanActive')
                    _this.panel[index].classList.add('active')
                }
            });
        },
       
    }

    var tab1 = new Tab(document.querySelectorAll('.container')[0]);
    var tab2 = new Tab(document.querySelectorAll('.container')[1]);
        tab1.init()
        tab2.init()