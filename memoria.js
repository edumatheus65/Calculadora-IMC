const firstDiv = document.querySelector('first-step')
const secondDiv = document.querySelector('second-step')
const finalDiv = document.querySelector('final-step')

function go(currentStep, nextStep) {
    let dNone, dBlock
    if(currentStep == 1) {
        dNone = firstDiv
    }
    else if(currentStep == 2) {
        dNone = secondDiv
    }
    else {
        dNone = finalDiv
    }
    dNone.style.display = 'none';
}



