// Enlarge photos
function enlargeImg(image) {
    console.log(image);
    document.getElementById("enlarge-overlay").style.height = "100%";
    let img = document.getElementById(image);
    let enlargeImg = document.getElementById("overlay-img");
    enlargeImg.src = img.src;
}

function closeImg() {
    document.getElementById("enlarge-overlay").style.height = "0%";
}