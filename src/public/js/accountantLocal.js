let saveCount = () => {
    //console.log(loadCount())
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
    console.log(pack)
    localStorage.setItem('board', JSON.stringify(pack));
}

let startPackaging = (data, name_product, id_oper) =>{ //
    let dashboard = loadCount();
    let pack = false;
    let operarios = dashboard.oper
    let productos
    console.log(dashboard)
    console.log(operarios)
    console.log(operarios.length > 0)
    if(operarios.length > 0){
        for (let i = 0; i < operarios.length; i++) {
            if(operarios[i].id_oper == id_oper){
                productos = operarios[i].products
                for (let j = 0; j < productos.length; j++) {
                    if(productos[j].name_product == name_product){
                        dashboard.oper[i].products[j].partialTimeCounter  = data.partialTimeCounter
                        dashboard.oper[i].products[j].unitCount = data.unitCount
                        dashboard.oper[i].products[j].timeCount = data.timeCount
                        return dashboard
                    }
                }
                console.log("no se encuentra dicho producto")
                console.log(dashboard.oper[i])
                dashboard.oper[i].products.push(
                    {
                        name_product: name_product,
                        timeCount:data.timeCount,
                        unitCount:data.unitCount,
                        partialTimeCounter:data.partialTimeCounter
                    }
                )
                return dashboard
            }
            console.log("no se encuentra dicho operario")
        }
        console.log("no hay mas operarios")
        let pack = fullPackage(data, name_product, id_oper)
        dashboard.oper.push(pack)
        return dashboard

    }else{
        console.log("se a creado un nuevo operario")
        let pack = fullPackage(data, name_product, id_oper)
        dashboard.oper.push(pack)
        return dashboard

    }


}//

let productPackage = (data, name_product, productPack) => {
    for (let index = 0; index < productPack.length; index++) {
        if(productPack[index].name_product == name_product){

        }
    }
}

// let loadCountDetail = (data) => {
//     // console.log(data)
//     let dashboard = loadCount()
//     // console.log(dashboard)
//     if(dashboard.oper.length > 0){
//         for (let i = 0; i < dashboard.oper.length; i++) {

//             if(dashboard.oper[i].id_oper == data.id_oper){
//                 if(dashboard.oper[i].count.length > 0){
//                     for (let j = 0; j < dashboard.oper[i].count.length; j++) {
//                         if(dashboard.oper[i].count[j].product.length > 0){
//                             for (let x = 0; x < dashboard.oper[i].count[j].product.length; x++) {
//                                 if(dashboard.oper[i].count[j].product[x].name_product == data.name_product){
//                                     // dashboard.oper[i].count[j].product[x].timeCount = data.timeCount
//                                     // console.log("el nombre de estos productos son iguales")
//                                    // console.log(data)
//                                     // console.log(data.sum)
//                                     if(!data.sum){
//                                         return dashboard.oper[i].count[j].product[x]
//                                     }else if(dashboard.oper[i].count[j].product[x].unitCount == (data.sum).toFixed(1)){
//                                         // console.log(dashboard.oper[i].count[j].product[x].unitCount)
//                                         // console.log((data.sum).toFixed(1))
//                                         // console.log("los valores son iguales")
//                                         return dashboard.oper[i].count[j].product[x]
//                                     }else{
//                                         // console.log("no son iguales")
//                                     }
//                                     // dashboard.oper[i].count[j].product[x].partialTimeCounter = data.partialTimeCounter
//                                     return
//                                 }else{
//                                     // console.log("el nombre de estos productos no son iguales")
//                                 }
//                             }
//                         }else{
//                             // console.log("no hay unidades contadas")
//                         }
//                     }
//                 }else{
//                     // console.log("no hay ninguna cuenta abierta")
//                 }
//             }else{
//                 // console.log("el codigo de identificacion no se reconoce")
//             }
//         }
//     }else{
//         // console.log("tablero de conteo se encuentra vacio")
//         return false
//     }

// } //

let loadCountDetail = (data) => {
    let dashboard = loadCount();
    let operarios = dashboard.oper
    let productos
    console.log(dashboard)
    if(operarios.length > 0){
        for (let i = 0; i < operarios.length; i++) {
            console.log("hay registros en almacen local")
            if(operarios[i].id_oper == data.id_oper){
                console.log("se encontro el operario indicado")
                productos = operarios[i].products
                for (let j = 0; j < productos.length; j++) {
                    if(productos[j].name_product == data.name_product){
                        console.log("se encontro el producto indicado")
                        console.log(data)
                        console.log(productos[j])
                        if(!data.sum){
                            console.log("no hay registro acumulado")
                            return dashboard.oper[i].product[j]
                        }else if(productos[j].unitCount == (data.sum).toFixed(1)){
                            console.log("hay registro acumulado")
                            // console.log(dashboard.oper[i].count[j].product[x].unitCount)
                            // console.log((data.sum).toFixed(1))
                            // console.log("los valores son iguales")
                            console.log(dashboard.oper[i].products[j])
                            return dashboard.oper[i].products[j]
                        }else{
                            console.log("no son iguales")
                        }
                        // dashboard.oper[i].count[j].product[x].partialTimeCounter = data.partialTimeCounter
                        return false
                    }
                    
                }
            }
        }
    }else{
        return false
    }

}

let fullPackage = (data, name_product, id_oper) => {
    return  {
                id_oper: id_oper,
                products:[
                    {
                        // product:[
                        //     {
                                name_product: name_product,
                                timeCount:data.timeCount,
                                unitCount:data.unitCount,
                                partialTimeCounter:data.partialTimeCounter
                        //     }
                        // ]
                    }
                ]
            }
 }

window.onload = saveCount();
// saveCount();
    