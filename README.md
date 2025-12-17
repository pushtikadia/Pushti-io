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
    <b>A high-fidelity, Single Page Application (SPA) engineered for the modern web.</b><br>
    <i>No Frameworks. No Bloat. Pure Performance.</i>
  </p>
  <br />
</div>

---

## 🔮 The Vision

**Pushti's PortFolio** represents a shift from static web pages to **fluid digital experiences**. 

Designed as the central command center for **Pushti Kadia's** work, this project implements the "Aurora Glass" aesthetic—combining deep, atmospheric lighting with professional minimalism. By leveraging a custom **Virtual Routing system** and **physics-based micro-interactions**, it creates a seamless, app-like feel without the overhead of heavy frontend frameworks.

> **Core Philosophy:** "The medium is the message." The portfolio itself serves as a case study in advanced frontend engineering, accessibility, and user experience design.

---

## ⚡ Engineering & Capabilities

This dashboard is built on a custom interaction engine that handles state management, physics, and animations in real-time.

### 🖱️ **Physics-Based Cursor & Magnetic UI**
Instead of the default system cursor, the interface uses a **custom lag-based physics model**. 
* **Logic:** The main dot tracks raw mouse input, while the outer ring follows using **Linear Interpolation (Lerp)** with a 0.15 damping factor.
* **Magnetic Effect:** The cursor intelligently detects interactive elements (buttons, links) and "snaps" to them, expanding its radius to indicate affordance.
* **Result:** A fluid, liquid-like navigation experience that feels organically connected to the user's hand.

### 🌌 **Virtual Routing (SPA Architecture)**
A lightweight, custom-built router handles navigation without page reloads.
* **Mechanism:** JavaScript intercepts navigation clicks and dynamically swaps active content containers (`.page`) using CSS transforms.
* **Performance:** Ensures instant transitions with zero latency, maintaining a persistent state (like the background music or animation loops) throughout the session.
* **Transitions:** Utilizes cubic-bezier timing functions for smooth entry/exit animations of page sections.

### 📐 **3D Parallax Tilt Physics**
A lightweight physics script calculates the angle of entry for the mouse cursor on project cards.
* **Math:** The script computes the offset from the card's center point and maps it to a rotation matrix (max 5° on X/Y axes).
* **Smoothness:** Uses CSS `perspective(1000px)` and `transform-style: preserve-3d` for buttery smooth motion without layout thrashing.
* **Snap-back:** Cards instantly spring back to zero-state when the cursor leaves.

### 🎞️ **Procedural Texture & Atmosphere**
To avoid the "sterile" look of flat colors, the background employs a multi-layered rendering approach.
* **Aurora Engine:** Three distinct gradient orbs float on independent animation loops to create a non-repeating, organic background.
* **Film Grain:** An SVG `<filter>` with `feTurbulence` generates fractal noise, adding a subtle "film grain" texture that enhances the dark mode aesthetic and reduces banding.

---

## 🛠️ Technical Architecture

This project strictly adheres to a **Zero-Dependency** architecture to ensure maximum load speed (Lighthouse score: 100).

| Component | Technology Used |
| :--- | :--- |
| **Structure** | Semantic HTML5 (Sections/Nav Layouts) |
| **Styling** | Modern CSS3 (Variables, Backdrop-Filter, Keyframes) |
| **Interactivity** | Vanilla JavaScript (ES6+ Modules, RequestAnimationFrame Loop) |
| **Iconography** | Lucide (Lightweight, tree-shakeable SVG library) |
| **Typography** | Manrope (Headers) & Inter (UI Text) |

---

## 📂 Featured Projects

The dashboard acts as a gateway to my primary repositories:

| Project | Description | Tech Stack |
| :--- | :--- | :--- |
| **🌐 EPOCH** | A 3D planetary surveillance system utilizing **NASA EONET** API to visualize natural hazards in real-time. | Python, Three.js, Flask |
| **📈 Trade Pulse** | Real-time financial volatility dashboard tracking live stock & crypto metrics. | Streamlit, Pandas, Yahoo Finance |
| **🐼 PandaTech** | Comprehensive toolkit and documentation for mastering Data Science workflows. | Python, NumPy, Matplotlib |

---

<p align="center"> <b>Pushti's PortFolio</b> • Created by <a href="https://github.com/pushtikadia"><b>Pushti Kadia</b></a> </p>
