// функция, создающая форму
const createForm = (className) => {
  const form = document.createElement('form');
  form.classList.add(className);

  return form;
}

// функция, создающая инпут
const createInput = (commonClass, className, placeholder, type = 'text') => {
  const input = document.createElement('input');
  input.classList.add(commonClass, className);
  input.placeholder = placeholder;
  input.type = type;

  return input;
}

// функция, создающая заголовок
const createTitle = (level, className, text) => {
  const title = document.createElement(`h${level}`);
  title.classList.add(className);
  title.textContent = text;

  return title;
}

// функция, создающая лейбл
const createLabel = (className) => {
  const label = document.createElement('label');
  label.classList.add(className);

  return label;
}

// функция, создающая лейбл
const createSpan = (commonClass, className) => {
  const span = document.createElement('span');
  span.classList.add(commonClass, className);

  return span;
}

// функция, создающая кнопку
const createBtn = (className, text, type = 'button') => {
  const btn = document.createElement('button');
  btn.classList.add('btn-reset', className);
  btn.textContent = text;
  btn.type = type;

  return btn;
}

const users = JSON.parse(localStorage.getItem('users')) || []; // массив юзеров


const boxBtns = document.createElement('div'); // создать див под кнопки вызова модалок регистрации и авторизации
const registerBtn = createBtn('register-btn', 'Зарегистрироваться'); // создать кнопку вызова модалки регистрации
const logInBtn = createBtn('login-btn', 'Войти'); // создать кнопку вызова модалки авторизации

boxBtns.classList.add('btns-wrapper');

boxBtns.append(registerBtn, logInBtn);


const modal = document.createElement('div'); // создать див под модалку
const modalOverlay = document.createElement('div'); // создать оверлей модалки
const modalContent = document.createElement('div'); // создать контентный див в модалке

modal.classList.add('modal');
modalOverlay.classList.add('modal-overlay');
modalContent.classList.add('modal-content');

modalOverlay.append(modalContent);
modal.append(modalOverlay);
document.body.append(boxBtns, modal);

let currentUser = users.find(currentUser => currentUser.status.isAuthorised);
console.log(currentUser)

const UserInfo = document.createElement('p');
UserInfo.style.width = 'max-content';
UserInfo.style.margin = '0 auto';
UserInfo.style.textAlign = 'center';
document.body.append(UserInfo);
if (currentUser !== undefined) {
  UserInfo.innerHTML = `
  <strong>Последний активный юзер:</strong> <strong>${currentUser.surname.charAt(0).toUpperCase() + currentUser.surname.slice(1)} ${currentUser.name.charAt(0).toUpperCase() + currentUser.name.slice(1)}!</strong> <br>
  Никнейм: <strong>${currentUser.nickname.charAt(0).toUpperCase() + currentUser.nickname.slice(1)}</strong> <br>
  Почта: <strong>${currentUser.email}</strong> <br>
  
  Хорошего дня :)
  `;
} else {
  UserInfo.innerHTML = `
  <strong>Последний активный юзер:</strong> <strong>---</strong> <br>
  Никнейм: <strong>---</strong> <br>
  Почта: <strong>---</strong> <br>
  
  Хорошего дня :)
  `;
}


