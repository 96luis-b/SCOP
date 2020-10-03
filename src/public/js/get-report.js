var generalProductionReport = (date) =>{
    fetch('/generalReport', {
      method: 'POST', // or 'PUT'
      body: JSON.stringify({
        // "date":objDate,
        // "oper":input_id_oper.value
    }), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(res => res.json())
    .then(response => {
      // console.log(response)
      if(response.status==200){
        //  console.log(response.response)
        showGeneralReport(response.response)
      }else{
        alert("Ha ocurrido un error")
        console.error({response: response.body, status: response.status})
      }
    })
    .catch(error => console.error('Error:', error))
  }
  
  
  
  


// var generalProductionReport = () =>{
  
//   fetch('/getUsers', {
//     method: 'POST',
//     body: JSON.stringify({
     
//   }),
//     headers:{
//       'Content-Type': 'application/json',
//       'Accept': 'application/json'
//     }
//   })
//   .then(res => res.json())
//   .then(response => {
//     if(response.status==200){
//      console.log(response)
//     }else{
//         console.log("Su nombre de usuario o su clave es incorrecto")
//     }
    
//   })
//   .catch(error => console.error('Error:', error))

// }

