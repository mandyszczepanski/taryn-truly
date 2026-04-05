// ============ DASHBOARD DATA ============

export const followerCounts = [
  { platform: "Instagram", handle: "@taryntruly", count: "284K", icon: "📸" },
  { platform: "YouTube", handle: "Taryn Truly", count: "89K", icon: "▶️" },
  { platform: "TikTok", handle: "@taryntruly", count: "412K", icon: "🎵" },
  { platform: "Substack", handle: "Taryn's Letter", count: "12K", icon: "✉️" },
];

export const growthData30d = [
  { day: "Mar 5", instagram: 271000, youtube: 85000, tiktok: 395000, substack: 10800 },
  { day: "Mar 8", instagram: 273000, youtube: 85500, tiktok: 398000, substack: 11000 },
  { day: "Mar 11", instagram: 274500, youtube: 86000, tiktok: 400000, substack: 11100 },
  { day: "Mar 14", instagram: 275000, youtube: 86200, tiktok: 402000, substack: 11200 },
  { day: "Mar 17", instagram: 276500, youtube: 86800, tiktok: 404000, substack: 11400 },
  { day: "Mar 20", instagram: 278000, youtube: 87200, tiktok: 406000, substack: 11500 },
  { day: "Mar 23", instagram: 279500, youtube: 87800, tiktok: 407500, substack: 11700 },
  { day: "Mar 26", instagram: 280500, youtube: 88200, tiktok: 409000, substack: 11800 },
  { day: "Mar 29", instagram: 282000, youtube: 88600, tiktok: 410500, substack: 11900 },
  { day: "Apr 1", instagram: 283000, youtube: 89000, tiktok: 411500, substack: 12000 },
  { day: "Apr 4", instagram: 284000, youtube: 89000, tiktok: 412000, substack: 12000 },
];

export const recentActivity = [
  { type: "follower", text: "You gained 1,200 new followers on TikTok today", time: "2 hours ago" },
  { type: "comment", text: "Your 'Morning Routine' reel hit 50K comments", time: "4 hours ago" },
  { type: "deal", text: "Fable & Mane approved final deliverable — payment incoming", time: "6 hours ago" },
  { type: "milestone", text: "You crossed 400K TikTok followers!", time: "1 day ago" },
  { type: "email", text: "New collaboration inquiry from Sakara Life", time: "1 day ago" },
  { type: "analytics", text: "Weekly engagement rate up 12% across all platforms", time: "2 days ago" },
];

// ============ INBOX DATA ============

export interface InboxMessage {
  id: string;
  platform: "instagram" | "tiktok" | "youtube" | "email";
  username: string;
  avatar: string;
  preview: string;
  time: string;
  replied: boolean;
  stressful: boolean;
}

