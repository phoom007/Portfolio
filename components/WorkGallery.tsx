"use client";
/* eslint-disable @next/next/no-img-element */

import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Check, ChevronLeft, ChevronRight, ExternalLink, Maximize2, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import ProjectVisual from "@/components/ProjectVisual";
import { projects, type Project, type ProjectCategory } from "@/lib/data";

const filters: Array<"ทั้งหมด" | ProjectCategory> = ["ทั้งหมด", "ระบบ", "ข้อมูล", "ครีเอทีฟ", "กิจกรรม"];

export default function WorkGallery() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("ทั้งหมด");
  const [selected, setSelected] = useState<Project | null>(null);
  const [zoomedIndex, setZoomedIndex] = useState<number | null>(null);
  const visible = useMemo(() => filter === "ทั้งหมด" ? projects : projects.filter((project) => project.category === filter), [filter]);

  useEffect(() => {
    if (!selected) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (zoomedIndex !== null) setZoomedIndex(null);
        else setSelected(null);
      }

      const imageCount = selected.images?.length ?? 0;
      if (zoomedIndex !== null && imageCount > 1 && event.key === "ArrowLeft") {
        setZoomedIndex((zoomedIndex - 1 + imageCount) % imageCount);
      }
      if (zoomedIndex !== null && imageCount > 1 && event.key === "ArrowRight") {
        setZoomedIndex((zoomedIndex + 1) % imageCount);
      }
    };

    document.body.classList.add("modal-open");
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selected, zoomedIndex]);

  const closeProject = () => {
    setZoomedIndex(null);
    setSelected(null);
  };

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
              <button className="gallery-visual-button" onClick={() => { setZoomedIndex(null); setSelected(project); }} aria-label={`ดูรายละเอียด ${project.title}`}>
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
          <motion.div className="project-modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={closeProject}>
            <motion.div className="project-modal" style={{ "--project-a": selected.accent, "--project-b": selected.accent2 } as React.CSSProperties} initial={{ opacity: 0, y: 60, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 30, scale: 0.98 }} transition={{ type: "spring", damping: 24 }} onMouseDown={(event) => event.stopPropagation()}>
              <button className="modal-close" onClick={closeProject} aria-label="ปิด"><X /></button>
              <ProjectVisual project={selected} />
              <div className="modal-content">
                <div className="modal-title"><span>{selected.eyebrow}</span><h2>{selected.title}</h2><p>{selected.summary}</p></div>
                <div className="modal-detail">
                  <div><small>บทบาท</small><b>{selected.role}</b></div>
                  <ul>{selected.highlights.map((item) => <li key={item}><Check />{item}</li>)}</ul>
                  {!!selected.links?.length ? (
                    <div className="modal-links">
                      {selected.links.map((link) => (
                        <a className="button button-primary" href={link.href} target="_blank" rel="noreferrer" key={link.href}>{link.label} <ExternalLink size={17} /></a>
                      ))}
                    </div>
                  ) : !selected.images?.length ? (
                    <span className="coming-soon">ภาพและรายละเอียดจริง — เร็ว ๆ นี้</span>
                  ) : (
                    <span className="real-work-note">ภาพจริงจากผลงานของผม</span>
                  )}
                </div>
              </div>
              {!!selected.images?.length && (
                <section className="modal-gallery-section" aria-label={`แกลเลอรี ${selected.title}`}>
                  <div className="modal-gallery-heading">
                    <div><small>PROJECT GALLERY</small><h3>ภาพจากผลงานจริง</h3></div>
                    <span>กดที่ภาพเพื่อดูเต็มจอ <Maximize2 /></span>
                  </div>
                  <div className="modal-gallery">
                    {selected.images.map((src, index) => (
                      <button type="button" onClick={() => setZoomedIndex(index)} aria-label={`เปิด ${selected.title} ภาพที่ ${index + 1} แบบเต็มจอ`} key={src}>
                        <img src={src} alt={`${selected.title} ภาพที่ ${index + 1}`} loading="lazy" />
                        <span>{String(index + 1).padStart(2, "0")} / {String(selected.images?.length ?? 0).padStart(2, "0")} <Maximize2 /></span>
                      </button>
                    ))}
                  </div>
                </section>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selected && zoomedIndex !== null && selected.images?.[zoomedIndex] && (
          <motion.div className="image-lightbox" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={() => setZoomedIndex(null)}>
            <button className="lightbox-close" onClick={() => setZoomedIndex(null)} aria-label="ปิดภาพเต็มจอ"><X /></button>
            {selected.images.length > 1 && (
              <>
                <button className="lightbox-nav previous" onMouseDown={(event) => event.stopPropagation()} onClick={() => setZoomedIndex((zoomedIndex - 1 + selected.images!.length) % selected.images!.length)} aria-label="ภาพก่อนหน้า"><ChevronLeft /></button>
                <button className="lightbox-nav next" onMouseDown={(event) => event.stopPropagation()} onClick={() => setZoomedIndex((zoomedIndex + 1) % selected.images!.length)} aria-label="ภาพถัดไป"><ChevronRight /></button>
              </>
            )}
            <motion.img
              key={selected.images[zoomedIndex]}
              src={selected.images[zoomedIndex]}
              alt={`${selected.title} ภาพที่ ${zoomedIndex + 1} แบบเต็มจอ`}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              onMouseDown={(event) => event.stopPropagation()}
            />
            <span className="lightbox-counter">{zoomedIndex + 1} / {selected.images.length}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
