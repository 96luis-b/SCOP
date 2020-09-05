
var login = () =>{
  console.log(inputUser.value)
  console.log(inputPassword.value)
  fetch('/login', {
    method: 'POST',
    body: JSON.stringify({
        "username":inputUser.value,
        "password":inputPassword.value
  }),
    headers:{
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
  .then(res => res.json())
  .then(response => {
    if(response.status==200){
        saveSession(response);
        window.location.href = "./dashboard";
    }else{
        console.log("Su nombre de usuario o su clave es incorrecto")
    }
    
  })
  .catch(error => console.error('Error:', error))

}



btnSend.onclick = login;