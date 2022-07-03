var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/gang.jpg') {
      myImage.setAttribute ('src','images/gang2.jpg');
    } else {
      myImage.setAttribute ('src','images/gang.jpg');
    }
}