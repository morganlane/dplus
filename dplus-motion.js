(function () {
  "use strict";

  const readyClass = "dplus-reveal-ready";
  const revealClass = "dplus-section-reveal";
  const revealedClass = "is-revealed";

  function initializeSectionReveals() {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const headings = Array.from(document.querySelectorAll("h2")).filter((heading) => {
      return !heading.closest("footer") && !heading.closest("[role='contentinfo']");
    });

    const targets = headings.filter((heading, index) => {
      const isUtilityHeading = heading.classList.contains("bcx-tbc-heading") ||
        heading.classList.contains("bcx-tbc-blog-heading") ||
        heading.classList.contains("bcx-tbc-cta-heading");
      return !isUtilityHeading && index % 2 === 0;
    });

    if (!targets.length) {
      return;
    }

    targets.forEach((heading) => heading.classList.add(revealClass));
    document.documentElement.classList.add(readyClass);

    if (reducedMotion || !("IntersectionObserver" in window)) {
      targets.forEach((heading) => heading.classList.add(revealedClass));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add(revealedClass);
        observer.unobserve(entry.target);
      });
    }, {
      root: null,
      rootMargin: "0px 0px -12% 0px",
      threshold: 0.12
    });

    targets.forEach((heading) => {
      const bounds = heading.getBoundingClientRect();
      if (bounds.top < window.innerHeight * 0.92) {
        heading.classList.add(revealedClass);
      } else {
        observer.observe(heading);
      }
    });
  }

  function initializePinnedServices() {
    const section = document.querySelector("[data-dplus-services]");
    if (!section) return;

    const scenes = Array.from(section.querySelectorAll("[data-service-scene]"));
    const controls = Array.from(section.querySelectorAll("[data-service-control]"));
    const titles = Array.from(section.querySelectorAll(".dplus-services__titles h3"));
    const details = Array.from(section.querySelectorAll(".dplus-services__detail"));
    const figures = Array.from(section.querySelectorAll(".dplus-services__figure"));
    const count = section.querySelector("[data-service-count]");
    let activeIndex = 0;

    function setActive(nextIndex) {
      if (nextIndex === activeIndex || nextIndex < 0 || nextIndex >= figures.length) return;
      const previousIndex = activeIndex;
      activeIndex = nextIndex;

      controls.forEach((item, index) => item.classList.toggle("is-active", index === activeIndex));
      titles.forEach((item, index) => item.classList.toggle("is-active", index === activeIndex));
      details.forEach((item, index) => item.classList.toggle("is-active", index === activeIndex));
      figures.forEach((item, index) => {
        item.classList.toggle("is-active", index === activeIndex);
        item.classList.toggle("was-active", index === previousIndex && previousIndex < activeIndex);
      });
      if (count) count.textContent = String(activeIndex + 1).padStart(2, "0") + " / " + String(figures.length).padStart(2, "0");
    }

    controls.forEach((control, index) => control.addEventListener("click", () => {
      setActive(index);
      if (window.innerWidth > 991 && scenes[index]) scenes[index].scrollIntoView({ behavior: "smooth", block: "center" });
    }));

    if (window.innerWidth <= 991 || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(Number(entry.target.dataset.serviceScene));
      });
    }, { rootMargin: "-44% 0px -44% 0px", threshold: 0 });

    scenes.forEach((scene) => observer.observe(scene));
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      initializeSectionReveals();
      initializePinnedServices();
    }, { once: true });
  } else {
    initializeSectionReveals();
    initializePinnedServices();
  }
})();
