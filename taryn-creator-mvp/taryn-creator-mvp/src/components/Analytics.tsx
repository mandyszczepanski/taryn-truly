"use client";

import { useState } from "react";
import {
  BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Legend,
} from "recharts";

const engagementData = [
  { week: "W1", instagram: 7.2, tiktok: 10.8, youtube: 3.9 },
  { week: "W2", instagram: 8.1, tiktok: 11.4, youtube: 4.2 },
  { week: "W3", instagram: 7.8, tiktok: 9.6, youtube: 4.8 },
  { week: "W4", instagram: 8.4, tiktok: 12.1, youtube: 3.7 },
  { week: "W5", instagram: 9.1, tiktok: 13.2, youtube: 5.1 },
  { week: "W6", instagram: 8.7, tiktok: 11.9, youtube: 4.6 },
];

const reachData = [
  { day: "Mon", reach: 42000 },
  { day: "Tue", reach: 61000 },
  { day: "Wed", reach: 55000 },
  { day: "Thu", reach: 78000 },
  { day: "Fri", reach: 92000 },
  { day: "Sat", reach: 84000 },
  { day: "Sun", reach: 67000 },
];

const topContent = [
  { title: "My 5AM Morning Routine (Real + Honest)", platform: "YouTube", views: "284K", change: "+12%" },
  { title: "Get Ready With Me: Date Night", platform: "TikTok", views: "198K", change: "+8%" },
  { title: "Skincare Routine for Sensitive Skin 🌸", platform: "Instagram", views: "142K", change: "+21%" },
  { title: "10 Things I Stopped Buying in 2025", platform: "YouTube", views: "91K", change: "+5%" },
  { title: "Spring Capsule Wardrobe Haul", platform: "Instagram", views: "78K", change: "+15%" },
];

const badgeMap: Record<string, string> = {
  Instagram: "badge-instagram",
  TikTok: "badge-tiktok",
  YouTube: "badge-youtube",
};

const filters = ["7 days", "30 days", "90 days", "1 year"];

export default function Analytics() {
  const [activeFilter, setActiveFilter] = useState("30 days");

  return (
    <>
      <div className="page-header">
        <h2>Analytics</h2>
        <p>Track your growth, engagement, and top-performing content</p>
      </div>

      <div className="page-content">
        {/* Filter Bar */}
        <div className="filter-bar">
          {filters.map((f) => (
            <button
              key={f}
              className={`filter-btn ${activeFilter === f ? "active" : ""}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="grid-4 mb-24">
          {[
            { label: "Total Reach", value: "4.8M", change: "+18%" },
            { label: "Impressions", value: "12.1M", change: "+24%" },
            { label: "Link Clicks", value: "38.4K", change: "+11%" },
            { label: "Saves & Shares", value: "21.7K", change: "+32%" },
          ].map((s) => (
            <div key={s.label} className="stat-card">
              <div className="stat-label">{s.label}</div>
              <div className="stat-value">{s.value}</div>
              <div className="stat-change up">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="18 15 12 9 6 15"/></svg>
                {s.change} vs prev period
              </div>
            </div>
          ))}
        </div>

        {/* Charts Row */}
        <div className="grid-2 mb-24">
          {/* Engagement Chart */}
          <div className="chart-container">
            <div className="chart-header">
              <h3 className="chart-title">Engagement Rate by Platform</h3>
            </div>
            <ResponsiveContainer width="100%" height={220}>
              <LineChart data={engagementData} margin={{ top: 4, right: 4, bottom: 0, left: -20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(44,24,16,0.06)" />
                <XAxis dataKey="week" tick={{ fontSize: 11, fill: "#5C3D33" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fill: "#5C3D33" }} axisLine={false} tickLine={false} tickFormatter={(v) => `${v}%`} />
                <Tooltip
                  contentStyle={{ background: "white", border: "none", borderRadius: 12, boxShadow: "0 4px 20px rgba(44,24,16,0.1)", fontSize: 12 }}
                  formatter={(v: number) => [`${v}%`]}
                />
                <Legend iconType="circle" iconSize={8} wrapperStyle={{ fontSize: 12 }} />
                <Line type="monotone" dataKey="instagram" stroke="#E8A598" strokeWidth={2} dot={false} name="Instagram" />
                <Line type="monotone" dataKey="tiktok" stroke="#C4856A" strokeWidth={2} dot={false} name="TikTok" />
                <Line type="monotone" dataKey="youtube" stroke="#2C1810" strokeWidth={2} dot={false} name="YouTube" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Daily Reach */}
          <div className="chart-container">
            <div className="chart-header">
              <h3 className="chart-title">Daily Reach This Week</h3>
            </div>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={reachData} margin={{ top: 4, right: 4, bottom: 0, left: -20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(44,24,16,0.06)" vertical={false} />
                <XAxis dataKey="day" tick={{ fontSize: 11, fill: "#5C3D33" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fill: "#5C3D33" }} axisLine={false} tickLine={false} tickFormatter={(v) => `${(v/1000).toFixed(0)}K`} />
                <Tooltip
                  contentStyle={{ background: "white", border: "none", borderRadius: 12, boxShadow: "0 4px 20px rgba(44,24,16,0.1)", fontSize: 12 }}
                  formatter={(v: number) => [`${(v/1000).toFixed(0)}K reach`]}
                />
                <Bar dataKey="reach" fill="#E8A598" radius={[6, 6, 0, 0]} name="Reach" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Top Content */}
        <div className="card">
          <div className="section-header">
            <h3>Top Performing Content</h3>
            <span style={{ fontSize: 12, color: "var(--dark-muted)" }}>Sorted by views</span>
          </div>
          <div className="content-rank-list">
            {topContent.map((item, i) => (
              <div key={i} className="content-rank-item">
                <div className={`rank-number ${i < 3 ? "top" : ""}`}>{i + 1}</div>
                <div className="rank-info">
                  <p>{item.title}</p>
                  <div className="flex items-center gap-8 mt-8">
                    <span className={`badge ${badgeMap[item.platform]}`}>{item.platform}</span>
                  </div>
                </div>
                <div className="rank-stat">
                  <p>{item.views}</p>
                  <span>{item.change}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
