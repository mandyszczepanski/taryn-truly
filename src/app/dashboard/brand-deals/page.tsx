"use client";

import { brandDeals } from "@/lib/mock-data";

const statusColors: Record<string, string> = {
  Negotiating: "bg-yellow-100 text-yellow-800",
  Active: "bg-blue-100 text-blue-800",
  Completed: "bg-gray-100 text-gray-600",
};

const payoutColors: Record<string, string> = {
  Pending: "bg-orange-100 text-orange-800",
  Paid: "bg-green-100 text-green-800",
  Negotiating: "bg-yellow-100 text-yellow-800",
};

export default function BrandDealsPage() {
  return (
    <div className="max-w-5xl">
      <h1
        className="text-3xl font-semibold text-[#2D2420] mb-8"
        style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
      >
        Brand Deals
      </h1>

      <div className="bg-white rounded-xl shadow-sm p-6 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[#E8E0D4]">
              <th className="text-left py-3 pr-4 font-medium text-[#C4845C]">Deal Name</th>
              <th className="text-left py-3 pr-4 font-medium text-[#C4845C]">Brand</th>
              <th className="text-left py-3 pr-4 font-medium text-[#C4845C]">Status</th>
              <th className="text-left py-3 pr-4 font-medium text-[#C4845C]">Payout</th>
              <th className="text-right py-3 font-medium text-[#C4845C]">Amount</th>
            </tr>
          </thead>
          <tbody>
            {brandDeals.map((deal, i) => (
              <tr key={i} className="border-b border-[#F0EAE0] last:border-0">
                <td className="py-4 pr-4 font-medium text-[#2D2420]">{deal.name}</td>
                <td className="py-4 pr-4 text-[#2D2420]">{deal.brand}</td>
                <td className="py-4 pr-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[deal.status]}`}>
                    {deal.status}
                  </span>
                </td>
                <td className="py-4 pr-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${payoutColors[deal.payoutStatus]}`}>
                    {deal.payoutStatus}
                  </span>
                </td>
                <td className="py-4 text-right font-semibold text-[#2D2420]">{deal.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-8">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <p className="text-xs text-[#C4845C] uppercase tracking-wide mb-1">Total Deals</p>
          <p
            className="text-2xl font-semibold text-[#2D2420]"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            4
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <p className="text-xs text-[#C4845C] uppercase tracking-wide mb-1">Total Value</p>
          <p
            className="text-2xl font-semibold text-[#2D2420]"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            $16,500
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <p className="text-xs text-[#C4845C] uppercase tracking-wide mb-1">Paid Out</p>
          <p
            className="text-2xl font-semibold text-[#2D2420]"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            $7,200
          </p>
        </div>
      </div>
    </div>
  );
}
