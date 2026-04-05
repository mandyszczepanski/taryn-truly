"use client";

import { useState } from "react";

type Platform = "Instagram Personal" | "Instagram Business" | "YouTube" | "TikTok" | "Substack" | "Facebook";

const platforms: Platform[] = ["Instagram Personal", "Instagram Business", "YouTube", "TikTok", "Substack", "Facebook"];

interface Post {
  id: number;
  title: string;
  date: string;
  emoji: string;
  bg: string;
  likes: string;
  comments: string;
  reach: string;
  views?: string;
}

interface Comment {
  avatar: string;
  username: string;
  text: string;
  time: string;
  color: string;
}

interface PlatformData {
  color: string;
  stats: { label: string; value: string }[];
  posts: Post[];
  comments: Comment[];
}

const platformData: Record<Platform, PlatformData> = {
  "Instagram Personal": {
    color: "#E1306C",
    stats: [
      { label: "Followers", value: "234K" },
      { label: "Posts", value: "842" },
      { label: "Avg Reach", value: "48K" },
      { label: "Engagement Rate", value: "4.1%" },
    ],
    posts: [
      { id: 1, title: "Golden hour in the city ☀️", date: "Apr 1", emoji: "🌆", bg: "#FEF3E2", likes: "12.4K", comments: "348", reach: "52K" },
      { id: 2, title: "Soft girl GRWM ft. Fenty", date: "Mar 28", emoji: "💄", bg: "#FDE8F0", likes: "18.7K", comments: "612", reach: "78K" },
      { id: 3, title: "Morning pages ritual 📓", date: "Mar 22", emoji: "📓", bg: "#F0F4FF", likes: "9.2K", comments: "287", reach: "41K" },
      { id: 4, title: "NYC thrift haul 🛍️", date: "Mar 15", emoji: "🛍️", bg: "#F0FDF4", likes: "14.1K", comments: "420", reach: "61K" },
    ],
    comments: [
      { avatar: "GG", username: "@glowwithgrace", text: "Your skin looks unreal here 😍 what's your routine?", time: "2h ago", color: "#E8836A" },
      { avatar: "SM", username: "@styledbysam", text: "That outfit is everything!! Where's the top from?", time: "4h ago", color: "#C4614A" },
      { avatar: "NL", username: "@naturallylux", text: "You always look so effortlessly beautiful 🥹", time: "6h ago", color: "#4CAF7D" },
    ],
  },
  "Instagram Business": {
    color: "#833AB4",
    stats: [
      { label: "Followers", value: "189K" },
      { label: "Posts", value: "412" },
      { label: "Avg Reach", value: "35K" },
      { label: "Engagement Rate", value: "3.8%" },
    ],
    posts: [
      { id: 1, title: "Behind the scenes: Brand shoot 🎥", date: "Apr 2", emoji: "🎥", bg: "#F5F0FF", likes: "7.8K", comments: "234", reach: "38K" },
      { id: 2, title: "Creator economy insights 2025", date: "Mar 30", emoji: "📊", bg: "#FFF7F5", likes: "11.2K", comments: "478", reach: "51K" },
      { id: 3, title: "GlowSkin Co collab reveal ✨", date: "Mar 25", emoji: "✨", bg: "#FDE8F0", likes: "15.3K", comments: "892", reach: "72K" },
      { id: 4, title: "Brands I actually use daily", date: "Mar 18", emoji: "🧴", bg: "#F0FDF4", likes: "8.6K", comments: "321", reach: "40K" },
    ],
    comments: [
      { avatar: "MB", username: "@modernbrand", text: "Would love to collaborate on something! DM sent 💼", time: "1h ago", color: "#833AB4" },
      { avatar: "CF", username: "@creatorfiles", text: "Your content strategy is so smart. Would you do a consult?", time: "3h ago", color: "#60A5FA" },
      { avatar: "BW", username: "@brandwatch_co", text: "Saving every slide of this carousel 📌", time: "5h ago", color: "#F59E0B" },
    ],
  },
  "YouTube": {
    color: "#FF0000",
    stats: [
      { label: "Subscribers", value: "512K" },
      { label: "Videos", value: "284" },
      { label: "Avg Views", value: "124K" },
      { label: "Watch Time", value: "2.8M hrs" },
    ],
    posts: [
      { id: 1, title: "How I Actually Afford To Create Full-Time", date: "Mar 22", emoji: "💰", bg: "#FFF7F5", likes: "62K", comments: "1.8K", reach: "824K", views: "824K" },
      { id: 2, title: "Day In My Life: NYC Content Week", date: "Mar 6", emoji: "🗽", bg: "#FEF3E2", likes: "48K", comments: "2.1K", reach: "612K", views: "612K" },
      { id: 3, title: "I Filmed Every Day For 30 Days — Here's What Happened", date: "Feb 28", emoji: "📹", bg: "#FDE8F0", likes: "71K", comments: "3.2K", reach: "1.1M", views: "1.1M" },
      { id: 4, title: "My Honest Creator Burnout Story", date: "Feb 14", emoji: "🫶", bg: "#F0FDF4", likes: "94K", comments: "5.8K", reach: "1.4M", views: "1.4M" },
    ],
    comments: [
      { avatar: "KP", username: "Kevin P.", text: "This changed the way I think about content completely. Thank you!", time: "30m ago", color: "#FF0000" },
      { avatar: "AT", username: "Alex T.", text: "I've watched this 3 times and keep learning something new each time 🙏", time: "2h ago", color: "#E8836A" },
      { avatar: "SL", username: "Sarah L.", text: "The burnout video literally made me cry. So much needed to hear this.", time: "4h ago", color: "#4CAF7D" },
    ],
  },
  "TikTok": {
    color: "#010101",
    stats: [
      { label: "Followers", value: "847K" },
      { label: "Videos", value: "1,240" },
      { label: "Avg Views", value: "280K" },
      { label: "Engagement Rate", value: "6.2%" },
    ],
    posts: [
      { id: 1, title: "Morning routine with me ✨ (Slow & Intentional)", date: "Mar 28", emoji: "☀️", bg: "#FEF3E2", likes: "187K", comments: "8.4K", reach: "2.1M", views: "2.1M" },
      { id: 2, title: "Replying to: what do you eat in a day?", date: "Mar 24", emoji: "🥗", bg: "#F0FDF4", likes: "92K", comments: "3.2K", reach: "1.1M", views: "1.1M" },
      { id: 3, title: "POV: Day in my life as a 1M follower creator", date: "Mar 20", emoji: "🎬", bg: "#F5F0FF", likes: "141K", comments: "5.7K", reach: "1.4M", views: "1.4M" },
      { id: 4, title: "3 things I stopped doing that changed everything", date: "Mar 15", emoji: "💡", bg: "#FFF7F5", likes: "78K", comments: "4.1K", reach: "890K", views: "890K" },
    ],
    comments: [
      { avatar: "GG", username: "@glowwithgrace", text: "Omg your morning routine video literally changed my life!!", time: "2m ago", color: "#E8836A" },
      { avatar: "TW", username: "@trendwatcher", text: "The way you explain things is so calming and clear 💕", time: "1h ago", color: "#818CF8" },
      { avatar: "NB", username: "@nobsbeauty", text: "Already ordered the products you mentioned! Trusting u completely", time: "3h ago", color: "#34D399" },
    ],
  },
  "Substack": {
    color: "#FF6719",
    stats: [
      { label: "Subscribers", value: "28K" },
      { label: "Paid Subs", value: "2,140" },
      { label: "Open Rate", value: "61%" },
      { label: "MRR", value: "$21,400" },
    ],
    posts: [
      { id: 1, title: "On Creator Burnout: What Nobody Tells You", date: "Mar 15", emoji: "🫶", bg: "#FFF7F5", likes: "8.2K", comments: "847", reach: "41K" },
      { id: 2, title: "The Attention Economy Is Breaking Us", date: "Mar 1", emoji: "🧠", bg: "#F0F4FF", likes: "6.4K", comments: "612", reach: "34K" },
      { id: 3, title: "My $200K Creator Year: Full Breakdown", date: "Feb 15", emoji: "💰", bg: "#F0FDF4", likes: "11.8K", comments: "1.2K", reach: "58K" },
      { id: 4, title: "Why I Almost Quit — And What Changed", date: "Jan 30", emoji: "🌿", bg: "#FDE8F0", likes: "14.2K", comments: "2.1K", reach: "72K" },
    ],
    comments: [
      { avatar: "MT", username: "Marcus T.", text: "Best $10/month I spend. Just upgraded to paid because of this essay.", time: "1h ago", color: "#FF6719" },
      { avatar: "PN", username: "Priya N.", text: "Had me in tears. You have such a gift for making people feel less alone.", time: "7h ago", color: "#FB7185" },
      { avatar: "CW", username: "Clare W.", text: "I shared this with my entire team. We all needed to read it.", time: "1d ago", color: "#60A5FA" },
    ],
  },
  "Facebook": {
    color: "#1877F2",
    stats: [
      { label: "Followers", value: "67K" },
      { label: "Posts", value: "328" },
      { label: "Avg Reach", value: "18K" },
      { label: "Engagement Rate", value: "2.1%" },
    ],
    posts: [
      { id: 1, title: "Work-life balance as a creative (shared from IG)", date: "Mar 30", emoji: "⚖️", bg: "#EFF6FF", likes: "2.8K", comments: "412", reach: "24K" },
      { id: 2, title: "Behind the brand: 5 years of creating", date: "Mar 20", emoji: "🎂", bg: "#FFF7F5", likes: "4.1K", comments: "623", reach: "31K" },
      { id: 3, title: "Community Q&A: Answering your questions!", date: "Mar 10", emoji: "❓", bg: "#F0FDF4", likes: "3.4K", comments: "891", reach: "28K" },
      { id: 4, title: "My favorite content creation tools 2025", date: "Mar 2", emoji: "🛠️", bg: "#FDE8F0", likes: "2.1K", comments: "287", reach: "19K" },
    ],
    comments: [
      { avatar: "LH", username: "Linda H.", text: "Shared to my group of 12,000 moms! Everyone loved it 🙏", time: "2h ago", color: "#1877F2" },
      { avatar: "DP", username: "Donna P.", text: "Been following since 2021 and you just keep getting better!", time: "5h ago", color: "#4CAF7D" },
      { avatar: "RN", username: "Rachel N.", text: "Your consistency is so inspiring. How do you stay motivated?", time: "8h ago", color: "#F59E0B" },
    ],
  },
};

