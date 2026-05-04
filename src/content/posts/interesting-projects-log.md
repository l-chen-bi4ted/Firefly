---
title: 有趣项目收集日志
published: 2026-04-15
updated: 2026-05-04
description: 持续更新的 GitHub 项目与技术资料收集日志
image: ./images/cover.avif
tags: [GitHub, 开源项目, 工具, iOS, AI]
category: 项目收集
draft: false
pinned: false
---

# 有趣项目收集日志

> 本页面持续更新，记录发现的有趣 GitHub 项目与技术资料。

---

## 2026-05-04 23:16

**GenericAgent**  
🔗 https://github.com/lsdefine/GenericAgent

Self-evolving agent，从 3.3K 行种子代码自我进化技能树，实现完整系统控制能力，Token 消耗降低 6 倍。分层记忆架构、最小原子工具集（9 工具覆盖完整能力环）、上下文截断压缩。支持浏览器操控、视觉能力、微信/飞书/钉钉接入、子代理与定时任务。

📖 教程：https://datawhalechina.github.io/hello-generic-agent/


**WhatCable**  
🔗 https://github.com/darrylmorley/whatcable

macOS 14+ 菜单栏应用，基于 IOKit 读取 USB-C 端口 PD 与 e-marker 信息，直接展示线材速率、功率上限和厂商。内置充电诊断，可关联线材额定功率、充电器 PDO 列表与 Mac 协商结果定位慢充瓶颈。同时提供菜单栏界面和 `whatcable` CLI，支持 JSON、watch 与原始 IOKit 输出。

---

## 2026-04-30 10:41

**CodexBar**  
🔗 https://github.com/steipete/CodexBar

macOS 14+ 菜单栏应用，聚合显示 Codex、Claude、Cursor、Gemini 等 18+ AI 服务商的会话额度、周额度与重置倒计时。支持本地读取日志/Cookie 追踪近 30 天成本，自带 CLI 和 Widget。MIT 许可。

---

## 2026-04-29 16:48

**Mem0**  
🔗 https://github.com/mem0ai/mem0

跨 LLM 框架的通用记忆层，向量存储 + 知识图谱双层架构。记忆基准 LoCoMo 91.6、LongMemEval 93.4。开箱即用，免费套餐够用。支持与 Hermes Agent 集成。

📖 配置教程：https://zhuanlan.zhihu.com/p/2031865910697408162

---

## 2026-04-28 22:20

**Hermes Agent**  
🔗 https://github.com/NousResearch/hermes-agent

Nous Research 打造的自改进 AI Agent，内置学习循环：从经验中创建技能、跨会话记忆。支持 Telegram/Discord/Slack/WhatsApp/CLI 等多平台，任意 LLM 模型切换。中文社区：https://hermesagent.org.cn

**Hermes Web UI**  
🔗 https://github.com/EKKOLearnAI/hermes-web-ui

Hermes Agent 的第三方全功能 Web 仪表板。AI 对话、8 平台频道配置、用量分析、模型管理、定时任务、Web 终端。npm install -g hermes-web-ui 一键启动。
**枕心：**可以挺方便得管理多个 Profile 搭建多 Agent 在同一会话中工作的环境。

---

## 2026-04-27 08:00

**HomeDir**  
🔗 https://github.com/52Lxcloud/HomeDir

轻量快速的个人服务导航页，专为管理内外网服务地址设计。支持分类管理、Cmd+K 全局搜索、自动切换内外网地址。SQLite 单文件存储，Docker 一键部署。适合家庭实验室、NAS、自托管服务统一入口。

**TradingAgents**  
🔗 https://github.com/TauricResearch/TradingAgents

**UZI-Skill**  
🔗 https://github.com/wbh604/UZI-Skill

项目仅作学习研究使用。不代表任何真实投资者的实际观点，不构成投资建议，投资有风险，决策需谨慎。

---

## 2026-04-24 01:00

**Kami**  
🔗 https://github.com/tw93/kami

AI 原生文档设计系统，面向 AI 生成内容的排版场景。支持一页纸报告、简历、作品集、白皮书、长文档、Slides。中英文双语排版，内置图表绘制能力。可作为 Claude Code / ChatGPT / Cursor 的文档输出 Skill。风格简洁克制，避免 AI Design 味道。

**Mole**  
🔗 https://github.com/tw93/mole

macOS 深度清理工具，命令行优先。深度清理缓存、日志、浏览器残留、App 遗留数据。支持卸载 App 并清理 LaunchAgents、偏好设置等隐藏残留。覆盖 Xcode、模拟器、Claude Code、Cursor 等开发缓存。常用命令：mo clean / mo analyze / mo uninstall / mo status。

---

## 2026-04-22 12:53

**Math Curve Loaders**  
🔗 https://github.com/Paidax01/math-curve-loaders

基于数学曲线生成的加载动画集，非手写关键帧。玫瑰曲线、利萨如曲线、次摆线、心形线等多种曲线类型，附带公式注释和可复制代码。纯前端轻量实现。

---

## 2026-04-19 20:10

**SearXNG**  
🔗 https://docs.searxng.org

