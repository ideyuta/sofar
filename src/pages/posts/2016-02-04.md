---
title: "たこ焼きの単位"
date: "2016-02-04 06:53:07 (木)"
layout: post
path: "/20160204/"
---

<blockquote class="twitter-tweet" data-lang="ja"><p lang="ja" dir="ltr">ぼくです <a href="https://t.co/Cldyv7aHLe">pic.twitter.com/Cldyv7aHLe</a></p>&mdash; dasahiko okama (@moqada) <a href="https://twitter.com/moqada/status/695081962252308480">2016, 2月 4</a></blockquote>

## たこ焼きの単位

<blockquote class="twitter-tweet" data-lang="ja"><p lang="ja" dir="ltr">たこ焼きの単位初めて知りました <a href="https://t.co/dTGZSxyEcy">pic.twitter.com/dTGZSxyEcy</a></p>&mdash; くま (@waterfall7) <a href="https://twitter.com/waterfall7/status/674162301918777344">2015, 12月 8</a></blockquote>

## React Stateless Function ComponentにもPropTypesを指定できる

eslintも対応してる

https://github.com/yannickcr/eslint-plugin-react/issues/237

```js
import React from 'react';

/**
 * Hoge Function Component
 *
 * @param {Object} props - props
 * @param {string} props.title - title
 * @return {ReactElement}
 */
export default function Hoge(props: Object) {
  return <p>{props.title}</p>;
}

Hoge.propTypes = {
  title: React.PropTypes.string
};
```
