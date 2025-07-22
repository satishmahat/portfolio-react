import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import { SiExpress, SiTailwindcss, SiFigma } from "react-icons/si"
import { DiCss3, DiHtml5, DiJavascript1, DiNodejsSmall, DiReact, DiMongodb, DiGithubBadge, DiPhp } from "react-icons/di"

const skillItem = [
  { imgSrc: <DiHtml5 />, label: "HTML", desc: "Markup Language" },
  { imgSrc: <DiCss3 />, label: "CSS", desc: "User Interface" },
  { imgSrc: <SiTailwindcss />, label: "TailwindCSS", desc: "User Interface" },
  { imgSrc: <DiJavascript1 />, label: "JavaScript", desc: "Interaction" },
  { imgSrc: <DiReact />, label: "React", desc: "Framework" },
  { imgSrc: <DiNodejsSmall />, label: "NodeJS", desc: "Web Server" },
  { imgSrc: <SiExpress />, label: "ExpressJS", desc: "Node Framework" },
  { imgSrc: <DiMongodb />, label: "MongoDB", desc: "Database" },
  { imgSrc: <SiFigma />, label: "Figma", desc: "Design tool" },
  { imgSrc: <DiPhp />, label: "PHP", desc: "Server Side Script" },
  { imgSrc: <DiGithubBadge />, label: "Github", desc: "Version Control" },
]

