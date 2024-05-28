"use client";
import cotizaciones from "../../cotizaciones.json";

const COTIZACIONES = cotizaciones as Record<
  string,
  { compra: number; venta: number }
>;

export default function Home() {
  return (
    <main className="flex gap-4 h-full">
      <section className="flex-1">Left</section>
      <section className="bg-slate-600 flex-1 rounded-3xl p-8 text-white overflow-y-auto">
        <ul className="flex flex-col gap-4">
          {Object.entries(COTIZACIONES).map(
            ([name, value]: [string, { compra: number; venta: number }]) => (
              <li
                key={name}
                className="flex items-center text-emerald-100 gap-4 justify-between text-sm"
              >
                <div>{name}</div>
                <div className="text-emerald-200 text-3xl font-bold">
                  {Number(value.venta).toLocaleString("es-AR", {
                    style: "currency",
                    currency: "ARS",
                  })}
                </div>
              </li>
            )
          )}
        </ul>
      </section>
    </main>
  );
}
