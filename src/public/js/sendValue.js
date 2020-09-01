var sendValue = (value) =>{
    fetch('http://localhost:3000/insertNewValue')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
  });   
}