"use client";

import { useState } from "react";

const deals = [
  {
    id: 1,
    name: "Hair Care Campaign",
    brand: "Fable & Mane",
    status: "Completed",
    payout: "Paid",
    amount: 4200,
  },
  {
    id: 2,
    name: "Clean Beauty Collab",
    brand: "Primally Pure",
    status: "Active",
    payout: "Pending",
    amount: 2800,
  },
  {
    id: 3,
    name: "Electrolyte Partnership",
    brand: "Lmnt",
    status: "Active",
    payout: "Negotiating",
    amount: 6500,
  },
  {
    id: 4,
    name: "Wellness Box Feature",
    brand: "Sakara Life",
    status: "Completed",
    payout: "Paid",
    amount: 3000,
  },
];

const statusStyle: Record<string, React.CSSProperties> = {
  Completed: { background: "#ede8e3", color: "#5c4a3e" },
  Active: { background: "#deeaf7", color: "#1a4f87" },
  Negotiating: { background: "#fef3cd", color: "#856404" },
};

const payoutStyle: Record<string, React.CSSProperties> = {
  Paid: { background: "#d4edda", color: "#155724" },
  Pending: { background: "#ffe5cc", color: "#7d3c00" },
  Negotiating: { background: "#fef3cd", color: "#856404" },
};

export default function BrandDeals() {
  const totalEarned = deals
    .filter((d) => d.payout === "Paid")
    .reduce((sum, d) => sum + d.amount, 0);
  const pipeline = deals
    .filter((d) => d.payout !== "Paid")
    .reduce((sum, d) => sum + d.amount, 0);
  const activeCount = deals.filter((d) => d.status === "Active").length;

  return (
    <div>
      <div className="page-header">
        <h2>Brand Deals</h2>
        <p>Track your partnerships, negotiations, and payouts</p>
      </div>

      <div className="page-content">
        {/* Summary Cards */}
        <div className="grid-3" style={{ marginBottom: 24 }}>
          <div className="stat-card">
            <div className="stat-label">Total Earned</div>
            <div className="stat-value">${totalEarned.toLocaleString()}</div>
            <div className="stat-change up">✓ Confirmed paid</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Pipeline Value</div>
            <div className="stat-value">${pipeline.toLocaleString()}</div>
            <div className="stat-change" style={{ color: "#C4845C" }}>⏳ Pending / negotiating</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Active Deals</div>
            <div className="stat-value">{activeCount}</div>
            <div className="stat-change" style={{ color: "#1a4f87" }}>In progress</div>
          </div>
        </div>

        {/* Deals Table */}
        <div className="card" style={{ overflowX: "auto" }}>
          <div className="section-header">
            <h3>All Deals</h3>
          </div>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ borderBottom: "2px solid #ede8e3" }}>
                {["Deal Name", "Brand", "Status", "Payout", "Amount"].map((col) => (
                  <th
                    key={col}
                    style={{
                      textAlign: "left",
                      padding: "10px 12px",
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "#5C3D33",
                    }}
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {deals.map((deal) => (
                <tr
                  key={deal.id}
                  style={{ borderBottom: "1px solid #ede8e3" }}
                >
                  <td style={{ padding: "16px 12px", fontWeight: 600, fontSize: 14 }}>
                    {deal.name}
                  </td>
                  <td style={{ padding: "16px 12px", fontSize: 14, color: "#5C3D33" }}>
                    {deal.brand}
                  </td>
                  <td style={{ padding: "16px 12px" }}>
                    <span
                      style={{
                        ...statusStyle[deal.status],
                        padding: "3px 10px",
                        borderRadius: 20,
                        fontSize: 12,
                        fontWeight: 600,
                      }}
                    >
                      {deal.status}
                    </span>
                  </td>
                  <td style={{ padding: "16px 12px" }}>
                    <span
                      style={{
                        ...payoutStyle[deal.payout],
                        padding: "3px 10px",
                        borderRadius: 20,
                        fontSize: 12,
                        fontWeight: 600,
                      }}
                    >
                      {deal.payout}
                    </span>
                  </td>
                  <td style={{ padding: "16px 12px", fontWeight: 700, fontSize: 15, fontFamily: "Playfair Display, serif" }}>
                    ${deal.amount.toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
