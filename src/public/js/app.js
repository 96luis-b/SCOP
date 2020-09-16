var sendValue = () =>{
    fetch('/', {
      method: 'POST', // or 'PUT'
      body: JSON.stringify({
        "mensaje": "hola servidor"
     }),
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(res => res.json())
    .then(response => {
      console.log('Success:', response)
      console.log('Status:', response.status)
    })
    .catch(error => console.error('Error:', error))
  }
  
  
  
  