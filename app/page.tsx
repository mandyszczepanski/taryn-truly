"use client";

import { platforms, followerGrowthData, recentActivity } from "./data/mockData";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
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

export default function DashboardPage() {
  const chartData = followerGrowthData["1yr"];

  return (
    <div className="px-6 md:px-10 py-8 max-w-6xl">
      {/* Header */}
      <h1 className="text-3xl md:text-4xl font-bold text-primary-900 mb-8">
        Good morning, Taryn ✨
      </h1>

      {/* Platform Stats */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
        {platforms.map((p) => (
          <div
            key={p.id}
            className="bg-white rounded-2xl p-4 shadow-sm border border-primary-100 hover:shadow-md transition-shadow"
          >
            <div className="text-2xl mb-1">{p.emoji}</div>
            <p className="text-xs text-primary-600 font-medium">{p.name}</p>
            <p className="text-xl font-bold text-primary-900 mt-1">
              {formatFollowers(p.followers)}
            </p>
            <span className="inline-block mt-2 text-xs font-semibold px-2 py-0.5 rounded-full bg-accent-rose/20 text-primary-700">
              +{p.growth}%
            </span>
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
              tickFormatter={(v) => formatFollowers(Number(v ?? 0))}
            />
            <Tooltip
              formatter={(value) => formatFollowers(Number(value ?? 0))}
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

      {/* Engagement + Recent Activity */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Engagement Card */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-primary-100">
          <h2 className="text-lg font-bold text-primary-900 mb-2">Engagement</h2>
          <p className="text-4xl font-bold text-accent-rose">4.8%</p>
          <p className="text-sm text-primary-600 mt-1">Average across all platforms</p>
          <div className="mt-4 inline-block text-xs font-semibold px-3 py-1 rounded-full bg-accent-mulberry/10 text-accent-mulberry">
            Top 5% of creators
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-primary-100">
          <h2 className="text-lg font-bold text-primary-900 mb-4">Recent Activity</h2>
          <div className="space-y-3">
            {recentActivity.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-lg mt-0.5">{item.emoji}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-primary-800 truncate">{item.text}</p>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-xs text-primary-500">{item.time}</span>
                    <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-primary-100 text-primary-700">
                      {item.metric}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-primary-100">
          <h2 className="text-lg font-bold text-primary-900 mb-4">What&apos;s Working / What&apos;s Flopping</h2>
          <div className="space-y-3">
            <div className="rounded-xl bg-emerald-50 border border-emerald-100 px-4 py-3">
              <p className="text-sm font-semibold text-emerald-800">Working: Short routine videos (15-30s)</p>
              <p className="text-xs text-emerald-700 mt-1">Average watch time up 22% this week.</p>
            </div>
            <div className="rounded-xl bg-rose-50 border border-rose-100 px-4 py-3">
              <p className="text-sm font-semibold text-rose-800">Flopping: Long static product slides</p>
              <p className="text-xs text-rose-700 mt-1">Saves down 11% vs prior month.</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-primary-100">
          <h2 className="text-lg font-bold text-primary-900 mb-4">Membership Notifications</h2>
          <div className="space-y-3">
            <div className="rounded-xl border border-primary-100 bg-primary-50 px-4 py-3">
              <p className="text-sm text-primary-800">New HQ member: <span className="font-semibold">Jordan M.</span></p>
              <p className="text-xs text-primary-500 mt-1">3 minutes ago</p>
            </div>
            <div className="rounded-xl border border-primary-100 bg-primary-50 px-4 py-3">
              <p className="text-sm text-primary-800">New podcast comment on episode: <span className="font-semibold">Burnout & Boundaries</span></p>
              <p className="text-xs text-primary-500 mt-1">12 minutes ago</p>
            </div>
            <div className="rounded-xl border border-primary-100 bg-primary-50 px-4 py-3">
              <p className="text-sm text-primary-800">Instagram subscriber joined: <span className="font-semibold">@wellnesswithjade</span></p>
              <p className="text-xs text-primary-500 mt-1">35 minutes ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
