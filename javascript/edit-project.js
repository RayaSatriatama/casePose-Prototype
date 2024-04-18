// PI up add
    var PI = document.getElementById("PI");
    var UP = document.getElementById("UP");
    var ADD = document.getElementById("ADD");
    var content1 = document.getElementById("content-side-bar-1");
    var content2 = document.getElementById("content-side-bar-2");
    var content3 = document.getElementById("content-side-bar-3");

function nextStep1() { 
    var PI = document.getElementById("PI");
    var UP = document.getElementById("UP");
    var ADD = document.getElementById("ADD");
    var content1 = document.getElementById("content-side-bar-1");
    var content2 = document.getElementById("content-side-bar-2");
    var content3 = document.getElementById("content-side-bar-3");

    PI.classList.remove("inactive");
    PI.classList.add("active");
    UP.classList.remove("active");
    UP.classList.add("inactive");
    ADD.classList.remove("active");
    ADD.classList.add("inactive");

    content1.style.display = "block";
    content2.style.display = "none";
    content3.style.display = "none";    
}

function nextStep2() {
    var PI = document.getElementById("PI");
    var UP = document.getElementById("UP");
    var ADD = document.getElementById("ADD");
    var content1 = document.getElementById("content-side-bar-1");
    var content2 = document.getElementById("content-side-bar-2");
    var content3 = document.getElementById("content-side-bar-3");

    PI.classList.remove("active");
    PI.classList.add("inactive");
    UP.classList.remove("inactive");
    UP.classList.add("active");
    ADD.classList.remove("active");
    ADD.classList.add("inactive");

    content1.style.display = "none";
    content2.style.display = "block";
    content3.style.display = "none";  
}

function nextStep3() {
    var PI = document.getElementById("PI");
    var UP = document.getElementById("UP");
    var ADD = document.getElementById("ADD");
    var content1 = document.getElementById("content-side-bar-1");
    var content2 = document.getElementById("content-side-bar-2");
    var content3 = document.getElementById("content-side-bar-3");

    PI.classList.remove("active");
    PI.classList.add("inactive");
    UP.classList.remove("active");
    UP.classList.add("inactive");
    ADD.classList.remove("inactive");
    ADD.classList.add("active");

    content1.style.display = "none";
    content2.style.display = "none";
    content3.style.display = "block";  
}

function triggerFileInput() {
    document.getElementById('fileInput').click();
}

function handleFileInputChange(event) {
    const file = event.target.files[0];
    if (file) {
        // Lakukan sesuatu dengan file yang dipilih
        console.log("File yang dipilih:", file.name);
    }
}

function notifikasiEditSucces() {
    var notificationDiv = document.getElementById("notification-edit");
    notificationDiv.style.display = "block";
}

function notifikasiEditSuccesBack() {
    var notificationDiv = document.getElementById("notification-edit");
    notificationDiv.style.display = "none";
}

function goToPage(url) {
    window.location.href = url;
}
