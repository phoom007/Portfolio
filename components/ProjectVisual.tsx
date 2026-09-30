/* eslint-disable @next/next/no-img-element */
import { BarChart3, BellRing, Check, MapPin, MessageCircle, Mic2, ShieldCheck, Sparkles } from "lucide-react";
import type { Project } from "@/lib/data";

function RealProjectMedia({ project }: { project: Project }) {
  const images = project.images ?? [];

  if (project.visual === "horplus") {
    return (
      <div className="real-media real-horplus">
        <div className="real-browser-frame horplus-browser">
          <div><i /><i /><i /><span>HORPLUS · DORMITORY MANAGEMENT</span></div>
          <img src={images[0]} alt="แดชบอร์ดระบบ Horplus" loading="lazy" />
        </div>
        <img className="horplus-float rooms" src={images[2]} alt="หน้าจัดการห้องพัก Horplus" loading="lazy" />
        <img className="horplus-float bill" src={images[4]} alt="หน้าบิลผู้เช่า Horplus" loading="lazy" />
      </div>
    );
  }

  if (project.visual === "robusgo") {
    return (
      <div className="real-media real-robusgo">
        <img className="real-main" src={images[0]} alt="รับรางวัล I-New Gen Popular Vote 2025" />
        <img className="real-float award" src={images[1]} alt="ใบประกาศและเหรียญเงิน Robusgo" loading="lazy" />
        <img className="real-float trophy" src={images[2]} alt="ถ้วย Popular Vote 2025" loading="lazy" />
        <div className="award-ribbon"><span>SILVER AWARD</span><b>POPULAR VOTE 2025</b></div>
      </div>
    );
  }

  if (project.visual === "tiger") {
    return (
      <div className="real-media real-tiger">
        <div className="real-phone-deck">
          {images.slice(0, 4).map((src, index) => <img src={src} alt={`หน้าจอ TigerLaundry ${index + 1}`} loading="lazy" key={src} />)}
        </div>
        <div className="real-media-label"><MessageCircle /> LINE AUTOMATION</div>
      </div>
    );
  }

  if (project.visual === "campus") {
    return (
      <div className="real-media real-campus">
        <div className="real-browser-frame">
          <div><i /><i /><i /><span>NONTSEE · KU CSC</span></div>
          <img src={images[0]} alt="หน้าแรกเว็บไซต์ Nontsee" loading="lazy" />
        </div>
        <img className="campus-float map" src={images[2]} alt="หน้าแผนที่ Nontsee" loading="lazy" />
        <img className="campus-float places" src={images[1]} alt="หน้ารวมสถานที่ Nontsee" loading="lazy" />
      </div>
    );
  }

  if (project.visual === "cocolove") {
    return (
      <div className="real-media real-cocolove">
        <img className="coco-main" src={images[0]} alt="ผู้เข้าร่วม COCOLOVE Challenge" loading="lazy" />
        <img className="coco-float stage" src={images[1]} alt="เบื้องหลังการตัดต่อ COCOLOVE" loading="lazy" />
        <img className="coco-float editing" src={images[2]} alt="การจัดการไฟล์สื่อ COCOLOVE" loading="lazy" />
        <div className="coco-count"><strong>350+</strong><span>TEAMS</span></div>
      </div>
    );
  }

  if (project.visual === "freelance") {
    return (
      <div className="real-media real-design">
        {images.slice(0, 5).map((src, index) => <img src={src} alt={`ตัวอย่างงานออกแบบ ${index + 1}`} loading="lazy" key={src} />)}
        <div className="design-stamp">DESIGNED<br />BY PHOOM</div>
      </div>
    );
  }

  return (
    <div className={`real-media real-single real-${project.visual}`}>
      <img src={images[0]} alt={project.title} loading="lazy" />
      <span>{project.role}</span>
    </div>
  );
}

