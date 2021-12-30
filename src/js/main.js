import {printOutput} from "./output.js";
import getDatesDiff from "./getDatesDiff.js";
import {printResult} from "./output.js";
import {initField, start, stop} from "./timer.js";
import chooseFunc from "./chooseModule.js";



const form  = document.getElementById("datecalc");

form.onsubmit = (event) => {
    event.preventDefault();

    const {firstDate, secondDate} = form.elements;

    if(!firstDate.value || !secondDate.value) {
        printOutput('ошибка');

        return;
    }

    const dateDiff = getDatesDiff({from: firstDate.value, to: secondDate.value})

    printResult(dateDiff);

}

const formTimer = initField('timer');

formTimer.onsubmit = (e) => {
    e.preventDefault();
}

formTimer.addEventListener('click', (e) => {
    if(e.target.className !== 'start') return;
    start(formTimer.timer)

})

chooseFunc('chooseForm');