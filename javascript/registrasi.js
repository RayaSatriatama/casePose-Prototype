document.addEventListener('DOMContentLoaded', function() {
    const signUpButton = document.getElementById('signUpButton');
    const errorLabel2 = document.getElementById('error-label-1');

    signUpButton.addEventListener('click', function(event) {
        event.preventDefault(); 
        const firstname = document.getElementById('firstname').value;
        const lastname = document.getElementById('lastname').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const sbpw = document.getElementById('sbpw').value;

        let isValid = true;

        // Validasi Inputan
        if (!firstname || !lastname || !email || !password || !sbpw) {
            errorLabel2.textContent = 'Make sure the data is filled in completely';
            errorLabel2.style.visibility = 'visible';
            isValid = false;
        } else {
            // Validasi Email
            // untuk memastikan email berakhir dengan fromat @upi.edu
            const emailRegex = /^[a-z]+@upi\.edu$/;
            if (!emailRegex.test(email)) {
                errorLabel2.textContent = 'Email input must be in the format @upi.edu or your format input is invalid';
                errorLabel2.style.visibility = 'visible';
                isValid = false;
            }
            // Validasi Password dan Submit Password
            if (password !== sbpw) {
                errorLabel2.textContent = 'Input password and submit password do not match';
                errorLabel2.style.visibility = 'visible';
                isValid = false;
            } else if (password.length < 8) {
                errorLabel2.textContent = 'Password must be at least 8 characters';
                errorLabel2.style.visibility = 'visible';
                isValid = false;
            }
        }

        if (isValid) {
            // Menampilkan notifikasi sukses 
            alert('Registration Successful');
            setTimeout(function() {
                window.location.href = "login.html";
            }, 3000); // Redirects setelah 3 detik
        }
    });
});

