(function () {
  if (window.alePanAnalyticsInitialized) return;
  window.alePanAnalyticsInitialized = true;

  const measurementId = 'G-YQTDJNYXHH';

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () {
    window.dataLayer.push(arguments);
  };

  window.gtag('js', new Date());
  window.gtag('config', measurementId);

  document.querySelectorAll('details.reproduction-instructions').forEach(function (instructions) {
    instructions.addEventListener('toggle', function () {
      if (instructions.open) {
        window.gtag('event', 'reproduction_instructions_open');
      }
    });
  });

  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=' + measurementId;
  document.head.appendChild(script);
})();
