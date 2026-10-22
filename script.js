const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menuButton?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});
nav?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("is-open");
  menuButton?.setAttribute("aria-expanded", "false");
}));

document.getElementById("year").textContent = new Date().getFullYear();

const modal = document.querySelector(".video-modal");
const frame = document.querySelector(".video-frame");
const closeButton = document.querySelector(".modal-close");
let previousFocus = null;

function openVideo(url, trigger) {
  if (!url || !modal || !frame) return;
  previousFocus = trigger || document.activeElement;
  frame.innerHTML = "";
  const iframe = document.createElement("iframe");
  iframe.src = url;
  iframe.title = "Project demonstration video";
  iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
  iframe.allowFullscreen = true;
  iframe.referrerPolicy = "strict-origin-when-cross-origin";
  frame.appendChild(iframe);
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-active");
  closeButton?.focus();
}
function closeVideo() {
  if (!modal || !frame) return;
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  frame.innerHTML = "";
  document.body.classList.remove("modal-active");
  previousFocus?.focus?.();
}
document.querySelectorAll("[data-video]").forEach(button => {
  button.addEventListener("click", () => openVideo(button.dataset.video, button));
});
closeButton?.addEventListener("click", closeVideo);
modal?.addEventListener("click", event => {
  if (event.target === modal) closeVideo();
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && modal?.classList.contains("is-open")) closeVideo();
});

// Subtle reveal animation; content remains visible if scripting or motion is unavailable.
const revealTargets = document.querySelectorAll(".research-item, .project-card, .skill-row, .timeline-entry");
if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  revealTargets.forEach(el => el.classList.add("reveal-ready"));
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  revealTargets.forEach(el => observer.observe(el));
}


// Horizontal project reel: duplicate cards for a seamless marquee and pause on hover/focus.
const projectTrack = document.querySelector('.project-grid');
const projectCarousel = document.querySelector('.project-carousel');
if (projectTrack && projectCarousel && !projectTrack.dataset.cloned) {
  const originals = Array.from(projectTrack.children);
  originals.forEach(card => {
    const clone = card.cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    clone.querySelectorAll('button, a').forEach(el => el.setAttribute('tabindex', '-1'));
    projectTrack.appendChild(clone);
  });
  projectTrack.dataset.cloned = 'true';
}
document.querySelectorAll('[data-carousel]').forEach(button => {
  button.addEventListener('click', () => {
    if (!projectCarousel) return;
    projectTrack.style.animation = 'none';
    projectTrack.style.transform = 'none';
    projectCarousel.style.overflowX = 'auto';
    projectCarousel.scrollBy({ left: button.dataset.carousel === 'next' ? 360 : -360, behavior: 'smooth' });
  });
});
