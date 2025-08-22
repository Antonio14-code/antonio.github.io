// Header
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navegacion = document.querySelector('.navegacion');
  let isOpen = false;

  function slideDown(element, duration = 300) {
    element.style.display = 'block';
    const height = element.scrollHeight;
    element.style.overflow = 'hidden';
    element.style.height = '0px';
    element.style.opacity = '0';

    requestAnimationFrame(() => {
      element.style.transition = `height ${duration}ms ease, opacity ${duration}ms ease`;
      element.style.height = height + 'px';
      element.style.opacity = '1';
    });

    setTimeout(() => {
      element.style.height = 'auto';
      element.style.overflow = 'visible';
      element.classList.add('show');
    }, duration);
  }

  function slideUp(element, duration = 300) {
    const height = element.scrollHeight;
    element.style.height = height + 'px';
    element.style.overflow = 'hidden';

    requestAnimationFrame(() => {
      element.style.transition = `height ${duration}ms ease, opacity ${duration}ms ease`;
      element.style.height = '0px';
      element.style.opacity = '0';
    });

    setTimeout(() => {
      element.style.display = 'none';
      element.classList.remove('show');
    }, duration);
  }

  menuToggle.addEventListener('click', () => {
    isOpen = !isOpen;
    menuToggle.classList.toggle('x', isOpen);
    if (isOpen) {
      slideDown(navegacion);
    } else {
      slideUp(navegacion);
    }
  });

  document.querySelectorAll('.navegacion ul li a').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768 && isOpen) {
        slideUp(navegacion);
        menuToggle.classList.remove('x');
        isOpen = false;
      }
    });
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      navegacion.style.display = '';
      navegacion.style.height = '';
      navegacion.style.opacity = '';
      navegacion.style.overflow = '';
      navegacion.classList.remove('show');
      menuToggle.classList.remove('x');
      isOpen = false;
    }
  });
});

// Animacion de texto
document.addEventListener("DOMContentLoaded", () => {
  const p = document.getElementById("textoAnimado");
  const texto = p.dataset.text;
  const palabras = texto.split(" ");
  p.innerHTML = ""; 

  palabras.forEach((palabra, index) => {
    const span = document.createElement("span");
    span.textContent = palabra;
    span.classList.add("palabra-animada");
    span.style.animationDelay = `${index * 0.15}s`;
    p.appendChild(span);
    p.appendChild(document.createTextNode(" ")); 
  });
});

// Agrandar el cursor sobre botones/enlaces
const hoverableElements = "a, button, .testimonial";

document.querySelectorAll(hoverableElements).forEach((el) => {
  el.addEventListener("mouseenter", () => {
    cursor.style.transform = "translate(-50%, -50%) scale(1.5)";
    cursor.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
    cursor.style.boxShadow = "0 0 12px 6px rgba(255, 255, 255, 1)";
  });

  el.addEventListener("mouseleave", () => {
    cursor.style.transform = "translate(-50%, -50%) scale(1)";
    cursor.style.backgroundColor = "rgba(255, 255, 255, 0.6)";
    cursor.style.boxShadow = "0 0 8px 4px rgba(255, 255, 255, 0.7)";
  });
});

// Cursor y certificado
document.addEventListener('DOMContentLoaded', () => {
  const cursor = document.getElementById('cursorCircle');
  let targetX = 0, targetY = 0;
  let currentX = 0, currentY = 0;
  const smoothing = 0.1;

  // Tooltip dinámico
  const tooltip = document.createElement("div");
  tooltip.classList.add("tooltip-certificado");
  tooltip.textContent = "View certificate";
  document.body.appendChild(tooltip);

  // Movimiento del cursor (interpolado)
  document.addEventListener('mousemove', (e) => {
    targetX = e.clientX;
    targetY = e.clientY;

    // Mover también el tooltip si está visible
    tooltip.style.left = `${e.clientX + 15}px`;
    tooltip.style.top = `${e.clientY + 4}px`;
  });

  function animateCursor() {
    currentX += (targetX - currentX) * smoothing;
    currentY += (targetY - currentY) * smoothing;
    cursor.style.transform = `translate(${currentX - 6}px, ${currentY - 6}px)`;
    requestAnimationFrame(animateCursor);
  }

  animateCursor();

// Mostrar tooltip y ocultar cursor en .proyecto-card
const tarjetas = document.querySelectorAll(".proyecto-card");

tarjetas.forEach(card => {
  card.addEventListener("mouseenter", () => {
    tooltip.style.opacity = "1";
    tooltip.style.transform = "translateX(-60%) translateY(0px)";
    cursor.style.opacity = "0";
  });

  card.addEventListener("mouseleave", () => {
    tooltip.style.opacity = "0";
    tooltip.style.transform = "translateX(-60%) translateY(8px)";
    cursor.style.opacity = "1";
  });
});
});

// Animacion de scroll
document.querySelectorAll('a[href^="#"]').forEach(enlace => {
  enlace.addEventListener('click', function(e) {
    e.preventDefault();
    const destino = document.querySelector(this.getAttribute('href'));
    if (destino) {
      destino.scrollIntoView({ behavior: 'smooth' });
    }
  });
});