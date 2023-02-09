//Script for modal window

// Get the modal
const modalWindow = document.getElementById("modal-window");

// Get the button that opens the modal
const modalBtn = document.getElementById("modal-btn");

// Get the <span> element that closes the modal
const closeBtn = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
modalBtn.onclick = function() {
  modalWindow.style.display = "flex";
}

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function() {
  modalWindow.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalWindow) {
    modalWindow.style.display = "none";
  }
}