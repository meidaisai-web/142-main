# AGENTS.md

明大祭（第142回）公式Webサイトのリポジトリです。
人間・AIエージェントを問わず、コードを書く前にこのファイルを読んでください。

## 技術スタック

| 分類 | 内容 |
| --- | --- |
| フレームワーク | Next.js 15（App Router）/ React 19 / TypeScript（strict） |
| スタイリング | Tailwind CSS v4（`@tailwindcss/postcss`） |
| UI / アニメーション | HeroUI、framer-motion、Embla Carousel、Swiper |
| データ | Supabase（`@supabase/ssr` / `supabase-js`）、SWR |
| ホスティング | Cloudflare Workers（`@opennextjs/cloudflare`） |
| Lint | ESLint（`next/core-web-vitals` + `next/typescript`） |

## コマンド

```bash
npm run dev      # 開発サーバー
npm run build    # 本番ビルド
npm run lint     # ESLint
npm run preview  # Cloudflare 向けビルド＋プレビュー
```

- PRを出す前に `npm run lint` と `npm run build` が通ることを確認してください。
- `.env*` はコミットしません。環境変数は `.env` に置き、値をコードやドキュメントに書かないでください。

## ディレクトリ構成

```
src/
├── app/               # App Router。ルーティングとページ（page.tsx）のみ
│   ├── layout.tsx     # 全ページ共通レイアウト
│   ├── globals.css    # Tailwindのテーマトークン定義専用（下記参照）
│   ├── (footer)/      # フッター系ページ（contact / link / policy / sitemap）
│   ├── (list)/        # 一覧系ページ（alumni-list / area-list / company-list）
│   ├── stakeholders/  # 関係者向けページ
│   └── <route>/page.tsx
├── components/        # UIコンポーネント
│   ├── base/          # レイアウトの骨格（Header, Footer, PageContainer, Hamburger など）
│   ├── buttons/       # ボタン・リンク系
│   ├── texts/         # 見出し・本文・ラベルなどテキスト系
│   ├── animation/     # アニメーション系
│   ├── index/         # トップページ専用
│   ├── map/           # マップ関連
│   ├── search/        # 企画検索関連
│   └── *.tsx          # 複数ページで使う汎用コンポーネント
├── hooks/             # カスタムフック（useXxx.ts）
└── utils/
    ├── datas/         # 静的データ（お知らせ、企画、地図など）
    ├── models/        # 型定義（Type / database.types）
    ├── managers/      # ロジック（localStorage操作、集計、計算など）
    ├── supabase/      # Supabaseクライアント・サーバーアクション
    ├── dateUtils.ts   # 日付ユーティリティ
    └── fonts.tsx      # next/font の定義
public/                # 画像・SVGなどの静的ファイル
```

### 配置ルール

- **ページ専用**のコンポーネントは `components/<ページ名>/` に置く（例: `components/index/`）。**複数ページで使う**ものは `components/` 直下か役割別ディレクトリ（`base/`, `buttons/`, `texts/`）へ。
- `app/` 配下には `page.tsx` / `layout.tsx` / `not-found.tsx` などルーティングに必要なファイルだけを置き、見た目のロジックは `components/` に切り出す。
- 静的データは `utils/datas/`、型は `utils/models/`、ロジックは `utils/managers/` に分ける。コンポーネント内にデータやロジックを埋め込まない。
- Supabaseへのアクセスは `utils/supabase/` に集約し、コンポーネントから直接クエリを書かない。
- 新しいディレクトリを作る前に、既存ディレクトリに収まらないか確認する。作る場合は上記の分類に合わせる。

## 命名規則

| 対象 | 規則 | 例 |
| --- | --- | --- |
| コンポーネントファイル | PascalCase.tsx | `PageContainer.tsx` |
| フック | `use` + PascalCase.ts | `useGetElementProperty.ts` |
| ユーティリティ・データ・マネージャ | camelCase.ts | `dateUtils.ts`, `meichamManager.ts` |
| 型・インターフェース | PascalCase | `MapDataType` |
| 関数・変数 | camelCase | `isAlreadyVoted` |
| 定数 | camelCase（モジュールスコープの不変値のみ UPPER_SNAKE_CASE 可） | |
| ルートディレクトリ | kebab-case | `alumni-list` |

- 1ファイル1コンポーネントを基本とし、コンポーネントは `export default function` で定義する（既存の `FAQAccordion` のような named export がある場合は周囲に合わせる）。
- import は `@/`（`src/` 起点）のエイリアスを使う。

## コーディング規約

### TypeScript / React

