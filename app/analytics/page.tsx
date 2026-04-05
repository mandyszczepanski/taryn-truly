"use client";

import { useState } from "react";
import { platforms, followerGrowthData, topContent } from "../data/mockData";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell,
} from "recharts";

function formatFollowers(n: number): string {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
  if (n >= 1_000) return (n / 1_000).toFixed(0) + "K";
  return n.toString();
}

const platformLineColors: Record<string, string> = {
  tiktok: "#000000",
  instagram: "#E1306C",
  youtube: "#FF0000",
  pinterest: "#E60023",
  substack: "#FF6719",
};

const engagementData = [
  { name: "TikTok", engagement: 5.8, color: "#000000" },
  { name: "Instagram", engagement: 3.4, color: "#E1306C" },
  { name: "YouTube", engagement: 6.2, color: "#FF0000" },
  { name: "Pinterest", engagement: 2.1, color: "#E60023" },
  { name: "Substack", engagement: 12.4, color: "#FF6719" },
];

const ranges = ["30d", "90d", "1yr"] as const;

export default function AnalyticsPage() {
  const [selectedRange, setSelectedRange] = useState<string>("30d");

  const chartData = followerGrowthData[selectedRange];
  const contentData = topContent[selectedRange];

  return (
    <div className="px-6 md:px-10 py-8 max-w-6xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-primary-900">Analytics</h1>
        <div className="flex gap-2">
          {ranges.map((r) => (
            <button
              key={r}
              onClick={() => setSelectedRange(r)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                selectedRange === r
                  ? "bg-accent-rose text-white"
                  : "bg-primary-100 text-primary-700 hover:bg-primary-200"
              }`}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      {/* Platform Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {platforms.map((p) => (
          <div
            key={p.id}
            className="bg-white rounded-2xl p-5 shadow-sm border border-primary-100"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">{p.emoji}</span>
              <span className="text-sm font-semibold text-primary-900">{p.name}</span>
            </div>
            <p className="text-2xl font-bold text-primary-900">{formatFollowers(p.followers)}</p>
            <div className="flex items-center gap-3 mt-2">
              <span className="text-xs text-primary-600">{p.engagement}% engagement</span>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-accent-rose/20 text-primary-700">
                +{p.growth}%
              </span>
            </div>
            <p className="text-xs text-primary-400 mt-1">{p.posts} posts this month</p>
          </div>
        ))}
      </div>

      {/* Follower Growth Chart */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-primary-100 mb-8">
        <h2 className="text-lg font-bold text-primary-900 mb-4">Follower Growth</h2>
        <ResponsiveContainer width="100%" height={280}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#EBE7E3" />
            <XAxis dataKey="date" tick={{ fontSize: 12, fill: "#8B6F5E" }} />
            <YAxis
              tick={{ fontSize: 12, fill: "#8B6F5E" }}
              tickFormatter={(v: number) => formatFollowers(v)}
            />
            <Tooltip
              formatter={(value) => formatFollowers(Number(value))}
              contentStyle={{ borderRadius: 12, border: "1px solid #EBE7E3" }}
            />
            <Legend />
            {Object.keys(platformLineColors).map((key) => (
              <Line
                key={key}
                type="monotone"
                dataKey={key}
                stroke={platformLineColors[key]}
                strokeWidth={2}
                dot={false}
                name={platforms.find((p) => p.id === key)?.name || key}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Engagement Bar Chart */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-primary-100 mb-8">
        <h2 className="text-lg font-bold text-primary-900 mb-4">Engagement Rate by Platform</h2>
        <ResponsiveContainer width="100%" height={260}>
          <BarChart data={engagementData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#EBE7E3" />
            <XAxis dataKey="name" tick={{ fontSize: 12, fill: "#8B6F5E" }} />
            <YAxis tick={{ fontSize: 12, fill: "#8B6F5E" }} tickFormatter={(v: number) => `${v}%`} />
            <Tooltip formatter={(value) => `${value}%`} contentStyle={{ borderRadius: 12, border: "1px solid #EBE7E3" }} />
            <Bar dataKey="engagement" radius={[8, 8, 0, 0]}>
              {engagementData.map((entry, i) => (
                <Cell key={i} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Top Content */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-primary-100">
        <h2 className="text-lg font-bold text-primary-900 mb-4">Top Performing Content</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-primary-100">
                <th className="text-left py-2 px-3 text-primary-600 font-medium">Title</th>
                <th className="text-left py-2 px-3 text-primary-600 font-medium">Platform</th>
                <th className="text-right py-2 px-3 text-primary-600 font-medium">Views</th>
                <th className="text-right py-2 px-3 text-primary-600 font-medium">Likes</th>
                <th className="text-right py-2 px-3 text-primary-600 font-medium">Comments</th>
              </tr>
            </thead>
            <tbody>
              {contentData.map((item, i) => (
                <tr key={i} className="border-b border-primary-50 hover:bg-primary-50/50">
                  <td className="py-3 px-3 font-medium text-primary-900">{item.title}</td>
                  <td className="py-3 px-3">
                    <span className="capitalize text-primary-600">{item.platform}</span>
                  </td>
                  <td className="py-3 px-3 text-right text-primary-700">{item.views}</td>
                  <td className="py-3 px-3 text-right text-primary-700">{item.likes}</td>
                  <td className="py-3 px-3 text-right text-primary-700">{item.comments}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
