"use client";

import { useState } from "react";
import { inboxMessages } from "@/lib/mock-data";
import type { InboxMessage } from "@/lib/mock-data";

const platforms = ["instagram", "tiktok", "youtube", "email"] as const;
const platformLabels: Record<string, string> = {
  instagram: "Instagram",
  tiktok: "TikTok",
  youtube: "YouTube",
  email: "Email",
};

function MessageRow({ msg }: { msg: InboxMessage }) {
  return (
    <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm">
      <div className="w-10 h-10 rounded-full bg-[#F0EAE0] flex items-center justify-center text-xs font-semibold text-[#2D2420] shrink-0">
        {msg.avatar}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-sm font-medium text-[#2D2420]">{msg.username}</span>
          <span className="text-xs text-[#C4845C]">{platformLabels[msg.platform]}</span>
        </div>
        <p className="text-sm text-[#2D2420]/70 truncate">{msg.preview}</p>
      </div>
      <div className="flex items-center gap-3 shrink-0">
        <span className="text-xs text-[#C4845C]">{msg.time}</span>
        {msg.replied ? (
          <span className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs">✓</span>
        ) : (
          <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
        )}
      </div>
    </div>
  );
}

export default function InboxPage() {
  const [hideStressful, setHideStressful] = useState(false);
  const [activePlatform, setActivePlatform] = useState<(typeof platforms)[number]>("instagram");

  const filtered = inboxMessages.filter((msg) => {
    if (msg.platform !== activePlatform) return false;
    if (hideStressful && msg.stressful) return false;
    return true;
  });

  return (
    <div className="max-w-4xl">
      <div className="flex items-center justify-between mb-8">
        <h1
          className="text-3xl font-semibold text-[#2D2420]"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          Unified Inbox
        </h1>
        <button
          onClick={() => setHideStressful(!hideStressful)}
          className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
            hideStressful
              ? "bg-[#C4687A] text-white"
              : "bg-white text-[#2D2420] border border-[#E8E0D4]"
          }`}
        >
          {hideStressful ? "Show All" : "Hide Stressful Comments"}
        </button>
      </div>

      {/* Platform Tabs */}
      <div className="flex gap-2 mb-6">
        {platforms.map((p) => (
          <button
            key={p}
            onClick={() => setActivePlatform(p)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
              activePlatform === p
                ? "bg-[#C4687A] text-white"
                : "bg-white text-[#2D2420] hover:bg-[#F0EAE0]"
            }`}
          >
            {platformLabels[p]}
          </button>
        ))}
      </div>

      {/* Messages */}
      <div className="space-y-3">
        {filtered.length === 0 ? (
          <div className="bg-white rounded-xl shadow-sm p-8 text-center">
            <p className="text-[#C4845C]">No messages to show</p>
          </div>
        ) : (
          filtered.map((msg) => <MessageRow key={msg.id} msg={msg} />)
        )}
      </div>
    </div>
  );
}
