# CSS コーディングルール

このプロジェクトで適用する CSS コーディング規約です。

## 単位の指定

- CSSの単位は **px** を使用する
- rem、em は使用しない

```css
/* NG */
.nav__list {
  gap: 2rem;
  padding: 1rem 0;
}

/* OK */
.nav__list {
  gap: 32px;
  padding: 16px 0;
}
```

## CSSセレクタ規則

- DOM要素名（nav, ol, section等）ではなく、**クラス名**でスタイルを指定する
- 要素セレクタの使用は避け、クラスセレクタを使用する

```css
/* NG */
nav ol {
  scroll-target-group: auto;
}

/* OK */
.nav__list {
  scroll-target-group: auto;
}
```

## BEM命名規則

クラス名は BEM（Block Element Modifier）記法を使用する。

### 形式

```
.block__element--modifier
```

### 各要素の役割

| 要素 | 説明 | 例 |
|------|------|-----|
| Block | 独立したコンポーネント | `.nav`, `.progress`, `.timeline` |
| Element | Blockの構成要素（`__`で接続） | `.nav__list`, `.nav__item`, `.nav__link` |
| Modifier | 状態やバリエーション（`--`で接続） | `.nav__link--active`, `.progress__item--completed` |

### 命名例

```css
/* Block */
.nav { }

/* Elements */
.nav__list { }
.nav__item { }
.nav__link { }

/* Modifiers */
.nav__link--active { }
```

## カラーパレット

全デモで共通のカラーパレットを使用する。`base.css` に CSS変数として定義済み。

| 変数名 | 値 | 用途 |
|--------|-----|------|
| `--color-primary` | #3223B3 | メインカラー（濃い紫） |
| `--color-secondary` | #7C71F6 | アクセント（明るい紫） |
| `--color-primary-light` | #EBE9FC | 背景（薄い紫） |
| `--color-text` | #404040 | 本文テキスト |
| `--color-text-muted` | #808080 | サブテキスト |
| `--color-border` | #D0D0D0 | ボーダー |
| `--color-white` | #ffffff | 白 |

### 使用例

```css
.nav__link:target-current {
  color: var(--color-primary);
  font-weight: bold;
}

.nav__link:target-before {
  color: var(--color-text-muted);
}

.nav__link:target-after {
  color: var(--color-secondary);
}
```
