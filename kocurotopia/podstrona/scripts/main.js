var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/kocury.jpg') {
      myImage.setAttribute ('src','images/kocury2.jpg');
    } else {
      myImage.setAttribute ('src','images/kocury.jpg');
    }
}