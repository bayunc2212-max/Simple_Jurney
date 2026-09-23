export const fadeViewport = {
  mounted(el) {
    el.style.opacity = 0
    el.style.visibility = 'visible'
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transition = `opacity .8s ease`
          el.style.opacity = 1
          observer.unobserve(el)
        }
      },
      { threshold: 0.2 }
    )
    observer.observe(el)
    el._observer = observer
  },
  unmounted(el) {
    el && el._observer && el._observer.disconnect()
  }
}

export const fadeDownViewport = {
  mounted(el) {
    el.style.opacity = 0
    el.style.visibility = 'visible'
    el.style.transition = `opacity .6s ease`
    const observer = new IntersectionObserver(
      ([entry]) => {
        el.style.opacity = entry.isIntersecting ? 1 : 0
      },
      { threshold: 0.2 }
    )
    observer.observe(el)
    el._observer = observer
  },
  unmounted(el) {
    el && el._observer && el._observer.disconnect()
  }
}