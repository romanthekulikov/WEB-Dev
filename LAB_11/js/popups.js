const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const popup = document.querySelector('.popup');

if (popupLinks.length > 0) {
  for (let index = 0; index < popupLinks.length; index++) {
    const popupLink = popupLinks[index];
    popupLink.addEventListener('click', function(e) {
      const popupName = popupLink.getAttribute('href').replace('#', '');
      const curentPopup = document.getElementById(popupName);
      popupOpen(curentPopup);
      e.preventDefault(); 
    });
  } 
}

const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
  for (let index = 0; index < popupCloseIcon.length; index++) {
    const el = popupCloseIcon[index];
    el.addEventListener('click', function(e) {
      popupClose(el.closest('.popup'));
      e.preventDefault();
    });
  }
}

function popupOpen(curentPopup) {
  if (!curentPopup) {
    return
  }
  const popupActive = document.querySelector('.popup.open');
  if (popupActive) {
    popupClose(popupActive);
  }
  curentPopup.classList.add('open');
  curentPopup.addEventListener("click", function(e) {
    if (!e.target.closest('.popup__content')) {
      popupClose(e.target.closest('.popup'));
    }
  });
}


function popupClose(popupActive) {
  popupActive.classList.remove('open');
}

document.addEventListener('keydown', function(e) {
  if (e.which === 27) {
    const popupActive = document.querySelector('.popup.open');
    popupClose(popupActive);
  }
});

const form = document.getElementById('form');
form.addEventListener('submit', formSend);

async function formSend(e) {
  e.preventDefault();

  let error = formValidate(form);

  let formData = new FormData(form);

  if (error === 0) {
    let responce = await fetch('register.php', {
      method: 'POST',
      body: formData 
    });
  } else if(error === 1) {
    alert('Неправильно записан Email')
  } else if(error === 2) {
    alert('Имя должно состоять только из букв')
  } else {
    alert('Не все поля заполнены')
  }
}

function formValidate(form) {
  let error = 0;
  let formReq = document.querySelectorAll('._req');

  for (let index = 0; index < formReq.length; index++) {
    const input = formReq[index];
    formRemoveError(input);

    if (input.classList.contains('_email')) {
      if (emailTest(input)) {
        formAddError(input);
        error = 1;
      } else if (input.classList.contains('_name')) {
        if (nameTest(input)) {
          formAddError(input);
          error = 2;
        }
      } else {
        if (input.value === '') {
          formAddError(input);
          error = 3;
        }
      }
    }
  }
  return error;
}

function formAddError(input) {
  input.parentElement.classList.add('_error');
  input.classList.add('_error')
}

function formRemoveError(input) {
  input.parentElement.classList.remove('_error');
  input.classList.remove('_error')
}

function emailTest(input) {
  return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}

function nameTest(input) {
  return !/^[0-9]*$/.test(input.value);
}


