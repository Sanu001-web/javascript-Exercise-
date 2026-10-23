(() => {
  const mount = document.querySelector("[data-site-footer]");
  if (!mount) return;

  mount.outerHTML = `
    <footer class="site-footer">
      <div class="footer-main section-shell">
        <div class="footer-intro">
          <a class="wordmark" href="index.html" aria-label="Shanu Kayda, home">SK<span>.</span></a>
          <p>Thoughtful digital experiences,<br>built one step at a time.</p>
          <span class="footer-availability"><i aria-hidden="true"></i> Open to entry-level opportunities</span>
        </div>
        <div class="footer-column">
          <p class="footer-label">Find me</p>
          <h2>Madhya Pradesh</h2>
          <p>India <span aria-hidden="true">·</span> Open to opportunities</p>
        </div>
        <div class="footer-column footer-contact">
          <p class="footer-label">Get in touch</p>
          <a class="footer-email" href="mailto:sanukayda@gmail.com">sanukayda@gmail.com <span aria-hidden="true">↗</span></a>
          <div class="footer-socials" aria-label="Social profiles">
            <a href="https://github.com/sanu001-web" target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a>
            <a href="https://linkedin.com/in/sanu001-web" target="_blank" rel="noopener noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
            <a href="https://instagram.com/s_shanu08" target="_blank" rel="noopener noreferrer">Instagram <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </div>
      <div class="footer-bottom section-shell">
        <small>© <span id="year"></span> Shanu Kayda</small>
        <p>Designed with curiosity. Built one step at a time.</p>
        <a href="#top" class="back-top">Back to top <span aria-hidden="true">↑</span></a>
      </div>
    </footer>`;
})();
