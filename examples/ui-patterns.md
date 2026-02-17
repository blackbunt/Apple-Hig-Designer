# Apple HIG UI Pattern Examples

Complete, standalone HTML pages demonstrating Apple-quality interfaces. Each example includes all necessary CSS and references `design-tokens.css` for custom properties.

---

## Table of Contents

1. [Login Page](#login-page)
2. [Dashboard with Sidebar](#dashboard-with-sidebar)
3. [Settings Page](#settings-page)
4. [Product Card Grid](#product-card-grid)
5. [Search Interface](#search-interface)
6. [Pricing Table](#pricing-table)
7. [Chat Interface](#chat-interface)

---

## Login Page

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sign In</title>
  <link rel="stylesheet" href="design-tokens.css">
  <style>
    .auth-container {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: var(--space-4);
      background: linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
    }

    .auth-card {
      width: 100%;
      max-width: 400px;
      background: var(--bg-tertiary);
      border-radius: var(--radius-2xl);
      padding: var(--space-8);
      box-shadow: var(--shadow-xl);
    }

    .auth-logo {
      width: 64px;
      height: 64px;
      margin: 0 auto var(--space-6);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 32px;
      background: linear-gradient(135deg, var(--system-blue), var(--system-purple));
      border-radius: var(--radius-xl);
      color: white;
    }

    .auth-title {
      font-size: var(--text-title1);
      font-weight: var(--font-weight-bold);
      line-height: var(--text-title1-lh);
      letter-spacing: var(--text-title1-ls);
      text-align: center;
      margin-bottom: var(--space-2);
      color: var(--label-primary);
    }

    .auth-subtitle {
      font-size: var(--text-subhead);
      line-height: var(--text-subhead-lh);
      letter-spacing: var(--text-subhead-ls);
      text-align: center;
      color: var(--label-secondary);
      margin-bottom: var(--space-8);
    }

    .form-group { margin-bottom: var(--space-4); }

    .form-label {
      display: block;
      font-size: var(--text-footnote);
      font-weight: var(--font-weight-semibold);
      color: var(--label-primary);
      margin-bottom: var(--space-2);
    }

    .form-input {
      width: 100%;
      min-height: var(--touch-target-min);
      padding: var(--space-3) var(--space-4);
      font-size: var(--text-body);
      letter-spacing: var(--text-body-ls);
      color: var(--label-primary);
      background: var(--bg-secondary);
      border: 1px solid transparent;
      border-radius: var(--radius-md);
      outline: none;
      transition: border-color var(--duration-fast) var(--ease-out),
                  box-shadow var(--duration-fast) var(--ease-out);
    }

    .form-input:focus {
      border-color: var(--system-blue);
      box-shadow: var(--shadow-focus);
    }

    .form-input::placeholder { color: var(--label-tertiary); }

    .form-options {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: var(--space-6);
    }

    .link {
      font-size: var(--text-footnote);
      color: var(--system-blue);
      text-decoration: none;
    }

    .link:hover { text-decoration: underline; }

    .btn-primary {
      width: 100%;
      min-height: var(--touch-target-min);
      padding: var(--space-3) var(--space-6);
      font-size: var(--text-body);
      font-weight: var(--font-weight-semibold);
      color: white;
      background: var(--system-blue);
      border: none;
      border-radius: 24px;
      cursor: pointer;
      transition: transform var(--duration-activated, 140ms) ease-out,
                  opacity var(--duration-fast) var(--ease-out);
    }

    .btn-primary:hover { opacity: 0.72; }
    .btn-primary:active { transform: scale(1.25) translateZ(0); }

    .divider {
      display: flex;
      align-items: center;
      margin: var(--space-6) 0;
      color: var(--label-tertiary);
      font-size: var(--text-footnote);
    }

    .divider::before,
    .divider::after {
      content: '';
      flex: 1;
      height: 1px;
      background: var(--separator);
    }

    .divider span { padding: 0 var(--space-3); }

    .social-buttons {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: var(--space-3);
    }

    .btn-social {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: var(--space-2);
      min-height: var(--touch-target-min);
      font-size: var(--text-subhead);
      font-weight: var(--font-weight-medium);
      color: var(--label-primary);
      background: var(--bg-secondary);
      border: 1px solid var(--separator);
      border-radius: var(--radius-md);
      cursor: pointer;
      transition: background var(--duration-fast) var(--ease-out);
    }

    .btn-social:hover { background: var(--system-gray6); }

    .auth-footer {
      text-align: center;
      margin-top: var(--space-6);
      font-size: var(--text-footnote);
      color: var(--label-secondary);
    }
  </style>
</head>
<body>
  <div class="auth-container">
    <div class="auth-card">
      <div class="auth-logo" aria-hidden="true">A</div>
      <h1 class="auth-title">Welcome back</h1>
      <p class="auth-subtitle">Sign in to continue to your account</p>

      <form>
        <div class="form-group">
          <label for="email" class="form-label">Email</label>
          <input type="email" id="email" class="form-input" placeholder="Enter your email" autocomplete="email" required>
        </div>

        <div class="form-group">
          <label for="password" class="form-label">Password</label>
          <input type="password" id="password" class="form-input" placeholder="Enter your password" autocomplete="current-password" required>
        </div>

        <div class="form-options">
          <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
            <input type="checkbox" name="remember">
            <span style="font-size: 13px; color: var(--label-primary);">Remember me</span>
          </label>
          <a href="/forgot-password" class="link">Forgot password?</a>
        </div>

        <button type="submit" class="btn-primary">Sign In</button>
      </form>

      <div class="divider"><span>or continue with</span></div>

      <div class="social-buttons">
        <button type="button" class="btn-social">Apple</button>
        <button type="button" class="btn-social">Google</button>
      </div>

      <p class="auth-footer">
        Don't have an account? <a href="/signup" class="link">Sign up</a>
      </p>
    </div>
  </div>
</body>
</html>
```

---

## Dashboard with Sidebar

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dashboard</title>
  <link rel="stylesheet" href="design-tokens.css">
  <style>
    .dashboard { display: flex; min-height: 100vh; }

    .sidebar {
      width: 260px;
      background: var(--bg-secondary);
      border-right: 1px solid var(--separator);
      display: flex;
      flex-direction: column;
      padding: var(--space-4);
    }

    .sidebar-logo {
      display: flex;
      align-items: center;
      gap: var(--space-3);
      padding: var(--space-3);
      margin-bottom: var(--space-6);
    }

    .sidebar-logo-icon {
      width: 36px; height: 36px;
      display: flex; align-items: center; justify-content: center;
      font-size: 20px;
      background: linear-gradient(135deg, var(--system-blue), var(--system-indigo));
      border-radius: var(--radius-md);
      color: white;
    }

    .sidebar-logo-text {
      font-size: 17px;
      font-weight: var(--font-weight-semibold);
      color: var(--label-primary);
    }

    .sidebar-nav { flex: 1; }

    .nav-section { margin-bottom: var(--space-6); }

    .nav-section-title {
      font-size: 12px;
      font-weight: var(--font-weight-semibold);
      color: var(--label-tertiary);
      text-transform: uppercase;
      letter-spacing: 0.05em;
      padding: 0 var(--space-3);
      margin-bottom: var(--space-2);
    }

    .nav-item {
      display: flex;
      align-items: center;
      gap: var(--space-3);
      padding: 8px 12px;
      font-size: 15px;
      color: var(--label-secondary);
      text-decoration: none;
      border-radius: 8px;
      transition: all var(--duration-fast) var(--ease-out);
      margin-bottom: var(--space-1);
    }

    .nav-item:hover { background: var(--fill-tertiary); color: var(--label-primary); }
    .nav-item.active { background: var(--system-blue); color: white; }

    .main-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      background: var(--bg-primary);
    }

    .topbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: var(--space-4) var(--space-6);
      border-bottom: 1px solid var(--separator);
    }

    .topbar-title {
      font-size: var(--text-title2);
      font-weight: var(--font-weight-bold);
      color: var(--label-primary);
    }

    .content-area {
      flex: 1;
      padding: var(--space-6);
      overflow-y: auto;
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: var(--space-4);
      margin-bottom: var(--space-6);
    }

    .stat-card {
      background: var(--bg-tertiary);
      border-radius: var(--radius-xl);
      padding: var(--space-5);
    }

    .stat-icon {
      width: 44px; height: 44px;
      display: flex; align-items: center; justify-content: center;
      font-size: 22px;
      border-radius: var(--radius-lg);
      margin-bottom: var(--space-4);
    }

    .stat-value {
      font-size: var(--text-title1);
      font-weight: var(--font-weight-bold);
      color: var(--label-primary);
      margin-bottom: var(--space-1);
    }

    .stat-label { font-size: var(--text-footnote); color: var(--label-secondary); }

    .stat-change {
      display: inline-flex;
      align-items: center;
      gap: var(--space-1);
      font-size: 12px;
      font-weight: var(--font-weight-medium);
      margin-top: var(--space-2);
    }

    .stat-change.positive { color: var(--system-green); }
    .stat-change.negative { color: var(--system-red); }

    .activity-list {
      background: var(--bg-tertiary);
      border-radius: var(--radius-xl);
      overflow: hidden;
    }

    .activity-item {
      display: flex;
      align-items: center;
      gap: var(--space-4);
      padding: var(--space-4);
      border-bottom: 0.5px solid var(--separator);
    }

    .activity-item:last-child { border-bottom: none; }

    .activity-avatar {
      width: 40px; height: 40px;
      border-radius: 50%;
      background: var(--system-gray5);
    }

    .activity-title { font-size: var(--text-subhead); color: var(--label-primary); margin-bottom: 2px; }
    .activity-time { font-size: 12px; color: var(--label-tertiary); }

    @media (max-width: 768px) {
      .sidebar { display: none; }
    }
  </style>
</head>
<body>
  <div class="dashboard">
    <aside class="sidebar">
      <div class="sidebar-logo">
        <div class="sidebar-logo-icon">D</div>
        <span class="sidebar-logo-text">Dashboard</span>
      </div>
      <nav class="sidebar-nav">
        <div class="nav-section">
          <div class="nav-section-title">Menu</div>
          <a href="#" class="nav-item active">Overview</a>
          <a href="#" class="nav-item">Analytics</a>
          <a href="#" class="nav-item">Messages</a>
          <a href="#" class="nav-item">Users</a>
        </div>
        <div class="nav-section">
          <div class="nav-section-title">Settings</div>
          <a href="#" class="nav-item">Preferences</a>
          <a href="#" class="nav-item">Help</a>
        </div>
      </nav>
    </aside>

    <main class="main-content">
      <header class="topbar">
        <h1 class="topbar-title">Overview</h1>
      </header>
      <div class="content-area">
        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-icon" style="background: rgba(0,122,255,0.12); color: var(--system-blue);">$</div>
            <div class="stat-value">$24,560</div>
            <div class="stat-label">Total Revenue</div>
            <div class="stat-change positive">+12.5% vs last month</div>
          </div>
          <div class="stat-card">
            <div class="stat-icon" style="background: rgba(52,199,89,0.12); color: var(--system-green);">U</div>
            <div class="stat-value">1,234</div>
            <div class="stat-label">Total Users</div>
            <div class="stat-change positive">+8.2% vs last month</div>
          </div>
          <div class="stat-card">
            <div class="stat-icon" style="background: rgba(255,149,0,0.12); color: var(--system-orange);">%</div>
            <div class="stat-value">89.2%</div>
            <div class="stat-label">Conversion</div>
            <div class="stat-change negative">-2.1% vs last month</div>
          </div>
        </div>

        <h2 style="font-size: var(--text-title3); font-weight: 600; margin-bottom: var(--space-4);">Recent Activity</h2>
        <div class="activity-list">
          <div class="activity-item">
            <div class="activity-avatar"></div>
            <div>
              <div class="activity-title">Sarah completed a purchase</div>
              <div class="activity-time">2 minutes ago</div>
            </div>
          </div>
          <div class="activity-item">
            <div class="activity-avatar"></div>
            <div>
              <div class="activity-title">Mike signed up for an account</div>
              <div class="activity-time">15 minutes ago</div>
            </div>
          </div>
          <div class="activity-item">
            <div class="activity-avatar"></div>
            <div>
              <div class="activity-title">Emily updated their profile</div>
              <div class="activity-time">1 hour ago</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</body>
</html>
```

---

## Settings Page

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Settings</title>
  <link rel="stylesheet" href="design-tokens.css">
  <style>
    body { background: var(--bg-grouped-primary); }

    .settings-page {
      max-width: 600px;
      margin: 0 auto;
      padding: var(--space-4);
    }

    .settings-header {
      font-size: var(--text-large-title);
      font-weight: var(--font-weight-bold);
      line-height: var(--text-large-title-lh);
      color: var(--label-primary);
      margin-bottom: var(--space-6);
      padding: var(--space-4) 0;
    }

    .settings-group { margin-bottom: var(--space-6); }

    .settings-group-title {
      font-size: 13px;
      font-weight: 400;
      color: var(--label-secondary);
      text-transform: uppercase;
      letter-spacing: 0.02em;
      margin-left: var(--space-4);
      margin-bottom: var(--space-2);
    }

    .settings-group-footer {
      font-size: 13px;
      color: var(--label-secondary);
      margin-left: var(--space-4);
      margin-top: var(--space-2);
      line-height: 1.4;
    }

    .settings-card {
      background: var(--bg-grouped-secondary);
      border-radius: 10px;
      overflow: hidden;
    }

    .settings-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: var(--space-3) var(--space-4);
      min-height: 44px;
      border-bottom: 0.5px solid var(--separator);
    }

    .settings-item:last-child { border-bottom: none; }

    .settings-item-left {
      display: flex;
      align-items: center;
      gap: var(--space-3);
    }

    .settings-icon {
      width: 28px; height: 28px;
      display: flex; align-items: center; justify-content: center;
      font-size: 14px; font-weight: 700;
      color: white;
      border-radius: 6px;
    }

    .settings-label { font-size: 17px; color: var(--label-primary); }
    .settings-value { font-size: 17px; color: var(--label-secondary); }
    .settings-chevron { font-size: 14px; color: var(--label-tertiary); margin-left: var(--space-2); }

    /* Toggle — iOS 26 (64×28, glass activation on press) */
    .toggle { position: relative; width: var(--toggle-width, 64px); height: var(--toggle-height, 28px); flex-shrink: 0; }
    .toggle input { opacity: 0; width: 0; height: 0; position: absolute; }

    .toggle-track {
      position: absolute; inset: 0;
      background: var(--toggle-track-off, rgba(0, 0, 0, 0.23));
      border-radius: 28px;
      cursor: pointer;
      transition: background 280ms ease, transform 280ms ease;
      overflow: visible;
    }

    .toggle-track::before {
      content: '';
      position: absolute;
      width: var(--toggle-handle-width, 38px); height: var(--toggle-handle-height, 24px);
      left: 2px; top: 2px;
      background: white;
      border-radius: 24px;
      box-shadow: var(--shadow-toggle-knob);
      transition: transform 280ms ease, box-shadow 200ms ease, background-color 250ms ease;
    }

    .toggle input:checked + .toggle-track { background: var(--system-green); }
    .toggle input:checked + .toggle-track::before {
      transform: translateX(calc(var(--toggle-width, 64px) - var(--toggle-handle-width, 38px) - 4px));
    }
    .toggle input:active + .toggle-track::before {
      transform: scale(1.4, 1.6) translateZ(0);
      background: rgba(var(--glass-bg-rgb, 255, 255, 255), 0.1);
      backdrop-filter: blur(0.5px) saturate(120%);
      box-shadow: inset 0 0 8px 0 var(--toggle-track-off, rgba(0, 0, 0, 0.23));
    }
  </style>
</head>
<body>
  <div class="settings-page">
    <h1 class="settings-header">Settings</h1>

    <section class="settings-group">
      <h3 class="settings-group-title">Account</h3>
      <div class="settings-card">
        <div class="settings-item">
          <div class="settings-item-left">
            <span class="settings-icon" style="background: var(--system-blue);">J</span>
            <div>
              <div class="settings-label">John Doe</div>
              <div style="font-size: 13px; color: var(--label-secondary);">Apple ID, iCloud, Media</div>
            </div>
          </div>
          <span class="settings-chevron">&#8250;</span>
        </div>
      </div>
    </section>

    <section class="settings-group">
      <h3 class="settings-group-title">Preferences</h3>
      <div class="settings-card">
        <div class="settings-item">
          <div class="settings-item-left">
            <span class="settings-icon" style="background: var(--system-orange);">B</span>
            <span class="settings-label">Notifications</span>
          </div>
          <label class="toggle" aria-label="Toggle notifications">
            <input type="checkbox" checked>
            <span class="toggle-track"></span>
          </label>
        </div>
        <div class="settings-item">
          <div class="settings-item-left">
            <span class="settings-icon" style="background: var(--system-indigo);">D</span>
            <span class="settings-label">Dark Mode</span>
          </div>
          <label class="toggle" aria-label="Toggle dark mode">
            <input type="checkbox">
            <span class="toggle-track"></span>
          </label>
        </div>
        <div class="settings-item">
          <div class="settings-item-left">
            <span class="settings-icon" style="background: var(--system-green);">S</span>
            <span class="settings-label">Sounds</span>
          </div>
          <label class="toggle" aria-label="Toggle sounds">
            <input type="checkbox" checked>
            <span class="toggle-track"></span>
          </label>
        </div>
      </div>
    </section>

    <section class="settings-group">
      <h3 class="settings-group-title">General</h3>
      <div class="settings-card">
        <div class="settings-item">
          <div class="settings-item-left">
            <span class="settings-icon" style="background: var(--system-gray);">L</span>
            <span class="settings-label">Language</span>
          </div>
          <div style="display: flex; align-items: center;">
            <span class="settings-value">English</span>
            <span class="settings-chevron">&#8250;</span>
          </div>
        </div>
        <div class="settings-item">
          <div class="settings-item-left">
            <span class="settings-icon" style="background: var(--system-purple);">P</span>
            <span class="settings-label">Privacy</span>
          </div>
          <span class="settings-chevron">&#8250;</span>
        </div>
        <div class="settings-item">
          <div class="settings-item-left">
            <span class="settings-icon" style="background: var(--system-teal);">A</span>
            <span class="settings-label">About</span>
          </div>
          <span class="settings-chevron">&#8250;</span>
        </div>
      </div>
      <p class="settings-group-footer">Version 3.0.0</p>
    </section>
  </div>
</body>
</html>
```

---

## Product Card Grid

```html
<div class="products-section">
  <header style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--space-6);">
    <h2 style="font-size: var(--text-title2); font-weight: 700; color: var(--label-primary);">Featured Products</h2>
    <a href="/products" style="font-size: 15px; color: var(--system-blue); text-decoration: none;">View All</a>
  </header>

  <div class="products-grid">
    <article class="product-card">
      <div class="product-image">
        <img src="product1.jpg" alt="Wireless Headphones">
      </div>
      <div class="product-info">
        <span class="product-category">Electronics</span>
        <h3 class="product-name">Wireless Headphones Pro</h3>
        <div class="product-footer">
          <span class="product-price">$299.00</span>
          <button class="add-to-cart">Add to Cart</button>
        </div>
      </div>
    </article>
  </div>
</div>

<style>
.products-section {
  padding: var(--space-8) var(--space-4);
  max-width: 1200px;
  margin: 0 auto;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: var(--space-4);
}

.product-card {
  background: var(--bg-tertiary);
  border-radius: var(--radius-xl);
  overflow: hidden;
  transition: transform var(--duration-normal) var(--ease-out),
              box-shadow var(--duration-normal) var(--ease-out);
}

.product-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
}

.product-image {
  aspect-ratio: 1;
  background: var(--bg-secondary);
  overflow: hidden;
}

.product-image img {
  width: 100%; height: 100%;
  object-fit: cover;
  transition: transform var(--duration-slow) var(--ease-out);
}

.product-card:hover .product-image img { transform: scale(1.05); }

.product-info { padding: var(--space-4); }

.product-category {
  font-size: 12px;
  color: var(--system-blue);
  font-weight: 500;
}

.product-name {
  font-size: 17px;
  font-weight: 600;
  color: var(--label-primary);
  margin: var(--space-1) 0 var(--space-3);
}

.product-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.product-price {
  font-size: 17px;
  font-weight: 700;
  color: var(--label-primary);
}

.add-to-cart {
  padding: 8px 16px;
  font-size: 13px;
  font-weight: 600;
  color: white;
  background: var(--system-blue);
  border: none;
  border-radius: 24px;
  cursor: pointer;
  transition: transform 140ms ease-out, opacity 150ms ease;
}

.add-to-cart:hover { opacity: 0.72; }
.add-to-cart:active { transform: scale(1.25) translateZ(0); }
</style>
```

---

## Search Interface

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Search</title>
  <link rel="stylesheet" href="design-tokens.css">
  <style>
    .search-page {
      max-width: 600px;
      margin: 0 auto;
      padding: var(--space-4);
    }

    .search-header {
      font-size: var(--text-large-title);
      font-weight: var(--font-weight-bold);
      color: var(--label-primary);
      margin-bottom: var(--space-4);
    }

    .search-bar {
      position: relative;
      margin-bottom: var(--space-6);
    }

    .search-icon {
      position: absolute;
      left: 12px;
      top: 50%;
      transform: translateY(-50%);
      font-size: 14px;
      color: var(--label-tertiary);
      pointer-events: none;
    }

    .search-input {
      width: 100%;
      height: 36px;
      padding: 0 16px 0 36px;
      font-size: 17px;
      color: var(--label-primary);
      background: var(--fill-tertiary);
      border: none;
      border-radius: 10px;
      outline: none;
    }

    .search-input::placeholder { color: var(--label-tertiary); }

    .suggestions-title {
      font-size: 13px;
      font-weight: 600;
      color: var(--label-secondary);
      text-transform: uppercase;
      letter-spacing: 0.02em;
      margin-bottom: var(--space-3);
      padding-left: var(--space-4);
    }

    .suggestions-list {
      background: var(--bg-tertiary);
      border-radius: 10px;
      overflow: hidden;
    }

    .suggestion-item {
      display: flex;
      align-items: center;
      gap: var(--space-3);
      padding: var(--space-3) var(--space-4);
      min-height: 44px;
      border-bottom: 0.5px solid var(--separator);
      cursor: pointer;
      transition: background var(--duration-fast) var(--ease-out);
    }

    .suggestion-item:last-child { border-bottom: none; }
    .suggestion-item:hover { background: var(--bg-secondary); }

    .suggestion-icon {
      width: 28px; height: 28px;
      display: flex; align-items: center; justify-content: center;
      font-size: 14px;
      color: var(--label-tertiary);
      background: var(--bg-secondary);
      border-radius: 50%;
    }

    .suggestion-text { font-size: 17px; color: var(--label-primary); }
  </style>
</head>
<body>
  <div class="search-page">
    <h1 class="search-header">Search</h1>

    <div class="search-bar">
      <span class="search-icon" aria-hidden="true">&#128269;</span>
      <input type="search" class="search-input" placeholder="Apps, Games, Stories and More" aria-label="Search">
    </div>

    <h2 class="suggestions-title">Suggested</h2>
    <div class="suggestions-list">
      <div class="suggestion-item">
        <div class="suggestion-icon">T</div>
        <span class="suggestion-text">Trending Topics</span>
      </div>
      <div class="suggestion-item">
        <div class="suggestion-icon">R</div>
        <span class="suggestion-text">Recent Searches</span>
      </div>
      <div class="suggestion-item">
        <div class="suggestion-icon">N</div>
        <span class="suggestion-text">Nearby</span>
      </div>
    </div>
  </div>
</body>
</html>
```

---

## Pricing Table

```html
<section class="pricing-section">
  <header style="text-align: center; margin-bottom: var(--space-12);">
    <h2 style="font-size: var(--text-display-sm); font-weight: 700; color: var(--label-primary); margin-bottom: var(--space-2);">
      Simple, transparent pricing
    </h2>
    <p style="font-size: var(--text-title3); color: var(--label-secondary);">Choose the plan that's right for you</p>
  </header>

  <div class="pricing-grid">
    <div class="pricing-card">
      <h3 style="font-size: var(--text-title2); font-weight: 700; margin-bottom: var(--space-1);">Free</h3>
      <p style="font-size: 15px; color: var(--label-secondary); margin-bottom: var(--space-4);">Perfect for getting started</p>
      <div style="margin-bottom: var(--space-6);">
        <span style="font-size: 48px; font-weight: 700;">$0</span>
        <span style="font-size: 17px; color: var(--label-secondary);">/month</span>
      </div>
      <ul class="plan-features">
        <li>Up to 5 projects</li>
        <li>Basic analytics</li>
        <li>Community support</li>
      </ul>
      <button class="plan-btn secondary">Get Started</button>
    </div>

    <div class="pricing-card featured">
      <div class="featured-badge">Most Popular</div>
      <h3 style="font-size: var(--text-title2); font-weight: 700; margin-bottom: var(--space-1);">Pro</h3>
      <p style="font-size: 15px; color: var(--label-secondary); margin-bottom: var(--space-4);">Best for professionals</p>
      <div style="margin-bottom: var(--space-6);">
        <span style="font-size: 48px; font-weight: 700;">$29</span>
        <span style="font-size: 17px; color: var(--label-secondary);">/month</span>
      </div>
      <ul class="plan-features">
        <li>Unlimited projects</li>
        <li>Advanced analytics</li>
        <li>Priority support</li>
        <li>Custom integrations</li>
      </ul>
      <button class="plan-btn primary">Start Free Trial</button>
    </div>

    <div class="pricing-card">
      <h3 style="font-size: var(--text-title2); font-weight: 700; margin-bottom: var(--space-1);">Enterprise</h3>
      <p style="font-size: 15px; color: var(--label-secondary); margin-bottom: var(--space-4);">For large organizations</p>
      <div style="margin-bottom: var(--space-6);">
        <span style="font-size: 48px; font-weight: 700;">$99</span>
        <span style="font-size: 17px; color: var(--label-secondary);">/month</span>
      </div>
      <ul class="plan-features">
        <li>Everything in Pro</li>
        <li>Dedicated support</li>
        <li>SLA guarantee</li>
        <li>Custom contracts</li>
      </ul>
      <button class="plan-btn secondary">Contact Sales</button>
    </div>
  </div>
</section>

<style>
.pricing-section {
  padding: var(--space-16) var(--space-4);
  max-width: 1100px;
  margin: 0 auto;
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-4);
  align-items: start;
}

.pricing-card {
  position: relative;
  background: var(--bg-tertiary);
  border-radius: var(--radius-2xl);
  padding: var(--space-8);
  border: 1px solid var(--separator);
}

.pricing-card.featured {
  border-color: var(--system-blue);
  box-shadow: 0 0 0 1px var(--system-blue);
}

.featured-badge {
  position: absolute;
  top: 0; left: 50%;
  transform: translate(-50%, -50%);
  font-size: 12px; font-weight: 600;
  color: white;
  background: var(--system-blue);
  padding: 4px 12px;
  border-radius: var(--radius-full);
}

.plan-features {
  list-style: none;
  margin-bottom: var(--space-8);
}

.plan-features li {
  display: flex; align-items: center; gap: 12px;
  font-size: 15px; color: var(--label-primary);
  padding: 8px 0;
}

.plan-features li::before {
  content: '';
  width: 20px; height: 20px;
  background: rgba(52, 199, 89, 0.12);
  border-radius: 50%;
  flex-shrink: 0;
}

.plan-btn {
  width: 100%;
  min-height: 44px;
  font-size: 17px; font-weight: 600;
  border: none;
  border-radius: 24px;
  cursor: pointer;
  transition: transform 140ms ease-out, opacity 150ms ease;
}

.plan-btn.primary { color: white; background: var(--system-blue); }
.plan-btn.primary:hover { opacity: 0.72; }
.plan-btn:active { transform: scale(1.25) translateZ(0); }
.plan-btn.secondary { color: var(--system-blue); background: rgba(0,122,255,0.1); }
.plan-btn.secondary:hover { background: rgba(0,122,255,0.15); }
</style>
```

---

## Chat Interface

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Messages</title>
  <link rel="stylesheet" href="design-tokens.css">
  <style>
    .chat-app {
      display: flex;
      flex-direction: column;
      height: 100vh;
      max-width: 600px;
      margin: 0 auto;
      background: var(--bg-primary);
    }

    .chat-header {
      display: flex;
      align-items: center;
      gap: var(--space-3);
      padding: var(--space-3) var(--space-4);
      background: rgba(255,255,255,0.72);
      backdrop-filter: blur(20px) saturate(180%);
      -webkit-backdrop-filter: blur(20px) saturate(180%);
      border-bottom: 1px solid var(--separator);
    }

    @media (prefers-color-scheme: dark) {
      .chat-header { background: rgba(29,29,31,0.72); }
    }

    .chat-avatar {
      width: 36px; height: 36px;
      border-radius: 50%;
      background: var(--system-blue);
      display: flex; align-items: center; justify-content: center;
      color: white; font-weight: 600; font-size: 14px;
    }

    .chat-name { font-size: 17px; font-weight: 600; color: var(--label-primary); }
    .chat-status { font-size: 12px; color: var(--system-green); }

    .chat-messages {
      flex: 1;
      overflow-y: auto;
      padding: var(--space-4);
      display: flex;
      flex-direction: column;
      gap: var(--space-2);
    }

    .message {
      max-width: 75%;
      padding: 10px 14px;
      border-radius: 18px;
      font-size: 17px;
      line-height: 1.35;
    }

    .message-sent {
      align-self: flex-end;
      background: var(--system-blue);
      color: white;
      border-bottom-right-radius: 4px;
    }

    .message-received {
      align-self: flex-start;
      background: var(--system-gray5);
      color: var(--label-primary);
      border-bottom-left-radius: 4px;
    }

    @media (prefers-color-scheme: dark) {
      .message-received { background: var(--system-gray4); }
    }

    .message-time {
      font-size: 11px;
      color: var(--label-tertiary);
      text-align: center;
      padding: var(--space-2) 0;
    }

    .chat-input-bar {
      display: flex;
      align-items: center;
      gap: var(--space-2);
      padding: var(--space-2) var(--space-4);
      border-top: 1px solid var(--separator);
      padding-bottom: calc(var(--space-2) + env(safe-area-inset-bottom));
    }

    .chat-input {
      flex: 1;
      min-height: 36px;
      padding: 8px 14px;
      font-size: 17px;
      color: var(--label-primary);
      background: var(--fill-tertiary);
      border: none;
      border-radius: 18px;
      outline: none;
    }

    .chat-input::placeholder { color: var(--label-tertiary); }

    .chat-send {
      width: 36px; height: 36px;
      display: flex; align-items: center; justify-content: center;
      background: var(--system-blue);
      color: white;
      border: none;
      border-radius: 50%;
      cursor: pointer;
      font-size: 16px;
      font-weight: 700;
    }

    .chat-send:disabled { opacity: 0.5; cursor: not-allowed; }
  </style>
</head>
<body>
  <div class="chat-app">
    <header class="chat-header">
      <div class="chat-avatar">S</div>
      <div>
        <div class="chat-name">Sarah</div>
        <div class="chat-status">Online</div>
      </div>
    </header>

    <div class="chat-messages">
      <div class="message-time">Today 2:30 PM</div>
      <div class="message message-received">Hey! How's the project going?</div>
      <div class="message message-sent">Great! Just finished the UI components.</div>
      <div class="message message-received">That's awesome! Can you share the designs?</div>
      <div class="message message-sent">Sure, I'll send them over in a moment. They follow the HIG specs we discussed.</div>
      <div class="message message-received">Perfect, looking forward to it!</div>
    </div>

    <div class="chat-input-bar">
      <input type="text" class="chat-input" placeholder="Message" aria-label="Type a message">
      <button class="chat-send" aria-label="Send message">&#8593;</button>
    </div>
  </div>
</body>
</html>
```

---

*All examples use design tokens from `references/design-tokens.css`. Combine and customize these patterns to create cohesive, Apple-quality interfaces.*
