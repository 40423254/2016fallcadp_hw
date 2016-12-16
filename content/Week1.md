Title: 2016Fall Week1
Date: 2016-09-16 12:00
Category: Misc
Tags: 使用導引, 創造力, 表達能力, 協同設計
Author: 40423254


<h2>中秋連假</h2>
<p>切換到2016fallcadp_hw的分支</p>
<pre>cd <u>分支名稱</u>
(例如:cd 2016fallcadp_hw)</pre>
<p>回到上一個分支</p>
<pre>cd ..</pre>
<p>會新建一個40423254的資料夾,並把遠端資料存在裡面</p>
<pre>git clone <u>倉儲網址</u> <u>分支名稱</u>
(例如:git clone https://github.com/40423254/2016fallcadp_hw.git )</pre>
<p>檢查分支</p>
<pre>git branch</pre>
<p>建立一個gh-pages名稱的分支</p>
<pre>git branch <u>分支名稱</u>
(例如:git branch gh-pages)</pre>
<p>切換到指定的gh-pages分支</p>
<pre>git checkout <u>分支名稱</u>
(例如:git checkout gh-pages)</pre>
<pre>git add -A</pre>
<pre>git commit -m"<u>改版內容</u>"
(例如:git commit -m"add all")</pre>
<p>推送進端資料到遠端,並且指定推送到gh-pages的分支</p>
<pre>git push origin <u>分支名稱</u>
(例如:git push origin gh-pages)</pre>
<pre>git pull</pre>
<p>收尋該檔案名稱,並逐一確認是否刪除</p>
<pre>git rm <u>檔案名稱</u></pre>
<p>回到之前072e3af的版本資料</p>
<pre>git reset --hard <u>版本代碼</u>
(例如:git reset --hard 072e3af)</pre>
<p>直接刪除所有該檔案名稱的檔案</p>
<pre>git rm <u>檔案名稱</u> -f</pre>