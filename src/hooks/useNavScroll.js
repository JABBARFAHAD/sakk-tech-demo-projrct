import { useState, useEffect } from 'react'

/**
 * useNavScroll
 * Returns { scrolled } — true when page has scrolled past `threshold` px.
 * Used to change navbar background on scroll.
 */
export function useNavScroll(threshold = 60) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])

  return { scrolled }
}
