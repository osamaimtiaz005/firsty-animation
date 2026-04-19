import React, { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

// Full word-by-word glossary + tables: see project root ANIMATION-GUIDE.md
//
// -----------------------------------------------------------------------------
// FRAMER MOTION — QUICK GUIDE + WORD-BY-WORD
// -----------------------------------------------------------------------------
// Framer Motion = React components (motion.img, motion.div, …) + extra props.
//
// Word-by-word:
// - motion.*   = HTML tag + animation API (initial / animate / exit / transition).
// - initial    = state when the element first mounts (first paint of this node).
// - animate    = state we interpolate toward; update when props/state change.
// - exit       = state when the element unmounts — ONLY if AnimatePresence wraps it.
// - transition = how long / easing / spring — controls interpolation, not the values.
// - AnimatePresence = parent that delays removal until exit animation finishes.
// - key        = must be unique per list item so React knows which node is exiting.
//
// opacity 0 → invisible; opacity 1 → visible.
// scale 0.6 → 60% size; scale 1 → full size.
// rotateY    = degrees tilt around the vertical axis (3D flip feel).
// x, y       = offset in pixels from normal layout (Framer shorthand for transforms).
//
// vs GSAP: Framer = declarative next to JSX; GSAP = timelines & scroll (InstructionBanner).
// -----------------------------------------------------------------------------

const imageList = [
  "https://picsum.photos/seed/a/80",
  "https://picsum.photos/seed/b/80",
  "https://picsum.photos/seed/c/80",
  "https://picsum.photos/seed/d/80",
]

const HeroBanner = () => {
  const [trails, setTrails] = useState([])
  const lastPos = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handleMove = (e) => {
      const { x: lastX, y: lastY } = lastPos.current
      const dx = e.clientX - lastX
      const dy = e.clientY - lastY

      // keep the image straight (no rotation), only tilt slightly
      // tilt = lean direction (like leaning opposite the cursor movement)
      // You can tweak tilt range (e.g., ±30 degrees)
      const tilt = dx > 0 ? -30 : dx < 0 ? 30 : 0

      // Offset spawn position slightly behind cursor
      const offset = 20
      const xOffset = e.clientX - Math.sign(dx) * offset
      const yOffset = e.clientY - Math.sign(dy) * offset

      const scale = 0.9 + Math.random() * 0.3
      const id = Math.random().toString(36).substr(2, 9)

      const newTrail = {
        id,
        x: xOffset - 40,
        y: yOffset - 40,
        tilt,
        scale,
        img: imageList[Math.floor(Math.random() * imageList.length)],
      }

      setTrails((prev) => [...prev, newTrail])
      lastPos.current = { x: e.clientX, y: e.clientY }

      // remove after 2s
      setTimeout(() => {
        setTrails((prev) => prev.filter((t) => t.id !== id))
      }, 2000)
    }

    window.addEventListener("mousemove", handleMove)
    return () => window.removeEventListener("mousemove", handleMove)
  }, [])

  return (
    <div className="relative overflow-hidden bg-transparent flex flex-col justify-center items-center py-12 px-20 gap-4">
      {/* -----------------------------
          Background Image Trails
      ----------------------------- */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        {/* AnimatePresence = run `exit` animations before React deletes each trail */}
        <AnimatePresence>
          {trails.map((trail) => (
            <motion.img
              key={trail.id}
              src={trail.img}
              alt=""
              /* initial: first frame when this image enters the list */
              initial={{
                opacity: 0,
                scale: 0.6,
                rotateY: trail.tilt,
                x: trail.x,
                y: trail.y,
              }}
              /* animate: values we settle on; Framer tweens from initial → animate */
              animate={{
                opacity: 1,
                scale: trail.scale,
                rotateY: trail.tilt,
                x: trail.x,
                y: trail.y,
              }}
              /* exit: played when this item is removed from `trails` (after timeout) */
              exit={{ opacity: 0, scale: 0.5 }}
              /* transition: how long / how easing works for these changes */
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="absolute w-40 h-40 rounded-md"
              style={{
                transformStyle: "preserve-3d",
              }}
            />
          ))}
        </AnimatePresence>
      </div>

      {/* -----------------------------
          Foreground Content
      ----------------------------- */}
      <div className="text-secondary md:text-9xl text-4xl font-extrabold uppercase text-center mt-4 z-10 ">
        The first free mobile network
      </div>
      <div className="text-secondary md:text-4xl text-lg  font-medium text-center mt-4 z-10">
        Stay Online Anywhere - no cost, no hassle
      </div>

      <div className="w-40 p-2 bg-primary rounded-2xl z-10">
        <img src="images/default-qr-code.png" alt="QR Code" />
        <p className="text-secondary text-md font-bold text-center">Try it</p>
      </div>
    </div>
  )
}

export default HeroBanner
