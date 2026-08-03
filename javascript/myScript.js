/*
    Solano Sayasetha
    myScript.js
*/

/* Script for modal */
var modal = document.getElementById("myModal");

document.querySelectorAll('.galImg').forEach(function(image) {
    var modalImg = document.getElementById("imgIn");
    var captionText = document.getElementById("caption");
    img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }

    var span = document.getElementsByClassName("close")[0];

    span.onclick = function() {
        modal.style.display = "none";
    }
});
