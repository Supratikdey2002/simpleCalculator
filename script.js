let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            try {
                string = eval(string);
                if (isNaN(string) || !isFinite(string)) {
                    throw new Error('Invalid evaluation');
                }
                document.querySelector('input').value = string;
            } catch (error) {
                document.querySelector('input').value = 'Error';
                console.error(error);
            }
        }
        else if (e.target.innerHTML == 'C') {
            string = "";
            document.querySelector('input').value = string;
        }
        else {
            console.log(e.target);
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})
