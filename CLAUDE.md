# portfolio-site

私(daiki0930)のポートフォリオサイト。GitHub Pages でホスティングしている。

公開 URL: https://daiki0930.github.io/portfolio-site/

## 技術スタック

- React 19(`babel-plugin-react-compiler` 有効)
- TypeScript 5.9
- Vite 6
- Chakra UI 2(初期カラーモード `dark`、`extendTheme` でテーマ定義)
- Tailwind CSS 4(`@tailwindcss/postcss`)
- framer-motion / react-icons
- ESLint 9 + typescript-eslint / Prettier 3

## ディレクトリ構成

```
src/
  index.css        # Tailwind エントリ
  main.tsx         # createRoot エントリ
  pages/
    Page.tsx       # ページ本体(全セクションを含む単一ファイル)
    layout.tsx     # 全体レイアウト
    providers.tsx  # ChakraProvider + テーマ
.github/workflows/deploy.yml  # GitHub Pages 自動デプロイ
vite.config.ts                # base: "/portfolio-site/" を必ず維持
```

## コマンド

| 用途       | コマンド             |
| ---------- | -------------------- |
| 開発サーバ | `npm run dev`        |
| 本番ビルド | `npm run build`      |
| Lint       | `npm run lint`       |
| プレビュー | `npm run preview`    |

## デプロイ

- `main` への push で `.github/workflows/deploy.yml` が走り、GitHub Pages へ自動デプロイされる。
- `vite.config.ts` の `base: "/portfolio-site/"` はリポジトリ名と一致させる必要がある(変更すると公開 URL のアセットパスが壊れる)。
- 手動デプロイは不要。`dist/` は生成物のため触らない。

## 開発ルール

### ブランチ運用

**main 一本運用**。個人成果物のため feature ブランチは作らない。

- 作業はすべて `main` 上で行い、push する。
- push がそのまま本番デプロイになるため、**push 前に下記のローカルチェックを必ず通すこと**(レビュアーがいない代わり)。

### push 前のローカル必須チェック

以下を順に実行し、すべて成功してから `git push` する。一つでも失敗したら push しない。

```sh
npm run lint    # ESLint
npm run build   # tsc -b && vite build(型チェック + ビルド)
```

`npm run build` 内の `tsc -b` で TypeScript の型エラーも検出される。`vite build` まで通れば本番デプロイで壊れる可能性は基本的にない。

### コミットメッセージ

Conventional Commits 風の prefix を必ず付ける。本文は日本語で OK。

- `feat:` 新機能・コンテンツ追加
- `fix:` バグ修正
- `chore:` 設定・依存関係など
- `refactor:` 振る舞いを変えないリファクタ
- `docs:` ドキュメントのみの変更
- `style:` フォーマット・整形

例: `feat: プロジェクト一覧セクションを追加`

### コードスタイル

- Prettier に従う。手動整形しない。
- Chakra UI のコンポーネントを優先利用し、必要に応じて Tailwind を併用。
- ダークモード前提のため、色指定時は `useColorMode` の値を考慮する。
