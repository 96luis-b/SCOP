window.onload = disab = () => {
    container_person.display = 'none'
    navbarDropdown.classList.add('diabled-elemt-a')
}

let enab = () => {
    console.log("mostart")
    container_person.style.display = 'block'
    navbarDropdown.classList.remove('diabled-elemt-a')
}