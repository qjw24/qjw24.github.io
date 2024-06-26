document.addEventListener('DOMContentLoaded', function() {
  if(!localStorage.getItem('agreed')) {
    alert('请阅读并同意我们的条款协议');
    localStorage.setItem('agreed', 'true');
  }
});
