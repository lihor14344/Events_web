document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('signup-form');
  const fullName = document.getElementById('full-name');
  const email = document.getElementById('email');
  const terms = document.getElementById('terms');
  const submitBtn = document.getElementById('submit-btn');
  const btnText = document.getElementById('btn-text');
  const btnSpinner = document.getElementById('btn-spinner');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    document.querySelectorAll('.input-error').forEach(el => el.classList.remove('input-error'));
    document.querySelectorAll('.error-message').forEach(el => el.classList.add('hidden'));

    let isValid = true;

    if (!fullName.value.trim()) {
      fullName.classList.add('input-error');
      document.getElementById('full-name-error').classList.remove('hidden');
      isValid = false;
    }

    if (!email.value || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      email.classList.add('input-error');
      document.getElementById('email-error').classList.remove('hidden');
      isValid = false;
    }

    if (!terms.checked) {
      terms.classList.add('input-error');
      document.getElementById('terms-error').classList.remove('hidden');
      isValid = false;
    }

    if (isValid) {
      submitBtn.disabled = true;
      btnText.textContent = 'Creating account...';
      btnSpinner.classList.remove('hidden');

      setTimeout(() => {
        // Redirect instead of alert
        window.location.href = '/Users/UserPF/user_profile/profile.html';
      }, 1500);
    }
  });

  document.getElementById('signin-link').addEventListener('click', function (e) {
    e.preventDefault();
    // Redirect to Sign In page instead of alert
    window.location.href = '/Users/Sign_in/sign_in.html';
  });
});
