import type { Metadata } from "next";
import { ArrowUpRight, MapPin, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = { title: "ติดต่อ" };

export default function ContactPage() {
  return (
    <div className="inner-page contact-page">
      <section className="page-hero contact-hero section-shell">
        <span className="page-number">03</span>
        <div><p className="eyebrow">LET&apos;S TALK</p><h1>มีโจทย์ที่ยัง<br /><em>หาคำตอบไม่ได้?</em></h1></div>
        <p>เล่าให้ผมฟังได้ครับ<br />ผมชอบโจทย์ที่ต้องคิดและลองของใหม่</p>
      </section>
      <section className="section-shell contact-content">
        <ContactForm />
        <div className="contact-methods">
          <a href="tel:0957214678"><Phone /><span><small>โทรศัพท์</small><b>095-721-4678</b></span><ArrowUpRight /></a>
          <div><MapPin /><span><small>อยู่ที่</small><b>สกลนคร · ประเทศไทย</b></span></div>
        </div>
      </section>
    </div>
  );
}
