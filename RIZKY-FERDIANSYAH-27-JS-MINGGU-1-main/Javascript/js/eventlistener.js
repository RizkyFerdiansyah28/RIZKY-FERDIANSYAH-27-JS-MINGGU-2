function coba() {
    a = document.querySelector(".isi");
    a.innerHTML = "belajar event listener";
    console.log("coba event listener");
}


// judul.addEventListener("click", coba);

// judul.onmouseover = coba;

judul.onmouseover = function () {
    console.log("coba function anonymous");
};