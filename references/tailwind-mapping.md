# Apple HIG Tailwind CSS Mapping

Quick-reference for mapping Apple HIG design tokens to Tailwind CSS classes. All classes use the `apple-` prefix to avoid conflicts with default Tailwind utilities.

**Prerequisite:** Load `design-tokens.css` in your HTML so CSS custom properties resolve correctly. Colors adapt to dark mode, high contrast, and reduced motion automatically.

## Colors

### System Colors

| HIG Token | CSS Variable | Text Class | Background Class | Border Class |
|-----------|-------------|------------|-----------------|--------------|
| systemBlue | `--system-blue` | `text-apple-blue` | `bg-apple-blue` | `border-apple-blue` |
| systemGreen | `--system-green` | `text-apple-green` | `bg-apple-green` | `border-apple-green` |
| systemIndigo | `--system-indigo` | `text-apple-indigo` | `bg-apple-indigo` | `border-apple-indigo` |
| systemOrange | `--system-orange` | `text-apple-orange` | `bg-apple-orange` | `border-apple-orange` |
| systemPink | `--system-pink` | `text-apple-pink` | `bg-apple-pink` | `border-apple-pink` |
| systemPurple | `--system-purple` | `text-apple-purple` | `bg-apple-purple` | `border-apple-purple` |
| systemRed | `--system-red` | `text-apple-red` | `bg-apple-red` | `border-apple-red` |
| systemTeal | `--system-teal` | `text-apple-teal` | `bg-apple-teal` | `border-apple-teal` |
| systemYellow | `--system-yellow` | `text-apple-yellow` | `bg-apple-yellow` | `border-apple-yellow` |
| systemCyan | `--system-cyan` | `text-apple-cyan` | `bg-apple-cyan` | `border-apple-cyan` |
| systemMint | `--system-mint` | `text-apple-mint` | `bg-apple-mint` | `border-apple-mint` |
| systemBrown | `--system-brown` | `text-apple-brown` | `bg-apple-brown` | `border-apple-brown` |

### Gray Scale

| HIG Token | CSS Variable | Text Class | Background Class |
|-----------|-------------|------------|-----------------|
| systemGray | `--system-gray` | `text-apple-gray` | `bg-apple-gray` |
| systemGray2 | `--system-gray2` | `text-apple-gray-2` | `bg-apple-gray-2` |
| systemGray3 | `--system-gray3` | `text-apple-gray-3` | `bg-apple-gray-3` |
| systemGray4 | `--system-gray4` | `text-apple-gray-4` | `bg-apple-gray-4` |
| systemGray5 | `--system-gray5` | `text-apple-gray-5` | `bg-apple-gray-5` |
| systemGray6 | `--system-gray6` | `text-apple-gray-6` | `bg-apple-gray-6` |

### Labels (Text Hierarchy)

| HIG Token | CSS Variable | Text Class |
|-----------|-------------|------------|
| labelPrimary | `--label-primary` | `text-apple-label` or `text-apple-label-primary` |
| labelSecondary | `--label-secondary` | `text-apple-label-secondary` |
| labelTertiary | `--label-tertiary` | `text-apple-label-tertiary` |
| labelQuaternary | `--label-quaternary` | `text-apple-label-quaternary` |

### Fills (Thin Overlays)

| HIG Token | CSS Variable | Background Class |
|-----------|-------------|-----------------|
| fillPrimary | `--fill-primary` | `bg-apple-fill` or `bg-apple-fill-primary` |
| fillSecondary | `--fill-secondary` | `bg-apple-fill-secondary` |
| fillTertiary | `--fill-tertiary` | `bg-apple-fill-tertiary` |
| fillQuaternary | `--fill-quaternary` | `bg-apple-fill-quaternary` |

### Backgrounds

| HIG Token | CSS Variable | Background Class |
|-----------|-------------|-----------------|
| bgPrimary | `--bg-primary` | `bg-apple-bg-primary` |
| bgSecondary | `--bg-secondary` | `bg-apple-bg-secondary` |
| bgTertiary | `--bg-tertiary` | `bg-apple-bg-tertiary` |
| bgGroupedPrimary | `--bg-grouped-primary` | `bg-apple-bg-grouped-primary` |
| bgGroupedSecondary | `--bg-grouped-secondary` | `bg-apple-bg-grouped-secondary` |
| bgGroupedTertiary | `--bg-grouped-tertiary` | `bg-apple-bg-grouped-tertiary` |

