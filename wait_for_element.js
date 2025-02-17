function waitForElement(parent, selector, fn) {
  const observer = new MutationObserver(() => {
    const element = parent.querySelector(selector)
    if (element) {
      observer.disconnect()
      fn(element)
    }
  })
  observer.observe(parent, { childList: true, subtree: true })
}