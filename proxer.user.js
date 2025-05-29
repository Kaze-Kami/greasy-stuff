// ==UserScript==
// @name        Better proxer.me
// @version     1.0
// @grant       none
// @match       https://*.proxer.me/watch/*
// @run-at      document-start
// @require     https://raw.githubusercontent.com/Kaze-Kami/greasy-stuff/refs/heads/main/lib/wait_for_element.js
// ==/UserScript==

waitForElement(document, '.wStream', (stream) => {
  console.log('[KS] Stream ready');
  waitForElement(stream, '#donatecall', (overlay) => {
    console.log('[KS] Remove donate overlay');
    const button = overlay.querySelector('p > a:nth-child(2)');
    if (!button) alert('[KS] Can\'t find "Später Erinnern" button!')
    else button.click()
  });
  
  waitForElement(stream, 'div:nth-child(1)', (banner) => {
    console.log('[KS] Remove adblock banner')
    banner.remove()
  })
})