export const inboxMessages: InboxMessage[] = [
  // Instagram
  { id: "ig1", platform: "instagram", username: "@cleanbeautylover", avatar: "CL", preview: "Omg I just tried the serum you recommended and my skin is GLOWING ✨", time: "12 min ago", replied: false, stressful: false },
  { id: "ig2", platform: "instagram", username: "@wellnessmom_", avatar: "WM", preview: "Do you have a discount code for Primally Pure?", time: "1 hr ago", replied: true, stressful: false },
  { id: "ig3", platform: "instagram", username: "@trollaccount99", avatar: "TA", preview: "You're so fake, everything you post is an ad 🙄", time: "2 hr ago", replied: false, stressful: true },
  { id: "ig4", platform: "instagram", username: "@skincarejunkie", avatar: "SJ", preview: "Can you do a full skincare routine video? Would love to see your night routine!", time: "3 hr ago", replied: false, stressful: false },
  { id: "ig5", platform: "instagram", username: "@negativenancy_", avatar: "NN", preview: "Must be nice to get free stuff all day while real people work", time: "4 hr ago", replied: false, stressful: true },
  { id: "ig6", platform: "instagram", username: "@holistichealth", avatar: "HH", preview: "Your content literally changed my morning routine. Thank you! 🙏", time: "5 hr ago", replied: true, stressful: false },

  // TikTok
  { id: "tt1", platform: "tiktok", username: "@vibecheck2024", avatar: "VC", preview: "This is the most aesthetic kitchen I've ever seen 😍", time: "20 min ago", replied: false, stressful: false },
  { id: "tt2", platform: "tiktok", username: "@haterwatcher", avatar: "HW", preview: "Another influencer pushing products nobody needs", time: "45 min ago", replied: false, stressful: true },
  { id: "tt3", platform: "tiktok", username: "@greenlifestyle", avatar: "GL", preview: "Where is that matcha set from?? Need it immediately", time: "1 hr ago", replied: true, stressful: false },
  { id: "tt4", platform: "tiktok", username: "@morningroutine", avatar: "MR", preview: "You inspired me to start journaling every morning 📝", time: "2 hr ago", replied: false, stressful: false },
  { id: "tt5", platform: "tiktok", username: "@wellnesswarrior", avatar: "WW", preview: "Collab idea: 7-day wellness challenge together??", time: "3 hr ago", replied: true, stressful: false },

  // YouTube
  { id: "yt1", platform: "youtube", username: "Sarah M.", avatar: "SM", preview: "This video came at the perfect time. Going through a tough season and needed this.", time: "30 min ago", replied: false, stressful: false },
  { id: "yt2", platform: "youtube", username: "Jake R.", avatar: "JR", preview: "The editing on this is SO good. What software do you use?", time: "1 hr ago", replied: true, stressful: false },
  { id: "yt3", platform: "youtube", username: "Anonymous", avatar: "AN", preview: "This is so boring, I fell asleep halfway through 😴", time: "2 hr ago", replied: false, stressful: true },
  { id: "yt4", platform: "youtube", username: "Lisa Chen", avatar: "LC", preview: "Can you do a full apartment tour? Your space looks so peaceful", time: "4 hr ago", replied: false, stressful: false },
  { id: "yt5", platform: "youtube", username: "Mia K.", avatar: "MK", preview: "Been watching since you had 10K subs. So proud of your growth! 🥹", time: "6 hr ago", replied: true, stressful: false },

  // Email
  { id: "em1", platform: "email", username: "partnerships@fableandmane.com", avatar: "FM", preview: "Re: Q2 Campaign — Final deliverables approved! Payment processing.", time: "1 hr ago", replied: true, stressful: false },
  { id: "em2", platform: "email", username: "collab@lmnt.com", avatar: "LM", preview: "Would love to discuss a longer-term partnership for 2026.", time: "3 hr ago", replied: false, stressful: false },
  { id: "em3", platform: "email", username: "press@wellnessmagazine.com", avatar: "WM", preview: "Feature request: '30 Under 30 Wellness Creators' — interested?", time: "5 hr ago", replied: false, stressful: false },
  { id: "em4", platform: "email", username: "legal@brandagency.com", avatar: "LA", preview: "Contract revision needed — some clauses require your review ASAP", time: "6 hr ago", replied: false, stressful: false },
  { id: "em5", platform: "email", username: "fan@gmail.com", avatar: "FN", preview: "You're such an inspiration! Just started my own wellness journey because of you.", time: "8 hr ago", replied: true, stressful: false },
];

// ============ ANALYTICS DATA ============

export const growthData90d = [
  { month: "Jan W1", instagram: 248000, youtube: 78000, tiktok: 350000, substack: 8500 },
  { month: "Jan W3", instagram: 252000, youtube: 79500, tiktok: 358000, substack: 8900 },
  { month: "Feb W1", instagram: 258000, youtube: 81000, tiktok: 368000, substack: 9400 },
  { month: "Feb W3", instagram: 264000, youtube: 83000, tiktok: 378000, substack: 10000 },
  { month: "Mar W1", instagram: 271000, youtube: 85000, tiktok: 390000, substack: 10800 },
  { month: "Mar W3", instagram: 278000, youtube: 87200, tiktok: 406000, substack: 11500 },
  { month: "Apr W1", instagram: 284000, youtube: 89000, tiktok: 412000, substack: 12000 },
];