// функция, создающая форму регистрации
const createRegisterForm = () => {
  const registerForm = createForm('register-form');
  const registerFormTitle = createTitle(2, 'register-form__title', 'Регистрация');

  const registerLabelName = createLabel('register-form__label');
  const registerNameInp = createInput('register-form__input', 'register-form__name', 'Ivan');
  const registerSpanErrorName = createSpan('register-form__error', 'register-form__error-name');

  const registerLabelSurName = createLabel('register-form__label');
  const registerSurNameInp = createInput('register-form__input', 'register-form__surname', 'Ivanov');
  const registerSpanErrorSurName = createSpan('register-form__error', 'register-form__error-surname');

  const registerLabelNickName = createLabel('register-form__label');
  const registerNickNameInp = createInput('register-form__input', 'register-form__nickname', 'Nickname');
  const registerSpanErrorNickName = createSpan('register-form__error', 'register-form__error-nickname');

  const registerLabelEmail = createLabel('register-form__label');
  const registerEmailInp = createInput('register-form__input', 'register-form__email', 'ivanov@mail.com');
  const registerSpanErrorEmail = createSpan('register-form__error', 'register-form__error-email');

  const registerLabelPassword = createLabel('register-form__label');
  const registerPasswordInp = createInput('register-form__input', 'register-form__password', 'password', 'password');
  const registerSpanErrorPassword = createSpan('register-form__error', 'register-form__error-password');

  const registerFormBtn = createBtn('register-form__btn', 'Зарегистрироваться', 'submit');

  registerLabelName.append(registerNameInp, registerSpanErrorName);
  registerLabelSurName.append(registerSurNameInp, registerSpanErrorSurName);
  registerLabelNickName.append(registerNickNameInp, registerSpanErrorNickName);
  registerLabelEmail.append(registerEmailInp, registerSpanErrorEmail);
  registerLabelPassword.append(registerPasswordInp, registerSpanErrorPassword);
  registerForm.append(registerFormTitle, registerLabelName, registerLabelSurName, registerLabelNickName, registerLabelEmail, registerLabelPassword, registerFormBtn);

  return registerForm;
}

// функция, создающая форму авторизации
const createlogInForm = () => {
  const logInForm = createForm('login-form');
  const logInFormTitle = createTitle(2, 'login-form__title', 'Авторизация');

  const logInLabelLogin = createLabel('login-form__label');
  const logInLoginInp = createInput('login-form__input', 'login-form__login', 'login');
  const logInSpanErrorLogin = createSpan('login-form__error', 'login-form__error-login');

  const logInLabelPassword = createLabel('login-form__label');
  const logInPasswordInp = createInput('login-form__input', 'login-form__password', 'password', 'password');
  const logInSpanErrorPassword = createSpan('login-form__error', 'login-form__error-password');

  const logInFormBtn = createBtn('login-form__btn', 'Войти', 'submit');

  logInLabelLogin.append(logInLoginInp, logInSpanErrorLogin);
  logInLabelPassword.append(logInPasswordInp, logInSpanErrorPassword);
  logInForm.append(logInFormTitle, logInLabelLogin, logInLabelPassword, logInFormBtn);

  return logInForm;
}

// открыть модальное окно
const showModal = () => {
  modal.classList.add('active');
  modalOverlay.classList.add('active');
  modalContent.classList.add('active');
  isModalOpen = true;
}


// закрыть модальное окно
const hideModal = () => {
  modal.classList.remove('active');
  modalOverlay.classList.remove('active');
  modalContent.classList.remove('active');
  modalContent.innerHTML = '';
  isModalOpen = false;
}

let isModalOpen = false; // флаг открытия модалки