隐私友好的元搜索引擎，聚合 70+ 搜索引擎结果。不追踪用户、无广告、自托管。支持图片、视频、新闻、学术论文等多种搜索类型。
**枕心：**某种程度上可以节省点 tokens。

**AIUsage**  
🔗 https://github.com/sylearn/AIUsage

macOS AI 订阅管理仪表板，支持 10+ 提供商（Codex、Copilot、Cursor、Claude Code 等）。Claude Code 代理功能可让 Claude 使用 DeepSeek、GPT、Ollama 等模型。

**QwenPaw**  
🔗 https://qwenpaw.agentscope.io/docs/intro/

个人 AI 助理平台，支持多通道对话（钉钉、飞书、Discord 等）、多智能体协作。Skills 扩展能力，支持本地模型完全离线运行。AgentScope 团队出品。
**枕心：**安装确实够简单方便些，我更喜欢 Hermes-Agent。

---

## 2026-04-18 11:10

**Financial Calc**  
🔗 https://github.com/louisgreen0726/financial-calc

基于 Next.js 16、React 19 和 TypeScript 的双语金融计算器。包含 9 大模块：TVM、现金流、股票估值、债券、投资组合、期权、风险、贷款、宏观指标。支持中英文界面、CSV/JSON/PDF 导出。

**MenuStatus**  
🔗 https://github.com/Snowyyyyyy1/MenuStatus

macOS 菜单栏应用，监控 Atlassian Statuspage 和 incident.io 状态页，内置 OpenAI/Anthropic 提供商。附带 AI Stupid Level 视图，查看 AI 模型基准排名和趋势。

**neko**  
🔗 https://github.com/m1k1o/neko

自托管虚拟浏览器，基于 Docker 和 WebRTC。支持多人同时访问，可用于观影派对、协作浏览、远程教学。流畅视频传输，内置音频，多人控制。

**koharu**  
🔗 https://koharu.rs/zh-CN/

Rust 编写的漫画翻译桌面应用，提供 OCR、清理、翻译、校对、导出完整流程。支持本地 llama.cpp 模型（CUDA/Vulkan/Metal 加速），Headless 模式，MCP 集成。

---

## 2026-04-17 07:05

**Blinko**  
🔗 https://github.com/blinkospace/blinko

开源、自托管的个人 AI 笔记工具，基于 TypeScript + Tauri 构建。AI 驱动的 RAG 检索，支持自然语言搜索笔记。数据完全私有，支持 macOS/Windows/Android/Linux。
**枕心：**25年用了一阶段挺好用的。不过目前也不怎么用了。让工具直接挂载 obsidian 仓库，直接操作的方法更适合自己。

---

## 2026-04-16 16:15

**OpenOmniBot**  
🔗 https://github.com/omnimind-ai/OpenOmniBot

端侧 AI 助手，可操作终端并完成 Android 系统的广泛任务。本地运行，无需云端依赖，支持多模态交互。

**nopua**  
🔗 https://github.com/wuji-labs/nopua

用爱解放 AI 潜能的 Skill。对比恐惧驱动 vs 信任驱动，发现信任驱动的 AI 找到的隐藏 bug 数量翻倍 (+104%)，9/9 场景超越要求完成。

**PPT Agent**  
🔗 https://github.com/zengwenliang416/ppt-agent

多智能体 PPT 生成工作流，4个智能体协作（research → content → slide → review），输出 Bento Grid SVG，支持 17 种风格预设和跨平台运行。

---

## 2026-04-15 22:00

**Immersive Lite**  
🔗 https://github.com/Aioneas/immersive-lite

iOS Safari 本地优先网页翻译 userscript，支持 OpenAI/DeepSeek API。采用批队列+LRU缓存策略，悬浮球交互设计，专注低打扰阅读体验。

**Open Minis**  
🔗 https://www.appinn.com/open-minis/

iOS 端 AI Agent 应用，内置完整 iSH Linux 虚拟机，支持设备端能力调用（地图、照片、日程等）。可运行 Skills、操控浏览器，类似"手机上的 Claude Code"。
**枕心：**墙裂推荐，一些不需要 PC、Mac 去跑的简单任务完全可以胜任。现在 Android 预览版也有了，很好上手。

**Scriptable Widget Builder**  
🔗 https://github.com/OpenMinis/AwesomeMinis/blob/main/cases/developer/scriptable-widget-builder.md

用 Minis AI 生成 Scriptable 小组件代码，挂载目录后直接写入，无需电脑。支持日历+提醒双栏小组件，自动适配尺寸与深色模式。

**Karpathy 的 LLM 知识库方法论**  
🔗 https://blog.riba2534.cn/blog/2026/karpathy的llm知识库-用大模型编译你的个人wiki/

Karpathy 推广的知识编译范式：用 LLM 增量构建持久 Wiki 而非 RAG 检索。三层架构（raw/wiki/schema），四个核心操作（ingest/query/lint/audit）。

---

**Oh My Zsh**  
🔗 https://github.com/ohmyzsh/ohmyzsh

社区驱动的 zsh 配置管理框架，2400+ 贡献者、300+ 插件、140+ 主题，最流行的终端美化方案。

📖 zsh 安装与配置教程：https://www.haoyep.com/posts/zsh-config-oh-my-zsh/
