# Fight on the Stage 投票ページ

確定したプレビューの見た目をReactに移植。画像・装飾は `public/images/fight-vote/` のSVGを使用し、選択中ラベルの文字はBIZ UDPMinchoで表示する。幅は画面に合わせて連続的に変化し、最大880px。共通ヘッダー・フッターは変更しない。

## 今年の接続設定（未設定）

今年のSupabase接続先を確認して、以下をデプロイ先または `.env.local` に設定し、再ビルドする。現在は意図的に送信を有効化していない。

```dotenv
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
NEXT_PUBLIC_FIGHT_VOTE_ENABLED=false
```

今年の接続先とテーブル設定が確定した後に `NEXT_PUBLIC_FIGHT_VOTE_ENABLED=true` にする。接続処理は既存の `src/utils/supabase/fightVoteAction.ts` を再利用する。未設定時は送信を行わず「受付準備中」を表示する。

## 昨年から引き継ぐ処理

- 3部門すべてを選択して1回で送信。
- `FightVote` テーブルの `first` = Amazing、`second` = Sweet、`last` = Star。
- 各部門の保存値は左が1、右が0。
- 通常ブラウザのみ投票可能。送信成功時だけ投票済みを保存。
- localStorageキーは今年用の `142-fight-vote-submitted`。昨年のキーには触れない。
- 投票回数の制限は昨年と同じブラウザの保存情報によるもの。別端末・保存情報削除をまたぐサーバー側の本人識別は追加しない。
- 投票期間の日時制限は追加しない。

## 実装時の確認

- 対象ページと依存ファイルのTypeScriptチェック、対象ページのESLint: 成功。
- Next.js開発サーバーでページのコンパイルと表示を確認。
- Safariで320px・390px幅、および通常のウインドウ幅で表示・選択を確認。
- 3部門未選択時の送信無効化、全選択後の有効化、接続未設定時の受付準備中表示を確認。
- 実際のDB書き込みは未実施。接続後に保存値・成功画面・再読み込み後の投票済み表示を確認する。
- 既存の共通メニューに `/limit` のReactキー重複警告あり。今回の変更対象外。
