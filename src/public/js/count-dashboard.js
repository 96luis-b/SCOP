    
var scan_click_button = (element)=>{
    console.log(element)
    console.log(element.parentElement)
    console.log(element.parentElement.parentElement)
    console.log(element.parentElement.parentElement.previousElementSibling)
    let padre = element.parentElement.parentElement.parentElement.previousElementSibling;
    let hijos = [];
    for (let index = 0; index < padre.children.length ; index++){
        hijos.push(padre.children[index]);
        console.log(hijos)
    }
    if(element.name == "more"){
        more(hijos);
    }else if(element.name == "less"){
        less(hijos);
    }else if(element.name == "halfless"){
        halfless(hijos);
    }else if(element.name == "halfmore"){
        halfmore(hijos);
    }
}

var less = (hijos)=>{
    if(hijos[1].firstChild.innerHTML<=0){
        alert("No es posible, su cuenta esta en 0");
        return;
    }
    hijos[0].firstChild.innerHTML = (parseFloat(hijos[0].firstChild.innerHTML) - 1).toFixed(1);
    hijos[1].firstChild.innerHTML = (parseFloat(hijos[1].firstChild.innerHTML) - 1).toFixed(1);
    hijos[2].firstChild.innerHTML = (parseFloat(hijos[2].firstChild.innerHTML) - 1).toFixed(1);
}

var more = (hijos)=>{
    hijos[0].firstChild.innerHTML = (parseFloat(hijos[0].firstChild.innerHTML) + 1).toFixed(1);
    hijos[1].firstChild.innerHTML = (parseFloat(hijos[1].firstChild.innerHTML) + 1).toFixed(1);
    hijos[2].firstChild.innerHTML = (parseFloat(hijos[2].firstChild.innerHTML) + 1).toFixed(1);
}

var halfless = (hijos)=>{
    if(hijos[1].firstChild.innerHTML<=0){
        alert("No es posible, su cuenta esta en 0");
        return;
    }
    hijos[0].firstChild.innerHTML = (parseFloat(hijos[0].firstChild.innerHTML) - 0.5).toFixed(1);
    hijos[1].firstChild.innerHTML = (parseFloat(hijos[1].firstChild.innerHTML) - 0.5).toFixed(1);
    hijos[2].firstChild.innerHTML = (parseFloat(hijos[2].firstChild.innerHTML) - 0.5).toFixed(1);
}
var halfmore = (hijos)=>{
    hijos[0].firstChild.innerHTML = (parseFloat(hijos[0].firstChild.innerHTML) + 0.5).toFixed(1);
    hijos[1].firstChild.innerHTML = (parseFloat(hijos[1].firstChild.innerHTML) + 0.5).toFixed(1);
    hijos[2].firstChild.innerHTML = (parseFloat(hijos[2].firstChild.innerHTML) + 0.5).toFixed(1);
}

