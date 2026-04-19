# Animation guide: GSAP and Framer Motion (plain English)

This project uses **GSAP** for scroll-driven timelines and **Framer Motion** for React-friendly enter/exit animations. This document explains **each important word** and ties it to the real files in this repo.

---

## Table of contents

1. [GSAP — word by word](#gsap--word-by-word)
2. [ScrollTrigger — word by word](#scrolltrigger--word-by-word)
3. [How our GSAP code maps to those words (`InstructionBanner.jsx`)](#how-our-gsap-code-maps-to-those-words-instructionbannerjsx)
4. [Framer Motion — word by word](#framer-motion--word-by-word)
5. [How our Framer Motion code maps (`HeroBanner.jsx`)](#how-our-framer-motion-code-maps-herobannerjsx)
6. [GSAP vs Framer Motion — when to use which](#gsap-vs-framer-motion--when-to-use-which)

---

## GSAP — word by word

| Word | What it means |
|------|----------------|
| **GSAP** | **G**reen**S**ock **A**nimation **P**latform — a JavaScript library that changes CSS properties (and more) over time so things move smoothly. |
| **Tween** | One animation from value A to value B (one “shot”). |
| **Target** | The thing you animate — usually a DOM element, a CSS selector string, or an array of elements. |
| **Vars** | The second argument object: properties to animate (`opacity`, `x`, `scale`, …) plus timing (`duration`, `ease`). |
| **`gsap.to()`** | Animate **to** the values in `vars` (starting from whatever the element looks like now). |
| **`gsap.from()`** | Animate **from** the values in `vars` **to** the element’s current state. |
| **`gsap.fromTo()`** | You give both start and end objects — full control. |
| **`gsap.set()`** | No animation — **instantly** set properties (a “starting pose” before scrolling or playing). |
| **`gsap.timeline()`** | A **container** that plays many tweens in order, like one long choreographed sequence. |
| **`tl.to()`** | Add a tween **onto** the timeline. |
| **Ease / easing** | How the motion **feels** (linear, smooth stop, overshoot, bounce). Example: `"back.out(1.7)"` has a small overshoot at the end. |
| **`duration`** | How long one tween takes (in **seconds**) when **not** using scroll scrubbing. |
| **`gsap.context()`** | Groups animations created inside a function so you can **revert** (delete) them all at once — important in React so you do not leak animations after unmount. |
| **`ctx.revert()`** | Undo everything created in that context (tweens, ScrollTriggers tied to it). Call this in `useEffect` cleanup. |
| **`registerPlugin()`** | Tells GSAP to load an extra module (here **ScrollTrigger**) because it is not inside the tiny core bundle. |

---

## ScrollTrigger — word by word

| Word | What it means |
|------|----------------|
| **ScrollTrigger** | A GSAP **plugin** that links animation progress to **how far the user has scrolled**, instead of only using a clock. |
| **Trigger** | The **element** that defines “where” the scroll scene starts (often a section wrapper). |
| **`start`** | The scroll position when the scene **begins**. Example `"top top"` = when the **top** of the trigger hits the **top** of the **viewport**. |
| **`end`** | Where the scene **ends**. `"+=600"` means “600px of scroll **after** the start” (extra scroll distance for the animation). |
| **`scrub`** | If `true`, timeline progress is **locked** to scroll position (like dragging a video timeline with the scrollbar). Smooth feel. |
| **`pin`** | If `true`, the trigger element **sticks** on screen while the user scrolls through the `start`–`end` range. |
| **`anticipatePin`** | A small number that helps avoid **layout jumps** when pinning (especially on mobile). |
| **`markers`** | Debug lines in the page showing where `start`/`end` are. Turn on while building; turn off in production. |
| **`ScrollTrigger.refresh()`** | Recalculates positions after layout changes (images load, fonts swap, resize). Safe to call when the DOM updates. |

---

## How our GSAP code maps to those words (`InstructionBanner.jsx`)

File: `src/components/InstructionBanner.jsx` — inner component **`ScrollGsapSteps`**.

| Code idea | Plain English |
|-----------|----------------|
| `import gsap from "gsap"` | Bring in the core animation engine. |
| `import { ScrollTrigger } from "gsap/ScrollTrigger"` | Bring in the scroll plugin (separate file). |
| `gsap.registerPlugin(ScrollTrigger)` | Register that plugin once so GSAP knows the `scrollTrigger` option is valid. |
| `useRef` for `containerRef` and `stepRefs` | React **refs** hold pointers to **real DOM nodes**. GSAP needs real nodes, not React descriptions. |
| `gsap.context(() => { ... }, containerRef)` | Every tween created inside belongs to this component; `revert()` cleans them up. |
| `gsap.set(steps[0], { ... })` | **Instantly** place step 1 visible (opacity 1, scale 1, on top). |
| `gsap.set(steps.slice(1), { ... })` | **Instantly** hide steps 2–4 below / faded — before scroll runs. |
| `gsap.timeline({ scrollTrigger: { ... } })` | One **timeline** whose playback is driven by **scroll** (not only time). |
| `trigger: container` | The **section** element decides when scrolling “activates” this scene. |
| `scrub: true` | User scroll = scrub bar for this timeline. |
| `pin: true` | Section stays **pinned** while the scroll range plays. |
| `tl.to(step, { yPercent: 0, opacity: 1, ... }, i * 0.4)` | For each later card, add a tween; **`i * 0.4`** staggers start times on the timeline (overlap). |
| `return () => ctx.revert()` | On unmount or before re-running the effect: **remove** GSAP’s hooks so nothing runs on deleted DOM. |

**`yPercent` in plain English:** move the element by a **percentage of its own height**. `100` often means “one full card height downward” in GSAP’s transform space — good for stacked slides.

---

## Framer Motion — word by word

| Word | What it means |
|------|----------------|
| **Framer Motion** | A React library that adds **`motion.*` components** with animation props. |
| **`motion.div`, `motion.img`, …** | Same as normal HTML tags, plus props like `initial`, `animate`, `exit`. |
| **`initial`** | The **first** visual state when the component **mounts** (enters the tree). |
| **`animate`** | The state to **animate toward** — can update when props/state change. |
| **`exit`** | How it looks **while leaving** — only runs if **`AnimatePresence`** wraps it. |
| **`transition`** | Timing: **`duration`** (seconds), **`ease`**, **`delay`**, or **`type`** (`"tween"` vs `"spring"`). |
| **`AnimatePresence`** | Lets React **wait** for exit animations before removing DOM nodes. Without it, `exit` never runs. |
| **`key` on list items** | React uses **`key`** to know **which** item is which. Framer needs stable keys so exit animations match the right item. |

---

## How our Framer Motion code maps (`HeroBanner.jsx`)

File: `src/components/HeroBanner.jsx`.

| Code idea | Plain English |
|-----------|----------------|
| `import { motion, AnimatePresence } from "framer-motion"` | `motion` = animated tags; `AnimatePresence` = exit support. |
| `useState` for `trails` | A list of small objects (each trail has `id`, `x`, `y`, `tilt`, `scale`, `img`). |
| On `mousemove`, `setTrails([...prev, newTrail])` | Each move can **add** a new image to the list → new **mount** → Framer can run **`initial` → `animate`**. |
| `setTimeout` removes a trail after 2s | **Unmount** that item → **`exit`** runs if `AnimatePresence` is present. |
| `<AnimatePresence>` wrapping the `map` | Required so **`exit={{ opacity: 0, scale: 0.5 }}`** plays before removal. |
| `<motion.img key={trail.id} ... />` | **`key`** must be **unique per trail** so React/Framer know which image is exiting. |
| `initial` vs `animate` | Image **fades in** and **scales up** from `initial` to `animate`. |
| `rotateY: trail.tilt` | A 3D **tilt** (flip feel) based on cursor direction. |

---

## GSAP vs Framer Motion — when to use which

| Situation | Good default |
|-----------|----------------|
| Scroll scenes, pinning, long choreographed sequences | **GSAP + ScrollTrigger** |
| Lists that add/remove items, modals, buttons, small UI motion | **Framer Motion** |
| You need one timeline that many tweens share | **GSAP timeline** |
| You want animations declared next to JSX with `initial`/`animate` | **Framer Motion** |

Both can coexist (this project uses both).

---

## Files to read in the repo

| File | Role |
|------|------|
| `src/components/InstructionBanner.jsx` | GSAP `timeline` + `ScrollTrigger`, `gsap.context` cleanup |
| `src/components/HeroBanner.jsx` | `motion.img`, `AnimatePresence`, pointer trails |

For **inline** reminders, open those files — they contain shorter comment blocks that match this guide.
