// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({ behavior: "smooth" })
    }
  })
})

// Add scroll animation for elements
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Observe service cards, pricing cards, and testimonials
document.querySelectorAll(".service-card, .pricing-card, .testimonial, .feature").forEach((el) => {
  el.style.opacity = "0"
  el.style.transform = "translateY(20px)"
  el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
  observer.observe(el)
})

// CTA button interactions
document.querySelectorAll(".cta-buttons button").forEach((button) => {
  button.addEventListener("click", function () {
    if (this.textContent.includes("Quote")) {
      alert("Redirect to quote form or open contact modal")
    } else {
      alert("Call: (555) 123-4567")
    }
  })
})
