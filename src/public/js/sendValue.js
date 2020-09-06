var sendValue = (data, name_product, id_oper) =>{
  var d = new Date();
  fetch('/insertNewValue', {
    method: 'POST', // or 'PUT'
    body: JSON.stringify({
      "quantity": data.upgrade,
      "date":`${d.getFullYear()}/${(d.getMonth())+1}/${d.getDate()}`,
      "time":`${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`,
      "id_user":loadSession().id_user,
      "name_product":name_product,
      "id_oper":id_oper
  }), // data can be `string` or {object}!
    headers:{
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
  .then(res => res.json())
  .then(response => {
    console.log('Success:', response)
    console.log('Status:', response.status)
    if(response.status==200){
      upgradeCount(data, name_product, id_oper)
      return response.status
    }else{}
  })
  .catch(error => console.error('Error:', error))
}



