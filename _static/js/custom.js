document.addEventListener("DOMContentLoaded", function(event) {
  Array.prototype.slice.call(document.querySelectorAll('.blq'))
    .forEach(function(elem) {
      elem.onclick = function () {
        if (this.classList.contains('spoiler')) {
        this.classList.remove('spoiler');
      } else {
        this.classList.add('spoiler');
      }
    };
  });
  var linkdoc = document.createElement('p');
  linkdoc.id ='link-doc-pyqgis';
  linkdoc.innerHTML = '<a href="https://qgis.org/pyqgis/3.4/" target="_blank">Documentation de l\'API <b>PyQgis</b><img src="_static/magnify-clip-ltr.svg" /></a>';
  document.querySelector('.sphinxsidebar').appendChild(linkdoc);
});
