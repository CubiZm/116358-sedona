  window.onload = function() {
      var elements = document.querySelectorAll('.main-menu__list > .main-menu__item:not(:last-child)');
      var burger = document.getElementById('burger');
      burger.onclick = function() {
          burger.classList.toggle('main-menu__toggle--open');
          burger.classList.toggle('main-menu__toggle--close');
          for (var i = 0; i < elements.length; i++) {
              elements[i].style.display = (elements[i].style.display == 'none') ? '' : 'none';
          }
      };
  };
