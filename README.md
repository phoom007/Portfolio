# Phuwanat Tanalad — Portfolio

พอร์ตโฟลิโอภาษาไทยแบบภาพนำสำหรับภูวนาท ทานาลาด สร้างด้วย Next.js, React และ Motion

## Development

```bash
npm install
npm run dev
```

## Build & Deploy (Cloudflare Workers)

ปลายทาง: [https://phuwanart.phoomgamertv3.workers.dev](https://phuwanart.phoomgamertv3.workers.dev)

1. เข้าสู่ระบบ Cloudflare (ทำครั้งแรก):
```bash
npx wrangler login
```

2. บิลด์โปรเจกต์:
```bash
npm run build
```

3. Deploy ขึ้น Cloudflare Workers:
```bash
npm run deploy
```

*(หรือสามารถรัน `npm run deploy:vinext` ได้เช่นกัน)*

## Pages

- `/` — Cinematic home experience
- `/work` — Filterable project archive
- `/about` — Profile, education and tools
- `/contact` — Working email composer and contact actions
- `/resume` — Printable resume

