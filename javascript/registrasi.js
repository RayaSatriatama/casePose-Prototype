document.addEventListener('DOMContentLoaded', function() {
    const signUpButton = document.getElementById('signUpButton');
    const errorLabel2 = document.getElementById('error-label-2');

    signUpButton.addEventListener('click', function(event) {
        event.preventDefault(); 
        const firstname = document.getElementById('firstname').value;
        const lastname = document.getElementById('lastname').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const sbpw = document.getElementById('sbpw').value;

        let isValid = true;

        if (!firstname || !lastname) {
            errorLabel2.textContent = 'Pastikan data sudah terisi dengan lengkap';
            errorLabel2.style.display = 'block';
            isValid = false;
        }

        // Validasi Email
        const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
        if (!emailRegex.test(email)) {
            errorLabel2.textContent = 'Inputan email harus benar';
            errorLabel2.style.display = 'block';
            isValid = false;
        }

        // Validasi Password dan Submit Password
        if (password !== sbpw) {
            errorLabel2.textContent = 'Inputan password dan submit password tidak sesuai';
            errorLabel2.style.display = 'block';
            isValid = false;
        } else if (password.length < 8) {
            errorLabel2.textContent = 'Password minimal 8 karakter';
            errorLabel2.style.display = 'block';
            isValid = false;
        }

        // Validasi Inputan
        if (!email || !password || !sbpw) {
            errorLabel2.textContent = 'Pastikan data sudah terisi dengan lengkap';
            errorLabel2.style.display = 'block';
            isValid = false;
        }

        if (isValid) {
            // Proses pendaftaran jika semua validasi lulus
            window.location.href = "after/index.html";
        }
    });
});
