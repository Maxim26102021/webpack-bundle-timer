import { initField } from './timer.js';

export default function (chooseId, forms = '.module-form') {
  const chooseForm = initField(chooseId);

  chooseForm.addEventListener('click', (e) => {
    if (e.target.name !== 'change') return;

    showFunc(e.target.value);
  });

  function showFunc(class_name) {
    const allSelectForm = document.querySelectorAll(forms);

    allSelectForm.forEach((el) => {
      if (!el.classList.contains(class_name)) {
        el.classList.add('hide');
      } else {
        el.classList.remove('hide');
      }
    });
  }
}
