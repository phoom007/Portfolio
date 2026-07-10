import type { Metadata } from "next";
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { ArrowRight, Award, Clock3, GraduationCap, Sparkles } from "lucide-react";
import { skillGroups } from "@/lib/data";

export const metadata: Metadata = { title: "ตัวผม" };

export default function AboutPage() {
  return (
    <div className="inner-page about-page">
      <section className="page-hero about-hero section-shell">
        <span className="page-number">02</span>
        <div><p className="eyebrow">ABOUT PHOOM</p><h1>ผมไม่ได้อยากเก่ง<br /><em>แค่เรื่องเดียว</em></h1></div>
        <p>เพราะหลายครั้ง คำตอบที่ดีที่สุด<br />เกิดจากการเชื่อมหลายเรื่องเข้าด้วยกัน</p>
      </section>

      <section className="about-intro section-shell">
        <div className="about-portrait">
          <div className="about-photo-placeholder"><span>P</span><small>พื้นที่สำหรับรูปของภูมิ</small></div>
          <div className="about-photo-tag">PHUWANAT · 2026</div>
        </div>
        <div className="about-story">
          <span className="eyebrow">สวัสดีครับ ผมภูมิ</span>
          <h2>ผมเป็นคนที่ต้องเห็นภาพรวม<br />ก่อนเริ่มลงมือทำ</h2>
          <p>เวลาสนใจอะไร ผมจะเรียนรู้ได้ต่อเนื่องและอยู่กับงานหน้าคอมได้นาน ผมชอบแยกโจทย์ออกเป็นส่วน ๆ วางลำดับให้ตัวเองเข้าใจ แล้วค่อยเลือกเครื่องมือที่เหมาะสม</p>
          <p>สิ่งที่ผมสนใจจึงไม่ได้หยุดอยู่แค่การบริหาร แต่ขยายไปถึงกราฟิก วิดีโอ โค้ด ระบบอัตโนมัติ การวิเคราะห์ข้อมูล ตลาดหุ้น และความปลอดภัยของระบบ เพราะผมอยากรู้ว่าแต่ละศาสตร์จะช่วยทำให้งานดีขึ้นได้อย่างไร</p>
          <blockquote>“ผมอยากอยู่ในสภาพแวดล้อมที่เปิดกว้างพอ ให้ได้ลองคิด ลองทำ และเห็นว่าตัวเองพัฒนาไปได้ไกลแค่ไหน”</blockquote>
          <Link href="/resume" className="text-link">ดูโปรไฟล์แบบพิมพ์ได้ <ArrowRight /></Link>
        </div>
      </section>

      <section className="education-section section-shell">
        <div className="section-index">01 / การศึกษา</div>
        <div className="education-timeline-card">
          <div className="education-logo-block"><img src="https://www.ku.ac.th/web-html/assets/images/identity/flag_sign.svg" alt="ตรามหาวิทยาลัยเกษตรศาสตร์" /></div>
          <div className="education-main">
            <span>มหาวิทยาลัยเกษตรศาสตร์ · มก.ฉกส.</span>
            <h2>บริหารธุรกิจบัณฑิต<br />สาขาวิชาการจัดการ</h2>
            <p>คณะศิลปศาสตร์และวิทยาการจัดการ<br />วิทยาเขตเฉลิมพระเกียรติ จังหวัดสกลนคร</p>
          </div>
          <div className="education-badges">
            <div><Award /><span><small>เกียรตินิยม</small><b>อันดับหนึ่ง</b></span></div>
            <div><GraduationCap /><span><small>GPAX</small><b>3.68</b></span></div>
            <div><Clock3 /><span><small>สำเร็จการศึกษาใน</small><b>3 ปีครึ่ง</b></span></div>
          </div>
        </div>
      </section>

      <section id="tools" className="tools-section section-shell">
        <div className="section-index">02 / เครื่องมือที่ใช้</div>
        <div className="tools-heading"><div><p className="eyebrow">TOOLKIT</p><h2>ความถนัดที่<br />ต่อยอดกันได้</h2></div><p>เรียงเครื่องมือในแต่ละด้าน<br />จากสิ่งที่ผมใช้งานได้ถนัดที่สุด</p></div>
        <div className="toolkit-list">
          {skillGroups.map((group, groupIndex) => (
            <article key={group.name} style={{ "--skill": group.color } as React.CSSProperties}>
              <div className="toolkit-title"><span>0{groupIndex + 1}</span><div><h3>{group.name}</h3><p>{group.note}</p></div></div>
              <div className="ranked-tools">
                {group.tools.map((tool, index) => <div key={tool}><small>{String(index + 1).padStart(2, "0")}</small><b>{tool}</b>{index === 0 && <Sparkles />}</div>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-values section-shell">
        <div className="section-index">03 / สิ่งที่ผมมองหา</div>
        <div className="value-statement">
          <p className="eyebrow">THE ENVIRONMENT I GROW IN</p>
          <h2>โจทย์จริง · พื้นที่ให้คิด<br />ทีมที่แชร์ความรู้ · เป้าหมายที่ชัด</h2>
          <p>ผมรับแรงกดดันได้ในระดับหนึ่ง และมองความท้าทายเป็นพื้นที่สำหรับพัฒนาวิธีคิดของตัวเอง</p>
        </div>
      </section>
    </div>
  );
}
