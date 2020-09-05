window.onload = saveCount = () => {
    localStorage.setItem('board', JSON.stringify({oper:[]}));
    console.log("Se ha creado almacen local");
}

var loadCount = () => {
   return JSON.parse(localStorage.getItem('board'));
}

var upgradeCount = (data, name_product, id_oper) => {
    console.log(startPackaging(data, name_product, id_oper));
}

let startPackaging = (data, name_product, id_oper) =>{
    let dashboard = loadCount;
    if(dashboard.length > 0){
        for (let i = 0; i < dashboard.length; i++) {
            if(dashboard[i].id_oper == id_oper){
                if(dashboard[i].count.length > 0){
                    for (let j = 0; j < dashboard[i].count.length; j++) {
                        if(dashboard[i].count[j].product.length > 0){
                            for (let x = 0; x < dashboard[i].count[i].product.length; x++) {
                                if(dashboard[i].count[j].product[x].name_product == name_product){
                                    dashboard[i].count[j].product[x].timeCount = data.timeCount
                                    dashboard[i].count[j].product[x].unitCount = data.unitCount
                                    dashboard[i].count[j].product[x].partialTimeCounter = data.partialTimeCounter
                                    return dashboard
                                }else{
                                    return dashboard[i].count[j].product.push({
                                        name_product: name_product,
                                        timeCount:data.timeCount,
                                        unitCount:data.unitCount,
                                        partialTimeCounter:data.partialTimeCounter
                                    })
                                }
                            }
                        }else{
                            return dashboard[i].count[j].product.push({
                                name_product: name_product,
                                timeCount:data.timeCount,
                                unitCount:data.unitCount,
                                partialTimeCounter:data.partialTimeCounter
                            })
                        }
                    }
                }else{
                    return dashboard[i].count.push({product:[{
                        name_product: name_product,
                        timeCount:data.timeCount,
                        unitCount:data.unitCount,
                        partialTimeCounter:data.partialTimeCounter
                    }]})
                }
            }else{
                return fullPackage(data, name_product, id_oper)
            }
        }
    }else{
        return fullPackage(data, name_product, id_oper)
    }
}

let productPackage = (data, name_product, productPack) => {
    for (let index = 0; index < productPack.length; index++) {
        if(productPack[index].name_product == name_product){

        }
        
    }
}

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
    