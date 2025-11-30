// 博客文章数据（前端静态管理）
const blogData = [
  {
    id: 1,
    title: "前端开发的未来趋势",
    date: "2023年6月15日",
    category: "技术",
    image: "https://p11-doubao-search-sign.byteimg.com/tos-cn-i-be4g95zd3a/2147367099822505987~tplv-be4g95zd3a-image.jpeg?rk3s=542c0f93&x-expires=1780057543&x-signature=zkYKUxHctzzjuZO8qFztT8XVrpY%3D",
    excerpt: "随着 Web 技术的飞速发展，前端开发正迎来前所未有的变革。本文将探讨几个关键趋势：微前端架构、WebAssembly（Wasm）、AI 辅助编程等。",
    content: `
      <p>随着 Web 技术的飞速发展，前端开发正迎来前所未有的变革。本文将探讨几个关键趋势：</p>
      <h3>1. 微前端架构</h3>
      <p>微前端允许大型团队将应用拆分为多个独立子应用，提升开发效率与部署灵活性。</p>
      <h3>2. WebAssembly（Wasm）</h3>
      <p>WebAssembly 让 C++、Rust 等高性能语言能在浏览器中运行，极大拓展了前端能力边界。</p>
      <h3>3. AI 辅助编程</h3>
      <p>GitHub Copilot、CodeWhisperer 等工具正在改变开发者的工作流，提升编码效率。</p>
      <p>未来，前端工程师不仅需要掌握 UI 实现，更要理解系统架构、性能优化与跨端能力。</p>
    `
  },
  {
    id: 2,
    title: "响应式设计最佳实践",
    date: "2023年5月28日",
    category: "设计",
    image: "https://p3-doubao-search-sign.byteimg.com/tos-cn-i-be4g95zd3a/903514016506183701~tplv-be4g95zd3a-image.jpeg?rk3s=542c0f93&x-expires=1780057543&x-signature=zMx7ixYAt5fUPz5XgnxiGQKZXHM%3D",
    excerpt: "响应式设计是现代网页开发的基石。无论用户使用手机、平板还是桌面电脑，页面都应优雅适配。",
    content: `
      <p>响应式设计是现代网页开发的基石。无论用户使用手机、平板还是桌面电脑，页面都应优雅适配。</p>
      <h3>核心原则</h3>
      <ul>
        <li><strong>移动优先</strong>：先设计小屏，再逐步增强大屏体验。</li>
        <li><strong>弹性布局</strong>：使用 CSS Flexbox 和 Grid 构建灵活结构。</li>
        <li><strong>媒体查询</strong>：针对不同断点调整样式。</li>
      </ul>
      <h3>常用断点参考</h3>
      <pre><code>
/* 手机 */
@media (max-width: 768px) { ... }
/* 平板 */
@media (min-width: 769px) and (max-width: 1024px) { ... }
/* 桌面 */
@media (min-width: 1025px) { ... }
      </code></pre>
      <p>记住：响应式不仅是"缩放"，更是"重新思考内容优先级"。</p>
    `
  },
  {
    id: 3,
    title: "JavaScript性能优化技巧",
    date: "2023年5月10日",
    category: "技术",
    image: "https://p11-doubao-search-sign.byteimg.com/labis/image/25f4e3824fd50dd4f3164a53bf04094c~tplv-be4g95zd3a-image.jpeg?rk3s=542c0f93&x-expires=1780057543&x-signature=QGSddDWT4MAYHtW4fn0MYmLkSxM%3D",
    excerpt: "JavaScript 性能直接影响用户体验。以下是几个实用优化技巧：减少重排与重绘、防抖与节流、使用 Web Workers、懒加载资源。",
    content: `
      <p>JavaScript 性能直接影响用户体验。以下是几个实用优化技巧：</p>
      <h3>1. 减少重排（Reflow）与重绘（Repaint）</h3>
      <p>批量修改 DOM，避免频繁读写样式。可使用 <code>documentFragment</code> 或 <code>transform</code> 替代位置变动。</p>
      <h3>2. 防抖（Debounce）与节流（Throttle）</h3>
      <p>对高频事件（如滚动、输入）进行控制，避免过度调用。</p>
      <h3>3. 使用 Web Workers</h3>
      <p>将耗时计算移至后台线程，避免阻塞主线程。</p>
      <h3>4. 懒加载资源</h3>
      <p>图片、组件按需加载，减少首屏负担。</p>
      <p>性能优化不是一蹴而就，而是持续迭代的过程。</p>
    `
  },
  {
    id: 4,
    title: "如何成为一名优秀的前端开发者",
    date: "2023年4月22日",
    category: "经验",
    image: "https://p3-doubao-search-sign.byteimg.com/tos-cn-i-be4g95zd3a/1072867420357394434~tplv-be4g95zd3a-image.jpeg?rk3s=542c0f93&x-expires=1780057543&x-signature=cWQfeI7QXsoNZqccyBd0BFyXamw%3D",
    excerpt: "前端开发看似入门简单，但要真正精通却需要长期积累。以下是打好基础、理解原理、注重用户体验、持续学习等几点建议。",
    content: `
      <p>前端开发看似入门简单，但要真正精通却需要长期积累。以下是我的几点建议：</p>
      <h3>1. 打好基础</h3>
      <p>HTML、CSS、JavaScript 是根基。不要跳过原生 JS 直接学框架。</p>
      <h3>2. 理解原理</h3>
      <p>知道 Vue/React "怎么用"不够，还要理解"为什么这样设计"。</p>
      <h3>3. 注重用户体验</h3>
      <p>前端是用户与产品的直接接触点。加载速度、交互反馈、无障碍支持都至关重要。</p>
      <h3>4. 持续学习</h3>
      <p>技术日新月异，保持好奇心和学习习惯是唯一出路。</p>
      <p>最后，代码不仅是给机器看的，更是给人看的——包括未来的你自己。</p>
    `
  },
  {
    id: 5,
    title: "现代CSS布局技术",
    date: "2023年4月5日",
    category: "技术",
    image: "https://p3-doubao-search-sign.byteimg.com/labis/2b65b825eee752f840353be2928f41c6~tplv-be4g95zd3a-image.jpeg?rk3s=542c0f93&x-expires=1780057543&x-signature=EkLrCGE5vnU%2Fyfzbk8PT8pKCYRI%3D",
    excerpt: "CSS 布局已从"hack 时代"进入"声明式时代"。两大利器：Flexbox 与 Grid。结合使用两者，几乎可以实现任何复杂布局。",
    content: `
      <p>CSS 布局已从"hack 时代"进入"声明式时代"。两大利器：Flexbox 与 Grid。</p>
      <h3>Flexbox：一维布局</h3>
      <p>适合单行或单列布局，如导航栏、卡片内部排列。</p>
      <pre><code>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
      </code></pre>
      <h3>CSS Grid：二维布局</h3>
      <p>适合整体页面结构，如杂志式排版、仪表盘。</p>
      <pre><code>
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
      </code></pre>
      <p>结合使用两者，几乎可以实现任何复杂布局，且代码清晰易维护。</p>
    `
  },
  {
    id: 6,
    title: "UI设计中的色彩心理学",
    date: "2023年3月18日",
    category: "设计",
    image: "https://p26-doubao-search-sign.byteimg.com/tos-cn-i-be4g95zd3a/1069830509107478649~tplv-be4g95zd3a-image.jpeg?rk3s=542c0f93&x-expires=1780057543&x-signature=dnOK0bBuQ8aOUXsV1Bat%2FeK6Dho%3D",
    excerpt: "色彩不仅是美学选择，更是心理暗示工具。合理运用色彩能显著提升用户转化率。蓝色代表信任、红色代表激情、绿色代表自然。",
    content: `
      <p>色彩不仅是美学选择，更是心理暗示工具。合理运用色彩能显著提升用户转化率。</p>
      <h3>常见色彩情绪</h3>
      <ul>
        <li><strong>蓝色</strong>：信任、专业（常用于金融、科技）</li>
        <li><strong>红色</strong>：激情、紧迫（常用于促销、警告）</li>
        <li><strong>绿色</strong>：自然、安全（常用于环保、健康）</li>
        <li><strong>黄色</strong>：乐观、注意（慎用，易造成视觉疲劳）</li>
      </ul>
      <h3>设计建议</h3>
      <p>主色不超过 3 种；确保足够的对比度以满足无障碍标准；在不同设备上测试色彩表现。</p>
      <p>记住：用户可能不会注意到你的配色方案，但一定会感受到它带来的情绪。</p>
    `
  }
];