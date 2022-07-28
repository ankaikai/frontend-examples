const sushiMain = document.querySelector('.sushiMain');
const resultElement = document.querySelector("#resultList");
const checkButtons = document.querySelectorAll('[name="contact"]');
const countElements = document.querySelectorAll('[type="number"]');
const toPayElem = document.querySelector("#toPay");

sushiMain.addEventListener('change', function checking() { 
    let selectedElements = [];             
    for (const checkedButton of checkButtons){    
        if(checkedButton.checked){               
            selectedElements.push(checkedButton.value);
        }
    }
    if (selectedElements.length != 0) { 
        resultElement.textContent = selectedElements.join(", ");
    } else {
        resultElement.textContent = "";
    }
});

sushiMain.addEventListener('change', function totalSum() {
    let total = 0;
    for (let i = 0; i < checkButtons.length; i++) {
        if (checkButtons[i].checked) {
            total += countElements[i].value * countElements[i].dataset.price;
            toPayElem.textContent = total + "$";
        } 
    }
    for (let elem of checkButtons) {
        elem.addEventListener('click', function() {
            if (elem.checked) {
                elem.parentNode.lastElementChild.value = 1;
            } else { 
            elem.parentNode.lastElementChild.value = 0;
            }
        });
    }
});