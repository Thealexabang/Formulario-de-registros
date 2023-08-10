function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

function validacion(){
    let nombre = document.getElementById('nombre');
    let apellido = document.getElementById('apellido');
    let email = document.getElementById('email');
    let password1 = document.getElementById('password1');
    let password2 = document.getElementById('password2');
    let terminos = document.getElementById('terminos');

    if(terminos.checked){
        if(nombre.value!=="" && apellido.value!=="" && email.value!=="" && password1.value!=="" && password2.value!==""){
            if(password1.value.length>=6){
                if(password1.value==password2.value){
                    showAlertSuccess();
                }
                else{
                    showAlertError();
                }
            }
            else{
                showAlertError();
            }
        }
        else{
            showAlertError();
        }
    }
    else{
        showAlertError();
    }
}