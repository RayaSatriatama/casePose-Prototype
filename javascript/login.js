document.getElementById("signInButton").addEventListener("click", function() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Pengecekan kosong email dan password
    if (email === "" || password === "") {
        var errorLabel = document.getElementById("error-label");
        errorLabel.style.display = "block";
        errorLabel.innerHTML = "Make sure the input data is filled in completely";
        return; // Menghentikan eksekusi fungsi jika email atau password kosong
    }

    // Validasi email dan password
    if (email === "leonardo@upi.edu" && password === "leonardo") {
        // Redirect ke halaman dashboard jika login berhasil
        window.location.href = "after/index.html";
    } else {
        // Menampilkan label error jika login gagal
        var errorLabel = document.getElementById("error-label");
        errorLabel.style.display = "block";
        errorLabel.innerHTML = "Invalid email or password";
    }
});
