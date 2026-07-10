export type ProjectCategory = "ระบบ" | "ข้อมูล" | "ครีเอทีฟ" | "กิจกรรม";

export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  category: ProjectCategory;
  year: string;
  role: string;
  accent: string;
  accent2: string;
  visual: "horplus" | "tiger" | "campus" | "tutor" | "cocolove" | "freelance" | "activity";
  highlights: string[];
  link?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "horplus",
    title: "Horplus",
    eyebrow: "ระบบจัดการหอพัก · 2569",
    summary: "ส่งบิลค่าเช่า ค่าน้ำ และค่าไฟให้ผู้เช่าผ่าน LINE",
    category: "ระบบ",
    year: "2569",
    role: "ออกแบบและพัฒนาคนเดียว",
    accent: "#60a5fa",
    accent2: "#8b5cf6",
    visual: "horplus",
    highlights: ["วางโครงสร้างระบบ", "ออกแบบประสบการณ์ใช้งาน", "เชื่อมการส่งบิลผ่าน LINE"],
    featured: true,
  },
  {
    slug: "tiger-laundry",
    title: "TigerLaundry",
    eyebrow: "LINE Automation",
    summary: "แจ้งเตือนเครื่องซัก–อบ ตรวจสลิป และสะสมแต้มผ่าน LINE",
    category: "ระบบ",
    year: "Project",
    role: "ทำระบบคนเดียว",
    accent: "#fb923c",
    accent2: "#facc15",
    visual: "tiger",
    highlights: ["แจ้งเตือนสถานะเครื่อง", "ตรวจสลิป", "ระบบสมาชิกและแต้ม"],
    featured: true,
  },
  {
    slug: "ku-campus-guide",
    title: "Campus Guide",
    eyebrow: "เว็บรอบรั้ว มก.ฉกส.",
    summary: "รวมหอพัก ร้านค้า และแผนที่รอบมหาวิทยาลัยไว้ในที่เดียว",
    category: "ระบบ",
    year: "Solo",
    role: "ออกแบบและพัฒนาคนเดียว",
    accent: "#34d399",
    accent2: "#22d3ee",
    visual: "campus",
    highlights: ["จัดหมวดหมู่ข้อมูล", "ออกแบบแผนที่", "สร้างเว็บใช้งานจริง"],
    featured: true,
  },
  {
    slug: "business-statistics-tutor",
    title: "Business Statistics Tutor",
    eyebrow: "ติวเตอร์ประจำคณะ",
    summary: "เปลี่ยนสถิติที่ดูยาก ให้รุ่นน้องมองเห็นภาพและตามทัน",
    category: "ข้อมูล",
    year: "KU CSC",
    role: "เตรียมและสอนคนเดียว",
    accent: "#38bdf8",
    accent2: "#2dd4bf",
    visual: "tutor",
    highlights: ["สรุปเนื้อหา", "ออกแบบวิธีอธิบาย", "สอนสถิติทางธุรกิจ"],
    featured: true,
  },
  {
    slug: "cocolove",
    title: "COCOLOVE",
    eyebrow: "ฝ่ายหลังบ้าน",
    summary: "ดูแล Google Form และตรวจสอบผู้สมัครมากกว่า 350 ทีม",
    category: "ข้อมูล",
    year: "350+ ทีม",
    role: "ดูแลหลังบ้านคนเดียว",
    accent: "#f472b6",
    accent2: "#a78bfa",
    visual: "cocolove",
    highlights: ["จัดการข้อมูลผู้สมัคร", "ตรวจสอบความครบถ้วน", "ประสานงานหลังบ้าน"],
    link: "https://www.facebook.com/profile.php?id=61583725063210",
  },
  {
    slug: "fastwork-freelance",
    title: "Freelance Work",
    eyebrow: "งานจริง · ลูกค้าจริง",
    summary: "รับโจทย์หลากหลายผ่าน Fastwork และเปลี่ยนความต้องการให้เป็นชิ้นงาน",
    category: "ครีเอทีฟ",
    year: "Ongoing",
    role: "Freelancer",
    accent: "#c084fc",
    accent2: "#f97316",
    visual: "freelance",
    highlights: ["รับบรีฟ", "จัดลำดับงาน", "ส่งมอบตามเป้าหมาย"],
  },
  {
    slug: "campus-activities",
    title: "Campus Activities",
    eyebrow: "พิธีกร · สันทนาการ",
    summary: "อีกด้านของผมที่ได้พูดต่อหน้าคน ทำงานกับทีม และสร้างบรรยากาศ",
    category: "กิจกรรม",
    year: "KU CSC",
    role: "พิธีกรและฝ่ายสันทนาการ",
    accent: "#fb7185",
    accent2: "#fbbf24",
    visual: "activity",
    highlights: ["สื่อสารต่อหน้าคน", "ทำงานเป็นทีม", "แก้สถานการณ์เฉพาะหน้า"],
  },
];

export const skillGroups = [
  {
    name: "Graphic & Motion",
    color: "#ff4ecd",
    note: "จากไอเดียไปสู่ภาพที่สื่อสารได้",
    tools: ["Canva", "Premiere Pro", "Photoshop", "After Effects"],
  },
  {
    name: "Code & AI Workflow",
    color: "#55d6ff",
    note: "ใช้เครื่องมือหลายแบบเพื่อพาระบบไปถึงจุดที่ใช้งานได้",
    tools: ["Cursor", "Antigravity", "Obsidian", "Apps Script", "Hermes", "Claude Code", "Codex"],
  },
  {
    name: "Cyber Security",
    color: "#a8ff60",
    note: "สนใจมองระบบจากมุมของความเสี่ยงและการป้องกัน",
    tools: ["Burp Suite", "Kali Linux", "GitHub Tools", "OWASP ZAP"],
  },
  {
    name: "Digital Operations",
    color: "#ffb84d",
    note: "เครื่องมือประจำวันสำหรับจัดการงานและสื่อสาร",
    tools: ["LINE OA", "Excel", "OBS", "Word", "Microsoft Teams"],
  },
];

export const navItems = [
  { href: "/", label: "หน้าแรก" },
  { href: "/work", label: "ผลงาน" },
  { href: "/about", label: "ตัวผม" },
  { href: "/contact", label: "ติดต่อ" },
];
