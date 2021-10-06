$( window ).on( "load",function () {

  /* BANNER */
  $(".cky-consent-title").text("Cookie consent");
  $(".cky-bar-text").text(
    "This website uses cookies to help the website function and to track how you interact with it so that we can provide you with an enhanced and personalized user experience. We will only use cookies if you agree to this by clicking Accept. You can also manage individual cookie preferences from Settings."
  );
  $(".cky-btn-settings").text("Preferences");
  $(".cky-btn-reject").text("Reject all");
  $(".cky-btn-accept").text("Accept all");
  
  /* TABLA */

  $("#cky-tab-item-privacy").text("Privacy policy");
  $("#cky-tab-item-Necesaria").text("Necesaries");
  $("#cky-tab-item-Funcional").text("Functional");
  $("#cky-tab-item-Analítica").text("Analytics");
  $("#cky-tab-item-el").text("Performance");
  $("#cky-tab-item-Anuncio").text("Publicity");

  $(".cky-btn-custom-accept").text("Save my preferences");

  /* CONTENIDO TABLA */

  $("#cky-tab-content-privacy .cky-tab-title").text("Privacy policy");
  $("#cky-tab-content-privacy .cky-tab-desc").html("<p>This website uses cookies to enhance your experience while browsing the website. Outside of these cookies, cookies that are classified as necessary are stored in your browser as they are essential to the operation of the basic functionalities of the website. We also use third-party cookies that help us analyze and understand how you use this website to store user preferences and provide you with content and advertisements that are relevant to you.</br>These cookies will only be stored on your browser with your consent to do so. You also have the option to opt out of receiving these cookies. However, opting out of some of these cookies may affect your browsing experience.</p>");  
});