### Separators

| HIG Token | CSS Variable | Border Class |
|-----------|-------------|--------------|
| separator | `--separator` | `border-apple-separator` |
| separatorOpaque | `--separator-opaque` | `border-apple-separator-opaque` |

## Typography

### iOS Type Scale

| Style | Tailwind Class | Size | Weight | Line-Height | Letter-Spacing |
|-------|---------------|------|--------|-------------|----------------|
| Large Title | `text-apple-large-title` | 34px | 400 | 1.21 | 0.01em |
| Title 1 | `text-apple-title1` | 28px | 400 | 1.21 | 0.01em |
| Title 2 | `text-apple-title2` | 22px | 400 | 1.27 | 0.01em |
| Title 3 | `text-apple-title3` | 20px | 400 | 1.25 | 0.01em |
| Headline | `text-apple-headline` | 17px | 600 | 1.29 | -0.02em |
| Body | `text-apple-body` | 17px | 400 | 1.29 | -0.02em |
| Callout | `text-apple-callout` | 16px | 400 | 1.31 | -0.01em |
| Subheadline | `text-apple-subhead` | 15px | 400 | 1.33 | -0.01em |
| Footnote | `text-apple-footnote` | 13px | 400 | 1.38 | 0 |
| Caption 1 | `text-apple-caption1` | 12px | 400 | 1.33 | 0 |
| Caption 2 | `text-apple-caption2` | 11px | 400 | 1.18 | 0.01em |

### Display Sizes

| Style | Tailwind Class | Size | Weight |
|-------|---------------|------|--------|
| Display SM | `text-apple-display-sm` | 40px | 700 |
| Display MD | `text-apple-display-md` | 56px | 700 |
| Display LG | `text-apple-display-lg` | 80px | 700 |
| Display XL | `text-apple-display-xl` | 96px | 700 |

### Font Families

| Family | Tailwind Class |
|--------|---------------|
| System (SF Pro) | `font-apple-system` |
| Monospace (SF Mono) | `font-apple-mono` |
| Rounded (SF Pro Rounded) | `font-apple-rounded` |
| Serif (New York) | `font-apple-serif` |

### Font Weights

| Weight | Tailwind Class |
|--------|---------------|
| Ultralight (100) | `font-apple-ultralight` |
| Thin (200) | `font-apple-thin` |
| Light (300) | `font-apple-light` |
| Regular (400) | `font-apple-regular` |
| Medium (500) | `font-apple-medium` |
| Semibold (600) | `font-apple-semibold` |
| Bold (700) | `font-apple-bold` |
| Heavy (800) | `font-apple-heavy` |
| Black (900) | `font-apple-black` |

## Spacing (8pt Grid)

| Token | Value | Padding | Margin | Gap |
|-------|-------|---------|--------|-----|
| space-0 | 0 | `p-apple-0` | `m-apple-0` | `gap-apple-0` |
| space-px | 1px | `p-apple-px` | `m-apple-px` | `gap-apple-px` |
| space-0.5 | 2px | `p-apple-0.5` | `m-apple-0.5` | `gap-apple-0.5` |
| space-1 | 4px | `p-apple-1` | `m-apple-1` | `gap-apple-1` |
| space-1.5 | 6px | `p-apple-1.5` | `m-apple-1.5` | `gap-apple-1.5` |
| space-2 | 8px | `p-apple-2` | `m-apple-2` | `gap-apple-2` |
| space-2.5 | 10px | `p-apple-2.5` | `m-apple-2.5` | `gap-apple-2.5` |
| space-3 | 12px | `p-apple-3` | `m-apple-3` | `gap-apple-3` |
| space-3.5 | 14px | `p-apple-3.5` | `m-apple-3.5` | `gap-apple-3.5` |
| space-4 | 16px | `p-apple-4` | `m-apple-4` | `gap-apple-4` |
| space-5 | 20px | `p-apple-5` | `m-apple-5` | `gap-apple-5` |
| space-6 | 24px | `p-apple-6` | `m-apple-6` | `gap-apple-6` |
| space-7 | 28px | `p-apple-7` | `m-apple-7` | `gap-apple-7` |
| space-8 | 32px | `p-apple-8` | `m-apple-8` | `gap-apple-8` |
| space-9 | 36px | `p-apple-9` | `m-apple-9` | `gap-apple-9` |
| space-10 | 40px | `p-apple-10` | `m-apple-10` | `gap-apple-10` |
| space-11 | 44px | `p-apple-11` | `m-apple-11` | `gap-apple-11` |
| space-12 | 48px | `p-apple-12` | `m-apple-12` | `gap-apple-12` |
| space-14 | 56px | `p-apple-14` | `m-apple-14` | `gap-apple-14` |
| space-16 | 64px | `p-apple-16` | `m-apple-16` | `gap-apple-16` |
| space-20 | 80px | `p-apple-20` | `m-apple-20` | `gap-apple-20` |
| space-24 | 96px | `p-apple-24` | `m-apple-24` | `gap-apple-24` |

