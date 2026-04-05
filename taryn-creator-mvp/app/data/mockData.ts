export const platforms = [
  { id: "tiktok", name: "TikTok", emoji: "🎵", followers: 2400000, growth: 3.2, engagement: 5.8, color: "#000000", posts: 24 },
  { id: "instagram", name: "Instagram", emoji: "📸", followers: 890000, growth: 1.8, engagement: 3.4, color: "#E1306C", posts: 18 },
  { id: "youtube", name: "YouTube", emoji: "▶️", followers: 340000, growth: 4.1, engagement: 6.2, color: "#FF0000", posts: 8 },
  { id: "pinterest", name: "Pinterest", emoji: "📌", followers: 120000, growth: 2.3, engagement: 2.1, color: "#E60023", posts: 42 },
  { id: "substack", name: "Substack", emoji: "✉️", followers: 45000, growth: 8.7, engagement: 12.4, color: "#FF6719", posts: 4 },
];

export const followerGrowthData: Record<string, Array<Record<string, string | number>>> = {
  "30d": [
    { date: "Mar 5", tiktok: 2310000, instagram: 875000, youtube: 328000, pinterest: 117000, substack: 41000 },
    { date: "Mar 10", tiktok: 2330000, instagram: 878000, youtube: 331000, pinterest: 118000, substack: 42000 },
    { date: "Mar 15", tiktok: 2350000, instagram: 881000, youtube: 333000, pinterest: 119000, substack: 43000 },
    { date: "Mar 20", tiktok: 2370000, instagram: 884000, youtube: 336000, pinterest: 119500, substack: 44000 },
    { date: "Mar 25", tiktok: 2385000, instagram: 887000, youtube: 338000, pinterest: 120000, substack: 44500 },
    { date: "Apr 4", tiktok: 2400000, instagram: 890000, youtube: 340000, pinterest: 120000, substack: 45000 },
  ],
  "90d": [
    { date: "Jan", tiktok: 2200000, instagram: 840000, youtube: 305000, pinterest: 112000, substack: 36000 },
    { date: "Feb", tiktok: 2280000, instagram: 858000, youtube: 320000, pinterest: 115000, substack: 40000 },
    { date: "Mar", tiktok: 2350000, instagram: 875000, youtube: 333000, pinterest: 118000, substack: 43000 },
    { date: "Apr", tiktok: 2400000, instagram: 890000, youtube: 340000, pinterest: 120000, substack: 45000 },
  ],
  "1yr": [
    { date: "Apr 25", tiktok: 1800000, instagram: 720000, youtube: 240000, pinterest: 95000, substack: 22000 },
    { date: "Jun 25", tiktok: 1950000, instagram: 760000, youtube: 265000, pinterest: 103000, substack: 28000 },
    { date: "Aug 25", tiktok: 2100000, instagram: 800000, youtube: 290000, pinterest: 110000, substack: 33000 },
    { date: "Oct 25", tiktok: 2200000, instagram: 830000, youtube: 308000, pinterest: 114000, substack: 38000 },
    { date: "Dec 25", tiktok: 2320000, instagram: 865000, youtube: 325000, pinterest: 117000, substack: 42000 },
    { date: "Apr 26", tiktok: 2400000, instagram: 890000, youtube: 340000, pinterest: 120000, substack: 45000 },
  ],
};

