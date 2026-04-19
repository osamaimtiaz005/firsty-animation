// InstructionBanner.jsx — first card visible; others reveal on scroll.
//
// Full word-by-word glossary + tables: see project root ANIMATION-GUIDE.md
//
// -----------------------------------------------------------------------------
// GSAP — QUICK GUIDE + WORD-BY-WORD
// -----------------------------------------------------------------------------
// GSAP = GreenSock Animation Platform → a library that changes numbers (opacity,
// position, scale, …) over time so the screen looks animated.
//
// Core verbs:
// - gsap.to(target, vars)      → tween TO vars (from wherever the element is now).
// - gsap.from(target, vars)    → tween FROM vars TO the element’s current layout.
// - gsap.fromTo(t, from, to)   → set both ends explicitly.
// - gsap.set(target, vars)     → no time — snap values instantly ("starting pose").
// - gsap.timeline(opts)        → one sequence; add steps with tl.to / tl.from.
//
// Word-by-word:
// - tween      = one animation between two states.
// - target     = DOM node(s) or CSS selector GSAP should change.
// - vars       = object of properties + duration/ease/delay.
// - ease       = math curve for speed (slow start, fast end, bounce, …).
// - timeline   = playlist of tweens; third arg on tl.to() = start time or "<" overlap.
//
// ScrollTrigger (plugin — must registerPlugin):
// - trigger    = element that defines where the scroll "scene" is measured from.
// - start/end  = scroll positions where the scene begins and stops.
// - scrub      = scroll position drives timeline progress (like a video scrub bar).
// - pin        = freeze the trigger on screen for that scroll range.
//
// React rule: use gsap.context + ctx.revert() in useEffect cleanup so unmount does
// not leave ScrollTriggers or tweens pointing at removed DOM.
// -----------------------------------------------------------------------------

import React, { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { IoFootsteps } from "react-icons/io5"

// Tell GSAP this extra feature exists (ScrollTrigger is not in the core file).
gsap.registerPlugin(ScrollTrigger)

const InstructionBanner = () => {
  const data = [
    {
      icon: IoFootsteps,
      text: "Available for users in North America, Europe & APAC",
    },
    { icon: IoFootsteps, text: "Connect anywhere instantly" },
    { icon: IoFootsteps, text: "No roaming charges, ever" },
    { icon: IoFootsteps, text: "Ad-supported for free connectivity" },
    { icon: IoFootsteps, text: "Supports all major devices" },
  ]

  console.log("🔍 InstructionBanner: Data prepared:", data.length, "items")

  return (
    <div className="md:px-24 py-4 bg-transparent w-full h-full">
      <h1 className="md:text-7xl text-4xl text-secondary py-8 text-center font-extrabold uppercase">
        Staying online, made easy
      </h1>
      <ScrollGsapSteps data={data} />
    </div>
  )
}

export default InstructionBanner

// ------------------------------------------
// ScrollGsapSteps — scroll-driven stacked cards (GSAP timeline + ScrollTrigger)
// ------------------------------------------
const ScrollGsapSteps = ({ data }) => {
  // useRef = grab real DOM nodes so GSAP can measure and animate them.
  const containerRef = useRef(null)
  const stepRefs = useRef([])

  useEffect(() => {
    // gsap.context groups every tween created inside the callback.
    // Second argument (containerRef) scopes selector queries and cleanup.
    const ctx = gsap.context(() => {
      const steps = stepRefs.current
      const container = containerRef.current

      if (!container || steps.length < 4) {
        console.error("❌ Refs incomplete")
        return
      }

      // gsap.set → instant layout; no animation yet.
      // Step 0 word-by-word: opacity 1 = fully visible; scale 1 = full size;
      // yPercent 0 = no vertical shift in GSAP’s percent-based transform;
      // zIndex 1 = draw order (higher = more "on top").
      gsap.set(steps[0], {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        opacity: 1,
        scale: 1,
        yPercent: 0,
        zIndex: 1,
      })

      // Steps 1..n: hidden (opacity 0), smaller (scale 0.8), pushed down (yPercent 100).
      // zIndex: (i) => i + 2 → each next card stacks above the previous number.
      gsap.set(steps.slice(1), {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        opacity: 0,
        scale: 0.8,
        yPercent: 100,
        zIndex: (i) => i + 2,
      })

      // timeline = one master animation made of smaller steps.
      // scrollTrigger on the timeline means: "this whole timeline is driven by scroll".
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container, // which element starts the scroll "scene"
          start: "top top", // when the top of container hits the top of the viewport
          end: "+=600", // scene length in pixels of scroll (tweak to feel right)
          scrub: true, // smooth link between scroll position and timeline progress
          pin: true, // freeze this section on screen while user scrolls through the tween
          anticipatePin: 1, // tiny iOS/layout fix so pinning feels less jumpy
          markers: false, // set true while debugging to see start/end lines in DevTools
        },
      })

      // tl.to(element, vars, position) → add a tween to the timeline.
      // The third argument (i * 0.4) is the start time on the timeline (overlap/stagger).
      // "back.out" ease = slight overshoot at the end (bouncy feel).
      steps.slice(1).forEach((step, i) => {
        tl.to(
          step,
          {
            yPercent: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "back.out(1.7)",
          },
          i * 0.4
        )
      })

      // After DOM/layout changes, recalc ScrollTrigger positions (safe to call).
      ScrollTrigger.refresh()
    }, containerRef)

    // On unmount: remove tweens, listeners, and ScrollTriggers created in this context.
    return () => ctx.revert()
  }, [data])

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[80vh] overflow-visible text-white"
    >
      {/* ref callback stores each step div in stepRefs.current[i] so GSAP can target them */}
      {[1, 2, 3, 4].map((num, i) => (
        <div
          key={num}
          ref={(el) => (stepRefs.current[i] = el)}
          className="p-12 bg-[#7bd8e0] rounded-xl shadow-2xl border border-white/20 absolute w-full"
        >
          <div className="flex items-center justify-start gap-4">
            <div className="px-6 py-2 bg-transparent rounded-full font-bold text-secondary border italic text-lg shadow-md">
              {num}
            </div>
            <h2 className="text-lg font-bold text-secondary truncate">
              Step {num} Title
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div>
              <h1 className="text-6xl text-start text-secondary uppercase font-bold">
                Step {num} Headline
              </h1>
              <p className="text-lg text-secondary">
                This is the description for step {num}, similar layout as Step
                1.
              </p>
            </div>
            <div>
              <img src={`images/image_0${num}.png`} alt={`Step ${num}`} />
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}
