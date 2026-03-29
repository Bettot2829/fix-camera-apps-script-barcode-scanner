# Fix Camera Access in Google Apps Script — Barcode Scanner

> **How to Fix Camera Not Working in Google Apps Script (Free Solution)**

Camera and Microphone access is **blocked by default** in Google Apps Script due to Google's sandboxed iframe restriction. This project provides a **complete working solution** using a separate Netlify-hosted scanner page that communicates with Google Sheets via Apps Script `doPost()`.

🎥 **Watch the full tutorial:** [https://youtu.be/Q780OwWfBro](https://youtu.be/Q780OwWfBro)

📺 **Channel:** [@rameezimdad](https://youtube.com/@rameezimdad)

---

## What's the Problem?

When you use `HtmlService` in Google Apps Script, your HTML is rendered inside a **sandboxed iframe** with an opaque origin like:

```
https://n-xxxxxxxxxx.googleusercontent.com
```

Browsers **block camera/microphone** access from opaque origins — even if the user clicks "Allow". This is a **Google security restriction** that cannot be bypassed from within Apps Script.

---

## The Solution

Host the camera/scanner page on a **separate domain** (Netlify — free, HTTPS) and communicate with Google Sheets via Apps Script's `doPost()` API.

```
📱 Phone Camera  →  🌐 Netlify (scanner.html)  →  ⚡ Apps Script (doPost)  →  📊 Google Sheet
```

---

## Project Files

| File | Where | Purpose |
|------|-------|---------|
| `Code.gs` | Apps Script Editor | Backend — doGet, doPost, getRecentScans |
| `index.html` | Apps Script Editor | Dashboard UI — open scanner, view scans |
| `scanner.html` | Netlify (rename to index.html) | Camera barcode scanner — sends data to Sheet |

---

## Setup (6 Steps)

1. **Create Apps Script files** — Open Google Sheet → Extensions → Apps Script → paste `Code.gs` and `index.html`

2. **Deploy Apps Script** — Deploy → New Deployment → Web App → Execute as: **Me**, Access: **Anyone** → Deploy → copy URL

3. **Paste URL in scanner.html** — Replace `YOUR_APPS_SCRIPT_WEB_APP_URL_HERE` with the URL from Step 2

4. **Deploy on Netlify** — Netlify.com → Sites → "Deploy manually" → rename `scanner.html` to `index.html`, put in a folder → drag-drop → get URL

5. **Update Apps Script index.html** — Replace `YOUR_NETLIFY_URL_HERE` with Netlify URL → create **New Deployment** (not just save)

6. **Test** — Open Web App → "Open Barcode Scanner" → scan with phone camera → check Sheet for data

---

## Tech Stack

- **Google Apps Script** — Backend + doPost API
- **Google Sheets** — Database (Scans sheet)
- **html5-qrcode** — Camera barcode/QR scanning library
- **Netlify** — Free HTTPS hosting for scanner page
- **Web Audio API** — Beep sound on scan

---

## Features

- Scan barcodes and QR codes using phone camera
- Auto-send scanned data to Google Sheets
- Beep sound on successful scan
- 3-second debounce to prevent duplicate scans
- Session scan history
- Dashboard with recent scans table
- Mobile responsive
- Works on any phone browser (Chrome, Safari, etc.)

---

## Important Notes

- After ANY change to `Code.gs`, create a **New Deployment** (not just save) to get updated URL
- Deploy as Web App: Execute as **Me**, Access **Anyone**
- `scanner.html` must be renamed to `index.html` when deploying to Netlify
- The fetch uses `mode: 'no-cors'` to avoid CORS preflight issues

---

## License

Free to use. Give credit by subscribing to [@rameezimdad](https://youtube.com/@rameezimdad) 😄
