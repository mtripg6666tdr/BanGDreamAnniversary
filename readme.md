# BanGDreamAnniversary 
BanG Dream!の記念日のデータをまとめたもの。

# 概要
各記念日データはYamlでまとめています。
場所は、`data.yaml`です。
YamlよりJSONの方が使いやすい場合が多いことを考えてJSONでも同じデータを利用できます。
場所は、`dist/main.json`です。
Yamlから自分でJSONに変換する場合には次のコマンドを使用します。
```bash
$ npm run build
```
# 使用方法
使用方法は使い方によります。
## NPMパッケージとして
パッケージインストール
```
$ npm install mtripg6666tdr/BanGDreamAnniversary
```
### CommonJS
```javascript
const data = require("BanGDreamAnniversary");
```
### ESModules
```javascript
import data from "BanGDreamAnniversary";
```

## 単純データファイルとして
`data.yaml`または`dist/main.json`をGitHubから直接ダウンロードして使用できます。
## データベースとして
`https://raw.githubusercontent.com/mtripg6666tdr/BanGDreamAnniversary/master/dist/main.json`のURLからプログラム上でダウンロードして使えます。

# アップデートについて
(2023/06/23追記)
* CSVでまとめていたものをYamlに変えました。互換性を考えて、JSONの場所は変えていません。
* データ形式を変えました。
  ```ts
  { Name: string, ID: string, Month: string, Day: string }
  ```
  から、
  ```ts
  { name: string, id: number, month: number, date: number }
  ```
  になりました。
  互換性のため暫くは前のデータも含まれています。
* NPMパッケージとして使用する場合でも、`.load()`する必要がなくなりました。
