function nextStep1() {
    var PI = document.getElementById("PI");
    var UP = document.getElementById("UP");
    var content1 = document.getElementById("content-side-bar-1");
    var content2 = document.getElementById("content-side-bar-2");
    var back2 = document.getElementById("back2"); 
    var back1 = document.getElementById("back1"); 
    // Mengubah status dan tampilan PI dan UP
    PI.classList.remove("active");
    PI.classList.add("finis");
    UP.classList.remove("inactive");
    UP.classList.add("active");

    // Menampilkan content-side-bar-2 dan menyembunyikan content-side-bar-1
    content1.style.display = "none";
    content2.style.display = "block";
    back2.style.display = "flex";
    back1.style.display = "none";
}

function nextStep2() {
    var UP = document.getElementById("UP");
    var ADD = document.getElementById("ADD");
    var content2 = document.getElementById("content-side-bar-2");
    var content3 = document.getElementById("content-side-bar-3");
    var back3 = document.getElementById("back3");
    var back2 = document.getElementById("back2");

    UP.classList.remove("active");
    UP.classList.add("finis");
    ADD.classList.remove("inactive");
    ADD.classList.add("active");

    back3.style.display = "flex";
    back2.style.display = "none";
    content2.style.display = "none";
    content3.style.display = "block";
}

function goBack3() {
    nextStep1();
    var ADD = document.getElementById("ADD");
    var UP = document.getElementById("UP");
    var content3 = document.getElementById("content-side-bar-3");
    var back1 = document.getElementById("back1"); 
    var back2 = document.getElementById("back2"); 
    var back3 = document.getElementById("back3"); 
    
    back1.style.display = "none";
    back2.style.display = "flex";
    back3.style.display = "none";
    content3.style.display = "none";

    ADD.classList.remove("active");
    ADD.classList.add("inactive");
    UP.classList.remove("finis");
    UP.classList.remove("acttive");
}

function goBack2() {
    nextStep1();
    var PI = document.getElementById("PI");
    var UP = document.getElementById("UP");
    var content2 = document.getElementById("content-side-bar-2");
    var content1 = document.getElementById("content-side-bar-1");
    var back1 = document.getElementById("back1"); 
    var back2 = document.getElementById("back2"); 
    
    back1.style.display = "flex";
    back2.style.display = "none";
    content2.style.display = "none";
    content1.style.display = "block";

    PI.classList.remove("finis");
    PI.classList.add("active");
    UP.classList.remove("active");
    UP.classList.add("inactive");
    
}