export const inboxThreads = [
  { id: 1, platform: "tiktok", type: "dm", sender: "Ashley R.", avatar: "A", preview: "omg your skincare routine video changed my LIFE 😭", time: "2m ago", unread: true, negative: false, messages: [
    { from: "Ashley R.", text: "omg your skincare routine video changed my LIFE 😭", time: "2m ago" },
    { from: "Ashley R.", text: "what moisturizer do you use at night? I need to know everything", time: "1m ago" },
  ]},
  { id: 2, platform: "instagram", type: "dm", sender: "Maya K.", avatar: "M", preview: "Would love to collaborate on something!", time: "15m ago", unread: true, negative: false, messages: [
    { from: "Maya K.", text: "Hi Taryn! I absolutely love your content. Would love to collaborate on something together!", time: "15m ago" },
  ]},
  { id: 3, platform: "tiktok", type: "comment", sender: "hater_anon99", avatar: "H", preview: "you look so fake in this video lol", time: "22m ago", unread: true, negative: true, messages: [
    { from: "hater_anon99", text: "you look so fake in this video lol", time: "22m ago" },
    { from: "hater_anon99", text: "nobody actually believes you are like this irl", time: "20m ago" },
  ]},
  { id: 4, platform: "youtube", type: "comment", sender: "BeautyWithSophie", avatar: "B", preview: "This tutorial is exactly what I needed!", time: "1h ago", unread: false, negative: false, messages: [
    { from: "BeautyWithSophie", text: "This tutorial is exactly what I needed! I have been struggling with my under-eye routine and this fixed everything.", time: "1h ago" },
  ]},
  { id: 5, platform: "instagram", type: "comment", sender: "trollmaster2024", avatar: "T", preview: "must be nice being paid to do nothing", time: "1h ago", unread: true, negative: true, messages: [
    { from: "trollmaster2024", text: "must be nice being paid to do nothing 🙄", time: "1h ago" },
  ]},
  { id: 6, platform: "substack", type: "dm", sender: "Jennifer W.", avatar: "J", preview: "Your essay on burnout resonated so deeply with me", time: "2h ago", unread: false, negative: false, messages: [
    { from: "Jennifer W.", text: "Your essay on burnout resonated so deeply with me. I am a nurse and I feel everything you described. Thank you for being so honest.", time: "2h ago" },
  ]},
  { id: 7, platform: "tiktok", type: "comment", sender: "glowup_girlies", avatar: "G", preview: "literally the most educational creator on here 🌟", time: "3h ago", unread: false, negative: false, messages: [
    { from: "glowup_girlies", text: "literally the most educational creator on here 🌟 not even exaggerating", time: "3h ago" },
  ]},
  { id: 8, platform: "pinterest", type: "dm", sender: "StyleByNova", avatar: "S", preview: "Would you be open to a board collaboration?", time: "4h ago", unread: false, negative: false, messages: [
    { from: "StyleByNova", text: "Hi! I run a lifestyle board with 2M monthly views. Would you be open to a board collaboration? I think our aesthetics align perfectly.", time: "4h ago" },
  ]},
  { id: 9, platform: "instagram", type: "comment", sender: "random_guy_444", avatar: "R", preview: "this is cringe lmao delete this", time: "5h ago", unread: false, negative: true, messages: [
    { from: "random_guy_444", text: "this is cringe lmao delete this", time: "5h ago" },
  ]},
  { id: 10, platform: "youtube", type: "dm", sender: "BrandPartners_HQ", avatar: "B", preview: "Partnership opportunity — $15K campaign", time: "6h ago", unread: true, negative: false, messages: [
    { from: "BrandPartners_HQ", text: "Hi Taryn, we represent a clean beauty brand and would love to discuss a $15K sponsored campaign. Would you be available for a call this week?", time: "6h ago" },
  ]},
  { id: 11, platform: "tiktok", type: "comment", sender: "wellness.with.cara", avatar: "W", preview: "Please do a video on your morning routine!", time: "7h ago", unread: false, negative: false, messages: [
    { from: "wellness.with.cara", text: "Please please please do a video on your full morning routine! I watch your vids every single morning.", time: "7h ago" },
  ]},
  { id: 12, platform: "substack", type: "dm", sender: "PodcastHost_Em", avatar: "P", preview: "Would love to have you on our show!", time: "8h ago", unread: false, negative: false, messages: [
    { from: "PodcastHost_Em", text: "Hi Taryn! I host a wellness podcast with 120K listeners. Would love to have you on to talk about your creator journey and mental health advocacy.", time: "8h ago" },
  ]},
];

export const recentActivity = [
  { platform: "tiktok", emoji: "🎵", text: "Posted new TikTok: \"My morning skin ritual 🌸\"", time: "2h ago", metric: "48K views" },
  { platform: "instagram", emoji: "📸", text: "New Instagram Reel: \"GRWM for a cozy Sunday\"", time: "5h ago", metric: "12K likes" },
  { platform: "youtube", emoji: "▶️", text: "YouTube Short: \"3-step glass skin tutorial\"", time: "1d ago", metric: "89K views" },
  { platform: "substack", emoji: "✉️", text: "Published: \"On burnout, boundaries, and beauty\"", time: "2d ago", metric: "68% open rate" },
  { platform: "pinterest", emoji: "📌", text: "New board: \"Spring Wellness Rituals 2026\"", time: "3d ago", metric: "4.2K saves" },
];

export const topContent: Record<string, Array<{ title: string; platform: string; views: string; likes: string; comments: string }>> = {
  "30d": [
    { title: "My morning skin ritual 🌸", platform: "tiktok", views: "2.1M", likes: "184K", comments: "8.2K" },
    { title: "GRWM for a cozy Sunday", platform: "instagram", views: "890K", likes: "72K", comments: "3.1K" },
    { title: "3-step glass skin tutorial", platform: "youtube", views: "340K", likes: "28K", comments: "1.8K" },
    { title: "On burnout, boundaries, and beauty", platform: "substack", views: "18K opens", likes: "—", comments: "412" },
    { title: "Spring Wellness Rituals 2026", platform: "pinterest", views: "—", likes: "—", comments: "4.2K saves" },
  ],
  "90d": [
    { title: "Why I quit social media for 30 days", platform: "youtube", views: "1.2M", likes: "94K", comments: "12.4K" },
    { title: "Honest review: $400 face cream", platform: "tiktok", views: "8.4M", likes: "620K", comments: "42K" },
    { title: "What my therapist taught me", platform: "substack", views: "52K opens", likes: "—", comments: "1.1K" },
    { title: "Winter skincare haul", platform: "instagram", views: "2.1M", likes: "180K", comments: "9.4K" },
    { title: "Slow morning inspo board", platform: "pinterest", views: "—", likes: "—", comments: "18K saves" },
  ],
  "1yr": [
    { title: "I hit 2 million followers", platform: "tiktok", views: "18M", likes: "1.4M", comments: "88K" },
    { title: "My 2025 year in review", platform: "youtube", views: "4.2M", likes: "310K", comments: "28K" },
    { title: "The brand deal that changed everything", platform: "substack", views: "124K opens", likes: "—", comments: "3.2K" },
    { title: "2025 wellness routine (full)", platform: "instagram", views: "6.8M", likes: "540K", comments: "32K" },
    { title: "Annual beauty favorites", platform: "pinterest", views: "—", likes: "—", comments: "94K saves" },
  ],
};
