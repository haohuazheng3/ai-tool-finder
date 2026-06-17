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
- ⛔ **被阻断（见下方手动项 #1）**：GSC 实时拉取 + DNS 网域属性，都因**服务账号密钥已失效**而暂不能跑

### H 真实抓取监控（Cloudflare 日志）
- ⏭️ 需 `CLOUDFLARE_API_TOKEN`（env 中没有）→ 跳过并标注。给我一个有 Analytics/Logs 读权限的 CF token 即可接通"Googlebot/GPTBot 实抓了哪些页/频率/404"。

### I 信号一致性交叉校验
- ✅ noindex 页不在 sitemap（**本轮把 noindex 的 `/search` 从 sitemap 移除**）；canonical 一律指向干净可索引 URL；vs / 三方页非规范序 → 永久跳规范序；无互指 canonical、无重定向链

---

## 2. 留给你的手动项（按重要性排序）

### 🔴 #1（最重要）SEO 服务账号密钥已失效 → 需要一把新的
- **现象**：`.env.local` 里 `seo api` 那把 key（`key_id 7cbb87c7…`）做 JWT 换 token 时返回 `invalid_grant: Invalid JWT Signature`。本地签名正常 → 是**密钥本身被轮换/吊销**（很可能是此前我提醒你轮换后留下的旧 key）。
- **影响**：每日 GSC 报告 workflow、DNS 网域属性验证、任何 GSC API 调用都用这把 key → 现在都跑不通。**（你在 GSC 网页端看 url-prefix 属性数据不受影响。）**
- **你要做的（约 2 分钟）**：
  1. 到 GCP 控制台 → 项目 `seo-api-499507` → IAM → 服务账号 `seo-bot@seo-api-499507.iam.gserviceaccount.com` → 「密钥」→ 新建 JSON 密钥，下载。
  2. 把整段 JSON 丢进 `.env.local`（替换 `seo api` 那一段），并更新 GitHub 仓库 Secret `GOOGLE_SERVICE_ACCOUNT_JSON`（仓库 → Settings → Secrets → Actions）。
  3. 告诉我「新 key 好了」——我会立刻：验证 token、跑通每日 GSC 报告、取 DNS 网域属性的 TXT 记录给你。

### 🟡 #2 DNS 网域属性（依赖 #1，可选增强）
- 现在你有 **url-prefix** 属性已够看全站数据。**网域(Domain)属性**额外覆盖子域/http，需要一条 DNS TXT。
- 路径 A（等 #1）：新 key 到位后我自动取 TXT token 给你，你在 Cloudflare 加一条 TXT 即可。
- 路径 B（你自己点，最快）：GSC → 添加资源 → 「网域」→ 输入 `toolsbytask.com` → GSC 直接给你一条 `google-site-verification=…` 的 TXT → 加到 Cloudflare DNS。

### 🟢 #3（可选）解锁更多自动化的 key
- `CLOUDFLARE_API_TOKEN`（Analytics/Logs 读）→ 接通 H 真实抓取监控
- Voyage / OpenAI embedding key → C 升级为语义内链 + 去重
- 这些不给也不影响主体；给了我就接上。

---

## 3. 部署验证
- 提交：`b028d93`（已推 main，Vercel 自动部署）
- 验证清单见本轮对话末尾的实测结果（IndexNow key 200、HSTS 含 includeSubDomains、robots 含 CCBot、Organization JSON-LD、sitemap 不含 /search、PSI 实测 LCP/CLS/INP）。

---

## 4. 下一轮入口
第一轮=确定性地基，已自交付完成。第二/三轮（程序化页扩量、可链接资产、内容引擎、GEO 深化、站外分发）按《端到端宪法》：我出一句话方案 → 你回是/否 → 我一口气端到端执行。
