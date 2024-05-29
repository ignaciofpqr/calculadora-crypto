import axios from "axios";

// API's links
const FIAT_API_URL = "https://api.exchangeratesapi.io/latest?base=USD";
const CRYPTO_API_URL = "https://api.coingecko.com/api/v3/simple/price";

export const getFiatRates = async () => {
  const response = await axios.get(FIAT_API_URL, {
    params: {
      base: "USD",
      symbols: "ARS, EUR",
    },
  });
  return response.data.rates;
};

export const getCryptoRates = async (currency: string) => {
  const response = await axios.get(CRYPTO_API_URL, {
    params: {
      ids: "bitcoin, ethereum, solana, monero",
      vs_currencies: currency,
    },
  });
  return response.data;
};
