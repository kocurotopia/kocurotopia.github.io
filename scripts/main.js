var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/gang.JPG') {
      myImage.setAttribute ('src','images/gang2.JPG');
    } else {
      myImage.setAttribute ('src','images/gang.JPG');
    }
}
