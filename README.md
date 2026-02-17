<h1 align="center">Apple-Hig-Designer</h1>

<div align="center">

![Apple HIG](https://img.shields.io/badge/Apple-HIG-000000?style=for-the-badge&logo=apple&logoColor=white)
![Claude Code](https://img.shields.io/badge/Claude-Code_Skill-5A67D8?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**Apple-Hig-Designer is used to create interfaces that conform to Apple Hig principles and blend with various styles.**

[English](README.md) | [简体中文](README_CN.md)

</div>

---

## 📸 Basic effect demonstration:



<div align="center">

Single page design


"Creating iOS Page Transition Animations"

<!-- Page Transitions -->
![Page Transitions](screenshots/page-transitions.gif) 

"Design a Mac-style chat page for web use."
<!-- macOS Chat Page -->
![macOS Chat](screenshots/macos-chat.png) 



</div>


<div align="center">
 📸Style fusion design: 
 
"Please use your apple-hig-designer skills to choose a suitable framework and develop a complete responsive front-end project that incorporates a luxury brand aesthetic."

Vercle: https://fashion-editorial.vercel.app/
<img width="2075" height="1206" alt="image" src="https://github.com/user-attachments/assets/605fa6b0-51a9-440d-b0b0-a3578988ecf3" />

</div>




## 🎯 Overview

This apple-hig-designer enables you to design professional web and mobile interfaces that follow Apple's Human Interface Guidelines. All specifications are verified against Apple HIG, iOS UIKit, and WWDC 2023-2025 sessions. It provides comprehensive knowledge about:

- **SF Pro Typography** system with verified leading/tracking values
- **Apple System Colors** -- all 12 colors with light/dark/high-contrast variants
- **8pt Grid Spacing System** with platform-specific margins
- **18+ Component Patterns** with exact dimensions (buttons, cards, lists, tabs, sheets, alerts, search, toggle, segmented control, slider, sidebar, popover, and more)
- **Spring Animations** with CSS linear() approximation (WWDC 2023+)
- **Liquid Glass** (iOS 26 / WWDC 2025) web approximation utilities
- **Platform Adaptations** for iOS, macOS, iPadOS, and visionOS

## 📦 Installation

### Method 1: User-level Installation (Recommended)

Copy the skill to your Claude Code skills directory:

```bash
# Windows
xcopy /E /I "apple-hig-designer" "%USERPROFILE%\.claude\skills\apple-hig-designer"

# macOS / Linux
cp -r apple-hig-designer ~/.claude/skills/
```

### Method 2: Project-level Installation

Copy to your project's `.claude/skills` directory:

```bash
mkdir -p .claude/skills
cp -r apple-hig-designer .claude/skills/
```

## 🚀 Usage

After installation, Claude Code will automatically activate this skill when you perform the following actions:

Basic usage: Please tell Claude Code that you want to use apple-hig-designer.

Example
- "Design an Apple-style..."
- "Create a HIG-compliant..."
- "iOS-style components"

Advanced usage: Integrate apple-hig-desiner with other styles, using apple-hig-desiner as the basic design framework.


Example

"Using your apple-hig-desiner skills and a cyberpunk aesthetic, could you help me develop a robot showcase page?"

"Using apple-hig-desiner skills to blend other styles, how would you recommend a style for developing a blog-themed website?"

## 📁 File Structure

```
apple-hig-designer/
├── SKILL.md                         # Main skill definition (~1900 words, v3.0)
├── references/
│   ├── design-tokens.css            # Complete CSS custom properties with full type
│   │                                  scale, all colors, spring animation, Liquid Glass
│   ├── design-patterns.md           # 18+ component patterns with full HTML/CSS,
│   │                                  page layouts, platform adaptations
│   ├── tailwind.config.js           # Tailwind v3 config mapping all design tokens
│   │                                  with apple- prefix (colors, type, spacing, etc.)
│   └── tailwind-mapping.md          # Quick-reference: HIG token → CSS var → Tailwind
│                                      class, plus common pattern recipes
├── examples/
│   ├── components.jsx               # 16 production-ready React components (inline styles)
│   ├── components-tailwind.jsx      # 16 React components rewritten with Tailwind classes
│   └── ui-patterns.md               # 7 complete page examples (login, dashboard,
│                                      settings, products, search, pricing, chat)
├── screenshots/                     # Demo screenshots
├── README.md                        # English documentation
├── README_CN.md                     # Chinese documentation
└── LICENSE                          # MIT License
```





## 🎨 Features

| Feature | Description |
|---------|-------------|
| **Typography** | Full iOS type scale with verified leading/tracking values |
| **Colors** | All 12 system colors + grays, fills, labels, backgrounds with dark & high-contrast variants |
| **Spacing** | 8pt grid system with platform-specific margins and touch targets |
| **Components** | 18+ components: buttons, cards, lists, tabs, sheets, alerts, search, toggle, segmented control, slider, sidebar, popover, progress, badges |
| **Animations** | Spring physics via linear() (WWDC 2023+), Apple easing curves, duration scale |
| **Liquid Glass** | iOS 26 / WWDC 2025 translucent material utilities for web |
| **Accessibility** | WCAG AA, prefers-reduced-motion, prefers-contrast: high, semantic HTML |
| **Dark Mode** | Full light/dark mode with automatic switching |
| **Platform** | iOS, macOS, iPadOS, and visionOS adaptations |

## 📚 Resources

- [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines)
- [Apple Design Resources](https://developer.apple.com/design/resources/)
- [SF Symbols](https://developer.apple.com/sf-symbols/)

## 🤝 Contributing

Contributions are welcome! Feel free to submit Issues and Pull Requests.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">


</div>
