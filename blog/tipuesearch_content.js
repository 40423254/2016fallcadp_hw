var tipuesearch = {"pages":[{"text":"2016Fall 修課成員網誌","tags":"misc","title":"About","url":"./pages/about/"},{"text":"這學期沿用了以前所教過的github系統倉儲，藉由commit、proxy、config等指令設置環境。 本學期教了可攜式的solvespace、雲端的onshape兩個繪圖軟體。前者可以繪製簡單的2D機構模擬及3D的零件組立。後者可以利用瀏覽器開啟、免安裝式的運作，還有支援手機APP，最後儲存在雲端上。 以上是我這學期學到的","tags":"Misc","title":"期末心得","url":"./qi-mo-xin-de.html"},{"text":"利用雲端繪圖程式onshape繪製簡單的零件。大部分功能都和solidwork差不多。 心得 : 間單的利用onshape繪製一些圖形。","tags":"Misc","title":"work5","url":"./work5.html"},{"text":"利用solvespace繪製一四連桿機構，並追蹤點取得路徑。 window.onload=function(){ brython(1); } from browser import document as doc from browser import html import math # 準備繪圖畫布 canvas = doc[\"fourbar\"] container1 = doc['container1'] ctx = canvas.getContext(\"2d\") fourbar_data = open(\"./../data/image3/fourbar.csv\").read() fourbar_list = fourbar_data.splitlines() #container1 <= fourbar_list[0] # 以下可以利用 ctx 物件進行畫圖 # 先畫一條直線 ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 # 利用 transform 將 y 座標反轉, 且 offset canvas.height # (X scale, X skew, Y skew, Y scale, X offset, Y offset) # 配合圖形位置進行座標轉換 ctx.transform(1, 0, 0, -1, canvas.width/2+250, canvas.height/2+100) # 畫出 x 與 y 座標線 # 各座標值放大 8 倍 ratio = 8 ''' ctx.moveTo(0, 0) ctx.lineTo(0, 100) ctx.moveTo(0, 0) ctx.lineTo(100, 0) ''' ctx.moveTo(0, 0) ctx.lineTo(-30*ratio, 0) start_point = fourbar_list[0].split(\",\") ctx.moveTo(float(start_point[0])*ratio, float(start_point[1])*ratio) count = 0 for data in fourbar_list[1:]: point = data.split(\",\") #count = count + 1 #container1 <= str(count) + \":\" + point[0] + \",\" + point[1] #container1 <= html.BR() ctx.lineTo(float(point[0])*ratio, float(point[1])*ratio) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" # 實際執行畫線 ctx.stroke() ctx.closePath() 心得 : 繪製一個簡單的四連桿機構，並且追蹤點，在放到excel上繪出圖形。","tags":"Misc","title":"work4","url":"./work4.html"},{"text":"模擬3D印表機之運動軌跡 心得 : 模擬運動軌跡","tags":"Misc","title":"work3","url":"./work3.html"},{"text":"將solvespace畫出來的零件圖及組立圖轉成html，並且將slv檔裡的原始碼從http改為https。再將html檔(組立圖)裡的絕對目錄改為相對目錄。最後用iframe導入圖片。 心得 : 這次是將solvespace所畫出來的零件，存檔時轉成html，並且可以利用iframe指令導入在網誌上。","tags":"Misc","title":"work2","url":"./work2.html"},{"text":"零件組立圖 block影片補拍: bar影片補拍: resemble影片補拍: block.html bar.html resemble.html 心得 : 這次使用了solvespace繪製單一零件，最後組立起來。","tags":"Misc","title":"work1","url":"./work1.html"},{"text":"中秋連假 切換到2016fallcadp_hw的分支 cd 分支名稱 (例如:cd 2016fallcadp_hw) 回到上一個分支 cd .. 會新建一個40423254的資料夾,並把遠端資料存在裡面 git clone 倉儲網址 分支名稱 (例如:git clone https://github.com/40423254/2016fallcadp_hw.git ) 檢查分支 git branch 建立一個gh-pages名稱的分支 git branch 分支名稱 (例如:git branch gh-pages) 切換到指定的gh-pages分支 git checkout 分支名稱 (例如:git checkout gh-pages) git add -A git commit -m\" 改版內容 \" (例如:git commit -m\"add all\") 推送進端資料到遠端,並且指定推送到gh-pages的分支 git push origin 分支名稱 (例如:git push origin gh-pages) git pull 收尋該檔案名稱,並逐一確認是否刪除 git rm 檔案名稱 回到之前072e3af的版本資料 git reset --hard 版本代碼 (例如:git reset --hard 072e3af) 直接刪除所有該檔案名稱的檔案 git rm 檔案名稱 -f","tags":"Misc","title":"2016Fall Week1","url":"./2016fall-week1.html"}]};