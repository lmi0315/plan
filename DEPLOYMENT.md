# 序计划 3.0 部署包

目标仓库：lmi0315/fabric-cost-app；目标分支：main。

- planfolio/：构建后的静态 PWA，新增到仓库根目录。
- _planfolio-src/：完整可重建源码、依赖锁定和日期筛选测试。
- sw.js：面料计算器原有 Service Worker 的兼容修改，只清理 fabric- 前缀缓存，并将 planfolio/ 交给其自己的 Service Worker，避免两个应用缓存互相干扰。
- 不替换原有 index.html、行情采集脚本或 data 目录。

仓库已有 GitHub Pages 自动部署，无需新增工作流；提交后需要等待 pages build and deployment 成功。
预计访问路径为现有 Pages 站点的 planfolio/ 子目录，最终地址应以部署输出和实际访问验证为准。

本包不包含用户实际计划。应用无登录入口，计划保存在手机浏览器的 planfolio-device-v1 IndexedDB。首次联网缓存后可离线使用。换域名或手机需先备份再恢复。

验证：TypeScript 检查、生产构建、闰年/跨年/月份天数/下级计划筛选测试均通过；手机宽度下验证了四卡片首页、图表、组合筛选、周月年日历与多跨度甘特图。

发布状态：当前 GitHub 连接写入返回 403 Resource not accessible by integration，尚未提交或上线。需要仓库内容写入授权后再继续发布。
