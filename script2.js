//Script for modal windows simplified

// Get the modals
const modalWindows = document.querySelectorAll(".modal");

// Get the buttons that opens the modal
const modalBtns = document.querySelectorAll(".btn");

// Get the <span> element that closes the modal
const closeBtns = document.querySelectorAll(".close");

// When the user clicks the button, open the modal 
modalBtns.forEach((modalBtn, index) => {
    modalBtn.addEventListener("click", () => {
        modalWindows[index].style.display = "flex";
    });
});

// When the user clicks on <span> (x), close the modal
closeBtns.forEach((closeBtn, index) => {
    closeBtn.addEventListener("click", () => {
        modalWindows[index].style.display = "none";
    });
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    modalWindows.forEach((modalWindow) => {
        if(event.target == modalWindow) {
            modalWindow.style.display = "none";
        };
    });
};