- `strict` を前提とし、`any` は使わない。型は `utils/models/` に定義するか、Propsはコンポーネントと同じファイル内に `type XxxProps` で定義する。
- コンポーネントは **Server Component を既定**とする。`useState` / `useEffect` / ブラウザAPI / イベントハンドラが必要なときだけ、ファイル先頭に `"use client"` を書く。`"use client"` はできるだけ末端のコンポーネントに閉じ込める。
- 画像は `next/image`、内部リンクは `next/link` を使う。`<img>` / `<a>` は使わない。画像には必ず意味のある `alt` を付ける。
- 条件分岐の見た目は Props（boolean modifier）で制御する（例: `PageContainer` の `noPadding`）。呼び出し側で上書きを繰り返さない。
- 外部から見た目を調整したいコンポーネントは `className?: string` を受け取り、末尾に連結する。
- 日付は `utils/dateUtils.ts` の関数を使い、日本時間（JST）で扱う。
- コメントは日本語で、「何をしているか」ではなく「なぜそうしているか」を書く。

### スタイリング（重要）

**スタイリングは極力 Tailwind CSS のユーティリティクラスだけで完結させます。**

1. **基本は `className` + Tailwind ユーティリティ**
   - レイアウト・余白・色・タイポグラフィ・レスポンシブ・hover/focus・アニメーションまで Tailwind で書く。
   - 条件付きクラスはテンプレートリテラルで組み立てる。**動的に生成したクラス名（`` `w-${n}` `` など）は Tailwind に検出されないため禁止**。完全なクラス名を文字列として書く。
2. **`style` 属性は、`className` より明確なメリットがあるときだけ使う**
   - 許可される例:
     - 実行時にしか決まらない値（Propsやドラッグ・スクロール量から計算した `width` / `transform` / `left` など）
     - Tailwind の任意値（`w-[...]`）では表現できない、または動的で組み合わせが無数に出るもの
     - CSSカスタムプロパティを動的に渡す場合（`style={{ "--x": value }}`）
   - 禁止される例:
     - 固定値（`style={{ marginTop: 8 }}` → `mt-2`）
     - Tailwind で書ける静的な見た目
   - `style` を使うときは、なぜ `className` では不十分かを短くコメントで残す。
3. **`.css` ファイルは原則作らない**
   - `src/app/globals.css` は Tailwind の `@import` と `@theme`（デザイントークン）、どうしても Tailwind で表現できない共通ユーティリティの定義専用。ここ以外に `.css` / `.module.css` / `.scss` を追加しない。
   - コンポーネント単位のCSSファイル、CSS Modules、styled-components / emotion による記述は新規には追加しない。
   - `globals.css` に足してよいのは「複数箇所で使う長いグラデーション」など、Tailwind の `@theme` / `@utility` で定義して再利用する価値があるものに限る。
4. **デザイントークンを使う**
   - 色は `globals.css` の `@theme` で定義済みのもの（`primary` / `secondary` / `accent` / `text` / `background` など）を使う。`#xxxxxx` の直書きや `[#xxxxxx]` の任意値は避け、必要なら先に `@theme` に追加する。
   - 同じ値を3回以上書くなら任意値ではなくトークンまたは共通コンポーネントにする。
5. **レスポンシブ**
   - ブレークポイントは `tailwind.config.ts` の `screens`（`sm` / `md` / `ml` / `lg`）を使う。モバイルファーストで書き、`md:` `ml:` `lg:` で上書きする。
6. **共通化はコンポーネントで行う**
   - 同じクラスの羅列が複数箇所に出てきたら、`@apply` や CSS に逃がさず、React コンポーネント（`components/texts/` `components/buttons/` など）にする。
   - 既存の共通コンポーネント（`PageContainer`, `Text`, `PageTitle`, `SectionTitle`, `Button` など）があれば、それを使う。

### データ取得・Supabase

- クライアントの生成は `utils/supabase/client.ts` の `createClient` を使う。
- 書き込み・集計系は `utils/supabase/` 内の関数として切り出し、エラーは握りつぶさず呼び出し元が扱える形（戻り値の真偽など）で返す。
- ブラウザの `localStorage` を触る処理は `utils/managers/` に置き、Server Component から呼ばない。

### パフォーマンス・アクセシビリティ

- 画像は適切な `width` / `height`（または `fill` + `sizes`）を指定する。
- クリック可能な要素は `button` または `Link` を使い、`div` に `onClick` を付けない。
- アニメーションは `framer-motion` か Tailwind の `animate-*` で行う。

## Git / PR 運用

- ベースブランチは `develop`。作業は `feature/<内容>_<名前>` のブランチで行い、`develop` へ PR を出す。
- コミットメッセージは日本語で、変更内容が分かる短い文にする。
- 1つのPRでは1つの目的に絞る。無関係なリファクタや整形を混ぜない。
- `.claude/`、`.next/`、`.open-next/`、`.env*` はコミットしない。

## やってはいけないこと

- `.css` ファイルの新規作成、CSS Modules / styled-components の新規導入
- 静的な見た目のための `style` 属性
- 色・余白などのマジックナンバーの直書き（トークンがあるもの）
- `app/` 配下へのコンポーネント・ロジックの混在
- 秘密情報（APIキー、`.env` の値）のコミット・ログ出力
