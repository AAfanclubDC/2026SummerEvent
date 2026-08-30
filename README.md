# 2026SummerEvent

AA同好會 2026 夏季活動作品頁。

頁面會依參加者順序排列，每位參加者固定顯示第一篇至第五篇；投稿完成後，Bot 會同步更新
`data/playerHashMap.json` 與 `data/workUserMap.json`。這兩份公開索引只使用隨機參加者代碼，
不包含 Discord ID。

投稿壓縮檔若含有 HTML，頁面會優先使用 `index.html`；若沒有 `index.html`，則使用名稱排序第一個
HTML。只有沒有任何 HTML 時，才會由圖片自動產生 `index.html`。

參賽者 icon 會由 Bot 從 Discord 下載到 `images/players/`，並在公開索引中引用。
