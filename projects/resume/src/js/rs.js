(function(){
  const fn={
    init(){
      this.navMenu()
    },
    navMenu:function(){
      var navLis=fn.$('#topNavBar').querySelectorAll('.nav-item')
      console.log(navLis)
      navLis.forEach(element => {
        element.addEventListener('mouseenter', e => {
          element.children[1].classList.add('active')
        });
        element.addEventListener('mouseleave', e => {
          element.children[1].classList.remove('active')
        });
      });
    },
    $(ele){
      return document.querySelector(ele)
    },
    $$(ele){
      return document.querySelectorAll(ele)
    }
  }
  fn.init()
})()