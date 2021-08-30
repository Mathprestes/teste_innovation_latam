var counterVal = 0;

function incrementClick() {
  if (counterVal == 0) {
    updateDisplay(++counterVal);
  }
  else {
    updateDisplay(--counterVal);
  }
}

function updateDisplay(val) {
    document.getElementById("counter-label").innerHTML = val;
}

function resetCounter() {
    counterVal = 0;
    updateDisplay(counterVal);
}

function mostrar(e) {
  if (e.classList.contains("fa-check")) { //se tem +
    e.classList.remove("fa-check"); //remove classe +
    e.classList.add("fa-times"); //coloca classe -
    e.innerText = " Saved"
  } 
  else { 
    e.classList.remove("fa-times"); //remove classe olho -
    e.classList.add("fa-check"); //coloca classe +
    e.innerText = " Save"
  }
}