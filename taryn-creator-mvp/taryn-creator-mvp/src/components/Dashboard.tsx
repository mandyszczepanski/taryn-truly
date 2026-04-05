"use client";

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const growthData = [
  { month: "Oct", followers: 84200 },
  { month: "Nov", followers: 91500 },
  { month: "Dec", followers: 98300 },
  { month: "Jan", followers: 104800 },
  { month: "Feb", followers: 112400 },
  { month: "Mar", followers: 118700 },
  { month: "Apr", followers: 124300 },
];

const activity = [
  { type: "rose", text: "New brand partnership request from Glossier", time: "2 min ago" },
  { type: "clay", text: "Your 'Spring Morning Routine' hit 50K views", time: "18 min ago" },
  { type: "green", text: "Comment milestone: 1,000 on latest post", time: "1 hour ago" },
  { type: "rose", text: "New DM from @beautybysarah — collaboration inquiry", time: "3 hours ago" },
  { type: "clay", text: "TikTok video entered For You Page rotation", time: "5 hours ago" },
];

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 17) return "Good afternoon";
  return "Good evening";
}

function getCurrentDate() {
  return new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" });
}

export default function Dashboard() {
  return (
    <>
      <div className="page-header">
        <div className="greeting-section">
          <p className="greeting-time">{getCurrentDate()}</p>
          <h1>{getGreeting()}, Taryn ✨</h1>
          <p>Your community is growing beautifully. Here&apos;s what&apos;s happening today.</p>
        </div>
      </div>

      <div className="page-content">
        {/* Stat Cards */}
        <div className="grid-4">
          <div className="stat-card">
            <div className="stat-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <div className="stat-label">Total Followers</div>
            <div className="stat-value">124.3K</div>
            <div className="stat-change up">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="18 15 12 9 6 15"/></svg>
              +5.6K this month
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </div>
            <div className="stat-label">Avg. Engagement</div>
            <div className="stat-value">7.2%</div>
            <div className="stat-change up">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="18 15 12 9 6 15"/></svg>
              +0.8% vs last month
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            </div>
            <div className="stat-label">Monthly Views</div>
            <div className="stat-value">2.4M</div>
            <div className="stat-change up">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="18 15 12 9 6 15"/></svg>
              +340K this month
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </div>
            <div className="stat-label">Brand Revenue</div>
            <div className="stat-value">$8,400</div>
            <div className="stat-change up">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="18 15 12 9 6 15"/></svg>
              +$1,200 vs last month
            </div>
          </div>
        </div>

        {/* Chart + Activity */}
        <div className="grid-2-3 mt-20">
          {/* Growth Chart */}
          <div className="chart-container">
            <div className="chart-header">
              <h3 className="chart-title">Follower Growth</h3>
              <span style={{ fontSize: 12, color: "var(--clay)", fontWeight: 500 }}>Last 7 months</span>
            </div>
            <ResponsiveContainer width="100%" height={220}>
              <AreaChart data={growthData} margin={{ top: 4, right: 4, bottom: 0, left: -20 }}>
                <defs>
                  <linearGradient id="followerGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#E8A598" stopOpacity={0.25} />
                    <stop offset="95%" stopColor="#E8A598" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(44,24,16,0.06)" />
                <XAxis dataKey="month" tick={{ fontSize: 11, fill: "#5C3D33" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fill: "#5C3D33" }} axisLine={false} tickLine={false} tickFormatter={(v) => `${(v/1000).toFixed(0)}K`} />
                <Tooltip
                  contentStyle={{ background: "white", border: "none", borderRadius: 12, boxShadow: "0 4px 20px rgba(44,24,16,0.1)", fontSize: 12 }}
                  formatter={(v: number) => [`${(v/1000).toFixed(1)}K followers`, ""]}
                  labelStyle={{ color: "#2C1810", fontWeight: 600 }}
                />
                <Area type="monotone" dataKey="followers" stroke="#E8A598" strokeWidth={2.5} fill="url(#followerGrad)" dot={false} activeDot={{ r: 5, fill: "#C4856A", strokeWidth: 0 }} />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Activity Feed */}
          <div className="card">
            <div className="section-header">
              <h3>Recent Activity</h3>
              <a className="see-all">View all</a>
            </div>
            {activity.map((item, i) => (
              <div key={i} className="activity-item">
                <div className={`activity-dot ${item.type}`} />
                <div className="activity-text">
                  <p>{item.text}</p>
                  <span>{item.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Platform Breakdown */}
        <div className="grid-3 mt-20">
          {[
            { platform: "Instagram", badge: "badge-instagram", followers: "67.4K", change: "+2.1K", engagement: "8.4%" },
            { platform: "TikTok", badge: "badge-tiktok", followers: "42.1K", change: "+2.8K", engagement: "11.2%" },
            { platform: "YouTube", badge: "badge-youtube", followers: "14.8K", change: "+680", engagement: "4.1%" },
          ].map((p) => (
            <div key={p.platform} className="card-sm">
              <div className="flex items-center justify-between mb-16">
                <span className={`badge ${p.badge}`}>{p.platform}</span>
                <span style={{ fontSize: 11, color: "#4caf7d", fontWeight: 600 }}>↑ {p.change}</span>
              </div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700, color: "var(--dark)" }}>
                {p.followers}
              </div>
              <div style={{ fontSize: 12, color: "var(--dark-muted)", marginTop: 4 }}>
                {p.engagement} engagement rate
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
