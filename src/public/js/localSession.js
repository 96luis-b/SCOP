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
 }