"use client";

import React from "react";

interface FormProps {
  value: number;
  onChange: (amount: number) => void;
}

export default function Form({ value, onChange }: FormProps) {
  return (
    <form className="w-full">
      <label className="block space-y-2 text-md">
        <span>Monto en ARS:</span>{" "}
        <input
          id="amount"
          type="number"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="block w-full p-2 rounded-2xl text-right"
          placeholder="$ ARS"
        />
      </label>
    </form>
  );
}
