window.onload = () => {
  let script = document.createElement('script');
  script.src = "https://assets.poool.fr/access.js";
  script.async = true;
  script.onload = () => {
    const access = Access
    .init('APP_ID')
    .config({
      cookies_enabled: false,
    });
    access.createPaywall({
      target: "#fullscreen",
      content: ".content",
      mode: "hide",
      percent: 80,
      pageType: "premium"
    });
  }
  document.body.appendChild(script);
};