Directional variants work the same way: `px-apple-4`, `py-apple-3`, `pt-apple-2`, `ml-apple-3`, etc.

## Border Radius

| Token | Value | Tailwind Class |
|-------|-------|---------------|
| none | 0 | `rounded-apple-none` |
| sm | 4px | `rounded-apple-sm` |
| md | 8px | `rounded-apple-md` |
| lg | 12px | `rounded-apple-lg` |
| xl | 16px | `rounded-apple-xl` |
| 2xl | 20px | `rounded-apple-2xl` |
| 3xl | 24px | `rounded-apple-3xl` |
| 4xl | 32px | `rounded-apple-4xl` |
| full | 9999px | `rounded-apple-full` |
| button | 24px | `rounded-apple-button` |
| button-lg | 30px | `rounded-apple-button-lg` |
| card | 16px | `rounded-apple-card` |
| modal | 32px | `rounded-apple-modal` |
| sheet | 32px | `rounded-apple-sheet` |
| input | 8px | `rounded-apple-input` |
| alert | 32px | `rounded-apple-alert` |
| segment | 25px | `rounded-apple-segment` |
| tab-bar | 40px | `rounded-apple-tab-bar` |
| list-section | 10px | `rounded-apple-list-section` |
| sidebar-item | 8px | `rounded-apple-sidebar-item` |

## Shadows

| Token | Tailwind Class |
|-------|---------------|
| none | `shadow-apple-none` |
| xs | `shadow-apple-xs` |
| sm | `shadow-apple-sm` |
| md | `shadow-apple-md` |
| lg | `shadow-apple-lg` |
| xl | `shadow-apple-xl` |
| 2xl | `shadow-apple-2xl` |
| focus | `shadow-apple-focus` |
| focus-error | `shadow-apple-focus-error` |
| inset | `shadow-apple-inset` |
| toggle-knob | `shadow-apple-toggle-knob` |
| slider-thumb | `shadow-apple-slider-thumb` |

## Animation

### Easing

| Token | Tailwind Class |
|-------|---------------|
| default | `ease-apple-default` |
| linear | `ease-apple-linear` |
| in | `ease-apple-in` |
| out | `ease-apple-out` |
| in-out | `ease-apple-in-out` |
| spring | `ease-apple-spring` |
| bounce | `ease-apple-bounce` |
| smooth | `ease-apple-smooth` |

### Duration

| Token | Value | Tailwind Class |
|-------|-------|---------------|
| instant | 50ms | `duration-apple-instant` |
| faster | 100ms | `duration-apple-faster` |
| fast | 150ms | `duration-apple-fast` |
| normal | 200ms | `duration-apple-normal` |
| slow | 300ms | `duration-apple-slow` |
| slower | 400ms | `duration-apple-slower` |
| slowest | 500ms | `duration-apple-slowest` |

### Pre-built Animations

| Animation | Tailwind Class |
|-----------|---------------|
| Fade In | `animate-apple-fade-in` |
| Fade Out | `animate-apple-fade-out` |
| Slide Up | `animate-apple-slide-up` |
| Slide Down | `animate-apple-slide-down` |
| Scale In | `animate-apple-scale-in` |
| Scale Out | `animate-apple-scale-out` |
| Spin | `animate-apple-spin` |
| Pulse | `animate-apple-pulse` |
| Shimmer | `animate-apple-shimmer` |

