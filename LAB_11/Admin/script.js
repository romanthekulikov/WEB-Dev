const button = document.querySelector('.get-info-button');

button.addEventListener('click', function(e) {
  let content;

  getUserInfo(content);
  button.classList.add('block_button');
  this.disabled = true;
});

async function getUserInfo() {
  let response = await fetch('http://localhost:4040/users.php');
  let content = await response.json();

  let i;
  for (i in content) {
    createCard(content[i]);
  } 
}


function createCard(content) {
  var div_users__user = document.createElement('div');
  div_users__user.className = "users__user";
  
  var div_user__icon = document.createElement('img');
  div_user__icon.src = ('user-icon.svg');
  div_user__icon.className = 'user__icon';

  var div_user__info = document.createElement('div');
  div_user__info.className = 'user__info';

  var div_user__name = document.createElement('div');
  div_user__name.className = ('user__name');
  div_user__name.innerHTML = content['userName'];


  var div_user__email = document.createElement('div');
  div_user__email.className = ('user__email');
  div_user__email.innerHTML = content['userEmail'];

  var div_user__profession = document.createElement('div');
  div_user__profession.className = ('user__profession');
  div_user__profession.innerHTML = content['userProfession'];

  var div_user__agreement = document.createElement('div');
  div_user__agreement.className = ('user__agreement');
  div_user__agreement.innerHTML = content['isUserAgree'];

  document.querySelector('.users').appendChild(div_users__user).appendChild(div_user__info).prepend(div_user__icon, div_user__name, div_user__email, div_user__profession, div_user__agreement);
  
}


