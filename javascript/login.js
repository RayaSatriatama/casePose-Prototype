document.getElementById("signInButton").addEventListener("click", function() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Validasi email dan password
    if (email === "leonardo@gmail.com" && password === "leonardo") {
        // Redirect ke halaman dashboard jika login berhasil
        window.location.href = "after/index.html";
    } else {
        // Menampilkan label error jika login gagal
        var errorLabel = document.getElementById("error-label");
        errorLabel.style.display = "block";
    }
});