## Layout

### Breakpoints

| Size Class | Width | Tailwind Prefix |
|-----------|-------|----------------|
| Compact | 430px | `apple-compact:` |
| Regular | 744px | `apple-regular:` |
| Large | 1024px | `apple-large:` |
| XL | 1280px | `apple-xl:` |

### Z-Index

| Layer | Value | Tailwind Class |
|-------|-------|---------------|
| Base | 0 | `z-apple-base` |
| Dropdown | 100 | `z-apple-dropdown` |
| Sticky | 200 | `z-apple-sticky` |
| Fixed | 300 | `z-apple-fixed` |
| Modal Backdrop | 400 | `z-apple-modal-backdrop` |
| Modal | 500 | `z-apple-modal` |
| Popover | 600 | `z-apple-popover` |
| Tooltip | 700 | `z-apple-tooltip` |
| Toast | 800 | `z-apple-toast` |
| Max | 9999 | `z-apple-max` |

### Max Width

| Token | Value | Tailwind Class |
|-------|-------|---------------|
| Reading | 672px | `max-w-apple-reading` |
| Form | 440px | `max-w-apple-form` |
| App | 980px | `max-w-apple-app` |
| Container | 1200px | `max-w-apple-container` |
| Max | 1440px | `max-w-apple-max` |

### Touch Targets

| Target | Value | Min-Height | Min-Width |
|--------|-------|-----------|-----------|
| iOS minimum | 44px | `min-h-apple-touch` | `min-w-apple-touch` |
| Comfortable | 48px | `min-h-apple-touch-comfortable` | `min-w-apple-touch-comfortable` |
| Spacious | 56px | `min-h-apple-touch-spacious` | `min-w-apple-touch-spacious` |
| visionOS | 60px | `min-h-apple-touch-vision` | `min-w-apple-touch-vision` |
| macOS | 24px | `min-h-apple-touch-macos` | `min-w-apple-touch-macos` |

### Backdrop Blur

| Token | Value | Tailwind Class |
|-------|-------|---------------|
| none | 0 | `backdrop-blur-apple-none` |
| sm | 4px | `backdrop-blur-apple-sm` |
| md | 8px | `backdrop-blur-apple-md` |
| lg | 16px | `backdrop-blur-apple-lg` |
| xl | 24px | `backdrop-blur-apple-xl` |
| 2xl | 40px | `backdrop-blur-apple-2xl` |
| 3xl | 64px | `backdrop-blur-apple-3xl` |

---

## Common Patterns

Recipes for frequently used Apple HIG patterns using Tailwind classes.

### Glass Effect (Navigation Bar)

```html
<nav class="sticky top-0 z-apple-sticky bg-white/[0.72] backdrop-blur-[20px] backdrop-saturate-[180%] dark:bg-[rgba(29,29,31,0.72)]">
  <div class="flex items-center justify-between h-[44px] px-apple-4">
    <button class="text-apple-blue text-apple-body">Back</button>
    <h1 class="text-apple-headline font-apple-semibold text-apple-label">Title</h1>
    <button class="text-apple-blue text-apple-body">Done</button>
  </div>
</nav>
```

### Apple Button (Filled / Secondary / Destructive)

```html
<!-- Filled (Primary) — iOS 26: scale UP on press -->
<button class="inline-flex items-center justify-center gap-apple-2 min-h-apple-touch px-apple-6 py-apple-3 bg-apple-blue text-white font-apple-semibold text-apple-body rounded-apple-button border-none cursor-pointer transition-transform duration-[140ms] ease-out hover:opacity-[0.72] active:scale-[1.25] disabled:opacity-50 disabled:cursor-not-allowed">
  Get Started
</button>

<!-- Secondary (Tinted) -->
<button class="inline-flex items-center justify-center gap-apple-2 min-h-apple-touch px-apple-6 py-apple-3 bg-apple-blue/10 text-apple-blue font-apple-semibold text-apple-body rounded-apple-button border-none cursor-pointer transition-transform duration-[140ms] ease-out hover:opacity-[0.72] active:scale-[1.25]">
  Learn More
</button>

<!-- Destructive -->
<button class="inline-flex items-center justify-center gap-apple-2 min-h-apple-touch px-apple-6 py-apple-3 bg-apple-red text-white font-apple-semibold text-apple-body rounded-apple-button border-none cursor-pointer transition-transform duration-[140ms] ease-out hover:opacity-[0.72] active:scale-[1.25]">
  Delete
</button>
```