export default function ProjectVisual({ project, compact = false }: { project: Project; compact?: boolean }) {
  return (
    <div
      className={`project-visual visual-${project.visual} ${compact ? "compact" : ""}`}
      style={{ "--project-a": project.accent, "--project-b": project.accent2 } as React.CSSProperties}
      aria-label={`ภาพจำลองผลงาน ${project.title}`}
    >
      <div className="visual-grid" />
      {!!project.images?.length && <RealProjectMedia project={project} />}
      {!project.images?.length && project.visual === "horplus" && (
        <div className="mock-browser">
          <div className="mock-browser-bar"><span /><span /><span /><b>HORPLUS / ADMIN</b></div>
          <div className="horplus-layout">
            <div className="mock-sidebar"><i /><i /><i /><i /></div>
            <div className="bill-panel">
              <div className="bill-heading"><span>บิลประจำเดือน</span><small>2569</small></div>
              <div className="bill-total">฿ 3,480</div>
              <div className="bill-line"><span>ค่าเช่า</span><b>3,000</b></div>
              <div className="bill-line"><span>ค่าน้ำ / ไฟ</span><b>480</b></div>
              <div className="line-success"><Check size={12} /> พร้อมส่งผ่าน LINE</div>
            </div>
            <div className="room-stack"><i /><i /><i /><i /></div>
          </div>
        </div>
      )}
      {!project.images?.length && project.visual === "tiger" && (
        <>
          <div className="phone-shell">
            <div className="phone-notch" />
            <div className="chat-head"><span className="tiger-dot">T</span><b>TigerLaundry</b></div>
            <div className="chat-bubble"><BellRing size={14} /> เครื่องอบของคุณเสร็จแล้ว</div>
            <div className="chat-bubble user">ตรวจสอบสลิปสำเร็จ</div>
            <div className="point-card"><small>คะแนนสะสม</small><strong>1,280</strong><span>POINTS</span></div>
          </div>
          <div className="orbit-badge badge-one"><MessageCircle size={18} /> LINE OA</div>
          <div className="orbit-badge badge-two"><ShieldCheck size={18} /> VERIFIED</div>
        </>
      )}
      {!project.images?.length && project.visual === "campus" && (
        <div className="map-board">
          <div className="map-top"><b>AROUND KU CSC</b><span>ค้นหาสถานที่...</span></div>
          <div className="map-road road-a" /><div className="map-road road-b" /><div className="map-road road-c" />
          <span className="map-pin pin-a"><MapPin /></span><span className="map-pin pin-b"><MapPin /></span><span className="map-pin pin-c"><MapPin /></span>
          <div className="place-card"><small>แนะนำใกล้คุณ</small><b>หอพัก · ร้านค้า · แผนที่</b></div>
        </div>
      )}
      {!project.images?.length && project.visual === "tutor" && (
        <div className="data-stage">
          <div className="formula-chip">ŷ = a + bx</div>
          <div className="chart-card">
            <div className="chart-title"><BarChart3 size={18} /> BUSINESS STATISTICS</div>
            <div className="chart-bars"><i /><i /><i /><i /><i /><i /></div>
            <div className="chart-axis"><span>เข้าใจโจทย์</span><span>เห็นภาพ</span><span>ทำได้</span></div>
          </div>
          <div className="data-note"><Sparkles size={16} /> เรื่องยาก อธิบายให้เห็นภาพได้</div>
        </div>
      )}
      {!project.images?.length && project.visual === "cocolove" && (
        <div className="form-stage">
          <div className="form-card">
            <div className="form-title"><span>COCO</span>LOVE · REGISTRATION</div>
            {["ทีม Moonlight", "ทีม Next Step", "ทีม KUSE"].map((team, index) => (
              <div className="form-row" key={team}><span>{team}</span><b><Check size={12} /> ตรวจแล้ว</b><small>#{348 + index}</small></div>
            ))}
          </div>
          <div className="team-counter"><strong>350+</strong><span>TEAMS</span></div>
        </div>
      )}
      {!project.images?.length && project.visual === "freelance" && (
        <div className="freelance-collage">
          <div className="creative-card card-poster"><Sparkles /><b>DESIGN</b></div>
          <div className="creative-card card-video"><span>▶</span><b>EDIT</b></div>
          <div className="creative-card card-system"><span>&lt;/&gt;</span><b>BUILD</b></div>
          <div className="brief-ticket"><small>NEW BRIEF</small><strong>เปลี่ยนโจทย์ → เป็นงานจริง</strong></div>
        </div>
      )}
      {!project.images?.length && project.visual === "activity" && (
        <div className="stage-scene">
          <div className="stage-light light-a" /><div className="stage-light light-b" />
          <div className="stage-mic"><Mic2 /></div>
          <div className="sound-wave">{Array.from({ length: 18 }, (_, index) => <i key={index} />)}</div>
          <div className="stage-label"><small>ON STAGE</small><b>พูดให้คนฟัง · ทำให้ทีมไปต่อ</b></div>
        </div>
      )}
      <div className="visual-corner-label">{project.year}</div>
    </div>
  );
}
