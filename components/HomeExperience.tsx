"use client";
/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDown, ArrowRight, ArrowUpRight, BrainCircuit, Layers3, MonitorUp, ScanSearch } from "lucide-react";
import { useEffect, useRef } from "react";
import { projects, skillGroups } from "@/lib/data";
import ProjectVisual from "@/components/ProjectVisual";

const featured = projects.filter((project) => project.featured);

export default function HomeExperience() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("[data-palette]");
    const observer = new IntersectionObserver(
      (entries) => {
        const active = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (active) document.documentElement.dataset.palette = (active.target as HTMLElement).dataset.palette || "blue";
      },
      { threshold: [0.25, 0.45, 0.65], rootMargin: "-10% 0px -15%" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="home-page">
      <section ref={heroRef} className="hero section-shell" data-palette="blue">
        <div className="hero-noise" />
        <motion.div className="hero-copy" style={{ y: heroY, opacity: heroOpacity }}>
          <div className="status-pill"><span /> พร้อมเรียนรู้โจทย์ใหม่</div>
          <p className="hero-overline">BUSINESS × DESIGN × TECHNOLOGY</p>
          <h1>
            ผมชอบทำให้งานยาก<br />
            กลายเป็น<span className="text-gradient">ระบบที่เข้าใจได้</span>
          </h1>
          <p className="hero-intro">
            ผมภูมิ — ภูวนาท ทานาลาด<br />
            คนที่สนุกกับการวางแผน ออกแบบ และสร้างสิ่งต่าง ๆ ให้ดีขึ้น
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/work">ดูสิ่งที่ผมสร้าง <ArrowRight size={18} /></Link>
            <Link className="button button-ghost" href="/about">รู้จักผมให้มากขึ้น</Link>
          </div>
        </motion.div>

        <motion.div className="hero-portrait-wrap" style={{ y: heroY }}>
          <div className="portrait-rgb rgb-one" /><div className="portrait-rgb rgb-two" />
          <div className="profile-frame">
            <div className="profile-placeholder">
              <span className="profile-initial">P</span>
              <div className="profile-scan" />
              <small>YOUR PHOTO<br />COMING NEXT</small>
            </div>
            <div className="profile-caption"><b>PHUWANAT TANALAD</b><span>aka PHOOM</span></div>
          </div>
          <div className="floating-chip chip-plan"><Layers3 /> วางแผน</div>
          <div className="floating-chip chip-build"><MonitorUp /> สร้างระบบ</div>
          <div className="floating-chip chip-learn"><BrainCircuit /> เรียนรู้</div>
        </motion.div>

        <div className="hero-meta">
          <span>SAKON NAKHON · THAILAND</span>
          <a href="#intro">เลื่อนเพื่อสำรวจ <ArrowDown size={15} /></a>
        </div>
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          <span>PLAN</span><i>✦</i><span>DESIGN</span><i>✦</i><span>BUILD</span><i>✦</i><span>IMPROVE</span><i>✦</i>
          <span>PLAN</span><i>✦</i><span>DESIGN</span><i>✦</i><span>BUILD</span><i>✦</i><span>IMPROVE</span><i>✦</i>
        </div>
      </div>

      <section id="intro" className="manifesto section-shell" data-palette="violet">
        <motion.div className="section-index" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>01 / วิธีคิด</motion.div>
        <motion.div className="manifesto-main" initial={{ opacity: 0, y: 70 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true, margin: "-15%" }}>
          <p className="eyebrow">ผมไม่ได้เริ่มจากเครื่องมือ</p>
          <h2>ผมเริ่มจากการทำความเข้าใจว่า<br /><em>“อะไรควรดีขึ้น?”</em></h2>
          <p className="manifesto-copy">แล้วค่อยแตกโจทย์ วางแผน และเลือกวิธีที่พาไปถึงคำตอบได้จริง</p>
        </motion.div>
        <div className="thinking-grid">
          {[
            { icon: ScanSearch, no: "01", title: "เข้าใจ", text: "มองปัญหาให้เห็นภาพก่อน" },
            { icon: Layers3, no: "02", title: "วางระบบ", text: "จัดลำดับให้ทุกอย่างเชื่อมกัน" },
            { icon: MonitorUp, no: "03", title: "ลงมือ", text: "เรียนรู้เครื่องมือระหว่างทาง" },
            { icon: BrainCircuit, no: "04", title: "พัฒนา", text: "ทดลอง วัดผล และทำให้ดีขึ้น" },
          ].map((item, index) => (
            <motion.div className="thinking-card" key={item.no} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} viewport={{ once: true }}>
              <div><item.icon /><span>{item.no}</span></div><h3>{item.title}</h3><p>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="selected-work" data-palette="cyan">
        <div className="work-heading section-shell">
          <div className="section-index">02 / ผลงานที่เลือก</div>
          <div>
            <p className="eyebrow">SELECTED WORK</p>
            <h2>บางสิ่งที่ผม<br />สร้างขึ้นมาคนเดียว</h2>
          </div>
          <Link className="round-link" href="/work">ดูทั้งหมด <ArrowUpRight /></Link>
        </div>
        <div className="project-stack section-shell">
          {featured.map((project, index) => (
            <motion.article
              className="featured-project"
              key={project.slug}
              style={{ "--project-a": project.accent, "--project-b": project.accent2, top: `${92 + index * 20}px` } as React.CSSProperties}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, margin: "-10%" }}
            >
              <Link href={`/work#${project.slug}`} className="featured-visual-link"><ProjectVisual project={project} /></Link>
              <div className="featured-info">
                <div className="project-number">0{index + 1}</div>
                <div>
                  <span className="project-eyebrow">{project.eyebrow}</span>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                </div>
                <div className="project-meta"><span>{project.role}</span><ArrowUpRight /></div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="capability section-shell" data-palette="pink">
        <div className="section-index">03 / เครื่องมือ</div>
        <div className="capability-heading">
          <div><p className="eyebrow">MULTI-DISCIPLINARY</p><h2>หลายความถนัด<br />แต่มีเป้าหมายเดียว</h2></div>
          <p>เลือกใช้สิ่งที่เหมาะกับโจทย์<br />เพื่อให้งานออกมาดีที่สุด</p>
        </div>
        <div className="skill-orbits">
          {skillGroups.map((group, index) => (
            <motion.div className="skill-orbit-card" key={group.name} initial={{ opacity: 0, scale: 0.92 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.1 }} viewport={{ once: true }} style={{ "--skill": group.color } as React.CSSProperties}>
              <div className="skill-orbit-head"><span>0{index + 1}</span><i /></div>
              <h3>{group.name}</h3>
              <div className="tool-cloud">{group.tools.slice(0, 5).map((tool) => <span key={tool}>{tool}</span>)}</div>
              <p>{group.note}</p>
            </motion.div>
          ))}
        </div>
        <Link className="text-link" href="/about#tools">ดูเครื่องมือทั้งหมด <ArrowRight /></Link>
      </section>

      <section className="education-feature section-shell" data-palette="green">
        <div className="education-card">
          <div className="ku-logo-wrap">
            <img src="https://www.ku.ac.th/web-html/assets/images/identity/flag_sign.svg" alt="ตรามหาวิทยาลัยเกษตรศาสตร์" />
          </div>
          <div className="education-copy">
            <span className="project-eyebrow">KASETSART UNIVERSITY · KU CSC</span>
            <h2>บริหารธุรกิจบัณฑิต<br /><em>เกียรตินิยมอันดับหนึ่ง</em></h2>
            <p>สาขาวิชาการจัดการ · คณะศิลปศาสตร์และวิทยาการจัดการ<br />วิทยาเขตเฉลิมพระเกียรติ จังหวัดสกลนคร</p>
          </div>
          <div className="education-stats">
            <div><strong>3.68</strong><span>GPAX</span></div>
            <div><strong>3.5</strong><span>ปีที่ใช้เรียนจบ</span></div>
            <div><strong>2569</strong><span>ปีที่สำเร็จการศึกษา</span></div>
          </div>
        </div>
      </section>

      <section className="home-cta section-shell" data-palette="orange">
        <motion.div initial={{ opacity: 0, y: 80 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <span className="cta-star">✦</span>
          <p className="eyebrow">WHAT&apos;S NEXT?</p>
          <h2>ผมอยากรู้เหมือนกันว่า<br />โจทย์ต่อไปจะพาผมไปได้ไกลแค่ไหน</h2>
          <div className="cta-actions"><Link className="button button-light" href="/contact">คุยกับผม <ArrowRight /></Link><a href="tel:0957214678">095-721-4678</a></div>
        </motion.div>
      </section>
    </div>
  );
}
