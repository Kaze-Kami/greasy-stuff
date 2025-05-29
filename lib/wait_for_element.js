// ==UserScript==
// @name        wait_for_element
// @version     1.0
// ==/UserScript==

function waitForElement(parent, selector, fn, once = true) {
  const observer = new MutationObserver(() => {
    const element = parent.querySelector(selector)
    if (element) {
      if (once) observer.disconnect()
      fn(element)
    }
  })
  observer.observe(parent, { childList: true, subtree: true })
}