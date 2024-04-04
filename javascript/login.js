document.getElementById('signInButton').addEventListener('click', function(event) {
    var email = document.getElementsByName("email")[0].value;
    var password = document.getElementsByName("password")[0].value;

    if (email == "" || password == "") {
        alert("Email and password must be filled out");
        return false; // Menghentikan eksekusi lebih lanjut
    }

    var emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    if (!emailRegex.test(email)) {
        alert("Invalid email format");
        return false; // Menghentikan eksekusi lebih lanjut
    }

    if (password.length < 8) {
        alert("Password must be at least 8 characters long");
        return false; // Menghentikan eksekusi lebih lanjut
    }

    // Jika semua validasi lulus, lanjutkan dengan proses login
    // Misalnya, mengarahkan ke halaman index.html atau memanggil fungsi login
});



