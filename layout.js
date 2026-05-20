// SaltE Brand — Shared Layout
const COMPASS_SVG = `<svg class="nav-compass" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="17" cy="17" r="14" stroke="#8a96a8" stroke-width="0.6" opacity="0.5"/>
  <polygon points="17,3 19,15 17,17 15,15" fill="#c9993a" opacity="0.9"/>
  <polygon points="17,31 19,19 17,17 15,19" fill="#8a96a8" opacity="0.4"/>
  <polygon points="3,17 15,15 17,17 15,19" fill="#8a96a8" opacity="0.4"/>
  <polygon points="31,17 19,15 17,17 19,19" fill="#2ec4b6" opacity="0.9"/>
  <circle cx="17" cy="17" r="2" fill="#2ec4b6"/>
</svg>`;

function renderNav(activePage) {
  const pages = [
    { href: 'index.html',   label: 'Shop',       id: 'shop' },
    { href: 'about.html',   label: 'Our Story',  id: 'story' },
    { href: 'shop.html',    label: 'Wear It',    id: 'wear' },
    { href: 'contact.html', label: 'Contact',    id: 'contact' },
  ];
  const links = pages.map(p =>
    `<li><a href="${p.href}" class="${activePage === p.id ? 'active' : ''}">${p.label}</a></li>`
  ).join('');
  document.getElementById('nav-placeholder').innerHTML = `
    <nav>
      <a href="index.html" class="nav-brand">${COMPASS_SVG}<span class="nav-wordmark">Salt<span>E</span> Brand</span></a>
      <ul class="nav-links">${links}</ul>
      <a href="shop.html" class="nav-shop">Shop Now</a>
    </nav>`;
}

function renderTrust() {
  document.getElementById('trust-placeholder').innerHTML = `
    <div class="trust">
      <div class="trust-inner">
        <div class="trust-item"><span class="trust-dot"></span>Free US shipping $50+</div>
        <div class="trust-item"><span class="trust-dot"></span>Made just for you</div>
        <div class="trust-item"><span class="trust-dot"></span>East Coast proud since 2021</div>
        <div class="trust-item"><span class="trust-dot"></span>Loved by the crew</div>
      </div>
    </div>`;
}

function renderEmailBand() {
  document.getElementById('email-placeholder').innerHTML = `
    <div class="email-band">
      <span class="email-eyebrow">⚓ Join the East Coast Crew</span>
      <h2 class="email-h2">Get 10% Off Your First Order</h2>
      <p class="email-sub">Salt air stories, new drops, and East Coast vibes delivered to your inbox.<br>No spam. Just the good stuff.</p>
      <div class="email-form">
        <input class="email-input" type="email" placeholder="your@email.com" id="email-input">
        <button class="email-submit" onclick="handleEmail()">Claim 10% Off</button>
      </div>
      <p class="email-note">By subscribing you agree to receive email from SaltE Brand. Unsubscribe anytime.</p>
    </div>`;
}

function handleEmail() {
  const val = document.getElementById('email-input').value;
  if (val && val.includes('@')) {
    document.getElementById('email-input').value = '';
    alert('You\'re in! Check your inbox for your 10% off code.');
  }
}

function renderFooter() {
  document.getElementById('footer-placeholder').innerHTML = `
    <footer>
      <div class="footer-inner">
        <span class="footer-brand">Salt<span>E</span> Brand</span>
        <ul class="footer-links">
          <li><a href="shop.html">Shop</a></li>
          <li><a href="about.html">Our Story</a></li>
          <li><a href="shop.html#states">State Collection</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
        <div class="footer-socials">
          <a href="https://instagram.com/saltebrand" target="_blank">Instagram</a>
          <a href="https://www.pinterest.com/saltebrand" target="_blank">Pinterest</a>
          <a href="http://www.facebook.com/saltebrand" target="_blank">Facebook</a>
        </div>
      </div>
      <div class="footer-bottom">
        <span class="footer-copy">SaltE Brand © 2025 — East Coast Inspired Apparel. All rights reserved.</span>
        <span class="footer-copy">Always pointing East.</span>
      </div>
    </footer>`;
}
