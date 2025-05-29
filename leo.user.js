// ==UserScript==
// @name        Better leo.org
// @version     1.0
// @grant       none
// @match       https://dict.leo.org/*
// @run-at      document-start
// @require     https://raw.githubusercontent.com/Kaze-Kami/greasy-stuff/refs/heads/main/lib/wait_for_element.js
// ==/UserScript==

// ad sidebar
waitForElement(document, '[data-dz-ui="adv-sitebar"]', (ad) => {
  console.log('[KS] Remove abo ad')
  ad.remove()
})

// paywall overlay
waitForElement(document, 'ion-modal.show-modal', (modal) => {
  console.log('[KS] Remove paywall modal')
  modal.remove()
})