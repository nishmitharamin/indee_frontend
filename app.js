const loginBtn = document.getElementById('login-btn');
const forgotPasswordLink = document.getElementById('forgot-password');

loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const emailInput = document.getElementById('email').value;
    const passwordInput = document.getElementById('password').value;
    
    console.log("Entered email   :", emailInput);
    console.log("Entered Password:", passwordInput);

    const validemail = 'nishmithaamin2002@gmail.com'; 
    const validPassword = '123456';

    if (emailInput.trim === '' || passwordInput.trim === '') {
        alert('Please fill in all fields');
        return;
    }
    if (emailInput === validemail && passwordInput === validPassword)
         {
        alert('Login successful!');
    } else {
        alert('Invalid email or password');
    }
});

forgotPasswordLink.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Reset password message has been sent to mail');
});