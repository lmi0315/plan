# 序计划：独立 plan 仓库部署

- 仓库：`lmi0315/plan`
- 发布分支：`main`
- GitHub Pages 来源：Deploy from a branch → main → /(root)
- `index.html` 已包含应用 JavaScript 和 CSS，无需额外的 assets 文件夹。
- `sw.js` 是本应用的离线缓存文件，按当前站点路径隔离缓存。
- `source-v3.zip` 保存 React / TypeScript 源码、构建脚本和测试。
- 公开仓库中只保存应用代码和示例，不包含你的实际计划数据。

## 手机使用

部署成功后，用手机浏览器打开 GitHub Pages 给出的站点地址，再选择“安装应用”或“添加到主屏幕”。应用无需 ChatGPT 登录。

计划写入当前浏览器的 `planfolio-device-v1` IndexedDB 数据库。首次联网加载并完成缓存后支持离线使用。更换手机、浏览器、站点域名或清除网站数据前，需要先导出 JSON 备份。

旧云端版的计划不会自动迁移；先在旧版导出 JSON，再在本应用恢复。

## 验证

生产构建、日期跨度与下级计划筛选测试已通过。首页四卡片、统计图、组合筛选、周月年日历、多跨度甘特图已在手机宽度下检查。

最新发布状态请查看仓库 Actions 中的 `pages build and deployment`，以及 Settings → Pages 中显示的站点状态。