export const growthData1yr = [
  { month: "May '25", instagram: 142000, youtube: 42000, tiktok: 180000, substack: 3200 },
  { month: "Jul '25", instagram: 168000, youtube: 50000, tiktok: 215000, substack: 4100 },
  { month: "Sep '25", instagram: 195000, youtube: 58000, tiktok: 258000, substack: 5200 },
  { month: "Nov '25", instagram: 220000, youtube: 66000, tiktok: 305000, substack: 6500 },
  { month: "Jan '26", instagram: 248000, youtube: 78000, tiktok: 350000, substack: 8500 },
  { month: "Mar '26", instagram: 278000, youtube: 87200, tiktok: 406000, substack: 11500 },
  { month: "Apr '26", instagram: 284000, youtube: 89000, tiktok: 412000, substack: 12000 },
];

export const engagementByPlatform = [
  { platform: "Instagram", engagement: 4.8, color: "#C4687A" },
  { platform: "TikTok", engagement: 6.2, color: "#2D2420" },
  { platform: "YouTube", engagement: 3.9, color: "#C4845C" },
  { platform: "Substack", engagement: 42.0, color: "#8B7355" },
];

export const topContent = [
  { title: "Morning Routine That Changed My Life", platform: "TikTok", reach: "2.1M", engagementRate: "8.4%" },
  { title: "Honest Review: Fable & Mane Hair Oil", platform: "YouTube", reach: "340K", engagementRate: "5.2%" },
  { title: "What I Eat in a Day (Realistic)", platform: "Instagram", reach: "892K", engagementRate: "6.1%" },
  { title: "Why I Left My Corporate Job", platform: "YouTube", reach: "520K", engagementRate: "7.8%" },
  { title: "Unpopular Wellness Opinions", platform: "TikTok", reach: "1.8M", engagementRate: "9.2%" },
];

// ============ BRAND DEALS DATA ============

export const brandDeals = [
  { name: "Hair Care Campaign", brand: "Fable & Mane", status: "Completed" as const, payoutStatus: "Paid" as const, amount: "$4,200" },
  { name: "Clean Beauty Collab", brand: "Primally Pure", status: "Active" as const, payoutStatus: "Pending" as const, amount: "$2,800" },
  { name: "Electrolyte Partnership", brand: "Lmnt", status: "Active" as const, payoutStatus: "Negotiating" as const, amount: "$6,500" },
  { name: "Wellness Box Feature", brand: "Sakara Life", status: "Completed" as const, payoutStatus: "Paid" as const, amount: "$3,000" },
];

// ============ PLATFORMS DATA ============

export interface PlatformPost {
  id: string;
  title: string;
  comments: number;
  reach: string;
  engagement: string;
}

