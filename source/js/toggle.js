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
      var scale = progress.querySelector('.demo__progress-bar');
      var toggle = scale.querySelector('.demo__progress-toggle');

      var scaleWidth = 427;
      var percentScale = 4.27;
      var minScaleValue = 0;
      var maxScaleValue = 100;

      toggle.addEventListener('mousedown', function (evt) {
        evt.preventDefault();

        var startCoords = {
          x: evt.clientX
        }

        var pinMouseMoveHandler = function (moveEvt) {
          moveEvt.preventDefault();

          var shift = {
            x: startCoords.x - moveEvt.clientX
          };

          startCoords = {
            x: moveEvt.clientX
          };

          toggle.style.left = ((toggle.offsetLeft - shift.x) / percentScale) + '%';
          imgBefore.style.width = (100 - Math.floor((toggle.offsetLeft - shift.x) / percentScale)) + '%';

          var toggleOffsetPercent = parseInt(toggle.style.left, 10);

          if (toggleOffsetPercent <= minScaleValue) {
            toggle.style.left = minScaleValue + '%';
          } else if (toggleOffsetPercent >= maxScaleValue) {
            toggle.style.left = maxScaleValue + '%';
          }
        }

        var pinMouseUpHandler = function () {
          document.removeEventListener('mousemove', pinMouseMoveHandler);
          document.removeEventListener('mouseup', pinMouseUpHandler);
        }

        document.addEventListener('mousemove', pinMouseMoveHandler);
        document.addEventListener('mouseup', pinMouseUpHandler);
      })
    }
  }



})();
