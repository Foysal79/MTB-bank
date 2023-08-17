/// stop-1 : add click event handler with the submit button 
document.getElementById('btn-submit').addEventListener('click', function()
{
    /// stop-2 :
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    emailField.value = '';
    

    /// stop - 3 : get password
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    passwordField.value = '';
    
    /// stop - 4 : verify email and password ( worng way dont use)
    if(email === 'mtb@bank.com' && password === 'mtb')
    {
        location.href = "index.html";
    }
    else{
        alert('tui password vule gasos tuke ses korbo ami akon');
    }

})