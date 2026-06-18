# 交接文档 #2 — 第二轮 · 策略主场

完成日期：2026-06-18 ｜ 提交：`907bb8d`（已推 main，Vercel 自动部署）

## 一、本轮已建页面与资产

### 首选功能
- **`/match` 互动选型器**：3 个问题(任务/预算/最看重什么)→ 返回 2–3 个最合适工具，**缺点(notFor)前置**，真实价格 + Visit CTA。客户端即时；服务端含可索引正文 + FAQ + WebApplication/FAQ schema + 全类目内链。

### 程序化页（基于独家数据，过质量门）
- **`/best/[task]/cheapest`**（13 类）：按真实起价排序，含免费项，FAQ「最便宜是不是最差」。门槛 ≥3 个有价工具。
- **`/stacks` + `/stacks/[outcome]`**（8 个目标：faceless YouTube / newsletter / Shopify / 独立 app / 播客 / 内容营销 / 个人品牌 / SaaS 支持）：每个目标 = 各环节最省工具 + **真实月总价** + 免费版 + 每个工具的"诚实缺点"。手写独家 intro。
- **详情页增强**（140）：新增「is X worth it」判决 FAQ + 可见「最后更新」+ `SoftwareApplication.dateModified`。

### 编辑内容（手写、有观点、有数据，非模板）
- **`/guides` + 4 篇深度文章**：
  1. The Truth About "Free" AI Tools（免费层真相，72% 拆解）
  2. How to Choose an AI Tool（决策框架，以"否决项"选型）
  3. Why Most "Best AI Tools" Lists Are Useless（揭联盟软文 + 方法论）
  4. AI Pricing Is Designed to Confuse You（按产出真实成本）
  - 每篇含 BlogPosting schema、作者(编辑团队)、发布/更新时间、内链、CTA。
- **`/about`**：方法论 + 独立性 + 联盟披露（E-E-A-T）。
- **`/contact`**：展示 `contact@toolsbytask.com`（mailto）+ 纠错/收录/广告入口 + ContactPage schema。

### 基建/质量门
- 本地 **TF-IDF 余弦去重**工具 `src/lib/dedup.ts`（>0.85 判近似，**无需 embedding key**）。
- Markdown 内链同标签页打开(可爬)；外链新标签。
- footer 加「Company」列；sitemap 纳入所有新页(含 cheapest/stacks/guides/about/contact)。

### 邮箱（Cloudflare Email Routing，已全自动完成）
- `contact@toolsbytask.com` → `haohua.work@gmail.com`，已建转发规则；
- 已写入 3×MX + DKIM + SPF；routing enabled，status=ready；目标地址已 verified。**可直接收信。**

## 二、本轮策略（已选定并落地）
核心赌注：做"反联盟软文"的**诚实决策站**。选定 5 奇招(4 个清单外原创)：诚实反向层、真实免费额度索引、按产出定价、工具栈生成器、逃离/迁移。详见 `STRATEGY-2.md`；关键词映射见 `KEYWORD-MAP-2.md`。

## 三、《人类待办清单》(机器替不了 / 缺 key)
1. **外链 / 站外分发**（最重要，机器不该自动）：用定价报告 + 工具栈 + 免费额度做 linkbait；去 Reddit/Quora/相关讨论**真诚回答**并自然引用。第四轮重点。
2. **内容独特性终审**：抽查程序化页是否真有信息增益（我已加去重 + ≥3 数据维度门，但最终人判）。
3. **补 `ANTHROPIC_API_KEY`**（共享 `.env` 现为空）→ 解锁两项最高价值富集：
   - 奇招2「真实免费额度规范化」(逐工具抓取 + Claude 抽取，Firecrawl 已就位)；
   - 奇招3「按产出定价」的单位成本归一；
   - 以及发布前 LLM 评审门。
   也会恢复采集器/未来 AI 写作能力。
4. **CF token 加 `Zone Analytics:Read`** → 解锁 H 真实抓取监控(现仅缺这一个权限)。
5. （可选）embedding key(Voyage/OpenAI) → 去重升级为真语义。

## 四、下一轮入口
第三轮(扩量/负约束 facet/取消迁移专页/富集后的免费额度索引/站外 linkbait 生产)：按宪法，我出一句话方案 → 你回是/否 → 端到端执行。
