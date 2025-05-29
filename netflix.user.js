// ==UserScript==
// @name        Better netflix.com
// @version     1.0
// @grant       none
// @match       https://*.netflix.com/browse*
// @run-at      document-start
// @require     https://raw.githubusercontent.com/Kaze-Kami/greasy-stuff/refs/heads/main/lib/wait_for_element.js
// ==/UserScript==

// fk off netflix
waitForElement(document, '.volatile-billboard-animations-container', (billboard) => {
  console.log('[KS] Remove billboard')
  billboard.remove()
}, once = false);