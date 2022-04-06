// ==UserScript==
// @name         asd Bombs
// @version      0.1
// @description  Allows to collect bombs with asd
// @downloadUrl  https://raw.githubusercontent.com/LegoChelik/Ghoul-cat/main/asdBombs.user.js
// @updateUrl    https://raw.githubusercontent.com/LegoChelik/Ghoul-cat/main/asdBombs.user.js
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
