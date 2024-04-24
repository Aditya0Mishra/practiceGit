smartOutput();

function smartOutput() {
    const userInputs = document.querySelectorAll(".rps");
    const compOutput = document.querySelector(".compContainer");
    userInputs.forEach(input => {
        input.addEventListener('click', () => {
            let value = input.getAttribute('data-value');
            let number = Math.floor(Math.random() * 3) + 1;
            if(number == 1){
                compOutput.innerHTML = "👊";
            }else if(number == 2){
                compOutput.innerHTML = "🖐️";
            }else if(number == 3){
                compOutput.innerHTML = "✌️";
            }
            if (value == 1 && number == 3 || value == 2 && number == 1 || value == 3 && number == 2) {
                console.log("User won");
            }else if(value == number){
                console.log("Tie");
            }else {
                console.log("User lost");
            }
        });
    });
}
