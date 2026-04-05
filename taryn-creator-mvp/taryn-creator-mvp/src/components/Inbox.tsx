"use client";

import { useState } from "react";

const threads = [
  {
    id: 1,
    sender: "Glossier Brand",
    platform: "instagram",
    badge: "badge-instagram",
    preview: "Hi Taryn! We'd love to discuss a collaboration...",
    time: "2m",
    messages: [
      { from: "them", text: "Hi Taryn! We'd love to discuss a potential collaboration for our spring skincare line. Would you be open to a call this week?" },
      { from: "me", text: "Hi! I'd love to hear more about this 🌸 What kind of content are you envisioning?" },
      { from: "them", text: "We're thinking 2-3 Instagram posts + 1 Reel showing your morning skincare routine. Budget is flexible for the right creator." },
    ],
  },
  {
    id: 2,
    sender: "@beautybysarah",
    platform: "instagram",
    badge: "badge-instagram",
    preview: "Omg Taryn your morning routine video is AMAZING",
    time: "1h",
    messages: [
      { from: "them", text: "Omg Taryn your morning routine video is AMAZING 😍 What moisturizer do you use at the end??" },
      { from: "me", text: "Thank you so much!! It's the Tatcha Water Cream — absolute game changer for my skin type 💕" },
    ],
  },
  {
    id: 3,
    sender: "TikTok Creator",
    platform: "tiktok",
    badge: "badge-tiktok",
    preview: "Your GRWM blew up!! 500K views 🔥",
    time: "3h",
    messages: [
      { from: "them", text: "Your GRWM blew up!! 500K views 🔥 How do you come up with your ideas??" },
    ],
  },
  {
    id: 4,
    sender: "Sephora Collab",
    platform: "youtube",
    badge: "badge-youtube",
    preview: "Partnership proposal — Q2 campaign",
    time: "5h",
    messages: [
      { from: "them", text: "Hi Taryn, I'm reaching out from Sephora's creator partnerships team. We have an exciting Q2 campaign we'd love to discuss with you." },
    ],
  },
  {
    id: 5,
    sender: "@wellness.girl",
    platform: "instagram",
    badge: "badge-instagram",
    preview: "Can we do a collab? I do similar content!",
    time: "1d",
    messages: [
      { from: "them", text: "Can we do a collab? I do similar content about wellness + beauty and I think our audiences would love us together!" },
    ],
  },
];

export default function Inbox() {
  const [activeThread, setActiveThread] = useState(threads[0]);
  const [mhMode, setMhMode] = useState(false);
  const [reply, setReply] = useState("");

  return (
    <>
      <div className="page-header">
        <div className="flex items-center justify-between">
          <div>
            <h2>Unified Inbox</h2>
            <p>All your DMs and brand inquiries in one place</p>
          </div>
          <button
            className="mh-toggle-wrapper"
            onClick={() => setMhMode(!mhMode)}
            style={{ border: "none", background: "white", boxShadow: "0 2px 12px rgba(44,24,16,0.06)", cursor: "pointer" }}
          >
            <div style={{ lineHeight: 1 }}>
              <div className="mh-toggle-label">Mental Health Mode</div>
              <div style={{ fontSize: 11, color: "var(--clay)", marginTop: 2 }}>
                {mhMode ? "Filtering negative messages" : "Showing all messages"}
              </div>
            </div>
            <div className={`toggle-switch ${mhMode ? "on" : ""}`}>
              <div className="toggle-knob" />
            </div>
          </button>
        </div>
      </div>

      <div className="page-content">
        <div className="inbox-layout">
          {/* Thread List */}
          <div className="thread-list">
            <div className="thread-list-header">
              <h3>Messages</h3>
              <div className="flex gap-8">
                {["All", "Brands", "Fans", "Collab"].map((f) => (
                  <button key={f} className={`filter-btn ${f === "All" ? "active" : ""}`} style={{ padding: "5px 12px", fontSize: 11 }}>
                    {f}
                  </button>
                ))}
              </div>
            </div>
            {threads.map((t) => (
              <div
                key={t.id}
                className={`thread-item ${activeThread.id === t.id ? "active" : ""}`}
                onClick={() => setActiveThread(t)}
              >
                <div className="thread-item-header">
                  <div className="flex items-center gap-8">
                    <span className="thread-sender">{t.sender}</span>
                    <span className={`badge ${t.badge}`} style={{ fontSize: 9, padding: "2px 6px" }}>
                      {t.platform}
                    </span>
                  </div>
                  <span className="thread-time">{t.time}</span>
                </div>
                <div className="thread-preview">{t.preview}</div>
              </div>
            ))}
          </div>

          {/* Thread View */}
          <div className="thread-view">
            <div className="thread-view-header">
              <div className="flex items-center gap-12">
                <div className="avatar-circle" style={{ background: "var(--cream)", color: "var(--clay)", fontSize: 14 }}>
                  {activeThread.sender[0]}
                </div>
                <div>
                  <h3>{activeThread.sender}</h3>
                  <div className="flex items-center gap-8">
                    <span className={`badge ${activeThread.badge}`}>{activeThread.platform}</span>
                    <p>Last message {activeThread.time} ago</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="thread-messages">
              {mhMode && (
                <div style={{ background: "#fdf0ed", borderRadius: 12, padding: "10px 14px", fontSize: 12, color: "var(--clay)", display: "flex", alignItems: "center", gap: 8 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                  Mental Health Mode is on — negative or harmful messages are hidden
                </div>
              )}

              {activeThread.messages.map((msg, i) => (
                <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: msg.from === "me" ? "flex-end" : "flex-start" }}>
                  <div className={`message-bubble ${msg.from === "me" ? "sent" : "received"}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="thread-input">
              <input
                type="text"
                placeholder="Write a reply..."
                value={reply}
                onChange={(e) => setReply(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && setReply("")}
              />
              <button className="btn-send" onClick={() => setReply("")}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
