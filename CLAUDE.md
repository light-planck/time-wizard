# CLAUDE.md

このファイルは、このリポジトリで作業する際のClaude Code (claude.ai/code) への指針を提供します。

## プロジェクト概要

Time Wizardは、複数の時間区間から合計時間を計算するReactベースのWebアプリケーションです。TypeScript、Vite、そして機能ベースアーキテクチャを採用したモダンなReactパターンを使用しています。

## 必須コマンド

```bash
# 開発
pnpm dev          # 開発サーバーを起動 (http://localhost:5173)
pnpm preview      # プロダクションビルドのプレビュー

# ビルド
pnpm build        # 型チェックとビルド (Turbo経由で実行)

# コード品質
pnpm format       # Biomeでコードフォーマット
pnpm lint         # Biomeでリントと自動修正
pnpm check        # フォーマット + リントの統合チェック

# テスト
pnpm test         # Turbo経由で全テストを実行
pnpm vitest       # ウォッチモードでテスト実行
pnpm vitest run   # テストを一度だけ実行
```

## アーキテクチャ

### ディレクトリ構造
- `src/features/` - 機能ベースのモジュール（現在：時間計算）
- `src/components/` - タイプ別に整理された共有コンポーネント (ui/, layouts/, icons/)
- `src/hooks/` - グローバルなカスタムフック
- `src/lib/` - ユーティリティ関数とヘルパー

### 主要パターン
1. **機能駆動アーキテクチャ**: ビジネスロジックは `src/features/` 配下に整理
2. **カスタムフックパターン**: 複雑なロジックをフックにカプセル化 (例: `useTimeIntervals`)
3. **スキーマバリデーション**: Zodスキーマでデータ構造と検証ルールを定義
4. **コンポーネントライブラリ**: shadcn/uiのUIコンポーネントを `src/components/ui/` に配置
5. **パスエイリアス**: srcディレクトリからのインポートには `@/` を使用

### 状態管理
- Reactフックによるローカルコンポーネント状態
- Zodバリデーション付きカスタムフックによるフォーム状態管理
- localStorageによる永続化（`useLocalStorage` フック使用）

## 開発ガイドライン

### 新機能の追加
1. `src/features/` 配下に機能ディレクトリを作成
2. 必要に応じて components/, hooks/, schemas/ サブディレクトリを含める
3. データ検証用のZodスキーマを定義
4. ビジネスロジック用のカスタムフックを作成
5. shadcn/uiプリミティブを使用してUIコンポーネントを構築

### テスト
- テストファイルはソースファイルと同じ場所に配置 (*.test.ts, *.test.tsx)
- VitestとTesting Libraryを使用
- フックとコンポーネントの統合テストに注力
- 特定のテストを実行: `pnpm vitest path/to/test`

### コードスタイル
- Biomeがフォーマットとリントを処理
- プリコミットフックでコード品質を保証
- TypeScript strictモードを強制
- 既存のコードベースのパターンに従う
- Reactコンポーネントはfunction宣言を使用（arrow functionではなく）
- React.FCの代わりに、必要に応じてPropsの型注釈を使用

### UI開発
- スタイリングにはTailwind CSSユーティリティを使用
- `src/components/ui/` からshadcn/uiコンポーネントを活用
- アイコンはlucide-reactから
- Radix UIプリミティブでアクセシビリティを維持

## 重要なファイル
- `biome.json` - フォーマットとリントの設定
- `turbo.json` - ビルドパイプラインの設定
- `components.json` - shadcn/uiコンポーネントの設定
- `src/features/time/` - コアとなる時間計算機能の実装