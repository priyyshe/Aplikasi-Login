/** 
 * @module Login-Script
 */

/**
 * Form login pada halaman
 * @constant {HTMLElement}
 */
const loginFormElement = document.querySelector('#loginForm');

/**
 * Input email dari form login
 * @constant {HTMLElement}
 */
const inputEmailElement = document.querySelector('#inputEmail');

/**
 * Input password dari form login
 * @constant {HTMLElement}
 */
const inputPasswordElement = document.querySelector('#inputPassword');

/**
 * Email yang digunakan untuk validasi login
 * @constant {string}
 */
const expectedEmail = 'admin@dicoding.com';

/**
 * Password yang digunakan untuk validasi login
 * @constant {string}
 */
const expectedPassword = 'superpassword';


/**
 * Event submit pada form login
 */
loginFormElement.addEventListener('submit', function(event) {
  event.preventDefault();

  /**
   * Nilai email yang dimasukkan pengguna
   * @constant {string}
   */
  const email = inputEmailElement.value;

  /**
   * Nilai password yang dimasukkan pengguna
   * @constant {string}
   */
  const password = inputPasswordElement.value;

  if (email == expectedEmail && password == expectedPassword) {
    goToHome();
  } else {
    showPopUp();
  }
});
