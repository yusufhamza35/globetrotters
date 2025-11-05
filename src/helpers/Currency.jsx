const CurrencyConvert = (inputType, price, outputType) => {
  const priceNum = Number(price);

  const rates = {
    USD: { TL: 41.9, YTL: 41.9, EUR: 0.86 },
    EUR: { TL: 48.74, YTL: 48.74, USD: 1 / 0.86 },
    TL: { USD: 1 / 41.9, YTL: 1, EUR: 1 / 48.74 },
    YTL: { USD: 1 / 41.9, TL: 1, EUR: 1 / 48.74 },
  };

  if (!rates[inputType]) {
    return "";
  }
  if (inputType !== outputType && !rates[inputType][outputType]) {
    return "";
  }

  let convertedPrice;

  if (inputType === outputType) {
    convertedPrice = priceNum;
  } else {
    convertedPrice = priceNum * rates[inputType][outputType];
  }

  convertedPrice = convertedPrice.toFixed(2);

  const symbols = {
    USD: "$",
    EUR: "€",
    TL: "₺",
    YTL: "₺",
  };

  return `${convertedPrice}${symbols[outputType] || "a"}`;
};

const ShowCurrency = (type, price) => {
  const symbols = {
    USD: "$",
    EUR: "€",
    TL: "₺",
    YTL: "₺",
  };

  const priceNum = Number(price).toFixed(2);

  if (!symbols[type]) {
    return "";
  }

  return `${priceNum}${symbols[type]}`;
};

export { ShowCurrency, CurrencyConvert };
