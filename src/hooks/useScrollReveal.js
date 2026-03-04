import { useEffect, useRef } from 'react'

/**
 * useScrollReveal
 * Attaches an IntersectionObserver to the returned ref.
 * When the element enters the viewport, adds the 'visible' class.
 *
 * @param {object} options
 * @param {number} options.threshold  - 0..1 visibility ratio needed (default 0.1)
 * @param {string} options.rootMargin - CSS margin string (default '0px 0px -40px 0px')
 * @param {boolean} options.once      - Only fire once (default true)
 */
export function useScrollReveal({
  threshold  = 0.1,
  rootMargin = '0px 0px -40px 0px',
  once       = true,
} = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          if (once) observer.unobserve(el)
        } else if (!once) {
          el.classList.remove('visible')
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, rootMargin, once])

  return ref
}
