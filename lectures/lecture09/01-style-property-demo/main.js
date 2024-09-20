
const changebg = (sel, color) => {
    document.querySelector(sel).style.backgroundColor = color;
};

const clearbg = () => {
    const divs = document.querySelectorAll('.my-section');
    console.log(divs);
    for (const div of divs) {
        div.style.backgroundColor = "transparent";
    }
}
