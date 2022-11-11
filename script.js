{
    const welcome = () => {
        console.log("Hello there");
    };

    const oneChangeBackgroundClick = () => {
        const body = document.querySelector(".js-body");
        const button_text = document.querySelector(".js-button__text");

        body.classList.toggle("darkMode");

        if (body.classList.contains("darkMode")) {
            button_text.innerText = "Włącz"
        } else {
            button_text.innerText = "Wyłącz"
        };
    };

    const init = () => {
        const changeBackgroundButton = document.querySelector(".js-button");
        changeBackgroundButton.addEventListener("click", oneChangeBackgroundClick);
        welcome();
    };

    init();
};