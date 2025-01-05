import * as formUtils from './formUtils.js';
var buttonSubmit = document.querySelector(".submit");
var validation = false;
buttonSubmit.addEventListener(`click`, (event) => {
    if (formUtils.checkAllInputsFilled("active")) {
        formUtils.add_information_to_data();

        fetch('http://localhost/index.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formUtils.medicalData)
        })
            .then(response => response.json())
            .then(data => {
                console.log("Response from PHP:", data);

            })
            .catch(error => {
                console.error("Error:", error);
            });
    }
    else {
        event.preventDefault()
        console.log(false)
    }
})
