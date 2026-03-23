/* ============================================================
   SCRIPT — BÚSSOLA EMOCIONAL
   ============================================================ */

/**
 * Intersection Observer for scroll-triggered reveal animations.
 * Add class "reveal" to any element you want to animate in on scroll.
 * The observer will add "revealed" when it enters the viewport.
 *
 * Usage in HTML:  <div class="reveal"> ... </div>
 * Usage in CSS:   .reveal { opacity: 0; transform: translateY(24px); transition: ... }
 *                 .reveal.revealed { opacity: 1; transform: none; }
 */

document.addEventListener("DOMContentLoaded", () => {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          // Stop observing once revealed — no repeat animation
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -40px 0px",
    },
  );

  document.querySelectorAll(".reveal").forEach((el) => {
    revealObserver.observe(el);
  });
});
