
  window.onload = () => {
  let i = 0;
  let test = false;

  const myFunc =  (i, event) => {
    console.log(i, test)
  }
  let script = document.createElement('script');
  script.src = "https://assets.poool.fr/access.js";
  script.async = true;
  script.onload = async () => {
    let access = Access
    .init('APP_ID');
    access.createPaywall({
      target: "#poool-widget",
      content: ".content",
      mode: "hide",
      percent: 80,
      pageType: "premium"
    });
    await access.destroy();
    access.config({
      debug: true,
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
  const coucouButton = document.getElementById('coucou');
  const listenerButton = document.getElementById('listener');
  const removeListenerButton = document.getElementById('removeButton');
  const changeContext = document.getElementById('changeContext');

  const loadPooolAccess = (t) => {
    test = !t;
    coucouButton.removeEventListener('click', myFunc)
    coucouButton.addEventListener('click',myFunc);
  }
  listenerButton.addEventListener('click', () => {
    loadPooolAccess(test)
  })
  removeListenerButton.addEventListener('click', () => {
    console.log('heee');
    coucouButton.removeEventListener('click', myFunc)
  })
  changeContext.addEventListener('click', () => {test = !test})
};