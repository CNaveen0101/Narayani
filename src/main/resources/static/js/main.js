// ============================================
//  Narayani Market – main.js
// ============================================

/* ---------- PRODUCT DATA ---------- */
const products = [
  { id: 1,  name: 'Fresh Tomatoes',    unit: '1 kg',    price: 30,  icon: 'ti-plant'   },
  { id: 2,  name: 'Bananas',           unit: '1 dozen', price: 40,  icon: 'ti-apple'   },
  { id: 3,  name: 'Sona Masoori Rice', unit: '5 kg',    price: 220, icon: 'ti-bowl'    },
  { id: 4,  name: 'Sunflower Oil',     unit: '1 litre', price: 130, icon: 'ti-droplet' },
  { id: 5,  name: 'Turmeric Powder',   unit: '200 g',   price: 35,  icon: 'ti-salt'    },
  { id: 6,  name: 'Tata Salt',         unit: '1 kg',    price: 25,  icon: 'ti-package' },
  { id: 7,  name: 'Green Chillies',    unit: '250 g',   price: 15,  icon: 'ti-plant'   },
  { id: 8,  name: 'Mangoes',           unit: '1 kg',    price: 80,  icon: 'ti-apple'   },
  { id: 9,  name: 'Coconut Oil',       unit: '500 ml',  price: 90,  icon: 'ti-droplet' },
  { id: 10, name: 'Basmati Rice',      unit: '1 kg',    price: 75,  icon: 'ti-bowl'    },
  { id: 11, name: 'Red Onions',        unit: '1 kg',    price: 35,  icon: 'ti-plant'   },
  { id: 12, name: 'Coriander Powder',  unit: '100 g',   price: 20,  icon: 'ti-salt'    },
];

/* ---------- RENDER PRODUCTS ---------- */
function renderProducts() {
  const grid = document.getElementById('productGrid');
  if (!grid) return;

  grid.innerHTML = products.map(p => `
    <div class="prod-card">
      <div class="prod-img"><i class="ti ${p.icon}" aria-hidden="true"></i></div>
      <div class="prod-body">
        <div class="prod-name">${p.name}</div>
        <div class="prod-unit">${p.unit}</div>
        <div class="prod-footer">
          <span class="prod-price">₹${p.price}</span>
          <button class="add-btn" data-id="${p.id}" aria-label="Add ${p.name} to cart">+</button>
        </div>
      </div>
    </div>
  `).join('');

  grid.querySelectorAll('.add-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      this.textContent = '✓';
      this.classList.add('added');
      this.setAttribute('aria-label', 'Added');
      setTimeout(() => {
        this.textContent = '+';
        this.classList.remove('added');
      }, 1400);
    });
  });
}

/* ---------- NAVBAR SCROLL EFFECT ---------- */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 30);
  }, { passive: true });
}

/* ---------- MOBILE MENU ---------- */
function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');

  hamburger.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', open);
  });

  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.setAttribute('aria-expanded', false);
    });
  });
}

/* ---------- ACTIVE NAV ON SCROLL ---------- */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id], div[id]');
  const navLinks  = document.querySelectorAll('.nav-link');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.toggle(
            'active',
            link.getAttribute('href') === '#' + entry.target.id
          );
        });
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(s => observer.observe(s));
}

/* ---------- CATEGORY CLICK → SCROLL TO PRODUCTS ---------- */
function initCategoryCards() {
  document.querySelectorAll('.cat-card').forEach(card => {
    card.addEventListener('click', () => {
      document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
    });
  });
}

/* ---------- INIT ---------- */
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  initNavbar();
  initMobileMenu();
  initScrollSpy();
  initCategoryCards();
});
