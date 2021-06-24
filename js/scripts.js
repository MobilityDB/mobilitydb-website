// Script for the "slideshow" in index.html

var myIndex = 0;
var x = document.getElementsByClassName("mySlides");
carousel();

document.getElementById("nav-droite").addEventListener('click', function() { carousel (1) } );
document.getElementById("nav-gauche").addEventListener('click', function() { carousel (-1) } );


function carousel(sens=0) {
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    if (sens === 0) {
        myIndex += 1
    } else {
        myIndex += sens;
    }

    if (myIndex > x.length) {myIndex = 1}
    if (myIndex <= 0) { myIndex = x.length}
    console.log(myIndex)
    x[myIndex-1].style.display = "block";
    if (sens === 0) {setTimeout(carousel, 6000)}
    return true
}