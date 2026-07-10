"use client";

import { Printer } from "lucide-react";

export default function PrintButton() {
  return <button className="button button-primary print-button" onClick={() => window.print()}><Printer size={17} /> พิมพ์ / บันทึกเป็น PDF</button>;
}
