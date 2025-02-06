// Fonction pour afficher une section spécifique et masquer les autres sur chaque page
function showSection(sectionId) {
  // Liste des IDs de toutes mes sections
  const sections = [
    "accueil-section",
    "formations-section",
    "experiences-section",
    "contact-section",
  ];

  // Parcourir toutes les sections
  sections.forEach((id) => {
    if (id === sectionId) {
      document.getElementById(id).style.display = "block"; // Afficher la section souhaitée
    } else {
      document.getElementById(id).style.display = "none"; // Masquer les autres sections
    }
  });
}

// Ajouter des écouteurs d'événements pour chaque lien
document
  .getElementById("accueil-link")
  .addEventListener("click", () => showSection("accueil-section"));
document
  .getElementById("brand-link")
  .addEventListener("click", () => showSection("accueil-section"));
document
  .getElementById("formations-link")
  .addEventListener("click", () => showSection("formations-section"));
document
  .getElementById("experiences-link")
  .addEventListener("click", () => showSection("experiences-section"));
document
  .getElementById("contact-link")
  .addEventListener("click", () => showSection("contact-section"));

// État initial : afficher la section Accueil et masquer les autres
showSection("accueil-section");

// Utiliser Gsap pour animer les cartes: rotation
document.querySelectorAll(".card-container").forEach((card) => {
  card.addEventListener("click", () => {
    const flipCard = card.querySelector(".card-flip");
    const isFlipped = gsap.getProperty(flipCard, "rotateY") === 180; // Vérifie l'état actuel
    gsap.to(flipCard, {
      duration: 0.6,
      rotateY: isFlipped ? 0 : 180, // Alterne entre 0 et 180 degrés
      ease: "power2.inOut", // Effet d'accélération
    });
  });
});

// Fermer le menu mobile après clic sur un lien
document.querySelectorAll("#navbarNav .nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    const navbar = document.getElementById("navbarNav");
    if (navbar.classList.contains("show")) {
      // Vérifier si le menu est ouvert
      new bootstrap.Collapse(navbar).hide(); // Fermer le menu
    }
  });
});
// ***** Annimer avec particles.js ******
document.addEventListener("DOMContentLoaded", function () {
  particlesJS("particles-js", {
    particles: {
      number: {
        value: 100, // Nombre de particules
        density: {
          enable: true, // Activer la densité des particules
          value_area: 600, // Zone de dispersion
        },
      },
      color: {
        value: "#3498db", // Couleur des particules
      },
      shape: {
        type: "circle", // Forme des particules
      },
      opacity: {
        value: 0.2, // Opacité des particules
        random: false,
      },
      size: {
        value: 10, // Taille des particules
        random: true, // Taille aléatoire pour un effet plus naturel
      },
      line_linked: {
        enable: false, // Désactiver les lignes entre les particules
      },
      move: {
        enable: true, // Activer le mouvement des particules
        speed: 1, // Vitesse de déplacement
        direction: "none",
        random: true, // Direction aléatoire
        straight: false, // Déplacement en ligne droite
        out_mode: "out", // Sortie de la zone de détection
      },
    },
    interactivity: {
      detect_on: "", // Zone de détection des événements
      events: {
        onhover: {
          enable: true,
          mode: "repulse", // Effet de repoussement au survol de la souris
        },
        onclick: {
          enable: true, // Activer l'ajout de particules au clic
          mode: "push", // Ajoute des particules au clic
        },
      },
      modes: {
        repulse: {
          distance: 90, // Distance d'éloignement des particules au survol
          duration: 0.4, // Durée de l'effet en secondes
        },
        push: {
          particles_nb: 4, // Nombre de particules ajoutées au clic
        },
      },
    },
    retina_detect: true, // Activer la détection de la rétine
  });
});
// **** Initialiser Swiper.js pour la section Expériencess ****
document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper("#experiences-swiper", {
    loop: true, // Permet de boucler les slides
    navigation: {
      nextEl: ".experiences-button-next", // Bouton suivant avec une classe unique
      prevEl: ".experiences-button-prev", // Bouton précédent avec une classe unique
    },
    pagination: {
      el: ".experiences-pagination", // Pagination avec une classe unique
      clickable: true, // Permet de cliquer sur les points pour naviguer
    },
    autoplay: {
      delay: 3000, // Défilement automatique toutes les 3 secondes
    },
    slidesPerView: 1, // Affiche 1 seul slide
    slidesPerGroup: 1, // Défilement d'un seul slide
  });
});
// ******** section contact ***************
// Fonction pour valider le format de l'e-mail
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expression pour valider l'e-mail saisi par l'utilisateur
  return regex.test(email);
}

// Fonction pour compter les mots dans le message
function countWords(text) {
  return text.split(/\s+/).filter((word) => word.length > 0).length; // Pour compter les mots
}

// Pour gérer le formulaire de contact
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Empêcher l'envoi du formulaire

    // Récupérer les valeurs des champs
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Valider l'e-mail
    if (!validateEmail(email)) {
      alert("Veuillez entrer une adresse e-mail valide !"); // Message d'erreur si l'e-mail n'est pas valide
      return;
    }

    // Valider la longueur du message
    const wordCount = countWords(message);
    if (wordCount > 200) {
      alert("Le message ne doit pas dépasser 200 mots !"); // Message d'erreur si le message dépasse 200 mots
      return;
    }

    // Afficher un message de succès ( test d'envoi)
    alert("Message envoyé avec succès !");
    console.log("Nom et Prénom :", name);
    console.log("E-mail :", email);
    console.log("Message :", message);
  });

// Mettre à jour le compteur de mots en temps réel
document.getElementById("message").addEventListener("input", function () {
  const message = this.value; // Récupérer le contenu du champ de texte
  const wordCount = countWords(message); // Compter les mots
  document.getElementById("word-count").textContent = `${wordCount} / 200 mots`; // Afficher le nombre de mots

  // Changer la couleur du compteur si la limite est dépassée
  if (wordCount > 200) {
    document.getElementById("word-count").style.color = "red";
  } else {
    document.getElementById("word-count").style.color = "gray";
  }
});

//  Pour le bouton de retour en haut de la page
document.addEventListener("DOMContentLoaded", function () {
  const backToTopButton = document.querySelector("#back-to-top");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
      backToTopButton.classList.add("show");
    } else {
      backToTopButton.classList.remove("show");
    }
  });
  backToTopButton.addEventListener("click", function () {
    window.scrollTo(0, 0);
  });
});
