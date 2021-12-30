import { printOutput, printResult } from './js/output';
import getDatesDiff from './js/getDatesDiff';
import { initField, start} from './js/timer';
import chooseFunc from './js/chooseModule';

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
