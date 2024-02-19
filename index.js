document.querySelector('.form-container').addEventListener('submit',
function(event){
    event.preventDefault();
     
    let u=document.getElementById("Username").value 
    let p=document.getElementById("Password").value 
    let e=document.getElementById("Email").value 
    let m=document.getElementById("Mobile").value
    let s=document.getElementById("SapId").value
    let mrks=document.getElementById("Marks").value

    const nameRegex = /^[a-zA-Z\s]+$/;
    const SAPIDRegex = /^[0-9]{10}$/;
    const phoneRegex = /^[0-9]{10}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const mathsRegex = /^[0-9]{1,3}$/;

    if(!hasValue(u,'Cannot be Empty')) return;
    if(!hasValue(s,'Cannot be Empty')) return;
    if(!hasValue(m,'Cannot be Empty')) return;
    if(!hasValue(e,'Cannot be Empty')) return;
    if(!hasValue(mrks,'Cannot be Empty')) return;
    if(!hasValue(p,'Cannot be Empty')) return;

    if(!nameRegex.test(n)) {
        showError(n,'Invalid Name')
        return;
    }
    if(!SAPIDRegex.test(s)) {
        showError(s,'Invalid SapId')
        return;
    }
    if(!phoneRegex.test(m)) {
        showError(m,'Invalid Number')
        return;
    }
    if(!emailRegex.test(e)) {
        showError(e,'Invalid Email')
        return;
    }
    if(!mathsRegex.test(mrks)) {
        showError(mrks,'Invalid Marks')
        return;
    }
    this.submit();
});

function showMessage(input,messsage,type){
    const msg = input.parentNode.querySelector("small")
    msg.innerText = message;
    input.className = type ? "success" : "error";
    return type;
}

function showError(input,message){
    return showMessage(input,message,false);
}

function showSuccess(input){
    return showMessage(input,"",true)
}

function hasValue(input,message){
    if(input.value.trim()===""){
        showError(input,message);
        return;
    }
    return showSuccess(input)
}

// function validateEmail(input,req,invalidMsg){
//     if(!hasValue(input,req)){
//         return false;
//     }
//     const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     const email = input.value.trim();
//     if(!emailReg.test(email)){
//         return showError(input,invalidMsg)
//     }
//     return true;
// }
// const form = document.querySelector("#signup")

// const nameReq = "please enter name"
// const emailReq = "please enter email"
// const emailValid = "please valid email"

// form.addEventListener("submit",function(event){
//     event.preventDefault();
//     let nameValid = hasValue(form.elements["name"],nameReq)
//     let emailValid = validateEmail(form.elements["email"],emailReq,emailValid)
//     if(nameValid && emailValid){
//         alert('validation complete')
//         form.submit();
//     }
// })