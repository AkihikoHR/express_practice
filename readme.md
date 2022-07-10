一定確率で当たるギャンブルを繰り返した場合に少なくとも１回以上当たる確率が計算されるAPI

サーバー起動後に以下のリクエストを送信

curl -X POST -H "Content-Type: application/json" -d "{\"probability\":\"確率\",\"trial\":\"試行回数\"}" localhost:3001/winrate

probabilityのパラメーターに当たりの確率をパーセント（0~100）で入力、trialのパラメーターに試行回数(0以上)を入力すると少なくとも１回以上当たる確率が返される。

実行例

curl -X POST -H "Content-Type: application/json" -d "{\"probability\":\"2\",\"trial\":\"50\"}" localhost:3001/winrate
↓
{"probability":"2","trial":"50","result":64}

※「2%で当たるギャンブルを50回繰り返した時に少なくとも1回当たる確率は64%」の意味