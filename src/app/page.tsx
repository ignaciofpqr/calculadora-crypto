"use client";
import Form from "./components/Form";
import cotizaciones from "../../cotizaciones.json";
import { useState } from "react";

const COTIZACIONES = cotizaciones as Record<
  string,
  { compra: number; venta: number }
>;

export default function Home() {
  const [amount, setAmount] = useState<number | string>("");
  const [currency, setCurrency] = useState<string>("ARS");

  // Obteniendo la cotización correcta basada en la moneda seleccionada
  const getCotizacion = (currency: string) => {
    switch (currency) {
      case "USD":
        return COTIZACIONES["USD"];
      case "EUR":
        return COTIZACIONES["EUR"];
      default:
        return COTIZACIONES["ARS"];
    }
  };

  const cotizacion = getCotizacion(currency);

  return (
    <main className="gap-8 grid">
      <section>
        <Form
          value={amount}
          currency={currency}
          onAmountChange={setAmount}
          onCurrencyChange={setCurrency}
        />
      </section>
      <section className="bg-slate-600 flex-1 rounded-3xl p-8 text-white text-md overflow-y-auto">
        <ul className="flex flex-col gap-4">
          {Object.entries(COTIZACIONES).map(
            ([name, value]: [string, { compra: number; venta: number }]) => {
              const total = amount ? Number(amount) / value.venta : 0;

              return (
                <li
                  key={name}
                  className="flex items-center text-emerald-100 gap-4 justify-between"
                >
                  <div>{name}</div>
                  <div className="flex items-center gap-4 text-left">
                    {amount ? (
                      <div className="text-emerald-400 text-xl font-bold">
                        {Number(total).toLocaleString("es-AR", {
                          style: "currency",
                          currency: "ARS",
                        })}
                      </div>
                    ) : null}
                    <div className="text-emerald-200 text-3xl font-bold">
                      {Number(total).toLocaleString("es-AR", {
                        style: "currency",
                        currency: "ARS",
                      })}
                    </div>
                  </div>
                </li>
              );
            }
          )}
        </ul>
      </section>
    </main>
  );
}
