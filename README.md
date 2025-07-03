# さくら総合病院 ホームページ

地域に愛される総合病院のホームページです。

## 技術スタック

- **React 18** - UIライブラリ
- **TypeScript** - 型安全な開発
- **Vite** - 高速ビルドツール
- **Tailwind CSS v4** - ユーティリティファーストCSS
- **Lucide React** - アイコンライブラリ
- **ShadCN/UI** - UIコンポーネント
- **Radix UI** - アクセシブルなUIプリミティブ

## 開発環境のセットアップ

### 前提条件

- Node.js 18以上
- npm または yarn

### インストール

```bash
# リポジトリをクローン
git clone <repository-url>
cd hospital-website

# 依存関係をインストール
npm install
```

### 開発サーバーの起動

```bash
npm run dev
```

ブラウザで http://localhost:5173 を開いてください。

### ビルド

```bash
npm run build
```

ビルドされたファイルは `dist` フォルダに出力されます。

### プレビュー

```bash
npm run preview
```

本番ビルドをローカルでプレビューできます。

## プロジェクト構造

```
├── src/
│   └── main.tsx          # アプリケーションのエントリーポイント
├── components/           # Reactコンポーネント
│   ├── ui/              # ShadCN/UIコンポーネント
│   └── figma/           # Figmaから生成されたコンポーネント
├── styles/
│   └── globals.css      # グローバルスタイル（Tailwind CSS v4）
├── App.tsx              # メインアプリケーションコンポーネント
└── index.html           # HTMLエントリーポイント
```

## 機能

- 🏥 病院情報の表示
- 📋 診療科目の紹介
- 👨‍⚕️ 医師・スタッフ紹介
- 🕐 診療時間・アクセス情報
- 📢 お知らせ・ニュース
- 📱 レスポンシブデザイン
- ♿ アクセシビリティ対応

## ライセンス

このプロジェクトはMITライセンスの下で公開されています。