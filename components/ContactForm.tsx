"use client";

import { Check, Copy, Mail, Send } from "lucide-react";
import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText("phoomgamertv3@gmail.com");
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "");
    const subject = String(data.get("subject") || "อยากคุยเรื่องงาน");
    const message = String(data.get("message") || "");
    window.location.href = `mailto:phoomgamertv3@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`สวัสดีภูมิ\n\n${message}\n\nจาก ${name}`)}`;
  };

  return (
    <div className="contact-panel">
      <form className="contact-form" onSubmit={submit}>
        <label><span>ชื่อของคุณ</span><input name="name" placeholder="คุณชื่ออะไร" required /></label>
        <label><span>อยากคุยเรื่อง</span><input name="subject" placeholder="โปรเจกต์ งาน หรือไอเดียใหม่" required /></label>
        <label><span>เล่าให้ผมฟังสั้น ๆ</span><textarea name="message" placeholder="โจทย์ของคุณคืออะไร..." rows={5} required /></label>
        <button className="button button-light" type="submit">เปิดส่งอีเมล <Send size={17} /></button>
        <small>ปุ่มนี้จะเปิดแอปอีเมลบนอุปกรณ์ของคุณ</small>
      </form>
      <div className="contact-direct">
        <div className="contact-orb"><Mail /></div>
        <span>หรือคัดลอกอีเมลโดยตรง</span>
        <button onClick={copyEmail}>{copied ? <Check /> : <Copy />} {copied ? "คัดลอกแล้ว" : "phoomgamertv3@gmail.com"}</button>
      </div>
    </div>
  );
}
