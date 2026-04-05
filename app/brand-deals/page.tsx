"use client";

import { affiliateIncome, brandDeals } from "../data/mockData";

function formatMoney(amount: number): string {
  return `$${amount.toLocaleString()}`;
}

const statusClasses: Record<string, string> = {
  Negotiating: "bg-amber-100 text-amber-800",
  Active: "bg-blue-100 text-blue-800",
  Paid: "bg-emerald-100 text-emerald-800",
};

const payoutClasses: Record<string, string> = {
  Pending: "bg-primary-100 text-primary-700",
  "Invoice Sent": "bg-purple-100 text-purple-700",
  Paid: "bg-emerald-100 text-emerald-800",
};

export default function BrandDealsPage() {
  const pipelineValue = brandDeals
    .filter((d) => d.status !== "Paid")
    .reduce((sum, d) => sum + d.amount, 0);

  const paidThisMonth = brandDeals
    .filter((d) => d.payoutStatus === "Paid")
    .reduce((sum, d) => sum + d.amount, 0);

  return (
    <div className="px-6 md:px-10 py-8 max-w-6xl">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-primary-900">Brand Deals Tracker</h1>
        <p className="text-primary-600 mt-2">Track deal status, payout progress, and affiliate revenue trends.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white rounded-2xl border border-primary-100 p-5 shadow-sm">
          <p className="text-xs uppercase tracking-wide text-primary-500 font-semibold">Pipeline Value</p>
          <p className="text-3xl font-bold text-primary-900 mt-2">{formatMoney(pipelineValue)}</p>
        </div>
        <div className="bg-white rounded-2xl border border-primary-100 p-5 shadow-sm">
          <p className="text-xs uppercase tracking-wide text-primary-500 font-semibold">Paid This Month</p>
          <p className="text-3xl font-bold text-primary-900 mt-2">{formatMoney(paidThisMonth)}</p>
        </div>
        <div className="bg-white rounded-2xl border border-primary-100 p-5 shadow-sm">
          <p className="text-xs uppercase tracking-wide text-primary-500 font-semibold">Open Deals</p>
          <p className="text-3xl font-bold text-primary-900 mt-2">{brandDeals.filter((d) => d.status !== "Paid").length}</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-primary-100 shadow-sm p-6 mb-8 overflow-x-auto">
        <h2 className="text-lg font-bold text-primary-900 mb-4">Deals</h2>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-primary-100">
              <th className="text-left py-2 px-3 text-primary-600 font-medium">Brand</th>
              <th className="text-left py-2 px-3 text-primary-600 font-medium">Campaign</th>
              <th className="text-left py-2 px-3 text-primary-600 font-medium">Status</th>
              <th className="text-left py-2 px-3 text-primary-600 font-medium">Payout</th>
              <th className="text-right py-2 px-3 text-primary-600 font-medium">Amount</th>
              <th className="text-right py-2 px-3 text-primary-600 font-medium">Due Date</th>
            </tr>
          </thead>
          <tbody>
            {brandDeals.map((deal) => (
              <tr key={deal.id} className="border-b border-primary-50 hover:bg-primary-50/40">
                <td className="py-3 px-3 font-semibold text-primary-900">{deal.brand}</td>
                <td className="py-3 px-3 text-primary-700">{deal.campaign}</td>
                <td className="py-3 px-3">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${statusClasses[deal.status]}`}>
                    {deal.status}
                  </span>
                </td>
                <td className="py-3 px-3">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${payoutClasses[deal.payoutStatus]}`}>
                    {deal.payoutStatus}
                  </span>
                </td>
                <td className="py-3 px-3 text-right font-semibold text-primary-900">{formatMoney(deal.amount)}</td>
                <td className="py-3 px-3 text-right text-primary-700">{deal.dueDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-white rounded-2xl border border-primary-100 shadow-sm p-6">
        <h2 className="text-lg font-bold text-primary-900 mb-4">Affiliate Income (Daily Briefing)</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {affiliateIncome.map((item) => (
            <div key={item.network} className="rounded-xl border border-primary-100 bg-primary-50 p-4">
              <p className="text-sm font-semibold text-primary-900">{item.network}</p>
              <p className="text-2xl font-bold text-primary-900 mt-1">{formatMoney(item.today)}</p>
              <p className="text-xs text-primary-600 mt-1">Today</p>
              <p className="text-sm text-primary-700 mt-2">
                7d: {formatMoney(item.last7Days)} <span className="text-emerald-700 font-semibold">{item.trend}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
