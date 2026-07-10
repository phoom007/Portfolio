import type { Metadata } from "next";
import WorkGallery from "@/components/WorkGallery";

export const metadata: Metadata = { title: "ผลงาน" };

export default function WorkPage() {
  return (
    <div className="inner-page work-page">
      <section className="page-hero section-shell">
        <span className="page-number">01</span>
        <div><p className="eyebrow">WORK ARCHIVE</p><h1>สิ่งที่ผมเคย<br /><em>คิดและลงมือทำ</em></h1></div>
        <p>งานระบบ ข้อมูล ครีเอทีฟ และกิจกรรม<br />แต่ละชิ้นคือโจทย์ใหม่ที่ได้เรียนรู้</p>
      </section>
      <section className="section-shell work-archive"><WorkGallery /></section>
    </div>
  );
}
