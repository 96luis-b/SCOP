/** JUMBO */ 
let card_count = (id, value, count)=>{
    let accountant = {partialTimeCounter: 0.0, timeCount: 0.0, unitCount: 0.0}
    console.log("codigo de identificacion de operario: " + id_oper.innerHTML)
    if(count != null){
        accountant.partialTimeCounter = count.partialTimeCounter
        accountant.timeCount = count.timeCount
        accountant.unitCount = count.unitCount
    }else if(id_oper.innerHTML){
        let localCount = loadCountDetail({id_oper: id_oper.innerHTML, name_product: value})
        // console.log(localCount)
        accountant.partialTimeCounter = localCount.partialTimeCounter
        accountant.timeCount = localCount.timeCount
        accountant.unitCount = localCount.unitCount
    }
    return `
    <div id="${id}" class="col text-center mb-2" style="width:auto;">
        <div class="card font-weight-bold card-shadow">
            <div class="card-body">
                <p class="cad-title mb-3 txt-shadow-simple h1">${value}</p>
                <div class="row text-right display-4">
                    <div class="col-12 temp-count container-shadow"><p class="txt-black">${accountant.partialTimeCounter}</p></div>
                    <div class="col-12 mt-1 pers-count container-shadow"><p class="txt-black">${accountant.timeCount}</p></div>
                    <div class="col-12 mt-1 total-count container-shadow"><p class="txt-black">${accountant.unitCount}</p></div>
                </div>
                <div class="container">
                    <div class="row text-center mt-3">
                        <div class="col-3">
                            <button class="btn btn-info btn-custon" name="less" onclick="scan_click_button(this, '${value}')">-</button>
                        </div>
                        <div class="col-6">
                            <button class="btn btn-info btn-custon mb-2" name="halfless" onclick="scan_click_button(this, '${value}')">-1/2</button>
                        
                            <button class="btn btn-info btn-custon" name="halfmore" onclick="scan_click_button(this, '${value}')">+1/2</button>
                        </div>
                        <div class="col-3">
                            <button class="btn btn-info btn-custon" name="more" onclick="scan_click_button(this, '${value}')">+</button>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    </div>
    `
}


