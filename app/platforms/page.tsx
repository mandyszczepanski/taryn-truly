"use client";

import { useMemo, useState } from "react";
import { platformSnapshots } from "../data/mockData";

export default function PlatformsPage() {
  const [activePlatform, setActivePlatform] = useState(platformSnapshots[0].id);

  const active = useMemo(
    () => platformSnapshots.find((p) => p.id === activePlatform) ?? platformSnapshots[0],
    [activePlatform]
  );

  return (
    <div className="px-6 md:px-10 py-8 max-w-6xl">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-primary-900">Per-Platform Command Center</h1>
        <p className="text-primary-600 mt-2">Review posts, comments, DMs, and reach for each platform stream.</p>
      </div>

      <div className="flex gap-2 mb-6 overflow-x-auto pb-1">
        {platformSnapshots.map((platform) => (
          <button
            key={platform.id}
            onClick={() => setActivePlatform(platform.id)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
              activePlatform === platform.id
                ? "bg-accent-rose/35 text-primary-900 ring-1 ring-primary-300"
                : "bg-primary-100 text-primary-700 hover:bg-primary-200"
            }`}
          >
            {platform.label}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white rounded-2xl border border-primary-100 p-5 shadow-sm">
          <p className="text-xs uppercase tracking-wide text-primary-500 font-semibold">Followers</p>
          <p className="text-3xl font-bold text-primary-900 mt-2">{active.followers}</p>
        </div>
        <div className="bg-white rounded-2xl border border-primary-100 p-5 shadow-sm">
          <p className="text-xs uppercase tracking-wide text-primary-500 font-semibold">Reach</p>
          <p className="text-3xl font-bold text-primary-900 mt-2">{active.reach}</p>
        </div>
        <div className="bg-white rounded-2xl border border-primary-100 p-5 shadow-sm">
          <p className="text-xs uppercase tracking-wide text-primary-500 font-semibold">Top Content</p>
          <p className="text-lg font-semibold text-primary-900 mt-2">{active.topPost}</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl border border-primary-100 p-6 shadow-sm">
          <h2 className="text-lg font-bold text-primary-900 mb-4">Latest Comments</h2>
          <div className="space-y-3">
            {active.comments.map((comment, i) => (
              <div key={i} className="rounded-xl border border-primary-100 bg-primary-50 px-4 py-3">
                <p className="text-sm text-primary-800">{comment}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-primary-100 p-6 shadow-sm">
          <h2 className="text-lg font-bold text-primary-900 mb-4">Latest DM / Notification</h2>
          <div className="rounded-xl border border-primary-100 bg-primary-50 px-4 py-4">
            <p className="text-sm text-primary-800">{active.dmPreview}</p>
          </div>
          <div className="mt-4">
            <button className="px-5 py-2 bg-accent-mulberry text-white rounded-xl text-sm font-medium hover:bg-[#351015] transition-colors">
              Reply from Command Center
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
