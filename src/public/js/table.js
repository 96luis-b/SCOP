let insert = () => {
    // console.log(selectExtractArea)
    // console.log(selectExtractArea.selectedIndex)
    // console.log(selectExtractArea.options[selectExtractArea.selectedIndex].text)
    // //combo.options[combo.selectedIndex].text;
    // console.log(selectProductType)
    // console.log(inputNumber)
    let col = document.querySelector("tbody").children
    let extractArea = selectExtractArea.options[selectExtractArea.selectedIndex].text
    let productType = selectProductType.options[selectProductType.selectedIndex].text
    let element = document.querySelector("tbody")
    element.innerHTML = element.innerHTML + `
    <tr>
        <th scope="row">${(col.length) + 1}</th>
        <td>${extractArea}</td>
        <td>${productType}</td>
        <td>${inputNumber.value}</td>
    </tr>`
    
}


/* <tr>
<th scope="row">1</th>
<td></td>
<td></td>
<td></td>
</tr> */