<h1 align="center">Apple HIG 设计器</h1>

<div align="center">

![Apple HIG](https://img.shields.io/badge/Apple-HIG-000000?style=for-the-badge&logo=apple&logoColor=white)
![Claude Code](https://img.shields.io/badge/Claude-Code_Skill-5A67D8?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

 Apple-Hig-Designer，用于创建符合 Apple HIG以底层原则与各种风格融合的界面

[English](README.md) | [简体中文](README_CN.md)

</div>

---

## 📸 基础效果展示：


<div align="center">

单页面设计
“创建 iOS 页面转场动画”

<!-- Page Transitions -->
![Page Transitions](screenshots/page-transitions.gif) 

"设计一个Web端的Mac风格的聊天页面"

<!-- macOS Chat Page -->
![macOS Chat](screenshots/macos-chat.png) 

</div>

<div align="center">
📸风格融合设计：
“请运用您高超的苹果设计师技能，选择一个合适的框架，并开发一个完整的响应式前端项目，融入奢侈品牌的美学理念。”

Vercle：https://fashion-editorial.vercel.app/
<img width="2075" height="1206" alt="image" src="https://github.com/user-attachments/assets/605fa6b0-51a9-440d-b0b0-a3578988ecf3" />

</div>

## 🎯 概述

这是一个 Claude Code Skill，用于创建符合 Apple 人机界面指南的专业界面设计。所有规范均经过 Apple HIG、iOS UIKit 和 WWDC 2023-2025 验证。包含以下知识：

- **SF Pro 字体系统** -- 完整的 iOS 字体比例，包含行高和字间距
- **Apple 系统色彩** -- 全部 12 种颜色，支持亮色/暗色/高对比度模式
- **8pt 网格间距系统** -- 平台特定的边距和触摸目标
- **18+ 组件模式** -- 按钮、卡片、列表、标签栏、底部弹窗、提示框、搜索栏、开关、分段控制、滑块、侧边栏、弹出框等
- **弹簧动画** -- 通过 CSS linear() 近似实现（WWDC 2023+）
- **Liquid Glass** -- iOS 26 / WWDC 2025 半透明材质效果的 Web 近似实现
- **平台适配** -- iOS、macOS、iPadOS 和 visionOS

## 📦 安装方法

### 方法一：用户级安装（推荐）

将 Skill 复制到 Claude Code 技能目录：

```bash
# Windows
xcopy /E /I "apple-hig-designer" "%USERPROFILE%\.claude\skills\apple-hig-designer"

# macOS / Linux
cp -r apple-hig-designer ~/.claude/skills/
```

### 方法二：项目级安装

复制到项目的 `.claude/skills` 目录：

```bash
mkdir -p .claude/skills
cp -r apple-hig-designer .claude/skills/
```

## 🚀 使用方法

安装后，当您进行以下操作时，Claude Code 会自动激活此 Skill：

初级用法:请告诉claude code，你要使用apple-hig-designer
示例
- "设计一个苹果风格的..."
- "创建一个符合 HIG 的..."
- "iOS 风格的组件"

进阶用法:使用apple-hig-desiner与其他风格进行融合，以app-hig-desiner设计为基础框架

示例
-“使用apple-hig-desiner技能融合赛博朋克风格，帮我开发一个机器人展示页面？"

-”使用apple-hig-desiner技能融合其他风格，开发一个博客主题的网站，你有什么推荐的风格吗？"
 
## 📁 文件结构

```
apple-hig-designer/
├── SKILL.md                         # 主技能定义文件（约1900词，v3.0）
├── references/
│   ├── design-tokens.css            # 完整 CSS 自定义属性：字体比例、所有颜色、
│   │                                  弹簧动画、Liquid Glass
│   ├── design-patterns.md           # 18+ 组件模式，包含完整 HTML/CSS、
│   │                                  页面布局、平台适配
│   ├── tailwind.config.js           # Tailwind v3 配置，映射所有设计令牌，
│   │                                  使用 apple- 前缀（颜色、字体、间距等）
│   └── tailwind-mapping.md          # 快速参考：HIG 令牌 → CSS 变量 → Tailwind
│                                      类名，以及常用模式配方
├── examples/
│   ├── components.jsx               # 16 个生产级 React 组件（内联样式）
│   ├── components-tailwind.jsx      # 16 个 React 组件（Tailwind 类名版本）
│   └── ui-patterns.md               # 7 个完整页面示例（登录、仪表盘、
│                                      设置、产品、搜索、定价、聊天）
├── screenshots/                     # 演示截图
├── README.md                        # 英文文档
├── README_CN.md                     # 中文文档
└── LICENSE                          # MIT 许可证
```



## 🎨 功能特性

| 功能 | 描述 |
|------|------|
| **字体排版** | 完整 iOS 字体比例，包含验证过的行高和字间距 |
| **色彩系统** | 全部 12 种系统色 + 灰度、填充、标签、背景色，支持深色和高对比度模式 |
| **间距系统** | 8pt 网格系统，平台特定边距和触摸目标 |
| **组件库** | 18+ 组件：按钮、卡片、列表、标签栏、弹窗、提示框、搜索、开关、分段控制、滑块、侧边栏、弹出框、进度条、徽章 |
| **动画效果** | 弹簧物理通过 linear()（WWDC 2023+），Apple 缓动曲线，时间刻度 |
| **Liquid Glass** | iOS 26 / WWDC 2025 半透明材质 Web 工具类 |
| **无障碍** | WCAG AA、prefers-reduced-motion、prefers-contrast: high、语义化 HTML |
| **深色模式** | 完整亮色/暗色自动切换 |
| **平台适配** | iOS、macOS、iPadOS 和 visionOS 适配 |

## 📚 参考资源

- [Apple 人机界面指南](https://developer.apple.com/design/human-interface-guidelines)
- [Apple 设计资源](https://developer.apple.com/design/resources/)
- [SF Symbols](https://developer.apple.com/sf-symbols/)

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

本项目采用 MIT 许可证 - 详见 [LICENSE](LICENSE) 文件。

---

<div align="center">

用 ❤️ 为 Claude Code 社区制作

</div>