export default function Platforms() {
  const [activePlatform, setActivePlatform] = useState<Platform>("Instagram Personal");

  const data = platformData[activePlatform];

  return (
    <div>
      <div className="page-header">
        <h2>Platforms</h2>
        <p>Detailed view of each platform — posts, comments, and reach</p>
      </div>

      {/* Platform Tabs */}
      <div className="tabs" style={{ overflowX: "auto" }}>
        {platforms.map((p) => (
          <button
            key={p}
            className={`tab-btn ${activePlatform === p ? "active" : ""}`}
            onClick={() => setActivePlatform(p)}
          >
            <span
              style={{
                display: "inline-block",
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: platformData[p].color,
                marginRight: 6,
              }}
            />
            {p}
          </button>
        ))}
      </div>

      {/* Stats Row */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16, padding: "28px 36px 16px" }}>
        {data.stats.map((s) => (
          <div key={s.label} className="card" style={{ padding: "18px 22px", borderTop: `3px solid ${data.color}` }}>
            <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-muted)", fontWeight: 600, marginBottom: 6 }}>{s.label}</div>
            <div style={{ fontFamily: "var(--font-heading)", fontSize: 24, fontWeight: 600, color: "var(--text-primary)" }}>{s.value}</div>
          </div>
        ))}
      </div>

      {/* Posts Grid */}
      <div className="section" style={{ paddingTop: 0 }}>
        <div className="card">
          <div className="card-title">Recent Posts</div>
          <div className="platform-post-grid">
            {data.posts.map((post) => (
              <div key={post.id} className="platform-post-card">
                <div className="post-thumbnail" style={{ background: post.bg }}>
                  {post.emoji}
                </div>
                <div className="post-meta">
                  <h4>{post.title}</h4>
                  <div style={{ fontSize: 11, color: "var(--text-muted)", marginBottom: 8 }}>{post.date}</div>
                  <div className="post-stats">
                    {post.views && (
                      <span className="post-stat">👁 {post.views}</span>
                    )}
                    <span className="post-stat">❤️ {post.likes}</span>
                    <span className="post-stat">💬 {post.comments}</span>
                    {!post.views && <span className="post-stat">📡 {post.reach}</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top Comments */}
      <div className="section" style={{ paddingTop: 0 }}>
        <div className="card">
          <div className="card-title">Recent Comments</div>
          {data.comments.map((c, i) => (
            <div key={i} className="comment-card">
              <div className="comment-header">
                <div className="comment-avatar" style={{ background: c.color + "22", color: c.color }}>
                  {c.avatar}
                </div>
                <div>
                  <div className="comment-username">{c.username}</div>
                  <div style={{ fontSize: 11, color: "var(--text-muted)" }}>{c.time}</div>
                </div>
              </div>
              <p className="comment-text">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
