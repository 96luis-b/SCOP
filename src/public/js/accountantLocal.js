let saveCount = () => {
    console.log(loadCount())
    if(!loadCount()){
        localStorage.setItem('board', JSON.stringify({oper:[]}));
        console.log(loadCount())
        console.log("Se ha creado almacen local");
    }
}

var loadCount = () => {
   return JSON.parse(localStorage.getItem('board'));
}

var upgradeCount = (data, name_product, id_oper) => {
    let pack = startPackaging(data, name_product, id_oper);
   // console.log(pack)
    localStorage.setItem('board', JSON.stringify(pack));
}

let startPackaging = (data, name_product, id_oper) =>{ //
    let dashboard = loadCount();
    console.log(loadCount())
    console.log(loadCount().oper)
    console.log(dashboard.length)

    
    if(dashboard.oper.length > 0){
        for (let i = 0; i < dashboard.oper.length; i++) {
            if(dashboard.oper[i].id_oper == id_oper){
                if(dashboard.oper[i].count.length > 0){
                    for (let j = 0; j < dashboard.oper[i].count.length; j++) {
                        if(dashboard.oper[i].count[j].product.length > 0){
                            // let u = 0;
                            for (let x = 0; x < dashboard.oper[i].count[j].product.length; x++) {

                                if(dashboard.oper[i].count[j].product[x].name_product == name_product){
                                    dashboard.oper[i].count[j].product[x].timeCount = data.timeCount
                                    dashboard.oper[i].count[j].product[x].unitCount = data.unitCount
                                    dashboard.oper[i].count[j].product[x].partialTimeCounter = data.partialTimeCounter
                                    console.log("actualizacion de conteo")
                                    return dashboard
                                    
                                }else if(dashboard.oper[i].count[j].product.length == x+1){
                                    console.log("no se ha encontrado el producto")
                                    dashboard.oper[i].count[j].product.push({
                                        name_product: name_product,
                                        timeCount:data.timeCount,
                                        unitCount:data.unitCount,
                                        partialTimeCounter:data.partialTimeCounter
                                    })
                                    console.log("insertar nuevo conteo de producto **")
                                     return dashboard
                                }
                               

                            }
                        }else{
                            console
                             dashboard.oper[i].count[j].product.push({
                                name_product: name_product,
                                timeCount:data.timeCount,
                                unitCount:data.unitCount,
                                partialTimeCounter:data.partialTimeCounter
                            })
                            console.log("insertar nuevo conteo de producto +++")
                            return dashboard
                        }
                    }
                }else{
                     dashboard.oper[i].count.push({product:[{
                        name_product: name_product,
                        timeCount:data.timeCount,
                        unitCount:data.unitCount,
                        partialTimeCounter:data.partialTimeCounter
                    }]})
                    console.log("insertar nuevo conteo de producto ----")
                    return dashboard
                }
            }else{
                return dashboard.oper.push(fullPackage(data, name_product, id_oper))
            }
        }
    }else{
        console.log(dashboard)
        dashboard.oper.push(fullPackage(data, name_product, id_oper))
        console.log(dashboard)
        return dashboard
        
    }


}//

let productPackage = (data, name_product, productPack) => {
    for (let index = 0; index < productPack.length; index++) {
        if(productPack[index].name_product == name_product){

        }
    }
}

let loadCountDetail = (data) => {
    console.log(data)
    let dashboard = loadCount()
    console.log(dashboard)
    if(dashboard.oper.length > 0){
        for (let i = 0; i < dashboard.oper.length; i++) {

            if(dashboard.oper[i].id_oper == data.id_oper){
                if(dashboard.oper[i].count.length > 0){
                    for (let j = 0; j < dashboard.oper[i].count.length; j++) {
                        if(dashboard.oper[i].count[j].product.length > 0){
                            for (let x = 0; x < dashboard.oper[i].count[j].product.length; x++) {
                                if(dashboard.oper[i].count[j].product[x].name_product == data.name_product){
                                    // dashboard.oper[i].count[j].product[x].timeCount = data.timeCount
                                    // console.log("el nombre de estos productos son iguales")
                                   // console.log(data)
                                    // console.log(data.sum)
                                    if(!data.sum){
                                        return dashboard.oper[i].count[j].product[x]
                                    }else if(dashboard.oper[i].count[j].product[x].unitCount == (data.sum).toFixed(1)){
                                        // console.log(dashboard.oper[i].count[j].product[x].unitCount)
                                        // console.log((data.sum).toFixed(1))
                                        // console.log("los valores son iguales")
                                        return dashboard.oper[i].count[j].product[x]
                                    }else{
                                        // console.log("no son iguales")
                                    }
                                    // dashboard.oper[i].count[j].product[x].partialTimeCounter = data.partialTimeCounter
                                    return
                                }else{
                                    // console.log("el nombre de estos productos no son iguales")
                                }
                            }
                        }else{
                            // console.log("no hay unidades contadas")
                        }
                    }
                }else{
                    // console.log("no hay ninguna cuenta abierta")
                }
            }else{
                // console.log("el codigo de identificacion no se reconoce")
            }
        }
    }else{
        // console.log("tablero de conteo se encuentra vacio")
        return false
    }

} //

let fullPackage = (data, name_product, id_oper) => {
    return  {
                id_oper: id_oper,
                count:[
                    {
                        product:[
                            {
                                name_product: name_product,
                                timeCount:data.timeCount,
                                unitCount:data.unitCount,
                                partialTimeCounter:data.partialTimeCounter
                            }
                        ]
                    }
                ]
            }
 }

 window.onload = saveCount();
    