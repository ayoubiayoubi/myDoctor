
// //Check if all form fields are filled in
export function checkAllInputsFilled(formId) {
    const form = document.querySelector(`.${formId}`);
    if (!form) {
        console.error("النموذج غير موجود!");
        return false;
    }
    const inputs = form.querySelectorAll("input");
    for (let input of inputs) {
        if (input.type !== "submit" && input.value.trim() === "") {
            input.setAttribute("placeholder", `plase enter your ${input.getAttribute("id")}`);
            var style = document.createElement("style");
            style.innerHTML = `#${input.getAttribute("id")}::placeholder{color:red !important}`;
            document.head.appendChild(style);
            return false;
        }
    }
    return true;
}
// Define the steps within the multistage model
export const formSteps = document.querySelectorAll(".form-step");
export function updateFormSteps(currentStep) {
    formSteps.forEach((step, index) => {
        step.classList.toggle("active", index === currentStep);
    });
}
// A variable to track the number of steps moved
var countAnime = 1;
var animation = document.querySelector(".animation");
var animationSpan = document.querySelectorAll(".animation span");
// Set animation on progress
export function nextAnimation(currentStep) {
    animation.style.setProperty(`--animation`, `green_line_Next_${countAnime} 0.5s linear 0s 1 normal forwards`);
    countAnime = countAnime + 1;
    animationSpan[currentStep].style.setProperty('animation', 'backgroundSpan 0s linear 0.5s 1 normal forwards')
}
// Set the animation on return
export function backAnimation(currentStep) {
    animationSpan[currentStep + 1].style.setProperty('animation', 'none')
    countAnime = countAnime - 1;
    animation.style.setProperty(`--animation`, `green_line_Back_${countAnime} 0.5s linear 0s 1 normal forwards`);
}
// A variable to track colored text within the animation
export var animationD = document.querySelectorAll(".animation div");

var countWorld = 1;
// Add a distinctive color to the text after a time delay
export function addColorTitle() {
    setTimeout(function () {
        animationD[countWorld].classList.add("activeColor");
        countWorld = countWorld + 1
    }, 0.5 * 1000)
}
// Remove the highlighted color of the text on return
export function removeColorTitle() {
    countWorld = countWorld - 1;
    animationD[countWorld].classList.remove(`activeColor`)
}
// Define input elements to reset
var multiStepForm = document.querySelector(".form-step");
export function resetInput() {
    const inputs = multiStepForm.querySelectorAll("input");
    inputs.forEach((input) => {
        if (!(input.value == "Reset") && !(input.value == "Next")) {
            input.value = "";
        }
    })
}
// An object to store patient medical data
export const medicalData = {}
export function add_information_to_data() {
    // Store symptom data and medical reports
    const symptoms = document.getElementById('symptoms').value;
    const medicalReports = document.getElementById('medical-reports').files[0];
    const insuranceInfo = document.getElementById('insurance-info').value;
    medicalData.medicalIformation = {};
    medicalData.medicalIformation.symptoms = symptoms;
    medicalData.medicalIformation.medicalReports = medicalReports ? medicalReports.name : null;
    medicalData.medicalIformation.insuranceInfo = insuranceInfo;
    // Store patient information
    const fullName = document.getElementById("fullName").value;
    const datBirth = document.getElementById("datBirth").value;
    const gender = document.querySelector("select").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    medicalData.patientinfo = {};
    medicalData.patientinfo.fullName = fullName;
    medicalData.patientinfo.datBirth = datBirth;
    medicalData.patientinfo.gender = gender;
    medicalData.patientinfo.phone = phone;
    medicalData.patientinfo.email = email;
    // Store appointment details
    const reason = document.getElementById("reason").value;
    const appointmentType = document.querySelector('input[name="appointment-type"]:checked') ? document.querySelector('input[name="appointment-type"]:checked').value : '';
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const sDoctor = document.getElementById("sDoctor").value;
    medicalData.appointmentDetails = {};
    medicalData.appointmentDetails.reason = reason;
    medicalData.appointmentDetails.appointmentType = appointmentType;
    medicalData.appointmentDetails.date = date;
    medicalData.appointmentDetails.time = time;
    medicalData.appointmentDetails.sDoctor = sDoctor;
}






