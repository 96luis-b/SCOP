var search = (date) =>{
    // console.log(date)
    // console.log(input_id_oper.value)
    
    let objDate;
    if(date){objDate=date}else{let d = new Date(); objDate = `${d.getFullYear()}/${(d.getMonth())+1}/${d.getDate()}`}
    fetch('/getOper', {
      method: 'POST', // or 'PUT'
      body: JSON.stringify({
        "date":objDate,
        "oper":input_id_oper.value
    }), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(res => res.json())
    .then(response => {
      if(response.status==200){
        
        const count = []
        const dataOper = response.body.resGetOper[0];
          for (let index = 0; index < response.body.resCount.length; index++) {
           // console.log(response.body.resCount[index])
            // let pack = {
            //   id_oper: response.body.resCount[index].id_oper,
            //   id_product: response.body.resCount[index].id_product,
            //   name_product: response.body.resCount[index].name_product,
            //   partialTimeCounter = count.partialTimeCounter
            //   timeCount = count.timeCount
            //   unitCount = count.unitCount
            // }
            count.push(response.body.resCount[index])
          }
          //console.log(count)
          let package = {
            oper: {name_op: `${dataOper.name_oper } ${dataOper.second_name_oper } ${dataOper.lastname } ${dataOper.second_surname_oper}`,
              workstation:dataOper.descrip,
              id_oper: dataOper.id_oper
            },
            count: count
          }
        
      //  console.log(response)
        enab()
        clean_count()
        name_oper.innerHTML = package.oper.name_op;
        workstation.innerHTML = package.oper.workstation
        id_oper.innerHTML = package.oper.id_oper
        display_count(count)


        
      }else{
        disab()
        alert("El codigo descrito no se encuetra")
        console.error({response: response.body, status: response.status})
      }
    })
    .catch(error => console.error('Error:', error))
  }
  
  
  
  