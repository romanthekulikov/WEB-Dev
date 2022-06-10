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

  let arr = formValidate(form);
  let error = arr[0];
  let email = arr[1];
  let nameD = arr[2];
  let profession = arr[3];
  let agree = arr[4];

  let formData = new FormData(form);

  if (error === 0) {
    doFetch(nameD, email, profession, agree);    
   } //else if(error === 1) {
  //   alert('Неправильно записан Email')
  // } else if(error === 2) {
  //   alert('Имя должно состоять только из букв')
  // } else {
  //   alert('Выберите деятельность')
  // }
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
      } else {
        var email = input.value;
      }
    } 

    if (input.classList.contains('_name')) {
      if (nameTest(input)) {
        formAddError(input);
        error = 2;
      } else {
        var nameD = input.value;
      }
    }

    if (input.classList.contains('_profession')) {
      if (input.value === '') {
        formAddError(input);
        error = 3;
      } else {
        var profession = input.value;
      }
    }

    if (input.classList.contains('_agree')) {
      var agree = input.checked ? "yes" : "no";
    }
  }  
  var arr = [error, email, nameD, profession, agree]
  return arr;
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
  //return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
  let a = input.value;
  let arr = a.split('');
  if (arr.includes('@') && arr.includes('.') && (arr[arr.length - 1] != '.') && (arr[0] != '@') && (arr.indexOf('@') < arr.indexOf('.')) && (arr[arr.indexOf('.') - 1] != '')) {
    return false;
  } else {
    return true;
  }
}

function nameTest(input) {
  let a = input.value;
  let arr = a.split('');
  if (arr.includes('0') || arr.includes('1') || arr.includes('2') || arr.includes('3') || arr.includes('4') || arr.includes('5') || arr.includes('6') || arr.includes('7') || arr.includes('8') || arr.includes('9')) {
    return true;
  } else {
    return false;
  }
  
}

async function doFetch(nameD, email, profession, agree) {
  let user = {
    userName: nameD,
    userEmail: email,
    userProfession: profession,
    isUserAgree: agree
  };

  var data = new FormData();
  data = ("json", JSON.stringify(user));
  console.log(JSON.stringify(user));

  const headH = {'Content-type': 'application/json'};

  let response = await fetch('http://localhost:4040/register.php', {
    method: 'POST',
    body: data,
    headers: headH
  });
  
  let result = await response.json();
  console.log(response.status);
  if (response.ok) {
    const closePP = document.getElementById('popup');
    closePP.classList.remove('open');
    form.reset();
    
    alert(result.message);
    
    console.log(response.status);
  } else if (response.status == 500) {
    const popupError = document.getElementById('popup-error');
    const closePopupIcon = document.getElementById('close-popup-icon');
    const popupContent = document.getElementById('popup-content');
    popupError.classList.remove('popup__block');
    popupError.classList.add('popup__error');
    closePopupIcon.classList.remove('popup__block');
    closePopupIcon.classList.add('close__error');
    popupContent.classList.add('popup__block');
    console.log(result.message);
  }
}


