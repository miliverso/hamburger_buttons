export default function displayMenu(menuButton, hamburgerIcon) {
    const d = document;

    d.querySelectorAll(menuButton).forEach(el => {
        el.addEventListener("click", e => {
            if(e.target.matches(menuButton) || e.target.matches(`${menuButton} *`)) {
                el.querySelector(hamburgerIcon).classList.toggle("is-active");
            }
        })
    })
}