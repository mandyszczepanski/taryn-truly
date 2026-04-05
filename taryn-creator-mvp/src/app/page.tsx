"use client";

import { useState } from "react";
import Dashboard from "@/components/Dashboard";
import Inbox from "@/components/Inbox";
import Analytics from "@/components/Analytics";

type View = "dashboard" | "inbox" | "analytics";

export default function Home() {
  const [view, setView] = useState<View>("dashboard");

  return (
    <div className="app-layout">
      <aside className="sidebar">
        <div className="sidebar-logo">
          <h1>Taryn</h1>
          <p>Creator Command Center</p>
        </div>

        <nav className="sidebar-nav">
          <button
            className={`nav-item ${view === "dashboard" ? "active" : ""}`}
            onClick={() => setView("dashboard")}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
            </svg>
            Dashboard
          </button>

          <button
            className={`nav-item ${view === "inbox" ? "active" : ""}`}
            onClick={() => setView("inbox")}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
            </svg>
            Unified Inbox
          </button>

          <button
            className={`nav-item ${view === "analytics" ? "active" : ""}`}
            onClick={() => setView("analytics")}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
            </svg>
            Analytics
          </button>

          <button className="nav-item">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            Content Calendar
          </button>

          <button className="nav-item">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
            </svg>
            Sponsorships
          </button>

          <button className="nav-item">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="3" /><path d="M19.07 4.93l-1.41 1.41M5.34 17.66l-1.41 1.41M19.07 19.07l-1.41-1.41M5.34 6.34L3.93 4.93M21 12h-2M5 12H3M12 21v-2M12 5V3" />
            </svg>
            Settings
          </button>
        </nav>

        <div className="sidebar-footer">
          <div className="sidebar-avatar">
            <div className="avatar-circle">TT</div>
            <div className="sidebar-avatar-info">
              <p>Taryn Truly</p>
              <span>Creator Pro</span>
            </div>
          </div>
        </div>
      </aside>

      <main className="main-content">
        {view === "dashboard" && <Dashboard />}
        {view === "inbox" && <Inbox />}
        {view === "analytics" && <Analytics />}
      </main>
    </div>
  );
}
