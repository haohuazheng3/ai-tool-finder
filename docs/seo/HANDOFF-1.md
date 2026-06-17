# 交接文档 #1 — 第一轮 · 技术底座

**站点**：https://toolsbytask.com （Next.js 14 / Vercel / Neon）
**轮次**：第一轮（技术 SEO 地基，确定性工作，端到端自交付）
**完成日期**：2026-06-17
**目标指标**：GSC 曝光（Impressions）

---

## 0. 站点类型与状态（轻量探测结论）
- **类型**：目录站（task-organized AI tools directory）→ 注入 Organization / WebSite / ItemList / SoftwareApplication / FAQPage / Dataset / BreadcrumbList。无电商/本地业务，故不注入 Product / LocalBusiness。
- **新站 vs 存量站**：自建新站，我完全掌控代码。本轮所有改动为**增量**（schema、图标、头部、内链），**无任何批量 noindex / 对已有页 301 / 删页**，故无需危险变更确认。

---

## 1. 技术基线（逐项打勾）

### A 页面级基础
- ✅ 每页唯一 `<title>` / `meta description` / `H1` / 自指 canonical（统一走 `buildMetadata()`，覆盖所有路由）
- ✅ OG + Twitter Card 每页动态；每页自动生成品牌 OG 图（`/api/og`）
- ✅ **favicon（`icon.svg`）+ Apple touch icon（`apple-icon` PNG）+ Organization logo + `manifest.webmanifest` + theme-color**（本轮新增；此前站点无 favicon）
- ✅ lang / charset / viewport 正确（新增 `viewport` 导出）

### B URL 与信息架构 + 头部
- ✅ slug 短、描述性、含词；hub-and-spoke；程序化 URL 模式统一；任意页 ≤3 次点击
- ✅ **HSTS + X-Content-Type-Options + Referrer-Policy + X-Frame-Options + Permissions-Policy**（`next.config.mjs` 全站头）
- ✅ 自定义 **404**（`not-found.tsx`）+ **500**（新增 `error.tsx`），杜绝 soft-404
- ✅ 筛选/排序参数页：canonical 收敛到干净 URL；`/search`、登录/注册、`/advertise/success`、`/admin` 均 noindex
- ⏭️ **www→apex 跳转码**：由 Vercel 域名层处理（默认 308 永久跳转）。建议你在 Vercel 后台确认一次为 308/301（非阻塞）。

### C 内链机制（消灭孤儿页）
- ✅ 面包屑（可见 + `BreadcrumbList`）覆盖所有页型
- ✅ related / alternatives / vs 互链；footer 作 hub；`/best/[task]` → free / persona 变体
- ✅ **本轮修复：`/best/[task]` 新增"头对头三方对比"区块，链向该类目的 `/compare/*` 三方页** → 此前这些三方对比页是**孤儿页（仅在 sitemap）**，现已有强相关 hub 内链
- ⏭️ **embedding 相似度内链**：env 无 embedding key（Anthropic key 不含 embedding）→ 暂以"同类目 + 排名"启发式替代（已能产出合理 related）。给我 Voyage/OpenAI key 即可升级为真·语义内链。

### D 结构化数据 JSON-LD
- ✅ **Organization（本轮新增：name / url / logo）**、WebSite + SearchAction、BreadcrumbList、ItemList、SoftwareApplication、FAQPage、Dataset（定价报告页）
- ✅ **未编造** Review/AggregateRating（无真实评分，按规矩不注入）

### E 性能 / Core Web Vitals
- ✅ SSG/ISR 静态优先；**系统字体栈**（无 web 字体下载，零字体 CLS，天然最优，无需 subset）；图片均带尺寸 + 懒加载（防 CLS）；favicon 主机 preconnect
- ✅ Brotli + 边缘缓存（Vercel 默认）
- ℹ️ **next/image AVIF/WebP 刻意未套用于 40–56px 的第三方 favicon**：它们不是 LCP 元素、本就 ~1KB，过 Vercel 优化器只增加成本与脆弱性（单个上游 favicon 失败会 500），收益≈0；全站无大图。这是经过权衡的工程决定，非遗漏。
- 🔜 CWV 实测数值：本轮用 PageSpeed Insights 实测并附在下方"部署验证"。

### F 可访问性
- ✅ logo alt（装饰性置空 / 具名）、表单 label、面包屑 `aria-label="Breadcrumb"`、搜索框 `aria-label`、语义化结构

### G 抓取与收录
- ✅ robots：放行常规 + AI 引擎爬虫（GPTBot/ClaudeBot/PerplexityBot/Google-Extended/**CCBot**/Meta/Bytespider/Diffbot 等）+ 指向 sitemap
- ✅ 动态 sitemap.xml（≈480 活页 + lastmod）；llms.txt + llms-full.txt 已托管
- ✅ **IndexNow**：key 已托管于 `/d54f5bcc97ad442b31202e93f1e6a43e.txt`，`scripts/indexnow-ping.mjs` + 每日 workflow（`.github/workflows/indexnow.yml`），向 Bing/Yandex 等即时推送（**无需任何账号/密钥**）

