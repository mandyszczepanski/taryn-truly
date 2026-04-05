"use client";

import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from "recharts";
import { followerCounts, growthData30d, recentActivity } from "@/lib/mock-data";

const activityIcons: Record<string, string> = {
  follower: "👥",
  comment: "💬",
  deal: "🤝",
  milestone: "🎉",
  email: "📧",
  analytics: "📈",
};

export default function DashboardPage() {
  return (
    <div className="max-w-6xl">
      <h1
        className="text-3xl font-semibold text-[#2D2420] mb-8"
        style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
      >
        Good morning, Taryn ✨
      </h1>

      {/* Follower Count Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        {followerCounts.map((p) => (
          <div
            key={p.platform}
            className="bg-white rounded-xl shadow-sm p-6"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-2xl">{p.icon}</span>
              <span className="text-xs text-[#C4845C] font-medium uppercase tracking-wide">
                {p.platform}
              </span>
            </div>
            <p
              className="text-3xl font-semibold text-[#2D2420]"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              {p.count}
            </p>
            <p className="text-xs text-[#C4845C] mt-1">{p.handle}</p>
          </div>
        ))}
      </div>

      {/* 30-Day Growth Chart */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
        <h2
          className="text-xl font-semibold text-[#2D2420] mb-4"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          30-Day Follower Growth
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={growthData30d}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E8E0D4" />
            <XAxis dataKey="day" tick={{ fontSize: 12, fill: "#2D2420" }} />
            <YAxis tick={{ fontSize: 12, fill: "#2D2420" }} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="instagram" stroke="#C4687A" strokeWidth={2} dot={false} name="Instagram" />
            <Line type="monotone" dataKey="tiktok" stroke="#2D2420" strokeWidth={2} dot={false} name="TikTok" />
            <Line type="monotone" dataKey="youtube" stroke="#C4845C" strokeWidth={2} dot={false} name="YouTube" />
            <Line type="monotone" dataKey="substack" stroke="#8B7355" strokeWidth={2} dot={false} name="Substack" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2
          className="text-xl font-semibold text-[#2D2420] mb-4"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          Recent Activity
        </h2>
        <div className="space-y-4">
          {recentActivity.map((item, i) => (
            <div key={i} className="flex items-start gap-3 pb-4 border-b border-[#F0EAE0] last:border-0 last:pb-0">
              <span className="text-xl mt-0.5">{activityIcons[item.type] || "•"}</span>
              <div className="flex-1">
                <p className="text-sm text-[#2D2420]">{item.text}</p>
                <p className="text-xs text-[#C4845C] mt-1">{item.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
