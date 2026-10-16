const servingMultipliers = {
  S: 1,
  M: 1.2,
  L: 1.8
};

export function updatePopupPrices(popup, basePrice) {
  const price = Number(basePrice);
  if (!popup || !Number.isFinite(price)) return;

  popup.querySelectorAll('.popup-food-quantity-size-btn').forEach((sizeButton) => {
    const sizePrice = Math.round(price * servingMultipliers[sizeButton.textContent.trim()]);
    const priceLabel = sizeButton.closest('.popup-food-air-quantity')?.querySelector('.popup-food-quantity-price');

    if (!priceLabel) return;

    const priceText = [...priceLabel.childNodes].find((node) => node.nodeType === Node.TEXT_NODE);
    if (priceText) {

      priceText.textContent = ` ${sizePrice}rs`;
    }
  });
}
