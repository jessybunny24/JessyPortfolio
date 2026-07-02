function scrollToSection(id) {
  closeMenu();
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

function toggleMenu() {
  const menu  = document.getElementById('mobileMenu');
  const open  = document.getElementById('icon-open');
  const close = document.getElementById('icon-close');
  const isOpen = menu.classList.toggle('open');
  open.style.display  = isOpen ? 'none'  : 'block';
  close.style.display = isOpen ? 'block' : 'none';
  document.body.style.overflow = isOpen ? 'hidden' : '';
}

function closeMenu() {
  const menu  = document.getElementById('mobileMenu');
  const open  = document.getElementById('icon-open');
  const close = document.getElementById('icon-close');
  menu.classList.remove('open');
  open.style.display  = 'block';
  close.style.display = 'none';
  document.body.style.overflow = '';
}

/* MARQUEE LOGIC */
const upperLogos = [
  { src: 'assets/brands/maange.jpg', alt: 'Maange' },
  { src: 'assets/brands/blackwaterwomen.jpg', alt: 'Blackwater Women' },
  { src: 'assets/brands/blackwatermen.png', alt: 'Blackwater Men' },
  { src: 'assets/brands/youbeauty.jpg', alt: 'You Beauty' },
  { src: 'assets/brands/jmcy.jpg', alt: 'JMCY' },
  { src: 'assets/brands/sip2glow.jpg', alt: 'Sip2Glow' },
  { src: 'assets/brands/glad2glow.jpg', alt: 'Glad2Glow' },
  { src: 'assets/brands/skintific.jpg', alt: 'Skintific' }
];

const lowerLogos = [
  { src: 'assets/brands/seamakeup.png', alt: 'Sea Makeup' },
  { src: 'assets/brands/barenbliss.jpg', alt: 'Barenbliss' },
  { src: 'assets/brands/sacelady.jpg', alt: 'Sace Lady' },
  { src: 'assets/brands/fairyskin.jpg', alt: 'Fairy Skin' },
  { src: 'assets/brands/careline.jpg', alt: 'Careline' },
  { src: 'assets/brands/dove.png', alt: 'Dove' },
  { src: 'assets/brands/loreal.png', alt: 'Loreal' }
];
function buildMarquee(trackId, logos) {
  const track = document.getElementById(trackId);
  [...logos, ...logos, ...logos].forEach(({ src, alt }) => {
    const pill = document.createElement('div');
    pill.className = 'logo-pill';
    const img = document.createElement('img');
    img.src = src; img.alt = alt;
    pill.appendChild(img);
    track.appendChild(pill);
  });
}

buildMarquee('upper-track', upperLogos);
buildMarquee('lower-track', lowerLogos);