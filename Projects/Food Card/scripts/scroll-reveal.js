const revealSelectors = [
  'main > section:not(.popup-qantity)',
  'main > aside',
  '.checkout-main > header',
  '.checkout-main > section',
  '.checkout-aside > article',
  '.checkout-aside > .checkout-note'
].join(', ');

const revealElements = new Set();

function observeRevealElement(element, observer) {
  if (revealElements.has(element)) return;
  revealElements.add(element);
  element.classList.add('scroll-reveal');
  observer.observe(element);
}

if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.documentElement.classList.add('has-scroll-reveal');

  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      currentObserver.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  function observeWithin(root) {
    if (root.nodeType !== Node.ELEMENT_NODE && root.nodeType !== Node.DOCUMENT_NODE) return;
    if (root.matches?.(revealSelectors)) observeRevealElement(root, observer);
    root.querySelectorAll?.(revealSelectors).forEach((element) => observeRevealElement(element, observer));
  }

  observeWithin(document);
  new MutationObserver((mutations) => {
    mutations.forEach((mutation) => mutation.addedNodes.forEach((node) => observeWithin(node)));
  }).observe(document.body, { childList: true, subtree: true });
}
