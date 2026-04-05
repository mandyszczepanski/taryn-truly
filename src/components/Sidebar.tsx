"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Dashboard", href: "/dashboard", icon: "◈" },
  { label: "Unified Inbox", href: "/dashboard/inbox", icon: "✦" },
  { label: "Analytics", href: "/dashboard/analytics", icon: "◉" },
  { label: "Brand Deals", href: "/dashboard/brand-deals", icon: "❖" },
  { label: "Platforms", href: "/dashboard/platforms", icon: "◎" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 min-h-screen bg-[#FAF7F2] border-r border-[#E8E0D4] flex flex-col py-8 px-5">
      <div className="mb-10 px-3">
        <h1
          className="text-2xl font-semibold text-[#2D2420] tracking-tight"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          TarynTruly
        </h1>
        <p className="text-xs text-[#C4845C] mt-1 tracking-wide uppercase">Command Center</p>
      </div>

      <nav className="flex flex-col gap-1 flex-1">
        {navItems.map((item) => {
          const isActive =
            item.href === "/dashboard"
              ? pathname === "/dashboard"
              : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                isActive
                  ? "bg-[#C4687A] text-white shadow-sm"
                  : "text-[#2D2420] hover:bg-[#F0EAE0]"
              }`}
            >
              <span className="text-base">{item.icon}</span>
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="px-3 pt-6 border-t border-[#E8E0D4]">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#C4687A] flex items-center justify-center text-white text-sm font-medium">
            TT
          </div>
          <div>
            <p className="text-sm font-medium text-[#2D2420]">Taryn Truly</p>
            <p className="text-xs text-[#C4845C]">Creator</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
