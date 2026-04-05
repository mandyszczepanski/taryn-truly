"use client";

import { useState } from "react";

type Sentiment = "positive" | "neutral" | "negative";
type Platform = "TikTok" | "Instagram" | "YouTube" | "Substack" | "Facebook";

interface Thread {
  id: number;
  platform: Platform;
  sender: string;
  preview: string;
  fullMessage: string;
  time: string;
  sentiment: Sentiment;
  isRead: boolean;
  isChecked: boolean;
  avatarColor: string;
  avatarInitials: string;
}

const allThreads: Thread[] = [
  {
    id: 1, platform: "TikTok", sender: "@glowwithgrace", avatarInitials: "GG", avatarColor: "#E8836A",
    preview: "Omg your morning routine video literally changed my life!!",
    fullMessage: "Omg your morning routine video literally changed my life!! I've been struggling with motivation for months and watching you just made me feel so seen. The way you talked about slow mornings with intention — that's exactly what I needed. Thank you so much Taryn, you're genuinely one of a kind 💕",
    time: "2m ago", sentiment: "positive", isRead: false, isChecked: false,
  },
  {
    id: 2, platform: "Instagram", sender: "@wellness_jade", avatarInitials: "WJ", avatarColor: "#C4614A",
    preview: "Can you do a collab? My brand is launching next month",
    fullMessage: "Hi Taryn! I run a wellness brand and we're launching our new adaptogen line next month. We'd love to partner with you for an authentic sponsored post — our budget is flexible and we're big fans of your content style. Would you be open to chatting? DM me back if you're interested! 🌿",
    time: "15m ago", sentiment: "neutral", isRead: false, isChecked: false,
  },
  {
    id: 3, platform: "YouTube", sender: "Sarah M.", avatarInitials: "SM", avatarColor: "#4CAF7D",
    preview: "Why do you always post the same content over and over? So boring now",
    fullMessage: "Why do you always post the same content over and over? So boring now. I used to love your channel but it feels like you've been on autopilot for months. Every video is the same formula. No shade but you've definitely lost a step. Unfollowing now.",
    time: "32m ago", sentiment: "negative", isRead: true, isChecked: false,
  },
  {
    id: 4, platform: "Substack", sender: "Marcus T.", avatarInitials: "MT", avatarColor: "#60A5FA",
    preview: "Just upgraded to paid! Best $10/month I spend",
    fullMessage: "Just upgraded to paid! Best $10/month I spend — honestly your writing has been so thoughtful lately. The piece on creator burnout resonated deeply and I've shared it with 4 people already. Please keep doing what you're doing. The long-form format suits you perfectly.",
    time: "1h ago", sentiment: "positive", isRead: true, isChecked: false,
  },
  {
    id: 5, platform: "Facebook", sender: "Linda H.", avatarInitials: "LH", avatarColor: "#A78BFA",
    preview: "Shared your reel to my group of 12,000 moms!",
    fullMessage: "Shared your reel to my group of 12,000 moms! The one about navigating work/life balance as a creative — it blew up in our community. So many comments about how relatable you are. Would love to have you do a live Q&A for us sometime if you're ever interested! 🙏",
    time: "2h ago", sentiment: "positive", isRead: true, isChecked: true,
  },
  {
    id: 6, platform: "TikTok", sender: "@negativenancy22", avatarInitials: "NN", avatarColor: "#EF4444",
    preview: "Your advice is so generic and everyone knows it. Stop pretending",
    fullMessage: "Your advice is so generic and everyone knows it. Stop pretending to be authentic when your whole life is clearly curated for content. Real people don't live like this. You're just selling a fantasy.",
    time: "3h ago", sentiment: "negative", isRead: true, isChecked: false,
  },
  {
    id: 7, platform: "Instagram", sender: "@beautybyjenna", avatarInitials: "BJ", avatarColor: "#F59E0B",
    preview: "Your GRWM was perfection — which bronzer was that??",
    fullMessage: "Your GRWM was absolute perfection — which bronzer was that?? Your skin looked incredible and I need it in my life immediately. Also your lashes! Are those your natural lashes or extensions? You always look so effortlessly glowy. Please do a full skincare routine breakdown soon! 🥹",
    time: "4h ago", sentiment: "positive", isRead: false, isChecked: false,
  },
  {
    id: 8, platform: "YouTube", sender: "Kevin P.", avatarInitials: "KP", avatarColor: "#34D399",
    preview: "Question about your camera setup? Making a similar vlog",
    fullMessage: "Hi Taryn, huge fan here. I'm a small creator just starting out and I love your vlog style — the color grading especially is so warm and cinematic. Would you mind sharing what camera and lens combo you use? And do you edit in Premiere or Final Cut? No worries if you'd rather not share, just thought I'd ask!",
    time: "5h ago", sentiment: "neutral", isRead: true, isChecked: false,
  },
  {
    id: 9, platform: "Substack", sender: "Priya N.", avatarInitials: "PN", avatarColor: "#FB7185",
    preview: "Your latest essay had me in tears — thank you",
    fullMessage: "Your latest essay had me in absolute tears — the vulnerability you showed about imposter syndrome as a creator was something I've never seen anyone articulate so well. I forwarded it to my sister who's been struggling with the same thing. You have such a gift for making people feel less alone. Thank you for sharing that part of yourself.",
    time: "7h ago", sentiment: "positive", isRead: true, isChecked: true,
  },
  {
    id: 10, platform: "TikTok", sender: "@trendwatcher", avatarInitials: "TW", avatarColor: "#818CF8",
    preview: "This trend is dead now lol, you're always late",
    fullMessage: "This trend is dead now lol, you're always late to everything. By the time you post about something it's already been overdone by 500 other creators. Maybe try being original for once instead of just copying what everyone else does.",
    time: "8h ago", sentiment: "negative", isRead: true, isChecked: false,
  },
];

