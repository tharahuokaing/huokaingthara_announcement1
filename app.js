/* ==========================================================================
   HUOKAING THARA BANK & ISP - DASHBOARD ENGINE & VOICE READER
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  initMatrixCanvas();
  initCountdown();
  initTelemetryFeed();
});

/* --------------------------------------------------------------------------
   1. Matrix Canvas Background Animation
   -------------------------------------------------------------------------- */
function initMatrixCanvas() {
  const canvas = document.getElementById("hologram-canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  const characters = "01010101011001010111000101HUOKAINGTHARABANKISP";
  const fontSize = 14;
  const columns = Math.floor(canvas.width / fontSize);
  const drops = Array(columns).fill(1);

  function drawMatrix() {
    ctx.fillStyle = "rgba(8, 13, 26, 0.08)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#00f2fe";
    ctx.font = `${fontSize}px monospace`;

    for (let i = 0; i < drops.length; i++) {
      const text = characters.charAt(Math.floor(Math.random() * characters.length));
      const x = i * fontSize;
      const y = drops[i] * fontSize;

      ctx.fillText(text, x, y);

      if (y > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }

  setInterval(drawMatrix, 33);
}

/* --------------------------------------------------------------------------
   2. Launch Countdown Timer Logic
   -------------------------------------------------------------------------- */
function initCountdown() {
  const countdownEl = document.getElementById("countdown");
  if (!countdownEl) return;

  // Set target launch date (Example: 30 days from today)
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 30);

  function updateTimer() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      countdownEl.innerText = "SYSTEM LAUNCHED";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownEl.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

  updateTimer();
  setInterval(updateTimer, 1000);
}

/* --------------------------------------------------------------------------
   3. Web Speech API - Sequential Voice AI Reader
   -------------------------------------------------------------------------- */
let currentSpeech = null;

function startSequentialPresentation(langCode) {
  stopVoiceAI(); // Stop any ongoing speech

  const transcriptBox = document.getElementById("voice-transcript");
  let textToRead = "";

  if (langCode === "km") {
    const kmCard = document.querySelector(".khmer-card .decree-body");
    textToRead = kmCard ? kmCard.innerText : "";
    if (transcriptBox) transcriptBox.innerText = "🎙️ Reading Khmer Executive Announcement...";
  } else {
    const enCard = document.querySelector(".decree-card:not(.khmer-card) .decree-body");
    textToRead = enCard ? enCard.innerText : "";
    if (transcriptBox) transcriptBox.innerText = "🎙️ Reading English Executive Announcement...";
  }

  if (!("speechSynthesis" in window)) {
    if (transcriptBox) transcriptBox.innerText = "⚠️ Speech synthesis not supported in this browser.";
    return;
  }

  // Sanitize text by removing emojis for clearer speech
  const cleanText = textToRead.replace(/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu, '');

  currentSpeech = new SpeechSynthesisUtterance(cleanText);
  currentSpeech.lang = langCode === "km" ? "km-KH" : "en-US";
  currentSpeech.rate = 0.95; // Speech speed

  // Animate waveform while speaking
  setWaveformActive(true);

  currentSpeech.onend = () => {
    setWaveformActive(false);
    if (transcriptBox) transcriptBox.innerText = "✅ Voice Presentation Completed.";
  };

  currentSpeech.onerror = () => {
    setWaveformActive(false);
    if (transcriptBox) transcriptBox.innerText = "🛑 Voice Presentation Interrupted.";
  };

  window.speechSynthesis.speak(currentSpeech);
}

function stopVoiceAI() {
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }
  setWaveformActive(false);
  const transcriptBox = document.getElementById("voice-transcript");
  if (transcriptBox) transcriptBox.innerText = "System Standby. Click any button above to read the official executive appointments.";
}

function setWaveformActive(active) {
  const bars = document.querySelectorAll(".waveform-bar");
  bars.forEach((bar) => {
    if (active) {
      bar.style.animationPlayState = "running";
      bar.style.opacity = "1";
    } else {
      bar.style.animationPlayState = "paused";
      bar.style.opacity = "0.3";
    }
  });
}

/* --------------------------------------------------------------------------
   4. Live Telemetry Broadcast Log Stream
   -------------------------------------------------------------------------- */
function initTelemetryFeed() {
  const feedList = document.getElementById("feed-list");
  if (!feedList) return;

  const logs = [
    "AUTHENTICATING CORPORATE EXECUTIVE DIRECTIVES...",
    "DECISION APPROVED BY: MR. HUO & MR. B",
    "CONFIRMED BY: MR. SENG CHHAT (DIRECTOR)",
    "APPOINTED: MR. LEN -> CHIEF EXECUTIVE OFFICER (CEO)",
    "APPOINTED: MR. NAK -> CHIEF EXECUTIVE OFFICER (CEO)",
    "EXECUTIVE NOTICE: CONDOLENCES TO MR. DO & MR. MEN",
    "ENCRYPTING TELEMETRY DATA NODES...",
    "HUOKAING THARA BANK & ISP ONLINE READY."
  ];

  feedList.innerHTML = ""; // Clear initial text

  logs.forEach((log, index) => {
    setTimeout(() => {
      const li = document.createElement("li");
      const timestamp = new Date().toISOString().split("T")[1].slice(0, 8);
      li.innerText = `[${timestamp}] > ${log}`;
      li.style.padding = "2px 0";
      feedList.appendChild(li);
    }, index * 800);
  });
}
