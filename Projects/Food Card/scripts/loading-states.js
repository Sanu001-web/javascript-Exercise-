function prepareImage(image, sourceChanged = false) {
  if (image.classList.contains('rating-icons') || image.classList.contains('sweet-movements-icon')) return;
  if ((!sourceChanged && image.dataset.loadingStateReady) || !image.getAttribute('src')) return;
  image.dataset.loadingStateReady = 'true';
  image.dataset.imageState = 'loading';

  const setImageState = (state) => {
    image.dataset.imageState = state;
  };

  image.addEventListener('load', () => setImageState('loaded'), { once: true });
  image.addEventListener('error', () => setImageState('error'), { once: true });

  if (image.complete) {
    setImageState(image.naturalWidth > 0 ? 'loaded' : 'error');
  }
}

function prepareImages(root) {
  if (root instanceof HTMLImageElement) prepareImage(root);
  root.querySelectorAll?.('img').forEach(prepareImage);
}

prepareImages(document);

new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.type === 'attributes' && mutation.target instanceof HTMLImageElement) {
      prepareImage(mutation.target, true);
      return;
    }
    mutation.addedNodes.forEach((node) => {
      if (node.nodeType === Node.ELEMENT_NODE) prepareImages(node);
    });
  });
}).observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['src'] });
