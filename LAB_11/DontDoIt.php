<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Don't do it</title>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&family=Roboto+Condensed&display=swap" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">
    <link href="css/media.css" rel="stylesheet">
  </head>
  <body class="sheets">
    <div class="wrapper">  
    <header class="sheets__head">
      <img class="logo" src="img/logo.svg" />
          
      <div class="navigation">
        <p class="navigation__text">Что будет на курсе?</p>
        <p class="navigation__text">Вопросы</p>
        <p class="navigation__text">Автор</p>
      </div>
      <a href="#popup" class="button-popup popup-link"><button class="sheets__navigation-button">Записаться на курс</button></a> 
    </header>
    <button class="button-img" tabindex="1"><img src="img/navigation.svg" class="sheets__hidding-button" /></button>
    <div class="navigation-field">
      <p class="navigation-field__text">Что будет на курсе?</p>
      <p class="navigation-field__text">Вопросы</p>
      <p class="navigation-field__text">Автор</p>
    </div>

    <main class="sheets__main">
      <div id="" class="hidden-fix"></div>
      <div class="main__inviting">
        <div class="inviting__text-block">
          <p class="inviting__text-block_alocate">Не <span class="highlite">делай</span> это</p>
          <p class="inviting__text-block_information">
            Онлайн-курс для творческих людей, 
            о том, как управлять своим временем 
          </p>
          <a href="#popup" class="button-popup popup-link"><button class="inviting__button"><span class="inviting__button__text">Записаться на курс</span></button></a>
        </div> 
        <img class="inviting__done-image" src="img/done.svg" alt="Спокойствие" />    
      </div>
      <div class="main__ad-information">
        <div class="ad-information__info">
          <div class="ad-information__info_for-whom">
            <img class="ad__img_clock" src="img/clock.svg" alt="Часы" />
            <p class="info__for-whom_text">Для тех, у кого слишком много идей и слишком мало времени</p>
          </div>
          <div class="ad-information__info_method">
            <img class="ad__img_notebook" src="img/notebook.svg" alt="Тетрадь" />
            <p class="info__method_text">Метод «списка не дел», который позволит успевать и реализовывать</p>
          </div>
          <div class="ad-information__info_cours">
            <img class="ad__img_target" src="img/target.svg" alt="Мишень" />
            <p class="info__cours_text">Курс научит творческих людей сосредоточиваться</p>
          </div>
        </div>
      </div>
      <div class="main__creative">
        <div class="creative__text">
          <p class="text__alocate-creative">Ты не успеешь</p>
          <p class="text__main-text-creative">
            Всех творческих людей объединяет одна проблема - 
            отсутствие времени на реализацию идей. Как прибавить 
            суткам часы, рассмотрим в нашем курсе.
          </p>
        </div>
        <img class="creative__finances" src="img/finances.svg" alt="Рабочий стол" />
        
      </div>
      <div class="main__when">       
        <div class="when__text">
          <p class="text__alocate-when">Опять дедлайн</p>
          <p class="text__main-text-when">В мире, где столько всего интересного, когда же успевать жить?</p>
        </div> 
        <img class="when__omg" src="img/mind_blowing.svg" alt="О, мой бог" /> 
      </div>
      <div class="main__adventage">
        <p class="adventage__text">На курсе ты <span class="highlite">сможешь</span></p>
        <div class="levels">
          
          <div class="levels__first">

            <div class="first__one element">
              <img class="one__img" src="img/one.svg" alt="Один" />
              <p class="one__text text">Понять, что нужно делать, а что делать не стоит.</p>
            </div>

            <div class="first__two element">
              <img class="two__img" src="img/two.svg" alt="Два" />
              <p class="two__text text">Перестать себя искусственно ограничивать.</p>
            </div>

            <div class="first__three element">
              <img class="three__img" src="img/three.svg" alt="Три" />
              <p class="three__text text">Определить сильные стороны и начать использовать слабые.</p>
            </div>    

          </div>

          <div class="levels__second">

            <div class="second__four element">
              <img class="four__img" src="img/four.svg" alt="Четыре" />
              <p class="four__text text">Научиться достигать любой цели в 3 понятных шага.</p>
            </div>

            <div class="second__five element">
              <img class="five__img" src="img/five.svg" alt="Пять" />
              <p class="five__text text">Сотрудничать эффективно и с правильными людьми.</p>
            </div>

            <div class="second__six element">
              <img class="six__img" src="img/six.svg" alt="Шесть" />
              <p class="six__text text">Оптимизировать общение с клиентами и проведение совещаний.</p>
            </div>

          </div>
        </div>
      </div>
    </main> 
    <footer class="sheets__footer">
      <div class="footer__finish">
        <p class="finish__text">Don`t <span class="highlite">do</span> it</p>
      </div>
    </footer>
    <div id="popup" class="popup">
      <div class="popup__body">
        <div id="popup-error" class="popup__block">Упс.. Произошла ошибка!</div>
        <a id="close-popup-icon" href="" class="popup__block close-popup"><img class="popup__esc" src="img/esc.svg" /></a>
        <div id="popup-content" class="popup__content">
        <a href="" class="popup__close close-popup"><img class="popup__esc" src="img/esc.svg" /></a>
          <?php
            include('php/form.php');
          ?>
        </div>
      </div>
    </div>
    </div>
    <script src="js/popups.js"></script>
  </body>
</html>

<!-- Удалить opopup__blck из a popup-error вставит popup__block в popup__content и close__error в a -->