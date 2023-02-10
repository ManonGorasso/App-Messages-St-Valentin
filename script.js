//Script for modal window

// Get the modals
const modalWindow1 = document.getElementById("modal-window-1");
const modalWindow2 = document.getElementById("modal-window-2");
const modalWindow3 = document.getElementById("modal-window-3");
const modalWindow4 = document.getElementById("modal-window-4");
const modalWindow5 = document.getElementById("modal-window-5");
const modalWindow6 = document.getElementById("modal-window-6");
const modalWindow7 = document.getElementById("modal-window-7");
const modalWindow8 = document.getElementById("modal-window-8");
const modalWindow9 = document.getElementById("modal-window-9");

// Get the buttons that opens the modal
const modalBtn1 = document.getElementById("modal-btn-1");
const modalBtn2 = document.getElementById("modal-btn-2");
const modalBtn3 = document.getElementById("modal-btn-3");
const modalBtn4 = document.getElementById("modal-btn-4");
const modalBtn5 = document.getElementById("modal-btn-5");
const modalBtn6 = document.getElementById("modal-btn-6");
const modalBtn7 = document.getElementById("modal-btn-7");
const modalBtn8 = document.getElementById("modal-btn-8");
const modalBtn9 = document.getElementById("modal-btn-9");

// Get the <span> element that closes the modal
const closeBtn1 = document.getElementsByClassName("close")[0];
const closeBtn2 = document.getElementsByClassName("close")[1];
const closeBtn3 = document.getElementsByClassName("close")[2];
const closeBtn4 = document.getElementsByClassName("close")[3];
const closeBtn5 = document.getElementsByClassName("close")[4];
const closeBtn6 = document.getElementsByClassName("close")[5];
const closeBtn7 = document.getElementsByClassName("close")[6];
const closeBtn8 = document.getElementsByClassName("close")[7];
const closeBtn9 = document.getElementsByClassName("close")[8];

// When the user clicks the button, open the modal 
modalBtn1.onclick = function() {
  modalWindow1.style.display = "flex";
}

modalBtn2.onclick = function() {
  modalWindow2.style.display = "flex";
}

modalBtn3.onclick = function() {
  modalWindow3.style.display = "flex";
}

modalBtn4.onclick = function() {
  modalWindow4.style.display = "flex";
}

modalBtn5.onclick = function() {
  modalWindow5.style.display = "flex";
}

modalBtn6.onclick = function() {
  modalWindow6.style.display = "flex";
}

modalBtn7.onclick = function() {
  modalWindow7.style.display = "flex";
}

modalBtn8.onclick = function() {
  modalWindow8.style.display = "flex";
}

modalBtn9.onclick = function() {
  modalWindow9.style.display = "flex";
}

// When the user clicks on <span> (x), close the modal
closeBtn1.onclick = function() {
  modalWindow1.style.display = "none";
}

closeBtn2.onclick = function() {
  modalWindow2.style.display = "none";
}

closeBtn3.onclick = function() {
  modalWindow3.style.display = "none";
}

closeBtn4.onclick = function() {
  modalWindow4.style.display = "none";
}

closeBtn5.onclick = function() {
  modalWindow5.style.display = "none";
}

closeBtn6.onclick = function() {
  modalWindow6.style.display = "none";
}

closeBtn7.onclick = function() {
  modalWindow7.style.display = "none";
}

closeBtn8.onclick = function() {
  modalWindow8.style.display = "none";
}

closeBtn9.onclick = function() {
  modalWindow9.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalWindow1) {
    modalWindow1.style.display = "none";
  }
  else if (event.target == modalWindow2) {
    modalWindow2.style.display = "none";
  }
  else if (event.target == modalWindow3) {
    modalWindow3.style.display = "none";
  }
  else if (event.target == modalWindow4) {
    modalWindow4.style.display = "none";
  }
  else if (event.target == modalWindow5) {
    modalWindow5.style.display = "none";
  }
  else if (event.target == modalWindow6) {
    modalWindow6.style.display = "none";
  }
  else if (event.target == modalWindow7) {
    modalWindow7.style.display = "none";
  }
  else if (event.target == modalWindow8) {
    modalWindow8.style.display = "none";
  }
  else if (event.target == modalWindow9) {
    modalWindow9.style.display = "none";
  }
}