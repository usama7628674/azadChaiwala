let form = document.getElementById('form_user')

form.addEventListener("submit",function(e){
    let fname = document.getElementById('name').value
    let fname_error = document.getElementById('name_error')

    if (fname == '')
    {
        fname_error.innerText = 'First name is required'
        e.preventDefault()
        
    }
    else {
        fname_error.innerText = ''
    }

    let lname = document.getElementById('lname').value
    let lname_error = document.getElementById('lname_error')

    if (lname == '')
    {
        lname_error.innerText = 'Last name is required'
        e.preventDefault()
        
    }
    else {
        lname_error.innerText = ''
    }

    //age

    let age = document.getElementById('age').value
    let age_error = document.getElementById('age_error')

    if (age<13 || age>65)
    {
        console.log("age error")
        age_error.innerText = 'Age should be between 13 to 65'
        e.preventDefault()
    }

    else{
        age_error.innerText = ''
    }

    // email

    let email = document.getElementById('email').value
    let email_error = document.getElementById("email_error")
    if (!email.includes('@') || !email.includes(".")){
        email_error.innerText = "kindly enter proper email"
        e.preventDefault()
    }

    else {
        email_error.innerText = ""
    }

    // password validation

    let pwd = document.getElementById('pwd').value
    let pwd_error = document.getElementById('pwd_error')

    if (pwd == ''){
        pwd_error.innerText = 'Password is required'
        e.preventDefault()
    }

    else{
        pwd_error.innerText = ''
    }

    let pwd1 = document.getElementById('pwd1').value
    let pwd1_error = document.getElementById('pwd1_error')

    if (pwd1 == '' || password != pwd1)
    {
        pwd1_error.innerText = 'password does not match'
        e.preventDefault()
    }
    else{
        pwd1_error.innerText = ''
    }
})