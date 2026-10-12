# huokaingthara_announcement1
# 🚨 HUOKAING THARA BANK & ISP — Official Executive Announcement Dashboard

An interactive, high-tech cybernetic web announcement portal for **HUOKAING THARA BANK & ISP**. This platform presents official corporate leadership decrees, organizational transitions, and high-speed ISP launch milestones in both Khmer and English, supported by Web Speech API voice synthesis, animated telemetry logs, and a dynamic 2-year launch countdown.

## 🌟 Key Features

* **🌐 Dual-Language Executive Decrees:** Full official declarations available in both **Khmer (🇰🇭)** and **English (🇺🇸)** with clear organizational role highlights.
* **🎙️ Voice AI Presentation Reader:** Integrated browser Web Speech API (`speechSynthesis`) that sequentially reads out executive announcements in Khmer or English with dynamic audio waveform visualization.
* **⏳ 2-Year Epoch Countdown:** Real-time countdown clock tracking operational deployment.
* **📡 Live Telemetry Broadcast Feed:** Terminal-style live log simulation broadcasting corporate directives and authorization states.
* **🌌 Matrix Canvas Animation:** Dynamic backdrop featuring interactive digital rain / matrix stream rendered using HTML5 Canvas.
* **🕯️ Condolence & Transition Notice:** Dedicated memorial visual section acknowledging former executive contributions.

## 📂 Project Structure

huokaing-thara-announcement/
├── index.html              # Main HTML markup and decree content
├── style.css               # Futuristic glassmorphism & responsive CSS styling
├── app.js                  # Matrix canvas, Voice AI reader, countdown & log logic
└── isp_announcement.jpg    # Banner image / favicon asset

## 🚀 Quick Start

1. **Clone or Download the Repository:**
git clone [https://github.com/your-username/huokaing-thara-bank.git](https://github.com/your-username/huokaing-thara-bank.git)
cd huokaing-thara-bank

2. **Open in Browser:**
Simply open `index.html` in any modern web browser (Google Chrome, Microsoft Edge, Firefox, or Safari).
3. **Local Development Server (Optional):**
For optimal Web Speech API voice loading, run a local development server using Node or Python:

# Using Python 3
python -m http.server 8000

# Using Node.js live-server
npx live-server

Then navigate to `http://localhost:8000` in your web browser.

## 👥 Executive Appointments & Leadership Structure

| Role | Appointed Executive | Directives & Scope |
| --- | --- | --- |
| **Chief Executive Officer (CEO)** | **Mr. LEN** *(Replacing Mr. MEN)* | Overall Corporate Strategy & Business Development |
| **Chief Executive Officer (CEO)** | **Mr. DOM** | Digital Banking Growth & Financial Market Expansion |
| **Chief Executive Officer (CEO)** | **Mr. NAK** *(Replacing Mr. DO)* | ISP Infrastructure & Regional Telecom Operations |
| **Chief Executive Officer (CEO)** | **Mr. KUO** | Financial Management & Strategic Technical Innovation |
| **Director** | **Mr. SENG CHHAT** | Corporate Governance & Executive Transition Approval |
| **Secretary & Chief of Customer Service** | **Mrs. KIMMUY** | Corporate Documentation & Customer Touchpoint Excellence |
| **Chief of Security** | **Mr. JAV** | Physical Facility Safety & Internal Defense Operations |
| **Chief Cybersecurity Officer & Head of Marketing** | **Mr. HUOKAING THARA** | Network Defense, Transaction Security & Market Expansion |

> **Approval Note:** Decisions approved by **Mr. HUO** and **Mr. B**, and confirmed by **Director SENG CHHAT**.

## 🛠️ Tech Stack & Dependencies

* **Frontend:** HTML5, CSS3 (CSS Variables, Flexbox, CSS Grid, Glassmorphism backdrop filters)
* **Animation:** HTML5 2D Canvas (Matrix Rain), CSS Animation keyframes
* **Voice AI Engine:** Native Web Speech API (`SpeechSynthesisUtterance`)
* **Typography:** `Inter`, `Kantumruy Pro` (Khmer), System Monospace

## ⚙️ Configuration & Customization

### Updating Countdown Target

To modify the launch target duration, adjust `initCountdown()` in `app.js`:

// Target date calculation (Default: 730 days / 2 years)
const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 730);

### Voice Reader Language Fine-Tuning

Voices are initialized via `SpeechSynthesisUtterance`. Supported language tags:

* Khmer: `km-KH`
* English: `en-US`

## 📄 License

Copyright © 2026 **HUOKAING THARA BANK & ISP**. All rights reserved.

```

```
