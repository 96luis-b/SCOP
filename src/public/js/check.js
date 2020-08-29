$(document).ready(function(){
    let check_box = (ev)=>{
        let check = ev.target.checked;
        if(check==false){
            document.getElementById(ev.target.id).checked = false;
        }else{
            document.getElementById(ev.target.id).checked = true;
        }
    }
    $("#check1").click(check_box);
    $("#check2").click(check_box);
    $("#check3").click(check_box);
    $("#check4").click(check_box);
    $("#check5").click(check_box);
    $("#check6").click(check_box);
    $("#check7").click(check_box);
    $("#check8").click(check_box);
    $("#check9").click(check_box);
    $("#check10").click(check_box);
})