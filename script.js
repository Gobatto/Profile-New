const typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 55,
    onComplete: (self) => {
      document.querySelector(".typed-cursor").classList.add("d-none");
      const urlParams = new URLSearchParams(window.location.search);
      if(urlParams.get('easterEgg') === 'true'){
        document.querySelector(".quote").innerHTML = "<em>Valvula.</em>";
      }
      document.querySelector(".quote").classList.remove("hidden");
    },
  
  });
  
  window.onload = function() {
    Particles.init({
      selector: '.background',
      color: "#026570",
      connectParticles: true,
      maxParticles: 100,
      responsive: [
        {
          breakpoint: 768,
          options: {
            maxParticles: 20,
          }
        }
      ]
    });
  };
  
  AOS.init();
  
 