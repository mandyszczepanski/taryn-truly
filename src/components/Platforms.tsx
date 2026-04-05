"use client";

import { useState } from "react";

const PLATFORMS = [
  "Instagram Personal",
  "Instagram Business",
  "YouTube",
  "TikTok",
  "Substack",
  "Facebook",
];

type Post = {
  id: number;
  caption: string;
  comments: number;
  reach: string;
  engagement: string;
};

const mockPosts: Record<string, Post[]> = {
  "Instagram Personal": [
    { id: 1, caption: "Sunday morning rituals — slow coffee, journaling, and letting the light in ☀️", comments: 312, reach: "84K", engagement: "6.2%" },
    { id: 2, caption: "This is what healing actually looks like. Not pretty, but real 💛", comments: 489, reach: "112K", engagement: "8.4%" },
    { id: 3, caption: "GRWM for a wellness event in NYC — minimal, earthy, intentional", comments: 227, reach: "67K", engagement: "5.1%" },
    { id: 4, caption: "My honest thoughts on the 'soft life' trend (thread in comments)", comments: 541, reach: "128K", engagement: "9.1%" },
  ],
  "Instagram Business": [
    { id: 1, caption: "Creator resources drop this Friday — link in bio 🔗", comments: 88, reach: "42K", engagement: "3.8%" },
    { id: 2, caption: "Behind the scenes: how I film a week of content in 2 days", comments: 174, reach: "58K", engagement: "5.6%" },
    { id: 3, caption: "Q2 brand partner announcement — so excited for this one ✨", comments: 143, reach: "51K", engagement: "4.9%" },
    { id: 4, caption: "My editing workflow breakdown (Reel + carousel)", comments: 96, reach: "37K", engagement: "3.4%" },
  ],
  "YouTube": [
    { id: 1, caption: "I Tried a 30-Day Digital Detox — Here's What Happened", comments: 892, reach: "218K", engagement: "7.2%" },
    { id: 2, caption: "Full Day of Eating | Anti-Inflammatory, Hormone-Friendly", comments: 634, reach: "185K", engagement: "6.8%" },
    { id: 3, caption: "My Honest Review: 6 Months of Therapy (What Changed)", comments: 1204, reach: "304K", engagement: "11.3%" },
    { id: 4, caption: "Minimalist Apartment Tour — NYC Studio, $2,400/mo", comments: 743, reach: "241K", engagement: "8.7%" },
  ],
  "TikTok": [
    { id: 1, caption: "The mindset shift that changed my relationship with food #wellness", comments: 1847, reach: "812K", engagement: "14.2%" },
    { id: 2, caption: "POV: your morning routine when you actually like yourself ☀️", comments: 2341, reach: "1.1M", engagement: "16.8%" },
    { id: 3, caption: "Replying to: is the Fable & Mane oil worth it? (honest review)", comments: 672, reach: "389K", engagement: "9.4%" },
    { id: 4, caption: "I asked 100 women what self-care means to them… 🥺", comments: 3102, reach: "1.4M", engagement: "18.1%" },
  ],
  "Substack": [
    { id: 1, caption: "The Letter I Wish Someone Sent Me at 25", comments: 47, reach: "9.8K", engagement: "22.4%" },
    { id: 2, caption: "Why I'm Quitting Productivity Culture (For Real This Time)", comments: 83, reach: "11.2K", engagement: "28.1%" },
    { id: 3, caption: "Monthly Check-In: April + What I've Been Sitting With", comments: 38, reach: "8.4K", engagement: "19.8%" },
    { id: 4, caption: "On Boundaries, Burnout, and the Creator Economy", comments: 61, reach: "10.1K", engagement: "24.3%" },
  ],
  "Facebook": [
    { id: 1, caption: "Sharing my 2025 wellness goals with this community 💛", comments: 124, reach: "28K", engagement: "3.1%" },
    { id: 2, caption: "New video is live! Link below — I think you'll love this one", comments: 89, reach: "21K", engagement: "2.7%" },
    { id: 3, caption: "Community question: what does rest mean to you right now?", comments: 203, reach: "34K", engagement: "4.6%" },
    { id: 4, caption: "Behind the lens — a week in my life as a creator 📷", comments: 76, reach: "19K", engagement: "2.4%" },
  ],
};

export default function Platforms() {
  const [activeTab, setActiveTab] = useState("Instagram Personal");
  const posts = mockPosts[activeTab] ?? [];

  return (
    <div>
      <div className="page-header">
        <h2>Platforms</h2>
        <p>Your content performance across every channel</p>
      </div>

      <div className="page-content">
        {/* Tab Switcher */}
        <div
          style={{
            display: "flex",
            gap: 8,
            flexWrap: "wrap",
            marginBottom: 24,
          }}
        >
          {PLATFORMS.map((p) => (
            <button
              key={p}
              onClick={() => setActiveTab(p)}
              style={{
                padding: "8px 18px",
                borderRadius: 24,
                border: "1px solid",
                borderColor: activeTab === p ? "#C4687A" : "rgba(44,24,16,0.12)",
                background: activeTab === p ? "#C4687A" : "transparent",
                color: activeTab === p ? "#fff" : "#5C3D33",
                fontFamily: "Inter, sans-serif",
                fontSize: 13,
                fontWeight: 500,
                cursor: "pointer",
                transition: "all 0.15s",
              }}
            >
              {p}
            </button>
          ))}
        </div>

        {/* Posts Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: 20,
          }}
        >
          {posts.map((post) => (
            <div key={post.id} className="card" style={{ padding: 0, overflow: "hidden" }}>
              {/* Thumbnail placeholder */}
              <div
                style={{
                  width: "100%",
                  aspectRatio: "16/9",
                  background: "#ede8e3",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#a08070",
                  fontSize: 12,
                  fontWeight: 500,
                }}
              >
                {activeTab} · Post {post.id}
              </div>
              <div style={{ padding: "16px 20px 18px" }}>
                <p
                  style={{
                    fontSize: 13,
                    color: "#2D2420",
                    lineHeight: 1.5,
                    marginBottom: 12,
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {post.caption}
                </p>
                <div
                  style={{
                    display: "flex",
                    gap: 16,
                    fontSize: 12,
                    color: "#5C3D33",
                    fontWeight: 500,
                  }}
                >
                  <span>💬 {post.comments.toLocaleString()}</span>
                  <span>👁 {post.reach}</span>
                  <span style={{ color: "#C4687A", fontWeight: 600 }}>
                    ↑ {post.engagement}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
