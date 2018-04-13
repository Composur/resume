// tab切换
$('footer div')
    .on('click', function () {
        var _index = $(this).index()
        $('section')
            .hide()
            .eq(_index)
            .fadeIn()
        $(this)
            .addClass('active')
            .siblings()
            .removeClass('active')
    })
// 获取data
var startNum = 0
// 加锁，防止多次请求
var isLoading = false
getData()

function getData() {
    // 当执行的过程中又一次的getData请求的话此时的isLoading=true请求就会return掉
    if (isLoading) 
        return
    isLoading = true
    // 请求的时候加载loading
    $('.loading').show()
    $.ajax({
        url: 'http://api.douban.com/v2/movie/top250',
        type: 'get',
        data: {
            start: startNum,
            count: 10
        },
            dataType: 'jsonp'
        })
        .done(function (data) {
            console.log(data)
            setData(data)
            startNum += 10
        })
        .fail(function (error) {
            console.log(error)
        })
        .always(function () {
            // 请求结束设置为false getData时执行请求
            isLoading = false
            // 请求结束去除loading
            $('.loading').hide()
        })
}

function setData(data) {
    data
        .subjects
        .forEach(movie => {
            var tpl = ` <div class="item">
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
            $node.find('a').attr('href', movie.alt)
            $node
                .find('.cover img')
                .attr('src', movie.images.medium)
            $node
                .find('.detail h2')
                .text(movie.title)
            $node
                .find('.detail .extra>span')
                .eq(0)
                .text(movie.rating.average + '分')
            $node
                .find('.detail .extra>span')
                .eq(1)
                .text(' / ' + movie.collect_count + ' 收藏')
            $node
                .find('.year')
                .text(movie.year)
            $node
                .find('.type')
                .text(movie.genres.join('、'))
            $node
                .find('.director')
                .text(function () {
                    var nameArr = []
                    movie
                        .directors
                        .forEach((name) => {

                            nameArr.push(name.name)
                        })
                    return nameArr.join('、')
                })
            $node
                .find('.starring')
                .text(function () {
                    var StarringArr = []
                    movie
                        .casts
                        .forEach((name) => {

                            StarringArr.push(name.name)
                        })
                    return StarringArr.join('、')
                })
            $('#Top250').append($node)
        });
}
// 加载更多 函数节流,以最后一次的请求为准
var clock;
var container = $('#Top250')
$('main').scroll(function () {

    if (clock) { //第一次是undefined不执行
        clearTimeout(clock) //400毫秒以内的再次请求清除前一次以最后一次为准，节省流量
    }
    clock = setTimeout(function () {
        if ($('main').height() + $('main').scrollTop() + 10 >= $('section').eq(0).height()) {
            getData()
        }
    }, 400)
})
