const fallbackArtwork = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500"><rect width="800" height="500" fill="#f3e8df"/><circle cx="400" cy="250" r="150" fill="#fffaf6"/><circle cx="400" cy="250" r="112" fill="#f8eee5" stroke="#d9b89f" stroke-width="8"/><circle cx="400" cy="250" r="72" fill="#fffaf6"/><path d="M170 150l10 18 20 3-15 14 4 20-19-10-18 10 4-20-15-14 21-3zM610 320l8 14 16 2-12 11 3 16-15-8-14 8 3-16-12-11 16-2z" fill="#c18351"/></svg>`;
const fallbackSource = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(fallbackArtwork)}`;

function useImageFallback(image) {
  if (image.dataset.imageFallbackApplied) return;
  image.dataset.imageFallbackApplied = 'true';
  image.dataset.imageState = 'error';
  image.src = fallbackSource;
}

function prepareImage(image, sourceChanged = false) {
  if (image.dataset.imageFallbackApplied) {
    if (image.getAttribute('src') === fallbackSource) return;
    delete image.dataset.imageFallbackApplied;
  }
  if ((!sourceChanged && image.dataset.loadingStateReady) || !image.getAttribute('src')) return;
  image.dataset.loadingStateReady = 'true';
  image.dataset.imageState = 'loading';
  const source = image.getAttribute('src');

  image.addEventListener('load', () => {
    if (image.getAttribute('src') === source && !image.dataset.imageFallbackApplied) {
      image.dataset.imageState = 'loaded';
    }
  }, { once: true });
  image.addEventListener('error', () => {
    if (image.getAttribute('src') === source) useImageFallback(image);
  }, { once: true });

  if (image.complete) {
    if (image.naturalWidth > 0) image.dataset.imageState = 'loaded';
    else useImageFallback(image);
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
