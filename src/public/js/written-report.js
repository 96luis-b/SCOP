let selectedOpt
let type_report = (ev) => {

    selectedOpt = ev.selectedIndex
    // ev.options[ev.selectedIndex].text;
    if(ev.selectedIndex == 1){
        divCodeOper.style.display = 'none'
        selectArea.style.display = 'none'
    }
    if(ev.selectedIndex == 2){
        divCodeOper.style.display = 'block'
        selectArea.style.display = 'none'
    }
    if(ev.selectedIndex == 3){
        divCodeOper.style.display = 'none'
        selectArea.style.display = 'block'
    }
}