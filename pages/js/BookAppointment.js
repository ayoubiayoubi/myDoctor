// Import all functions from formUtils.js file
import * as formUtils from './formUtils.js';
//Button to book a new appointment
var BookAnother = document.querySelector(".BookAnother");
//Button to clear fields
var clearButton = document.getElementById("reset");
// When the page is fully loaded, the following functions are executed
document.addEventListener("DOMContentLoaded", () => {
    // The starting step in the multi-step model
    let currentStep = 0;
    //To move the model forward
    document.querySelectorAll("[id^='next']").forEach((button) => {
        button.addEventListener("click", () => {
            //Check if all fields in the current step are filled
            if (formUtils.checkAllInputsFilled("active") == true && currentStep < formUtils.formSteps.length - 1) {
                currentStep++;
                formUtils.updateFormSteps(currentStep);
                formUtils.nextAnimation(currentStep);
                formUtils.addColorTitle()
            }
        });
    });
    //To move the model back
    document.querySelectorAll("[id^='prev']").forEach((button) => {
        button.addEventListener("click", () => {
            if (currentStep > 0) {
                currentStep--;
                formUtils.updateFormSteps(currentStep);
                formUtils.backAnimation(currentStep);
                formUtils.removeColorTitle()

            }
        });
    });
    BookAnother.addEventListener("click", function () {
        location.reload();
    });
    // When you click the "reset" button, the contents of the fields are cleared
    clearButton.addEventListener("click", () => {
        formUtils.resetInput()
    })

});

