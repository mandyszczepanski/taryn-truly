"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Dashboard", icon: "📊" },
  { href: "/inbox", label: "Inbox", icon: "📬" },
  { href: "/analytics", label: "Analytics", icon: "📈" },
  { href: "/brand-deals", label: "Brand Deals", icon: "🤝" },
  { href: "/platforms", label: "Platforms", icon: "🧩" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden md:flex flex-col w-64 min-h-screen border-r border-primary-200 bg-primary-50 px-6 py-8">
        <div className="mb-10">
          <h1 className="text-2xl font-bold text-primary-900" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
            Taryn Truly
          </h1>
          <p className="text-sm text-accent-clay mt-1">Creator Command Center</p>
        </div>
        <nav className="flex flex-col gap-1">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-full text-sm font-medium transition-colors ${
                  active
                    ? "bg-accent-rose/35 text-primary-900 ring-1 ring-primary-300"
                    : "text-primary-700 hover:bg-primary-100"
                }`}
              >
                <span>{link.icon}</span>
                {link.label}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Mobile bottom nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-primary-50 border-t border-primary-200 flex justify-around py-2">
        {links.map((link) => {
          const active = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex flex-col items-center gap-0.5 px-4 py-1.5 rounded-xl text-xs font-medium transition-colors ${
                active
                  ? "bg-accent-rose/35 text-primary-900 ring-1 ring-primary-300"
                  : "text-primary-700"
              }`}
            >
              <span className="text-lg">{link.icon}</span>
              {link.label}
            </Link>
          );
        })}
      </nav>
    </>
  );
}
