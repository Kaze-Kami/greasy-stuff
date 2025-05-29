// ==UserScript==
// @name        Better youtube.com
// @version     1.0
// @grant       none
// @match       https://*.youtube.com/*
// @run-at      document-start
// @require     https://raw.githubusercontent.com/Kaze-Kami/greasy-stuff/refs/heads/main/lib/wait_for_element.js
// ==/UserScript==

// feed
waitForElement(document.body, 'ytd-browse #primary', (element) => {
  console.log('[SR] Content ready')
  
  const observer = new MutationObserver(() => {
    console.log('[SR] Checking feed')
    const shelfs = element.querySelectorAll('ytd-rich-section-renderer')
    for (let shelf of shelfs) {
      const title = shelf.querySelector('span#title').innerHTML
      console.log(`[SR] Removing shelf ${title}`)
      shelf.remove()
    }
  })
  observer.observe(element, { childList: true, subtree: true })
})

// shorts in video recommendations
waitForElement(document.body, '#items.ytd-watch-next-secondary-results-renderer', (items) => {
  console.log('[SR] Recommendations ready')
  
  const observer = new MutationObserver(() => {
    console.log('[SR] Checking recommendations');
    const shorts = items.querySelector('ytd-reel-shelf-renderer')
    if (shorts) {
      console.log(`[SR] Removing shorts in recommendations`)
      shorts.remove()
    }
  })
  observer.observe(items, { childList: true, subtree: true })
})