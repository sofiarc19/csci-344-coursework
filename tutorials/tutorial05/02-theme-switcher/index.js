const defaultTheme = ev => {
        document.querySelector("#default").onclick = () => {
            document.querySelector("body").classList.toggle('default')
        }
};


const oceanTheme = ev => {
    document.querySelector("#ocean").onclick = () => {
        document.querySelector("body").classList.toggle("ocean")
    }
};


const desertTheme = ev => {
    document.querySelector("#desert").onclick = () => {
        document.querySelector("body").classList.toggle("desert")
    }
};

const highContrastTheme = ev => {
    document.querySelector("#high-contrast").onclick = () => {
        document.querySelector("body").classList.toggle("high-contrast")
    }
};


/*
    Hints: 
    1. Attach the event handlers (functions) above to the click event
       of each of the four buttons (#default, #ocean, #desert, 
        and #high-contrast) in index.html.
    2. Then, modify the  body of each function so that it
       sets the className property of the body tag based on 
       the button that was clicked.
*/