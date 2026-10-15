"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");
  const currentYear = document.getElementById("currentYear");

  // Año automático en el pie de página.
  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }

  // Menú adaptable para celulares.
  if (menuToggle && navMenu) {
    const closeMenu = () => {
      navMenu.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Abrir menú");
    };

    menuToggle.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("open");

      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Cerrar menú" : "Abrir menú"
      );
    });

    navMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    // Cerrar el menú con Escape.
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    });
  }
});
