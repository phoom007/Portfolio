"use client";

import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Check, ExternalLink, X } from "lucide-react";
import { useMemo, useState } from "react";
import ProjectVisual from "@/components/ProjectVisual";
import { projects, type Project, type ProjectCategory } from "@/lib/data";

const filters: Array<"ทั้งหมด" | ProjectCategory> = ["ทั้งหมด", "ระบบ", "ข้อมูล", "ครีเอทีฟ", "กิจกรรม"];

export default function WorkGallery() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("ทั้งหมด");
  const [selected, setSelected] = useState<Project | null>(null);
  const visible = useMemo(() => filter === "ทั้งหมด" ? projects : projects.filter((project) => project.category === filter), [filter]);

  return (
    <>
      <div className="work-filter" role="group" aria-label="กรองผลงาน">
        {filters.map((item) => (
          <button key={item} className={item === filter ? "active" : ""} onClick={() => setFilter(item)}>
            {item}<span>{item === "ทั้งหมด" ? projects.length : projects.filter((project) => project.category === item).length}</span>
          </button>
        ))}
      </div>

      <motion.div className="work-gallery" layout>
        <AnimatePresence mode="popLayout">
          {visible.map((project, index) => (
            <motion.article
              className={`gallery-card ${index % 3 === 0 ? "wide" : ""}`}
              id={project.slug}
              key={project.slug}
              layout
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.35 }}
              style={{ "--project-a": project.accent, "--project-b": project.accent2 } as React.CSSProperties}
            >
              <button className="gallery-visual-button" onClick={() => setSelected(project)} aria-label={`ดูรายละเอียด ${project.title}`}>
                <ProjectVisual project={project} compact={index % 3 !== 0} />
                <span className="gallery-view">เปิดดู <ArrowUpRight /></span>
              </button>
              <div className="gallery-card-info">
                <div><span>{project.eyebrow}</span><h2>{project.title}</h2></div>
                <p>{project.summary}</p>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {selected && (
          <motion.div className="project-modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={() => setSelected(null)}>
            <motion.div className="project-modal" initial={{ opacity: 0, y: 60, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 30, scale: 0.98 }} transition={{ type: "spring", damping: 24 }} onMouseDown={(event) => event.stopPropagation()}>
              <button className="modal-close" onClick={() => setSelected(null)} aria-label="ปิด"><X /></button>
              <ProjectVisual project={selected} />
              <div className="modal-content">
                <div className="modal-title"><span>{selected.eyebrow}</span><h2>{selected.title}</h2><p>{selected.summary}</p></div>
                <div className="modal-detail">
                  <div><small>บทบาท</small><b>{selected.role}</b></div>
                  <ul>{selected.highlights.map((item) => <li key={item}><Check />{item}</li>)}</ul>
                  {selected.link ? (
                    <a className="button button-primary" href={selected.link} target="_blank" rel="noreferrer">ดูช่องทางโครงการ <ExternalLink size={17} /></a>
                  ) : (
                    <span className="coming-soon">ภาพและรายละเอียดจริง — เร็ว ๆ นี้</span>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
