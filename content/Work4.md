Title: work4
Date: 2017-01-07 12:20
Category: Misc
Tags: 使用導引, 創造力, 表達能力, 協同設計
Author: 40423254


利用solvespace繪製一四連桿機構，並追蹤點取得路徑。

<iframe src="https://player.vimeo.com/video/198477611" width="640" height="361" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>


<iframe src="./../data/image3/4bar.jpg" width="800"  height="800"/></iframe>


<!-- 啟動 Brython -->

<script>
window.onload=function(){
brython(1);
}
</script>

<!-- 以下實際利用  Brython 畫兩條直線 -->

<canvas id="fourbar" width="600" height="400"></canvas>

<div id="container1"></div>

<script type="text/python3">
from browser import document as doc
from browser import html
import math
# 準備繪圖畫布
canvas = doc["fourbar"]
container1 = doc['container1']
ctx = canvas.getContext("2d")

fourbar_data = open("./../data/image3/fourbar.csv").read()
fourbar_list = fourbar_data.splitlines()
#container1 <= fourbar_list[0]
# 以下可以利用 ctx 物件進行畫圖
# 先畫一條直線
ctx.beginPath()
# 設定線的寬度為 1 個單位
ctx.lineWidth = 1
# 利用 transform 將 y 座標反轉, 且 offset canvas.height
# (X scale, X skew, Y skew, Y scale, X offset, Y offset)
# 配合圖形位置進行座標轉換
ctx.transform(1, 0, 0, -1, canvas.width/2+250, canvas.height/2+100)
# 畫出 x 與 y 座標線
# 各座標值放大 8 倍
ratio = 8
'''
ctx.moveTo(0, 0)
ctx.lineTo(0, 100)
ctx.moveTo(0, 0)
ctx.lineTo(100, 0)
'''
ctx.moveTo(0, 0)
ctx.lineTo(-30*ratio, 0)
start_point = fourbar_list[0].split(",")
ctx.moveTo(float(start_point[0])*ratio, float(start_point[1])*ratio)
count = 0
for data in fourbar_list[1:]:
    point = data.split(",")
    #count = count + 1
    #container1 <= str(count) + ":" + point[0] + "," + point[1]
    #container1 <= html.BR()
    ctx.lineTo(float(point[0])*ratio, float(point[1])*ratio)
# 設定顏色為藍色, 也可以使用 "rgb(0, 0, 255)" 字串設定顏色值
ctx.strokeStyle = "blue"
# 實際執行畫線
ctx.stroke()
ctx.closePath()
</script>

心得 : 繪製一個簡單的四連桿機構，並且追蹤點，在放到excel上繪出圖形。