### Grouped List Section

```html
<div class="bg-apple-bg-grouped-primary min-h-screen">
  <div class="px-apple-4 py-apple-2">
    <h2 class="text-apple-footnote font-apple-regular text-apple-label-secondary uppercase px-apple-4">
      General
    </h2>
  </div>
  <ul class="bg-apple-bg-grouped-secondary rounded-apple-list-section mx-apple-4 overflow-hidden">
    <li class="flex items-center min-h-apple-touch px-apple-4 border-b border-apple-separator">
      <span class="flex-1 text-apple-body text-apple-label">Notifications</span>
      <!-- Toggle goes here -->
    </li>
    <li class="flex items-center min-h-apple-touch px-apple-4">
      <span class="flex-1 text-apple-body text-apple-label">Sound</span>
      <span class="text-apple-body text-apple-label-secondary">Default</span>
      <span class="text-apple-label-tertiary ml-apple-2">&rsaquo;</span>
    </li>
  </ul>
</div>
```

### Modal / Alert Overlay

```html
<!-- Backdrop -->
<div class="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[4px] z-apple-modal-backdrop animate-apple-fade-in">
  <!-- Alert dialog -->
  <div class="bg-apple-bg-tertiary rounded-apple-alert p-apple-6 w-[270px] text-center shadow-apple-xl animate-apple-scale-in">
    <h2 class="text-apple-headline text-apple-label mb-apple-2">Delete Item?</h2>
    <p class="text-apple-footnote text-apple-label-secondary mb-apple-6">
      This action cannot be undone.
    </p>
    <div class="flex gap-apple-3">
      <button class="flex-1 min-h-apple-touch bg-apple-fill-secondary text-apple-blue font-apple-semibold rounded-apple-button">
        Cancel
      </button>
      <button class="flex-1 min-h-apple-touch bg-apple-red text-white font-apple-semibold rounded-apple-button">
        Delete
      </button>
    </div>
  </div>
</div>
```

### Tab Bar

```html
<nav class="fixed bottom-0 inset-x-0 bg-white/[0.85] backdrop-blur-[20px] backdrop-saturate-[180%] dark:bg-[rgba(29,29,31,0.85)] border-t border-apple-separator z-apple-fixed pb-[env(safe-area-inset-bottom)]">
  <div class="flex justify-around h-[49px]">
    <!-- Active tab -->
    <button class="flex flex-col items-center justify-center gap-apple-0.5 min-w-apple-touch text-apple-blue">
      <span class="text-[24px]"><!-- icon --></span>
      <span class="text-apple-caption2">Home</span>
    </button>
    <!-- Inactive tab -->
    <button class="flex flex-col items-center justify-center gap-apple-0.5 min-w-apple-touch text-apple-label-secondary">
      <span class="text-[24px]"><!-- icon --></span>
      <span class="text-apple-caption2">Search</span>
    </button>
  </div>
</nav>
```

---

## Known Limitations

1. **Opacity modifiers don't work with CSS variables** -- `bg-apple-blue/50` will not produce a semi-transparent blue in Tailwind v3. Use `bg-apple-blue opacity-50` or a custom rgba value instead.
2. **Dark mode shadows** -- Shadows are handled via CSS variable fallback from `design-tokens.css`, not separate `dark:shadow-*` classes.
3. **Slider gradient fill** -- The filled portion of a slider track requires an inline `style` prop with `linear-gradient()`.
4. **High contrast** -- Handled automatically by `design-tokens.css` `@media (prefers-contrast: high)`. No extra Tailwind classes needed.
5. **`backdrop-saturate`** -- Not included as a named token; use Tailwind's built-in `backdrop-saturate-[180%]`.
