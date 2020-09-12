let disab = () => {
    console.log("se oculto el tablero del operario")
    container_person.style.display = 'none'
    navbarDropdown.classList.add('diabled-elemt-a')
}

let enab = () => {
    console.log("mostart")
    container_person.style.display = 'block'
    navbarDropdown.classList.remove('diabled-elemt-a')
}

window.onload = disab;