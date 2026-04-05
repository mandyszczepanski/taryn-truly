"use client";

import { useState } from "react";
import { platformPosts } from "@/lib/mock-data";

const tabs = [
  "Instagram Personal",
  "Instagram Business",
  "YouTube",
  "TikTok",
  "Substack",
  "Facebook",
];

export default function PlatformsPage() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const posts = platformPosts[activeTab] || [];

  return (
    <div className="max-w-6xl">
      <h1
        className="text-3xl font-semibold text-[#2D2420] mb-8"
        style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
      >
        Platforms
      </h1>

      {/* Tab Switcher */}
      <div className="flex flex-wrap gap-2 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              activeTab === tab
                ? "bg-[#C4687A] text-white"
                : "bg-white text-[#2D2420] hover:bg-[#F0EAE0]"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Post Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
            {/* Thumbnail placeholder */}
            <div className="aspect-video bg-[#E8E0D4] rounded-t-xl" />
            <div className="p-5">
              <p className="text-sm font-medium text-[#2D2420] mb-3 line-clamp-2">
                {post.title}
              </p>
              <div className="flex items-center gap-4 text-xs text-[#C4845C]">
                <span>💬 {post.comments.toLocaleString()}</span>
                <span>👁 {post.reach}</span>
                <span>📊 {post.engagement}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
