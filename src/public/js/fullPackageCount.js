let fullPackCount = (count, workstation) => {
    let packCang = JSON.stringify(packCangrejo)
    packCang = JSON.parse(packCang)
    if(workstation == 'Cangrejero'){
        for (let i = 0; i< packCang.length; i++) {
            for (let j = 0; j < count.length; j++) {
                // console.log(packCang[i].name_product == count[j].name_product)
                packCang[i].id_oper = count[j].id_oper
                if(packCang[i].name_product == count[j].name_product){
                    // console.log(packCang[i].name_product == count[j].name_product)
                    packCang[i].sum = count[j].sum
                } 
                // console.log('validadion de Jumbo' + count[j].name_product != 'Jumbo')
                // console.log('validadion de Lump' + count[j].name_product != 'Lump')
                // console.log('validadion de Special' + count[j].name_product != 'Special')
                //console.log(count[j].name_product != 'Jumbo' || count[j].name_product != 'Lump' || count[j].name_product != 'Special')
                // if(count[j].name_product != 'Jumbo' || count[j].name_product != 'Lump' || count[j].name_product != 'Special'){
                //     packCang.push(count)
                // } 
            }
        }
       // console.log(packCang)
        return packCang
    }

    // if(workstation == 'Colmillero'){
    //     for (let i = 0; i< packColm.length; i++) {
    //         for (let j = 0; j < count.length; j++) {
    //             if(packColm[i].name_product == count[j].name_product){
    //                 packColm[i].id_oper = count.id_oper
    //                 packColm[i].id_product = count.id_product
    //                 packColm[i].sum = count.sum
    //             }else if(count[j].name_product != 'Claw' || count.name_product != 'Cocktail'){
    //                 packColm.push(count)
    //             }                 
    //         }
    //     }
    // }
    // if(workstation == 'Revisador de carne negra'){
    //     for (let i = 0; i< packCN.length; i++) {
    //         for (let j = 0; j < count.length; j++) {
    //             if(packCN[i].name_product == count[j].name_product){
    //                 packCN[i].id_oper = count.id_oper
    //                 packCN[i].id_product = count.id_product
    //                 packCN[i].sum = count.sum
    //             }else if(count[j].name_product != 'RS/Claw' || count.name_product != 'R/Claw'){
    //                 packCN.push(count)
    //             }                 
    //         }
    //     }
    //     return packCN
    // }
    // if(workstation == 'Revisador de carne blanca'){
    //     for (let i = 0; i< packCB.length; i++) {
    //         for (let j = 0; j < count.length; j++) {
    //             if(packCB[i].name_product == count[j].name_product){
    //                 packCB[i].id_oper = count.id_oper
    //                 packCB[i].id_product = count.id_product
    //                 packCB[i].sum = count.sum
    //             }else if(count[j].name_product != 'SR/Lump' || count.name_product != 'R/Lump'){
    //                 packCB.push(count)
    //             }                 
    //         }
    //     }
    //     return packCB
    // }
    return null
}

let packCangrejo = [
    {id_oper:null, id_product:1, name_product:'Jumbo', sum:0},
    {id_oper:null, id_product:2, name_product:'Lump', sum:0},
    {id_oper:null, id_product:3, name_product:'Special', sum:0}
]
let packColmillo = [
    {id_oper:null, id_product:null, name_product:'Claw', sum:0},
    {id_oper:null, id_product:null, name_product:'Cocktail', sum:0}
]
let packCarneNegra = [
    {id_oper:null, id_product:null, name_product:'RS/Claw', sum:0},
    {id_oper:null, id_product:null, name_product:'R/Claw', sum:0}
    // {id_oper:null, id_product:null, name_product:'R/Cocktail', sum:(0).toFixed(1)}
]
let packCarneBlanca = [
    {id_oper:null, id_product:null, name_product:'RS/Lump', sum:0},
    {id_oper:null, id_product:null, name_product:'R/Lump', sum:0}
]
// resGetOper.rows.push({
//     id_oper: 9,
//     id_product: 1,
//     name_product: ,
//     sum: 3
// })


// if(resGetOper.rows[i].name_product != 'Jumbo' || resGetOper.rows[i].name_product != 'Lump' || resGetOper.rows[i].name_product != 'Special'){
             
// } 