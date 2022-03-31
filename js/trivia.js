const form = document.querySelector("form");

form.addEventListener('submit', function (e) {
    e.preventDefault();
    let amountCorrect = 0;

    // LOOP FOR GOING THROUGH ALL QUESTIONS
    for (let i = 1; i <= 10; i++) {
        let errorMessage = document.getElementById('result' + i);
        let radiosName = document.getElementsByName('answer' + i);
        console.log(radiosName);

        //LOOP FOR CHECKING ANSWERS INSIDE EACH RADIO
        for (let j = 0; j < radiosName.length; j++) {
            let radiosValue = radiosName[j];
            if (radiosValue.value == "correct" && radiosValue.checked) {
                errorMessage.style.visibility = 'hidden';
                amountCorrect++;
                break;
            } else {
                errorMessage.style.visibility = 'visible';
            }
        }
    }
    document.getElementById('results').innerHTML =
        "Correct Answers " + amountCorrect.toString() + " Out of 10";

})