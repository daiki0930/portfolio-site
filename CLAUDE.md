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

- `main` ブランチへの push で `.github/workflows/deploy.yml` が走り、GitHub Pages へ自動デプロイされる。
- `vite.config.ts` の `base: "/portfolio-site/"` はリポジトリ名と一致させる必要がある(変更すると公開 URL のアセットパスが壊れる)。
- 手動デプロイは不要。`dist/` は生成物のため触らない。

## 開発ルール

### コミットメッセージ

Conventional Commits 風の prefix を必ず付ける。日本語本文で OK。

- `feat:` 新機能・コンテンツ追加
- `fix:` バグ修正
- `chore:` 設定・依存関係など
- `refactor:` 振る舞いを変えないリファクタ
- `docs:` ドキュメントのみの変更
- `style:` フォーマット・整形

例: `feat: プロジェクト一覧セクションを追加`

### ブランチ

- 作業ブランチは `feat/PORT-XX` 形式で切る(既存履歴に準拠)。
- `main` への直 push はせず、PR 経由でマージする。

### コードスタイル

- Prettier に従う。手動整形しない。
- Chakra UI のコンポーネントを優先利用し、必要に応じて Tailwind を併用。
- ダークモード前提のため、色指定時は `useColorMode` の値を考慮する。
