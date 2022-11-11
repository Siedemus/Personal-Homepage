{
    const welcome = () => {
        console.log("Hello there");
    };

    const body = document.querySelector(".js-body");

    const changeButtonText = () => {
        const button_text = document.querySelector(".js-button__text");

        if (body.classList.contains("darkMode")) {
            button_text.innerText = "Włącz"
        } else {
            button_text.innerText = "Wyłącz"
        };
    }

    const toggleBackground = () => {
        body.classList.toggle("darkMode");
        changeButtonText();
    };

    const init = () => {
        const changeBackgroundButton = document.querySelector(".js-button");
        changeBackgroundButton.addEventListener("click", toggleBackground)
        welcome();
    };

    init();
};