let ids_card_count = [  "jumbo-count", 
                        "lump-count", 
                        "special-count", 
                        "rs-claw-count", 
                        "r-claw-count", 
                        "cocktail-count",
                        "rs-lump-count",
                        "s-lump-count",
                        "cesta-jumbo-count"];

let value_card_cout = [ "Jumbo",
                        "Lump",
                        "Special",
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
    let counter_container = document.getElementById("counter_container").children;
    counter_container[0].innerHTML = `${counter_container[0].innerHTML}${card_count(ids_card_count[value], value_card_cout[value])}`
}

let remove_count = (value)=>{
    let counter_container = document.getElementById("counter_container");
    let row = counter_container.firstElementChild;
    let child = document.getElementById(ids_card_count[value]);
    row.removeChild(child);
}
