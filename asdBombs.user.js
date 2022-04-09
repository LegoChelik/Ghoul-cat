// ==UserScript==
// @name         asd Bombs
// @version      0.2
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
    if(keyName.match(/(A|Ф)/i)){
      buttons[0].dispatchEvent(clickEvent)
    }
    if(keyName.match(/(S|Ы)/i)){
      buttons[1].dispatchEvent(clickEvent)
    }
    if(keyName.match(/(D|В)/i)){
      buttons[2].dispatchEvent(clickEvent)
    }
  })
}

asdCaptcha();
