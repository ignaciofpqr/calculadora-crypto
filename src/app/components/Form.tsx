"use client";

import React from "react";

interface FormProps {
  value: number | string;
  currency: string;
  crypto: string;
  onAmountChange: (amount: number | string) => void;
  onCurrencyChange: (currency: string) => void;
  onCryptoChange: (crypto: string) => void;
}

export default function Form({
  value,
  currency,
  crypto,
  onAmountChange,
  onCurrencyChange,
  onCryptoChange,
}: FormProps) {
  return (
    <form className="w-full space-y-4">
      <label className="block space-y-2 text-md">
        <span>Monto:</span>
        <input
          id="amount"
          type="number"
          value={value}
          onChange={(e) =>
            onAmountChange(e.target.value === "" ? "" : Number(e.target.value))
          }
          className="block w-full p-2 rounded-2xl text-right"
          placeholder="Monto"
          style={{ appearance: "textfield" }} // Esto asegura que Firefox también oculte las flechas
        />
      </label>
      <label className="block space-y-2 text-md">
        <span>Moneda:</span>
        <select
          value={currency}
          onChange={(e) => onCurrencyChange(e.target.value)}
          className="block w-full p-2 rounded-2xl"
        >
          <option value="USD">Dólar</option>
          <option value="ARS">Peso Argentino</option>
          <option value="EUR">Euro</option>
        </select>
      </label>
      <label className="block space-y-2 text-md">
        <span>Criptomoneda:</span>
        <select
          value={crypto}
          onChange={(e) => onCryptoChange(e.target.value)}
          className="block w-full p-2 rounded-2xl"
        >
          <option value="bitcoin">Bitcoin</option>
          <option value="ethereum">Ethereum</option>
          <option value="solana">Solana</option>
          <option value="monero">Monero</option>
        </select>
      </label>
    </form>
  );
}
