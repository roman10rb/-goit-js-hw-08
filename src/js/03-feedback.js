import trottle from 'lodash.throttle';

const STORRAGE_KEY = 'feedback-form-state';

const refs = {
    form: document.querySelector('form'),
    input: document.querySelector('input'),
    textarea: document.querySelector('textarea'),
};
refs.form.addEventListener('submit', onFormSubmit );
refs.form.addEventListener('input', trottle(onInputMessage, 500) );

populateTextarea();

function onFormSubmit(event){
    event.preventDefault();
    console.log('Отправляем форму');
    const formElementEmail = event.currentTarget.elements.email;
    const formElementMessage = event.currentTarget.elements.message;
    if (formElementEmail.value === '' || formElementMessage.value === '') {
        alert('Всі поля повинні бути заповнені !!!');
    } else {
    event.target.reset();
    localStorage.removeItem(STORRAGE_KEY);
    }

    
};

const formData = {};

function onInputMessage(event) {

    formData[event.target.name] = event.target.value;

    localStorage.setItem(STORRAGE_KEY, JSON.stringify(formData));
};

function populateTextarea() {
    const savedMessage = localStorage.getItem(STORRAGE_KEY);
    if (savedMessage) {
        const localtorrageMessage = localStorage.getItem(STORRAGE_KEY);
        const objMessage = JSON.parse(localtorrageMessage);
        console.log(objMessage);
        refs.textarea.value = objMessage.message;
        refs.input.value = objMessage.email;
    };
    
};


