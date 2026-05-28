import { CheckCircle, Clock, FileText, RefreshCw, Star } from "lucide-react";
import type { IntakeData } from "../IntakePage";
import type { PACKAGES } from "../../data";

interface Props {
  data: IntakeData;
  update: (f: Partial<IntakeData>) => void;
  packages: typeof PACKAGES;
}

export default function StepPackage({ data, update, packages }: Props) {
  return (
    <div>
      <div className="mb-8">
        <h2 className="font-display text-2xl font-bold text-white mb-2">Package Selection</h2>
        <p className="text-zinc-500 font-light text-[14.5px]">Choose the package that best fits your project scope.</p>
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        {packages.map((pkg) => {
          const isSelected = data.selectedPackage === pkg.id;
          return (
            <button
              key={pkg.id}
              type="button"
              onClick={() => update({ selectedPackage: pkg.id })}
              className={`relative text-left rounded-2xl border p-6 transition-all duration-200 ${
                isSelected
                  ? "border-brand-400/40 bg-brand-400/5 shadow-[0_0_30px_rgba(163,230,53,0.08)]"
                  : "glass-card hover:border-white/10 hover:shadow-card"
              }`}
            >
              {isSelected && (
                <div className="absolute top-4 right-4 w-5 h-5 bg-brand-400 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-3.5 h-3.5 text-zinc-950" strokeWidth={2.5} />
                </div>
              )}
              {pkg.highlight && !isSelected && (
                <div className="flex items-center gap-1 text-zinc-600 text-[10px] font-semibold uppercase tracking-wider mb-2">
                  <Star className="w-3 h-3" /> Popular
                </div>
              )}

              <h3 className={`font-semibold text-[15px] mb-1 ${isSelected ? "text-brand-400" : "text-white"}`}>
                {pkg.name}
              </h3>
              <div className={`font-display text-2xl font-bold mb-4 ${isSelected ? "text-brand-400" : "text-white"}`}>
                {pkg.price}
              </div>

              <div className="flex flex-col gap-2 mb-4">
                {[
                  { Icon: Clock, label: pkg.delivery },
                  { Icon: FileText, label: pkg.pages },
                  { Icon: RefreshCw, label: pkg.revisions },
                ].map(({ Icon, label }) => (
                  <div key={label} className="flex items-center gap-1.5 text-zinc-500 text-[12px]">
                    <Icon className="w-3 h-3 flex-shrink-0" strokeWidth={1.75} />
                    {label}
                  </div>
                ))}
              </div>

              <ul className="flex flex-col gap-1.5">
                {pkg.features.slice(0, 4).map((f) => (
                  <li key={f} className="flex items-start gap-1.5 text-[12px] text-zinc-600 font-light">
                    <CheckCircle className="w-3 h-3 flex-shrink-0 mt-0.5 text-zinc-700" strokeWidth={2} />
                    {f}
                  </li>
                ))}
                {pkg.features.length > 4 && (
                  <li className="text-[11.5px] text-zinc-700 font-light">+{pkg.features.length - 4} more features</li>
                )}
              </ul>
            </button>
          );
        })}
      </div>

      {!data.selectedPackage && (
        <p className="text-amber-400/70 text-[13px] mt-4 font-light">Please select a package to continue.</p>
      )}
      <p className="text-zinc-700 text-[12px] mt-4 font-light">
        Prices in ₹ (INR). Demo pricing shown — final quote confirmed after intake review.
      </p>
    </div>
  );
}
