/**
 * Apple HIG Tailwind CSS Configuration
 * Version 3.0 -- Maps all design tokens from design-tokens.css
 *
 * Requires: design-tokens.css loaded in your HTML/app (provides CSS custom properties)
 * Requires: Tailwind CSS v3.x
 *
 * Usage:
 *   // tailwind.config.js
 *   const appleHIG = require('./path-to/tailwind.config.js');
 *   module.exports = { ...appleHIG };
 *
 *   // Or merge with your existing config:
 *   const { theme: appleTheme } = require('./path-to/tailwind.config.js');
 *   module.exports = {
 *     theme: { extend: { ...appleTheme.extend } },
 *   };
 *
 * All custom classes use the `apple-` prefix to avoid conflicts.
 * Colors reference CSS variables, so dark mode works automatically via
 * prefers-color-scheme in design-tokens.css.
 *
 * Known limitation: Tailwind v3 opacity modifiers (e.g. bg-apple-blue/50)
 * do NOT work with CSS var() values. Use opacity utilities instead.
 */

/** @type {import('tailwindcss').Config} */
module.exports = {
  // Uses prefers-color-scheme via CSS variables from design-tokens.css.
  // Switch to 'class' if you need manual dark mode toggling:
  //   darkMode: 'class',
  darkMode: 'media',

  theme: {
    extend: {
      // ====================================================================
      // COLORS
      // All colors reference CSS custom properties from design-tokens.css.
      // Dark mode, high contrast, etc. are handled automatically.
      // ====================================================================
      colors: {
        apple: {
          // Primary System Colors (12)
          blue: 'var(--system-blue)',
          green: 'var(--system-green)',
          indigo: 'var(--system-indigo)',
          orange: 'var(--system-orange)',
          pink: 'var(--system-pink)',
          purple: 'var(--system-purple)',
          red: 'var(--system-red)',
          teal: 'var(--system-teal)',
          yellow: 'var(--system-yellow)',
          cyan: 'var(--system-cyan)',
          mint: 'var(--system-mint)',
          brown: 'var(--system-brown)',

          // Gray Scale (6 levels)
          gray: {
            DEFAULT: 'var(--system-gray)',
            2: 'var(--system-gray2)',
            3: 'var(--system-gray3)',
            4: 'var(--system-gray4)',
            5: 'var(--system-gray5)',
            6: 'var(--system-gray6)',
          },

          // Label Colors (text hierarchy)
          label: {
            DEFAULT: 'var(--label-primary)',
            primary: 'var(--label-primary)',
            secondary: 'var(--label-secondary)',
            tertiary: 'var(--label-tertiary)',
            quaternary: 'var(--label-quaternary)',
          },

          // Fill Colors (thin overlays)
          fill: {
            DEFAULT: 'var(--fill-primary)',
            primary: 'var(--fill-primary)',
            secondary: 'var(--fill-secondary)',
            tertiary: 'var(--fill-tertiary)',
            quaternary: 'var(--fill-quaternary)',
          },

          // Background Colors -- Standard
          bg: {
            primary: 'var(--bg-primary)',
            secondary: 'var(--bg-secondary)',
            tertiary: 'var(--bg-tertiary)',
          },

          // Background Colors -- Grouped (Settings-style)
          'bg-grouped': {
            primary: 'var(--bg-grouped-primary)',
            secondary: 'var(--bg-grouped-secondary)',
            tertiary: 'var(--bg-grouped-tertiary)',
          },

          // Separator Colors
          separator: {
            DEFAULT: 'var(--separator)',
            opaque: 'var(--separator-opaque)',
          },
        },
      },

      // ====================================================================
      // TYPOGRAPHY
      // ====================================================================
      fontFamily: {
        'apple-system': [
          '-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'SF Pro Text',
          'Helvetica Neue', 'Arial', 'sans-serif',
        ],
        'apple-mono': [
          'SF Mono', 'SFMono-Regular', 'ui-monospace', 'Menlo', 'Monaco',
          'Cascadia Code', 'Consolas', 'monospace',
        ],
        'apple-rounded': [
          '-apple-system-rounded', 'SF Pro Rounded', 'Helvetica Neue Rounded',
          '-apple-system', 'BlinkMacSystemFont', 'sans-serif',
        ],
        'apple-serif': [
          'New York', 'Iowan Old Style', 'Georgia', 'Times New Roman', 'serif',
        ],
      },

      // fontSize: [size, { lineHeight, letterSpacing, fontWeight }]
      fontSize: {
        // iOS Type Scale
        'apple-large-title': ['34px', { lineHeight: '1.21', letterSpacing: '0.01em', fontWeight: '400' }],
        'apple-title1': ['28px', { lineHeight: '1.21', letterSpacing: '0.01em', fontWeight: '400' }],
        'apple-title2': ['22px', { lineHeight: '1.27', letterSpacing: '0.01em', fontWeight: '400' }],
        'apple-title3': ['20px', { lineHeight: '1.25', letterSpacing: '0.01em', fontWeight: '400' }],
        'apple-headline': ['17px', { lineHeight: '1.29', letterSpacing: '-0.02em', fontWeight: '600' }],
        'apple-body': ['17px', { lineHeight: '1.29', letterSpacing: '-0.02em', fontWeight: '400' }],
        'apple-callout': ['16px', { lineHeight: '1.31', letterSpacing: '-0.01em', fontWeight: '400' }],
        'apple-subhead': ['15px', { lineHeight: '1.33', letterSpacing: '-0.01em', fontWeight: '400' }],
        'apple-footnote': ['13px', { lineHeight: '1.38', letterSpacing: '0', fontWeight: '400' }],
        'apple-caption1': ['12px', { lineHeight: '1.33', letterSpacing: '0', fontWeight: '400' }],
        'apple-caption2': ['11px', { lineHeight: '1.18', letterSpacing: '0.01em', fontWeight: '400' }],

        // Display Sizes (hero/marketing)
        'apple-display-sm': ['40px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'apple-display-md': ['56px', { lineHeight: '1.05', letterSpacing: '-0.025em', fontWeight: '700' }],
        'apple-display-lg': ['80px', { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '700' }],
        'apple-display-xl': ['96px', { lineHeight: '1.0', letterSpacing: '-0.03em', fontWeight: '700' }],
      },

      fontWeight: {
        'apple-ultralight': '100',
        'apple-thin': '200',
        'apple-light': '300',
        'apple-regular': '400',
        'apple-medium': '500',
        'apple-semibold': '600',
        'apple-bold': '700',
        'apple-heavy': '800',
        'apple-black': '900',
      },

      // ====================================================================
      // SPACING -- 8pt Grid
      // ====================================================================
      spacing: {
        'apple-0': '0',
        'apple-px': '1px',
        'apple-0.5': '2px',
        'apple-1': '4px',
        'apple-1.5': '6px',
        'apple-2': '8px',
        'apple-2.5': '10px',
        'apple-3': '12px',
        'apple-3.5': '14px',
        'apple-4': '16px',
        'apple-5': '20px',
        'apple-6': '24px',
        'apple-7': '28px',
        'apple-8': '32px',
        'apple-9': '36px',
        'apple-10': '40px',
        'apple-11': '44px',
        'apple-12': '48px',
        'apple-14': '56px',
        'apple-16': '64px',
        'apple-20': '80px',
        'apple-24': '96px',
      },

      // ====================================================================
      // BORDER RADIUS
      // ====================================================================
      borderRadius: {
        // Base scale
        'apple-none': '0',
        'apple-sm': '4px',
        'apple-md': '8px',
        'apple-lg': '12px',
        'apple-xl': '16px',
        'apple-2xl': '20px',
        'apple-3xl': '24px',
        'apple-4xl': '32px',
        'apple-full': '9999px',

        // Semantic
        'apple-button': '24px',
        'apple-button-lg': '30px',
        'apple-card': '16px',
        'apple-modal': '32px',
        'apple-sheet': '32px',
        'apple-input': '8px',
        'apple-alert': '32px',
        'apple-segment': '25px',
        'apple-tab-bar': '40px',
        'apple-list-section': '10px',
        'apple-sidebar-item': '8px',
      },

      // ====================================================================
      // SHADOWS & ELEVATION
      // Dark mode shadows are handled via CSS variables in design-tokens.css.
      // ====================================================================
      boxShadow: {
        // Elevation scale
        'apple-none': 'none',
        'apple-xs': 'var(--shadow-xs)',
        'apple-sm': 'var(--shadow-sm)',
        'apple-md': 'var(--shadow-md)',
        'apple-lg': 'var(--shadow-lg)',
        'apple-xl': 'var(--shadow-xl)',
        'apple-2xl': 'var(--shadow-2xl)',

        // Semantic
        'apple-focus': 'var(--shadow-focus)',
        'apple-focus-error': 'var(--shadow-focus-error)',
        'apple-inset': 'var(--shadow-inset)',
        'apple-toggle-knob': 'var(--shadow-toggle-knob)',
        'apple-slider-thumb': 'var(--shadow-slider-thumb)',
      },

      // ====================================================================
      // ANIMATION
      // ====================================================================
      transitionTimingFunction: {
        'apple-default': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
        'apple-linear': 'linear',
        'apple-in': 'cubic-bezier(0.42, 0, 1, 1)',
        'apple-out': 'cubic-bezier(0, 0, 0.58, 1)',
        'apple-in-out': 'cubic-bezier(0.42, 0, 0.58, 1)',
        'apple-spring': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        'apple-bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'apple-smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },

      transitionDuration: {
        'apple-instant': '50ms',
        'apple-faster': '100ms',
        'apple-fast': '150ms',
        'apple-normal': '200ms',
        'apple-slow': '300ms',
        'apple-slower': '400ms',
        'apple-slowest': '500ms',
      },

      keyframes: {
        'apple-fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'apple-fade-out': {
          from: { opacity: '1' },
          to: { opacity: '0' },
        },
        'apple-slide-up': {
          from: { transform: 'translateY(100%)' },
          to: { transform: 'translateY(0)' },
        },
        'apple-slide-down': {
          from: { transform: 'translateY(-100%)' },
          to: { transform: 'translateY(0)' },
        },
        'apple-scale-in': {
          from: { opacity: '0', transform: 'scale(0.95)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        'apple-scale-out': {
          from: { opacity: '1', transform: 'scale(1)' },
          to: { opacity: '0', transform: 'scale(0.95)' },
        },
        'apple-spin': {
          to: { transform: 'rotate(360deg)' },
        },
        'apple-pulse': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        'apple-shimmer': {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
      },

      animation: {
        'apple-fade-in': 'apple-fade-in 200ms cubic-bezier(0, 0, 0.58, 1)',
        'apple-fade-out': 'apple-fade-out 200ms cubic-bezier(0, 0, 0.58, 1)',
        'apple-slide-up': 'apple-slide-up 300ms cubic-bezier(0, 0, 0.58, 1)',
        'apple-slide-down': 'apple-slide-down 300ms cubic-bezier(0, 0, 0.58, 1)',
        'apple-scale-in': 'apple-scale-in 200ms cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        'apple-scale-out': 'apple-scale-out 200ms cubic-bezier(0, 0, 0.58, 1)',
        'apple-spin': 'apple-spin 0.8s linear infinite',
        'apple-pulse': 'apple-pulse 2s ease-in-out infinite',
        'apple-shimmer': 'apple-shimmer 1.5s infinite',
      },

      // ====================================================================
      // BREAKPOINTS
      // Matches Apple size classes: compact, regular, large, XL
      // ====================================================================
      screens: {
        'apple-compact': '430px',
        'apple-regular': '744px',
        'apple-large': '1024px',
        'apple-xl': '1280px',
      },

      // ====================================================================
      // Z-INDEX
      // ====================================================================
      zIndex: {
        'apple-base': '0',
        'apple-dropdown': '100',
        'apple-sticky': '200',
        'apple-fixed': '300',
        'apple-modal-backdrop': '400',
        'apple-modal': '500',
        'apple-popover': '600',
        'apple-tooltip': '700',
        'apple-toast': '800',
        'apple-max': '9999',
      },

      // ====================================================================
      // MAX-WIDTHS
      // ====================================================================
      maxWidth: {
        'apple-reading': '672px',
        'apple-form': '440px',
        'apple-app': '980px',
        'apple-container': '1200px',
        'apple-max': '1440px',
      },

      // ====================================================================
      // MIN-HEIGHT / MIN-WIDTH -- Touch Targets
      // ====================================================================
      minHeight: {
        'apple-touch': '44px',
        'apple-touch-comfortable': '48px',
        'apple-touch-spacious': '56px',
        'apple-touch-vision': '60px',
        'apple-touch-macos': '24px',
      },

      minWidth: {
        'apple-touch': '44px',
        'apple-touch-comfortable': '48px',
        'apple-touch-spacious': '56px',
        'apple-touch-vision': '60px',
        'apple-touch-macos': '24px',
      },

      // ====================================================================
      // BACKDROP BLUR
      // ====================================================================
      backdropBlur: {
        'apple-none': '0',
        'apple-sm': '4px',
        'apple-md': '8px',
        'apple-lg': '16px',
        'apple-xl': '24px',
        'apple-2xl': '40px',
        'apple-3xl': '64px',
      },
    },
  },

  plugins: [],
};
