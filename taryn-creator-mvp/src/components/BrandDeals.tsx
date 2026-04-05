"use client";

import { useState } from "react";

type Status = "Negotiating" | "Active" | "Paid";

interface Deal {
  id: number;
  name: string;
  brand: string;
  status: Status;
  payout: number;
  dueDate: string;
  category: string;
}

const mockDeals: Deal[] = [
  { id: 1, name: "Summer Glow Campaign", brand: "GlowSkin Co", status: "Active", payout: 3500, dueDate: "Jun 15, 2025", category: "Beauty" },
  { id: 2, name: "Wellness Reset Series", brand: "Ritual Vitamins", status: "Negotiating", payout: 5000, dueDate: "Jul 1, 2025", category: "Wellness" },
  { id: 3, name: "OOTD Partnership", brand: "Everlane", status: "Paid", payout: 2200, dueDate: "May 30, 2025", category: "Fashion" },
  { id: 4, name: "Tech Review Collab", brand: "Samsung", status: "Active", payout: 8000, dueDate: "Jun 28, 2025", category: "Tech" },
  { id: 5, name: "Fitness Challenge", brand: "Lululemon", status: "Paid", payout: 4500, dueDate: "Apr 15, 2025", category: "Fitness" },
  { id: 6, name: "Home Decor Series", brand: "West Elm", status: "Negotiating", payout: 6500, dueDate: "Jul 20, 2025", category: "Lifestyle" },
  { id: 7, name: "Beauty Tutorial", brand: "Fenty Beauty", status: "Active", payout: 3800, dueDate: "Jun 10, 2025", category: "Beauty" },
  { id: 8, name: "Travel Vlog Sponsor", brand: "Away Luggage", status: "Negotiating", payout: 5200, dueDate: "Aug 5, 2025", category: "Travel" },
];

const statusConfig: Record<Status, { className: string; label: string }> = {
  Negotiating: { className: "badge badge-amber", label: "Negotiating" },
  Active: { className: "badge badge-emerald", label: "Active" },
  Paid: { className: "badge badge-slate", label: "Paid" },
};

const fmt = (n: number) => `$${n.toLocaleString()}`;

export default function BrandDeals() {
  const [filterStatus, setFilterStatus] = useState<Status | "All">("All");

  const filtered = filterStatus === "All" ? mockDeals : mockDeals.filter((d) => d.status === filterStatus);

  const pipeline = mockDeals.reduce((sum, d) => d.status !== "Paid" ? sum + d.payout : sum, 0);
  const active = mockDeals.filter((d) => d.status === "Active").length;
  const paidOut = mockDeals.filter((d) => d.status === "Paid").reduce((sum, d) => sum + d.payout, 0);
  const negotiating = mockDeals.filter((d) => d.status === "Negotiating").length;

  return (
    <div>
      <div className="page-header">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <h2>Brand Deals Tracker</h2>
            <p>Manage your sponsorships, negotiations, and payments</p>
          </div>
          <button className="btn-primary">+ New Deal</button>
        </div>
      </div>

      {/* Summary */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16, padding: "28px 36px" }}>
        {[
          { label: "Total Pipeline", value: fmt(pipeline), icon: "💼", color: "var(--accent)" },
          { label: "Active Deals", value: `${active} deals`, icon: "🔥", color: "#4CAF7D" },
          { label: "Negotiating", value: `${negotiating} deals`, icon: "🤝", color: "#F59E0B" },
          { label: "Paid Out", value: fmt(paidOut), icon: "✅", color: "#475569" },
        ].map((s) => (
          <div key={s.label} className="card" style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{ fontSize: 28 }}>{s.icon}</div>
            <div>
              <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-muted)", fontWeight: 600, marginBottom: 4 }}>{s.label}</div>
              <div style={{ fontFamily: "var(--font-heading)", fontSize: 22, fontWeight: 600, color: s.color }}>{s.value}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="section" style={{ paddingTop: 0 }}>
        <div className="card" style={{ padding: 0, overflow: "hidden" }}>
          {/* Toolbar */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 20px", borderBottom: "1px solid var(--border)" }}>
            <div className="card-title" style={{ margin: 0 }}>All Deals</div>
            <div className="filter-btns">
              {(["All", "Negotiating", "Active", "Paid"] as const).map((s) => (
                <button key={s} className={`filter-btn ${filterStatus === s ? "active" : ""}`} onClick={() => setFilterStatus(s)}>
                  {s}
                </button>
              ))}
            </div>
          </div>

          <table className="data-table">
            <thead>
              <tr>
                <th>Deal Name</th>
                <th>Brand</th>
                <th>Category</th>
                <th>Status</th>
                <th>Payout</th>
                <th>Due Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((deal) => (
                <tr key={deal.id}>
                  <td>
                    <div style={{ fontWeight: 500 }}>{deal.name}</div>
                  </td>
                  <td style={{ fontWeight: 600, color: "var(--text-primary)" }}>{deal.brand}</td>
                  <td>
                    <span style={{ fontSize: 11.5, color: "var(--text-muted)", background: "var(--bg)", padding: "2px 8px", borderRadius: 999, border: "1px solid var(--border)" }}>
                      {deal.category}
                    </span>
                  </td>
                  <td>
                    <span className={statusConfig[deal.status].className}>
                      {statusConfig[deal.status].label}
                    </span>
                  </td>
                  <td>
                    <span style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: 15, color: deal.status === "Paid" ? "#475569" : "var(--accent)" }}>
                      {fmt(deal.payout)}
                    </span>
                  </td>
                  <td style={{ color: "var(--text-muted)", fontSize: 13 }}>{deal.dueDate}</td>
                  <td>
                    <div style={{ display: "flex", gap: 6 }}>
                      <button style={{ fontSize: 12, padding: "5px 10px", border: "1px solid var(--border)", borderRadius: 6, color: "var(--text-muted)", cursor: "pointer", background: "none" }}>
                        View
                      </button>
                      <button style={{ fontSize: 12, padding: "5px 10px", border: "1px solid var(--accent)", borderRadius: 6, color: "var(--accent)", cursor: "pointer", background: "none" }}>
                        Edit
                      </button>
                    </div>
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
