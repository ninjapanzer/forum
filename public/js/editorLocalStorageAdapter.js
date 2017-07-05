(function(editor){
  var localStorage = window.localStorage;

  if(localStorage){
    Editor.prototype.repopulate = function(el){
      if (!el) {
        el = this.element || document.getElementsByTagName('textarea')[0];
      }
      var last_post = localStorage.getItem('lastPost')
      el.value = last_post == null ? '' : last_post;
    }
  }

})(Editor)

console.log(Editor.save);
