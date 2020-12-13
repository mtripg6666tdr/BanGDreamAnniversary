# BanGDreamAnniversary 
BanG Dream!の記念日のデータをまとめたもの。

# リポジトリについて
各記念日データはCSVでまとめています。
CSVよりJSONの方が使いやすい場合が多いことを考えてJSONでも同じデータを利用できます。
CSVから自分でJSONに変換する場合には次のコマンドを使用します。
```$ npm run build```
NPMパッケージとして使用するならこうしてください。
```
var data = require("BanGDreamAnniversary").load();
```
あるいは、
```
import BGA from "BanGDreamAnniversary";
var data = BGA.load();
```
としてください。