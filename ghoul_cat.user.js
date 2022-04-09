// ==UserScript==
// @name         Ghoul Cat
// @version      0.3
// @description  Replaces the cat in Pixel Battle with its ghoul version
// @downloadUrl  https://raw.githubusercontent.com/LegoChelik/Ghoul-cat/main/ghoul_cat.user.js
// @updateUrl    https://raw.githubusercontent.com/LegoChelik/Ghoul-cat/main/ghoul_cat.user.js
// @author       vk.com/legoklyachik
// @match        https://mmosg.ru/game.php?*
// @icon         https://mmosg.ru/assets/hd_icon_world.png
// ==/UserScript==

function changeCat () {
  let el = document.getElementsByClassName('captchaWaitingContainer')[0];
  if (el) {
    document.getElementsByClassName('captchaWaitingContainer')[0].lastElementChild.style["background-image"] = 'url("https://media4.giphy.com/media/ie5CsRS33bDyz62bCL/giphy.gif?cid=790b761190d49ed00e7c90f827514a3073f49f78a34a4474&rid=giphy.gif&ct=g")'
  } else {
    setTimeout(changeCat, 500);
  }
}

function zxcCaptcha () {
  document.addEventListener('keypress', (event) => {
    let keyName = event.key;
    let buttons = document.getElementsByClassName('captchaOption');
    let clickEvent = new Event('click');
    if(keyName.match(/(Z|Я|1|A|Ф)/i)){
      buttons[0].dispatchEvent(clickEvent)
    }
    if(keyName.match(/(X|Ч|2|S|Ы)/i)){
      buttons[1].dispatchEvent(clickEvent)
    }
    if(keyName.match(/(C|С|3|D|В)/i)){
      buttons[2].dispatchEvent(clickEvent)
    }
  })
}

changeCat();
zxcCaptcha();
