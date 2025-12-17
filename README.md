<div align="center">
  <br />
  <h1>✨ Pushti's PortFolio</h1>
  <h3>Cinematic Developer Portfolio & Digital Dashboard</h3>
  
  <p>
    <a href="https://developer.mozilla.org/en-US/docs/Web/HTML"><img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5"></a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><img src="https://img.shields.io/badge/CSS3-Advanced-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3"></a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript"></a>
    <a href="https://lucide.dev/"><img src="https://img.shields.io/badge/Icons-Lucide-F05032?style=for-the-badge&logo=lucide&logoColor=white" alt="Lucide"></a>
  </p>

  <p>
    <b>A high-fidelity, physics-based interface engineered for the modern web.</b><br>
    <i>No Frameworks. No Bloat. Pure Performance.</i>
  </p>
  <br />
</div>

---

## 🔮 The Vision

**Pushti-io** represents a shift from static web pages to **spatial digital environments**. 

Designed as the central command center for **Pushti Kadia's** work, this project challenges the standard "flat" portfolio archetype. By leveraging advanced **DOM manipulation**, **hardware-accelerated CSS**, and **procedural lighting**, it creates a tactile, holographic experience that feels alive. 

> **Core Philosophy:** "The medium is the message." The portfolio itself serves as a case study in advanced frontend engineering and user experience design.

---

## ⚡ Engineering & Capabilities

This dashboard is built on a custom micro-interaction engine that handles physics and lighting in real-time.

### 🔦 **Dynamic Spotlight UI (Raycasting)**
Instead of static hover states, the interface uses a **coordinate-aware lighting system**. 
* **Logic:** JavaScript tracks the cursor position (`e.clientX`, `e.clientY`) relative to each card's bounding box.
* **Rendering:** It updates CSS variables (`--mouse-x`, `--mouse-y`) instantly to paint a radial gradient mask. 
* **Effect:** This creates a "flashlight" effect that reveals borders and textures only where you are looking, mimicking high-end dashboard displays.

### 📐 **3D Parallax Tilt Physics**
A lightweight physics script calculates the angle of entry for the mouse cursor.
* **Math:** The script computes the offset from the card's center point and maps it to a rotation matrix (max 15° on X/Y axes).
* **Smoothness:** Uses CSS `perspective(1000px)` and `transform-style: preserve-3d` for buttery smooth motion without layout thrashing.
* **Snap-back:** Cards instantly spring back to zero-state when the cursor leaves.

### 🎞️ **Procedural Texture Generation**
To avoid the "sterile" look of flat colors, the background employs an **SVG Turbulence Filter**.
* **Technique:** An SVG `<filter>` with `feTurbulence` generates fractal noise.
* **Result:** A subtle, cinematic "film grain" that adds depth and texture to the dark mode aesthetic, reducing eye strain and increasing perceived quality.

### 🕰️ **Live Telemetry & Localization**
The dashboard maintains a real-time connection to the developer's physical context.
* **Sync:** Uses `Intl.DateTimeFormat` to sync the on-screen clock specifically to **IST (Indian Standard Time)**.
* **Status:** Dynamic availability indicators ("Ping" animations) signal readiness for new collaborations.

---

## 🛠️ Technical Architecture

This project strictly adheres to a **Zero-Dependency** architecture to ensure maximum load speed (Lighthouse score: 100).

| Component | Technology Used |
| :--- | :--- |
| **Structure** | Semantic HTML5 (Grid/Flexbox Layouts) |
| **Styling** | Modern CSS3 (Variables, Backdrop-Filter, Calc Logic) |
| **Interactivity** | Vanilla JavaScript (ES6+ Modules, Event Delegation) |
| **Iconography** | Lucide (Lightweight, tree-shakeable SVG library) |
| **Typography** | Space Grotesk (Headers) & Inter (UI Text) |

---

## 📂 Featured Projects

The dashboard acts as a gateway to my primary repositories:

| Project | Description | Tech Stack |
| :--- | :--- | :--- |
| **🌐 EPOCH** | A 3D planetary surveillance system utilizing **NASA EONET** API to visualize natural hazards. | Python, Three.js, Flask |
| **📈 Trade Pulse** | Real-time financial volatility dashboard tracking stocks & crypto metrics. | Streamlit, Pandas, Yahoo Finance |
| **🐼 PandaTech** | A comprehensive structured repository for mastering Data Science workflows. | Python, NumPy, Matplotlib |

---

<p align="center"> <b>Pushti-io</b> • Created by <a href="https://github.com/pushtikadia"><b>Pushti Kadia</b></a> </p>
