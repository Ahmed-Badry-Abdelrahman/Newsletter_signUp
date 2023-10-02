let input = document.querySelector('#inp-1');
let btn = document.querySelector('#btn-1');
let section = document.querySelector('#sec');
let pError = document.querySelector('#p-1');
let section2 = document.querySelector('.success-message-container');
let span = document.querySelector('#p-email');

document.getElementById('form').onsubmit = function () {
    let inputValue = input.value;
    let valuedInputRegex = /\w+@\w+.\w+/;
    let validationResult = valuedInputRegex.test(inputValue);

    if (validationResult === false) {
        input.classList.add('error')
        input.style.cssText = `
            border: 1px solid  hsl(4, 100%, 67%);
            background:  #ffe8e8;
        `;
        pError.classList.add('error');
        return false
    } else {
        section.remove();
        section2.classList.add('display')
        span.append(document.createTextNode(inputValue))
        return true
    }
}