# BanGDreamAnniversary 
BanG Dream!の記念日のデータをまとめたもの。

# リポジトリについて
各記念日データはCSVでまとめています。
CSVよりJSONの方が使いやすい場合が多いことを考えてJSONでも同じデータを利用できます。
CSVから自分でJSONに変換する場合には次のコマンドを使用します。
```bash
$ npm run build
```
NPMパッケージとして使用するならこうしてください。
```
$ npm install mtripg6666tdr/BanGDreamAnniversary
```
```javascript
var data = require("BanGDreamAnniversary").load();
```
あるいは、
```javascript
import BGA from "BanGDreamAnniversary";
var data = BGA.load();
```
としてください。