// программа для мобильного меню. открытие и сворачивание
var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

// программа для модального окна в шапке страницы - серая кнопка - заказ звонка
var btnCallback = document.querySelector(".request-a-callback");
var modCallback = document.querySelector(".callback__modal");
var btmClose1 = document.querySelector(".btn-closed--1");

btnCallback.addEventListener("click", function (evt) {
  evt.preventDefault();
  modCallback.classList.add("modal-show");
});
btmClose1.addEventListener("click", function (evt) {
  evt.preventDefault();
  modCallback.classList.remove("modal-show");
});

// программа для модального окна заказ диагностики
var btnDiagnostics = document.querySelector(".diagnostics-from-the-site");
var modDiagnostics = document.querySelector(".diagnostics__modal");
var btmClose2 = document.querySelector(".btn-closed--2");

btnDiagnostics.addEventListener("click", function (evt) {
  evt.preventDefault();
  modDiagnostics.classList.add("modal-show");
});

btmClose2.addEventListener("click", function (evt) {
  evt.preventDefault();
  modDiagnostics.classList.remove("modal-show");
});

// программа для модального окна заказ диагностики-2
var btnDiagnostics2 = document.querySelector(".diagnostics-from-the-site-2");
var modDiagnostics2 = document.querySelector(".diagnostics__modal-2");
var btmClose22 = document.querySelector(".btn-closed--2-2");

btnDiagnostics2.addEventListener("click", function (evt) {
  evt.preventDefault();
  modDiagnostics2.classList.add("modal-show");
});

btmClose22.addEventListener("click", function (evt) {
  evt.preventDefault();
  modDiagnostics2.classList.remove("modal-show");
});


// программа для "Нужен ремонт телефона"
var btnPhoneRepair = document.querySelector(".need-phone-repair");
var modPhoneRepair = document.querySelector(".phonerepair__modal");
var btmClose3 = document.querySelector(".btn-closed--3");

btnPhoneRepair.addEventListener("click", function (evt) {
  evt.preventDefault();
  modPhoneRepair.classList.add("modal-show");
});

btmClose3.addEventListener("click", function (evt) {
  evt.preventDefault();
  modPhoneRepair.classList.remove("modal-show");
});
