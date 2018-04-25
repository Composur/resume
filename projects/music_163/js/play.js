function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

$id=getParameterByName('id')
var APP_ID = '0Lc0J2TfU5z7XktxsbvcwwqM-gzGzoHsz';
var APP_KEY = 'pEqMag3135aDG1aFssRBUdhW';

AV.init({
    appId: APP_ID,
    appKey: APP_KEY
});
   // 查询
   var query = new AV.Query('Song');
    query.get($id).then(function(data){
        var dataObj=data.attributes
        console.log(dataObj.url)
        var audio=$( ".play" ).add(`
        <audio
        src="${dataObj.url}"
        autopla>
        Your browser does not support the <code>audio</code> element.
      </audio>
        `)
        var lyric=dataObj.lyric.split('\n')

        var regRN = /\n/g;
         d = dataObj.lyric.replace(regRN,"<br/>");
        $('.lyric').text(d)

        console.log(d.split('\n'))
        // console.log(lyric.length)
        console.log(('\n'+dataObj.lyric).split('\n'))
    })
   