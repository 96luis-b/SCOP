/** JUMBO */ 
let card_count = (id, value)=>{
    return `
    <div id="${id}" class="col text-center mb-2" style="width:auto;">
        <div class="card font-weight-bold card-shadow">
            <div class="card-body">
                <p class="cad-title mb-3 txt-shadow-simple h1">${value}</p>
                <div class="row text-right display-4">
                    <div class="col-12 temp-count container-shadow"><p class="txt-black">0.0</p></div>
                    <div class="col-12 mt-1 pers-count container-shadow"><p class="txt-black">0.0</p></div>
                    <div class="col-12 mt-1 total-count container-shadow"><p class="txt-black">0.0</p></div>
                </div>
                <div class="container">
                    <div class="row text-center mt-3">
                        <div class="col-1">
                            <button class="btn btn-info btn-custon" name="less" onclick="scan_click_button(this)">-</button>
                        </div>
                        <div class="col-3"></div>
                        <div class="col-2">
                            <button class="btn btn-info btn-custon" name="halfless" onclick="scan_click_button(this)">-1/2</button>
                        </div>
                        <div class="col-2">
                            <button class="btn btn-info btn-custon" name="halfmore" onclick="scan_click_button(this)">+1/2</button>
                        </div>
                        <div class="col-3"></div>
                        <div class="col-1">
                            <button class="btn btn-info btn-custon" name="more" onclick="scan_click_button(this)">+</button>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    </div>
    `
}


