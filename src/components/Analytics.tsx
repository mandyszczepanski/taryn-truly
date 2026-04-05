"use client";

import { useState } from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
  BarChart, Bar,
} from "recharts";

type Range = "30d" | "90d" | "1yr";

const data30d = [
  { label: "Mar 5",  tiktok: 820, instagram: 228, youtube: 498, substack: 25, facebook: 66 },
  { label: "Mar 10", tiktok: 829, instagram: 230, youtube: 503, substack: 26, facebook: 66 },
  { label: "Mar 15", tiktok: 834, instagram: 231, youtube: 505, substack: 27, facebook: 67 },
  { label: "Mar 20", tiktok: 838, instagram: 232, youtube: 508, substack: 27, facebook: 67 },
  { label: "Mar 25", tiktok: 843, instagram: 233, youtube: 510, substack: 28, facebook: 67 },
  { label: "Apr 1",  tiktok: 847, instagram: 234, youtube: 512, substack: 28, facebook: 67 },
];

const data90d = [
  { label: "Jan",   tiktok: 780, instagram: 218, youtube: 472, substack: 21, facebook: 64 },
  { label: "Feb",   tiktok: 800, instagram: 223, youtube: 485, substack: 23, facebook: 65 },
  { label: "Mar",   tiktok: 820, instagram: 228, youtube: 498, substack: 25, facebook: 66 },
  { label: "Apr 1", tiktok: 847, instagram: 234, youtube: 512, substack: 28, facebook: 67 },
];

const data1yr = [
  { label: "Apr '24", tiktok: 620, instagram: 180, youtube: 350, substack: 10, facebook: 58 },
  { label: "Jun",     tiktok: 680, instagram: 196, youtube: 390, substack: 14, facebook: 60 },
  { label: "Aug",     tiktok: 720, instagram: 206, youtube: 420, substack: 17, facebook: 62 },
  { label: "Oct",     tiktok: 760, instagram: 215, youtube: 455, substack: 20, facebook: 63 },
  { label: "Dec",     tiktok: 800, instagram: 223, youtube: 480, substack: 22, facebook: 65 },
  { label: "Feb '25", tiktok: 830, instagram: 230, youtube: 500, substack: 25, facebook: 66 },
  { label: "Apr",     tiktok: 847, instagram: 234, youtube: 512, substack: 28, facebook: 67 },
];

const engagementData = [
  { platform: "TikTok",    engagement: 6.2 },
  { platform: "Instagram", engagement: 4.1 },
  { platform: "YouTube",   engagement: 3.8 },
  { platform: "Substack",  engagement: 8.4 },
  { platform: "Facebook",  engagement: 2.1 },
];

const topContent = [
  { title: "Morning Routine With Me ✨ (Slow & Intentional)", platform: "TikTok", views: "2.1M", likes: "187K", date: "Mar 28" },
  { title: "How I Actually Afford To Create Full-Time", platform: "YouTube", views: "824K", likes: "62K", date: "Mar 22" },
  { title: "My Honest Thoughts on Creator Burnout", platform: "Substack", views: "41K", likes: "8.2K", date: "Mar 15" },
  { title: "GRWM: Soft Girl Era Makeup in 10 Minutes", platform: "Instagram", views: "312K", likes: "38K", date: "Mar 10" },
  { title: "Day In My Life: NYC Content Week", platform: "TikTok", views: "1.4M", likes: "140K", date: "Mar 6" },
];

const summaryByRange: Record<Range, { reach: string; engagement: string; topPlatform: string; bestPost: string }> = {
  "30d": { reach: "4.2M", engagement: "4.8%", topPlatform: "TikTok", bestPost: "Morning Routine" },
  "90d": { reach: "12.4M", engagement: "4.3%", topPlatform: "TikTok", bestPost: "Full-Time Creator" },
  "1yr": { reach: "48.7M", engagement: "4.1%", topPlatform: "TikTok", bestPost: "Morning Routine" },
};

const platformColors: Record<string, string> = {
  tiktok: "#000000",
  instagram: "#E1306C",
  youtube: "#E8836A",
  substack: "#FF6719",
  facebook: "#1877F2",
};

