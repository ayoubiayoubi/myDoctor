

document.addEventListener("DOMContentLoaded", () => {
    const formSteps = document.querySelectorAll(".form-step");
    let currentStep = 0;

    function updateFormSteps() {
        formSteps.forEach((step, index) => {
            step.classList.toggle("active", index === currentStep);
        });
    }

    document.querySelectorAll("[id^='next']").forEach((button) => {
        button.addEventListener("click", () => {
            if (currentStep < formSteps.length - 1) {
                currentStep++;
                updateFormSteps();
            }
        });
    });

    document.querySelectorAll("[id^='prev']").forEach((button) => {
        button.addEventListener("click", () => {
            if (currentStep > 0) {
                currentStep--;
                updateFormSteps();
            }
        });
    });
});
