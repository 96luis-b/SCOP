let ids_card_count = [  "jumbo-count", 
                        "lump-count", 
                        "special-count", 
                        "claw-count", 
                        "rs-claw-count", 
                        "r-claw-count", 
                        "cocktail-count",
                        "rs-lump-count",
                        "s-lump-count",
                        "cesta-jumbo-count"];



let value_card_cout = [ "Jumbo",
                        "Lump",
                        "Special",
                        "Claw",
                        "RS/Claw",
                        "R/Claw",
                        "Cocktail",
                        "RS/Lump",
                        "R/Lump",
                        "Cesta/Jumbo"];

let check = (ev)=>{
    if(ev.target.checked == true){
        display_count(ev.target.value);
    }else{
        remove_count(ev.target.value);
    }
}

let display_count = (value)=>{
    if(typeof(value) == 'object'){
        for (let index = 0; index < value_card_cout.length; index++) {
            for (let i = 0; i < value.length; i++) {
                if(value[i].name_product == value_card_cout[index]){
                    // console.log(index)
                    // console.log(document.querySelector("label.form-check-label[for='check10']"))
                    //document.querySelector(`input.form-check-input[value='${index}']`).checked = true

                    console.log(typeof(loadCountDetail(value[i])))
                    let counter_container = document.getElementById("counter_container").children;
                    counter_container[0].innerHTML = `${counter_container[0].innerHTML}${card_count(ids_card_count[index], value_card_cout[index], loadCountDetail(value[i]))}`
                    // evaluar el producto y activar o desactivar el checkbook
                    
                } 
            }
        }
    }else{
        let counter_container = document.getElementById("counter_container").children;
        counter_container[0].innerHTML = `${counter_container[0].innerHTML}${card_count(ids_card_count[value], value_card_cout[value])}`
    }
}

let remove_count = (value)=>{
    let counter_container = document.getElementById("counter_container");
    let row = counter_container.firstElementChild;
    let child = document.getElementById(ids_card_count[value]);
    row.removeChild(child);
}

let clean_count = ()=>{
    let counter_container = document.getElementById("counter_container");
    let row = counter_container.childNodes[1]
    let elements = counter_container.childNodes[1].children
    let i = elements.length
    if(i > 0){
        for (let index = 0; index < i; index++) {
            row.removeChild(elements[0]);
        }
    }
    
}