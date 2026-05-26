async function loadComponent(elementId, componentPath) {
  try {
    const response = await fetch(componentPath);

    if (!response.ok) {
      throw new Error(`Failed to load ${componentPath}`);
    }

    const html = await response.text();

    document.getElementById(elementId).innerHTML = html;
  } catch (error) {
    console.error(error);
  }
}

async function initializeComponents() {
  await loadComponent("nav-placeholder", "components/nav.html");

  await loadComponent("footer-placeholder", "components/footer.html");

  highlightActivePage();

  initializeMobileNav();
}

function highlightActivePage() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  const navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");

    if (href === currentPage) {
      link.classList.add("active-link");
    }
  });
}

initializeComponents();

function initializeMobileNav() {
  const hamburger = document.getElementById("hamburger");

  const navLinks = document.getElementById("navLinks");

  if (!hamburger || !navLinks) return;

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("nav-open");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("nav-open");
    });
  });
}
