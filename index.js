import "./src/css/style.css";
import { printOutput, printResult } from './src/js/output';
import getDatesDiff from './src/js/getDatesDiff';
import { initField, start} from './src/js/timer';
import chooseFunc from './src/js/chooseModule';


  const form = document.getElementById('datecalc');

  form.onsubmit = (event) => {
    event.preventDefault();

    const { firstDate, secondDate } = form.elements;

    if (!firstDate.value || !secondDate.value) {
      printOutput('ошибка');

      return;
    }

    const dateDiff = getDatesDiff({ from: firstDate.value, to: secondDate.value });

    printResult(dateDiff);
  };

  const formTimer = initField('timer');

  formTimer.onsubmit = (e) => {
    e.preventDefault();
  };

  formTimer.addEventListener('click', (e) => {
    if (e.target.className !== 'start') return;
    start(formTimer.timer);
  });

  chooseFunc('chooseForm');



