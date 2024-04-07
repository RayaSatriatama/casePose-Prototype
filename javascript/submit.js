function goBack() {
    window.history.back();
}

function nextStep1() {
    var PI = document.getElementById("PI");
    var UP = document.getElementById("UP");
    var content1 = document.getElementById("content-side-bar-1");
    var content2 = document.getElementById("content-side-bar-2");

    // Mengubah status dan tampilan PI dan UP
    PI.classList.remove("active");
    PI.classList.add("inactive");
    UP.classList.remove("inactive");
    UP.classList.add("active");

    // Menampilkan content-side-bar-2 dan menyembunyikan content-side-bar-1
    content1.style.display = "none";
    content2.style.display = "block";
}

function nextStep2() {
    var UP = document.getElementById("UP");
    var ADD = document.getElementById("ADD");
    var content2 = document.getElementById("content-side-bar-2");
    var content3 = document.getElementById("content-side-bar-3");

    // Mengubah status dan tampilan UP dan ADD
    UP.classList.remove("active");
    UP.classList.add("inactive");
    ADD.classList.remove("inactive");
    ADD.classList.add("active");

    // Menampilkan content-side-bar-3 dan menyembunyikan content-side-bar-2
    content2.style.display = "none";
    content3.style.display = "block";
}