"use client";

import { useState } from "react";
import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Legend, Cell,
} from "recharts";
import {
  growthData30d, growthData90d, growthData1yr,
  engagementByPlatform, topContent,
} from "@/lib/mock-data";

const timeRanges = ["30d", "90d", "1yr"] as const;
type TimeRange = (typeof timeRanges)[number];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const dataByRange: Record<TimeRange, { data: any[]; xKey: string }> = {
  "30d": { data: growthData30d, xKey: "day" },
  "90d": { data: growthData90d, xKey: "month" },
  "1yr": { data: growthData1yr, xKey: "month" },
};

export default function AnalyticsPage() {
  const [range, setRange] = useState<TimeRange>("30d");
  const { data, xKey } = dataByRange[range];

  return (
    <div className="max-w-6xl">
      <div className="flex items-center justify-between mb-8">
        <h1
          className="text-3xl font-semibold text-[#2D2420]"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          Analytics
        </h1>
        <div className="flex gap-2">
          {timeRanges.map((r) => (
            <button
              key={r}
              onClick={() => setRange(r)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                range === r
                  ? "bg-[#C4687A] text-white"
                  : "bg-white text-[#2D2420] hover:bg-[#F0EAE0]"
              }`}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      {/* Follower Growth Chart */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
        <h2
          className="text-xl font-semibold text-[#2D2420] mb-4"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          Follower Growth
        </h2>
        <ResponsiveContainer width="100%" height={320}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E8E0D4" />
            <XAxis dataKey={xKey} tick={{ fontSize: 12, fill: "#2D2420" }} />
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

      {/* Engagement by Platform */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
        <h2
          className="text-xl font-semibold text-[#2D2420] mb-4"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          Engagement Rate by Platform
        </h2>
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={engagementByPlatform}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E8E0D4" />
            <XAxis dataKey="platform" tick={{ fontSize: 12, fill: "#2D2420" }} />
            <YAxis tick={{ fontSize: 12, fill: "#2D2420" }} unit="%" />
            <Tooltip formatter={(value) => `${value}%`} />
            <Bar dataKey="engagement" radius={[8, 8, 0, 0]}>
              {engagementByPlatform.map((entry, i) => (
                <Cell key={i} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Top Content */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2
          className="text-xl font-semibold text-[#2D2420] mb-4"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          Top Content
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#E8E0D4]">
                <th className="text-left py-3 pr-4 font-medium text-[#C4845C]">Title</th>
                <th className="text-left py-3 pr-4 font-medium text-[#C4845C]">Platform</th>
                <th className="text-left py-3 pr-4 font-medium text-[#C4845C]">Reach</th>
                <th className="text-left py-3 font-medium text-[#C4845C]">Engagement</th>
              </tr>
            </thead>
            <tbody>
              {topContent.map((post, i) => (
                <tr key={i} className="border-b border-[#F0EAE0] last:border-0">
                  <td className="py-3 pr-4 text-[#2D2420]">{post.title}</td>
                  <td className="py-3 pr-4 text-[#C4845C]">{post.platform}</td>
                  <td className="py-3 pr-4 text-[#2D2420]">{post.reach}</td>
                  <td className="py-3 text-[#2D2420] font-medium">{post.engagementRate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
