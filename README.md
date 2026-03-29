# Fix Camera Not Working in Google Apps Script — Free Barcode & QR Code Scanner

### Camera Permission Denied in Apps Script? Here's the Fix.

> Google Apps Script blocks camera and microphone access due to its sandboxed iframe (`googleusercontent.com` opaque origin). This project is a **complete free working solution** — a Netlify-hosted barcode scanner that sends scanned data directly to Google Sheets via Apps Script `doPost()`.

**No paid tools. No extensions. Just 3 files.**

🎥 **Full Video Tutorial:** [Watch on YouTube](https://youtu.be/Q780OwWfBro)

📺 **Channel:** [@rameezimdad](https://youtube.com/@rameezimdad)

---

## Why Camera Doesn't Work in Apps Script

When you use `HtmlService.createHtmlOutputFromFile()` in Google Apps Script, your page loads inside a **sandboxed iframe** with an opaque origin:

```
https://n-xxxxxxxxxx.googleusercontent.com
```

Browsers **block camera, microphone, and other sensitive permissions** from opaque/sandboxed origins — even if the user clicks "Allow". This is a browser-level security restriction enforced by Google's iframe sandbox. You **cannot fix this** from within Apps Script.

### Common errors you'll see:
- `NotAllowedError: Permission denied`
- `Camera Permission Denied` even after allowing
- `getUserMedia() not allowed in sandboxed iframe`
- Camera popup shows but immediately fails

---

## The Solution — How It Works

Host the camera scanner on a **separate HTTPS domain** (Netlify — free) and send scanned barcodes to Google Sheets via Apps Script's `doPost()` web app endpoint.

```
📱 Phone Camera
    ↓
🌐 Netlify (scanner.html) — camera works here (real HTTPS origin)
    ↓
⚡ Apps Script doPost(e) — receives barcode via fetch POST
    ↓
📊 Google Sheet — saves [timestamp, barcode, source]
```

---

## Project Structure — Only 3 Files

| File | Deploy Where | What It Does |
|------|-------------|--------------|
| `Code.gs` | Google Apps Script Editor | Backend — `doGet()` serves dashboard, `doPost()` receives barcodes, `getRecentScans()` returns last 10 scans |
| `index.html` | Google Apps Script Editor | Dashboard UI — button to open scanner, refresh button to load recent scans from Sheet |
| `scanner.html` | Netlify (free hosting) | Camera barcode/QR scanner — scans with phone camera, sends data to Apps Script |

---

## Step-by-Step Setup Guide

### Step 1 — Create Apps Script Project
Open any Google Sheet → **Extensions** → **Apps Script** → Delete default code → Paste `Code.gs` → Create new file `index.html` → Paste `index.html` code

### Step 2 — Deploy Apps Script as Web App
Click **Deploy** → **New Deployment** → Type: **Web App** → Execute as: **Me** → Access: **Anyone** → **Deploy** → Copy the Web App URL

### Step 3 — Add Apps Script URL to Scanner
Open `scanner.html` → Find `YOUR_APPS_SCRIPT_WEB_APP_URL_HERE` → Replace with the URL from Step 2

### Step 4 — Deploy Scanner on Netlify (Free)
Go to [netlify.com](https://netlify.com) → Sign up (free) → **Sites** → **Deploy manually** → Create a folder → Rename `scanner.html` to `index.html` → Put it in the folder → Drag-drop the folder → Get your Netlify URL

### Step 5 — Link Netlify URL in Apps Script
Open `index.html` in Apps Script → Find `YOUR_NETLIFY_URL_HERE` → Replace with your Netlify URL → **Deploy** → **New Deployment** (not just save — you must create a new deployment!)

### Step 6 — Test It
Open the Web App URL on your phone → Tap **"Open Barcode Scanner"** → Allow camera → Scan any barcode/QR code → Check your Google Sheet for the data

---

## Features

- Scan **barcodes and QR codes** using phone camera (front or back)
- Auto-send scanned data to **Google Sheets** in real-time
- **Beep sound** on successful scan (Web Audio API)
- **3-second debounce** to prevent duplicate scans of same barcode
- **Session scan history** on scanner page
- **Dashboard** with recent scans table in Apps Script
- **Mobile responsive** — works on any phone browser
- Works on **Chrome, Safari, Firefox, Edge** (Android & iOS)
- **100% free** — no paid tools, no API keys needed

---

## Tech Stack

| Technology | Purpose |
|-----------|---------|
| **Google Apps Script** | Backend — doGet, doPost web app endpoints |
| **Google Sheets** | Database — stores scanned barcodes with timestamps |
| **html5-qrcode** (v2.3.8) | Camera barcode & QR code scanning library |
| **Netlify** | Free HTTPS hosting for scanner page |
| **Web Audio API** | Beep sound feedback on scan |
| **JavaScript Fetch API** | Send scanned data from Netlify to Apps Script |

---

## Frequently Asked Questions

### Why can't I just use camera directly in Apps Script?
Google serves Apps Script HTML pages inside a sandboxed iframe with an opaque origin (`googleusercontent.com`). Browsers block camera/microphone access from opaque origins for security reasons. This is not a bug — it's by design.

### Why Netlify?
Netlify gives you **free HTTPS hosting** with a real domain origin. Camera access requires HTTPS + a trusted origin. Netlify provides both for free with zero configuration.

### Can I use Vercel / GitHub Pages / Firebase Hosting instead?
Yes! Any HTTPS hosting works. Just deploy `scanner.html` (renamed to `index.html`) on any static hosting platform.

### Does it work on iPhone / iOS Safari?
Yes. The html5-qrcode library supports iOS Safari. Make sure you're accessing via HTTPS.

### Can I scan multiple barcodes?
Yes. The scanner runs continuously. It has a 3-second debounce for the same barcode, but different barcodes scan instantly.

### Do I need to redeploy after changing Code.gs?
Yes! After ANY change to `Code.gs`, you must create a **New Deployment** in Apps Script. Just saving is not enough.

---

## Keywords

`google apps script camera not working` · `apps script camera permission denied` · `getUserMedia apps script` · `barcode scanner google sheets` · `qr code scanner apps script` · `html5-qrcode google sheets` · `netlify barcode scanner` · `apps script doPost` · `free barcode scanner google sheets` · `camera access blocked apps script` · `google apps script barcode reader` · `scan barcode to google sheets free` · `apps script sandbox camera fix` · `qr code to google sheets`

---

## Related Videos

- 🎥 [Fix Camera in Apps Script — Full Tutorial](https://youtu.be/Q780OwWfBro)
- 📺 [More Google Apps Script Tutorials](https://youtube.com/@rameezimdad)

---

## License

Free to use. If this helped you, subscribe to [@rameezimdad](https://youtube.com/@rameezimdad) on YouTube!
