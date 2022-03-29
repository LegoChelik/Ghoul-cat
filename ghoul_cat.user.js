// ==UserScript==
// @name         Ghoul Cat
// @version      0.2
// @description  Replaces the cat in Pixel Battle with its ghoul version
// @downloadUrl  https://raw.githubusercontent.com/LegoChelik/Ghoul-cat/main/ghoul_cat.js
// @updateUrl    https://raw.githubusercontent.com/LegoChelik/Ghoul-cat/main/ghoul_cat.js
// @author       vk.com/legoklyachik
// @match        https://mmosg.ru/game.php?*
// @icon         https://mmosg.ru/assets/hd_icon_world.png
// ==/UserScript==

function changeCat () {
  let el = document.getElementsByClassName('captchaWaitingContainer')[0];
  if (el) {
    document.getElementsByClassName('captchaWaitingContainer')[0].lastElementChild.style['backgroundImage'] = 'url("https://media4.giphy.com/media/ie5CsRS33bDyz62bCL/giphy.gif?cid=790b761190d49ed00e7c90f827514a3073f49f78a34a4474&rid=giphy.gif&ct=g")'
  } else {
    setTimeout(changeCat, 500);
  }
}

function zxcCaptcha () {
  document.addEventListener('keypress', (event) => {
    let keyName = event.key;
    let buttons = document.getElementByClassName('optionCaptcha');
    if(keyName == "z" || keyName == "" || keyName == "я" || keyName == "Я"){
      buttons[0].click()
    }
    if(keyName == "x" || keyName == "X" || keyName == "ч" || keyName == "Ч"){
      buttons[1].click()
    }
    if(keyName == "c" || keyName == "C" || keyName == "с" || keyName == "С"){
      buttons[2].click()
    }
  })
}

changeCat();
zxcCaptcha();
