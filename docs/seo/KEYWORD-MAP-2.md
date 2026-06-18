# 《关键词 → 页面映射表》(第二轮)

意图分层 + 对应页面类型 + 示例 URL + 状态。状态：✅ 已上线 ｜ 🔶 已上线待数据富集 ｜ 🔜 后续轮。

| 意图层 | 关键词族（示例） | 页面类型 | 示例 URL | 状态 |
|---|---|---|---|---|
| 决策·选型 | `which ai X tool should I use`, `ai X tool for me` | 互动选型器 | `/match` | ✅ |
| 决策·人群 | `best ai X for students/youtubers/shopify` | persona 页 | `/best/ai-writing/for/students` | ✅ |
| 决策·对比(2) | `X vs Y` | 对比页 | `/jasper-ai-vs-copy-ai` | ✅ |
| 决策·对比(3) | `X vs Y vs Z` | 三方对比 | `/compare/...-vs-...-vs-...` | ✅ |
| 决策·替代 | `X alternatives`, `free alternative to X` | 替代页 | `/jasper-ai/alternatives` | ✅ |
| 决策·值不值 | `is X worth it`, `X review` | 详情页(判决) | `/jasper-ai` | ✅ |
| 价格·最便宜 | `cheapest ai X`, `cheap ai X` | cheapest 页 | `/best/ai-image/cheapest` | ✅ |
| 价格·免费 | `best free ai X` | free 页 | `/best/ai-image/free` | ✅ |
| 价格·免费额度 | `X free tier limits`, `how many credits X free` | 免费额度索引 | （规范化表，待富集） | 🔶 |
| 价格·按产出 | `ai X cost per word/image/minute`, `ai tools pricing comparison` | 定价报告(扩展) | `/ai-tools-pricing-report` | ✅ / 🔶 |
| 目标·工具栈 | `ai stack for faceless youtube/newsletter/shopify` | 工具栈页 | `/stacks/faceless-youtube-channel` | ✅ |
| 负约束 | `ai X without watermark/signup/credit card` | 负约束 facet | （待富集 watermark/CC 标志） | 🔜 |
| 售后·取消 | `how to cancel X`, `X refund` | 迁移/取消页 | （融入替代页，专页后续） | 🔜 |
| 教育·决策 | `how to choose ai tool`, `are free ai tools good` | 深度指南 | `/guides/how-to-choose-an-ai-tool` | ✅ |
| 教育·定价 | `ai pricing explained`, `ai credits meaning` | 深度指南 | `/guides/ai-tool-real-cost` | ✅ |
| 信任·品牌 | `toolsbytask`, `是否可信` | About/方法论 | `/about` | ✅ |

**未占词族（下一轮优先）**：负约束 facet（无水印/免注册）、专门的"取消/迁移"页、规范化"免费额度"长尾（依赖数据富集）。
