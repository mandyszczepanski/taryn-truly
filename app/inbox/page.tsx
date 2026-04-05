"use client";

import { useState } from "react";
import { inboxThreads } from "../data/mockData";
import PlatformBadge from "../components/PlatformBadge";

const tabs = ["all", "tiktok", "instagram", "youtube", "pinterest", "substack", "facebook"];
const tabLabels: Record<string, string> = {
  all: "All",
  tiktok: "TikTok",
  instagram: "IG",
  youtube: "YouTube",
  pinterest: "Pinterest",
  substack: "Substack",
  facebook: "Facebook",
};

export default function InboxPage() {
  const [selectedThread, setSelectedThread] = useState<number | null>(null);
  const [respondedIds, setRespondedIds] = useState<Set<number>>(new Set());
  const [mentalHealthMode, setMentalHealthMode] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const [replyText, setReplyText] = useState("");

  const filteredThreads = inboxThreads.filter((t) => {
    if (mentalHealthMode && t.negative) return false;
    if (activeTab !== "all" && t.platform !== activeTab) return false;
    return true;
  });

  const selected = inboxThreads.find((t) => t.id === selectedThread);

  const toggleResponded = (id: number) => {
    setRespondedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <div className="px-6 md:px-10 py-8 max-w-6xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-primary-900">
          Unified Inbox
        </h1>
        <div className="flex items-center gap-3">
          <span className="text-sm text-primary-600">Mental Health Mode</span>
          <button
            onClick={() => setMentalHealthMode(!mentalHealthMode)}
            className={`relative w-12 h-6 rounded-full transition-colors ${
              mentalHealthMode ? "bg-accent-rose" : "bg-primary-200"
            }`}
          >
            <span
              className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform ${
                mentalHealthMode ? "translate-x-6" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Platform Tabs */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-1">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
              activeTab === tab
                ? "bg-accent-rose/35 text-primary-900 ring-1 ring-primary-300"
                : "bg-primary-100 text-primary-700 hover:bg-primary-200"
            }`}
          >
            {tabLabels[tab]}
          </button>
        ))}
      </div>

      {/* Split View */}
      <div className="flex bg-white rounded-2xl border border-primary-100 shadow-sm overflow-hidden" style={{ minHeight: 520 }}>
        {/* Left Panel */}
        <div className="w-full md:w-80 border-r border-primary-100 overflow-y-auto" style={{ maxHeight: 600 }}>
          {filteredThreads.map((thread) => (
            <div
              key={thread.id}
              onClick={() => setSelectedThread(thread.id)}
              className={`flex items-start gap-3 px-4 py-3 cursor-pointer border-b border-primary-50 transition-colors ${
                selectedThread === thread.id ? "bg-primary-50" : "hover:bg-primary-50/50"
              }`}
            >
              {/* Avatar */}
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0"
                style={{
                  backgroundColor:
                    thread.platform === "tiktok"
                      ? "#000"
                      : thread.platform === "instagram"
                      ? "#E1306C"
                      : thread.platform === "youtube"
                      ? "#FF0000"
                      : thread.platform === "pinterest"
                      ? "#E60023"
                      : "#FF6719",
                }}
              >
                {thread.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className={`text-sm ${thread.unread ? "font-bold" : "font-medium"} text-primary-900 truncate`}>
                    {thread.sender}
                  </span>
                  {thread.unread && (
                    <span className="w-2 h-2 rounded-full bg-accent-rose shrink-0" />
                  )}
                </div>
                <p className="text-xs text-primary-600 truncate mt-0.5">{thread.preview}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs text-primary-400">{thread.time}</span>
                  <PlatformBadge platform={thread.platform} />
                </div>
              </div>
              {/* Responded check */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleResponded(thread.id);
                }}
                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                  respondedIds.has(thread.id)
                    ? "border-green-500 bg-green-500 text-white"
                    : "border-primary-300 text-transparent hover:border-primary-400"
                }`}
              >
                ✓
              </button>
            </div>
          ))}
          {filteredThreads.length === 0 && (
            <div className="p-8 text-center text-primary-400 text-sm">No conversations</div>
          )}
        </div>

        {/* Right Panel */}
        <div className="hidden md:flex flex-col flex-1">
          {selected ? (
            <>
              {/* Thread Header */}
              <div className="px-6 py-4 border-b border-primary-100 flex items-center gap-3">
                <h3 className="font-bold text-primary-900">{selected.sender}</h3>
                <PlatformBadge platform={selected.platform} />
                <span className="text-xs text-primary-500 capitalize">{selected.type}</span>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto px-6 py-4 space-y-3">
                {selected.messages.map((msg, i) => (
                  <div key={i} className="flex flex-col">
                    <div className="max-w-md rounded-2xl px-4 py-2.5 bg-primary-100 text-primary-900">
                      <p className="text-sm">{msg.text}</p>
                    </div>
                    <span className="text-xs text-primary-400 mt-1">{msg.from} · {msg.time}</span>
                  </div>
                ))}
              </div>

              {/* Reply Input */}
              <div className="px-6 py-4 border-t border-primary-100">
                <div className="flex gap-3">
                  <textarea
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    placeholder="Write a reply..."
                    rows={2}
                    className="flex-1 border border-primary-200 rounded-xl px-4 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-accent-rose/50 bg-primary-50"
                  />
                  <button
                    className="px-5 py-2 bg-accent-mulberry text-white rounded-xl text-sm font-medium hover:bg-[#351015] transition-colors self-end"
                  >
                    Send Reply
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center text-primary-400 text-sm">
              Select a conversation
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
