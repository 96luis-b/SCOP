let con
var scan_click_button = (element, name_product)=>{
    let accountant
    // console.log(element)
    // console.log(element.parentElement)
    // console.log(element.parentElement.parentElement)
    // console.log(element.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement)
    // console.log(name_product)
    // console.log(element.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.id)
    // console.log(element.parentElement.parentElement.previousElementSibling)
    let padre = element.parentElement.parentElement.parentElement.previousElementSibling;
    let hijos = [];
    for (let index = 0; index < padre.children.length ; index++){
        hijos.push(padre.children[index]);
    }
    if(element.name == "more"){
        accountant = more(hijos);
    }else if(element.name == "less"){
        accountant = less(hijos);
    }else if(element.name == "halfless"){
       accountant = halfless(hijos);
    }else if(element.name == "halfmore"){
       accountant = halfmore(hijos);
    }

    // saveCounter(accountant, name_product)
    console.log(sendValue(accountant, name_product, id_oper.innerHTML))
}

var less = (hijos)=>{
    if(hijos[1].firstChild.innerHTML<=0){
        alert("No es posible, su cuenta esta en 0");
        return;
    }
    return {
        timeCount: hijos[0].firstChild.innerHTML = (parseFloat(hijos[0].firstChild.innerHTML) - 1).toFixed(1),
        unitCount: hijos[1].firstChild.innerHTML = (parseFloat(hijos[1].firstChild.innerHTML) - 1).toFixed(1),
        partialTimeCounter: hijos[2].firstChild.innerHTML = (parseFloat(hijos[2].firstChild.innerHTML) - 1).toFixed(1),
        upgrade: -1
    }
}

var more = (hijos)=>{
    return {
        timeCount: hijos[0].firstChild.innerHTML = (parseFloat(hijos[0].firstChild.innerHTML) + 1).toFixed(1),
        unitCount: hijos[1].firstChild.innerHTML = (parseFloat(hijos[1].firstChild.innerHTML) + 1).toFixed(1),
        partialTimeCounter: hijos[2].firstChild.innerHTML = (parseFloat(hijos[2].firstChild.innerHTML) + 1).toFixed(1),
        upgrade: 1
    }
}

var halfless = (hijos)=>{
    if(hijos[1].firstChild.innerHTML<=0){
        alert("No es posible, su cuenta esta en 0");
        return;
    }
    return {
        timeCount: hijos[0].firstChild.innerHTML = (parseFloat(hijos[0].firstChild.innerHTML) - 0.5).toFixed(1),
        unitCount: hijos[1].firstChild.innerHTML = (parseFloat(hijos[1].firstChild.innerHTML) - 0.5).toFixed(1),
        partialTimeCounter: hijos[2].firstChild.innerHTML = (parseFloat(hijos[2].firstChild.innerHTML) - 0.5).toFixed(1),
        upgrade: -0.5
    }
}

var halfmore = (hijos)=>{
    return {
        timeCount: hijos[0].firstChild.innerHTML = (parseFloat(hijos[0].firstChild.innerHTML) + 0.5).toFixed(1),
        unitCount: hijos[1].firstChild.innerHTML = (parseFloat(hijos[1].firstChild.innerHTML) + 0.5).toFixed(1),
        partialTimeCounter: hijos[2].firstChild.innerHTML = (parseFloat(hijos[2].firstChild.innerHTML) + 0.5).toFixed(1),
        upgrade: 0.5
    }
}

let saveCounter = (data, name_product) => {
    console.log(data.upgrade)
    console.log(name_product)
    console.log(id_oper.innerHTML)
    sendValue(data, name_product, id_oper.innerHTML)
    // if(sendValue(data.upgrade, name_product, id_oper.innerHTML) == 200){    
    //     upgradeCount(data, name_product, id_oper)
    // }
    
}