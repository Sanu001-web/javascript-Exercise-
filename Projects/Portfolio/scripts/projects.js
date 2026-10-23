(() => {
  const intro = document.querySelector(".project-hero .projects-intro-copy.hero-intro");
  if (!intro || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const loader = document.querySelector(".page-loader");
  const animateIntro = () => intro.classList.add("animate__fadeInUp");

  if (!loader) {
    animateIntro();
    return;
  }

  const onLoaderAnimationEnd = event => {
    if (event.target !== loader) return;

    loader.removeEventListener("animationend", onLoaderAnimationEnd);
    animateIntro();
  };
  loader.addEventListener("animationend", onLoaderAnimationEnd);
})();
