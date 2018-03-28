'use strict';

(function () {

  // Mobile menu

  var nav = document.querySelector('.header__wrapper');
  var burger = nav.querySelector('.header__burger');
  var docWidth = document.body.clientWidth;
  var tabletWidth = 768;


  nav.classList.remove('header__wrapper--nojs');

  function burgerClickHandler() {
    nav.classList.toggle('header__wrapper--show');
    // burger.classList.toggle('header__burger--open');
  }

  burger.addEventListener('click', burgerClickHandler);

  // Progress block

  var progress = document.querySelector('.demo__progress');

  if (progress) {
    var btnBefore = progress.querySelector('.demo__progress-button--before');
    var btnAfter = progress.querySelector('.demo__progress-button--after');

    btnBefore.addEventListener('click', function () {
      if (progress.classList.contains('demo__progress--after')) {
        progress.classList.remove('demo__progress--after');
      }
    })

    btnAfter.addEventListener('click', function () {
      if (!progress.classList.contains('demo__progress--after')) {
        progress.classList.add('demo__progress--after');
      }
    })

    if (docWidth >= tabletWidth) {
      var imgBefore = progress.querySelector('.demo__illustration--before');
      var imgAfter = progress.querySelector('.demo__illustration--after');
      var scale = progress.querySelector('.demo__progress-bar');
      var range = scale.querySelector('.demo__range');

      range.addEventListener('input', function() {
        imgBefore.style.width = (100 - range.value) + '%';
        imgAfter.style.width = range.value + '%';
      })

      btnBefore.addEventListener('click', function () {
        imgBefore.style.width = '100%';
        imgAfter.style.width = '0%';
        range.value = 0;
      })

      btnAfter.addEventListener('click', function () {
        imgBefore.style.width = '0%';
        imgAfter.style.width = '100%';
        range.value = 100;
      })
    }
  }

})();
