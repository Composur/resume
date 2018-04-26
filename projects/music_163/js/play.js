let log = console
    .log
    .bind(console)


    function getParameterByName(name, url) {
    if (!url) 
        url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) 
        return null;
    if (!results[2]) 
        return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

getData('Song')

// 查询
function getData(Obj) {

    var APP_ID = '0Lc0J2TfU5z7XktxsbvcwwqM-gzGzoHsz';
    var APP_KEY = 'pEqMag3135aDG1aFssRBUdhW';

    AV.init({appId: APP_ID, appKey: APP_KEY});

    var query = new AV.Query(Obj);
    var $id = getParameterByName('id')
    query .get($id).then(function (data) {
        var dataObj = data.attributes
        songsPlay(dataObj)
        songLyric(dataObj)
    })
    
       

}

// 歌曲操作
var audio = document.createElement('audio')
function songsPlay(dataObj) {

    // 播放
    audio.src = `${dataObj.url}`
    audio.play()

    // 点击整个背景播放/暂停,同时play图标消失
    var clock = false
    $('.cover').click(function (e) {
        e.preventDefault();
        if (clock) {
            audio.play()
            $('.img-play span').removeClass('play-btn')
            $('.img-play').removeClass('pause')
            clock = false
        } else {
            audio.pause()
            $('.img-play span').addClass('play-btn')
            $('.img-play').addClass('pause')
            clock = true
        }
    })
}

//歌词操作
function songLyric(dataObj) {
    //添加歌曲名称
    var $span=$(`<span>${dataObj.name}</span>`)
    $('.lyric-h2').append($span)
    // 得到歌词数组
    var lyricA = dataObj.lyric.split('\n') 
    // 匹配
    // var regex = /^\[(.+)\](.*)$/g
    var arr=[]
    lyricA.forEach(function (str,index) {
        var test=str.split(']')
        test[0]=test[0].substring(1)
        var regex=/(\d)+:([\d.]+)/
        var matchs=test[0].match(regex)
        var min=matchs[1]
        var seconds=matchs[2]
        arr.push({
            time:Number(Number(min*60)+Number(seconds),2).toFixed(2),
            words:test[1]
        })
       
    })
    var nowTime=audio.currentTime
    for(var i=0;i<arr.length;i++){
        var $p=$('<p/>')
        $p.attr('data-time',arr[i].time).text(arr[i].words)
        $('.detail-scroll').append($p)
    }


    setInterval(()=>{
        // return
        var nowTime=audio.currentTime
        var $pA=$('.detail-scroll>p')
        var $pTop
        for(var i=0;i<arr.length;i++){
            if(arr[i+1]!==undefined&&nowTime>=arr[i].time&&nowTime<arr[i+1].time){
                // 得到当前行距上面的top
                $pTop=$pA.eq(i)
                break
            }
        }
        if($pTop){
            var detailTop=$('.lyric .detail-scroll').offset().top
            var pTop=$pTop.offset().top
            var lineHeight=$('.lyric .detail').height()/3
            var nowTop=pTop-detailTop-lineHeight
            $('.lyric .detail-scroll').css('transform',`translateY(-${nowTop}px)`)
        }
    },500)
}

console.log()