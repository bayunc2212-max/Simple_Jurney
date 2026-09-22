export const fadeViewport = {
  mounted(el) {
    el.classList.add('animate__animated')
    el.style.opacity = 0
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.remove('pre-hidden')
          el.style.visibility = 'visible'
          el.classList.add('animate__fadeIn')
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
    el.classList.add('animate__animated')
    el.style.opacity = 0
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.remove('pre-hidden')
          el.style.visibility = 'visible'
          el.classList.remove('animate__fadeOut')
          el.classList.add('animate__fadeIn')
        } else {
          el.classList.remove('animate__fadeIn')
          el.classList.add('animate__fadeOut')
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