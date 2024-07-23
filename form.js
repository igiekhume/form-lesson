function validateForm(e){
    e.preventDefault()
    var name = document.loginForm.name.value;
    var password = document.loginForm.name.value;
    if (name.length == 0){
        return alert("Name is required")
    }
    if(password.length < 5){
        return alert("password should be more that five")
    }
    alert("Form Submitted Successfully");
    document.loginForm.submit();
}