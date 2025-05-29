// ==UserScript==
// @name        Better youtube.com
// @version     1.2
// @grant       none
// @match       https://*.youtube.com/*
// @run-at      document-start
// @require     https://raw.githubusercontent.com/Kaze-Kami/greasy-stuff/refs/heads/main/lib/wait_for_element.js
// ==/UserScript==

// feed
waitForElement(document, '.ytd-browse #primary', (element) => {
  console.log('[SR] Content ready')
  waitForElement(element, '.ytd-rich-section-renderer', (e) => {
    const title = e.querySelector('span#title').innerHTML
    console.log(`[SR] Removing shelf ${title}`)
    e.remove()
  }, once = false)
})

// shorts in video recommendations
waitForElement(document, '#items.ytd-watch-next-secondary-results-renderer', (items) => {
  console.log('[SR] Recommendations ready')

  waitForElement(items, '.ytd-reel-shelf-renderer', (e) => {
      console.log(`[SR] Removing shorts in recommendations`)
      e.remove()
  }, once = false);
})