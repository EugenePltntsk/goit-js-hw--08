import throttle from 'lodash.throttle';

const key = 'feedback-form-state';
const inputEl = document.querySelector('.feedback-form input');
// console.log(inputEl);

const textAreaEl = document.querySelector('.feedback-form textarea');
// console.log(textAreaEl);

const formEl = document.querySelector('.feedback-form');
// console.log(formEl);



const onChange = event => {
  const email = event.currentTarget.elements.email.value;
  const message = event.currentTarget.elements.message.value;

  const infoObj = {
    email,
    message,
  };
  console.log(infoObj);

  localStorage.setItem(key, JSON.stringify(infoObj));
};

formEl.addEventListener('input', throttle(onChange, 500));




const checkFoo = () => {
  const saveData = localStorage.getItem(key);

  const parsedData = JSON.parse(saveData);
  if (parsedData) {
    inputEl.value = parsedData.email;
    textAreaEl.value = parsedData.message;
  }
};

checkFoo();


formEl.addEventListener('submit', onSubmit);

function onSubmit(event)  {
  event.preventDefault();
  event.target.reset();
  localStorage.removeItem(key);
};