### G2 GSC 自动挂载 + 域名所有权
- ✅ **url-prefix 属性 `https://toolsbytask.com/` 已验证 + sitemap 已提交 + 你的账号 haohuazheng001@gmail.com 已是所有者**（上一轮完成，你现在 GSC 里就能看到）
- ✅ **每日** GSC 报告 workflow（`weekly-gsc.yml` cron 已改为每日；`scripts/gsc-report.mjs` 产出"该改标题 / 临近首页 / 该建页"清单）—— **代码就绪**
- ✅ **已全部接通（新 key 到位后收尾完成）**：每日 GSC 报告鉴权通过（实测，新站暂 0 曝光）；GitHub Secret `GOOGLE_SERVICE_ACCOUNT_JSON` 已更新；**DNS 网域属性 `sc-domain:toolsbytask.com` 经 Cloudflare API 端到端完成**（写 TXT → Google ~10s 验证 → sites.add → 提交 sitemap → 你已是所有者）

### H 真实抓取监控（Cloudflare 日志）
- ⏭️ CF token 已到位且**能写 DNS（已用于网域属性验证）**，但**缺 `Zone Analytics:Read` 权限**（GraphQL 报 authz 拒绝；该 zone 为 Free 计划）→ bot 抓取分析暂不能拉。给该 token 勾上 Analytics:Read 即接通；在此之前用 GSC「设置 → 抓取统计」看 Googlebot。

### I 信号一致性交叉校验
- ✅ noindex 页不在 sitemap（**本轮把 noindex 的 `/search` 从 sitemap 移除**）；canonical 一律指向干净可索引 URL；vs / 三方页非规范序 → 永久跳规范序；无互指 canonical、无重定向链

---

## 2. 留给你的手动项（第一轮收尾时你已补 key，绝大多数已自动闭环）

### ✅ #1（已解决）SEO 服务账号密钥 — 新 key 已到位并全部接通
- 你提供新 key（`GOOGLE_SERVICE_ACCOUNT_B64`，key_id `34a6c486…`）。我已自动：换 token ✓ → 每日 GSC 报告鉴权通过 ✓ → 更新 GitHub Secret `GOOGLE_SERVICE_ACCOUNT_JSON` ✓ → 用它 + Cloudflare 完成网域属性 ✓。`gsc-report.mjs` 现同时支持 `GOOGLE_SERVICE_ACCOUNT_JSON` 或 `_B64`。**无需你再操作。**

### ✅ #2（已完成）DNS 网域属性
- 已通过 Cloudflare API 全自动：取 TXT → 写 DNS → Google ~10s 验证 → 添加 `sc-domain:toolsbytask.com` → 提交 sitemap → 你（haohuazheng001）已是所有者。**你现在 GSC 里有两个属性：url-prefix + 网域。**

### 🟡 #3 仍需你留意的
- ⚠️ **`ANTHROPIC_API_KEY` 现在为空**（模板覆盖了原值）→ 采集器 / AI 内容生成会失效。后续轮次需要时请补回。
- 想要 **H 真实抓取监控**：给现有 CF token 勾上 **Zone Analytics:Read**（现在 GraphQL 报权限不足）。在此之前用 GSC「设置 → 抓取统计」看 Googlebot。
- 想要 **C 语义内链 / 去重**：给一个 Voyage 或 OpenAI embedding key。
- 已收到备用：`VERCEL_TOKEN` / `NEON_API_KEY` / `RESEND_API_KEY` / `FIRECRAWL_API_KEY`，后续轮次（部署 / DB 分支 / 外联邮件 / 采集）会用到。

---

## 3. 部署验证（实测）
- 提交：`b028d93` + 收尾若干（已推 main，Vercel 自动部署）
- ✅ IndexNow key 200 且 ping 返回 200（483 URL 已提交）；HSTS 含 `includeSubDomains; preload`；robots 含 CCBot；首页 JSON-LD 解析为 `Organization+WebSite`；icon / apple-icon / manifest 全 200；sitemap 不含 /search；trio / best / detail 页 200 无跳转
- ⏭️ CWV 实测数字：免 key 的 PageSpeed 接口当日配额用尽（429）→ 优化已就位（SSG/ISR、系统字体、图片留尺寸、preconnect），可在 PSI 网页端确认或稍后重测

---

## 4. 下一轮入口
第一轮=确定性地基，已自交付完成。第二/三轮（程序化页扩量、可链接资产、内容引擎、GEO 深化、站外分发）按《端到端宪法》：我出一句话方案 → 你回是/否 → 我一口气端到端执行。