const Skills = () => {
  const [index, setIndex] = useState(0)
  const componentRef = useRef(null) // Ref for the entire Skills component
  const [isInView, setIsInView] = useState(false)
  const touchStartY = useRef(0) // To track touch start position

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { threshold: 0.5 }, // Trigger when 50% of the component is visible
    )

    if (componentRef.current) {
      observer.observe(componentRef.current)
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current)
      }
    }
  }, [])

  // Generic function to handle navigation (both wheel and touch)
  // Returns true if an internal scroll occurred, false otherwise.
  const handleNavigation = (direction) => {
    // direction: 1 for next item (scroll down/swipe up), -1 for previous item (scroll up/swipe down)
    let internalScrollOccurred = false

    if (direction === 1) {
      // Scrolling down or swiping up
      if (index < skillItem.length - 1) {
        setIndex((prevIndex) => prevIndex + 1)
        internalScrollOccurred = true
      }
    } else if (direction === -1) {
      // Scrolling up or swiping down
      if (index > 0) {
        setIndex((prevIndex) => prevIndex - 1)
        internalScrollOccurred = true
      }
    }

    if (navigator.vibrate && internalScrollOccurred) {
      navigator.vibrate(30)
    }
    return internalScrollOccurred
  }

  const handleWheel = (e) => {
    if (!isInView) {
      return // Only handle wheel scroll if the component is in view
    }

    const isScrollingDown = e.deltaY > 0
    const isScrollingUp = e.deltaY < 0

    let shouldPreventDefault = false
    if (isScrollingDown) {
      shouldPreventDefault = handleNavigation(1)
    } else if (isScrollingUp) {
      shouldPreventDefault = handleNavigation(-1)
    }

    if (shouldPreventDefault) {
      e.preventDefault() // Only prevent if an internal scroll happened
    }
  }

  const handleTouchStart = (e) => {
    // No need for isInView check here, as listener is on componentRef
    touchStartY.current = e.touches[0].clientY
  }

  const handleTouchMove = (e) => {
    // Only process if the component is in view
    if (!isInView) {
      return
    }

    const touchCurrentY = e.touches[0].clientY
    const deltaY = touchCurrentY - touchStartY.current
    const swipeThreshold = 50 // Minimum vertical distance for a deliberate swipe

    // Determine if we are at the boundaries of the skill items
    // Swiping down means deltaY > 0 (touch moves down, content moves down, index decreases)
    // Swiping up means deltaY < 0 (touch moves up, content moves up, index increases)
    const atStartAndSwipingDown = index === 0 && deltaY > 0
    const atEndAndSwipingUp = index === skillItem.length - 1 && deltaY < 0

    // Prevent default page scroll UNLESS we are at a boundary where the page should scroll.
    // This makes the internal scroll "sticky".
    if (!atStartAndSwipingDown && !atEndAndSwipingUp) {
      e.preventDefault()
    }

    // Now, handle the internal navigation if threshold is met
    if (Math.abs(deltaY) > swipeThreshold) {
      let internalScrollOccurred = false
      if (deltaY < 0) {
        // Swiping up
        internalScrollOccurred = handleNavigation(1)
      } else {
        // Swiping down
        internalScrollOccurred = handleNavigation(-1)
      }

      // If an internal scroll happened, reset touchStartY to prevent multiple triggers
      // for the same long swipe.
      if (internalScrollOccurred) {
        touchStartY.current = touchCurrentY // Reset start Y to current position
      }
    }
  }

  useEffect(() => {
    const componentElement = componentRef.current
    if (componentElement) {
      // Attach wheel event listener to the window (as it controls page scroll)
      window.addEventListener("wheel", handleWheel, { passive: false })

      // Attach touch event listeners directly to the component element
      componentElement.addEventListener("touchstart", handleTouchStart, { passive: false })
      componentElement.addEventListener("touchmove", handleTouchMove, { passive: false })
    }

    return () => {
      if (componentElement) {
        window.removeEventListener("wheel", handleWheel)
        componentElement.removeEventListener("touchstart", handleTouchStart)
        componentElement.removeEventListener("touchmove", handleTouchMove)
      }
    }
  }, [index, isInView]) // Re-run effect if index or isInView changes

  return (
    <div
      ref={componentRef}
      className="min-h-screen flex flex-col justify-center items-center bg-black text-white px-7 md:px-20 py-24 lg:py-36"
    >
      <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-center text-gray-200">
        <span>Tools</span> I'm Familiar With
      </h2>
      <p className="text-center mb-10 text-sm md:text-xl text-gray-300 max-w-xl">
        Discover the powerful tools and technologies I use to create exceptional, high-performing websites &
        applications.
      </p>
      <div
        className="relative h-52 w-80 md:w-[400px] overflow-hidden" // Container for the sliding items
      >
        {skillItem.map((item, i) => {
          let targetY = 0 // Default for current item
          let targetOpacity = 0
          let zIndex = 0
          let scale = 1

          if (i === index) {
            targetY = 0 // Centered
            targetOpacity = 1
            zIndex = 10 // Bring to front
            scale = 1
          } else if (i === index - 1) {
            targetY = -90 // Pixels above center (adjust based on item height + spacing)
            targetOpacity = 0.3
            zIndex = 5
            scale = 0.9
          } else if (i === index + 1) {
            targetY = 90 // Pixels below center (adjust based on item height + spacing)
            targetOpacity = 0.3
            zIndex = 5
            scale = 0.9
          } else {
            // Items far away, move them out of view
            targetY = i < index ? -200 : 200 // Far up or down
            targetOpacity = 0
            zIndex = 0
            scale = 0.8
          }

          return (
            <motion.div
              key={i}
              initial={false} // Let animate handle all transitions
              animate={{ y: targetY, opacity: targetOpacity, scale: scale }}
              transition={{ duration: 0.4 }}
              className={`absolute left-0 right-0 flex items-center gap-4 ring-2 ring-inset ring-red-700/40 rounded-xl p-4 bg-zinc-800 w-full`}
              style={{
                top: "50%",
                transform: `translateY(-50%)`, // Base centering for all items
                zIndex: zIndex,
              }}
            >
              <figure className="bg-zinc-900 rounded-lg w-14 h-14 p-3 flex items-center justify-center">
                <span className="text-3xl">{item.imgSrc}</span>
              </figure>
              <div>
                <h3 className="text-xl font-semibold text-gray-200">{item.label}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            </motion.div>
          )
        })}
      </div>
      <p className="mt-10 text-gray-500 text-sm">Scroll up/down to browse</p>
    </div>
  )
}

export default Skills