const platformColors: Record<Platform, string> = {
  TikTok: "#000000",
  Instagram: "#E1306C",
  YouTube: "#FF0000",
  Substack: "#FF6719",
  Facebook: "#1877F2",
};

const platforms: (Platform | "All")[] = ["All", "TikTok", "Instagram", "YouTube", "Substack", "Facebook"];

export default function Inbox() {
  const [mentalHealthMode, setMentalHealthMode] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | "All">("All");
  const [selectedThread, setSelectedThread] = useState<Thread>(allThreads[0]);
  const [threads, setThreads] = useState(allThreads);

  const filteredThreads = threads.filter((t) => {
    if (mentalHealthMode && t.sentiment === "negative") return false;
    if (selectedPlatform !== "All" && t.platform !== selectedPlatform) return false;
    return true;
  });

  const toggleCheck = (id: number) => {
    setThreads((prev) => prev.map((t) => t.id === id ? { ...t, isChecked: !t.isChecked } : t));
  };

  const markRead = (thread: Thread) => {
    setSelectedThread(thread);
    setThreads((prev) => prev.map((t) => t.id === thread.id ? { ...t, isRead: true } : t));
  };

  return (
    <div>
      <div className="page-header">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <h2>Unified Inbox</h2>
            <p>All messages across every platform in one place</p>
          </div>
          <label className="toggle-wrap">
            <span>🧠 Mental Health Mode</span>
            <label className="toggle">
              <input
                type="checkbox"
                checked={mentalHealthMode}
                onChange={(e) => setMentalHealthMode(e.target.checked)}
              />
              <span className="toggle-slider" />
            </label>
          </label>
        </div>
      </div>

      {mentalHealthMode && (
        <div style={{ background: "#FFF7F5", borderBottom: "1px solid #F5D5CB", padding: "10px 36px", fontSize: 13, color: "#C4614A", display: "flex", alignItems: "center", gap: 8 }}>
          <span>🌸</span>
          <span>Mental Health Mode is <strong>on</strong> — {allThreads.filter(t => t.sentiment === "negative").length} negative threads are hidden. You&apos;re doing amazing.</span>
        </div>
      )}

      {/* Platform Filter Tabs */}
      <div className="tabs">
        {platforms.map((p) => (
          <button
            key={p}
            className={`tab-btn ${selectedPlatform === p ? "active" : ""}`}
            onClick={() => setSelectedPlatform(p)}
          >
            {p}
            {p !== "All" && (
              <span style={{ marginLeft: 6, fontSize: 11, color: selectedPlatform === p ? "var(--accent)" : "var(--text-muted)" }}>
                ({allThreads.filter(t => t.platform === p && !t.isRead).length > 0
                  ? allThreads.filter(t => t.platform === p && !t.isRead).length
                  : allThreads.filter(t => t.platform === p).length})
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Split View */}
      <div className="inbox-layout">
        {/* Thread List */}
        <div className="thread-list">
          {filteredThreads.length === 0 ? (
            <div style={{ padding: "40px 24px", textAlign: "center", color: "var(--text-muted)" }}>
              <div style={{ fontSize: 32, marginBottom: 12 }}>🌸</div>
              <p style={{ fontSize: 13 }}>No messages here.<br />You&apos;re all caught up!</p>
            </div>
          ) : filteredThreads.map((thread) => (
            <div
              key={thread.id}
              className={`thread-item ${!thread.isRead ? "unread" : ""} ${selectedThread?.id === thread.id ? "active" : ""}`}
              onClick={() => markRead(thread)}
            >
              <div className="thread-avatar" style={{ background: thread.avatarColor }}>
                {thread.avatarInitials}
              </div>
              <div className="thread-info">
                <div className="thread-sender">{thread.sender}</div>
                <div className="thread-preview">{thread.preview}</div>
              </div>
              <div className="thread-meta">
                <span className="thread-time">{thread.time}</span>
                <span
                  style={{
                    display: "inline-block",
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: platformColors[thread.platform],
                    flexShrink: 0,
                  }}
                  title={thread.platform}
                />
                {!thread.isRead && (
                  <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--accent)" }} />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Thread Detail */}
        {selectedThread && (
          <div className="thread-detail">
            <div className="thread-detail-header">
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 16 }}>
                <div>
                  <h3>{selectedThread.sender}</h3>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 4 }}>
                    <span
                      style={{
                        display: "inline-block",
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        background: platformColors[selectedThread.platform],
                      }}
                    />
                    <span style={{ fontSize: 12, color: "var(--text-muted)", fontWeight: 500 }}>{selectedThread.platform}</span>
                    <span style={{ fontSize: 12, color: "var(--text-muted)" }}>·</span>
                    <span style={{ fontSize: 12, color: "var(--text-muted)" }}>{selectedThread.time}</span>
                    {selectedThread.sentiment === "positive" && <span className="badge badge-emerald">Positive</span>}
                    {selectedThread.sentiment === "neutral" && <span className="badge badge-slate">Neutral</span>}
                    {selectedThread.sentiment === "negative" && (
                      <span style={{ background: "#FEE2E2", color: "#991B1B", padding: "2px 10px", borderRadius: 999, fontSize: 11.5, fontWeight: 600 }}>Negative</span>
                    )}
                  </div>
                </div>
                <button
                  onClick={() => toggleCheck(selectedThread.id)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    padding: "7px 14px",
                    borderRadius: "var(--radius-sm)",
                    fontSize: 12.5,
                    fontWeight: 500,
                    background: threads.find(t => t.id === selectedThread.id)?.isChecked ? "#D1FAE5" : "var(--bg)",
                    color: threads.find(t => t.id === selectedThread.id)?.isChecked ? "#065F46" : "var(--text-muted)",
                    border: "1px solid var(--border)",
                    cursor: "pointer",
                  }}
                >
                  {threads.find(t => t.id === selectedThread.id)?.isChecked ? "✓ Done" : "Mark Done"}
                </button>
              </div>
            </div>

            <div className="thread-message">
              {selectedThread.fullMessage}
            </div>

            <div style={{ marginTop: 20 }}>
              <div style={{ display: "flex", gap: 10 }}>
                <div style={{ flex: 1, border: "1px solid var(--border)", borderRadius: "var(--radius-sm)", padding: "10px 14px", fontSize: 13, color: "var(--text-muted)", background: "var(--bg)" }}>
                  Reply to {selectedThread.sender}...
                </div>
                <button className="btn-primary">Reply</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
