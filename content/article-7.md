---

title: "ダークモード対応も簡単に。CSS変数で実装するライト/ダークテーマ切り替え" 
date: "2025-06-19" 
tags: ["実装", "デザインシステム"] 
thumbnail: "/img/article/light-dark/light-dark1.png"
---

![記事一覧コンポーネントのStorybook表示](/img/article/light-dark/light-dark1.png)

## はじめに

最近のUIでは、**ライト／ダークテーマの切り替え対応**が当たり前になりつつあります。

### 「ダークモードを使う」と答えた理由として以下が挙げられます。
- 眼精疲労の軽減
- バッテリーの節約
- 見た目の美しさ
- ユーザーのアクセシビリティの向上

とはいえ、「スタイルを倍にするのは大変…」と思う方も多いのではないでしょうか？

この記事では、**CSS変数（カスタムプロパティ）を使ったシンプルで実用的なテーマ切り替えの実装方法**を紹介します。\
特に `:root[data-theme=light]` / `:root[data-theme=dark]` の書き方で構成し、Figmaでの設計とも親和性の高いアプローチです。

## 1. テーマ切り替えの基本構造

```scss
:root[data-theme=light] {
  --text: #03030f;
  --background: #fff;
  --btn-background: #26a0f8;
  --card-background: #f9f9f9;
  // そのほかlight用の変数群
}

:root[data-theme=dark] {
  --text: #fff;
  --background: #03030f;
  --btn-background: unset;
  --card-background: #14141a;
  // dark用の変数群
}
```

## 2. SCSSでの使用例

```scss
body {
  color: var(--text);
  background-color: var(--background);
}

.button {
  background-color: var(--btn-background);
}

.card {
  background: var(--card-background);
  border: 1px solid var(--tool-border);
}
```

## 3. 切り替えの実装方法（JS）

ボタン操作などで `document.documentElement.dataset.theme` を変更します。

```js
const toggleTheme = () => {
  const current = document.documentElement.dataset.theme;
  document.documentElement.dataset.theme = current === 'light' ? 'dark' : 'light';
}
```

## 4. テーマ設計のコツ

- SCSS変数は極力 `var(--〇〇)` に統一
- コンポーネントごとに `color`, `background`, `border` をすべてCSS変数で制御
- Figma上でも `color.black`, `color.white`, `error` など命名を統一しておくと実装とリンクしやすい

## 5. よく使う色変数サンプル

```scss
    --error: #fe5f55;
    --color-black: #000;
    --color-white: #fff;
```

これらを `var(--〇〇)` にマッピングしながら定義すると管理しやすく、テーマ単位での差し替えも容易です。

![記事一覧コンポーネントのStorybook表示](/img/article/light-dark/light-dark2.png)

## まとめ

CSS変数によるテーマ切り替えは、**設計次第で驚くほどシンプルかつスケーラブル**になります。 スタイルガイドやデザインシステムと連携しながら、**維持しやすく再利用性の高いテーマ管理**を実現しましょう。

「色の切り替えだけ」ではなく、**構造ごと切り替えることでUX全体の印象も変わる**。そんな柔軟な設計を目指していきましょう。