// функция, показывающая модалку регистрации
const showRegisterForm = () => {
  const registerForm = createRegisterForm()
  modalContent.append(registerForm);

  if (registerForm) {
    const registerFormBtn = document.querySelector('.register-form__btn');

    const registerNameInp = document.querySelector('.register-form__name');
    const registerSurNameInp = document.querySelector('.register-form__surname');
    const registerNickNameInp = document.querySelector('.register-form__nickname');
    const registerEmailInp = document.querySelector('.register-form__email');
    const registerPasswordInp = document.querySelector('.register-form__password');

    let registerSpanErrorName = document.querySelector('.register-form__error-name');
    let registerSpanErrorSurName = document.querySelector('.register-form__error-surname');
    let registerSpanErrorNickName = document.querySelector('.register-form__error-nickname');
    let registerSpanErrorEmail = document.querySelector('.register-form__error-email');
    let registerSpanErrorPassword = document.querySelector('.register-form__error-password');

    // флаги валидации инпутов
    let isValidName = false;
    let isValidSurName = false;
    let isValidNickName = false;
    let isValidEmail = false;
    let isValidPassword = false;


    registerFormBtn.disabled = true; // флаг доступности кнопки зарегистрироваться в модалке регистрации


    // Валидация инпута имени
    registerNameInp.oninput = () => {
      registerSpanErrorName.textContent = '';

      if (registerNameInp.value === '') {
        registerSpanErrorName.textContent = 'Поле не может быть пустым';
        registerNameInp.classList.remove('valid');
        registerNameInp.classList.add('error');
        isValidName = false;
      } else if (registerNameInp.value.length < 3) {
        registerSpanErrorName.textContent = 'Имя содержит минимум 3 символа';
        registerNameInp.classList.remove('valid');
        registerNameInp.classList.add('error');
        isValidName = false;
      } else if (!/^[a-zA-Zа-яА-Я]+$/.test(registerNameInp.value)) {
        registerSpanErrorName.textContent = 'Имя может содержать только буквы';
        registerNameInp.classList.remove('valid');
        registerNameInp.classList.add('error');
        isValidName = false;
      } else {
        registerSpanErrorName.textContent = '';
        registerNameInp.classList.add('valid');
        isValidName = true;
      }
      if (isValidName && isValidSurName && isValidNickName && isValidEmail && isValidPassword) {
        registerFormBtn.disabled = false;
      } else {
        registerFormBtn.disabled = true;
      }
    }

    // Валидация инпута фамилии
    registerSurNameInp.oninput = () => {
      registerSpanErrorSurName.textContent = '';

      if (registerSurNameInp.value === '') {
        registerSpanErrorSurName.textContent = 'Поле не может быть пустым';
        registerSurNameInp.classList.remove('valid');
        registerSurNameInp.classList.add('error');
        isValidSurName = false;
      } else if (registerSurNameInp.value.length < 2) {
        registerSpanErrorSurName.textContent = 'Фамилия содержит минимум 2 символа';
        registerSurNameInp.classList.remove('valid');
        registerSurNameInp.classList.add('error');
        isValidSurName = false;
      } else if (!/^[a-zA-Zа-яА-Я]+$/.test(registerSurNameInp.value)) {
        registerSpanErrorSurName.textContent = 'Фамилия может содержать только буквы';
        registerSurNameInp.classList.remove('valid');
        registerSurNameInp.classList.add('error');
        isValidSurName = false;
      } else {
        registerSpanErrorSurName.textContent = '';
        registerSurNameInp.classList.add('valid');
        isValidSurName = true;
      }
      if (isValidName && isValidSurName && isValidNickName && isValidEmail && isValidPassword) {
        registerFormBtn.disabled = false;
      } else {
        registerFormBtn.disabled = true;
      }

    }

    // Валидация инпута никнейма
    registerNickNameInp.oninput = () => {
      registerSpanErrorNickName.textContent = '';

      if (registerNickNameInp.value === '') {
        registerSpanErrorNickName.textContent = 'Поле не может быть пустым';
        registerNickNameInp.classList.remove('valid');
        registerNickNameInp.classList.add('error');
        isValidNickName = false;
      } else if (registerNickNameInp.value.length < 6) {
        registerSpanErrorNickName.textContent = 'Никнейм содержит минимум 6 символов';
        registerNickNameInp.classList.remove('valid');
        registerNickNameInp.classList.add('error');
        isValidNickName = false;
      } else if (!/^[a-zA-Z]+$/.test(registerNickNameInp.value)) {
        registerSpanErrorNickName.textContent = 'Никнейм может содержать только английские буквы';
        registerNickNameInp.classList.remove('valid');
        registerNickNameInp.classList.add('error');
        isValidNickName = false;
      } else {
        registerSpanErrorNickName.textContent = '';
        registerNickNameInp.classList.add('valid');
        isValidNickName = true;
      }
      if (isValidName && isValidSurName && isValidNickName && isValidEmail && isValidPassword) {
        registerFormBtn.disabled = false;
      } else {
        registerFormBtn.disabled = true;
      }

    }

    // Валидация инпута почты
    registerEmailInp.oninput = () => {
      registerSpanErrorEmail.textContent = '';

      if (registerEmailInp.value === '') {
        registerSpanErrorEmail.textContent = 'Поле не может быть пустым';
        registerEmailInp.classList.remove('valid');
        registerEmailInp.classList.add('error');
        isValidEmail = false;
      } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+$/.test(registerEmailInp.value)) {
        registerSpanErrorEmail.textContent = 'Введите корректную почту';
        registerEmailInp.classList.remove('valid');
        registerEmailInp.classList.add('error');
        isValidEmail = false;
      } else {
        registerSpanErrorEmail.textContent = '';
        registerEmailInp.classList.add('valid');
        isValidEmail = true;
      }
      if (isValidName && isValidSurName && isValidNickName && isValidEmail && isValidPassword) {
        registerFormBtn.disabled = false;
      } else {
        registerFormBtn.disabled = true;
      }

    }

    // Валидация инпута пароля
    registerPasswordInp.oninput = () => {
      registerSpanErrorPassword.textContent = '';

      if (registerPasswordInp.value === '') {
        registerSpanErrorPassword.textContent = 'Поле не может быть пустым';
        registerPasswordInp.classList.remove('valid');
        registerPasswordInp.classList.add('error');
        isValidPassword = false;
      } else if (registerPasswordInp.value.length < 8) {
        registerSpanErrorPassword.textContent = 'Пароль содержит минимум 8 символов';
        registerPasswordInp.classList.remove('valid');
        registerPasswordInp.classList.add('error');
        isValidPassword = false;
      } else {
        registerSpanErrorPassword.textContent = '';
        registerPasswordInp.classList.add('valid');
        isValidPassword = true;
      }
      if (isValidName && isValidSurName && isValidNickName && isValidEmail && isValidPassword) {
        registerFormBtn.disabled = false;
      } else {
        registerFormBtn.disabled = true;
      }

    }

    // обработать клик по кнопке регистрации юзера
    registerFormBtn.addEventListener('click', (e) => {
      e.preventDefault()
      let userNameValue = registerNameInp.value.toLowerCase(); // сохранить в нижнем регистре
      let userSurNameValue = registerSurNameInp.value.toLowerCase(); // сохранить в нижнем регистре
      let userNickNameValue = registerNickNameInp.value.toLowerCase(); // сохранить в нижнем регистре
      let userEmailValue = registerEmailInp.value.toLowerCase(); // сохранить в нижнем регистре
      let userPasswordValue = registerPasswordInp.value.toLowerCase().split(/\s+/).join(''); // убрать пробелы внутри строки сохранить в нижнем регистре

      const user = new User(userNameValue, userSurNameValue, userNickNameValue, userEmailValue, userPasswordValue);
      users.push(user);
      localStorage.setItem('users', JSON.stringify(users))

      registerNameInp.value = '';
      registerSurNameInp.value = '';
      registerNickNameInp.value = '';
      registerEmailInp.value = '';
      registerPasswordInp.value = '';

      hideModal();
    })
  }
}
console.log(users);
function User(name, surname, nickname, email, password) {
  this.name = name,
    this.surname = surname,
    this.nickname = nickname,
    this.email = email,
    this.password = password,
    this.status = {
      isRegister: true,
      isAuthorised: false,
      isAbonement: false
    }
}

