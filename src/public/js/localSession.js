var saveSession = (data) => {
    localStorage.setItem('user', JSON.stringify(data.response[0]));
    console.log("usted ha iniciado sesión con exito");
    return 
}

var loadSession = () => {
   let user = JSON.parse(localStorage.getItem('user'))
   console.log(user)
   return user
}

var logOutSession = (data) => {
    localStorage.clear()
    window.location.href = "./login"
 }

//  window.addEventListener('load', 
//      function() { 
//         console.log("check de sesion")
//         if(loadSession()){
//             window.location.href = "./dashboard"
//             return
//         }else{
//            Storage.clear();
//            window.location.href = "./login"
//         }
//      }, false);