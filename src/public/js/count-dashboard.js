    
var scan_click_button = (element)=>{
    let padre = element.parentElement.parentElement.previousElementSibling;
    let hijos = [];
    for (let index = 0; index < padre.children.length ; index++){
        hijos.push(padre.children[index]);
    }
    if(element.name == "add"){
        add(hijos);
    }else if(element.name == "remove"){
        remove(hijos);
    }
}

var remove = (hijos)=>{
    if(hijos[1].firstChild.innerHTML<=0){
        alert("No es posible, su cuenta esta en 0");
        return;
    }
    hijos[0].firstChild.innerHTML --;
    hijos[1].firstChild.innerHTML --;
    hijos[2].firstChild.innerHTML --;
}

var add = (hijos)=>{
    hijos[0].firstChild.innerHTML ++;
    hijos[1].firstChild.innerHTML ++;
    hijos[2].firstChild.innerHTML ++;
}
