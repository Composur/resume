$('.container .tabs').on('click','li',function(e){
    let $li=$(e.currentTarget)
    let $index=$li.index()
    $li.addClass('active').siblings().removeClass('active')
    let $tabContents=$('.tab-contents')
    $tabContents.children().eq($index).addClass('active').siblings().removeClass('active')
})
 // Music search
        // $('#search').change(function(e){
        //     var $input=$(e.currentTarget)
        //     var $val=$input.val().trim()
        //     var query = new AV.Query('Song')
        //     query.contains('name',$val)
        //     query.find().then((data)=>{
        //         $('.search-songs').empty()
        //         console.log(data)    
        //         if (data.length===0) {
        //             $('.search-songs').text('结果不存在')
        //         } else {

        //             data.forEach((item)=>{
        //                let searchObj=item.attributes
        //                 let li=`
        //         <li>
        //                 <h3>${searchObj.name}
        //                     <!-- <small>起风了</small> -->
        //                 </h3>
        //                 <p>
        //                     <span class="musixSq indexIcon"></span>
        //                     <span>${searchObj.singer}</span>
        //                 </p>
        //                 <a class="playBtn" href="123">
        //                     <svg class="icon" aria-hidden="true">
        //                         <use xlink:href="#icon-17"></use>
        //                     </svg>
        //                 </a>
        //             </li>
        //         ` ;
        //          $('.search-songs').append(li)       
        //             })

        //         }

        //     })
        // })