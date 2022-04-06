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

function asdCaptcha () {
  document.addEventListener('keypress', (event) => {
    let keyName = event.key;
    let buttons = document.getElementsByClassName('captchaOption');
    let clickEvent = new Event('click');
    if(keyName == "a" || keyName == "A" || keyName == "ф" || keyName == "Ф"){
      buttons[0].dispatchEvent(clickEvent)
    }
    if(keyName == "s" || keyName == "S" || keyName == "ы" || keyName == "Ы"){
      buttons[1].dispatchEvent(clickEvent)
    }
    if(keyName == "d" || keyName == "D" || keyName == "в" || keyName == "В"){
      buttons[2].dispatchEvent(clickEvent)
    }
  })
}

asdCaptcha();
