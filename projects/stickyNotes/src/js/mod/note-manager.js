var Toast = require('./toast.js').Toast;
var Note = require('./note.js').Note;
var Toast = require('./toast.js').Toast;
var Event = require('mod/event.js');


var NoteManager = (function(){

  function load() {
    $.get('/api/notes')
      .done(function(ret){
        if(ret.status == 0){
          $.each(ret.data, function(idx, article) {
              new Note({
                id: article.id,
                context: article.text,
                username: article.username
              });
          });

          Event.fire('waterfall');
        }else{
          Toast(ret.errorMsg);
        }
      })
      .fail(function(){
        Toast('网络异常');
      });


  }

  function add(){
    new Note();
  }

  return {
    // 加载数据
    load: load,
    // 点击按钮创建
    add: add
  }

})();

module.exports.NoteManager = NoteManager