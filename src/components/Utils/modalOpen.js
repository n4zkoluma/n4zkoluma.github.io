const modalOpen = () => {
    window.onload = (event) => {
        const dialog = document.querySelector("dialog");
        const showButton = document.querySelector("#submit");
        event.preventDefault();

        showButton.addEventListener("click", () => {
                dialog.showModal();
            }
        );
    }
}

export default modalOpen;