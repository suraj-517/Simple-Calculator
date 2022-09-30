let string = "";
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((buttonVal) => {
    buttonVal.addEventListener('click', (e) => {
        console.log(e.target);

        if (e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == 'C') {
            string = "";
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == 'X') {
            let n = string.length;

            string = string.slice(0, n - 1);
            document.querySelector('input').value = string;
        }
        else {
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})