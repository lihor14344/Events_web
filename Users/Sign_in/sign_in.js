// document.addEventListener('DOMContentLoaded', function () {
//     document.querySelectorAll('a').forEach(anchor => {
//         anchor.addEventListener('click', function (e) {
//             e.preventDefault();
//             console.log('Navigation to:', this.getAttribute('href'));
//         });
//     });

//     const form = document.getElementById('signin-form');
//     const emailInput = document.getElementById('email');
//     const passwordInput = document.getElementById('password');
//     const emailError = document.getElementById('email-error');
//     const passwordError = document.getElementById('password-error');
//     const submitBtn = document.getElementById('submit-btn');
//     const btnText = document.getElementById('btn-text');
//     const btnSpinner = document.getElementById('btn-spinner');

//     form.addEventListener('submit', function (e) {
//         e.preventDefault();

//         emailInput.classList.remove('input-error');
//         passwordInput.classList.remove('input-error');
//         emailError.classList.add('hidden');
//         passwordError.classList.add('hidden');

//         let isValid = true;

//         if (!emailInput.value || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
//             emailInput.classList.add('input-error');
//             emailError.classList.remove('hidden');
//             isValid = false;
//         }

//         if (!passwordInput.value || passwordInput.value.length < 8) {
//             passwordInput.classList.add('input-error');
//             passwordError.classList.remove('hidden');
//             isValid = false;
//         }

//         if (isValid) {
//             submitBtn.disabled = true;
//             btnText.textContent = 'Signing in...';
//             btnSpinner.classList.remove('hidden');

//             setTimeout(() => {
//                 console.log('Form submitted:', {
//                     email: emailInput.value,
//                     password: passwordInput.value,
//                     remember: document.getElementById('remember-me').checked
//                 });

//                 submitBtn.disabled = false;
//                 btnText.textContent = 'Sign in';
//                 btnSpinner.classList.add('hidden');
//                 alert('Sign in successful! (This is a demo)');
//             }, 1500);
//         }
//     });

//     document.getElementById('forgot-password').addEventListener('click', function (e) {
//         e.preventDefault();
//         alert('Password reset link will be sent to your email!');
//     });

//     document.getElementById('signup-link').addEventListener('click', function (e) {
//         e.preventDefault();
//         alert('Redirecting to sign up page...');
//     });
// });



document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            console.log('Navigation to:', this.getAttribute('href'));
        });
    });

    const form = document.getElementById('signin-form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');
    const submitBtn = document.getElementById('submit-btn');
    const btnText = document.getElementById('btn-text');
    const btnSpinner = document.getElementById('btn-spinner');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        emailInput.classList.remove('input-error');
        passwordInput.classList.remove('input-error');
        emailError.classList.add('hidden');
        passwordError.classList.add('hidden');

        let isValid = true;

        if (!emailInput.value || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
            emailInput.classList.add('input-error');
            emailError.classList.remove('hidden');
            isValid = false;
        }

        if (!passwordInput.value || passwordInput.value.length < 8) {
            passwordInput.classList.add('input-error');
            passwordError.classList.remove('hidden');
            isValid = false;
        }

        if (isValid) {
            submitBtn.disabled = true;
            btnText.textContent = 'Signing in...';
            btnSpinner.classList.remove('hidden');

            setTimeout(() => {
                // Simulated success message
                console.log('Form submitted:', {
                    email: emailInput.value,
                    password: passwordInput.value,
                    remember: document.getElementById('remember-me').checked
                });

                // Redirect to profile page
                window.location.href = '/Users/UserPF/user_profile/profile.html';
            }, 1500);
        }
    });

    document.getElementById('forgot-password').addEventListener('click', function (e) {
        e.preventDefault();
        alert('Password reset link will be sent to your email!');
    });

    document.getElementById('signup-link').addEventListener('click', function (e) {
        e.preventDefault();
        window.location.href = '/Users/Sign_up/sign_up.html';
    });
});
