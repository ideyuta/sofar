---
title: Gatsby
date: "2016-01-04 08:05:07 (月)"
layout: post
readNext: ""
path: "/20160104/"
---

カンムお土産の定番 <a rel="nofollow" href="http://www.amazon.co.jp/gp/product/B007PNXIMM/ref=as_li_ss_tl?ie=UTF8&camp=247&creative=7399&creativeASIN=B007PNXIMM&linkCode=as2&tag=ideyuta-22">大辛口 柿の種</a><img src="http://ir-jp.amazon-adsystem.com/e/ir?t=ideyuta-22&l=as2&o=9&a=B007PNXIMM" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" /> を社長が買ってきた。
普通の柿の種よりも辛味が強くてクセになる。消費速度が尋常じゃない。

---

## Gatsby

静的サイトジェネレータのGatsbyが結構よさそう。

https://github.com/gatsbyjs/gatsby

```
app.js
config.toml
html.jsx
pages
|___ _template.jsx
|___ index.jsx
\___ 2016
     |___ hoge.md
     \___ fuga.md
wrappers
\___ md.jsx
```

こんな感じの基底ファイル群を作って`gatsby build`すればMDファイルからHTMLをジェネレートしてくれる。JS/Reactで書けるので個人的には扱いやすくて🙆 ただ、隠蔽されてる処理が多いため、基底ファイル群の関係がわかりにくく若干気持ち悪い（`wrappers/md.jsx`がどこからもimportされてないけど各ページのtemplateになってるとか）。

new postのようなコマンドがないので、ディレクトリとmdファイルを作成しなければならないのはちょっと手間（リサーチがあまいだけであるのかも？）。

あと、React-routerのバージョンが低いのが気になるけど、どうやら対応中っぽかった。メンテされてるのも🙆
[Upgrade to React 0.14 and React Router 1.0 #32](https://github.com/gatsbyjs/gatsby/issues/32)
