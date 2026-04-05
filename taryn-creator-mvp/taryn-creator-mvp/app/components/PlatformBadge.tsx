const platformColors: Record<string, { bg: string; text: string; label: string }> = {
  tiktok: { bg: "bg-black", text: "text-white", label: "TikTok" },
  instagram: { bg: "bg-pink-500", text: "text-white", label: "Instagram" },
  youtube: { bg: "bg-red-600", text: "text-white", label: "YouTube" },
  pinterest: { bg: "bg-red-500", text: "text-white", label: "Pinterest" },
  substack: { bg: "bg-orange-500", text: "text-white", label: "Substack" },
};

export default function PlatformBadge({ platform }: { platform: string }) {
  const p = platformColors[platform] || { bg: "bg-gray-400", text: "text-white", label: platform };
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${p.bg} ${p.text}`}>
      {p.label}
    </span>
  );
}
