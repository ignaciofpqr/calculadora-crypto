"use client";
import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import { getFiatRates, getCryptoRates } from "../../api";

interface FiatRates {
  [key: string]: number;
}

interface CryptoRates {
  [key: string]: {
    [currency: string]: number;
  };
}

export default function Home() {
  const [amount, setAmount] = useState<number | string>("");
  const [currency, setCurrency] = useState<string>("USD");
  const [crypto, setCrypto] = useState<string>("bitcoin");
  const [fiatRates, setFiatRates] = useState<FiatRates>({});
  const [cryptoRates, setCryptoRates] = useState<CryptoRates>({});

  useEffect(() => {
    const fetchRates = async () => {
      const fiat = await getFiatRates();
      setFiatRates(fiat);

      const crypto = await getCryptoRates(currency.toLowerCase());
      setCryptoRates(crypto);
    };

    fetchRates();
  }, [currency]);

  const convertAmount = (amount: number | string, rate: number): string => {
    return amount ? (Number(amount) / rate).toFixed(6) : "0";
  };

  const cryptoRate = cryptoRates[crypto]?.[currency.toLowerCase()] ?? 0;
  const convertedAmount = convertAmount(amount, cryptoRate);

  return (
    <main className="gap-8 grid">
      <section>
        <Form
          value={amount}
          currency={currency}
          crypto={crypto}
          onAmountChange={setAmount}
          onCurrencyChange={setCurrency}
          onCryptoChange={setCrypto}
        />
      </section>
      <section className="bg-slate-600 flex-1 rounded-3xl p-8 text-white text-md overflow-y-auto">
        <ul className="flex flex-col gap-4">
          <li className="flex items-center text-emerald-100 gap-4 justify-between">
            <div>{crypto}</div>
            <div className="flex items-center gap-4 text-left">
              <div className="text-emerald-400 text-xl font-bold">
                {convertedAmount}
              </div>
            </div>
          </li>
        </ul>
      </section>
    </main>
  );
}
