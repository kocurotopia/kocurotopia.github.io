var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/kocury.gif') {
      myImage.setAttribute ('src','images/kocury2.gif');
      myImage.setAttribute ('width','216');
      myImage.setAttribute ('height','260');
    } else {
      myImage.setAttribute ('src','images/kocury.gif');
      myImage.setAttribute ('width','360');
      myImage.setAttribute ('height','263');
    }
}