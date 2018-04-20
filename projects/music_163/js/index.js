$('.container .tabs').on('click','li',function(e){
    let $li=$(e.currentTarget)
    let $index=$li.index()
    $li.addClass('active').siblings().removeClass('active')
    let $tabContents=$('.tab-contents')
    $tabContents.children().eq($index).addClass('active').siblings().removeClass('active')
})