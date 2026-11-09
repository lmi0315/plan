# 序计划 · plan 仓库专用部署版

这是序计划 3.0 的独立仓库部署版本。已将 CSS 和 JavaScript 合并到 index.html，无需上传 assets 文件夹。

## 手机上传

1. 解压部署包。
2. 进入 GitHub 的 lmi0315/plan 仓库，点击 ⋯ → Upload files。
3. 选择解压后的 index.html、sw.js、manifest.webmanifest、icon-192.png、icon-512.png、favicon.svg、README.md、source-v3.zip 全部文件，提交到 main。
4. 如提示已有 sw.js，使用本包的序计划 sw.js 替换；此前上传的是用于面料计算器的兼容脚本，不适用于这个独立仓库。
5. Settings → Pages → Deploy from a branch → main → /(root) → Save。等待部署成功。

应用无需 ChatGPT 登录。计划保存在当前手机浏览器的 IndexedDB，可通过 JSON 备份恢复；首次联网缓存后支持离线使用。原云端计划不会自动迁移。

## 源码

source-v3.zip 中是可维护的 React/TypeScript 源码和测试。构建得到 dist 后，将其内容部署到 plan 仓库根目录即可。

## 功能

四张首页统计卡片及图表、个人/工作选择、计划与状态筛选、周月年日历、周双周月年甘特图；已移除手机日历同步模块。
