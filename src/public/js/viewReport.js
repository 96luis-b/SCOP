let showGeneralReport = (data) => {

   
    

        // console.log(breakDownPackage(data))
        $(".modal-body").html(`
            <div class="container">
                <table class="table">
                    ${breakDownPackage(data)}
                </table>
            </div>
       `)
        // $(".modal-body").html("<h1>hola</h1>")
        // console.log($(".modal-body"))
    // console.log(breakDownPackage(data))
        $('#modal').modal('show')
    }
    
    
    let breakDownPackage = (data) => {
        let crabCatcher = true
        let listCrabCatcher = '';
        for (let i = 0; i < data.length; i++) {
            let element = data[i];

            // for (let j = 0; j < element.length; j++) {
                let dataOper = element[0];
                if (dataOper.descrip == 'Cangrejero') {
                    if(crabCatcher) {
                        listCrabCatcher = theadCrabCatcher()
                        crabCatcher = false
                    }
                    listCrabCatcher = listCrabCatcher + `${tbodyCrabCatcher(element)}`
    
                }
                // if (dataOper == 'Colmillero') {
                    
                // }
                // if (dataOper == 'Revisador de carne negra') {
                    
                // }
                // if (dataOper == 'Revisador de carne blanca') {
                    
                // }
                // if (dataOper == 'Revisador de carne jumbo') {
                    
                // }
                
            // }
            
        }
        // console.log(listCrabCatcher)
        return listCrabCatcher
    }
    
    
    
    // crab-catcher  -- cangrejero
    let theadCrabCatcher = () => {
        return  `
            <thead class="bg-info">
                <tr>
                    <th scope="col">Codigo</th>
                    <th scope="col">Operario</th>
                    <th scope="col">Jumbo</th>
                    <th scope="col">Lump</th>
                    <th scope="col">Special</th>
                </tr>
            </thead>
        `
    }
    
    let tbodyCrabCatcher = (data) => {
        let th = `<th scope="row">${data[0].id_oper}</th>`
        let tdName = `<td>${data[0].name_oper} ${data[0].second_name_oper} ${data[0].lastname} ${data[0].second_surname_oper}</td>`
        let tdJumbo = `<td>0.0</td>`
        let tdLump = `<td>0.0</td>`
        let tdSpecial = `<td>0.0</td>`
    
           for (let j = 0; j < 3; j++) {
                // console.log(data[j])
                if(data[j] != undefined){
                    if(data[j].name_product == 'Jumbo'){
                        // console.log("Jumbo")
                        tdJumbo = `<td>${(data[j].sum).toFixed(1)}</td>`
                    }
                    if(data[j].name_product == 'Lump'){
                            // console.log("Lump")
                            tdLump = `<td>${(data[j].sum).toFixed(1)}</td>`

                    }
                    if(data[j].name_product == 'Special'){
                            // console.log("Special")
                            tdSpecial = `<td>${(data[j].sum).toFixed(1)}</td>`

                    }
                }
                
           }
    
            // console.log(th)
            // console.log(tdName)
            // console.log(tdJumbo)
            // console.log(tdLump)
            // console.log(tdSpecial)


        return `
            <tbody>
                <tr>
                    ${th}   
                    ${tdName}   
                    ${tdJumbo}   
                    ${tdLump}   
                    ${tdSpecial}   
                </tr>
            </tbody>
        `
    }
    