export const platformPosts: Record<string, PlatformPost[]> = {
  "Instagram Personal": [
    { id: "ip1", title: "Sunday reset vibes — candles, journaling, and matcha 🍵", comments: 342, reach: "48K", engagement: "5.2%" },
    { id: "ip2", title: "Golden hour at the farmers market", comments: 218, reach: "35K", engagement: "4.8%" },
    { id: "ip3", title: "New hair, who dis? Finally tried the curtain bangs", comments: 567, reach: "72K", engagement: "6.1%" },
    { id: "ip4", title: "Apartment tour — my cozy corner makeover", comments: 445, reach: "61K", engagement: "5.5%" },
    { id: "ip5", title: "Morning pages & pour-over coffee kind of day", comments: 189, reach: "28K", engagement: "4.3%" },
  ],
  "Instagram Business": [
    { id: "ib1", title: "[Paid] Fable & Mane — my honest hair oil review", comments: 892, reach: "124K", engagement: "6.8%" },
    { id: "ib2", title: "[Paid] Primally Pure deodorant — 30-day test results", comments: 634, reach: "98K", engagement: "5.9%" },
    { id: "ib3", title: "Reel: 5 clean beauty swaps that actually work", comments: 1203, reach: "210K", engagement: "7.2%" },
    { id: "ib4", title: "[Paid] LMNT morning hydration routine", comments: 445, reach: "85K", engagement: "5.1%" },
    { id: "ib5", title: "Carousel: My top 10 wellness non-negotiables", comments: 756, reach: "142K", engagement: "6.4%" },
  ],
  "YouTube": [
    { id: "yt1", title: "What I Eat in a Day — Spring Edition", comments: 1842, reach: "340K", engagement: "5.2%" },
    { id: "yt2", title: "Why I Left My Corporate Job (Full Story)", comments: 2567, reach: "520K", engagement: "7.8%" },
    { id: "yt3", title: "Honest Review: Fable & Mane Hair Oil", comments: 1203, reach: "340K", engagement: "5.2%" },
    { id: "yt4", title: "My Morning Routine (Realistic, Not Aesthetic)", comments: 987, reach: "280K", engagement: "4.6%" },
    { id: "yt5", title: "Apartment Tour — Minimalist Wellness Space", comments: 1456, reach: "410K", engagement: "6.1%" },
    { id: "yt6", title: "Q&A: Answering Your Most Asked Questions", comments: 2134, reach: "295K", engagement: "5.8%" },
  ],
  "TikTok": [
    { id: "tk1", title: "Morning routine that changed my life ☀️", comments: 8934, reach: "2.1M", engagement: "8.4%" },
    { id: "tk2", title: "Unpopular wellness opinions — part 3", comments: 12456, reach: "1.8M", engagement: "9.2%" },
    { id: "tk3", title: "POV: you finally quit diet culture", comments: 5678, reach: "980K", engagement: "7.1%" },
    { id: "tk4", title: "Things I stopped buying as a minimalist", comments: 4321, reach: "750K", engagement: "6.5%" },
    { id: "tk5", title: "Farmers market haul + what I made with it", comments: 3456, reach: "620K", engagement: "5.8%" },
  ],
  "Substack": [
    { id: "ss1", title: "On Slowness: Why I'm Choosing Less This Season", comments: 89, reach: "8.2K", engagement: "48%" },
    { id: "ss2", title: "The Truth About Brand Deals (What I Wish I Knew)", comments: 124, reach: "9.5K", engagement: "52%" },
    { id: "ss3", title: "My Unplugged Weekend Experiment", comments: 67, reach: "7.1K", engagement: "44%" },
    { id: "ss4", title: "Letter #42: Finding Home in Yourself", comments: 156, reach: "10.2K", engagement: "55%" },
    { id: "ss5", title: "What Wellness Gets Wrong About Rest", comments: 98, reach: "8.8K", engagement: "46%" },
  ],
  "Facebook": [
    { id: "fb1", title: "New YouTube video is up! Link in comments 👇", comments: 45, reach: "12K", engagement: "2.1%" },
    { id: "fb2", title: "Throwback to last year's wellness retreat in Sedona", comments: 67, reach: "15K", engagement: "2.8%" },
    { id: "fb3", title: "Community question: what's your morning non-negotiable?", comments: 234, reach: "28K", engagement: "4.2%" },
    { id: "fb4", title: "Sharing my favorite spring recipes on the blog", comments: 38, reach: "9.5K", engagement: "1.9%" },
    { id: "fb5", title: "Thank you for 50K followers on this page! 🎉", comments: 312, reach: "42K", engagement: "5.1%" },
  ],
};
