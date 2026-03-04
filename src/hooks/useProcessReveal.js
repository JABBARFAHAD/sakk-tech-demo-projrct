import { useEffect, useRef } from 'react'

/**
 * useProcessReveal
 * Stagger-animates children with class 'proc-step' inside the observed element.
 */
export function useProcessReveal(delay = 130) {
  const ref = useRef(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const steps = container.querySelectorAll('.proc-step')
          steps.forEach((step, i) => {
            setTimeout(() => step.classList.add('vis'), i * delay)
          })
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(container)
    return () => observer.disconnect()
  }, [delay])

  return ref
}
