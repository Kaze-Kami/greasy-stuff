function waitForElement(parent, selector, once = true, fn) {
  const observer = new MutationObserver(() => {
    const element = parent.querySelector(selector)
    if (element) {
      if (once) observer.disconnect()
      fn(element)
    }
  })
  observer.observe(parent, { childList: true, subtree: true })
}