export default function Analytics() {
  const [range, setRange] = useState<Range>("30d");

  const chartData = range === "30d" ? data30d : range === "90d" ? data90d : data1yr;
  const summary = summaryByRange[range];

  return (
    <div>
      <div className="page-header">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <h2>Analytics</h2>
            <p>Growth, engagement, and top content insights</p>
          </div>
          <div className="filter-btns">
            {(["30d", "90d", "1yr"] as Range[]).map((r) => (
              <button key={r} className={`filter-btn ${range === r ? "active" : ""}`} onClick={() => setRange(r)}>
                {r === "30d" ? "30 Days" : r === "90d" ? "90 Days" : "1 Year"}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Summary Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16, padding: "28px 36px" }}>
        {[
          { label: "Total Reach", value: summary.reach, icon: "👁️" },
          { label: "Avg Engagement", value: summary.engagement, icon: "💬" },
          { label: "Top Platform", value: summary.topPlatform, icon: "🏆" },
          { label: "Best Post", value: summary.bestPost, icon: "✨" },
        ].map((s) => (
          <div key={s.label} className="card" style={{ textAlign: "center", padding: "20px" }}>
            <div style={{ fontSize: 24, marginBottom: 8 }}>{s.icon}</div>
            <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-muted)", fontWeight: 600, marginBottom: 6 }}>{s.label}</div>
            <div style={{ fontFamily: "var(--font-heading)", fontSize: 20, fontWeight: 600, color: "var(--text-primary)" }}>{s.value}</div>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div style={{ padding: "0 36px 28px", display: "grid", gridTemplateColumns: "3fr 2fr", gap: 20 }}>
        <div className="card">
          <div className="card-title">Follower Growth by Platform</div>
          <ResponsiveContainer width="100%" height={240}>
            <LineChart data={chartData} margin={{ top: 4, right: 8, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#F0EAE2" />
              <XAxis dataKey="label" tick={{ fontSize: 11, fill: "#78716C" }} tickLine={false} axisLine={false} />
              <YAxis tick={{ fontSize: 11, fill: "#78716C" }} tickLine={false} axisLine={false} />
              <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid #E8E0D8", fontSize: 12 }} />
              <Legend iconType="circle" iconSize={8} wrapperStyle={{ fontSize: 11 }} />
              <Line type="monotone" dataKey="tiktok" name="TikTok" stroke={platformColors.tiktok} strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="instagram" name="Instagram" stroke={platformColors.instagram} strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="youtube" name="YouTube" stroke={platformColors.youtube} strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="substack" name="Substack" stroke={platformColors.substack} strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="facebook" name="Facebook" stroke={platformColors.facebook} strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="card">
          <div className="card-title">Engagement Rate by Platform</div>
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={engagementData} margin={{ top: 4, right: 8, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#F0EAE2" vertical={false} />
              <XAxis dataKey="platform" tick={{ fontSize: 11, fill: "#78716C" }} tickLine={false} axisLine={false} />
              <YAxis tick={{ fontSize: 11, fill: "#78716C" }} tickLine={false} axisLine={false} unit="%" />
              <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid #E8E0D8", fontSize: 12 }} formatter={(v: unknown) => [`${v ?? 0}%`, "Engagement"]} />
              <Bar dataKey="engagement" name="Engagement %" fill="#E8836A" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Top Content */}
      <div className="section" style={{ paddingTop: 0 }}>
        <div className="card">
          <div className="card-title">Top Content — Last {range === "30d" ? "30 Days" : range === "90d" ? "90 Days" : "Year"}</div>
          <table className="data-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Platform</th>
                <th>Views</th>
                <th>Likes</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {topContent.map((c, i) => (
                <tr key={i}>
                  <td style={{ color: "var(--text-muted)", fontWeight: 600 }}>{i + 1}</td>
                  <td style={{ fontWeight: 500, maxWidth: 320 }}>{c.title}</td>
                  <td>
                    <span className="badge badge-rose">{c.platform}</span>
                  </td>
                  <td style={{ fontWeight: 600, color: "var(--accent)" }}>{c.views}</td>
                  <td style={{ color: "var(--text-muted)" }}>{c.likes}</td>
                  <td style={{ color: "var(--text-muted)" }}>{c.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
