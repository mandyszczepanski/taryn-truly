"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const growthData = [
  { day: "Mar 5", tiktok: 820, instagram: 228, youtube: 498, substack: 25 },
  { day: "Mar 8", tiktok: 825, instagram: 229, youtube: 500, substack: 26 },
  { day: "Mar 11", tiktok: 828, instagram: 230, youtube: 502, substack: 26 },
  { day: "Mar 14", tiktok: 830, instagram: 230, youtube: 504, substack: 26 },
  { day: "Mar 17", tiktok: 834, instagram: 231, youtube: 505, substack: 27 },
  { day: "Mar 20", tiktok: 836, instagram: 232, youtube: 507, substack: 27 },
  { day: "Mar 23", tiktok: 840, instagram: 232, youtube: 508, substack: 27 },
  { day: "Mar 26", tiktok: 842, instagram: 233, youtube: 510, substack: 27 },
  { day: "Mar 29", tiktok: 844, instagram: 233, youtube: 511, substack: 28 },
  { day: "Apr 1", tiktok: 847, instagram: 234, youtube: 512, substack: 28 },
];

const stats = [
  { platform: "TikTok", followers: "847K", growth: "+2.3%", color: "#000000", positive: true },
  { platform: "Instagram", followers: "234K", growth: "+1.8%", color: "#E1306C", positive: true },
  { platform: "Instagram Biz", followers: "189K", growth: "+1.2%", color: "#833AB4", positive: true },
  { platform: "YouTube", followers: "512K", growth: "+3.1%", color: "#FF0000", positive: true },
  { platform: "Substack", followers: "28K", growth: "+4.7%", color: "#FF6719", positive: true },
  { platform: "Facebook", followers: "67K", growth: "+0.4%", color: "#1877F2", positive: true },
];

const activities = [
  { icon: "🚀", bg: "#FEF3E2", label: "Viral post on TikTok", detail: "\"Morning routine with me\" hit 2.1M views overnight", time: "2h ago" },
  { icon: "💌", bg: "#FEE2E2", label: "Brand inquiry", detail: "Fenty Beauty reached out for a Q3 tutorial collab — $4,200 offer", time: "4h ago" },
  { icon: "✨", bg: "#F0FDF4", label: "New subscribers", detail: "248 new Substack subscribers in the last 24 hours", time: "6h ago" },
  { icon: "💬", bg: "#EFF6FF", label: "Comment milestone", detail: "Your YouTube video hit 1,000 comments", time: "9h ago" },
  { icon: "💰", bg: "#F0FDF4", label: "Payment received", detail: "Everlane OOTD Partnership — $2,200 deposited", time: "1d ago" },
  { icon: "📈", bg: "#FFF7ED", label: "Analytics spike", detail: "Instagram reach up 34% this week vs last week", time: "1d ago" },
];

const CustomTooltip = ({ active, payload, label }: { active?: boolean; payload?: Array<{ color: string; name: string; value: number }>; label?: string }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{ background: "white", border: "1px solid #E8E0D8", borderRadius: 8, padding: "10px 14px", boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }}>
        <p style={{ fontSize: 12, fontWeight: 600, color: "#78716C", marginBottom: 6 }}>{label}</p>
        {payload.map((p) => (
          <p key={p.name} style={{ fontSize: 12, color: p.color, fontWeight: 500 }}>
            {p.name}: {p.value}K
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default function Dashboard() {
  const hour = new Date().getHours();
  const greeting = hour < 12 ? "Good morning" : hour < 17 ? "Good afternoon" : "Good evening";

  return (
    <div>
      <div className="page-header">
        <h2>{greeting}, Taryn ✨</h2>
        <p>Here&apos;s what&apos;s happening across your platforms today</p>
      </div>

      {/* Stats Grid */}
      <div className="stats-grid">
        {stats.map((s) => (
          <div key={s.platform} className="stat-card">
            <div className="stat-card-label">
              <span className="platform-dot" style={{ background: s.color }} />
              {s.platform}
            </div>
            <div className="stat-card-value">{s.followers}</div>
            <div className={`stat-card-growth ${s.positive ? "" : "negative"}`}>
              {s.positive ? "▲" : "▼"} {s.growth} this month
            </div>
          </div>
        ))}
      </div>

      {/* Charts + Activity */}
      <div className="chart-container">
        {/* Growth Chart */}
        <div className="card">
          <div className="card-title">Follower Growth — Last 30 Days</div>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={growthData} margin={{ top: 4, right: 8, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#F0EAE2" />
              <XAxis dataKey="day" tick={{ fontSize: 11, fill: "#78716C" }} tickLine={false} axisLine={false} />
              <YAxis tick={{ fontSize: 11, fill: "#78716C" }} tickLine={false} axisLine={false} />
              <Tooltip content={<CustomTooltip />} />
              <Legend iconType="circle" iconSize={8} wrapperStyle={{ fontSize: 12 }} />
              <Line type="monotone" dataKey="tiktok" name="TikTok" stroke="#000000" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="instagram" name="Instagram" stroke="#E1306C" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="youtube" name="YouTube" stroke="#E8836A" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="substack" name="Substack" stroke="#FF6719" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Activity Feed */}
        <div className="card">
          <div className="card-title">Recent Activity</div>
          <div className="activity-feed">
            {activities.map((a, i) => (
              <div key={i} className="activity-item">
                <div className="activity-icon" style={{ background: a.bg }}>{a.icon}</div>
                <div className="activity-body">
                  <strong>{a.label}</strong>
                  <p>{a.detail}</p>
                </div>
                <div className="activity-time">{a.time}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick summary bar */}
      <div className="section" style={{ paddingTop: 0 }}>
        <div className="card" style={{ display: "flex", gap: "32px", alignItems: "center", padding: "18px 28px" }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.08em", color: "#78716C", fontWeight: 600, marginBottom: 4 }}>Total Audience</div>
            <div style={{ fontFamily: "var(--font-heading)", fontSize: 22, fontWeight: 600, color: "#1C1917" }}>1.877M</div>
          </div>
          <div style={{ width: 1, background: "#E8E0D8", alignSelf: "stretch" }} />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.08em", color: "#78716C", fontWeight: 600, marginBottom: 4 }}>Avg. Engagement</div>
            <div style={{ fontFamily: "var(--font-heading)", fontSize: 22, fontWeight: 600, color: "#1C1917" }}>4.8%</div>
          </div>
          <div style={{ width: 1, background: "#E8E0D8", alignSelf: "stretch" }} />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.08em", color: "#78716C", fontWeight: 600, marginBottom: 4 }}>Active Deals</div>
            <div style={{ fontFamily: "var(--font-heading)", fontSize: 22, fontWeight: 600, color: "#1C1917" }}>3 Active</div>
          </div>
          <div style={{ width: 1, background: "#E8E0D8", alignSelf: "stretch" }} />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.08em", color: "#78716C", fontWeight: 600, marginBottom: 4 }}>Pipeline Value</div>
            <div style={{ fontFamily: "var(--font-heading)", fontSize: 22, fontWeight: 600, color: "#E8836A" }}>$47,500</div>
          </div>
        </div>
      </div>
    </div>
  );
}