// функция, показывающая модалку авторизации
const showLogInForm = () => {
  const logInForm = createlogInForm()
  modalContent.append(logInForm);

  if (logInForm) {
    const logInFormBtn = document.querySelector('.login-form__btn');

    const logInLoginInp = document.querySelector('.login-form__login');
    const logInPasswordInp = document.querySelector('.login-form__password');

    let logInSpanErrorLogin = document.querySelector('.login-form__error-login');
    let logInSpanErrorPassword = document.querySelector('.login-form__error-password');

    // флаги валидации инпутов
    let isValidLogin = false;
    let isValidPassword = false;

    logInFormBtn.disabled = true; // флаг доступности кнопки войти в модалке авторизации

    // Валидация инпута логина
    logInLoginInp.oninput = () => {
      logInSpanErrorLogin.textContent = '';
      if (logInLoginInp.value === '') {
        logInSpanErrorLogin.textContent = 'Поле не может быть пустым';
        logInLoginInp.classList.remove('valid');
        logInLoginInp.classList.add('error');
        isValidLogin = false;
      } else if (logInLoginInp.value.length >= 1) {
        logInSpanErrorLogin.textContent = '';
        logInLoginInp.classList.add('valid');
        logInLoginInp.classList.remove('error');
        isValidLogin = true;
      }

      if (isValidLogin && isValidPassword) {
        logInFormBtn.disabled = false;
      } else {
        logInFormBtn.disabled = true;
      }
    }

    // Валидация инпута пароля
    logInPasswordInp.oninput = () => {

      logInSpanErrorPassword.textContent = '';
      if (logInPasswordInp.value === '') {
        logInSpanErrorPassword.textContent = 'Поле не может быть пустым';
        logInPasswordInp.classList.remove('valid');
        logInPasswordInp.classList.add('error');
        isValidPassword = false;
      } else if (logInPasswordInp.value.length >= 1) {
        logInSpanErrorPassword.textContent = '';
        logInPasswordInp.classList.add('valid');
        logInPasswordInp.classList.remove('error');
        isValidPassword = true;
      }

      if (isValidLogin && isValidPassword) {
        logInFormBtn.disabled = false;
      } else {
        logInFormBtn.disabled = true;
      }
    }

        // обработать клик по кнопке аторизации юзера
    logInFormBtn.addEventListener('click', (e) => {
      e.preventDefault()
      const user = users.find(user => user.nickname === logInLoginInp.value)
      if (user === undefined) {
        logInSpanErrorLogin.textContent = 'Пользователь не найден';
        logInLoginInp.classList.remove('valid');
        logInLoginInp.classList.add('error');
        return
      } else if (logInPasswordInp.value !== user.password) {
        logInSpanErrorPassword.textContent = 'Неправильный пароль';
        logInPasswordInp.classList.remove('valid');
        logInPasswordInp.classList.add('error');
      } else if (logInPasswordInp.value === user.password) {

        logInSpanErrorPassword.textContent = '';
        logInPasswordInp.classList.add('valid');
        logInPasswordInp.classList.remove('error');
        user.status.isAuthorised = true;
        localStorage.setItem('users', JSON.stringify(users))
        logInLoginInp.value = '';
        logInPasswordInp.value = '';

        for (let i = 0; i < users.length; i++) {
          if (users[i] !== user) {
            users[i].status.isAuthorised = false;
            localStorage.setItem('users', JSON.stringify(users));
          }
        }
        UserInfo.innerHTML = `
        Привет, <strong>${user.surname.charAt(0).toUpperCase() + user.surname.slice(1)} ${user.name.charAt(0).toUpperCase() + user.name.slice(1)}!</strong> <br>
        Твой ник: <strong>${user.nickname.charAt(0).toUpperCase() + user.nickname.slice(1)}</strong> <br>
        Твоя почта: <strong>${user.email}</strong> <br>

        Хорошего дня :)
        `;
        hideModal()
      }
    })
  }
}

// обработка клика на кнопку регистрации
registerBtn.addEventListener('click', () => {
  showModal();
  showRegisterForm();
})


// обработка клика на кнопку авторизации
logInBtn.addEventListener('click', () => {
  showModal();
  showLogInForm();
})


// закрывает открытую модалку по клику вне области модалки
document.addEventListener('click', (e) => {
  if (isModalOpen && e.target.closest('.modal-overlay') && !e.target.closest('.modal-content')) {
    hideModal();
  };
});