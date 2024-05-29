"use client";

import React from "react";

interface FormProps {
  value: number | string;
  currency: string;
  onAmountChange: (amount: number | string) => void;
  onCurrencyChange: (currency: string) => void;
}

export default function Form({
  value,
  currency,
  onAmountChange,
  onCurrencyChange,
}: FormProps) {
  return (
    <form className="w-full space-y-4">
      <label className="block space-y-2 text-md">
        <span>Monto:</span>{" "}
        <input
          id="amount"
          type="number"
          value={value}
          onChange={(e) =>
            onAmountChange(e.target.value === "" ? "" : Number(e.target.value))
          }
          className="block w-full p-2 rounded-2xl text-right"
          placeholder="$ 0.00"
        />
      </label>
      <label>
        <span>Moneda:</span>{" "}
        <select
          id="currency"
          value={currency}
          onChange={(e) => onCurrencyChange(e.target.value)}
          className="block w-full p-2 rounded-2xl"
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="ARS">ARS</option>
        </select>
      </label>
    </form>
  );
}
