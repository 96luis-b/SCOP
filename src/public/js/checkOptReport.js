$(document).ready(function(){
    
    let check_box = (ev) => {
        let check = ev.target.checked;
        let parent = document.getElementById(ev.target.id).parentElement 
        if(parent.id == 'report'){
            let nextNode = parent.nextElementSibling
            nextNode.classList.remove('focusElement')
            parent.classList.add('focusElement')
        }else{
            let previousNode = parent.previousElementSibling 
            previousNode.classList.remove('focusElement')
            parent.classList.add('focusElement')
        }

        if(check==false){
            document.getElementById(ev.target.id).checked = false;
        }else{
            document.getElementById(ev.target.id).checked = true;
        }
    }

    $("#checkReport").click(check_box);
    $("#checkGraphics").click(check_box);   

})

