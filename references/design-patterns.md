# Apple HIG Design Patterns Reference

Self-contained reference for building Apple-quality interfaces. All specs verified against Apple HIG, iOS UIKit, and the WWDC 2023-2025 sessions. Requires `design-tokens.css` for CSS custom properties.

---

## Table of Contents

1. [Navigation Bar](#navigation-bar)
2. [Tab Bar](#tab-bar)
3. [Toolbar](#toolbar)
4. [Buttons](#buttons)
5. [Lists (Grouped)](#lists-grouped)
6. [Cards](#cards)
7. [Bottom Sheets](#bottom-sheets)
8. [Alerts](#alerts)
9. [Search Bar](#search-bar)
10. [Text Fields](#text-fields)
11. [Toggle / Switch](#toggle--switch)
12. [Segmented Control](#segmented-control)
13. [Slider](#slider)
14. [Picker / Dropdown](#picker--dropdown)
15. [Sidebar (macOS)](#sidebar-macos)
16. [Popover](#popover)
17. [Progress Indicators](#progress-indicators)
18. [Badges](#badges)
19. [Page Layout Patterns](#page-layout-patterns)
20. [Form Patterns](#form-patterns)
21. [Data Display](#data-display)
22. [Empty & Error States](#empty--error-states)
23. [Loading States](#loading-states)
24. [Platform Adaptations](#platform-adaptations)
25. [iOS 26 Glass System Reference](#ios-26-glass-system-reference)

---

## Navigation Bar

| Property | Value |
|----------|-------|
| Height | 44px (compact) / 52px (with large title/search) |
| Background | rgba(255,255,255,0.72) with backdrop-filter: blur(20px) saturate(180%) |
| Dark mode bg | rgba(29,29,31,0.72) |
| Border bottom | 1px solid var(--separator) |
| Title | 17px semibold (inline) / 34px bold (large title) |
| Text color | var(--label-primary) — standard dark/white, NOT .glass-text white |
| Max content width | 1200px centered |
| Position | sticky top: 0, z-index 100+ |
| Back chevron | 22px, system-blue |

```html
<nav class="navbar" role="navigation" aria-label="Main navigation">
  <div class="navbar-container">
    <a href="/" class="navbar-brand" aria-label="Home">
      <span class="brand-logo">AppName</span>
    </a>
    <ul class="navbar-menu">
      <li><a href="/features" class="nav-link">Features</a></li>
      <li><a href="/pricing" class="nav-link">Pricing</a></li>
    </ul>
    <div class="navbar-actions">
      <button class="btn-text">Sign In</button>
      <button class="btn-primary btn-sm">Get Started</button>
    </div>
    <button class="navbar-toggle" aria-label="Toggle menu" aria-expanded="false">
      <span class="hamburger-line"></span>
      <span class="hamburger-line"></span>
    </button>
  </div>
</nav>
```

```css
.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(255, 255, 255, 0.72);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border-bottom: 1px solid var(--separator);
}

@supports not (backdrop-filter: blur(20px)) {
  .navbar { background: var(--bg-primary); }
}

@media (prefers-color-scheme: dark) {
  .navbar { background: rgba(29, 29, 31, 0.72); }
}

.navbar-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--space-4);
  height: 52px;
}

.navbar-brand {
  font-weight: 600;
  font-size: 17px;
  color: var(--label-primary);
  text-decoration: none;
}

.navbar-menu {
  display: flex;
  list-style: none;
  gap: var(--space-6);
}

.nav-link {
  font-size: 14px;
  color: var(--label-primary);
  text-decoration: none;
  padding: var(--space-2) 0;
  transition: color var(--duration-fast) var(--ease-out);
}

.nav-link:hover { color: var(--system-blue); }

.navbar-actions {
  display: flex;
  align-items: center;
  gap: var(--space-3);
}

.navbar-toggle {
  display: none;
  flex-direction: column;
  gap: 4px;
  width: 44px;
  height: 44px;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  cursor: pointer;
}

.hamburger-line {
  width: 20px;
  height: 2px;
  background: var(--label-primary);
  border-radius: 1px;
}

@media (max-width: 768px) {
  .navbar-menu, .navbar-actions { display: none; }
  .navbar-toggle { display: flex; }
}
```

---

## Tab Bar

> **iOS 26 update** — floating pill shape with glass background, scale(1.038) on press.
> Source: [rdlabo-team/ionic-theme-ios26](https://github.com/rdlabo-team/ionic-theme-ios26)

| Property | Value |
|----------|-------|
| Height | 49px + safe-area-inset-bottom |
| **Shape** | **Floating pill (border-radius: 40px)** |
| **Background** | **glass-background(0.72, 2px, 360%)** |
| **Borders** | **0.5px asymmetric** |
| Position | Fixed bottom |
| Icon size | 24px (fill selected, outline unselected) |
| Label | 10px medium weight |
| Text color | var(--label-secondary) inactive, var(--system-blue) active — NOT .glass-text white |
| Active color | system-blue |
| Inactive color | label-secondary |
| **Tab bar activation** | **scale(1.038)** on press |
| **Tab item activation** | **scale(1.1)** on individual tab press |
| Min touch target | 44x44pt per tab |
| Min tab width | 64px |
| Max tabs | 5 (use "More" for additional) |

**Critical:** Tab bars MUST always display text labels. Icon-only violates HIG.

```html
<nav class="tab-bar" role="tablist" aria-label="Main sections">
  <a href="/" class="tab-item active" role="tab" aria-selected="true">
    <span class="tab-icon" aria-hidden="true">Home</span>
    <span class="tab-label">Home</span>
  </a>
  <a href="/search" class="tab-item" role="tab" aria-selected="false">
    <span class="tab-icon" aria-hidden="true">Search</span>
    <span class="tab-label">Search</span>
  </a>
  <a href="/profile" class="tab-item" role="tab" aria-selected="false">
    <span class="tab-icon" aria-hidden="true">Profile</span>
    <span class="tab-label">Profile</span>
  </a>
</nav>
```

```css
.tab-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-around;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border-top: 1px solid var(--separator);
  padding-bottom: env(safe-area-inset-bottom);
  z-index: 100;
}

@media (prefers-color-scheme: dark) {
  .tab-bar { background: rgba(29, 29, 31, 0.85); }
}

.tab-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 64px;
  min-height: 49px;
  padding: var(--space-1) var(--space-3);
  text-decoration: none;
  color: var(--label-secondary);
  transition: color var(--duration-fast) var(--ease-out);
}

.tab-item.active { color: var(--system-blue); }
.tab-icon { font-size: 24px; margin-bottom: 2px; }
.tab-label { font-size: 10px; font-weight: 500; }
```

---

## Toolbar

| Property | Value |
|----------|-------|
| Height | 44px + safe-area-inset-bottom |
| Position | Bottom (iOS), below nav bar (macOS) |
| Icon size | 22px, system-blue |
| Border | 1px solid var(--separator) |
| Background | Same translucent blur as nav/tab bars |

---

## Buttons

> **iOS 26 update** — buttons scale **up** on press (not down), glass variant added, hover opacity lowered to 0.72.
> Source: [rdlabo-team/ionic-theme-ios26](https://github.com/rdlabo-team/ionic-theme-ios26)

### Styles

| Style | Background | Text | Use Case |
|-------|------------|------|----------|
| Filled (Primary) | system-blue | white | Main actions |
| Gray | system-gray5 / fill-tertiary | label-primary | Secondary |
| Tinted | rgba(0,122,255,0.1) | system-blue | Tertiary |
| Plain | transparent | system-blue | Inline/text |
| Destructive | system-red | white | Delete/remove |
| **Glass** | glass-background(0.72, 2px, 360%) | label-primary | Translucent overlay |

### Properties

| Property | Value |
|----------|-------|
| Shape | Rounded (border-radius: 24px default, 30px large) |
| Min height | 44px (iOS), 28px (macOS compact) |
| Padding | 8px 16px (sm), 12px 24px (md), 16px 32px (lg) |
| Font size | 14px (sm), 17px (md), 19px (lg) |
| Font weight | Semibold (600) |
| Hover | opacity: 0.72 |
| **Press (default)** | **transform: scale(1.25)** — scale UP |
| **Press (sm/lg)** | **transform: scale(1.12)** |
| **Press (icon-only)** | **transform: scale(1.32)** default, 1.18 sm, 1.22 lg |
| Press transition | 140ms ease-out |
| Disabled | opacity: 0.5, cursor: not-allowed |
| Focus ring | box-shadow: 0 0 0 4px rgba(0,122,255,0.3) |

### Scale-Up Table (from ionic-theme-ios26)

| Size | Text Button | Icon-Only Button |
|------|-------------|------------------|
| Small | 1.12 | 1.18 |
| Default | 1.25 | 1.32 |
| Large | 1.12 | 1.22 |

### Dark Mode Activation

Glass and tinted buttons use inverted activation in dark mode:
- Background: `rgba(255,255,255,0.56)` (instead of glass-bg-rgb)
- Backdrop: `blur(7px) saturate(180%)`
- Border: `0.8px solid rgba(var(--glass-selected-rgb), 0.8)`

```css
.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  min-height: 44px;
  padding: 12px 24px;
  font-family: var(--font-system);
  font-size: 17px;
  font-weight: 600;
  color: white;
  background: var(--system-blue);
  border: none;
  border-radius: 24px;
  cursor: pointer;
  transition: transform var(--duration-activated, 140ms) ease-out,
              opacity var(--duration-fast) var(--ease-out);
}

.btn-primary:hover { opacity: 0.72; }
.btn-primary:active {
  transform: scale(1.25) translateZ(0);
  box-shadow:
    inset 0 0 8px rgba(var(--glass-shadow-rgb), 0.08),
    0 0 10px rgba(var(--glass-shadow-rgb), 0.06);
}
.btn-primary:disabled { opacity: 0.5; cursor: not-allowed; }
.btn-primary:focus-visible { box-shadow: var(--shadow-focus); }

.btn-secondary {
  min-height: 44px;
  padding: 12px 24px;
  font-family: var(--font-system);
  font-size: 17px;
  font-weight: 600;
  color: var(--system-blue);
  background: rgba(0, 122, 255, 0.1);
  border: none;
  border-radius: 24px;
  cursor: pointer;
  transition: transform var(--duration-activated, 140ms) ease-out;
}
.btn-secondary:hover { opacity: 0.72; }
.btn-secondary:active { transform: scale(1.25) translateZ(0); }

.btn-destructive {
  min-height: 44px;
  padding: 12px 24px;
  font-family: var(--font-system);
  font-size: 17px;
  font-weight: 600;
  color: white;
  background: var(--system-red);
  border: none;
  border-radius: 24px;
  cursor: pointer;
  transition: transform var(--duration-activated, 140ms) ease-out;
}
.btn-destructive:hover { opacity: 0.72; }
.btn-destructive:active { transform: scale(1.25) translateZ(0); }

/* Glass button — full glass-background */
.btn-glass {
  min-height: 44px;
  padding: 12px 24px;
  font-family: var(--font-system);
  font-size: 17px;
  font-weight: 600;
  color: var(--label-primary);
  background: rgba(var(--glass-bg-rgb), var(--glass-opacity, 0.72));
  backdrop-filter: blur(var(--glass-blur, 2px)) saturate(var(--glass-saturate, 360%));
  -webkit-backdrop-filter: blur(var(--glass-blur, 2px)) saturate(var(--glass-saturate, 360%));
  border-top: 0.5px solid rgba(var(--glass-border-rgb), 1);
  border-bottom: 0.5px solid rgba(var(--glass-border-rgb), 1);
  border-right: 0.5px solid rgba(var(--glass-border-rgb), 0.8);
  border-left: 0.5px solid rgba(var(--glass-border-rgb), 0.6);
  border-radius: 24px;
  cursor: pointer;
  transition: transform var(--duration-activated, 140ms) ease-out;
}
.btn-glass:hover { opacity: 0.72; }
.btn-glass:active {
  transform: scale(1.25) translateZ(0);
  color: rgba(var(--glass-bg-rgb), 0.1); /* text fades */
}

.btn-text {
  font-size: 14px;
  color: var(--system-blue);
  background: transparent;
  border: none;
  cursor: pointer;
  padding: var(--space-2) var(--space-3);
  transition: transform var(--duration-activated, 140ms) ease-out;
}
.btn-text:active { color: rgba(0, 122, 255, 0.1); }

.btn-sm { min-height: 32px; padding: 8px 16px; font-size: 14px; }
.btn-sm:active { transform: scale(1.12) translateZ(0); }
.btn-lg { min-height: 56px; padding: 16px 32px; font-size: 19px; border-radius: 30px; }
.btn-lg:active { transform: scale(1.12) translateZ(0); }
.btn-full { width: 100%; }
```

---

## Lists (Grouped)

| Property | Value |
|----------|-------|
| Section corner radius | 10px |
| Section margin | 8px (inset-grouped: 16px) |
| Item min height | 44px |
| Item padding | 12px 16px |
| Separator | 0.5px, var(--separator) |
| Separator inset (with icon) | 60px left |
| Separator inset (no icon) | 16px left |
| Section header | 13px, regular, uppercase, secondary-label, left 16px, bottom 8px |
| Section footer | 13px, regular, secondary-label |
| Disclosure chevron | 14px, tertiary-label |
| Background | bg-tertiary items on bg-grouped-primary |

```html
<div class="settings-container">
  <section class="settings-group">
    <h3 class="settings-group-title">Account</h3>
    <div class="settings-card">
      <div class="settings-item">
        <div class="settings-item-content">
          <span class="settings-icon" style="background: var(--system-blue);">P</span>
          <div class="settings-text">
            <span class="settings-label">Profile</span>
            <span class="settings-value">John Doe</span>
          </div>
        </div>
        <span class="settings-chevron">&#8250;</span>
      </div>
      <div class="settings-item">
        <div class="settings-item-content">
          <span class="settings-icon" style="background: var(--system-gray);">@</span>
          <div class="settings-text">
            <span class="settings-label">Email</span>
            <span class="settings-value">john@example.com</span>
          </div>
        </div>
        <span class="settings-chevron">&#8250;</span>
      </div>
    </div>
  </section>
</div>
```

```css
.settings-container { max-width: 600px; margin: 0 auto; padding: var(--space-4); }
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

.settings-card {
  background: var(--bg-tertiary);
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
  cursor: pointer;
  transition: background var(--duration-fast) var(--ease-out);
}

.settings-item:last-child { border-bottom: none; }
.settings-item:hover { background: var(--bg-secondary); }

.settings-item-content { display: flex; align-items: center; gap: var(--space-3); }

.settings-icon {
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: white;
  border-radius: 6px;
}

.settings-text { display: flex; flex-direction: column; }
.settings-label { font-size: 17px; color: var(--label-primary); }
.settings-value { font-size: 13px; color: var(--label-secondary); }
.settings-chevron { font-size: 14px; color: var(--label-tertiary); }
```

---

## Cards

| Property | Default | Elevated | Glass (Liquid Glass) |
|----------|---------|----------|-------|
| Background | bg-tertiary | bg-tertiary | rgba(255,255,255,0.18) |
| Border radius | 16px | 16px | 16px |
| Shadow | none | shadow-md to shadow-lg | inset shine + 0 6px 12px rgba(0,0,0,0.12) |
| Border | none | none | none (use inset box-shadow for shine) |
| Backdrop filter | none | none | blur(20px) saturate(180%) |
| Text color | label-primary | label-primary | white (0.92) with text-shadow |
| Padding | 16-24px | 16-24px | 16-24px |
| Hover | translateY(-4px) | translateY(-4px) | -- |

**Glass text rules:**

| Glass Type | Opacity | Text Color | Classes |
|------------|---------|------------|---------|
| Liquid Glass (`.glass`, `.glass-refract`) | 15-18% | White `rgba(255,255,255,0.92)` + text-shadow | `.glass-text` / `.glass-text-secondary` |
| Nav Bar (`.glass-nav`) | 72% | Standard `var(--label-primary)` | No glass-text needed |
| Tab Bar (`.glass-tab`) | 85% | Standard `var(--label-secondary)` / `var(--system-blue)` active | No glass-text needed |

**Rule of thumb:** Low opacity tint (< 50%) = white text with shadow. High opacity tint (> 50%) = standard label colors.

### Liquid Glass — Advanced (SVG Refraction)

Physics-based refraction using Snell's Law (`n₁·sin(θ₁) = n₂·sin(θ₂)`, glass n=1.5).

| Layer | Technique | Browser Support |
|-------|-----------|-----------------|
| 1. CSS-only | `backdrop-filter: blur()` + inset `box-shadow` | All modern browsers |
| 2. SVG Displacement | `feDisplacementMap` with pre-calculated refraction vectors | Chrome only (`backdrop-filter: url(#svg)`) |
| 3. Specular | `feSpecularLighting` + `feBlend mode="screen"` | Chrome only |

**Apple's squircle surface profile:** `y = ⁴√(1 - (1-x)⁴)` — softer edge transition than circular arc.

**Displacement map encoding:** Refraction vectors → RGB pixel data (R=X, G=Y, 128=neutral/no shift). Generated via Canvas, applied as `feImage` href in SVG filter.

**Fallback strategy:** Always start with `.glass` (CSS-only), layer `.glass-refract` with SVG filter on top. Non-Chrome browsers ignore the SVG filter and get standard blur.

Reference: [kube.io/blog/liquid-glass-css-svg](https://kube.io/blog/liquid-glass-css-svg/)

---

## Bottom Sheets

> **iOS 26 update** — glass overlay background, 32px radius, glass handle.

| Property | Value |
|----------|-------|
| **Top border radius** | **32px** |
| Grabber | 36px wide, 5px tall, **rgba(glass-bg-rgb, 0.4)**, 2.5px radius |
| Grabber position | Centered, 8px top, 16px bottom margin |
| Detents | Medium (50%), Large (100%) |
| Overlay | rgba(0,0,0,0.4) |
| **Background** | **glass-background(0.6667, 8px, 360%)** |
| **Borders** | **0.5px asymmetric** (top: opacity 1, right: 0.8, left: 0.6, no bottom) |
| Animation | slideUp 300ms ease-out |
| Safe area | padding-bottom: env(safe-area-inset-bottom) |
| Cancel button | Top-left, system-blue, plain style |
| Done button | Top-right, system-blue, semibold |
| Solid fallback | bg-secondary when `@supports not (backdrop-filter: blur(1px))` |

```css
.sheet-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1000;
  display: flex;
  align-items: flex-end;
}

.sheet-container {
  width: 100%;
  background: rgba(var(--glass-bg-rgb, 255, 255, 255), 0.6667);
  backdrop-filter: blur(8px) saturate(var(--glass-saturate, 360%));
  -webkit-backdrop-filter: blur(8px) saturate(var(--glass-saturate, 360%));
  border-radius: 32px 32px 0 0;
  border-top: 0.5px solid rgba(var(--glass-border-rgb, 255, 255, 255), 1);
  border-right: 0.5px solid rgba(var(--glass-border-rgb, 255, 255, 255), 0.8);
  border-left: 0.5px solid rgba(var(--glass-border-rgb, 255, 255, 255), 0.6);
  box-shadow:
    inset 0 0 8px rgba(var(--glass-shadow-rgb, 220, 220, 220), 0.08),
    0 0 10px rgba(var(--glass-shadow-rgb, 220, 220, 220), 0.1);
  padding-bottom: env(safe-area-inset-bottom);
  animation: slideUp var(--duration-slow) var(--ease-out);
  transform: translateZ(0);
}

@supports not (backdrop-filter: blur(1px)) {
  .sheet-container { background: var(--bg-secondary); border: none; }
}

.sheet-handle {
  width: 36px;
  height: 5px;
  background: rgba(var(--glass-bg-rgb, 255, 255, 255), 0.4);
  border-radius: 2.5px;
  margin: var(--space-2) auto var(--space-4);
}
```

---

## Alerts

> **iOS 26 update** — glass overlay with 32px radius and scale(1.016) activation.
> Source: [rdlabo-team/ionic-theme-ios26](https://github.com/rdlabo-team/ionic-theme-ios26)

| Property | Value |
|----------|-------|
| Width | 270px |
| **Border radius** | **32px** |
| **Background** | **glass-background(0.6667, 8px, 360%)** |
| **Borders** | **0.5px asymmetric** (top/bottom: opacity 1, right: 0.8, left: 0.6) |
| Title | 17px semibold, centered |
| Message | 13px regular, secondary-label, centered |
| Max buttons | 3 (2 side-by-side, 3 stacked) |
| Button height | 44px |
| Button separator | 0.5px |
| Button text | 17px, system-blue (default), system-red (destructive) |
| **Button press bg** | **rgba(glass-bg-rgb, 0.065)** |
| **Alert activation** | **scale(1.016)** when any button is pressed |
| Animation | scaleIn from 0.95, 200ms spring |
| Overlay | rgba(0,0,0,0.4) with blur(4px) |
| Solid fallback | bg-tertiary when `@supports not (backdrop-filter: blur(1px))` |

**Rules:** Use specific verb labels (never "OK" or "Yes/No"). Destructive (red) only for irreversible actions. Default action on right/bottom, cancel on left/top.

---

## Search Bar

| Property | Value |
|----------|-------|
| Height | 36px |
| Border radius | 10px (or 9999px capsule for modern) |
| Background | fill-tertiary |
| Font size | 17px |
| Placeholder color | label-tertiary |
| Search icon | 14px magnifying glass, label-tertiary |
| Padding left | 36px (after icon) |
| Clear button | 16px circle X, appears when text present |
| Cancel button | "Cancel" text, system-blue, appears on focus |

---

## Text Fields

| Property | Value |
|----------|-------|
| Min height | 44px |
| Padding | 12px 16px |
| Border radius | 8-12px |
| Background | bg-secondary (or fill-tertiary) |
| Border (default) | 1px solid transparent |
| Border (focus) | 1px solid system-blue |
| Focus ring | box-shadow: 0 0 0 3px rgba(0,122,255,0.2) |
| Border (error) | 1px solid system-red |
| Error ring | box-shadow: 0 0 0 3px rgba(255,59,48,0.2) |
| Font size | 17px |
| Placeholder | label-tertiary |
| Label | 13px semibold, above field, 8px gap |

```css
.input-field {
  width: 100%;
  min-height: 44px;
  padding: 12px 16px;
  font-family: var(--font-system);
  font-size: 17px;
  color: var(--label-primary);
  background: var(--bg-secondary);
  border: 1px solid transparent;
  border-radius: var(--radius-md);
  outline: none;
  transition: border-color var(--duration-fast) var(--ease-out),
              box-shadow var(--duration-fast) var(--ease-out);
}

.input-field:focus {
  border-color: var(--system-blue);
  box-shadow: 0 0 0 3px rgba(0, 122, 255, 0.2);
}

.input-field::placeholder { color: var(--label-tertiary); }

.input-field.error {
  border-color: var(--system-red);
  box-shadow: 0 0 0 3px rgba(255, 59, 48, 0.2);
}

.form-label {
  display: block;
  font-size: 13px;
  font-weight: 600;
  color: var(--label-primary);
  margin-bottom: var(--space-2);
}
```

---

## Toggle / Switch

> **iOS 26 update** — wider track, larger handle, Liquid Glass activation on press.
> Source: [rdlabo-team/ionic-theme-ios26](https://github.com/rdlabo-team/ionic-theme-ios26)

| Property | Value |
|----------|-------|
| Track width | 64px (`--toggle-width`) |
| Track height | 28px (`--toggle-height`) |
| Handle width | 38px (`--toggle-handle-width`) |
| Handle height | 24px (`--toggle-handle-height`) |
| Handle offset | 2px from edges |
| Handle travel | `translateX(calc(64px - 38px - 4px))` = 22px |
| Off color | `rgba(0,0,0,0.23)` light / `rgba(255,255,255,0.23)` dark |
| On color | system-green (#34C759 / #30D158) |
| Handle | white, `var(--shadow-toggle-knob)` |
| Border radius | 28px track, 24px handle |
| Transition | 280ms ease (track + handle) |
| **Activated (pressed)** | |
| Handle scale | `scale(1.4, 1.6)` — Liquid Glass expansion |
| Handle bg | `rgba(glass-bg-rgb, 0.1)` — near-transparent |
| Handle backdrop | `blur(0.5px) saturate(120%)` |
| Handle shadow | `inset 0 0 8px 0 track-off-color` |
| Track squish | `scaleX(0.894)` from left (checked only) |
| **Dark mode** | Handle stays **white** — controls never become gray |

```css
/* Track */
.toggle-track {
  position: absolute;
  inset: 0;
  background: var(--toggle-track-off);  /* rgba(0,0,0,0.23) / rgba(255,255,255,0.23) */
  border-radius: 28px;
  transition: background 280ms ease, transform 280ms ease;
  overflow: visible;
}

/* Handle */
.toggle-track::before {
  content: '';
  position: absolute;
  width: var(--toggle-handle-width);
  height: var(--toggle-handle-height);
  left: 2px; top: 2px;
  background: white;
  border-radius: 24px;
  box-shadow: var(--shadow-toggle-knob);
  transition: transform 280ms ease, width 120ms ease-in-out 80ms,
              box-shadow 200ms ease, background-color 250ms ease;
}

/* Checked */
.toggle input:checked + .toggle-track { background: var(--system-green); }
.toggle input:checked + .toggle-track::before {
  transform: translateX(calc(var(--toggle-width) - var(--toggle-handle-width) - 4px));
}

/* Activated: Liquid Glass handle */
.toggle input:active + .toggle-track::before {
  transform: scale(1.4, 1.6) translateZ(0);
  background: rgba(var(--glass-bg-rgb), 0.1);
  backdrop-filter: blur(0.5px) saturate(120%);
  box-shadow: inset 0 0 8px 0 var(--toggle-track-off);
}

/* Checked + Activated: color-bleed inset shadows */
.toggle input:checked:active + .toggle-track::before {
  box-shadow:
    inset 0 8px 8px -8px var(--system-green),
    inset 8px 0 8px -8px var(--toggle-track-off),
    inset -8px 0 8px -8px var(--system-green);
}

/* Track squish on checked activation */
.toggle input:checked:active + .toggle-track {
  transform-origin: left;
  transform: scaleX(0.894) translateZ(0);
}
```

### Dark Mode Principle

> In iOS 26, dark mode does **not** gray out controls. Buttons, toggles, and sliders
> retain their colors. The glass surface shifts from `rgba(255,255,255,0.72)` to
> `rgba(62,62,62,0.72)`, shadows disappear (fully transparent), borders become
> subtle dark gray (`#444`), and selected-button color inverts from `#101010` to `#FFF`.
> Toggle/slider handles stay **white** — never `system-gray4`.

---

## Segmented Control

> **iOS 26 update** — glass background, scale(1.1) activation, 25px radius.
> Source: [rdlabo-team/ionic-theme-ios26](https://github.com/rdlabo-team/ionic-theme-ios26)

| Property | Value |
|----------|-------|
| **Min height** | **48px** |
| **Background** | **glass-background(0.72, 2px, 360%)** |
| **Border radius** | **25px** |
| **Borders** | **0.5px asymmetric** (top/bottom: 1, right: 0.8, left: 0.6) |
| Selected indicator | **rgba(glass-bg-rgb, 0.06)** with subtle shadow |
| Font size | 13px semibold |
| Padding | 0 16px per segment |
| Min segment width | 44px |
| **Activation** | **scale(1.1)** on press |
| **Selected active** | **scale(1.08)** |
| Transition | 140ms ease-out |

```css
.segmented-control {
  display: inline-flex;
  min-height: 48px;
  background: rgba(var(--glass-bg-rgb, 255, 255, 255), var(--glass-opacity, 0.72));
  backdrop-filter: blur(var(--glass-blur, 2px)) saturate(var(--glass-saturate, 360%));
  -webkit-backdrop-filter: blur(var(--glass-blur, 2px)) saturate(var(--glass-saturate, 360%));
  border-radius: 25px;
  border-top: 0.5px solid rgba(var(--glass-border-rgb, 255, 255, 255), 1);
  border-bottom: 0.5px solid rgba(var(--glass-border-rgb, 255, 255, 255), 1);
  border-right: 0.5px solid rgba(var(--glass-border-rgb, 255, 255, 255), 0.8);
  border-left: 0.5px solid rgba(var(--glass-border-rgb, 255, 255, 255), 0.6);
  box-shadow:
    inset 0 0 8px rgba(var(--glass-shadow-rgb, 220, 220, 220), 0.08),
    0 0 10px rgba(var(--glass-shadow-rgb, 220, 220, 220), 0.1);
  padding: 4px;
  transform: translateZ(0);
}

.segment {
  min-width: 44px;
  height: 40px;
  padding: 0 16px;
  font-size: 13px;
  font-weight: 600;
  color: var(--label-primary);
  background: transparent;
  border: none;
  border-radius: 21px;
  cursor: pointer;
  transition: transform var(--duration-activated, 140ms) ease-out,
              background var(--duration-fast) var(--ease-out);
}

.segment:active {
  transform: scale(1.1) translateZ(0);
}

.segment.active {
  background: rgba(var(--glass-bg-rgb, 255, 255, 255), 0.06);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
}

.segment.active:active {
  transform: scale(1.08) translateZ(0);
}
```

---

## Slider

> **iOS 26 update** — glass knob activation on press with scale(1.4, 1.6) and 4-directional inset shadows.
> Source: [rdlabo-team/ionic-theme-ios26](https://github.com/rdlabo-team/ionic-theme-ios26)

| Property | Value |
|----------|-------|
| Track height | 4px |
| Track radius | 2px |
| Track filled | system-blue (or custom color via `--slider-color`) |
| Track empty | fill-tertiary |
| Thumb diameter | 28px |
| **Thumb radius** | **24px** (pill, not circle) |
| Thumb color | **white — stays white in dark mode** (never gray) |
| Thumb border | 0.5px solid rgba(0,0,0,0.04) |
| Thumb shadow | 0 0.5px 1px rgba(0,0,0,0.1), 0 2px 4px rgba(0,0,0,0.12) |
| **Thumb activated** | **scale(1.4, 1.6)** — glass expansion |
| **Activated bg** | **rgba(glass-bg-rgb, 0.1)** — near-transparent |
| **Activated backdrop** | **blur(0.5px) saturate(120%)** |
| **Activated shadow** | **4-directional inset shadows** from glass-shadow-rgb |
| **Transition** | **280ms cubic-bezier(0.32, 0.72, 0, 1)** — iOS 26 curve |
| Min width | 128px |
| Min touch target | 44×44pt (thumb hit area) |
| Disabled | opacity 0.35, cursor not-allowed |

**Filled track:** Use `linear-gradient` with CSS custom property `--slider-progress` set via JS on input. Firefox uses `::-moz-range-progress` natively.

**Variants:** Icon sliders (volume, brightness) place icons at min/max ends. Stepped sliders use `step` attribute with tick-mark labels below.

### Liquid Glass Slider (iOS 26)

Custom div-based slider with SVG refraction thumb. Cannot use native `<input type="range">` because `backdrop-filter: url(#svg)` requires a real DOM element.

| Property | Value |
|----------|-------|
| Track height | 14px |
| Track radius | 7px |
| Track empty | rgba(137,137,143,0.4) |
| Thumb size | 90×60px, border-radius 30px (pill/stadium) |
| Thumb scale | transform: scale(0.6) → visual 54×36px |
| Thumb active | scale(0.65), stronger shadow |
| Thumb filter | `backdrop-filter: url(#svg-filter)` |
| SVG pipeline | feDisplacementMap (scale ~34) → feColorMatrix saturate(7) → feSpecularLighting (slope 0.4) → feBlend |
| Displacement | Canvas-generated, Snell's Law n=1.5, squircle profile, pill SDF |
| Browser | Chrome only — fallback to solid glass thumb with blur |

Reference: [kube.io/blog/liquid-glass-css-svg](https://kube.io/blog/liquid-glass-css-svg/)

---

## Picker / Dropdown

| Property | Value |
|----------|-------|
| Style | Menu-style dropdown (iOS 14+) |
| Trigger min height | 44px |
| Chevron | up/down chevron symbol |
| Menu background | bg-tertiary with blur |
| Menu border radius | 14px |
| Menu shadow | shadow-xl |
| Item height | 44px |
| Checkmark | system-blue on selected item |

---

## Sidebar (macOS)

| Property | Value |
|----------|-------|
| Width | 240-260px default, 200px minimum |
| Background | bg-secondary (translucent on macOS) |
| Border right | 1px solid var(--separator) |
| Item height | 28-32px (macOS), 44px (iOS/iPadOS) |
| Item padding | 8px 12px |
| Item border radius | 6-8px |
| Active item | system-blue bg, white text |
| Hover item | fill-tertiary bg |
| Section title | 12px semibold, tertiary-label, uppercase, 0.05em tracking |
| Item icon | 18px, 12px gap to label |
| Item font | 14-15px |

```css
.sidebar {
  width: 260px;
  background: var(--bg-secondary);
  border-right: 1px solid var(--separator);
  display: flex;
  flex-direction: column;
  padding: var(--space-4);
}

.nav-section-title {
  font-size: 12px;
  font-weight: 600;
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
.nav-item-icon { font-size: 18px; }
```

---

## Popover

| Property | Value |
|----------|-------|
| Border radius | 14px |
| Background | bg-tertiary |
| Shadow | shadow-xl to shadow-2xl |
| Arrow | 16px wide, 8px tall |
| Padding | 16-20px |
| Max width | 320-400px |
| Animation | scaleIn from 0.95, fade 200ms |

---

## Progress Indicators

| Property | Value |
|----------|-------|
| Bar height | 4px |
| Bar radius | 2px |
| Track color | fill-tertiary |
| Fill color | system-blue |
| Spinner sizes | 16px (sm), 32px (md), 48px (lg) |
| Spinner border | 3px |
| Spinner track | system-gray5 |
| Spinner fill | system-blue |
| Spinner animation | spin 0.8s linear infinite |

```css
.progress-bar {
  width: 100%;
  height: 4px;
  background: var(--fill-tertiary);
  border-radius: 2px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: var(--system-blue);
  border-radius: 2px;
  transition: width var(--duration-slow) var(--ease-out);
}

.spinner {
  width: 32px;
  height: 32px;
  border: 3px solid var(--system-gray5);
  border-top-color: var(--system-blue);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}
```

---

## Badges

| Type | Specs |
|------|-------|
| Notification dot | 8px diameter, system-red, on tab bar icons |
| Count badge | 18-24px height, capsule, system-red bg, white text, 12-14px bold |
| Status badge | 6-10px dot + text, capsule with tinted bg, 4px 10px padding |

```css
.badge {
  display: inline-flex;
  align-items: center;
  padding: 4px 10px;
  font-size: 12px;
  font-weight: 500;
  border-radius: var(--radius-full);
}

.badge-success { color: var(--system-green); background: rgba(52, 199, 89, 0.12); }
.badge-warning { color: var(--system-orange); background: rgba(255, 149, 0, 0.12); }
.badge-error { color: var(--system-red); background: rgba(255, 59, 48, 0.12); }
.badge-info { color: var(--system-blue); background: rgba(0, 122, 255, 0.12); }

.notification-dot {
  width: 8px;
  height: 8px;
  background: var(--system-red);
  border-radius: 50%;
}
```

---

## Page Layout Patterns

### Hero Section

```css
.hero {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  padding: var(--space-8) var(--space-4);
  text-align: center;
  background: linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
}

.hero-content { max-width: 680px; }

.hero-title {
  font-size: clamp(40px, 8vw, 80px);
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.05;
  color: var(--label-primary);
  margin-bottom: var(--space-4);
}

.hero-subtitle {
  font-size: clamp(17px, 3vw, 24px);
  color: var(--label-secondary);
  line-height: 1.4;
  margin-bottom: var(--space-6);
}

.hero-actions {
  display: flex;
  gap: var(--space-3);
  justify-content: center;
  flex-wrap: wrap;
}
```

### Card Grid

```css
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-4);
}

.feature-card {
  background: var(--bg-tertiary);
  border-radius: var(--radius-xl);
  padding: var(--space-6);
  text-align: center;
  transition: transform var(--duration-normal) var(--ease-out),
              box-shadow var(--duration-normal) var(--ease-out);
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
}
```

### Responsive Container

```css
.container {
  padding: var(--space-4);
  max-width: 100%;
}

@media (min-width: 744px) {
  .container { padding: var(--space-6); max-width: 720px; margin: 0 auto; }
}

@media (min-width: 1024px) {
  .container { padding: var(--space-8); max-width: 980px; }
}

@media (min-width: 1280px) {
  .container { max-width: 1200px; }
}
```

---

## Form Patterns

### Standard Form

```css
.form-group { margin-bottom: var(--space-4); }

.form-label {
  display: block;
  font-size: 13px;
  font-weight: 600;
  color: var(--label-primary);
  margin-bottom: var(--space-2);
}

.form-divider {
  display: flex;
  align-items: center;
  margin: var(--space-6) 0;
  color: var(--label-tertiary);
  font-size: 13px;
}

.form-divider::before,
.form-divider::after {
  content: '';
  flex: 1;
  height: 1px;
  background: var(--separator);
}

.form-divider span { padding: 0 var(--space-3); }
```

---

## Data Display

### List View

```css
.list-view {
  list-style: none;
  background: var(--bg-tertiary);
  border-radius: var(--radius-lg);
  overflow: hidden;
}

.list-item {
  display: flex;
  align-items: center;
  padding: var(--space-3) var(--space-4);
  min-height: 44px;
  border-bottom: 0.5px solid var(--separator);
  cursor: pointer;
  transition: background var(--duration-fast) var(--ease-out);
}

.list-item:last-child { border-bottom: none; }
.list-item:hover { background: var(--bg-secondary); }

.list-avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: var(--space-3);
}

.list-content { flex: 1; min-width: 0; }
.list-title { font-size: 17px; color: var(--label-primary); }
.list-subtitle { font-size: 14px; color: var(--label-secondary); }
.list-accessory { font-size: 14px; color: var(--label-tertiary); margin-left: var(--space-2); }
```

### Data Table

```css
.table-container {
  overflow-x: auto;
  border-radius: var(--radius-lg);
  background: var(--bg-tertiary);
}

.data-table { width: 100%; border-collapse: collapse; font-size: 14px; }

.data-table th {
  padding: var(--space-3) var(--space-4);
  text-align: left;
  font-weight: 600;
  color: var(--label-secondary);
  background: var(--bg-secondary);
  border-bottom: 1px solid var(--separator);
}

.data-table td {
  padding: var(--space-3) var(--space-4);
  color: var(--label-primary);
  border-bottom: 0.5px solid var(--separator);
}

.data-table tr:last-child td { border-bottom: none; }
.data-table tr:hover td { background: var(--bg-secondary); }
```

---

## Empty & Error States

```css
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--space-12) var(--space-4);
  text-align: center;
  min-height: 400px;
}

.empty-icon {
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  color: var(--label-tertiary);
  background: var(--bg-secondary);
  border-radius: 50%;
  margin-bottom: var(--space-4);
}

.empty-title {
  font-size: 21px;
  font-weight: 600;
  color: var(--label-primary);
  margin-bottom: var(--space-2);
}

.empty-description {
  font-size: 15px;
  color: var(--label-secondary);
  max-width: 280px;
  margin-bottom: var(--space-6);
  line-height: 1.5;
}

/* Error state uses same structure with red icon */
.error-icon {
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  color: var(--system-red);
  background: rgba(255, 59, 48, 0.12);
  border-radius: 50%;
  margin-bottom: var(--space-4);
}
```

---

## Loading States

### Skeleton

```css
.skeleton {
  background: linear-gradient(90deg,
    var(--system-gray5) 25%,
    var(--system-gray6) 50%,
    var(--system-gray5) 75%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: var(--radius-sm);
}

.skeleton-avatar { width: 48px; height: 48px; border-radius: 50%; }
.skeleton-title { height: 20px; width: 60%; margin-bottom: var(--space-2); }
.skeleton-text { height: 14px; width: 100%; margin-bottom: var(--space-1); }
```

---

## Platform Adaptations

### iOS

```css
/* Safe areas */
.app-container {
  padding-top: env(safe-area-inset-top);
  padding-bottom: env(safe-area-inset-bottom);
  padding-left: env(safe-area-inset-left);
  padding-right: env(safe-area-inset-right);
}

/* Scroll behavior */
.scrollable {
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
}
```

- Large titles collapse on scroll
- Edge swipe for back navigation
- Pull-to-refresh on scrollable content
- Swipe actions on list items

### macOS

```css
/* Traffic light spacing */
.titlebar { padding-left: 78px; }

/* Pointer-specific sizing */
@media (pointer: fine) {
  .btn-primary { min-height: 28px; padding: 6px 12px; font-size: 13px; }
  .input-field { min-height: 24px; padding: 4px 8px; font-size: 13px; }
  .list-item { min-height: 28px; padding: 4px 8px; }
}
```

- Standard sidebar: 240px translucent
- Tabbed settings (not full-page navigation)
- Keyboard shortcuts are essential
- Hover states important

### iPadOS

- Use sidebar navigation instead of tab bars
- Support Split View, Slide Over, Stage Manager
- Present modals as popovers when possible
- Support pointer/keyboard with hover states

### Dark Mode

- Never use pure black (#000000) for large surfaces on macOS -- use elevated backgrounds
- iOS primary background IS pure black for OLED
- Colors more vibrant in dark mode (higher saturation)
- Shadows: higher opacity, less blur
- Always test contrast in both modes

---

## iOS 26 Glass System Reference

> Extracted from [rdlabo-team/ionic-theme-ios26](https://github.com/rdlabo-team/ionic-theme-ios26)

### Glass Background Mixin

The core glass-background pattern takes 3 parameters: **opacity**, **blur**, **saturate**.

```
glass-background(opacity, blur, saturate):
  background: rgba(var(--glass-bg-rgb), {opacity});
  backdrop-filter: blur({blur}) saturate({saturate});
  border-top:    0.5px solid rgba(var(--glass-border-rgb), 1);
  border-bottom: 0.5px solid rgba(var(--glass-border-rgb), 1);
  border-right:  0.5px solid rgba(var(--glass-border-rgb), 0.8);
  border-left:   0.5px solid rgba(var(--glass-border-rgb), 0.6);
  box-shadow:
    inset 0 0 8px rgba(var(--glass-shadow-rgb), 0.08),
    0 0 10px rgba(var(--glass-shadow-rgb), 0.1);
  transform: translateZ(0);
  backface-visibility: hidden;
```

### Common Presets

| Usage | Opacity | Blur | Saturate |
|-------|---------|------|----------|
| Surface (nav, tab, sidebar) | 0.72 | 2px | 360% |
| Overlay (alert, sheet) | 0.6667 | 8px | 360% |
| Control (toggle handle, slider knob) | 0.1 | 0.5px | 120% |

### CSS Variables (Light / Dark)

| Variable | Light | Dark |
|----------|-------|------|
| `--glass-bg-rgb` | 255, 255, 255 | 62, 62, 62 |
| `--glass-border-rgb` | 255, 255, 255 | 68, 68, 68 |
| `--glass-shadow-rgb` | 220, 220, 220 | 0, 0, 0 |
| `--glass-selected-rgb` | 16, 16, 16 | 255, 255, 255 |

### Dark Mode Activation (Buttons)

In dark mode, glass and tinted buttons use inverted activation colors:
- Background: `rgba(255, 255, 255, 0.56)` (white, not dark gray)
- Backdrop: `blur(7px) saturate(180%)`
- Border: `0.8px solid rgba(var(--glass-selected-rgb), 0.8)`

### Universal Transition

iOS 26 uses `cubic-bezier(0.32, 0.72, 0, 1)` for control animations (540ms for gestures, 280ms for toggles/sliders, 140ms for buttons).

### Hardware Acceleration

Always use `transform: translateZ(0)` + `backface-visibility: hidden` on glass surfaces. Apply `will-change: transform` only during hover/active states (not permanently).

### Content Gradients

Scroll-edge fade uses `oklab` gradients:
```css
box-shadow: inset 0 44px 16px -16px rgba(var(--ios26-content-box-shadow-rgb), 1);
```

---

*All specifications verified against Apple Human Interface Guidelines (2025) and [ionic-theme-ios26](https://github.com/rdlabo-team/ionic-theme-ios26). Load `design-tokens.css` for the CSS custom properties referenced throughout this document.*
