smartOutput();

function smartOutput() {
    const userInputs = document.querySelectorAll(".rps");
    
    userInputs.forEach(input => {
        input.addEventListener('click', () => {
            let value = input.getAttribute('data-value');
            let number = Math.floor(Math.random() * 3) + 1;
            if (value == 1 && number == 3 || value == 2 && number == 1 || value == 3 && number == 2) {
                console.log("User won");
            } else {
                console.log("User lost");
            }
        });
    });
}
