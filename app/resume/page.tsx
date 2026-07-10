import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import PrintButton from "@/components/PrintButton";
import { projects, skillGroups } from "@/lib/data";

export const metadata: Metadata = { title: "Resume" };

export default function ResumePage() {
  return (
    <div className="resume-page">
      <div className="resume-actions section-shell"><PrintButton /></div>
      <article className="resume-sheet">
        <header className="resume-head">
          <div><span>PHUWANAT TANALAD</span><h1>ภูวนาท ทานาลาด</h1><p>การบริหาร × การออกแบบ × เทคโนโลยี</p></div>
          <div className="resume-monogram">P</div>
        </header>
        <div className="resume-grid">
          <aside>
            <section><h2>ติดต่อ</h2><p><Phone /> 095-721-4678</p><p><Mail /> phoomgamertv3@gmail.com</p><p><MapPin /> สกลนคร ประเทศไทย</p></section>
            <section><h2>การศึกษา</h2><b>มหาวิทยาลัยเกษตรศาสตร์</b><p>บริหารธุรกิจบัณฑิต<br />สาขาวิชาการจัดการ</p><p>เกียรตินิยมอันดับหนึ่ง<br />GPAX 3.68 · จบใน 3 ปีครึ่ง</p></section>
            <section><h2>เครื่องมือ</h2>{skillGroups.map((group) => <div className="resume-tools" key={group.name}><b>{group.name}</b><p>{group.tools.join(" · ")}</p></div>)}</section>
          </aside>
          <main>
            <section><h2>เกี่ยวกับผม</h2><p>ผมชอบทำความเข้าใจโจทย์ วางแผน และเลือกเครื่องมือที่เหมาะสม เพื่อเปลี่ยนงานที่ซับซ้อนให้กลายเป็นระบบที่ใช้งานได้จริง สนใจการทำงานข้ามศาสตร์และพร้อมเรียนรู้สิ่งใหม่อยู่เสมอ</p></section>
            <section><h2>ผลงานและประสบการณ์</h2>{projects.slice(0, 6).map((project) => <div className="resume-project" key={project.slug}><div><b>{project.title}</b><small>{project.eyebrow}</small></div><p>{project.summary} — {project.role}</p></div>)}</section>
          </main>
        </div>
      </article>
    </div>
  );
}
